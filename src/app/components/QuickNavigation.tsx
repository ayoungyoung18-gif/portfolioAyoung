import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Map, Coffee, TreePine, Heart, Wind, Inbox } from "lucide-react";

interface QuickNavigationProps {
  onNavigate: (index: number) => void;
  currentIndex: number;
}

const rooms = [
  { name: "About", icon: User },
  { name: "전개도", icon: Map },
  { name: "사랑채", icon: Coffee },
  { name: "중정", icon: TreePine },
  { name: "안채", icon: Heart },
  { name: "대청마루", icon: Wind },
  { name: "행랑채", icon: Inbox },
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
          className="fixed bottom-4 left-0 w-full z-100 pointer-events-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full px-10 md:px-20">
            <div className="max-w-[1400px] mx-auto relative flex items-center justify-between pointer-events-auto">
              {/* 중앙 연결선 */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/15 -translate-y-1/2" />

              {rooms.map((room, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <button onClick={() => onNavigate(index)} className="group relative flex flex-col items-center">
                    {/* [수정] 글자 위치를 -top-8에서 -top-5로 더 내려 밀착시킴 */}
                    <div className="absolute -top-5 flex flex-col items-center whitespace-nowrap">
                      <span
                        className={`
                        text-[11px] tracking-[0.05em] font-black transition-all duration-300 uppercase
                        [text-shadow:_0_0_10px_rgba(255,255,255,1),_0_0_20px_rgba(255,255,255,0.8)]
                        ${
                          currentIndex === index
                            ? "text-black opacity-100 scale-100"
                            : "text-black opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5"
                        }
                      `}
                      >
                        {room.name}
                      </span>
                    </div>

                    {/* 아이콘 버튼 */}
                    <div
                      className={`
                      w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500
                      ${
                        currentIndex === index
                          ? "bg-black shadow-xl scale-110"
                          : "bg-white/90 backdrop-blur-md border border-black/5 hover:bg-white shadow-md"
                      }
                    `}
                    >
                      <room.icon
                        className={`w-5 h-5 ${currentIndex === index ? "text-white" : "text-black/60 group-hover:text-black"}`}
                      />
                    </div>

                    {/* 하단 점 */}
                    {currentIndex === index && (
                      <motion.div
                        layoutId="active-dot"
                        className="absolute -bottom-4 w-1.5 h-1.5 bg-black rounded-full shadow-lg"
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
