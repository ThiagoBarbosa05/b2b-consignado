"use client";
import { Input } from "@/app/components/ui/input";
import { TableCell, TableRow } from "@/app/components/ui/table";
import { useWineCountStore } from "@/app/store/wine-count-store";
import { twMerge } from "tailwind-merge";

interface WineType {
  id: string;
  name: string;
}

interface Wine {
  id: string;
  name: string;
  region: string | null;
  country: string | null;
  price: number;
  typeId: string;
  type: WineType;
}

interface WineOnConsigned {
  wines: Wine;
  count: number | null;
  consignedId: string;
  wineId: string;
  balance: number;
}

type WinesOnConsigned = {
  data: WineOnConsigned[];
};

export function CountWines({ data }: WinesOnConsigned) {
  const { setQuantity, quantities } = useWineCountStore();

  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleChange(id: string, value: number) {
    setQuantity(id, value);
  }

  console.log(quantities);

  return (
    <>
      {data.map(({ wines, wineId, balance, count }) => (
        <TableRow key={wineId}>
          <TableCell className="font-medium">{wines.name}</TableCell>
          <TableCell>{`${wines.country} - ${wines.region}`}</TableCell>
          <TableCell className="capitalize">{wines.type.name}</TableCell>
          <TableCell>{formatCurrency.format(wines.price / 100)}</TableCell>
          <TableCell>{balance}</TableCell>
          <TableCell>
            <Input
              type="number"
              className="max-w-[80px] text-center"
              defaultValue={quantities[wineId] ?? count}
              onChange={(e) => handleChange(wineId, Number(e.target.value))}
            />
          </TableCell>
          <TableCell
            className={twMerge(
              balance - (quantities[wineId] ?? count) < 0 && "text-destructive"
            )}
          >
            {balance - (quantities[wineId] ?? count)}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
