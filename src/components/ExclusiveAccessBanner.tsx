import React from 'react';

interface ExclusiveAccessBannerProps {
  onOpenAuth: (tab: 'login' | 'register') => void;
  onSelectDoc: () => void;
}

export const ExclusiveAccessBanner: React.FC<ExclusiveAccessBannerProps> = ({
  onOpenAuth,
  onSelectDoc
}) => {
  return (
    <section className="max-w-[1360px] w-full mx-auto px-6 py-10">
      <div className="relative rounded-2xl overflow-hidden bg-[#131b2e] text-white p-8 sm:p-12 shadow-2xl border border-white/10">
        {/* Decorative Backdrop Glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#735c00]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase tracking-widest border border-[#ffdad6]/20">
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              <span>EXCLUSIVE HERITAGE ACCESS</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              เปิดประตูสู่หอจดหมายเหตุชั้นสูง <br />
              <span className="text-[#ffe088]">
                สารคดีมรดกสยาม 4K และเอกสารโบราณลายลักษณ์อักษร
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#e4e2de] max-w-2xl leading-relaxed font-normal">
              สมัครสมาชิก "ภาคีมรดกสยาม" เพื่อรับสิทธิพิเศษในการรับชมซีรีส์สารคดีช่างสิบหมู่, ดาวน์โหลดแผนผังลายรดน้ำความละเอียดสูง, และเข้าร่วมการบรรยายเสวนาเชิงประวัติศาสตร์รายเดือน
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('register')}
                className="px-6 py-3 rounded-lg bg-[#ffe088] text-[#241a00] hover:bg-[#fed65b] transition-all font-mono text-xs uppercase tracking-wider font-semibold shadow-lg cursor-pointer"
              >
                สมัครสมาชิกฟรีวันนี้ (Register)
              </button>
              <button
                onClick={() => onOpenAuth('login')}
                className="px-5 py-3 rounded-lg bg-white/15 backdrop-blur-md text-white hover:bg-white/25 transition-all font-mono text-xs uppercase tracking-wider cursor-pointer border border-white/15"
              >
                ลงชื่อเข้าใช้สมาชิก (Sign In)
              </button>
              <span className="font-mono text-xs text-[#e4e2de]">
                ไม่มีค่าใช้จ่ายในการเปิดบัญชีพื้นฐาน
              </span>
            </div>
          </div>

          {/* Featured Documentary Vignette Card */}
          <div
            onClick={onSelectDoc}
            className="lg:col-span-4 bg-white/10 backdrop-blur-md p-4 rounded-xl space-y-3 shadow-inner border border-white/15 cursor-pointer hover:bg-white/15 transition-all group"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiuXaQm0d1cHkLBWvqXSYjq0Vp4KtHjD2sjXo7prfBAopHh-l3QD2EsrtfDG89jSFJ_8OerBX0LdxC5InzNxJALPWsgjtJEyJZKc5SdB5E-N0-4JtKDJLbei40LDOo2KqujIuxLOsFcaQ6kwH-qvvnI_Xc8Pzf2t_2yQxGDdnITtXKpyqBNxH1ulzaWBHt8BZjPI0jIQslbyB1_DLzWxQEKYdExmeLbkmHxxz8f82uB0ztUTbdsIxY"
                alt="Golden Siamese architectural pagoda silhouette against deep indigo twilight sky"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase">
                NEW RELEASE
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#ffe088] uppercase tracking-wider">
                สารคดีเข้าใหม่ประจำเดือน
              </div>
              <div className="text-lg font-bold text-white group-hover:text-[#ffe088] transition-colors">
                พระมหาธาตุเจดีย์: มหาศรัทธาสยาม
              </div>
              <div className="text-xs text-[#e4e2de] mt-1 leading-normal">
                สัมผัสโครงสร้างสถาปัตยกรรมยอดแหลมที่ท้าทายกาลเวลากว่า ๗๐๐ ปี
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
