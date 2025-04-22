"use client";

import { useWineCountStore } from "@/app/store/wine-count-store";
import { saveCount } from "../[id]/actions/save-count";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { LoaderCircle } from "lucide-react";

interface SaveCountProps {
  consignedId: string;
  customerId: string;
}

export function SaveCount({ consignedId, customerId }: SaveCountProps) {
  const [isPending, startTransition] = useTransition();
  const { quantities } = useWineCountStore();

  async function handleSubmitCount() {
    const winesCounted = Object.entries(quantities).map(([wineId, count]) => ({
      wineId,
      count,
      consignedId,
    }));

    startTransition(async () => {
      const result = await saveCount(winesCounted, customerId);
      if (result?.status !== "ERROR") {
        localStorage.removeItem("wine-count-storage");
      }
    });
  }

  return (
    <Button
      disabled={isPending}
      onClick={handleSubmitCount}
      className="w-[20%] cursor-pointer"
    >
      {isPending ? <LoaderCircle className="animate-spin h-5 w-5" /> : "Enviar"}
    </Button>
  );
}
