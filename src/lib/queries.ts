"use server";

import { currentUser } from "@clerk/nextjs";
import { db } from "./db";
import { redirect } from "@clerk/nextjs/server";

export const getAuthUserDetails = async () => {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const userData = await db.user.findUnique({
    where: { email: user.emailAddresses[0].emailAddress },
    include: {
      Agency: {
        include: {
          SidebarOption: true,
          SubAccount: { include: { SidebarOption: true } },
        },
      },
      Permissions: true,
    },
  });
  return userData;
};

export const verifyAndAcceptInvite = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");
  const inviteExists = await db.invitation.findUnique({
    where: { email: user.emailAddresses[0].emailAddress, status: "PENDING" },
  });
  if (inviteExists) {
    const userDetails = await createTeamUser(inviteExists.agencyId, {});
  }
};

// Build team user and fix the pther error
