import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// 이미지 및 파일 import
import sarangchae from "../../../assets/images/sarangchae.png";
import goodSleep from "../../../assets/images/goodSleep.png";
import projectImg1 from "../../../assets/images/Osulloc_giwha.jpg";
import projectImg2 from "../../../assets/images/Osulloc_sackdong.jpg";
import planningDoc from "../../../assets/docs/event.pdf";

export default function SarangbangSection() {
  const [selectedImg, setSelectedImg] = useState(null);
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
    <div className="w-screen min-h-screen flex flex-col items-center relative font-sans bg-[#1A1A1A] overflow-x-hidden">
      {/* 커서 숨김 처리 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${selectedImg ? "html, body, * { cursor: none !important; }" : ""}
      `,
        }}
      />

      {/* 1. 배경 섹션: 사진의 미감은 유지하되 내용을 위해 대비 조절 */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src={sarangchae} alt="" className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. 콘텐츠 섹션 */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 pt-12 pb-32" // pt-32 -> 12로 줄여서 위로 바짝 올림
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 상단 타이틀 영역: 간격 좁힘 */}
        <header className="mb-12 text-center relative flex flex-col items-center">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] tracking-[0.3em] text-white font-bold italic">Project 01</span>
            <div className="w-4 h-[1px] bg-white/30"></div>
            <span className="text-[10px] tracking-[0.5em] text-white/60 uppercase font-bold">Archive</span>
          </div>

          <div
            className="relative cursor-help mt-1 group"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <h2 className="text-5xl font-serif text-white inline-block relative drop-shadow-2xl">
              사랑채
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full animate-pulse group-hover:bg-white"></span>
            </h2>

            <AnimatePresence>
              {isTitleHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] md:w-[450px] p-8 bg-black/90 backdrop-blur-3xl border border-white/20 shadow-2xl z-50 text-left"
                >
                  <h4 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-3 font-bold border-b border-white/10 pb-2">
                    Why OSULLOC?
                  </h4>
                  <p className="text-[13px] leading-[1.8] text-white font-light break-keep">
                    평소 깊이 애정하는 브랜드인 <span className="font-medium text-white">오설록</span>은 한국 고유의 차
                    문화를 현대적인 감각으로 가장 잘 살려내는 상징적인 브랜드입니다. 전통의 가치를 잃지 않으면서도
                    세련된 방식으로 한국의 미를 전파하는 브랜드 아이덴티티에 매료되어 프로젝트의 테마로 선정했습니다.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-4 text-[11px] tracking-[0.2em] text-white/70 uppercase font-medium">
            Event Banner & Page Design
          </p>
          <div className="w-10 h-[1px] bg-white/20 mt-4"></div>
        </header>

        {/* 메인 갭을 16에서 8로 대폭 줄임 */}
        <div className="flex flex-col gap-8">
          {/* 꿀잠프로젝트 카드: 가독성을 위해 배경 불투명도 살짝 높임 */}
          <div className="relative w-full py-12 px-8 rounded-sm overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl flex flex-col items-center text-center shadow-2xl">
            <h3 className="text-4xl font-serif tracking-tight mb-3 text-white">꿀잠프로젝트</h3>
            <p className="text-[11px] text-white/50 mb-8 tracking-[0.3em] uppercase italic">
              Instagram Review Event Page
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a
                href={goodSleep}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-4 bg-white text-black text-[11px] tracking-[0.2em] uppercase hover:bg-gray-200 transition-all font-bold text-center"
              >
                이벤트 페이지
              </a>
              <a
                href={planningDoc}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-4 border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all text-center"
              >
                상세 기획서
              </a>
            </div>
          </div>

          {/* 배너 섹션: 위쪽으로 바짝 붙임 */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-xs tracking-[0.4em] text-white/60 uppercase mb-1">Visual Archive</h3>
              <p className="text-[10px] text-white/40 font-light italic">Click to expand images</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {[projectImg1, projectImg2].map((img, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <motion.div
                    onClick={() => setSelectedImg(img)}
                    className="group cursor-pointer relative rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-black/20 p-1.5"
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                      <p className="text-white text-[13px] leading-relaxed font-light break-keep text-center">
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

      {/* 이미지 확대 모달 */}
      {selectedImg &&
        createPortal(
          <div
            className="fixed inset-0 flex flex-col items-center justify-center p-6"
            style={{ zIndex: 88888, backgroundColor: "rgba(0, 0, 0, 0.96)" }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12 text-white/60 text-[12px] tracking-[0.2em] select-none"
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
                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-auto"
                style={{ zIndex: 88889 }}
              />
            </motion.div>
          </div>,
          document.body,
        )}
    </div>
  );
}
