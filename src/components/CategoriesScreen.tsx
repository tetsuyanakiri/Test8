import React, { useState } from 'react';
import { ALL_ARTIFACTS } from '../data/culturalData';
import { CategoryType, CulturalArtifact, EraType } from '../types';

interface CategoriesScreenProps {
  onSelectArtifact: (art: CulturalArtifact) => void;
  onBookmark: (art: CulturalArtifact) => void;
  isBookmarked: (id: string) => boolean;
}

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
  onSelectArtifact,
  onBookmark,
  isBookmarked
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchWord, setSearchWord] = useState<string>('');

  const filteredItems = ALL_ARTIFACTS.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedRegion !== 'all' && item.region !== selectedRegion) return false;
    if (selectedEra !== 'all' && !item.era.includes(selectedEra as any)) return false;
    if (searchWord.trim()) {
      const q = searchWord.toLowerCase();
      const matchText = (item.title + item.titleEn + item.description + item.tags.join(' ')).toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-12">
      {/* Title */}
      <div className="space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efeeea] font-mono text-[10px] text-[#735c00] uppercase tracking-widest font-semibold">
          <span className="material-symbols-outlined text-[16px]">category</span>
          <span>SIAMESE HERITAGE TAXONOMY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
          หมวดหมู่วัฒนธรรมและคลังมรดกสยาม
        </h1>
        <p className="text-sm sm:text-base text-[#45464c] max-w-2xl leading-relaxed">
          สำรวจคลังข้อมูลจำแนกตาม ๕ สาขาศิลปวัฒนธรรม ๔ ภูมิภาค และ ๔ ยุคสมัยทางประวัติศาสตร์ พร้อมระบบสืบค้นลึก
        </p>
      </div>

      {/* Filter Control Box */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-[#efeeea] space-y-4 mb-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Keyword Search */}
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#76777d]">
              search
            </span>
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="ค้นหาในหมวดหมู่ เช่น โขน, ลายรดน้ำ, ต้มยำ, วัดอรุณ..."
              className="w-full bg-[#f5f3ef] pl-10 pr-4 py-2.5 rounded-lg text-sm text-[#1b1c1a] placeholder-[#76777d] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#735c00] border border-[#efeeea]"
            />
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="font-mono text-[11px] text-[#76777d] uppercase tracking-wider whitespace-nowrap">
              ภูมิภาค:
            </span>
            {['all', 'ภาคกลาง', 'ภาคเหนือ', 'ภาคอีสาน', 'ภาคใต้'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-full font-mono text-xs transition-colors cursor-pointer whitespace-nowrap ${
                  selectedRegion === reg
                    ? 'bg-black text-white'
                    : 'bg-[#f5f3ef] text-[#45464c] hover:bg-[#efeeea]'
                }`}
              >
                {reg === 'all' ? 'ทุกภาค' : reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#efeeea]">
          <span className="font-mono text-[11px] text-[#76777d] uppercase tracking-wider mr-1">
            สาขา:
          </span>
          {[
            { id: 'all', label: 'ทั้งหมด (All)' },
            { id: 'performing_arts', label: 'นาฏยศิลป์ & การแสดง' },
            { id: 'culinary', label: 'อาหารไทย & สำรับหลวง' },
            { id: 'festivals', label: 'เทศกาล & ประเพณี' },
            { id: 'craftsmanship', label: 'ช่างสิบหมู่ & ประณีตศิลป์' },
            { id: 'architecture', label: 'สถาปัตยกรรม & พุทธศิลป์' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#ffe088] text-[#241a00] font-semibold shadow-sm'
                  : 'bg-[#f5f3ef] text-[#45464c] hover:bg-[#efeeea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const bookmarked = isBookmarked(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#efeeea] flex flex-col group"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden bg-[#131b2e] cursor-pointer"
                onClick={() => onSelectArtifact(item)}
              >
                <img
                  src={item.image}
                  alt={item.altText}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase font-semibold">
                    {item.badge}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookmark(item);
                  }}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    bookmarked
                      ? 'bg-[#fed65b] text-[#241a00]'
                      : 'bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm'
                  }`}
                  title={bookmarked ? 'ลบจากบุ๊กมาร์ก' : 'บันทึกในคลัง'}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {bookmarked ? 'bookmark_added' : 'bookmark_border'}
                  </span>
                </button>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#735c00] font-semibold">
                    {item.titleEn}
                  </div>
                  <h3
                    onClick={() => onSelectArtifact(item)}
                    className="text-lg font-bold text-[#1b1c1a] group-hover:text-[#735c00] transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#45464c] line-clamp-2 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#efeeea] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#76777d]">
                    {item.eraLabel} · {item.region}
                  </span>
                  <button
                    onClick={() => onSelectArtifact(item)}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#735c00] hover:text-[#1b1c1a] font-semibold cursor-pointer"
                  >
                    <span>อ่านรายละเอียด</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 space-y-3 bg-white rounded-xl border border-[#efeeea]">
          <span className="material-symbols-outlined text-4xl text-[#76777d]">
            search_off
          </span>
          <p className="text-sm text-[#45464c]">
            ไม่พบรายการที่ตรงกับเงื่อนไขการค้นหา ลองปรับตัวกรองหรือล้างคำค้น
          </p>
        </div>
      )}
    </div>
  );
};
