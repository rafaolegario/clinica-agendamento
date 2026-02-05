import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2 } from "lucide-react";
import ClinicForm from "./component/form";

export default function ClinicFormPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-500 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="items-center text-center">
            <div className="bg-primary/10 mb-2 flex size-12 items-center justify-center rounded-full">
              <Building2 className="text-primary size-6" />
            </div>
            <CardTitle className="text-xl">Adicionar Clínica</CardTitle>
            <CardDescription>
              Adicione uma clínica para continuar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ClinicForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
