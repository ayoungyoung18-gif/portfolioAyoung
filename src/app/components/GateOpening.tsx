import { motion } from "framer-motion";

interface GateOpeningProps {
  onComplete: () => void;
}

export default function GateOpening({ onComplete }: GateOpeningProps) {
  // 개폐 속도 조절 (수치를 낮출수록 빨라집니다)
  const OPEN_DELAY = 0.8; // 문이 열리기 전 대기 시간
  const OPEN_DURATION = 1.5; // 문이 열리는 동작 시간

  return (
    <div className="fixed inset-0 z-50 bg-[#e5e0d8] overflow-hidden font-sans">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* [왼쪽 문] */}
        <motion.div
          className="absolute left-0 top-0 h-full w-1/2 bg-[#e5e0d8] z-30 shadow-[20px_0_50px_rgba(0,0,0,0.15)]"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: OPEN_DURATION, delay: OPEN_DELAY, ease: [0.8, 0, 0.2, 1] }}
          onAnimationComplete={onComplete}
        >
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://transparenttextures.com')]" />
          <div className="h-full w-full flex items-center justify-end">
            <div className="relative">
              <div className="mr-24 h-64 w-[1px] bg-[#1a1a1a]/20" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-40 bg-[#1a1a1a] rounded-l-sm flex items-center justify-end pr-4 shadow-xl border-y border-l border-white/10">
                <span className="text-white text-2xl font-serif [writing-mode:vertical-rl] tracking-[0.5em]">로브</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* [오른쪽 문] */}
        <motion.div
          className="absolute right-0 top-0 h-full w-1/2 bg-[#e5e0d8] z-30 shadow-[[-20px_0_50px_rgba(0,0,0,0.15)]]"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: OPEN_DURATION, delay: OPEN_DELAY, ease: [0.8, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://transparenttextures.com')]" />
          <div className="h-full w-full flex items-center justify-start relative">
            {/* 🐟 북어명주 & 동그랗게 감싸 묶인 5만 원 지폐 오브제 */}
            <motion.div
              className="absolute top-16 right-20 flex flex-col items-center origin-top z-40"
              animate={{ rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-[1.5px] h-10 bg-[#8b6f47]/40" />

              {/* 북어 몸통 */}
              <div className="relative w-12 h-32 bg-[#b59a7d] rounded-full shadow-lg flex flex-col items-center">
                <div className="absolute -top-1 w-8 h-4 bg-[#8b6f47] rounded-t-full flex justify-center pt-1">
                  <div className="w-4 h-1 bg-black/20 rounded-full" />
                </div>
                <div className="absolute top-6 w-3 h-3 bg-white rounded-full border border-black/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>

                {/* ✨ [동그랗게 말린 지폐 레이아웃 구현] */}
                <div className="absolute top-[38px] left-[-16px] w-[135%] h-8.5 bg-[#EAC96B] border-y border-l border-[#B39643] rounded-l-md shadow-[[-4px_4px_10px_rgba(0,0,0,0.35)]] rotate-[-2deg] z-10 select-none flex items-center pl-2 overflow-hidden">
                  {/* ① 가장 왼쪽(앞단)에 배치된 신사임당 초상화 */}
                  <div className="w-4 h-5 flex flex-col items-center justify-center opacity-95 scale-95 shrink-0 relative mr-1.5">
                    {/* 가체 머리 */}
                    <div className="w-3 h-2.5 bg-[#42350F] rounded-t-full relative" />
                    {/* 얼굴 윤곽 */}
                    <div className="w-2.5 h-3 bg-[#F2DC9B] border border-[#52441A]/20 rounded-b-xl -mt-1 relative z-10 flex flex-col justify-center items-center">
                      <div className="flex gap-0.5 mt-[-1px]">
                        <div className="w-0.5 h-[0.5px] bg-[#42350F]" />
                        <div className="w-0.5 h-[0.5px] bg-[#42350F]" />
                      </div>
                      <div className="w-0.5 h-[0.5px] bg-[#A33820] mt-[2px]" />
                    </div>
                    {/* 한복 옷깃 */}
                    <div className="w-4 h-2 bg-[#E1BA4E] border-t border-[#42350F]/20 rounded-t-sm -mt-0.5" />
                  </div>

                  {/* ② 인물 초상 바로 뒤로 이어지는 대형 '500' 숫자 */}
                  <div className="flex items-baseline leading-none z-10">
                    <span className="text-[14px] font-sans font-black text-[#382D0B] tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                      500
                    </span>
                  </div>

                  {/* ③ 지폐가 북어 몸통의 둥근 곡면을 따라 오른쪽 뒤로 말려 들어가는 입체 음영 마감 */}
                  <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-black/40 via-black/15 to-transparent rounded-r-sm" />

                  {/* 위조방지 홀로그램 선형 레이어 */}
                  <div className="absolute left-[24px] top-0 w-1 h-full bg-gradient-to-r from-teal-500/20 via-amber-400/30 to-purple-500/20 mix-blend-overlay" />
                </div>

                {/* 실타래 (삼색실) 영역 */}
                <div className="absolute bottom-4 w-[110%] space-y-1 z-20">
                  <div className="h-2 bg-[#C40233] shadow-sm rotate-2" />
                  <div className="h-2 bg-[#FFD700] shadow-sm -rotate-1" />
                  <div className="h-2 bg-[#0055A4] shadow-sm rotate-1" />
                </div>

                <div
                  className="absolute -bottom-4 w-10 h-8 bg-[#b59a7d] rounded-b-full"
                  style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 50% 70%, 0% 100%)" }}
                />
              </div>

              {/* 하단 오색 명주실 늘어뜨림 */}
              <div className="flex gap-1 mt-6 opacity-80">
                <div className="w-0.5 h-24 bg-[#0055A4]" />
                <div className="w-0.5 h-32 bg-[#C40233]" />
                <div className="w-0.5 h-28 bg-[#FFD700]" />
                <div className="w-0.5 h-36 bg-white shadow-sm" />
                <div className="w-0.5 h-20 bg-black/70" />
              </div>
            </motion.div>

            <div className="relative">
              <div className="ml-24 h-64 w-[1px] bg-[#1a1a1a]/20" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-40 bg-[#1a1a1a] rounded-r-sm flex items-center justify-start pl-4 shadow-xl border-y border-r border-white/10">
                <span className="text-white text-2xl font-serif [writing-mode:vertical-rl] tracking-[0.5em]">나시</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* [중앙 텍스트] */}
        <motion.div
          className="relative z-20 text-center px-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        >
          <h1 className="text-4xl md:text-[50px] text-[#1a1a1a] font-bold tracking-tight mb-10 leading-[1.5] font-serif">
            집은 머무는 곳이 아니라
            <br />
            이야기가 시작되는 곳이다
          </h1>
          <div className="w-12 h-[1px] bg-[#1a1a1a]/30 mx-auto" />
        </motion.div>

        <div className="absolute inset-0 z-10 bg-[#fdfaf5]" />
      </div>
    </div>
  );
}
