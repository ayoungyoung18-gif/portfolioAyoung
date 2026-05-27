import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Monitor, ExternalLink, RotateCcw } from "lucide-react";
// 배경 이미지 (정갈한 대청마루 혹은 목재 인테리어 이미지 추천)
import daecheongBg from "../../../assets/images/daecheong1.jpg";

export default function ComputerRoomSection() {
  const [computerOn, setComputerOn] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // 실제 연동할 프로젝트의 라이브 URL 주소
  const projectUrl = "https://ayoungyoung18-gif-focusonwood.vercel.app/";

  // 모니터 화면 속 커서 점멸 효과
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans">
      {/* 1. 배경: 탁 트인 대청마루 이미지 */}
      <div className="absolute inset-0 z-0">
        <img src={daecheongBg} alt="Daecheong Hall" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#FDFCF0]/85 backdrop-blur-[1px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl px-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 2. 모니터 인터랙션 영역 */}
        <motion.div
          className="relative group flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* 모니터 본체 케이스 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-3 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative border-t border-white/10">
            <div
              className="w-[850px] h-[520px] rounded-lg overflow-hidden relative transition-all duration-700 shadow-inner"
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
                    {/* 아이콘도 조금 더 명확하게 보이도록 대비 조율 */}
                    <Monitor className="w-16 h-16 mb-4 stroke-[1.25px] text-white/50 drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]" />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/50">Power On</span>

                    {/* ✨ [가독성 완벽 개선] 투명도를 대폭 올리고 한글 가독성에 맞춘 그림자 세팅 추가 */}
                    <motion.div className="mt-8 text-xs text-white/80 font-medium tracking-wide animate-pulse drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                      화면을 클릭하여 모니터를 켜보세요
                    </motion.div>
                  </motion.div>
                ) : (
                  /* 상태 B: 전원 켜짐 (실제 프로젝트 웹사이트 실시간 iframe 임베드) */
                  <motion.div
                    key="on"
                    className="w-full h-full bg-white flex flex-col"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* 브라우저 상단바 컨트롤러 */}
                    <div className="h-8 bg-[#EAE8E4] flex items-center px-4 justify-between border-b border-black/5 select-none z-10">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E8A398]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#B9C9A9]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D1E2E8]" />
                      </div>

                      {/* 가구공방 프로젝트 주소 표시 */}
                      <div className="bg-white mx-6 flex-1 h-5 rounded-sm text-[9px] flex items-center px-3 text-[#8C8A83] font-mono shadow-sm truncate">
                        {projectUrl}
                      </div>

                      {/* 모니터 전원 끄기 아날로그 스위치 버튼 */}
                      <button
                        onClick={() => setComputerOn(false)}
                        className="text-[9px] text-[#4A4E40]/60 hover:text-[#E8A398] font-bold flex items-center gap-1 transition-colors uppercase tracking-tighter"
                      >
                        <RotateCcw size={10} /> Shutdown
                      </button>
                    </div>

                    {/* 실제 배포된 사이트가 화면 가득 출력되는 인라인 프레임 */}
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

          {/* 모니터 거치대 스탠드 및 하단 받침대 플레이트 */}
          <div className="w-16 h-12 bg-[#1F1F1F] border-x border-black/20 shadow-md relative z-0" />
          <div className="w-48 h-2 bg-[#262626] rounded-t-md shadow-lg border-b border-black/40" />
        </motion.div>

        {/* 3. 모니터 하단 외부 서브 설명 영역 */}
        <div className="w-full max-w-3xl mt-8 flex justify-between items-center py-6 border-t border-[#4A4E40]/10">
          <div className="text-left">
            <span className="text-[11px] font-sans font-extrabold tracking-wider text-[#E8A398] block mb-0.5 uppercase">
              Project 04_Website Design & Development
            </span>
            {/* [명칭 수정 완료] 한국가구공방사이트 구현 문구 정밀 적용 */}
            <h4 className="text-lg font-serif text-[#4A4E40] font-bold tracking-tight">
              한국가구공방사이트 (Focus on Wood)
            </h4>
            <p className="text-[11px] text-[#8C8A83] font-light mt-1.5 leading-relaxed break-keep">
              전통 가구의 고유한 나뭇결과 크래프트맨십을 현대적인 웹 표준 기술로 재해석한 반응형 웹 인터페이스
              아카이브입니다. 대청마루의 탁 트인 모니터 속에서 배포된 라이브 화면을 직접 스크롤하며 역동적인 구현 핏을
              체험할 수 있습니다.
            </p>
          </div>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black text-[#4A4E40] uppercase border-b border-[#4A4E40] pb-1 hover:text-[#E8A398] hover:border-[#E8A398] transition-all whitespace-nowrap self-end ml-8"
          >
            Open in New Tab <ExternalLink size={12} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
