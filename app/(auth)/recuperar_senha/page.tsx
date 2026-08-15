"use client";

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

import MobileHeader from "../_components/mobile_header";

import SvgComponent from "./Icon";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleResetPassword() {
    if (!email) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/nova_senha`,
      });

      if (error) {
        toast.error("Erro ao enviar email de recuperação.");
        return;
      }

      toast.success(
        "Se o e-mail estiver cadastrado, um link de recuperação foi enviado.",
      );
    } catch {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen flex-col items-center p-4 lg:flex-row">
      <MobileHeader />

      <div className="hidden h-full flex-1 flex-col items-center justify-center gap-8 text-lg lg:flex">
        <SvgComponent width={500} height={400} className="-scale-x-100" />
      </div>

      <div className="flex w-full max-w-lg flex-1 flex-col items-center lg:max-w-none">
        <div
          className="mb-12 hidden cursor-pointer lg:flex"
          onClick={() => router.push("/")}
        >
          <Image
            src="/assets/images/logo.png"
            alt="Organiza Grana Logo"
            width={280}
            height={280}
            className="h-auto"
            priority
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-bold">Recuperar Senha</h1>

          <h3 className="text-lg">
            Informar seu e-mail para receber um código.
          </h3>
        </div>

        <div className="w-full lg:max-w-lg">
          <div className="mb-6 flex w-full flex-col gap-6">
            <Input
              label="Email"
              placeholder="usuario@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button
            variant="default"
            className="w-full cursor-pointer"
            onClick={handleResetPassword}
            disabled={loading}
          >
            Enviar código
          </Button>
        </div>
      </div>
    </div>
  );
}
