"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface PropsMobileHeader {
  title: React.ReactNode;
}

export default function MobileHeader({ title }: PropsMobileHeader) {
  const router = useRouter();

  return (
    <div className="item-center relative mb-12 flex w-full justify-center">
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2"
        onClick={() => router.back()}
      >
        <ChevronLeft size={32} className="-m-2" />
      </button>

      {title}
    </div>
  );
}
