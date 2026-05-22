import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Globe, X, MapPin, Heart, MessageCircle, Phone, Mail, Contact, ArrowUpRight } from "lucide-react";

// 이미지 import 경로 유지
import libraryBg from "../../../assets/images/hangrang.jpg";
import blogImg1 from "../../../assets/images/blog_homeparty.jpg";
import blogImg2 from "../../../assets/images/blog_jeju.jpg";
import blogImg3 from "../../../assets/images/blog_sokcho.jpg";

import instaImg1 from "../../../assets/images/insta_img1.jpg";
import instaImg2 from "../../../assets/images/insta_img2.jpg";
import instaImg3 from "../../../assets/images/insta_img3.jpg";
import instaImg4 from "../../../assets/images/insta_img4.jpg";
import instaImg5 from "../../../assets/images/insta_img5.jpg";
import instaImg6 from "../../../assets/images/insta_img6.jpg";
import instaImg7 from "../../../assets/images/insta_img7.jpg";
import instaImg8 from "../../../assets/images/insta_img8.jpg";
import instaImg9 from "../../../assets/images/insta_img9.jpg";

interface LibrarySectionProps {
  currentIndex?: number;
}

export default function LibrarySection({ currentIndex }: LibrarySectionProps) {
  const [bookOpen, setBookOpen] = useState<"인스타그램 책" | "네이버블로그 책" | "전화번호부" | null>(null);

  const MY_SECTION_INDEX = 5;
  const isCurrentActive = currentIndex === MY_SECTION_INDEX;

  useEffect(() => {
    if (!isCurrentActive) {
      setBookOpen(null);
    }
  }, [isCurrentActive]);

  const myContact = {
    name: "한아영",
    phone: "010-3023-6265",
    email: "lulia20@naver.com",
    instagram: "@lucie_rove",
    blog: "lulia20",
    location: "Seoul, South Korea",
  };

  const blogFeeds = [
    {
      id: 1,
      tag: "집밥/집들이",
      imageSrc: blogImg1,
      title: "N차 집들이 후기 및 집들이 팁! 공유 (밀푀유나베와 라구파스타)",
      desc: "노릇하게 구워낸 두부와 신선한 버섯을 가득 채운 뜨끈한 밀푀유나베, 치즈 풍미를 더한 리가토니 라구 파스타까지! 소중한 사람들과 함께 나눈 테이블 세팅과 실전 집들이 꿀팁들을 담았습니다.",
    },
    {
      id: 2,
      tag: "국내여행/맛집",
      imageSrc: blogImg2,
      title: "제주도 JW 메리어트 제주 리조트 & 스파 여우물에서 먹는 심야식당 후기",
      desc: "고즈넉한 제주의 밤을 채우는 미식 아카이브. 투명한 유리 플레이트 위에 감각적으로 플레이팅된 크리미한 소스와 김, 그리고 탱글하고 달큰한 새우 후기입니다.",
    },
    {
      id: 3,
      tag: "국내여행/시장맛집",
      imageSrc: blogImg3,
      title: "강원도 속초 오징어 맛집 투어 및 속초맛집 솔직후기 (오징어순대, 회, 해장국)",
      desc: "식감 천재 속초 미식 투어! 호일 위에서 바삭하고 촉촉하게 부쳐내 정겨운 시장의 맛을 품은 누룽지오징어순대부터, 신선한 오징어회와 깊은 국물의 해장국 후기입니다.",
    },
  ];

  const instaFeeds = [
    { id: 1, imageSrc: instaImg1, likes: "342", comments: "28" },
    { id: 2, imageSrc: instaImg2, likes: "95", comments: "8" },
    { id: 3, imageSrc: instaImg3, likes: "168", comments: "21" },
    { id: 4, imageSrc: instaImg4, likes: "89", comments: "6" },
    { id: 5, imageSrc: instaImg5, likes: "234", comments: "35" },
    { id: 6, imageSrc: instaImg6, likes: "115", comments: "14" },
    { id: 7, imageSrc: instaImg7, likes: "102", comments: "9" },
    { id: 8, imageSrc: instaImg8, likes: "151", comments: "18" },
    { id: 9, imageSrc: instaImg9, likes: "197", comments: "26" },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden font-sans bg-black">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <img src={libraryBg} alt="Library" className="w-full h-full object-cover pointer-events-none" loading="lazy" />
        <div className="absolute inset-0 bg-[#FDFCF0]/85 backdrop-blur-[1px]" />
      </div>

      <div className="absolute top-0 w-full h-1 bg-[#4A4E40]/10" />

      {/* 2. Main Content Frame */}
      <div className="relative z-10 w-full max-w-6xl h-full max-h-[800px] px-10 flex flex-col justify-center items-center pt-2">
        <header className="mb-5 text-center select-none">
          <span className="text-[10px] tracking-[0.5em] text-[#FF5722] font-black uppercase block">
            프로젝트 다섯_행랑채
          </span>
          <h2 className="text-4xl font-sans mt-1 text-[#4A4E40] font-black">SNS 및 연락처</h2>
          <p className="text-xs text-[#8C8A83] mt-2.5 font-bold tracking-wide italic">
            "소비자 트렌드를 분석하여 브랜드 협찬을 유치하고 콘텐츠를 최적화하는 디지털 아카이브"
          </p>
          <div className="w-10 h-[1px] mx-auto mt-3 bg-[#FF5722] opacity-60" />
        </header>

        {/* 📚 3. 책 트리거 오브제 구역 (모두동일 w-48 h-64 규격) */}
        <div className="flex gap-10 justify-center items-center pointer-events-auto mb-4">
          {/* 1. 인스타그램 책 */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen("인스타그램 책")}
            whileHover={{ y: -15, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-48 h-64 bg-gradient-to-br from-[#FF5722]/90 via-[#FF7A45]/85 to-[#FFC069]/85 backdrop-blur-md border border-white/20 rounded-md shadow-2xl flex flex-col items-center justify-between p-5 transition-all group-hover:scale-[1.02]">
              <div className="absolute top-0 right-3 w-[1px] h-full bg-white/20 border-r border-black/5" />
              <span className="text-[9px] font-mono tracking-widest text-white/50 font-black self-start">壹 (01)</span>
              <Instagram className="w-11 h-11 text-white drop-shadow-lg my-auto group-hover:rotate-6 transition-transform duration-300" />
              <div className="text-center w-full z-10">
                <h4 className="text-[15px] font-black tracking-[0.15em] text-white drop-shadow">인스타그램 책</h4>
                <span className="text-[10px] text-white/80 font-bold mt-1 block">Aesthetic Feed</span>
              </div>
            </div>
          </motion.div>

          {/* 2. 네이버 블로그 책 */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen("네이버블로그 책")}
            whileHover={{ y: -15, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-48 h-64 bg-gradient-to-br from-[#03C75A]/95 via-[#10A356]/85 to-[#69C08C]/85 backdrop-blur-md border border-white/20 rounded-md shadow-2xl flex flex-col items-center justify-between p-5 transition-all group-hover:scale-[1.02]">
              <div className="absolute top-0 right-3 w-[1px] h-full bg-white/20 border-r border-black/5" />
              <span className="text-[9px] font-mono tracking-widest text-white/50 font-black self-start">貳 (02)</span>
              <Globe className="w-11 h-11 text-white drop-shadow-lg my-auto group-hover:rotate-6 transition-transform duration-300" />
              <div className="text-center w-full z-10">
                <h4 className="text-[15px] font-black tracking-[0.15em] text-white drop-shadow">네이버 블로그 책</h4>
                <span className="text-[10px] text-white/70 font-bold mt-1 block">Taste Insight</span>
              </div>
            </div>
          </motion.div>

          {/* 3. 전화번호부 */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen("전화번호부")}
            whileHover={{ y: -15, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-48 h-64 bg-gradient-to-br from-[#A0522D]/95 via-[#BC8F8F]/90 to-[#E8A398]/90 backdrop-blur-md border border-white/20 rounded-md shadow-2xl flex flex-col items-center justify-between p-5 transition-all group-hover:scale-[1.02]">
              <div className="absolute top-0 right-3 w-[1px] h-full bg-white/20 border-r border-black/5" />
              <span className="text-[9px] font-mono tracking-widest text-white/50 font-black self-start">參 (03)</span>
              <Contact className="w-11 h-11 text-white drop-shadow-lg my-auto group-hover:rotate-6 transition-transform duration-300" />
              <div className="text-center w-full z-10">
                <h4 className="text-[15px] font-black tracking-[0.15em] text-white uppercase drop-shadow">
                  전화번호부
                </h4>
                <span className="text-[9px] text-white/70 font-bold mt-1 block">Network Card</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 📚 4. Expandable Layout Panel (h-[580px] 스펙 유지) */}
        <AnimatePresence>
          {bookOpen && (
            <motion.div
              className="absolute inset-0 z-40 flex items-center justify-center p-6 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBookOpen(null)} />

              <motion.div
                className="bg-[#F7F6F2] w-full max-w-6xl h-[580px] rounded-2xl shadow-2xl flex overflow-hidden relative border border-gray-200/40"
                initial={{ scale: 0.96, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <button
                  className="absolute top-5 right-5 z-50 text-gray-400 hover:text-black p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => setBookOpen(null)}
                >
                  <X size={20} />
                </button>

                {/* Left Page (Index Pane) */}
                <motion.div
                  className="w-1/4 p-8 bg-white flex flex-col justify-between border-r border-black/5 text-left select-none"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <div>
                    <h5 className="text-lg font-sans text-[#4A4E40] mb-3 font-black tracking-tight">
                      {bookOpen === "인스타그램 책" && "예쁜 순간의 수집"}
                      {bookOpen === "네이버블로그 책" && "정성스런 일상 기록"}
                      {bookOpen === "전화번호부" && "소통의 시작점"}
                    </h5>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed break-keep">
                      디지털 환경에 최적화된 마케팅 인사이트와 아영님 고유의 라이프스타일 데이터를 축적하는
                      아카이브입니다.
                    </p>
                  </div>

                  <div className="text-[11px] text-gray-400 font-mono space-y-0.5">
                    <p className="text-xs text-[#4A4E40] font-bold">
                      기록_ {bookOpen === "인스타그램 책" && "lucie_rove"}
                      {bookOpen === "네이버블로그 책" && "로브나시"}
                      {bookOpen === "전화번호부" && "한아영"}
                    </p>
                    <p>{myContact.location}</p>
                    <p>Portfolio Archive © 2026</p>
                  </div>
                </motion.div>

                {/* Right Page */}
                <motion.div
                  className="w-3/4 p-8 bg-white text-left overflow-y-hidden h-full flex flex-col"
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {/* A. 인스타그램 피드 출력 */}
                  {bookOpen === "인스타그램 책" && (
                    <div className="space-y-4 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <h6 className="font-bold text-gray-800 text-sm">인스타그램 피드</h6>
                        <a
                          href="https://www.instagram.com/lucie_rove/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#FF5722] font-black flex items-center gap-1 hover:underline"
                        >
                          {myContact.instagram} <ArrowUpRight size={13} />
                        </a>
                      </div>

                      {/* 🛠️ [격자 크기 최적화] 9개의 완벽한 1:1 정사각형 격자가 스크롤 없이 한 화면에 딱 정돈되어 노출됩니다. */}
                      <div className="max-w-[420px] mx-auto w-full aspect-square grid grid-cols-3 gap-2 border border-gray-100 p-2 bg-gray-50/50 rounded-2xl shadow-inner">
                        {instaFeeds.map((feed) => (
                          <div
                            key={feed.id}
                            className="aspect-square w-full bg-white rounded-lg overflow-hidden relative group shadow-sm cursor-pointer border border-gray-100"
                            onClick={() => window.open("https://instagram.com/lucie_rove", "_blank")}
                          >
                            <img
                              src={feed.imageSrc}
                              alt="Insta"
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-[10px] font-bold pointer-events-none">
                              <span className="flex items-center gap-0.5">
                                <Heart size={10} className="fill-white" /> {feed.likes}
                              </span>
                              <span className="flex items-center gap-0.5">
                                <MessageCircle size={10} className="fill-white" /> {feed.comments}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* B. 네이버 블로그 콘텐츠 피드 출력 */}
                  {bookOpen === "네이버블로그 책" && (
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <h6 className="font-bold text-gray-800 text-sm">네이버 라이프 미식 마케팅 포스트</h6>
                        <a
                          href="https://blog.naver.com/lulia20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-emerald-600 font-black flex items-center gap-1 hover:underline"
                        >
                          ://naver.com{myContact.blog} <ArrowUpRight size={13} />
                        </a>
                      </div>
                      <div className="space-y-2.5">
                        {blogFeeds.map((post) => (
                          <div
                            key={post.id}
                            onClick={() => window.open("https://blog.naver.com/lulia20", "_blank")}
                            className="border border-gray-100 rounded-xl p-2.5 flex gap-4 bg-gray-50/50 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-100 border border-gray-100">
                              <img src={post.imageSrc} alt="Blog" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-center text-left min-w-0">
                              <span className="text-[9px] bg-[#FF5722]/10 border border-[#FF5722]/30 px-2 py-0.5 rounded-full text-[#FF5722] font-black w-fit uppercase">
                                {post.tag}
                              </span>
                              <h4 className="text-xs font-bold mt-1 text-gray-900 truncate">{post.title}</h4>
                              <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1 break-keep font-medium">
                                {post.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* C. 연락처 상세 카드 구성 출력 */}
                  {bookOpen === "전화번호부" && (
                    <div className="h-full flex flex-col justify-center space-y-5 max-w-sm mx-auto py-2">
                      <div className="border-b border-gray-100 pb-2 text-center">
                        <h6 className="font-bold text-gray-800 text-sm">Contact Information</h6>
                        <p className="text-[11px] text-gray-400 mt-0.5">언제든 일할 준비가 되어있습니다.</p>
                      </div>
                      <div className="space-y-3 text-xs font-semibold text-gray-700">
                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                          <Phone size={14} className="text-[#FF5722]" />
                          <span>{myContact.phone}</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                          <Mail size={14} className="text-[#FF5722]" />
                          <span className="font-mono">{myContact.email}</span>
                        </div>
                        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
                          <MapPin size={14} className="text-[#FF5722]" />
                          <span>{myContact.location}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
    </div>
  );
}
