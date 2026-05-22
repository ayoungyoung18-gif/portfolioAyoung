import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// 이미지 및 파일 import 경로 유지
import sarangchae from "../../../assets/images/sarangchae.png";
import goodSleep from "../../../assets/images/goodSleep.png";
import projectImg1 from "../../../assets/images/Osulloc_giwha.jpg";
import projectImg2 from "../../../assets/images/Osulloc_sackdong.jpg";
import planningDoc from "../../../assets/docs/event.pdf";

export default function SarangbangSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImg]);

  const commonBannerDesc =
    "한국의 기와와 색동저고리를 현대적으로 재해석하여 제작된 북촌점만의 특별한 디저트 메뉴를 강조한 디자인입니다.";

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center relative font-sans bg-[#1A1A1A] overflow-hidden">
      {/* 커서 숨김 처리 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${selectedImg ? "html, body, * { cursor: none !important; }" : ""}
      `,
        }}
      />

      {/* 1. 배경 섹션 */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src={sarangchae} alt="" className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. 콘텐츠 섹션 */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 -mt-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 상단 타이틀 영역 */}
        <header className="mb-6 text-center relative flex flex-col items-center select-none">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] tracking-[0.3em] text-white font-bold italic">프로젝트 하나_ 사랑채</span>
            <div className="w-4 h-[1px] bg-white/30"></div>
          </div>

          <div
            className="relative cursor-help mt-1 group"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <h2 className="text-4xl md:text-5xl font-sans text-white font-bold inline-block relative tracking-tight drop-shadow-2xl">
              오설록 이벤트 페이지 <br />& 배너 이미지
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse group-hover:bg-white"></span>
            </h2>

            <AnimatePresence>
              {isTitleHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] md:w-[450px] p-8 bg-black/90 backdrop-blur-3xl border border-white/20 shadow-2xl z-50 text-left rounded-xl"
                >
                  <h4 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-3 font-bold border-b border-white/10 pb-2">
                    Why OSULLOC?
                  </h4>
                  <p className="text-[13px] leading-[1.8] text-white/90 font-medium break-keep">
                    평소 깊이 애정하는 브랜드인 <span className="font-bold text-[#FF5722]">오설록</span>은 한국 고유의
                    차 문화를 현대적인 감각으로 가장 잘 살려내는 상징적인 브랜드입니다. 전통의 가치를 잃지 않으면서도
                    세련된 방식으로 한국의 미를 전파하는 브랜드 아이덴티티에 매료되어 프로젝트의 테마로 선정했습니다.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-2 text-[10px] tracking-[0.2em] text-white/60 uppercase font-bold">
            Event Page & Banner Design
          </p>
          <div className="w-10 h-[1px] bg-white/20 mt-3"></div>
        </header>

        {/* 메인 콘텐츠 카드 슬롯 */}
        <div className="flex flex-col gap-5 w-full">
          {/* 꿀잠프로젝트 카드 */}
          <div className="relative w-full py-8 px-8 rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-sans tracking-tight font-black mb-2 text-white">꿀잠프로젝트</h3>
            <p className="text-[10px] text-white/40 mb-6 tracking-[0.3em] uppercase italic font-black">
              Instagram Review Event Page
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md pointer-events-auto">
              <a
                href={goodSleep}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-3 bg-white hover:bg-[#FF5722] hover:text-white text-black text-[11px] tracking-[0.2em] uppercase transition-all font-black text-center rounded-xl"
              >
                이벤트 페이지
              </a>
              <a
                href={planningDoc}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-3 border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#FF5722] hover:border-[#FF5722] transition-all font-black text-center rounded-xl"
              >
                상세 기획서
              </a>
            </div>
          </div>

          {/* 배너 아카이브 그리드 */}
          <div className="space-y-3">
            <div className="text-center mb-2">
              <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase mb-0.5 font-bold">Visual Archive</h3>
              <p className="text-[10px] text-white/30 font-semibold italic">Click to expand images</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              {[projectImg1, projectImg2].map((img, idx) => (
                <div key={idx} className="flex flex-col gap-3 pointer-events-auto">
                  <motion.div
                    onClick={() => setSelectedImg(img)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 p-1.5"
                    whileHover={{ y: -6 }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-auto max-h-[220px] object-contain block transition-transform duration-700 group-hover:scale-[1.01] rounded-xl mx-auto"
                    />

                    <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                      <p className="text-white text-[13px] leading-relaxed font-semibold break-keep text-center">
                        {commonBannerDesc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🛠️ [요청 완벽 반영] 바닥 여백을 bottom-12에서 bottom-28로 대폭 높여 퀵 내비바 위로 시원하게 올렸습니다. */}
      <motion.div
        className="absolute right-12 bottom-28 z-30 hidden lg:flex flex-col items-end gap-1.5 pointer-events-none select-none opacity-40 hover:opacity-90 transition-opacity duration-300"
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
            {/* 아영님의 원본 화살표 오우거 애니메이션 로직 100% 보존 */}
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

      {/* 모달 팝업 포탈 장치 마감 */}
      {selectedImg &&
        createPortal(
          <div
            className="fixed inset-0 flex flex-col items-center justify-center p-6 cursor-pointer"
            style={{ zIndex: 88888, backgroundColor: "rgba(0, 0, 0, 0.96)" }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12 text-white/60 text-[11px] tracking-[0.2em] font-bold uppercase select-none"
              style={{ zIndex: 88890 }}
            >
              화면을 클릭하면 이전 페이지로 돌아갑니다
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-full max-h-[85vh] flex items-center justify-center pointer-events-none"
            >
              <img
                src={selectedImg}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-auto rounded-lg"
                style={{ zIndex: 88889 }}
              />
            </motion.div>
          </div>,
          document.body,
        )}
    </div>
  );
}
