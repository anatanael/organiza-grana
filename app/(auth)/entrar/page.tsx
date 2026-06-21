"use client";

import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

import MobileHeader from "../_components/mobile_header";

type FormData = {
  email: string;
  password: string;
};
export default function Home() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    const emailSession = sessionStorage.getItem("loginEmail");

    if (emailSession) {
      setValue("email", emailSession);
      sessionStorage.removeItem("loginEmail");

      setTimeout(() => {
        setFocus("password");
      }, 100);
    } else {
      setFocus("email");
    }
  }, [setFocus, setValue]);

  async function handleLogin(dataForm: FormData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: dataForm.email,
      password: dataForm.password,
    });

    if (error?.code === "invalid_credentials") {
      toast.error("E-mail ou senha incorretos.");
      return;
    }

    if (error) {
      toast.error("Ocorreu um erro ao fazer login.");
      return;
    }

    toast.loading("Entrando...");
    router.push("/dashboard");
  }

  return (
    <div className="flex h-screen flex-col items-center p-4">
      <MobileHeader />

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Acesse sua conta</h1>

        <h3 className="text-lg">Gerencia suas finanças de forma simples.</h3>
      </div>

      <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-4 flex w-full flex-col gap-6">
          <Input
            label="Email"
            placeholder="usuario@email.com"
            autoComplete="on"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "E-mail inválido",
              },
            })}
            error={errors?.email?.message}
          />
          <Input
            label="Senha"
            placeholder="**********"
            autoComplete="on"
            type="password"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
            })}
            error={errors?.password?.message}
          />
        </div>

        <Link
          className="m-6 block cursor-pointer text-right"
          href="/recuperar_senha"
        >
          Esqueci a senha
        </Link>

        <Button
          variant={"default"}
          disabled={isSubmitting || !isValid}
          className="mb-6 w-full cursor-pointer"
        >
          Entrar
        </Button>

        <div className="text-center">
          <span className="block">Não possui uma conta ?</span>
          <Link className="text-primary bold cursor-pointer" href="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
