"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

import MobileHeader from "../_components/mobile_header";

type FormData = {
  password: string;
  confirmPassword: string;
};

export default function Home() {
  const router = useRouter();
  const [loadingPage, setLoadingPage] = useState(true);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>();

  useEffect(() => {
    async function verifyToken() {
      await supabase.auth.signOut();

      const token_hash = new URLSearchParams(window.location.search).get(
        "token_hash",
      );

      if (!token_hash) {
        router.push("/entrar");
        return;
      }

      const { error, data } = await supabase.auth.verifyOtp({
        token_hash,
        type: "recovery",
      });

      if (error) {
        router.push("/entrar");
        return;
      }

      setEmail(data?.user?.email || "usuario@email.com");
      setLoadingPage(false);
    }

    verifyToken();
  }, [router]);

  async function handleChangePassword(data: FormData) {
    const { password } = data;

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      toast.error("Ocorreu um erro ao atualizar a senha.");
      return;
    }

    toast.success(
      "Senha atualizada com sucesso! Redirecionando para o login...",
    );
    setTimeout(() => {
      router.push("/entrar");
    }, 2000);
  }

  return (
    !loadingPage && (
      <div className="flex h-screen flex-col items-center p-4">
        <MobileHeader />

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Redefinir Senha</h1>

          <h3 className="text-lg">
            Você esta redefinindo a senha da conta <br />
            <span>{email}</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={handleSubmit(handleChangePassword)}>
          <div className="mb-6 flex w-full flex-col gap-6">
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
            className="w-full cursor-pointer"
            disabled={isSubmitting || !isValid}
          >
            Redefinir senha
          </Button>
        </form>
      </div>
    )
  );
}
