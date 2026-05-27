import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import courtyardBg from "../../../assets/images/garden1.jpg";

import boncepVideo from "../../../assets/video/boncep.mp4";
import planDoc1 from "../../../assets/docs/plan1.pdf";
import planDoc2 from "../../../assets/docs/plan2.pdf";

interface CourtyardSectionProps {
  currentIndex?: number;
}

export default function CourtyardSection({ currentIndex }: CourtyardSectionProps) {
  const [lemonStatus, setLemonStatus] = useState("hanging");
  const [startCircle, setStartCircle] = useState(false);

  const MY_SECTION_INDEX = 3;
  const isCurrentActive = currentIndex === MY_SECTION_INDEX;

  useEffect(() => {
    if (isCurrentActive) {
      const timer = setTimeout(() => {
        setStartCircle(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setStartCircle(false);
    }
  }, [isCurrentActive]);

  const handleLemonClick = () => {
    if (lemonStatus === "hanging") {
      setLemonStatus("falling");
      setTimeout(() => setLemonStatus("revealed"), 800);
    }
  };

  const handleBackgroundClick = () => {
    if (lemonStatus === "revealed") {
      setLemonStatus("hanging");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans bg-[#FDFCF0]">
      <div className="absolute inset-0 z-0 select-none">
        <div
          className="w-full h-full transition-all"
          style={{
            clipPath: startCircle ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
            opacity: startCircle ? 1 : 0.3,
            transitionDuration: startCircle ? "4200ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.05, 0.95, 0.05, 1)",
          }}
        >
          <img src={courtyardBg} alt="Courtyard" className="w-full h-full object-cover pointer-events-none" />
        </div>

        <div
          onClick={handleBackgroundClick}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            lemonStatus === "revealed"
              ? "bg-white/40 backdrop-blur-md cursor-pointer pointer-events-auto z-10"
              : "bg-black/10 backdrop-blur-[0.5px] pointer-events-none z-0"
          }`}
        />
      </div>

      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: "52%",
          top: "57%",
        }}
      >
        <AnimatePresence>
          {lemonStatus === "hanging" && (
            <div className="relative">
              <motion.div
                className="absolute right-[-20px] top-[-10px] w-24 h-24 rounded-full pointer-events-none filter blur-xl"
                style={{ background: "radial-gradient(circle, rgba(255,212,0,0.3) 0%, transparent 70%)" }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="cursor-pointer flex flex-row-reverse items-center gap-5 group pointer-events-auto select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isCurrentActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={handleLemonClick}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-1 h-4 bg-green-800/40 mx-auto mb-[-4px] rounded-full" />
                  <motion.div
                    className="w-10 h-14 bg-[#FFD400] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_15px_30px_rgba(255,212,0,0.35)] flex items-center justify-center text-xl border-t-2 border-yellow-200"
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    🍋
                  </motion.div>
                </div>

                <div className="text-right flex flex-col transition-transform duration-3xl group-hover:-translate-x-1">
                  <span className="text-[13px] tracking-[0.15em] text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,1)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
                    상큼한 레몬을
                  </span>
                  <span className="text-[13px] tracking-[0.15em] text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,1)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap mt-0.5">
                    직접 수확해보세요 ➔
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {lemonStatus === "falling" && (
          <motion.div
            className="text-4xl"
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: 600,
              rotate: 360,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: "circIn" }}
          >
            🍋
          </motion.div>
        )}
      </div>

      <div className="relative z-30 w-full max-w-5xl px-10 pointer-events-none">
        <AnimatePresence>
          {lemonStatus === "revealed" && (
            <motion.div
              style={{ backgroundColor: "#000000" }}
              className="border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.9)] rounded-3xl p-10 ml-auto max-w-2xl select-none pointer-events-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50, transition: { duration: 0.5, ease: "easeIn" } }}
              transition={{ duration: 0.8 }}
            >
              <header className="mb-6 flex justify-between items-start">
                <div className="text-left">
                  <span className="text-[11px] font-sans font-black tracking-[0.5em] text-[#FFD400] block uppercase drop-shadow-sm">
                    Project 02 / Space 02
                  </span>
                  <h2 className="text-4xl font-serif mt-2 text-white font-bold drop-shadow-md">중정: 비타민 충전</h2>
                </div>

                <div className="flex gap-2">
                  <a
                    href={planDoc1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white/10 hover:bg-[#FFD400] text-white hover:text-black border border-white/10 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors"
                  >
                    브랜드전략서 ↗
                  </a>
                  <a
                    href={planDoc2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white/10 hover:bg-[#FFD400] text-white hover:text-black border border-white/10 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors"
                  >
                    영상기획서 ↗
                  </a>
                </div>
              </header>

              <div className="space-y-6 text-left">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10">
                  <video className="w-full h-full object-cover" src={boncepVideo} controls playsInline />
                </div>

                <div className="space-y-5">
                  <p className="text-[15.5px] leading-relaxed text-gray-100 font-normal tracking-wide break-keep drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    가성비의 대명사인 다이소의 '본셉 비타씨' 라인을{" "}
                    <span className="text-[#FFD400] font-bold underline underline-offset-4 decoration-white/20">
                      고가의 하이엔드 스킨케어로 재해석하여 프리미엄 광고 영상을 기획
                    </span>
                    했습니다. 익숙한 공간에서 발견하는 뜻밖의 럭셔리 비타민 충전을 시각화하여 제품 포지셔닝을 완전히
                    바꿨습니다.
                  </p>
                  <p className="text-[15.5px] leading-relaxed text-gray-100 font-normal tracking-wide break-keep drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    동결건조 공법을 강조한 '동결 건조 더블샷 앰플 키트'를 중심으로 '비타씨 크림'과 '미백샷 바디괄사
                    세럼' 3종을 고급스러운 에스테틱 무드로 연출했습니다. 마치 고급 스파 중정에 상큼한 레몬향기를 살짝
                    주는 것처럼 브랜드가 전하는 감각적인 비타민 충전의 순간을 완벽하게 담아냈습니다.
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-3 pt-2">
                  {["기획", "디자인", "편집", "사운드"].map((label, i) => (
                    <div
                      key={i}
                      className="bg-white/10 py-2.5 rounded-full border border-white/10 text-center shadow-inner"
                    >
                      <p className="text-xs font-semibold text-white tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
