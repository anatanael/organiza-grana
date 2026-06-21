"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

import MobileHeader from "../_components/mobile_header";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>();

  const handleSignup = async (data: FormData) => {
    const { name, email, password } = data;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast.error("E-mail já cadastrado.");
          setFocus("email");
        } else {
          toast.error("Ocorreu um erro ao criar a conta. Tente novamente.");
        }

        return;
      }

      toast.success("Conta criada com sucesso! Redirecionando para o login...");

      sessionStorage.setItem("loginEmail", email);
      setTimeout(() => {
        router.push("/entrar");
      }, 2000);
    } catch {
      toast.error("Ocorreu um erro inesperado.");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center p-4">
      <MobileHeader />

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Crie sua conta</h1>

        <h3 className="text-lg">Comece a organizar suas finanças.</h3>
      </div>

      <form className="w-full" onSubmit={handleSubmit(handleSignup)}>
        <div className="mb-6 flex w-full flex-col gap-6">
          <Input
            {...register("name", {
              required: "Nome é obrigatório",
              minLength: {
                value: 3,
                message: "Nome deve ter pelo menos 3 caracteres",
              },
            })}
            placeholder="Nome"
            label="Nome"
            error={errors?.name?.message}
          />

          <Input
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "E-mail inválido",
              },
            })}
            error={errors?.email?.message}
            placeholder="usuario@email.com"
            label="E-mail"
            type="email"
          />

          <Input
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
            })}
            error={errors?.password?.message}
            placeholder="**********"
            label="Senha"
            type="password"
            autoComplete="new-password"
          />

          <Input
            {...register("confirmPassword", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
              validate: (value) => {
                const password = getValues("password");

                if (value !== password) {
                  return "As senhas devem ser iguais";
                }
              },
            })}
            error={errors?.confirmPassword?.message}
            placeholder="**********"
            label="Confirmar Senha"
            type="password"
            autoComplete="new-password"
          />
        </div>

        <Button
          variant="default"
          className="mb-6 w-full cursor-pointer"
          disabled={isSubmitting || !isValid}
        >
          Criar conta
        </Button>

        <div className="text-center">
          <span className="block">Já possui uma conta ?</span>
          <Link className="text-primary bold cursor-pointer" href="/entrar">
            Entrar
          </Link>
        </div>
      </form>
    </div>
  );
}
