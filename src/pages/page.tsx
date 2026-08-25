import { CreditCard, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col justify-center gap-16 p-4 lg:mx-0 lg:max-w-full lg:flex-row">
      <div className="flex justify-center gap-4 lg:hidden">
        <img
          src="/assets/images/logo.png"
          alt="Organiza Grana Logo"
          width={400}
          height={400}
          className="h-auto"
        />
      </div>

      <div className="flex text-justify lg:flex-1 lg:flex-col lg:items-center lg:justify-center">
        <div className="flex-col lg:flex lg:max-w-lg lg:gap-9">
          <div className="hidden flex-row lg:flex">
            <div className="flex flex-col gap-2">
              <h3 className="text-5xl font-bold">
                Controle seus gastos <br />
                de forma inteligente
              </h3>
              <span className="text-xl">
                Gerencie seus cartões de crédito, acompanhe suas compras e
                mantenha suas finanças em dia.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FeatureCard
              icon={<CreditCard />}
              title="Múltiplos Cartões"
              text="Cadastre seus cartões e acompanhe seus gastos"
            />

            <FeatureCard
              icon={<TrendingUp />}
              title="Análises Detalhadas"
              text="Gráficos e relatórios para entender seus gastos"
            />

            <FeatureCard
              icon={<Shield />}
              title="Alertas de Vencimento"
              text="Nunca mais esqueça de pagar sua fatura"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:gap-8">
        <div className="hidden flex-col justify-center gap-4 lg:flex">
          <img
            src="/assets/images/logo.png"
            alt="Organiza Grana Logo"
            width={300}
            height={300}
            className="h-auto"
          />

          <p className="text-center text-base">
            Organize sua vida financeira <br />
            de forma simples e eficiente
          </p>
        </div>

        <div className="flex w-full flex-col gap-2 lg:w-100 lg:gap-4">
          <Link to="/entrar">
            <Button variant="default" className="w-full cursor-pointer">
              Entrar
            </Button>
          </Link>

          <Button
            variant="outline"
            className="text-primary border-primary w-full cursor-pointer bg-white"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}
