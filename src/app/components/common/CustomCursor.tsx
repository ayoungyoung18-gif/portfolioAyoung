import { motion, useMotionValue, useSpring } from "motion/react"; // 혹은 "framer-motion"
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isClicked, setIsClicked] = useState(false);

  const springConfig = { stiffness: 800, damping: 35, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      // 1. className에서 z-[9999]를 지우고 style 객체로 옮기는 것이 더 확실합니다.
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: "difference",
        zIndex: 999999, // <--- 2. 여기 숫자를 엄청 크게 수정! (return 안의 style 영역)
      }}
    >
      <motion.div
        animate={{
          scale: isClicked ? 0.8 : 1,
          rotateY: [0, 60, 0],
        }}
        transition={{
          rotateY: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
        }}
        className="relative w-12 h-12"
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://w3.org">
          <path d="M50 50 C20 0 5 30 10 65 C15 85 45 75 50 50Z" fill="#FFEF91" stroke="#000000" strokeWidth="4" />
          <path d="M50 50 C80 0 95 30 90 65 C85 85 55 75 50 50Z" fill="#FFEF91" stroke="#000000" strokeWidth="4" />
          <path d="M30 40 Q40 50 48 55 M70 40 Q60 50 52 55" stroke="#000000" strokeWidth="2" opacity="0.8" />
          <path d="M20 55 Q35 60 48 62 M80 55 Q65 60 52 62" stroke="#000000" strokeWidth="2" opacity="0.6" />
          <circle cx="15" cy="55" r="2" fill="white" />
          <circle cx="85" cy="55" r="2" fill="white" />
          <rect x="47" y="40" width="6" height="30" rx="3" fill="#000000" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
