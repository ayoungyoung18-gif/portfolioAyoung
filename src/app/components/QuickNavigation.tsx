import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Map, Coffee, TreePine, Heart, Wind, Inbox } from "lucide-react";

interface QuickNavigationProps {
  onNavigate: (index: number) => void;
  currentIndex: number;
}

const rooms = [
  { name: "About", sub: "소개", icon: User },
  { name: "전개도", sub: "도면", icon: Map },
  { name: "사랑채", sub: "오설록 캠페인", icon: Coffee },
  { name: "중정", sub: "다이소 본셉", icon: TreePine },
  { name: "안채", sub: "키네틱 타이포", icon: Heart },
  { name: "대청마루", sub: "한국가구공방", icon: Wind },
  { name: "행랑채", sub: "SNS 아카이브", icon: Inbox },
];

export default function QuickNavigation({ onNavigate, currentIndex }: QuickNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 2500);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 w-full z-100 pointer-events-none pb-4 pt-6 bg-gradient-to-t from-white/90 via-white/40 to-transparent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full px-10 md:px-20">
            <div className="max-w-[1400px] mx-auto relative flex items-center justify-between pointer-events-auto">
              {/* 중앙 연결선 */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -translate-y-1/2" />

              {rooms.map((room, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <button onClick={() => onNavigate(index)} className="group relative flex flex-col items-center">
                    {/* 텍스트 래퍼 영역: 🛠️ 겹치는 현상을 해결하기 위해 오프셋을 -top-[24px]에서 -top-[34px]로 밀어 올려 정밀 여백 확보 */}
                    <div className="absolute -top-[34px] flex flex-col items-center whitespace-nowrap text-center transition-all duration-300">
                      {/* 1. 포트폴리오 핵심 프로젝트명 */}
                      <span
                        className={`
                        text-sm font-black tracking-wide leading-none uppercase transition-all duration-300
                        ${
                          currentIndex === index
                            ? "text-[#FF5722] opacity-100 scale-102"
                            : "text-[#1A1A19] opacity-0 group-hover:opacity-100 group-hover:text-[#FF5722] group-hover:-translate-y-0.5"
                        }
                      `}
                      >
                        {room.sub}
                      </span>

                      {/* 2. 한옥 공간명 */}
                      <span
                        className={`
                        text-[10px] font-black tracking-widest uppercase transition-all duration-300
                        ${
                          currentIndex === index
                            ? "text-[#FF5722] opacity-90"
                            : "text-[#33362E]/70 group-hover:text-[#FF5722]"
                        }
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      >
                        {room.name}
                      </span>
                    </div>

                    {/* 아이콘 버튼 (w-9 h-9 슬림 규격 완벽 유지) */}
                    <div
                      className={`
                      w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500
                      ${
                        currentIndex === index
                          ? "bg-[#FF5722] shadow-xl shadow-[#FF5722]/30 scale-110"
                          : "bg-white/95 backdrop-blur-md border border-black/5 hover:bg-white shadow-md"
                      }
                    `}
                    >
                      <room.icon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          currentIndex === index ? "text-white" : "text-[#33362E]/60 group-hover:text-[#FF5722]"
                        }`}
                      />
                    </div>

                    {/* 하단 활성화 오렌지 점 */}
                    {currentIndex === index && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute -bottom-4 w-1.5 h-1.5 bg-[#FF5722] rounded-full shadow-md shadow-[#FF5722]/50"
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
