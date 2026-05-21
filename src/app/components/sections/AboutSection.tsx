import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImageWithFallback } from "../common/ImageWithFallback";
import about1 from "../../../assets/images/about1.jpg";

export default function AboutSection() {
  // ✨ [반전 브랜딩 인터랙션] 로브나시 호버/클릭 시 시나브로 반전 상태 제어
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden bg-black font-sans">
      {/* 1. 배경 레이어 */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback src={about1} className="w-full h-full object-cover brightness-[0.95] contrast-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* 2. 전체 레이아웃 컨테이너 */}
      <div className="relative z-20 w-full max-w-7xl px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* [왼쪽: 메인 타이포그래피 - 반전 링크 인터랙션 구현] */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            className="cursor-pointer select-none group relative py-4"
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
            onClick={() => setIsRevealed((prev) => !prev)} // 모바일 터치 대응
            whileHover={{ scale: 1.02 }}
          >
            {/* ✨ [팝업 위치 상단 이동] 기존 글씨를 방해하지 않도록 bottom-full 세팅 */}
            <AnimatePresence>
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 bottom-full mb-2 w-80 sm:w-85 bg-[#1A1A1A]/95 backdrop-blur-md p-5 rounded-md border border-[#FFD400]/30 shadow-2xl text-left z-50 pointer-events-none"
                >
                  <p className="text-[12.5px] leading-relaxed text-gray-200 font-light break-keep">
                    이국적인 울림을 가진 <span className="text-[#FFD400] font-bold">‘로브나시’</span>는 사실 순우리말인{" "}
                    <span className="text-[#FFD400] font-bold">‘시나브로’</span>를 거꾸로 뒤집어 배열한 아나그램
                    네이밍입니다.
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-gray-400 font-light break-keep mt-2 border-t border-white/5 pt-2">
                    모르는 사이에 조금씩 스며드는 ‘시나브로’의 뜻처럼, 자극적이지 않지만 소비자의 일상 속에 깊숙이
                    스며들어 영원히 기억되는 마케팅을 하겠다는 본질적 다짐을 담고 있습니다.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 자막 상단 작은 안내 팁 */}
            <span className="text-[9px] tracking-[0.3em] text-[#E8A398] font-bold block mb-3 uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              {isRevealed ? "The Hidden Meaning" : "Hover or Click to reveal"}
            </span>

            <AnimatePresence mode="wait">
              {!isRevealed ? (
                /* 기본 상태: 로브나시 */
                <motion.div
                  key="rovenasi"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1
                    className="text-6xl md:text-[100px] font-black leading-none text-white tracking-tighter mb-2"
                    style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))" }}
                  >
                    로브나시
                  </h1>
                  <h2
                    className="text-3xl md:text-[60px] font-black leading-none text-transparent uppercase"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
                      letterSpacing: "0.2em",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
                    }}
                  >
                    ROVENASI
                  </h2>
                </motion.div>
              ) : (
                /* 반전 상태: 시나브로 */
                <motion.div
                  key="sinavro"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1
                    className="text-6xl md:text-[100px] font-black leading-none text-[#FFD400] tracking-tighter mb-2"
                    style={{ filter: "drop-shadow(0 10px 20px rgba(255,212,0,0.3))" }}
                  >
                    시나브로
                  </h1>
                  <h2
                    className="text-3xl md:text-[60px] font-black leading-none text-transparent uppercase"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255,212,0,0.9)",
                      letterSpacing: "0.2em",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                    }}
                  >
                    SINAVRO
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 space-y-4"
          >
            <p className="text-[#E8A398] text-xs md:text-sm tracking-[0.5em] font-bold uppercase drop-shadow-md">
              Brand Marketer Portfolio
            </p>
            <div className="text-white text-lg md:text-2xl font-bold tracking-tight leading-snug drop-shadow-lg">
              한국적인 것을 재해석하여
              <br />
              한국뿐 아니라 세계적으로 알리고 싶은
              <p className="mt-1">브랜드마케터 한아영입니다.</p>
            </div>
          </motion.div>
        </div>

        {/* [오른쪽: 기획 의도 노트 (Premium Archive Card)] */}
        <motion.div
          className="max-w-md bg-black/50 backdrop-blur-xl p-8 rounded-sm border border-white/10 text-white shadow-2xl text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.4em] text-[#E8A398] font-bold uppercase block mb-1">
              Concept Note
            </span>
            <h3 className="text-2xl font-serif">무계정사길 : 무계원</h3>
          </div>

          <div className="space-y-5 text-[13.5px] leading-relaxed font-light text-white/90 break-keep">
            {/* 2) 공간적 배경과 마케팅 철학 연결 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#E8A398] mb-1">
                Marketing Philosophy
              </h4>
              <p>
                직접 렌즈에 담아낸 부암동 무계원의 풍경처럼, 안과 밖이 경계 없이 유연하게 연결되고 햇살이 조용히
                스며드는 마케팅을 지향합니다. 인위적인 자극 대신 브랜드 본연의 헤리티지를 전달합니다.
              </p>
            </div>

            {/* 3) 궁극적으로 지향하는 가치 */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#E8A398] mb-1">Core Value</h4>
              <p>
                가장 아늑한 안식처인 <strong>'집'</strong>처럼 사람들의 삶과 일상 속에 거부감 없이 녹아들어, 한국 고유의
                미학과 로컬 정체성이 지닌 힘을 글로벌 무대 위에 단단하게 뿌리내리게 만듭니다.
              </p>
            </div>
          </div>

          {/* 하단 저작권/촬영 표기만 유지 */}
          <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
            <span className="text-[10px] font-serif italic text-white/40">Captured by Han A-young</span>
          </div>
        </motion.div>
      </div>

      {/* ✨ [우측 하단 독립된 스크롤 안내 영역] */}
      <motion.div 
        className="absolute right-12 bottom-12 z-30 hidden lg:flex items-center gap-4 pointer-events-none select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* 마우스 휠 애니메이션 아이콘 */}
        <div className="w-5 h-8 border-2 border-[#E8A398] rounded-full flex justify-center p-1 bg-black/25 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#E8A398] rounded-full"
          />
        </div>
        
        {/* 스크롤 텍스트 가이드 */}
        <div className="flex flex-col">
          <span className="text-[10px] text-[#E8A398] font-bold uppercase tracking-[0.2em] leading-none">
            Scroll down
          </span>
          <span className="text-[11px] text-white/80 font-normal mt-1.5 leading-none">
            마우스를 스크롤해보세요
          </span>
        </div>
      </motion.div>
    </div>
  );
}
