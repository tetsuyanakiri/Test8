import React from 'react';
import { EraType } from '../types';

interface SearchAndFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedEra: EraType;
  setSelectedEra: (era: EraType) => void;
  onTagClick: (tag: string) => void;
  matchCount: number;
}

export const SearchAndFilterBar: React.FC<SearchAndFilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedEra,
  setSelectedEra,
  onTagClick,
  matchCount
}) => {
  const popularTags = [
    { label: '#โขนหลวง', value: 'โขนหลวง' },
    { label: '#มรดกอาหารสยาม', value: 'ต้มยำกุ้ง' },
    { label: '#สงกรานต์ยูเนสโก', value: 'สงกรานต์' },
    { label: '#ผ้ายกทองนครศรี', value: 'ผ้ายกทอง' },
    { label: '#หัตถศิลป์ทองคำ', value: 'ลายรดน้ำ' },
  ];

  return (
    <section className="max-w-[1360px] w-full mx-auto px-6 -mt-8 relative z-20">
      <div className="bg-white p-6 rounded-xl shadow-xl space-y-4 border border-[#efeeea]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="flex-1 relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-[#76777d]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาตามชื่อมรดก, ยุคสมัย (สุโขทัย, อยุธยา, รัตนโกสินทร์), ช่างฝีมือ หรือจังหวัด..."
              className="w-full bg-[#f5f3ef] pl-12 pr-10 py-3 rounded-lg text-sm text-[#1b1c1a] placeholder-[#76777d] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#735c00] focus:shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-[#76777d] hover:text-[#1b1c1a] p-1 cursor-pointer"
                title="ล้างคำค้นหา"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Era Filter Segmented Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#76777d] whitespace-nowrap mr-2">
              ยุคสมัย:
            </span>
            <button
              onClick={() => setSelectedEra('all')}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedEra === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#efeeea] text-[#45464c] hover:bg-[#eae8e4]'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setSelectedEra('sukhothai')}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedEra === 'sukhothai'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#efeeea] text-[#45464c] hover:bg-[#eae8e4]'
              }`}
            >
              สุโขทัย
            </button>
            <button
              onClick={() => setSelectedEra('ayutthaya')}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedEra === 'ayutthaya'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#efeeea] text-[#45464c] hover:bg-[#eae8e4]'
              }`}
            >
              อยุธยา
            </button>
            <button
              onClick={() => setSelectedEra('rattanakosin')}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                selectedEra === 'rattanakosin'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#efeeea] text-[#45464c] hover:bg-[#eae8e4]'
              }`}
            >
              รัตนโกสินทร์
            </button>
          </div>
        </div>

        {/* Quick Category Tag Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#efeeea]/60">
          <span className="font-mono text-[10px] text-[#76777d] uppercase tracking-wider mr-1">
            แท็กยอดนิยม:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag.value}
              onClick={() => onTagClick(tag.value)}
              className="px-2.5 py-1 rounded bg-[#f5f3ef] hover:bg-[#efeeea] text-[#45464c] hover:text-[#1b1c1a] font-mono text-[11px] transition-all cursor-pointer"
            >
              {tag.label}
            </button>
          ))}

          {(searchQuery || selectedEra !== 'all') && (
            <div className="ml-auto flex items-center gap-2 text-xs text-[#735c00] font-medium">
              <span>พบ {matchCount} รายการ</span>
              <button
                onClick={() => { setSearchQuery(''); setSelectedEra('all'); }}
                className="underline hover:text-black cursor-pointer text-[11px]"
              >
                ล้างตัวกรอง
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
