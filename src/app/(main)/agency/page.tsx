import { getAuthUserDetails, verifyAndAcceptInvite } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { Plan } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  const agencyId = await verifyAndAcceptInvite();
  console.log(agencyId);
  // Get user info
  const user = await getAuthUserDetails();
  if (agencyId) {
    if (user?.role === "SUBACCOUNT_GUEST" || user?.role === "SUBACCOUNT_USER") {
      return redirect("/subaccount");
    } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
      if (searchParams.plan) {
        return redirect(
          `/agency/${agencyId}/billing?plan=${searchParams.plan}`,
        );
      }
      if (searchParams.state) {
        const statePath = searchParams.state.split("__")[0];
        const stateAgencyId = searchParams.state.split("___")[1];
        if (!stateAgencyId) return <div>Not Authorized</div>;
        return redirect(
          `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`,
        );
      }
    }
  }

  return <div>Agency</div>;
};

export default Page;
