import React from 'react';
import { CulturalArtifact } from '../types';

interface CulturalPillarsSectionProps {
  pillars: CulturalArtifact[];
  onSelectPillar: (pillar: CulturalArtifact) => void;
  onBookmark: (item: CulturalArtifact) => void;
  isBookmarked: (id: string) => boolean;
}

export const CulturalPillarsSection: React.FC<CulturalPillarsSectionProps> = ({
  pillars,
  onSelectPillar,
  onBookmark,
  isBookmarked
}) => {
  return (
    <section className="max-w-[1360px] w-full mx-auto px-6 py-10" id="explore-pillars">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-[#735c00] font-mono text-xs uppercase tracking-widest mb-2 font-medium">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            <span>เสาหลักมรดกภูมิปัญญาไทย ๔ มิติ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
            สุนทรียศิลป์และอัตลักษณ์แห่งสยาม
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#45464c] max-w-md leading-relaxed">
          รวบรวมแก่นแท้แห่งวิถีชีวิต ความวิจิตรบรรจง และความศรัทธาที่ถ่ายทอดจากรุ่นสู่รุ่นภายใต้บริบทสากลร่วมสมัย
        </p>
      </div>

      {/* 4 Pillars Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar) => {
          const bookmarked = isBookmarked(pillar.id);

          return (
            <article
              key={pillar.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-[#efeeea]"
            >
              {/* Media Container 16:9 */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden bg-[#131b2e] cursor-pointer"
                onClick={() => onSelectPillar(pillar)}
              >
                <img
                  src={pillar.image}
                  alt={pillar.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-black/20 to-transparent opacity-85" />

                {/* Badge Tag Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase tracking-widest shadow-sm">
                    {pillar.badge}
                  </span>
                </div>

                {/* Bookmark Button Top Right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookmark(pillar);
                  }}
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    bookmarked
                      ? 'bg-[#fed65b] text-[#241a00] shadow-md'
                      : 'bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm'
                  }`}
                  title={bookmarked ? 'ลบจากบุ๊กมาร์ก' : 'บันทึกในคลังส่วนตัว'}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {bookmarked ? 'bookmark_added' : 'bookmark_border'}
                  </span>
                </button>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#ffe088] font-medium">
                    {pillar.titleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm">
                    {pillar.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <p className="text-sm text-[#45464c] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  {pillar.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-[#45464c] text-xs bg-[#f5f3ef] p-2.5 rounded-lg border border-[#efeeea]"
                    >
                      <span className="flex items-center gap-2 font-medium text-[#1b1c1a] truncate pr-2">
                        <span className="material-symbols-outlined text-[#735c00] text-[18px] shrink-0">
                          {hl.icon}
                        </span>
                        <span className="truncate">{hl.label}</span>
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-[#735c00] shrink-0">
                        {hl.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="pt-2 flex items-center justify-between border-t border-[#efeeea]">
                  <span className="font-mono text-[11px] text-[#76777d] uppercase tracking-wider">
                    {pillar.category === 'performing_arts' && 'คลังข้อมูล 48 บทบันทึก'}
                    {pillar.category === 'culinary' && 'คลังข้อมูล 64 บทบันทึก'}
                    {pillar.category === 'festivals' && 'คลังข้อมูล 32 เทศกาล'}
                    {pillar.category === 'craftsmanship' && 'คลังข้อมูล 75 หัตถกรรม'}
                  </span>
                  <button
                    onClick={() => onSelectPillar(pillar)}
                    className="inline-flex items-center gap-1 text-xs text-[#735c00] hover:text-[#1b1c1a] font-semibold transition-colors cursor-pointer"
                  >
                    <span>สำรวจหมวดหมู่นี้</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
