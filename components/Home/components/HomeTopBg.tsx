"use client";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LocaleType } from "@/app/i18n/locales2/localeType";

export default function HomeTopBg({ lang }) {
  const [Texts, setTexts] = useState<null | LocaleType>(null);

  useEffect(() => {
    import(`@/app/i18n/locales2/${lang}/hometranslation.json`).then((data) => {
      setTexts(data);
    });
  }, [lang]);

  return (
    <div className="rounded-b-xl sm:h-[20em] h-[19em] transition-all w-full relative">
      <motion.div
        layoutId="navbarLayout"
        className="absolute w-full h-full bg-blue-600 dark:bg-zinc-900 top-0 left-0 rounded-b-xl"
      ></motion.div>

      <div className="text-white p-4 text-2xl font-bold capitalize relative top-[5.5em] transition-all">
        {Texts?.search}
      </div>
    </div>
  );
}
