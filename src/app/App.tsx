import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [mainOpacity, setMainOpacity] = useState(1);

  // 🛠️ [역주행 박멸 핵심 스위치] 텔레포트 중일 때는 가로 슬라이딩 애니메이션 시간을 0초로 강제 리셋합니다.
  const [isTeleporting, setIsTeleporting] = useState(false);
  const isAnimating = useRef(false);

  const roomNames = ["소개", "한옥 도면", "사랑채", "중정 마당", "안채", "대청마루", "행랑채"];

  const handleNavigate = (index: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const totalSections = sections.length;

    // A. 행랑채 -> About (마지막에서 다음) 또는 About -> 행랑채 (첫번째에서 이전) 무한 루프 구간
    if ((currentSection === totalSections - 1 && index >= totalSections) || (currentSection === 0 && index < 0)) {
      const nextIndex = index < 0 ? totalSections - 1 : 0;

      // 1단계: 애니메이션 시간 잠금(0초 전환 준비) 및 암전 시작
      setIsTeleporting(true);
      setMainOpacity(0);

      setTimeout(() => {
        // 2단계: 암전 상태에서 눈 속임으로 좌표를 순간이동 (이때 x축 이동 시간이 0초이므로 뒤돌아가지 않음)
        setCurrentSection(nextIndex);

        setTimeout(() => {
          // 3단계: 순간이동이 끝난 직후 일반 슬라이딩 모션 시간(1.2초)을 다시 원래대로 안전 복구
          setIsTeleporting(false);
          setMainOpacity(1);
        }, 60);
      }, 300);

      // 전체 무한 루프 시퀀스가 종결될 때까지 1.2초간 추가 가드 잠금
      setTimeout(() => {
        isAnimating.current = false;
      }, 1200);
    } else {
      // B. 일반적인 옆 칸 이동 시에는 우아한 시네마 감속 슬라이딩 적용
      let nextIndex = index;
      if (index < 0) nextIndex = totalSections - 1;
      if (index >= totalSections) nextIndex = 0;

      setCurrentSection(nextIndex);

      setTimeout(() => {
        isAnimating.current = false;
      }, 1200);
    }
  };

  const sections = [
    { id: "about", component: <AboutSection currentIndex={currentSection} /> },
    { id: "blueprint", component: <BlueprintSection onNavigate={handleNavigate} currentIndex={currentSection} /> },
    { id: "sarangbang", component: <SarangbangSection currentIndex={currentSection} /> },
    { id: "courtyard", component: <CourtyardSection currentIndex={currentSection} /> },
    { id: "living", component: <LivingRoomSection currentIndex={currentSection} /> },
    { id: "computer", component: <ComputerRoomSection currentIndex={currentSection} /> },
    { id: "library", component: <LibrarySection currentIndex={currentSection} /> },
  ];

  // 휠 이벤트 감지 고도화
  useEffect(() => {
    if (!gateOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isAnimating.current || Math.abs(e.deltaY) < 40) return;

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
            animate={{
              x: `-${currentSection * 100}%`,
              opacity: mainOpacity,
            }}
            transition={{
              /* 🛠️ [역주행 방어 장치 장착] 
                  isTeleporting 상태가 활성화되는 순간 가로 이동 시간을 0초로 지워버려 
                  거꾸로 필름이 감기는 뒤돌아감 현상을 완벽하게 봉쇄합니다. */
              x: { duration: isTeleporting ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {sections.map((item) => (
              <div key={item.id} className="w-screen h-screen flex-shrink-0">
                {item.component}
              </div>
            ))}
          </motion.div>

          <QuickNavigation onNavigate={handleNavigate} currentIndex={currentSection} />

          {/* 좌측 상단 한옥 이름표 인디케이터 */}
          <div className="fixed top-8 left-8 z-30 pointer-events-none font-sans">
            <p className="text-[11px] tracking-[0.4em] font-black text-[#4A4E40]/40 uppercase select-none">
              SPACE // {roomNames[currentSection]}
            </p>
          </div>
        </motion.main>
      )}
    </div>
  );
}
