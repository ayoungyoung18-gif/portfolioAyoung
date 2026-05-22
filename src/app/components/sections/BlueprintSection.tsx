import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import hanokBlueprintVideo from "../../../assets/video/house.mp4";

interface BlueprintSectionProps {
  onNavigate?: (index: number) => void;
}

export default function BlueprintSection({ onNavigate }: BlueprintSectionProps) {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  // 퀵 셀렉션의 순서(0: About, 1: 전개도, 2: 사랑채, 3: 중정, 4: 안채, 5: 대청마루, 6: 행랑채)와 roomIndex를 완벽 동기화
  const rooms = [
    {
      id: 0,
      roomIndex: 0, // 0번 클릭 시 About으로 이동
      num: "소개",
      name: "한아영의 마케팅 철학",
      detail: "about me",
      why: "한국 고유의 정체성이 지닌 힘을 재해석하는 BRAND MARKETER 한아영의 본질과 다짐을 담은 방입니다.",
      x: 30,
      y: 30,
      width: 300,
      height: 190,
      isDark: false,
    },
    {
      id: 1,
      roomIndex: 2, // 2번 클릭 시 사랑채로 이동
      num: "프로젝트 하나",
      name: "오설록 이벤트 페이지 & 배너",
      detail: "사랑채",
      why: "전통 차 문화를 현대적 쉼으로 리포지셔닝한 '꿀잠 프로젝트' 기획 및 북촌점 단독 디저트 배너 제작.",
      x: 30,
      y: 250,
      width: 300,
      height: 170,
      isDark: false,
    },
    {
      id: 2,
      roomIndex: 3, // 3번 클릭 시 중정으로 이동
      num: "프로젝트 둘",
      name: "다이소 본셉 프리미엄 광고",
      detail: "중정",
      why: "다이소 비타민C 라인의 고급화 포지셔닝 전략 수립 및 감각적인 시네마틱 무드의 광고 영상 제작",
      x: 360,
      y: 30,
      width: 160,
      height: 390,
      isDark: false,
    },
    {
      id: 3,
      roomIndex: 4, // 4번 클릭 시 안채로 이동
      num: "프로젝트 셋",
      name: "감성 키네틱 타이포그래피",
      detail: "안채",
      why: "After Effects를 활용한 윤하 '좋아해' 모션 그래픽 시각화 및 뉴미디어 콘텐츠 설계.",
      x: 550,
      y: 250,
      width: 320,
      height: 170,
      isDark: false,
    },
    {
      id: 4,
      roomIndex: 5, // 5번 클릭 시 대청마루로 이동
      num: "프로젝트 넷",
      name: "한국가구공방 브랜드 웹사이트",
      detail: "대청마루",
      why: "한국 가구 공방의 장인정신을 D2C 커머스 사이트로 구현 및 타겟 맞춤형 고관여 SNS 마케팅 실행",
      x: 30,
      y: 450,
      width: 840,
      height: 100,
      isDark: true,
    },
    {
      id: 5,
      roomIndex: 6, // 6번 클릭 시 행랑채로 이동
      num: "프로젝트 다섯",
      name: "라이프스타일 콘텐츠 아카이브",
      detail: "행랑채",
      why: "소비자 트렌드를 분석하여 브랜드 협찬 및 제휴를 직접 유치하고, 데이터 기반의 콘텐츠 최적화로 영향력을 확장 중인 자사 SNS 채널 아카이브입니다.",
      x: 550,
      y: 30,
      width: 320,
      height: 190,
      isDark: false,
    },
  ];

  const handleRoomClick = (roomIndex: number) => {
    if (onNavigate) {
      onNavigate(roomIndex);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans">
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
        className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 상단 타이틀 */}
        <div className="text-center mb-3 select-none">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold opacity-40 text-[#4A4E40]">
            Spatial Layout Index
          </span>
          <h2 className="text-4xl font-serif tracking-tight mt-1 text-[#4A4E40] font-bold">공간 전개도</h2>
          <div className="w-10 h-[1px] mx-auto mt-3 bg-[#FF5722] opacity-60" />
        </div>

        {/* 도면 본체 박스 */}
        <div className="relative p-6 bg-white/75 backdrop-blur-lg border border-gray-200/60 rounded-2xl shadow-2xl overflow-visible flex flex-col items-center gap-3">
          {/* 고정형 설명창 레이어 */}
          <div className="w-full h-12 flex items-center justify-center border-b border-gray-200/40 pb-1 select-none">
            <AnimatePresence mode="wait">
              {hoveredRoom !== null && rooms[hoveredRoom] ? (
                <motion.div
                  key={hoveredRoom}
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 3 }}
                  transition={{ duration: 0.15 }}
                  className="text-center max-w-2xl flex flex-col gap-0.5"
                >
                  <span className="text-[11px] text-[#FF5722] font-bold uppercase tracking-wider">
                    {rooms[hoveredRoom].detail} 공간 기획
                  </span>
                  <p className="text-sm text-[#4A4E40] leading-relaxed break-keep font-medium">
                    {rooms[hoveredRoom].why}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-[#4A4E40] tracking-wide font-medium"
                >
                  도면의 각 공간에 마우스를 올리면 상세 기획 서정이 나타납니다.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* 도면 SVG 본체 */}
          <svg width="900" height="560" viewBox="0 0 900 560" className="overflow-visible relative z-10">
            <rect
              x="10"
              y="10"
              width="880"
              height="540"
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
                    rx="6"
                    fill={room.isDark ? "#1E2225" : isHovered ? "#FFF5EE" : "#FFFFFF"}
                    stroke={isHovered ? "#FF5722" : "#4A4E40"}
                    strokeWidth={isHovered ? "2.5" : "1.5"}
                    strokeOpacity={room.isDark ? "1" : isHovered ? "1" : "0.4"}
                    whileHover={{ scale: 1.003 }}
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
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none gap-1.5">
                      {/* 1. 상단 소제목 */}
                      <span
                        className={`text-sm font-mono font-black tracking-wider ${
                          room.isDark ? "text-[#FF5722]" : "text-gray-950 opacity-50"
                        }`}
                      >
                        {room.num}
                      </span>

                      {/* 2. 메인 방 이름 */}
                      <span
                        className={`font-extrabold tracking-tight px-1 leading-snug break-keep transition-colors duration-200 ${
                          room.detail === "대청마루" ? "text-lg" : "text-base"
                        } ${room.isDark ? "text-white" : "text-[#4A4E40]"}`}
                      >
                        {room.name}
                      </span>

                      {/* 3. 하단 세부 장소 구분명 */}
                      <span
                        className={`text-sm font-medium tracking-wide ${
                          room.isDark ? "text-gray-400" : "text-[#FF5722] font-bold"
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
