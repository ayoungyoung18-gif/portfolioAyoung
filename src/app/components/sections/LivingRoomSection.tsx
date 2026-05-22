// ⚡ [버그 해결] import 경로를 올바른 "framer-motion"으로 수정했습니다.
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, RotateCcw, X } from "lucide-react";

// 배경 이미지 및 동영상 에셋 경로
import privateRoomBg from "../../../assets/images/daecheong1.jpg";
import ilikeyou from "../../../assets/video/ilikeyou.mp4";

export default function LivingRoomSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const lyrics = [
    { text: "좋아해", color: "#FFB0A3" },
    { text: "이 말이", color: "#E0C3B1" },
    { text: "어색해서", color: "#C6D7B5" },
    { text: "못했던", color: "#BAD2DC" },
    { text: "그 말을", color: "#FFB0A3" },
    { text: "오늘은", color: "#E0C3B1" },
    { text: "꼭", color: "#FFB0A3" },
    { text: "할게요", color: "#F9F8F6" },
  ];

  // 타이포그래피 자막 루프 타이머 안전성 확보
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lyrics.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [lyrics.length]);

  // 자막 수동 리셋 함수
  const handleResetLyrics = () => {
    setCurrentLine(0);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans bg-black">
      {/* 1. 배경: 선명한 한옥 원경 */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={privateRoomBg}
          alt="Private Room"
          className="w-full h-full object-cover brightness-[0.95] contrast-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* 4. 메인 콘텐츠 */}
      <motion.div
        className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <header className="mb-12 text-center select-none">
          <motion.span className="text-[10px] tracking-[0.6em] text-white/70 uppercase font-bold">
            프로젝트 셋_ 안채
          </motion.span>
          <h2 className="text-5xl font-pretendard mt-3 text-white font-medium drop-shadow-2xl">
            애프터이팩트를 활용한 키네틱타이포영상
          </h2>
          <div className="w-8 h-[1px] bg-[#E8A398] mx-auto mt-6 opacity-60" />
        </header>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 미디어 박스 영역 (왼쪽) */}
          <div className="lg:col-span-7 relative h-[400px] bg-black rounded-2xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden group subpixel-antialiased will-change-transform">
            <AnimatePresence mode="wait">
              {!isVideoOpen ? (
                <motion.div
                  key="typo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  {/* 비디오 프리뷰 백그라운드 */}
                  <div className="absolute inset-0 z-0 opacity-50 pointer-events-none filter contrast-[1.02]">
                    <video
                      className="w-full h-full object-cover select-none"
                      src={ilikeyou}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  {/* 자막 레이어 */}
                  <div className="relative z-10 text-center select-none">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentLine}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 1.04 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                      >
                        <span
                          className="text-7xl font-serif font-black tracking-tight block drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                          style={{ color: lyrics[currentLine].color }}
                        >
                          {lyrics[currentLine].text}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 음악 기호 */}
                  <div className="absolute bottom-6 flex gap-4 z-10">
                    {[...Array(3)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-xs text-white/40 drop-shadow-sm"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                      >
                        {i % 2 === 0 ? "♪" : "♫"}
                      </motion.span>
                    ))}
                  </div>

                  {/* 마우스 호버 오버레이 */}
                  <div
                    onClick={() => setIsVideoOpen(true)}
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-20"
                  >
                    <div className="p-4 bg-white/95 rounded-full shadow-2xl text-[#4A4E40] hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-[#4A4E40]" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* 재생용 메인 비디오 박스 */
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full relative bg-black"
                >
                  <video
                    className="w-full h-full object-contain subpixel-antialiased"
                    src={ilikeyou}
                    autoPlay
                    controls
                    playsInline
                  >
                    브라우저가 비디오 태그를 지원하지 않습니다.
                  </video>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
                    title="Close Video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 바깥쪽 프레임 영역 (오른쪽) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            {/* ⚡ 인라인 스타일 주입으로 외부 테마 스크립트 오버라이딩 원천 차단 */}
            <div
              style={{ backgroundColor: "#000000" }}
              className="w-full border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] rounded-2xl p-8 space-y-6 select-none text-left"
            >
              {/* 상단 텍스트 정보 */}
              <div className="space-y-3">
                <span className="text-[11px] font-sans font-black tracking-widest text-[#FF5722] block uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  Project 03
                </span>
                <h4 className="text-3xl font-pretendard text-white font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  윤하 - 좋아해
                </h4>
                <p className="text-[14.5px] leading-relaxed text-white font-light tracking-wide break-keep pt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  가사의 감정을 시각적 리듬으로 치환하는{" "}
                  <span className="text-[#FF5722] font-bold underline underline-offset-4 decoration-white/30">
                    키네틱 타이포그래피(Kinetic Typography)
                  </span>{" "}
                  작업입니다. 고백 직전의 설레는 온도를 안채의 화사하게 쏟아지는 햇살과 부드러운 파스텔 톤의 움직임으로
                  표현했습니다.
                </p>

                {/* ✨ [수정 반영] 직접 그린 작업물 하이라이트 어필 파트 */}
                <p className="text-[14.5px] leading-relaxed text-white font-normal tracking-wide break-keep drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  특히 영상 레이아웃에 배치된 모든 비주얼 아트워크와 타이포그래피 소스들은 외부 에셋을 배제하고{" "}
                  <span className="text-[#FFD400] font-bold underline underline-offset-4 decoration-white/20">
                    하나하나 직접 공들여 그린 100% 오리지널 작업물
                  </span>
                  이라는 점이 큰 특징입니다.
                </p>
              </div>

              {/* 인포 테이블 라인 */}
              <div className="space-y-2.5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-4 bg-white/[0.07] px-4 py-2.5 rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#FF5722] font-black w-14 shrink-0 drop-shadow-sm">
                    Focus
                  </span>
                  <span className="text-xs text-white font-semibold">
                    Motion Graphics <br /> & Hand-drawn Art
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-white/[0.07] px-4 py-2.5 rounded-lg border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#FF5722] font-black w-14 shrink-0 drop-shadow-sm">
                    Duration
                  </span>
                  <span className="text-xs text-white font-semibold">42s</span>
                </div>
              </div>

              {/* 하단 컨트롤 및 리셋 버튼 */}
              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={handleResetLyrics}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all text-xs shadow-md"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-white" />
                  타이포 처음부터 재생
                </button>
                <span className="text-[11px] text-white font-mono font-bold bg-white/10 px-2.5 py-1 rounded-md border border-white/5">
                  {currentLine + 1} / {lyrics.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
            <motion.span
              animate={{ x: [0, 4, 0] }}
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
