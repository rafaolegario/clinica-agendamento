import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/dist/server/request/headers";

export default async function AuthenticatePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Left side - Branding */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 p-12 lg:flex lg:w-1/2">
        <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:20px_20px]" />
        <div className="relative z-10">
          <Link
            href="/"
            className="text-3xl font-bold text-white transition-opacity hover:opacity-90"
          >
            MediAgenda
          </Link>
          <p className="mt-2 text-blue-100">
            Sistema de Agendamento Inteligente
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl leading-tight font-bold text-white">
            Gerencie sua clínica com eficiência
          </h2>
          <p className="text-lg text-blue-100">
            Simplifique o agendamento de consultas, organize pacientes e otimize
            o tempo dos seus profissionais de saúde.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Agenda Online</h3>
                <p className="text-sm text-blue-100">
                  Acesso 24/7 para seus pacientes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Gestão de Horários</h3>
                <p className="text-sm text-blue-100">
                  Reduza faltas e otimize a agenda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Relatórios Completos
                </h3>
                <p className="text-sm text-blue-100">
                  Insights para seu negócio crescer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-blue-100">
          © 2026 MediAgenda. Todos os direitos reservados.
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              MediAgenda
            </Link>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="login" className="cursor-pointer">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="cursor-pointer">
                Criar conta
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <SignUpForm />
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
