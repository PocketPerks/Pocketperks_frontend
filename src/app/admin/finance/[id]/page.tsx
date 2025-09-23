"use client";

import { use } from "react";
import FinanceDetail from "@/components/admin/FinanceDetail";

export default function FinancePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); 

  return <FinanceDetail companyId={id} />;
}
