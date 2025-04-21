import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { listConsigned } from "./actions/list-consigned";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { CountWines } from "../components/count-wines";
import { SaveCount } from "../components/save-count";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id: consignedId } = await params;

  const consignedList = await listConsigned(consignedId);

  return (
    <div>
      <h2 className="text-2xl font-bold">INSÓLITO HOTEL LTDA</h2>

      <section className="mt-6">
        <div>
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
                        <CountWines data={consigned.winesOnConsigned} />
                      </TableBody>
                    </Table>
                    <SaveCount />
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
