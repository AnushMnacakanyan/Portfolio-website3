import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-50">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-[color:var(--color-dark)] animate-[spin_8s_linear_infinite]" />

        <Link
          href="mailto:abcd@gmail.com"
          className="flex items-center justify-center
           absolute left-1/2 -translate-x-1/2 -taranslate-y-1/2 bg-dark
            text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
