import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Word = ({ children }) => {
  const words = children?.split(" ");
  const text_1_ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text_1_ref,
    offset: ["start .7", "start .25"],
  });

  return (
    <span ref={text_1_ref} className="w-full gap-y-[12px] gap-x-[6px] flex flex-wrap items-center">
      {words?.map((word, index) => {
        return (
          <OpacityText
            words={words}
            word={word}
            index={index}
            key={index}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </span>
  );
};

const OpacityText = ({ index, words, word, scrollYProgress }) => {
  const start = index / words?.length;
  const end = start + 1 / words?.length;
  const opacityonScroll = useTransform(scrollYProgress, [start, end], [0, 1]);
  return (
    <span className="relative">
      <span className="absolute w-full opacity-[.1]">{word}</span>
      <motion.span
        style={{
          opacity: opacityonScroll,
          transition: "all .2s",
        }}
        className="w-full"
      >
        {word === " " ? "\u00A0" : word}
      </motion.span>
    </span>
  );
};

export default Word;
