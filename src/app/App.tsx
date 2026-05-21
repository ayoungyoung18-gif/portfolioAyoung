import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // motion/react 대신 표준 패키지로 정돈
import GateOpening from "./components/GateOpening";
import QuickNavigation from "./components/QuickNavigation";
import AboutSection from "./components/sections/AboutSection";
import BlueprintSection from "./components/sections/BlueprintSection";
import SarangbangSection from "./components/sections/SarangbangSection";
import CourtyardSection from "./components/sections/CourtyardSection";
import LivingRoomSection from "./components/sections/LivingRoomSection";
import ComputerRoomSection from "./components/sections/ComputerRoomSection";
import LibrarySection from "./components/sections/LibrarySection";
import CustomCursor from "./components/common/CustomCursor";

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const isAnimating = useRef(false);

  // 섹션 이동 함수 (무한 루프 적용)
  const handleNavigate = (index: number) => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    // 마지막 페이지에서 다음으로 가면 0(About)으로, 첫 페이지에서 이전으로 가면 마지막으로 이동
    let nextIndex = index;
    if (index < 0) {
      nextIndex = sections.length - 1;
    } else if (index >= sections.length) {
      nextIndex = 0;
    }

    setCurrentSection(nextIndex);

    // 애니메이션 전환 시간(1.2초) 동안 추가 입력 방지
    setTimeout(() => {
      isAnimating.current = false;
    }, 1200);
  };

  // ✨ [연동 성공] 중정(CourtyardSection) 컴포넌트에 현재 활성화된 섹션 상태값(currentSection)을 정밀 주입했습니다.
  const sections = [
    { id: "about", component: <AboutSection /> },
    {
      id: "blueprint",
      component: <BlueprintSection onNavigate={handleNavigate} />,
    },
    { id: "sarangbang", component: <SarangbangSection /> },
    {
      id: "courtyard",
      component: <CourtyardSection currentIndex={currentSection} />, // 🔗 여기에 currentIndex 상태를 안전하게 전달했습니다.
    },
    { id: "living", component: <LivingRoomSection /> },
    { id: "computer", component: <ComputerRoomSection /> },
    { id: "library", component: <LibrarySection /> },
  ];

  // 휠 이벤트 감지
  useEffect(() => {
    if (!gateOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current) return;

      if (e.deltaY > 0) {
        handleNavigate(currentSection + 1);
      } else if (e.deltaY < 0) {
        handleNavigate(currentSection - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [gateOpen, currentSection]);

  // 키보드 제어
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gateOpen || isAnimating.current) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNavigate(currentSection + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") handleNavigate(currentSection - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, gateOpen]);

  return (
    <div className="relative w-screen h-screen overflow-hidden cursor-none bg-[#FDFCF0]">
      <style>{`
        * { cursor: none !important; }
      `}</style>

      <CustomCursor />

      <AnimatePresence>{!gateOpen && <GateOpening onComplete={() => setGateOpen(true)} />}</AnimatePresence>

      {gateOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {/* 슬라이딩 컨테이너 */}
          <motion.div
            className="flex h-full w-full"
            animate={{ x: `-${currentSection * 100}%` }}
            transition={{
              duration: 1.2,
              ease: [0.32, 0, 0.67, 0],
            }}
          >
            {sections.map((item) => (
              <div key={item.id} className="w-screen h-screen flex-shrink-0">
                {item.component}
              </div>
            ))}
          </motion.div>

          <QuickNavigation onNavigate={handleNavigate} currentIndex={currentSection} />

          <div className="fixed top-8 left-8 z-30 pointer-events-none">
            <p className="text-[10px] tracking-[0.5em] font-black text-black/20 uppercase">H-0{currentSection + 1}</p>
          </div>
        </motion.main>
      )}
    </div>
  );
}
