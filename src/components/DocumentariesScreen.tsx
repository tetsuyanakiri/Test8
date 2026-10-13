import React, { useState } from 'react';
import { DOCUMENTARIES } from '../data/culturalData';
import { Documentary } from '../types';

interface DocumentariesScreenProps {
  isLoggedIn: boolean;
  onOpenAuth: (tab: 'login' | 'register') => void;
  onShowToast: (title: string, message: string) => void;
}

export const DocumentariesScreen: React.FC<DocumentariesScreenProps> = ({
  isLoggedIn,
  onOpenAuth,
  onShowToast
}) => {
  const [selectedDoc, setSelectedDoc] = useState<Documentary>(DOCUMENTARIES[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedRes, setSelectedRes] = useState('4K UHD HDR');
  const [selectedSub, setSelectedSub] = useState('ไทย (คำบรรยายภาษาไทย)');
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const handlePlayAttempt = () => {
    if (!isLoggedIn && selectedDoc.isExclusive) {
      onShowToast('เฉพาะสมาชิกพรีเมียม', 'กรุณาเข้าสู่ระบบเพื่อรับชมสารคดีระดับ 4K ฉบับเต็ม');
      setTimeout(() => onOpenAuth('login'), 600);
      return;
    }
    setIsPlayingVideo(!isPlayingVideo);
    if (!isPlayingVideo) {
      onShowToast('กำลังเริ่มถ่ายทอด', `${selectedDoc.title} ความคมชัด ${selectedRes}`);
    }
  };

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131b2e] text-[#ffe088] font-mono text-[10px] uppercase tracking-widest font-semibold">
          <span className="material-symbols-outlined text-[16px]">movie_filter</span>
          <span>ROYAL 4K DOCUMENTARY THEATRE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
          สารคดีมรดกสยามความคมชัด 4K (Exclusive)
        </h1>
        <p className="text-sm sm:text-base text-[#45464c] max-w-2xl leading-relaxed">
          ชมสารคดีบันทึกประวัติศาสตร์โบราณคดีและช่างสิบหมู่ ถ่ายทำด้วยกล้องดิจิทัลความละเอียดสูง 4K HDR และระบบเสียงรอบทิศทาง
        </p>
      </div>

      {/* Main Screening Room Player */}
      <div className="bg-[#131b2e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 text-white">
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={selectedDoc.coverImage}
            alt={selectedDoc.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlayingVideo ? 'opacity-90' : 'opacity-60'
            }`}
          />

          {/* Player Overlay Controls */}
          {!isPlayingVideo ? (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <button
                onClick={handlePlayAttempt}
                className="w-20 h-20 rounded-full bg-[#ffe088] text-[#241a00] hover:scale-110 hover:bg-[#fed65b] flex items-center justify-center transition-all shadow-2xl cursor-pointer"
                title="เริ่มชมสารคดี"
              >
                <span className="material-symbols-outlined text-[44px]">play_arrow</span>
              </button>
              <div>
                <span className="px-3 py-1 rounded bg-[#410002] text-[#ffdad6] font-mono text-xs uppercase font-semibold">
                  {selectedDoc.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedDoc.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#e4e2de] mt-1 max-w-lg">
                  {selectedDoc.subtitle}
                </p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 via-transparent to-black/40">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#ffe088] text-[#241a00] font-mono text-xs font-bold">
                  LIVE STREAMING 4K
                </span>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">pause</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ffe088] h-full w-[45%]" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#e4e2de]">
                  <span>21:30 / 48:00</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#ffe088]">{selectedRes}</span>
                    <span>{selectedSub}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Player Options & Metadata Bar */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/10">
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#ffe088]">
              <span>ความยาว: {selectedDoc.duration}</span>
              <span>·</span>
              <span>ปีที่บันทึก: {selectedDoc.year}</span>
              <span>·</span>
              <span>กำกับและควบคุมงาน: {selectedDoc.director}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {selectedDoc.title}
            </h3>

            <p className="text-sm text-[#e4e2de] leading-relaxed">
              {selectedDoc.description}
            </p>

            {/* Resolution & Subtitle Settings */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#ffe088] font-mono">ความละเอียด:</span>
                {['4K UHD HDR', '1080p FHD', '720p HD'].map((res) => (
                  <button
                    key={res}
                    onClick={() => {
                      setSelectedRes(res);
                      onShowToast('ปรับความละเอียด', `สลับเป็น ${res}`);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      selectedRes === res
                        ? 'bg-[#ffe088] text-[#241a00] font-bold'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {res}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#ffe088] font-mono">คำบรรยาย:</span>
                {['ไทย', 'English'].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      setSelectedSub(sub);
                      onShowToast('สลับคำบรรยาย', sub);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      selectedSub === sub
                        ? 'bg-[#ffe088] text-[#241a00] font-bold'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Chapter Deck (4 cols) */}
          <div className="lg:col-span-4 bg-white/5 p-4 rounded-xl space-y-3 border border-white/10">
            <div className="font-mono text-xs uppercase tracking-wider text-[#ffe088] font-semibold flex items-center justify-between">
              <span>บทและหัวข้อสำคัญในสารคดี</span>
              <span className="material-symbols-outlined text-[16px]">list</span>
            </div>

            <div className="space-y-1.5">
              {selectedDoc.chapters.map((chap, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveChapterIndex(idx);
                    onShowToast('ข้ามไปยังตอน', `${chap.time} - ${chap.title}`);
                  }}
                  className={`p-2.5 rounded-lg text-xs cursor-pointer transition-all flex items-center justify-between ${
                    idx === activeChapterIndex
                      ? 'bg-[#ffe088] text-[#241a00] font-bold'
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <span className="truncate pr-2">{chap.title}</span>
                  <span className="font-mono text-[11px] opacity-80 shrink-0">{chap.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Library of Other Available 4K Documentaries */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#1b1c1a]">
          สารคดีทั้งหมดในคลัง (All Archival Screenings)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENTARIES.map((doc) => (
            <div
              key={doc.id}
              onClick={() => {
                setSelectedDoc(doc);
                setIsPlayingVideo(false);
              }}
              className={`p-4 rounded-xl bg-white border cursor-pointer transition-all flex flex-col sm:flex-row gap-4 items-center ${
                selectedDoc.id === doc.id
                  ? 'border-[#735c00] shadow-md ring-1 ring-[#735c00]'
                  : 'border-[#efeeea] hover:shadow-md'
              }`}
            >
              <div className="relative aspect-video w-full sm:w-44 rounded-lg overflow-hidden bg-black shrink-0">
                <img
                  src={doc.coverImage}
                  alt={doc.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-white font-mono text-[9px]">
                  {doc.resolution}
                </span>
              </div>
              <div className="space-y-1 text-left min-w-0">
                <div className="font-mono text-[10px] text-[#735c00] font-semibold">
                  {doc.badge} · {doc.duration}
                </div>
                <h4 className="font-bold text-[#1b1c1a] text-base truncate">
                  {doc.title}
                </h4>
                <p className="text-xs text-[#45464c] line-clamp-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
