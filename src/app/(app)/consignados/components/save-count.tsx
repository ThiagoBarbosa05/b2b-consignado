"use client";

import { Button } from "@/app/components/ui/button";
import { useWineCountStore } from "@/app/store/wine-count-store";
import { saveCount } from "../[id]/actions/save-count";

export function SaveCount() {
  const { quantities } = useWineCountStore();

  async function handleSubmitCount() {
    const winesCounted = Object.entries(quantities).map(([wineId, count]) => ({
      wineId,
      count,
    }));

    await saveCount(winesCounted);
  }

  console.log(quantities);

  return (
    <Button onClick={handleSubmitCount} className="w-[20%] cursor-pointer">
      Enviar
    </Button>
  );
}
