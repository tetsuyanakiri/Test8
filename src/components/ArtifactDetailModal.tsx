import React, { useState } from 'react';
import { CulturalArtifact } from '../types';

interface ArtifactDetailModalProps {
  artifact: CulturalArtifact | null;
  onClose: () => void;
  onBookmark: (artifact: CulturalArtifact) => void;
  isBookmarked: boolean;
  onShowToast: (title: string, message: string) => void;
}

export const ArtifactDetailModal: React.FC<ArtifactDetailModalProps> = ({
  artifact,
  onClose,
  onBookmark,
  isBookmarked,
  onShowToast
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!artifact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#131b2e]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#fbf9f5] rounded-2xl shadow-2xl overflow-hidden my-6 border border-[#efeeea]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#131b2e] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase tracking-wider">
              {artifact.badge}
            </span>
            <span className="font-mono text-[11px] text-[#ffe088]">
              {artifact.eraLabel} · {artifact.region}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onBookmark(artifact)}
              className={`p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer ${
                isBookmarked ? 'text-[#ffe088]' : 'text-white/70'
              }`}
              title={isBookmarked ? 'ลบจากบุ๊กมาร์ก' : 'บันทึกในคลัง'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isBookmarked ? 'bookmark_added' : 'bookmark_border'}
              </span>
            </button>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Image & Zoom Left (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div
              className={`relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-[#efeeea] cursor-zoom-in group ${
                isZoomed ? 'scale-105 transition-transform duration-300' : ''
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              title="คลิกเพื่อขยายดูรายละเอียดเนื้อผ้าหรือลวดลาย"
            >
              <img
                src={artifact.image}
                alt={artifact.altText}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-white font-mono text-[10px] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                <span>{isZoomed ? 'คลิกเพื่อย่อ' : '3D Digital Zoom'}</span>
              </div>
            </div>

            {/* Tags list */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {artifact.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#f5f3ef] text-[#45464c] font-mono text-[10px] border border-[#efeeea]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Archival Provenance Box */}
            <div className="p-4 rounded-xl bg-[#f5f3ef] border border-[#efeeea] space-y-1">
              <div className="font-mono text-[10px] text-[#735c00] uppercase tracking-wider font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">source</span>
                <span>แหล่งบันทึกและประวัติการครอบครอง (Provenance)</span>
              </div>
              <p className="text-xs text-[#45464c] leading-relaxed">
                {artifact.provenance}
              </p>
            </div>
          </div>

          {/* Description & Metadata Right (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[#735c00] font-semibold">
                {artifact.titleEn}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1c1a] leading-tight">
                {artifact.title}
              </h2>

              {artifact.unescoStatus && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#efeeea] text-[#1b1c1a] font-mono text-xs font-medium border border-[#e4e2de]">
                  <span className="material-symbols-outlined text-[16px] text-[#735c00]">verified</span>
                  <span>{artifact.unescoStatus}</span>
                </div>
              )}

              <p className="text-sm text-[#45464c] leading-relaxed">
                {artifact.longDescription || artifact.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold">
                  จุดเด่นเชิงประณีตศิลป์
                </div>
                {artifact.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs bg-white p-3 rounded-lg border border-[#efeeea]"
                  >
                    <span className="flex items-center gap-2 font-medium text-[#1b1c1a]">
                      <span className="material-symbols-outlined text-[#735c00] text-[18px]">
                        {hl.icon}
                      </span>
                      <span>{hl.label}</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#735c00] font-semibold">
                      {hl.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-[#efeeea]">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  onShowToast('คัดลอกลิงก์', artifact.title);
                }}
                className="px-4 py-2 rounded-lg bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
                <span>แชร์มรดกนี้</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-black text-white hover:bg-[#131b2e] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-semibold shadow-sm"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
