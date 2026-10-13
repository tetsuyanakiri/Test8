import React from 'react';
import { ResearchArticle } from '../types';

interface ArticleReaderModalProps {
  article: ResearchArticle | null;
  onClose: () => void;
  onBookmark: (article: ResearchArticle) => void;
  isBookmarked: boolean;
  onShowToast: (title: string, message: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onBookmark,
  isBookmarked,
  onShowToast
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#131b2e]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#fbf9f5] rounded-2xl shadow-2xl overflow-hidden my-8 border border-[#efeeea]">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#fbf9f5]/95 backdrop-blur-md px-6 py-4 border-b border-[#efeeea] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#efeeea] text-[#1b1c1a] font-mono text-[10px] uppercase font-semibold">
              {article.category}
            </span>
            <span className="text-xs text-[#76777d]">·</span>
            <span className="font-mono text-[11px] text-[#735c00] font-medium">
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onBookmark(article)}
              className={`p-2 rounded-lg hover:bg-[#efeeea] transition-colors cursor-pointer ${
                isBookmarked ? 'text-[#735c00]' : 'text-[#76777d]'
              }`}
              title={isBookmarked ? 'บันทึกแล้ว' : 'บันทึกในคลัง'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isBookmarked ? 'bookmark_added' : 'bookmark_add'}
              </span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                onShowToast('คัดลอกลิงก์บทความ', article.title);
              }}
              className="p-2 rounded-lg hover:bg-[#efeeea] text-[#76777d] hover:text-[#1b1c1a] transition-colors cursor-pointer"
              title="แชร์บทความ"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#efeeea] text-[#76777d] hover:text-[#1b1c1a] transition-colors cursor-pointer"
              title="ปิด"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] w-full bg-[#131b2e] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f5] via-transparent to-transparent opacity-90" />
        </div>

        {/* Article Body */}
        <div className="px-6 sm:px-12 py-8 max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="space-y-3 pb-6 border-b border-[#efeeea]">
            <div className="font-mono text-xs text-[#76777d] uppercase tracking-wider">
              {article.author} · {article.dateAgo}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1b1c1a] leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-base text-[#45464c] italic font-serif leading-relaxed border-l-2 border-[#ffe088] pl-4 py-1">
              "{article.excerpt}"
            </p>
          </div>

          {/* Reading Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-[#1b1c1a] leading-[1.8] font-normal">
            {article.content.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#735c00] first-letter:leading-none'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Academic Citations */}
          {article.citations.length > 0 && (
            <div className="mt-10 pt-6 border-t border-[#efeeea] space-y-2 bg-[#f5f3ef] p-4 rounded-xl">
              <div className="font-mono text-xs uppercase tracking-widest text-[#735c00] font-semibold">
                เอกสารอ้างอิงและบรรณานุกรม
              </div>
              <ul className="space-y-1.5 text-xs text-[#45464c]">
                {article.citations.map((cite, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#735c00] font-mono">[{idx + 1}]</span>
                    <span>{cite}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer actions */}
          <div className="pt-6 flex items-center justify-between border-t border-[#efeeea]">
            <span className="font-mono text-[11px] text-[#76777d]">
              หอจดหมายเหตุสยามศึกษา · สถาบันวิจัยวัฒนธรรมไทย
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-black text-white hover:bg-[#131b2e] font-mono text-xs uppercase tracking-wider cursor-pointer transition-colors"
            >
              ปิดหน้าต่างอ่าน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
