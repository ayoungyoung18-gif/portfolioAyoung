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
  const [isLemonHovered, setIsLemonHovered] = useState(false);

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
      {/* 1. 맑고 깨끗한 정원 위에 극장식 스포트라이트 음영(Vignette) 배치 */}
      <div className="absolute inset-0 z-0 select-none w-full h-full">
        <div
          className="w-full h-full transition-all duration-[4200ms] relative"
          style={{
            clipPath: startCircle ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
            opacity: startCircle ? 1 : 0.2,
            transitionTimingFunction: "cubic-bezier(0.05, 0.95, 0.05, 1)",
          }}
        >
          {/* 전체가 100% 쨍하게 선명한 고화질 배경 사진 */}
          <img
            src={courtyardBg}
            alt="Courtyard Base"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-[0.95] contrast-[1.05]"
          />

          {/* 🛠️ [시선집중 치트키] 흐리게 번지는 블러 대신, 외곽을 은은하게 가라앉히는 극장식 암전 레이어 주입 
              레몬과 글씨 중앙 좌표(48% 53%) 주위는 조명을 켠 듯 투명하게 뚫어주고(transparent), 
              그 외곽 주변부 마당으로 갈수록 차분한 블랙 투명도(black/35)가 엠비언트 분위기를 잡아 시선을 집중시킵니다. */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle 380px at 48% 53%, transparent 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </div>

        {/* 정보창 활성화 시 배경 어둠 마감 오버레이 */}
        <div
          onClick={handleBackgroundClick}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            lemonStatus === "revealed"
              ? "bg-white/40 backdrop-blur-md cursor-pointer pointer-events-auto z-10"
              : "bg-black/5 pointer-events-none z-0"
          }`}
        />
      </div>

      {/* 2. 짚신 커서와 상호작용하는 입체 레몬 오브제 구역 */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          left: "52%",
          top: "53%",
        }}
      >
        <AnimatePresence>
          {lemonStatus === "hanging" && (
            <div className="relative">
              {/* 🛠️ 레몬을 한층 더 드라마틱하게 돋보이게 만드는 소프트 옐로우 후광 조명 광도 강화 */}
              <motion.div
                className="absolute right-[-40px] top-[-30px] w-40 h-40 rounded-full pointer-events-none filter blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(255,221,0,0.55) 0%, transparent 75%)" }}
                animate={{ opacity: [0.5, 0.95, 0.5], scale: [0.95, 1.08, 0.95] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="cursor-pointer flex flex-row-reverse items-center gap-5 group pointer-events-auto select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isCurrentActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onMouseEnter={() => setIsLemonHovered(true)}
                onMouseLeave={() => setIsLemonHovered(false)}
                onClick={handleLemonClick}
              >
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  {/* 살랑살랑 고급스러운 스윙 모션 */}
                  <motion.div
                    className="w-12 h-16 bg-[#FFD400] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-[0_15px_30px_rgba(255,212,0,0.5)] flex items-center justify-center text-2xl border-t-2 border-yellow-200"
                    animate={
                      isLemonHovered
                        ? { y: [-3, 3, -3], rotate: [-8, 8, -8], scale: 1.05 }
                        : { y: [-1, 1, -1], rotate: [-1, 1, -1] }
                    }
                    transition={
                      isLemonHovered
                        ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                        : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }
                    whileHover={{ scale: 1.12 }}
                  >
                    🍋
                  </motion.div>
                </div>

                <div className="text-right flex flex-col transition-transform duration-300 group-hover:-translate-x-1">
                  <span className="text-[14px] tracking-[0.15em] text-white font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                    상큼한 레몬을
                  </span>
                  <span className="text-[14px] tracking-[0.15em] text-white font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap mt-0.5">
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

      {/* 3. 프로젝트 정보 팝업 모달 영역 */}
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
              <header className="mb-5 flex justify-between items-start">
                <div className="text-left">
                  <span className="text-[11px] font-sans font-black tracking-[0.5em] text-[#FFD400] block uppercase drop-shadow-sm">
                    프로젝트 둘_중정
                  </span>
                  <h2 className="text-4xl font-serif mt-2 text-white font-bold drop-shadow-md">
                    다이소 본셉 비타민씨 <br /> 제품광고영상
                  </h2>
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

              <div className="text-left mb-6 text-zinc-300 text-sm leading-relaxed border-l-2 border-[#FFD400]/40 pl-4">
                <p className="font-medium text-white text-base mb-1">다이소 본셉 매스티지 리포지셔닝 캠페인</p>
                <p className="break-keep">
                  다이소 화장품의 친숙한 <span className="text-white font-bold">저가 브랜드 이미지에서 탈피</span>하여,
                  본셉 비타민C 라인의 가치를{" "}
                  <span className="text-[#FFD400] font-bold">고가 프리미엄 브랜드 수준으로 재포지셔닝</span>하는
                  매스티지 전략을 전개했습니다. 시각적 몰입감을 극대화한 시네마틱 광고 영상을 통해 소비자 인식을 바꾸는
                  뉴미디어 비디오 커머스를 유도했습니다.
                </p>
              </div>

              {/* 다이소 프리미엄 본셉 영상 비디오 플레이어 본체 */}
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-inner">
                <video src={boncepVideo} controls className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
