import React from 'react';
import { ResearchArticle } from '../types';

interface KnowledgeArticlesSectionProps {
  articles: ResearchArticle[];
  onSelectArticle: (article: ResearchArticle) => void;
  onBookmarkArticle: (article: ResearchArticle) => void;
  isBookmarked: (id: string) => boolean;
  onViewAll?: () => void;
}

export const KnowledgeArticlesSection: React.FC<KnowledgeArticlesSectionProps> = ({
  articles,
  onSelectArticle,
  onBookmarkArticle,
  isBookmarked,
  onViewAll
}) => {
  return (
    <section className="max-w-[1360px] w-full mx-auto px-6 py-10 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#735c00] font-semibold">
            บทความและการค้นคว้าวิจัย
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
            คลังองค์ความรู้สยามศึกษา
          </h2>
        </div>
        <button
          onClick={onViewAll}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#735c00] hover:text-[#1b1c1a] font-semibold transition-colors cursor-pointer"
        >
          <span>ดูบทความทั้งหมด (120+ เรื่อง)</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      {/* Grid of 3 Bento Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => {
          const bookmarked = isBookmarked(art.id);

          return (
            <article
              key={art.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-[#efeeea]"
            >
              {/* Image Preview with Category Badge */}
              <div
                className="aspect-[16/10] bg-[#efeeea] overflow-hidden relative cursor-pointer group"
                onClick={() => onSelectArticle(art)}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-md text-[#1b1c1a] font-mono text-[10px] uppercase tracking-wider font-semibold shadow-sm">
                  {art.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="font-mono text-[11px] text-[#76777d] uppercase tracking-wider mb-1">
                    {art.author} • {art.dateAgo}
                  </div>
                  <h3
                    onClick={() => onSelectArticle(art)}
                    className="text-lg sm:text-xl font-bold text-[#1b1c1a] leading-snug hover:text-[#735c00] transition-colors cursor-pointer"
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#45464c] line-clamp-2 mt-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                {/* Footer Read Time & Bookmark */}
                <div className="pt-2 flex items-center justify-between border-t border-[#efeeea]">
                  <span className="font-mono text-xs text-[#735c00] font-semibold">
                    {art.readTime}
                  </span>
                  <button
                    onClick={() => onBookmarkArticle(art)}
                    className={`p-1.5 rounded-full hover:bg-[#efeeea] transition-colors cursor-pointer ${
                      bookmarked ? 'text-[#735c00]' : 'text-[#76777d]'
                    }`}
                    title={bookmarked ? 'บันทึกแล้ว' : 'บันทึกอ่านภายหลัง'}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {bookmarked ? 'bookmark_added' : 'bookmark_add'}
                    </span>
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
