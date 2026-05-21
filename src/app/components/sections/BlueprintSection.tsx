import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hanokBlueprintVideo from "../../../assets/video/house.mp4";

interface BlueprintSectionProps {
  onNavigate?: (index: number) => void;
}

export default function BlueprintSection({ onNavigate }: BlueprintSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

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
      name: "About",
      detail: "포트폴리오 이름과 기획의도",
      why: "브랜드의 첫인상을 여는 진입 공간",
      x: 40,
      y: 40,
      width: 220,
      height: 160,
      color: colors.yellow,
      roomIndex: 0,
    },
    {
      name: "사랑채",
      detail: "오설록 이벤트 배너",
      why: "외부 손님과 교류하는 브랜드 팝업 공간",
      x: 40,
      y: 220,
      width: 220,
      height: 140,
      color: colors.blue,
      roomIndex: 2,
    },
    {
      name: "중정",
      detail: "다이소 화장품 광고 영상",
      why: "시선이 집중되는 한옥의 시각적 중심 무대",
      x: 280,
      y: 40,
      width: 140,
      height: 320,
      color: colors.leaf,
      roomIndex: 3,
    },
    {
      name: "행랑채",
      detail: "SNS 활동 (블로그/인스타그램)",
      why: "세상과 소통하며 일상을 기록하는 창구",
      x: 440,
      y: 40,
      width: 220,
      height: 160,
      color: colors.coral,
      roomIndex: 6,
    },
    {
      name: "안채",
      detail: "윤하의좋아해 키네틱 타이포 영상",
      why: "깊은 몰입감을 선사하는 예술적 중심 공간",
      x: 440,
      y: 220,
      width: 220,
      height: 140,
      color: colors.yellow,
      roomIndex: 4,
    },
    {
      name: "대청마루",
      detail: "한국가구공방 사이트",
      why: "공간을 연결하는 원목 기반의 개방형 플랫폼",
      x: 40,
      y: 380,
      width: 620,
      height: 80,
      color: colors.wood,
      roomIndex: 5,
    },
  ];

  // 💡 말풍선 좌표 및 정렬 기준 연산 함수
  const getTooltipStyle = (index: number) => {
    const room = rooms[index];
    const padding = 40; // p-10 패딩 보정

    // 대청마루는 상단 가림 방지를 위해 아래쪽 정중앙에 고정 배치
    if (room.name === "대청마루") {
      return {
        position: "absolute" as const,
        left: room.x + room.width / 2 + padding,
        top: room.y + room.height + padding + 12,
        transform: "translate(-50%, 0%)",
      };
    }

    // 중정 및 일반 방들은 최상단 테두리선(y) 위쪽 정중앙에 고정 배치
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
      {/* 배경 비디오 */}
      <div className="absolute inset-0 z-0 bg-[#F7F6F2]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.8) brightness(1.02) contrast(0.9)" }}
        >
          <source src={hanokBlueprintVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F7F6F2]/92 backdrop-blur-[1px] pointer-events-none" />
      </div>

      <motion.div
        className="relative z-10"
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

        {/* 도면 영역 */}
        <div className="relative p-10 bg-white/20 backdrop-blur-3xl rounded-[40px] border border-white/50 shadow-[0_20px_80px_rgba(0,0,0,0.02)]">
          
          {/* 초고속 스프링 고정형 말풍선 레이어 */}
          <AnimatePresence>
            {hoveredRoom !== null && (
              <motion.div
                key={hoveredRoom}
                initial={{ opacity: 0, scale: 0.96, y: hoveredRoom === 5 ? -4 : 4 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: hoveredRoom === 5 ? -4 : 4 }}
                transition={{ type: "spring", stiffness: 650, damping: 32 }} // 고속 스프링 모션
                style={getTooltipStyle(hoveredRoom)}
                className="z-50 pointer-events-none bg-[#4A4E40] text-[#F7F6F2] px-3 py-2 rounded-xl text-[11px] font-medium tracking-wide shadow-xl w-[210px] text-center break-keep flex flex-col gap-0.5"
              >
                {/* ✨ 타이틀을 '공간 기획'으로 변경 완료 */}
                <span className="text-[9px] text-[#E8A398] font-bold uppercase tracking-wider">
                  {rooms[hoveredRoom].name} 공간 기획
                </span>
                {rooms[hoveredRoom].why}
                
                {/* 말풍선 꼬리(Arrow) 방향 처리 */}
                {rooms[hoveredRoom].name === "대청마루" ? (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-solid border-b-[#4A4E40] border-b-[5px] border-x-transparent border-x-[5px] border-t-0" />
                ) : (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-solid border-t-[#4A4E40] border-t-[5px] border-x-transparent border-x-[5px] border-b-0" />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 도면 SVG 본체 */}
          <svg width="700" height="500" viewBox="0 0 700 500" className="overflow-visible relative">
            <rect
              x="20"
              y="20"
              width="660"
              height="460"
              rx="20"
              fill="none"
              stroke={colors.deepMoss}
              strokeWidth="0.5"
              strokeDasharray="5 5"
              opacity="0.1"
            />

            {rooms.map((room, index) => (
              <g
                key={index}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredRoom(index)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => handleRoomClick(room.roomIndex)}
              >
                <motion.rect
                  x={room.x}
                  y={room.y}
                  width={room.width}
                  height={room.height}
                  rx="6"
                  fill={room.color}
                  stroke={colors.deepMoss}
                  strokeWidth="1"
                  strokeOpacity="0.03"
                  whileHover={{ fill: "white", strokeOpacity: 0.4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 600, damping: 35 }}
                />

                <foreignObject
                  x={room.x}
                  y={room.y}
                  width={room.width}
                  height={room.height}
                  className="pointer-events-none"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center">
                    <motion.span
                      className="font-bold tracking-tight text-[#4A4E40]"
                      animate={{
                        fontSize: hoveredRoom === index ? "12px" : "14px",
                        opacity: hoveredRoom === index ? 0.3 : 0.8,
                      }}
                      transition={{ type: "spring", stiffness: 550, damping: 30 }}
                    >
                      {room.name}
                    </motion.span>

                    <AnimatePresence>
                      {hoveredRoom === index && (
                        <motion.span
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ type: "spring", stiffness: 550, damping: 30 }}
                          className="text-[13px] font-black text-[#E8A398] leading-tight break-keep mt-1"
                        >
                          {room.detail}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </foreignObject>
              </g>
            ))}

            {/* 소나무 포인트 */}
            <g pointerEvents="none">
              <circle
                cx="350"
                cy="310"
                r="20"
                fill="none"
                stroke={colors.leaf}
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <circle cx="350" cy="310" r="3.5" fill={colors.coral} opacity="0.6" />
              <text
                x="350"
                y="345"
                textAnchor="middle"
                fill={colors.deepMoss}
                className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase"
              >
                소나무
              </text>
            </g>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
