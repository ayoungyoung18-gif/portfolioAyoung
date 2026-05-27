import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import hanokBlueprintVideo from "../../../assets/video/house.mp4";

interface BlueprintSectionProps {
  onNavigate?: (index: number) => void;
}

export default function BlueprintSection({ onNavigate }: BlueprintSectionProps) {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  const colors = {
    yellow: "#F2E5B7",
    leaf: "#B9C9A9",
    coral: "#E8A398",
    blue: "#D1E2E8",
    wood: "#E3D5CA",
    deepMoss: "#4A4E40",
    bg: "#F7F6F2",
  };

  const rooms = [
    {
      id: 0,
      roomIndex: 0,
      num: "소개",
      name: "한아영의 마케팅 철학",
      detail: "about me",
      why: "한국 고유의 정체성이 지닌 힘을 재해석하는 BRAND MARKETER 한아영의 본질과 다짐을 담은 방입니다.",
      x: 20,
      y: 20,
      width: 240,
      height: 160,
      isDark: false,
      linkUrl: "/about",
    },
    {
      id: 1,
      roomIndex: 1,
      num: "프로젝트 하나",
      name: "오설록 이벤트 페이지 & 베너",
      detail: "사랑채",
      why: "외부 손님과 유연하게 소통하고 전통 차 문화를 현대적으로 제안하는 브랜드 팝업 공간입니다.",
      x: 20,
      y: 200,
      width: 240,
      height: 140,
      isDark: false,
      linkUrl: "/project/osulloc",
    },
    {
      id: 2,
      roomIndex: 2,
      num: "프로젝트 둘",
      name: "다이소 본셉 프리미엄 광고",
      detail: "중정",
      why: "시각적 몰입감을 극대화하여 시선을 단번에 집중시키는 크리에이티브 영상 디렉팅 무대입니다.",
      x: 280,
      y: 20,
      width: 120,
      height: 320,
      isDark: false,
      linkUrl: "/project/daiso",
    },
    {
      id: 3,
      roomIndex: 5,
      num: "프로젝트 다섯",
      name: "라이프스타일 콘텐츠 아카이브",
      detail: "행랑채",
      why: "세상과 경계 없이 소통하며 일상의 데이터를 차곡차곡 축적해 나가는 디지털 창구입니다.",
      x: 420,
      y: 20,
      width: 260,
      height: 160,
      isDark: false,
      linkUrl: "/project/sns",
    },
    {
      id: 4,
      roomIndex: 3,
      num: "프로젝트 넷",
      name: "감성 키네틱 타이포그래피",
      detail: "안채",
      why: "브랜드 깊은 곳에 숨겨진 서정적인 이야기와 내러티브를 정교하게 다듬어낸 중심 공간입니다.",
      x: 420,
      y: 200,
      width: 260,
      height: 140,
      isDark: false,
      linkUrl: "/project/younha",
    },
    {
      id: 5,
      roomIndex: 4,
      num: "프로젝트 셋",
      name: "한국가구공방 브랜드 웹사이트",
      detail: "대청마루",
      why: "모든 크리에이티브 조각 AND 마케팅 채널을 유기적으로 관통하는 허브형 디지털 플랫폼입니다.",
      x: 20,
      y: 360,
      width: 660,
      height: 80,
      isDark: true,
      linkUrl: "/project/furniture",
    },
  ];

  const getTooltipStyle = (index: number) => {
    const room = rooms[index];
    const padding = 40;

    if (room.name.includes("대청마루")) {
      return {
        position: "absolute" as const,
        left: room.x + room.width / 2 + padding,
        top: room.y + room.height + padding + 12,
        transform: "translate(-50%, 0%)",
      };
    }

    return {
      position: "absolute" as const,
      left: room.x + room.width / 2 + padding,
      top: room.y + padding - 12,
      transform: "translate(-50%, -100%)",
    };
  };

  const handleRoomClick = (roomIndex: number) => {
    if (onNavigate) {
      onNavigate(roomIndex);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans">
      {/* 애니메이션 주기는 요청하신 2분(120s) 유지 */}
      <style>{`
        @keyframes ultraSlowPan {
          0% { transform: scale(1.01); }
          50% { transform: scale(1.04); }
          100% { transform: scale(1.01); }
        }
        .balanced-slow-bg {
          animation: ultraSlowPan 120s ease-in-out infinite;
        }
      `}</style>

      {/* 배경 비디오 레이어 */}
      <div className="absolute inset-0 z-0 bg-[#F7F6F2]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover balanced-slow-bg"
          style={{ filter: "saturate(0.7) brightness(0.98) contrast(0.95)" }}
        >
          <source src={hanokBlueprintVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F7F6F2]/50 backdrop-blur-[0.5px] pointer-events-none" />
      </div>

      {/* 메인 레이아웃 콘텐트 */}
      <motion.div
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 상단 타이틀 */}
        <div className="text-center mb-10 select-none">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-30 text-[#4A4E40]">
            Spatial Layout Index
          </span>
          <h2 className="text-5xl font-serif tracking-tight mt-2 text-[#4A4E40] font-bold">공간 전개도</h2>
          <div className="w-8 h-[1px] mx-auto mt-6 bg-[#E8A398] opacity-40" />
        </div>

        {/* 도면과 툴팁이 담길 래퍼 */}
        <div className="relative p-10 bg-white/75 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-2xl overflow-visible">
          {/* 말풍선(Tooltip) */}
          <AnimatePresence>
            {hoveredRoom !== null && rooms[hoveredRoom] && (
              <motion.div
                key={hoveredRoom}
                initial={{ opacity: 0, scale: 0.95, y: rooms[hoveredRoom].name.includes("대청마루") ? -10 : 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="p-4 rounded-xl bg-[#4A4E40] text-white shadow-xl max-w-xs z-50 flex flex-col gap-1 pointer-events-none"
                style={getTooltipStyle(hoveredRoom)}
              >
                <span className="text-[9px] text-[#E8A398] font-bold uppercase tracking-wider">
                  {rooms[hoveredRoom].detail} 공간 기획
                </span>
                <p className="text-xs text-gray-200 leading-relaxed break-keep">{rooms[hoveredRoom].why}</p>

                {/* 말풍선 꼬리 */}
                {rooms[hoveredRoom].name.includes("대청마루") ? (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-solid border-b-[#4A4E40] border-b-[6px] border-x-transparent border-x-[6px] border-t-0" />
                ) : (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-solid border-t-[#4A4E40] border-t-[6px] border-x-transparent border-x-[6px] border-b-0" />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 도면 SVG 본체 */}
          <svg width="700" height="460" viewBox="0 0 700 460" className="overflow-visible relative z-10">
            <rect
              x="10"
              y="10"
              width="680"
              height="440"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.15"
            />

            {rooms.map((room, index) => {
              const isHovered = hoveredRoom === index;
              return (
                <g
                  key={room.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredRoom(index)}
                  onMouseLeave={() => setHoveredRoom(null)}
                  onClick={() => handleRoomClick(room.roomIndex)}
                >
                  {/* 방 배경 영역 */}
                  <motion.rect
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    rx="4"
                    fill={room.isDark ? "#1E2225" : isHovered ? "#FFF5EE" : "#FFFFFF"}
                    stroke={isHovered ? "#E8A398" : "#4A4E40"}
                    strokeWidth={isHovered ? "2" : "1.5"}
                    strokeOpacity={room.isDark ? "1" : isHovered ? "1" : "0.4"}
                    whileHover={{ scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />

                  {/* HTML 요소를 SVG 내부에 안전하게 정렬하기 위한 ForeignObject 레이어 */}
                  <foreignObject
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center select-none gap-0.5">
                      {/* 1. 상단 소제목 (예: 프로젝트 하나, 소개) */}
                      <span
                        className={`text-[9px] font-mono font-black tracking-wider ${
                          room.isDark ? "text-[#E8A398]" : "text-gray-950 opacity-40"
                        }`}
                      >
                        {room.num}
                      </span>

                      {/* 2. 메인 방 이름 / 프로젝트 타이틀 */}
                      <span
                        className={`text-xs font-extrabold tracking-tight px-1 leading-snug break-keep transition-colors duration-200 ${
                          room.isDark ? "text-white" : "text-[#4A4E40]"
                        }`}
                      >
                        {room.name}
                      </span>

                      {/* 3. 하단 세부 장소 구분명 (예: 사랑채 공간, 중정 마당) */}
                      <span
                        className={`text-[10px] font-medium tracking-wide mt-0.5 ${
                          room.isDark ? "text-gray-400" : "text-[#E8A398] font-semibold"
                        }`}
                      >
                        {room.detail}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
