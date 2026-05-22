import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, ExternalLink, RotateCcw } from "lucide-react";
// 배경 이미지
import daecheongBg from "../../../assets/images/daecheong1.jpg";

export default function ComputerRoomSection() {
  const [computerOn, setComputerOn] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // 실제 연동할 프로젝트의 라이브 URL 주소 (Vercel 링크 완벽 유지)
  const projectUrl = "https://ayoungyoung18-gif-focusonwood.vercel.app/";

  // 모니터 화면 속 커서 점멸 효과
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    /* 프리텐다드 서체가 안전하게 컴포넌트 전체에 입혀지도록 font-sans 적용 */
    <div className="w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans bg-[#FDFCF0]">
      {/* 1. 배경 이미지 레이어 */}
      <div className="absolute inset-0 z-0 select-none">
        <img src={daecheongBg} alt="Daecheong Hall" className="w-full h-full object-cover opacity-95" loading="lazy" />
        <div className="absolute inset-0 bg-[#FDFCF0]/10 backdrop-blur-[0.5px]" />
      </div>

      {/* 메인 레이아웃 콘텐트 - 하단 공간 확보를 위해 컴팩트하게 정렬 */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-10 flex flex-col items-center justify-center h-full pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 상단 타이틀 - 하단 여백 대폭 축소 (mb-2) */}
        <div className="text-center mb-2 select-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,1)]">
          <span className="text-[10px] tracking-[0.5em] uppercase font-black text-[#4A4E40] opacity-60">
            프로젝트 넷_ 대청마루
          </span>
          <h2 className="text-4xl font-sans mt-1 text-[#4A4E40] font-black">한국가구공방 온라인마케팅</h2>
          <div className="w-10 h-[1px] mx-auto mt-2 bg-[#FF5722]" />
        </div>

        {/* 2. 모니터 인터랙션 영역 - 마진 대폭 압축 (mb-1) */}
        <motion.div
          className="relative group flex flex-col items-center mb-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* 모니터 본체 케이스 - 세로 높이를 430px로 슬림화하여 아래쪽 공간 확보 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-3 shadow-[0_40px_80px_rgba(0,0,0,0.35)] relative border-t border-white/10">
            <div
              className="w-[820px] h-[430px] rounded-lg overflow-hidden relative transition-all duration-700 shadow-inner"
              style={{
                backgroundColor: computerOn ? "#fff" : "#0A0A0A",
              }}
            >
              <AnimatePresence mode="wait">
                {!computerOn ? (
                  /* 상태 A: 전원 꺼짐 화면 */
                  <motion.div
                    key="off"
                    className="w-full h-full flex flex-col items-center justify-center text-white/20 cursor-pointer select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setComputerOn(true)}
                  >
                    <Monitor className="w-14 h-14 mb-4 stroke-[1.25px] text-white/40 drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]" />
                    <span className="text-[9px] tracking-[0.4em] uppercase font-black text-white/50">Power On</span>

                    <motion.div className="mt-6 text-xs text-white/80 font-bold tracking-wide animate-pulse">
                      화면을 클릭하여 모니터를 켜보세요
                    </motion.div>
                  </motion.div>
                ) : (
                  /* 상태 B: 전원 켜짐 (Vercel 주소 연동 라이브 화면) */
                  <motion.div
                    key="on"
                    className="w-full h-full bg-white flex flex-col"
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* 브라우저 상단바 컨트롤러 */}
                    <div className="h-8 bg-[#EAE8E4] flex items-center px-4 justify-between border-b border-black/5 select-none z-10">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5722]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                      </div>

                      {/* 가구공방 프로젝트 주소 표시 */}
                      <div className="bg-white mx-6 flex-1 h-5 rounded-sm text-[9px] flex items-center px-3 text-[#8C8A83] font-mono shadow-sm truncate">
                        {projectUrl}
                      </div>

                      <button
                        onClick={() => setComputerOn(false)}
                        className="text-[9px] text-[#4A4E40]/60 hover:text-[#FF5722] font-bold flex items-center gap-1 transition-colors uppercase tracking-tighter"
                      >
                        <RotateCcw size={10} /> Shutdown
                      </button>
                    </div>

                    {/* 라이브 화면 출력 인라인 프레임 */}
                    <div className="flex-1 w-full h-full bg-white relative">
                      <iframe
                        src={projectUrl}
                        title="Focus on Wood - Korean Furniture Workshop Website Implementation"
                        className="w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 모니터 거치대 및 스탠드 */}
          <div className="w-14 h-8 bg-[#1F1F1F] border-x border-black/20 shadow-md relative z-0" />
          <div className="w-44 h-1.5 bg-[#262626] rounded-t-md shadow-lg border-b border-black/40" />
        </motion.div>

        {/* 3. 안채 스타일의 고급스러운 반투명 블랙 블러 패널 래퍼 - 퀵셀 바 간섭 방지 완료 */}
        <div
          className="w-full max-w-4xl mt-1 flex justify-between items-center px-8 py-4
                     bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl pointer-events-auto"
        >
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-extrabold tracking-wider text-[#FF5722] block mb-1 uppercase">
              Website Design & Development
            </span>
            <h4 className="text-lg font-bold text-white tracking-tight">
              한국가구공방 브랜드 웹사이트 (Focus on Wood)
            </h4>
            <p className="text-[13px] text-white/90 font-medium mt-1.5 leading-relaxed break-keep">
              한국 가구 공방의 깊은 장인정신을 D2C 커머스 사이트로 구현하고, 타겟 맞춤형 고관여 SNS 마케팅을 기획 및
              실행한 디지털 허브 플랫폼입니다. 화면 속 모니터 스크롤을 이용해 라이브 화면의 다이내믹한 인터랙션을 직접
              체험하실 수 있습니다.
            </p>
          </div>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] font-black text-white uppercase border-b-2 border-white pb-0.5 hover:text-[#FF5722] hover:border-[#FF5722] transition-all whitespace-nowrap ml-8 self-center"
          >
            Open in New Tab <ExternalLink size={12} />
          </a>
        </div>
      </motion.div>

      {/* 우하단 아영님 오리지널 스크롤 힌트 레이아웃 완벽 보존 및 버그 해결 */}
      <motion.div
        className="absolute right-12 bottom-12 z-30 hidden lg:flex flex-col items-end gap-1.5 pointer-events-none select-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest opacity-85">
          Scroll right to view projects
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-bold text-[#FF5722] tracking-tight">
            오른쪽으로 스크롤하여 프로젝트 보기
          </span>
          <div className="w-4 h-4 overflow-hidden relative flex items-center justify-center">
            {/* 🛠️ [버그 해결] 비어있던 애니메이션 괄호 안에 이동 범위 수치 [0, 5, 0]을 정밀 수록했습니다. */}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-[#FF5722] font-black text-xs inline-block"
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
