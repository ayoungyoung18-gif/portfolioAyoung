import { motion } from "framer-motion";
import { ImageWithFallback } from "../common/ImageWithFallback";
import about1 from "../../../assets/images/about1.jpg";

export default function AboutSection() {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden bg-black font-sans">
      {/* 1. 배경 레이어 */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback src={about1} className="w-full h-full object-cover brightness-[0.95] contrast-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* 2. 전체 레이아웃 컨테이너 */}
      <div className="relative z-20 w-full max-w-7xl px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* [왼쪽: 메인 타이포그래피] */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="select-none relative py-4">
            <span className="text-[9px] tracking-[0.3em] text-[#FF5722]/80 font-bold block mb-3 uppercase">
              Brand Strategist & Creator
            </span>

            <h1
              className="text-6xl md:text-[100px] font-black leading-none text-white tracking-tighter mb-2"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.6))" }}
            >
              브랜드 마케터
            </h1>
            <h2
              className="text-3xl md:text-[60px] font-black leading-none text-transparent uppercase"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.9)",
                letterSpacing: "0.2em",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
              }}
            >
              한아영 포트폴리오
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            <p className="text-[#FF5722] text-xs md:text-sm tracking-[0.5em] font-bold uppercase drop-shadow-md">
              Integrated Marketing Communication
            </p>
            <div className="text-white text-lg md:text-xl font-bold tracking-tight leading-relaxed drop-shadow-lg break-keep">
              과거의 유산과 현재의 감각을 유연하게 연결하고,
              <br />
              한국 고유의 정체성을 재해석하여 글로벌 무대에 알리는
              <p className="mt-1 text-[#FF5722] text-xl md:text-2xl font-black">브랜드 마케터 한아영입니다.</p>
            </div>
          </motion.div>
        </div>

        {/* [오른쪽: 기획 의도 노트] */}
        <motion.div
          className="max-w-md bg-black/50 backdrop-blur-xl p-8 rounded-sm border border-white/10 text-white shadow-2xl text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="mb-5">
            <span className="text-[10px] tracking-[0.4em] text-[#FF5722] font-bold uppercase block mb-1">
              THE HERITAGE OF 'HOME'
            </span>
            <h3 className="text-2xl font-serif tracking-tight"> 일상에 스며드는 브랜딩</h3>
          </div>

          <div className="space-y-4 text-[13px] leading-relaxed font-light text-white/90 break-keep">
            <p className="text-white/80 border-b border-white/5 pb-3">
              가장 안식처가 되는 <strong>'집'</strong>처럼, 브랜드 본연의 메시지로 일상 속에 스며드는 마케팅을 펼칩니다.
              플랫폼 운영팀에서 CRM 및 캠페인을 전담하며 <strong>지표 중심의 전략적 운영 감각</strong>을 다졌고, 브랜딩
              총괄 경험을 토대로 이를 실제 결과물로 구현해 왔습니다.
            </p>

            <div className="space-y-3 pt-1">
              {/* 항목 1 */}
              <div className="flex items-start gap-2">
                <span className="text-[#FF5722] font-bold text-[12px] mt-[2px]">✦</span>
                <p className="text-white/90">
                  <strong className="text-[#FF5722] font-medium">운영 & 기획 :</strong> SNS 플랫폼 운영관리 및 웹 구축
                  프로젝트 경험을 바탕으로 구조적이고 최적화된 서비스를 설계합니다.
                </p>
              </div>

              {/* 항목 2 */}
              <div className="flex items-start gap-2">
                <span className="text-[#FF5722] font-bold text-[12px] mt-[2px]">✦</span>
                <p className="text-white/90">
                  <strong className="text-[#FF5722] font-medium">캠페인 & 이벤트 :</strong> 정교한 타깃 분석을 기반으로
                  고객의 전환을 유도하는 직관적인 캠페인을 기획하고 직접 제작합니다.
                </p>
              </div>

              {/* 항목 3 */}
              <div className="flex items-start gap-2">
                <span className="text-[#FF5722] font-bold text-[12px] mt-[2px]">✦</span>
                <p className="text-white/90">
                  <strong className="text-[#FF5722] font-medium">브랜딩 & 영상 :</strong> 광고 영상 제작 및 애프터
                  이펙트 모션 그래픽을 활용하여 브랜드 고유의 서사를 역동적으로 전달합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/5 flex justify-end">
            <span className="text-[10px] font-mono tracking-wider text-white/40">
              STRATEGY & CREATIVE BY HAN A-YOUNG
            </span>
          </div>
        </motion.div>
      </div>

      {/* 3. 우측 하단 독립된 스크롤 안내 영역 */}
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
