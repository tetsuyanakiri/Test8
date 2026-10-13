import React from 'react';
import { CulturalArtifact, ResearchArticle } from '../types';

interface SavedCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArtifacts: CulturalArtifact[];
  savedArticles: ResearchArticle[];
  onSelectArtifact: (art: CulturalArtifact) => void;
  onSelectArticle: (article: ResearchArticle) => void;
  onRemoveArtifact: (id: string) => void;
  onRemoveArticle: (id: string) => void;
}

export const SavedCollectionModal: React.FC<SavedCollectionModalProps> = ({
  isOpen,
  onClose,
  savedArtifacts,
  savedArticles,
  onSelectArtifact,
  onSelectArticle,
  onRemoveArtifact,
  onRemoveArticle
}) => {
  if (!isOpen) return null;

  const totalSaved = savedArtifacts.length + savedArticles.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#131b2e]/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#efeeea] max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#131b2e] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ffe088] text-[#241a00] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">bookmark</span>
            </div>
            <div>
              <div className="text-lg font-bold text-[#ffe088]">
                คลังมรดกส่วนตัวที่บันทึกไว้ ({totalSaved})
              </div>
              <div className="font-mono text-[10px] text-[#e4e2de] uppercase tracking-wider">
                PERSONAL SAVED ARCHIVES
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-[#e4e2de] hover:text-white cursor-pointer">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {totalSaved === 0 ? (
            <div className="text-center py-12 space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#76777d]">
                bookmark_border
              </span>
              <p className="text-sm text-[#45464c]">
                ยังไม่มีรายการที่บันทึกไว้ ท่านสามารถกดไอคอนบุ๊กมาร์กบนการ์ดมรดกหรือบทความเพื่อเก็บไว้อ่าน
              </p>
            </div>
          ) : (
            <>
              {/* Artifacts */}
              {savedArtifacts.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#735c00] font-semibold">
                    มรดกวัฒนธรรมและหัตถศิลป์ ({savedArtifacts.length})
                  </h4>
                  <div className="space-y-2">
                    {savedArtifacts.map((art) => (
                      <div
                        key={art.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#f5f3ef] border border-[#efeeea] hover:bg-[#efeeea] transition-colors"
                      >
                        <div
                          className="flex items-center gap-3 min-w-0 cursor-pointer flex-1"
                          onClick={() => {
                            onClose();
                            onSelectArtifact(art);
                          }}
                        >
                          <img
                            src={art.image}
                            alt={art.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded object-cover shrink-0"
                          />
                          <div className="truncate">
                            <div className="text-sm font-semibold text-[#1b1c1a] truncate">
                              {art.title}
                            </div>
                            <div className="font-mono text-[11px] text-[#735c00]">
                              {art.categoryLabel} · {art.eraLabel}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveArtifact(art.id)}
                          className="p-1.5 text-[#76777d] hover:text-red-600 transition-colors cursor-pointer ml-2"
                          title="ลบรายการ"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {savedArticles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#735c00] font-semibold">
                    บทความวิจัยสยามศึกษา ({savedArticles.length})
                  </h4>
                  <div className="space-y-2">
                    {savedArticles.map((article) => (
                      <div
                        key={article.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#f5f3ef] border border-[#efeeea] hover:bg-[#efeeea] transition-colors"
                      >
                        <div
                          className="flex items-center gap-3 min-w-0 cursor-pointer flex-1"
                          onClick={() => {
                            onClose();
                            onSelectArticle(article);
                          }}
                        >
                          <img
                            src={article.image}
                            alt={article.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded object-cover shrink-0"
                          />
                          <div className="truncate">
                            <div className="text-sm font-semibold text-[#1b1c1a] truncate">
                              {article.title}
                            </div>
                            <div className="font-mono text-[11px] text-[#735c00]">
                              {article.category} · {article.readTime}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveArticle(article.id)}
                          className="p-1.5 text-[#76777d] hover:text-red-600 transition-colors cursor-pointer ml-2"
                          title="ลบรายการ"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
