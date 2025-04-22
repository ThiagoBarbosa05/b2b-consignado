import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { listConsigned } from "./actions/list-consigned";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CountWines } from "../components/count-wines";
import { SaveCount } from "../components/save-count";
import { Dot } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id: customerId } = await params;

  const consignedList = await listConsigned(customerId);

  console.log(consignedList);

  return (
    <div>
      <h2 className="text-2xl font-bold">INSÓLITO HOTEL LTDA</h2>

      <section className="mt-6">
        <div className="space-y-5">
          {consignedList.map((consigned) => {
            return (
              <Accordion
                key={consigned.id}
                type="single"
                className="border border-border rounded-md"
                collapsible
              >
                <AccordionItem
                  value={format(consigned.createdAt, "dd 'de' MMMM  yyyy", {
                    locale: ptBR,
                  })}
                >
                  <AccordionTrigger className="p-5">
                    <div>
                      <p>
                        {format(consigned.createdAt, "dd 'de' MMMM  yyyy", {
                          locale: ptBR,
                        })}
                      </p>
                      <span className="flex mt-2 text-xs text-zinc-400 items-center gap-2">
                        <span
                          className={twMerge(
                            "size-2 rounded-full bg-yellow-600",
                            consigned.status === "CONCLUÍDO" && "bg-green-500"
                          )}
                        />
                        {consigned.status === "CONCLUÍDO" ? (
                          <span>
                            {consigned.status.toLowerCase()} em{" "}
                            {format(
                              consigned.completedIn ?? new Date(),
                              "dd 'de' MMMM  yyyy",
                              {
                                locale: ptBR,
                              }
                            )}
                          </span>
                        ) : (
                          consigned.status.toLowerCase()
                        )}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 flex flex-col items-center gap-6">
                    <Table>
                      <TableCaption>
                        Lista de vinhos do consignado.
                      </TableCaption>
                      <TableHeader className="bg-zinc-800">
                        <TableRow>
                          <TableHead>Vinho</TableHead>
                          <TableHead>País/Região</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead>Preço</TableHead>
                          <TableHead>Saldo</TableHead>
                          <TableHead>Contagem</TableHead>
                          <TableHead>A faturar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <CountWines
                          consignedStatus={consigned.status}
                          data={consigned.winesOnConsigned}
                        />
                      </TableBody>
                    </Table>
                    {consigned.status !== "CONCLUÍDO" && (
                      <SaveCount
                        consignedId={consigned.id}
                        customerId={customerId}
                      />
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </section>
    </div>
  );
}
