"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MobileHeader() {
  const router = useRouter();

  return (
    <div className="item-center relative mb-12 flex w-full justify-center">
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2"
        onClick={() => router.back()}
      >
        <ChevronLeft size={32} className="-m-2" />
      </button>

      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Organiza Grana Logo"
          width={100}
          height={100}
          priority
        />
      </Link>
    </div>
  );
}
