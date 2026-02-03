import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

export default function AuthenticatePage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-sky-400">
      <Tabs defaultValue="login" className="w-96">
        <TabsList className="grid w-full grid-cols-2">
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
    </div>
  );
}
