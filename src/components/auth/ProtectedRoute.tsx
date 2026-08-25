"use client";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { supabase } from "@/lib/supabase/client";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/entrar");
        return;
      }

      setLoading(false);
    }

    checkAuth();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
}
