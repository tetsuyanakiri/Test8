import React from 'react';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenAuth: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onOpenAuth }) => {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-[#131b2e] text-white">
      {/* Background Image Layer with Editorial Scrim */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnQb3Rb8jwqAkFh5mPmLwcPemDcdTZ5V-diKZr-LF_GzMj97hb12r-DOpOClZJYVmj5I6XrPsDewWQbNJk0vY7V4BQc1tiQSOxc2gWy5ANS4ikBPDNilTcO1JH0zHuePekhtrFT8YXhF11umhZPTs9MNfccgUBVkpG9ckC5xPiebg8Q6xCLLRc7oKsqR6ETATL1ir2LqE20GrnwHiQrl-zCcYajMfDQd9joNkrvwxkdEj6KpcxYgEe')`
        }}
      />

      {/* Fine Lai Thai Geometric Motif Decorative Watermark */}
      <svg
        className="absolute -right-24 -top-24 w-96 h-96 opacity-10 text-[#735c00] pointer-events-none"
        fill="currentColor"
        viewBox="0 0 200 200"
      >
        <path d="M100 0 L125 75 L200 100 L125 125 L100 200 L75 125 L0 100 L75 75 Z" />
        <circle cx="100" cy="100" fill="none" r="45" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" fill="none" r="70" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 pt-36 pb-20 flex flex-col justify-between min-h-[720px]">
        <div className="max-w-4xl space-y-4">
          {/* Prestige Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md shadow-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ffe088] animate-ping" />
            <span className="font-mono text-[11px] text-[#ffe088] tracking-widest uppercase">
              สมบัติทางวัฒนธรรมมีชีวิตแห่งสยามประเทศ • NATIONAL LIVING HERITAGE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1] drop-shadow-md">
            มรดกวัฒนธรรมไทย <br />
            <span className="text-[#ffe088] font-semibold text-3xl sm:text-4xl lg:text-[42px]">
              งดงามเหนือกาลเวลา
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#e4e2de] max-w-2xl leading-relaxed font-normal">
            ร่วมสืบสาน อนุรักษ์ และดื่มด่ำกับอัตลักษณ์สยามโบราณผ่านเทคโนโลยีดิจิทัล คลังข้อมูลเชิงลึก บันทึกประวัติศาสตร์ความประณีตชั้นสูง และสารคดีระดับ 4K ฉบับหอจดหมายเหตุแห่งชาติ
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ffe088] text-[#241a00] hover:bg-[#fed65b] transition-all shadow-md text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">explore</span>
              <span>สำรวจมรดกไทย</span>
            </button>
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 backdrop-blur-md text-white hover:bg-white/25 transition-all shadow-sm text-xs font-semibold uppercase tracking-wider cursor-pointer border border-white/15"
            >
              <span className="material-symbols-outlined text-[20px]">lock_open</span>
              <span>เข้าสู่ระบบสมาชิก</span>
            </button>
          </div>
        </div>

        {/* Quick Metrics Ribbon Overlay */}
        <div className="mt-10 pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/10">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-lg bg-[#131b2e]/80 text-[#ffe088] flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[28px]">map</span>
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffe088] leading-none">4</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#e4e2de]">
                  ภูมิภาควัฒนธรรม
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-lg bg-[#131b2e]/80 text-[#ffe088] flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[28px]">account_balance</span>
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffe088] leading-none">77</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#e4e2de]">
                  จังหวัดทั่วราชอาณาจักร
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-lg bg-[#131b2e]/80 text-[#ffe088] flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[28px]">award_star</span>
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffe088] leading-none">3</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#e4e2de]">
                  มรดกโลกยูเนสโก (UNESCO)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 rounded-lg bg-[#131b2e]/80 text-[#ffe088] flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-[28px]">video_library</span>
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffe088] leading-none">500+</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#e4e2de]">
                  บันทึกวิดีทัศน์ & คลังเอกสาร
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
