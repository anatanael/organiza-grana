"use client";

import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function MobileHeader() {
  const navigate = useNavigate();

  return (
    <div className="item-center relative mb-12 flex w-full justify-center lg:hidden">
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={32} className="-m-2" />
      </button>

      <Link to="/">
        <img
          src="/assets/images/logo.png"
          alt="Organiza Grana Logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
