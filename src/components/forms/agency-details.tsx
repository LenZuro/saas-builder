"use client";

import { Agency } from "@prisma/client";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { AlertDialog } from "../ui/alert-dialog";
import { Card, CardHeader, CardTitle } from "../ui/card";

type Props = {
  data?: Partial<Agency>;
};

const AgencyDetails = ({ data }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const [deletingAgency, setDeletingAgency] = useState(false);
  return (
    <AlertDialog>
      <Card>
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
        </CardHeader>
      </Card>
    </AlertDialog>
  );
};

export default AgencyDetails;
