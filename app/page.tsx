import { CreditCard, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16 p-4">
      <div className="flex justify-center">
        <Image
          src="/assets/images/logo.png"
          alt="Organiza Grana Logo"
          width={400}
          height={400}
          className="h-auto"
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <FeatureCard
          icon={<CreditCard />}
          title="Múltiplos Cartões"
          text="Cadastre todos os seus cartões"
        />

        <FeatureCard
          icon={<TrendingUp />}
          title="Análises Detalhadas"
          text="Gráficos e relatórios"
        />

        <FeatureCard
          icon={<Shield />}
          title="Alertas de Vencimento"
          text="Nunca mais esqueça de pagar"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <Link href="/entrar">
          <Button variant="default" className="w-full cursor-pointer">
            Entrar
          </Button>
        </Link>

        <Link href="/cadastro">
          <Button variant="outline" className="w-full cursor-pointer">
            Cadastrar
          </Button>
        </Link>
      </div>
    </div>
  );
}
