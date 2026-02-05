"use client";

import { createClinic } from "@/actions/create-clinic";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const clinicFormSchema = z.object({
  name: z.string().min(1, { message: "Nome da clínica é obrigatório" }),
});

export default function ClinicForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof clinicFormSchema>>({
    resolver: zodResolver(clinicFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof clinicFormSchema>) => {
    try {
      await createClinic(values);
      toast.success("Clínica adicionada com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao adicionar clínica. Tente novamente.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Clínica</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome da clínica" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          Adicionar
        </Button>
      </form>
    </Form>
  );
}
