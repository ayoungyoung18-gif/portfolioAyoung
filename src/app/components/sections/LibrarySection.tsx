import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Instagram,
  Globe,
  X,
  MapPin,
  Coffee,
  Utensils,
  Sparkles,
  Heart,
  MessageCircle,
  ArrowUpRight,
  Phone,
  Mail,
  Contact,
} from "lucide-react";

// 이미지 import 경로
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

export default function LibrarySection() {
  // 모달 상태를 instagram, blog, contact 3가지로 확장
  const [bookOpen, setBookOpen] = useState<"instagram" | "blog" | "contact" | null>(null);

  // [본인의 실제 연락처 정보로 수정해서 사용하세요]
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
      isLatest: true,
      imageSrc: blogImg1,
      title: "N차 집들이 후기 및 집들이 팁! 공유 (밀푀유나베와 라구파스타)",
      desc: "노릇하게 구워낸 두부와 신선한 버섯을 가득 채운 뜨끈한 밀푀유나베, 치즈 풍미를 더한 리가토니 라구 파스타까지! 소중한 사람들과 함께 나눈 테이블 세팅과 실전 집들이 꿀팁들을 담았습니다.",
    },
    {
      id: 2,
      tag: "국내여행/맛집",
      isLatest: false,
      imageSrc: blogImg2,
      title: "제주도 JW 메리어트 제주 리조트 & 스파 여우물에서 먹는 심야식당 후기",
      desc: "고즈넉한 제주의 밤을 채우는 미식 아카이브. 투명한 유리 플레이트 위에 감각적으로 플레이팅된 크리미한 소스와 김, 그리고 탱글하고 달큰한 새우 아뮤즈 부쉬까지 오감을 자극하는 특별한 파인데이닝 후기입니다.",
    },
    {
      id: 3,
      tag: "국내여행/시장맛집",
      isLatest: false,
      imageSrc: blogImg3,
      title: "강원도 속초 오징어 맛집 투어 및 속초맛집 솔직후기 (누룽지오징어순대, 오징어회, 오징어해장국)",
      desc: "식감 천재 속초 미식 투어! 호일 위에서 겉은 완전히 바삭하고 속은 촉촉하게 부쳐내 정겨운 시장의 맛을 품은 누룽지오징어순대부터, 신선한 오징어회와 깊은 국물의 오징어해장국까지 생생한 내돈내산 후기입니다.",
    },
  ];

  const instaFeeds = [
    { id: 1, imageSrc: instaImg1, likes: "342", comments: "28", linkUrl: "", isSpecial: true },
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
      <div className="absolute inset-0 z-0">
        <img src={libraryBg} alt="Library" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[#FDFCF0]/85 backdrop-blur-[1px]" />
      </div>

      <div className="absolute top-0 w-full h-1 bg-[#4A4E40]/10" />

      <motion.div
        className="relative z-10 w-full max-w-6xl px-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <header className="mb-16 text-center">
          <motion.span className="text-[10px] tracking-[0.6em] text-[#8C8A83] uppercase font-bold">
            Space 04 / Archive
          </motion.span>
          <h2 className="text-5xl font-serif mt-3 text-[#4A4E40] font-bold">행랑채</h2>
          <p className="text-sm text-[#8C8A83] mt-4 font-light tracking-wide italic">
            "일상의 따뜻한 기록과 화려한 시선이 머무는 곳"
          </p>
        </header>

        {/* 📚 책 오브제 영역 (3개의 균형감 있는 배치) */}
        <div className="flex gap-12 justify-center items-center">
          {/* 1. Instagram Book */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen(bookOpen === "instagram" ? null : "instagram")}
            whileHover={{ y: -10 }}
          >
            <div className="w-48 h-64 bg-white border border-[#4A4E40]/10 rounded-sm shadow-xl flex flex-col items-center justify-center overflow-hidden relative transition-all group-hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#E1306C]/10 border-r border-black/5" />
              <Instagram className="w-10 h-10 text-[#E1306C] mb-5 opacity-80" />
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#4A4E40] uppercase">Instagram</h4>
              <span className="text-[9px] text-[#8C8A83] mt-1.5 italic">Aesthetic Posts</span>
            </div>
            <div className="absolute -bottom-4 w-full h-4 bg-black/5 blur-xl rounded-full" />
          </motion.div>

          {/* 2. Blog Book */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen(bookOpen === "blog" ? null : "blog")}
            whileHover={{ y: -10 }}
          >
            <div className="w-48 h-64 bg-white border border-[#4A4E40]/10 rounded-sm shadow-xl flex flex-col items-center justify-center overflow-hidden relative transition-all group-hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#03C75A]/10 border-r border-black/5" />
              <Globe className="w-10 h-10 text-[#03C75A] mb-5 opacity-80" />
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#4A4E40] uppercase">Naver Blog</h4>
              <span className="text-[9px] text-[#8C8A83] mt-1.5 italic">Local Taste & Life</span>
            </div>
            <div className="absolute -bottom-4 w-full h-4 bg-black/5 blur-xl rounded-full" />
          </motion.div>

          {/* 3. Contact Book */}
          <motion.div
            className="group relative cursor-pointer"
            onClick={() => setBookOpen(bookOpen === "contact" ? null : "contact")}
            whileHover={{ y: -10 }}
          >
            <div className="w-48 h-64 bg-white border border-[#4A4E40]/10 rounded-sm shadow-xl flex flex-col items-center justify-center overflow-hidden relative transition-all group-hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#E8A398]/20 border-r border-black/5" />
              <Contact className="w-10 h-10 text-[#E8A398] mb-5 opacity-90" />
              <h4 className="text-xs font-bold tracking-[0.2em] text-[#4A4E40] uppercase">Contact</h4>
              <span className="text-[9px] text-[#8C8A83] mt-1.5 italic">Address Book</span>
            </div>
            <div className="absolute -bottom-4 w-full h-4 bg-black/5 blur-xl rounded-full" />
          </motion.div>
        </div>

        {/* 상세 내용 모달 */}
        <AnimatePresence>
          {bookOpen && (
            <motion.div
              className="absolute inset-0 z-40 flex items-center justify-center p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-[#4A4E40]/20 backdrop-blur-md" onClick={() => setBookOpen(null)} />

              <motion.div
                className="bg-[#F7F6F2] w-full max-w-4xl h-[560px] rounded-sm shadow-2xl flex overflow-hidden relative"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
              >
                <button
                  className="absolute top-6 right-6 z-50 text-[#4A4E40]/40 hover:text-[#4A4E40]"
                  onClick={() => setBookOpen(null)}
                >
                  <X size={24} />
                </button>

                {/* 📖 [여기가 책 내부 왼쪽 레이아웃입니다] */}
                <div className="w-1/4 p-10 bg-white flex flex-col justify-between border-r border-black/5">
                  <div>
                    <h5 className="text-xl font-serif text-[#4A4E40] mb-4 leading-snug">
                      {bookOpen === "instagram" && "예쁜 순간의 수집"}
                      {bookOpen === "blog" && "정성스런 일상 기록"}
                      {bookOpen === "contact" && "소통의 시작점"}
                    </h5>
                    <p className="text-[11px] leading-relaxed text-[#8C8A83] font-light break-keep">
                      {bookOpen === "instagram" &&
                        "눈이 즐거워지는 화려한 티파티, 감각적인 레스토랑과 도심 속 가장 트렌디한 핫플레이스의 비주얼 아카이브입니다."}
                      {bookOpen === "blog" &&
                        "골목 숨은 국내 맛집과 정겨운 전통시장 탐방, 정성을 담은 집밥과 따뜻한 집들이 추억 등 발길과 손길이 닿은 여정입니다."}
                      {bookOpen === "contact" &&
                        "기록을 보며 나누고 싶은 이야기가 생기셨다면 언제든 편하게 발걸음을 남겨주세요. 상시 열려있는 소통의 방입니다."}
                    </p>
                  </div>

                  {/* ✨ [수정 반영 파트] 책 내부 왼쪽 하단 영역 */}
                  <div className="space-y-4">
                    {/* 인스타그램 책을 눌렀을 때만 나타나는 보러가기 링크 버튼 */}
                    {bookOpen === "instagram" && (
                      <a
                        href="https://www.instagram.com/lucie_rove/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#4A4E40]/5 hover:bg-[#4A4E40] text-[#4A4E40] hover:text-white border border-[#4A4E40]/20 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
                      >
                        <Instagram size={12} />
                        Visit Instagram
                      </a>
                    )}
                    {bookOpen === "blog" && (
                      <a
                        href="https://blog.naver.com/lulia20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#03C75A]/5 hover:bg-[#03C75A] text-[#03C75A] hover:text-white border border-[#03C75A]/20 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
                      >
                        <Globe size={12} />
                        Visit Naver Blog
                      </a>
                    )}
                    <div>
                      <span className="text-[10px] tracking-widest text-[#E8A398] font-bold uppercase block mb-1">
                        Archive Room
                      </span>
                      <span className="text-[9px] text-[#8C8A83] block font-light">행랑채 고유의 식별 보드</span>
                    </div>
                  </div>
                </div>

                {/* 모달 오른쪽 레이아웃 */}
                <div className="w-3/4 p-10 overflow-y-auto bg-[#F7F6F2]/50">
                  {bookOpen === "instagram" && (
                    <div className="grid grid-cols-3 gap-3">
                      {instaFeeds.map((feed) => {
                        const CardComponent = feed.linkUrl ? "a" : "div";
                        const extraProps = feed.linkUrl
                          ? { href: feed.linkUrl, target: "_blank", rel: "noopener noreferrer" }
                          : {};
                        return (
                          <CardComponent
                            key={feed.id}
                            {...extraProps}
                            className="aspect-square bg-white border border-black/5 rounded-sm overflow-hidden relative group cursor-pointer shadow-sm block"
                          >
                            <img
                              src={feed.imageSrc}
                              alt={`Instagram Feed ${feed.id}`}
                              className="w-full h-full object-cover transition-transform duration-5xl group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white text-xs font-semibold">
                              <span className="flex items-center gap-1">
                                <Heart size={14} className="fill-white" /> {feed.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle size={14} className="fill-white" /> {feed.comments}
                              </span>
                            </div>
                          </CardComponent>
                        );
                      })}
                    </div>
                  )}
                  {bookOpen === "blog" && (
                    <div className="space-y-4">
                      {blogFeeds.map((feed) => (
                        <div
                          key={feed.id}
                          className="bg-white border border-[#03C75A]/10 hover:border-[#03C75A]/40 transition-all rounded-sm shadow-sm overflow-hidden flex h-40"
                        >
                          <div className="w-1/3 h-full bg-gray-100 overflow-hidden relative">
                            <img
                              src={feed.imageSrc}
                              alt={feed.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              loading="lazy"
                            />
                            {feed.isLatest && (
                              <span className="absolute top-2 left-2 bg-[#03C75A] text-white font-bold text-[8px] px-1.5 py-0.5 rounded-sm tracking-wider uppercase">
                                Latest
                              </span>
                            )}
                          </div>
                          <div className="w-2/3 p-5 flex flex-col justify-center">
                            <span className="text-[9px] font-bold text-[#03C75A] tracking-wide block mb-0.5">
                              {feed.tag}
                            </span>
                            <h6 className="text-sm font-bold text-[#4A4E40] leading-snug break-keep line-clamp-1">
                              {feed.title}
                            </h6>
                            <p className="text-[11px] text-[#8C8A83] mt-1.5 leading-relaxed break-keep line-clamp-3">
                              {feed.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 📖 [신규 추가] 세 번째 책: 격자 주소록 테마의 연락처 리스트 */}
                  {bookOpen === "contact" && (
                    <div className="bg-white p-8 border border-black/5 shadow-sm rounded-sm h-full flex flex-col justify-between relative overflow-hidden">
                      {/* 디자인: 전통 원고지/아날로그 일기장 스타일의 내상 상단 데코 */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#E8A398]/40" />

                      <div className="space-y-6">
                        <div className="border-b border-black/10 pb-4">
                          <h6 className="text-xs uppercase font-bold tracking-widest text-[#E8A398]">Personal Index</h6>
                          <h4 className="text-2xl font-serif text-[#4A4E40] mt-1">{myContact.name}</h4>
                        </div>

                        {/* 줄글 형태의 감성 전화번호부 레이아웃 */}
                        <div className="space-y-5">
                          <a
                            href={`tel:${myContact.phone}`}
                            className="flex items-center justify-between py-2 border-b border-black/5 hover:border-[#E8A398]/40 transition-colors group"
                          >
                            <div className="flex items-center gap-3 text-sm font-medium text-[#4A4E40]">
                              <Phone className="w-4 h-4 text-[#8C8A83] group-hover:text-[#E8A398] transition-colors" />
                              <span>전화번호</span>
                            </div>
                            <span className="text-sm font-mono text-[#8C8A83] group-hover:text-[#4A4E40] transition-colors">
                              {myContact.phone}
                            </span>
                          </a>

                          <a
                            href={`mailto:${myContact.email}`}
                            className="flex items-center justify-between py-2 border-b border-black/5 hover:border-[#E8A398]/40 transition-colors group"
                          >
                            <div className="flex items-center gap-3 text-sm font-medium text-[#4A4E40]">
                              <Mail className="w-4 h-4 text-[#8C8A83] group-hover:text-[#E8A398] transition-colors" />
                              <span>이메일 주소</span>
                            </div>
                            <span className="text-sm font-mono text-[#8C8A83] group-hover:text-[#4A4E40] transition-colors break-all">
                              {myContact.email}
                            </span>
                          </a>

                          <div className="flex items-center justify-between py-2 border-b border-black/5 group">
                            <div className="flex items-center gap-3 text-sm font-medium text-[#4A4E40]">
                              <MapPin className="w-4 h-4 text-[#8C8A83]" />
                              <span>활동 지역</span>
                            </div>
                            <span className="text-sm text-[#8C8A83] font-light">{myContact.location}</span>
                          </div>

                          <div className="flex items-center justify-between py-2 border-b border-black/5 group">
                            <div className="flex items-center gap-3 text-sm font-medium text-[#4A4E40]">
                              <Instagram className="w-4 h-4 text-[#8C8A83]" />
                              <span>인스타그램</span>
                            </div>
                            <span className="text-sm font-mono text-[#8C8A83]">{myContact.instagram}</span>
                          </div>

                          <div className="flex items-center justify-between py-2 border-b border-black/5 group">
                            <div className="flex items-center gap-3 text-sm font-medium text-[#4A4E40]">
                              <Globe className="w-4 h-4 text-[#8C8A83]" />
                              <span>네이버 블로그</span>
                            </div>
                            <span className="text-sm font-mono text-[#8C8A83]">{myContact.blog}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-[10px] text-[#8C8A83] font-light italic text-right pt-4 border-t border-black/5">
                        * 항목을 누르시면 전화 걸기 및 메일 발송 화면으로 즉시 연결됩니다.
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p className="mt-16 text-[10px] tracking-[0.4em] text-[#8C8A83] uppercase font-bold animate-pulse">
          Click the book to open archive
        </motion.p>
      </motion.div>
    </div>
  );
}
