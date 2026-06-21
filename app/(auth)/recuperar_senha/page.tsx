"use client";

import { useState } from "react";

import { toast } from "sonner";

import Input from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";

import MobileHeader from "../_components/mobile_header";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="flex h-screen flex-col items-center p-4">
      <MobileHeader />

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Recuperar Senha</h1>

        <h3 className="text-lg">Informar seu e-mail para receber um código.</h3>
      </div>

      <div className="w-full">
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
  );
}
