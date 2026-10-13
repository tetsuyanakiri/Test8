/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchAndFilterBar } from './components/SearchAndFilterBar';
import { CulturalPillarsSection } from './components/CulturalPillarsSection';
import { MediaPlayerHub } from './components/MediaPlayerHub';
import { ExclusiveAccessBanner } from './components/ExclusiveAccessBanner';
import { KnowledgeArticlesSection } from './components/KnowledgeArticlesSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ArtifactDetailModal } from './components/ArtifactDetailModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { SavedCollectionModal } from './components/SavedCollectionModal';
import { Toast } from './components/Toast';
import { CategoriesScreen } from './components/CategoriesScreen';
import { DocumentariesScreen } from './components/DocumentariesScreen';
import { ApiDocumentationScreen } from './components/ApiDocumentationScreen';
import { CULTURAL_PILLARS, RESEARCH_ARTICLES, DOCUMENTARIES } from './data/culturalData';
import { CulturalArtifact, EraType, ResearchArticle } from './types';

export default function App() {
  // Navigation
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Search & Filtering
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEra, setSelectedEra] = useState<EraType>('all');

  // Membership & Authentication
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [memberName, setMemberName] = useState<string>('คุณสมชาย');
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authInitialTab, setAuthInitialTab] = useState<'login' | 'register'>('login');

  // Modal Views
  const [selectedArtifact, setSelectedArtifact] = useState<CulturalArtifact | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);
  const [savedModalOpen, setSavedModalOpen] = useState<boolean>(false);

  // Bookmarked items
  const [savedArtifactIds, setSavedArtifactIds] = useState<string[]>(['pillar-1', 'pillar-4']);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['art-1']);

  // Toast Notification
  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: ''
  });

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3800);
  };

  // Filter Pillars for Home Screen
  const filteredPillars = CULTURAL_PILLARS.filter((p) => {
    if (selectedEra !== 'all' && !p.era.includes(selectedEra as any)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const text = (p.title + p.titleEn + p.description + p.tags.join(' ')).toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });

  // Bookmark togglers
  const handleToggleBookmarkArtifact = (artifact: CulturalArtifact) => {
    setSavedArtifactIds((prev) => {
      if (prev.includes(artifact.id)) {
        showToast('ลบจากคลัง', `นำ ${artifact.title} ออกจากรายการบันทึก`);
        return prev.filter((id) => id !== artifact.id);
      } else {
        showToast('บันทึกสำเร็จ', `เพิ่ม ${artifact.title} ในคลังมรดกส่วนตัว`);
        return [...prev, artifact.id];
      }
    });
  };

  const handleToggleBookmarkArticle = (article: ResearchArticle) => {
    setSavedArticleIds((prev) => {
      if (prev.includes(article.id)) {
        showToast('ลบจากคลัง', `นำบทความ ${article.title} ออกจากรายการ`);
        return prev.filter((id) => id !== article.id);
      } else {
        showToast('บันทึกบทความ', `เก็บ ${article.title} ไว้อ่าน`);
        return [...prev, article.id];
      }
    });
  };

  const openAuth = (tab: 'login' | 'register') => {
    setAuthInitialTab(tab);
    setAuthModalOpen(true);
  };

  const handleLoginSuccess = (name: string) => {
    setIsLoggedIn(true);
    setMemberName(name);
    showToast('ยินดีต้อนรับสู่มรดกสยาม', `การตรวจสอบสิทธิ์เสร็จสิ้น ปลดล็อกคลัง 4K สำหรับ ${name}`);
  };

  const handleToggleMember = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      showToast('ออกจากระบบสมาชิก', 'เปลี่ยนสู่สถานะผู้เยี่ยมชมทั่วไป (Guest)');
    } else {
      openAuth('login');
    }
  };

  const savedArtifacts = CULTURAL_PILLARS.filter((p) => savedArtifactIds.includes(p.id));
  const savedArticles = RESEARCH_ARTICLES.filter((a) => savedArticleIds.includes(a.id));
  const totalSavedCount = savedArtifactIds.length + savedArticleIds.length;

  return (
    <div className="bg-[#fbf9f5] min-h-screen text-[#1b1c1a] flex flex-col font-sans antialiased">
      {/* Universal Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isLoggedIn={isLoggedIn}
        memberName={memberName}
        onOpenAuth={openAuth}
        onToggleMember={handleToggleMember}
        savedCount={totalSavedCount}
        onOpenSaved={() => setSavedModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentTab === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section Bleeding into Header space */}
            <HeroSection
              onExplore={() => {
                const el = document.getElementById('explore-pillars');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenAuth={() => openAuth('login')}
            />

            {/* 2. Interactive Search & Era Filter Console */}
            <SearchAndFilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedEra={selectedEra}
              setSelectedEra={setSelectedEra}
              onTagClick={(tag) => {
                setSearchQuery(tag);
                showToast('กำลังค้นหาตามแท็ก', `#${tag}`);
              }}
              matchCount={filteredPillars.length}
            />

            {/* 3. 4 Cultural Pillars (สุนทรียศิลป์และอัตลักษณ์แห่งสยาม) */}
            <CulturalPillarsSection
              pillars={filteredPillars}
              onSelectPillar={(pillar) => setSelectedArtifact(pillar)}
              onBookmark={handleToggleBookmarkArtifact}
              isBookmarked={(id) => savedArtifactIds.includes(id)}
            />

            {/* 4. Interactive Siamese Media Hub (Audio & Video Player) */}
            <MediaPlayerHub
              isLoggedIn={isLoggedIn}
              onOpenAuth={openAuth}
              onShowToast={showToast}
            />

            {/* 5. Exclusive 4K Access & Documentary VIP Banner */}
            <ExclusiveAccessBanner
              onOpenAuth={openAuth}
              onSelectDoc={() => setCurrentTab('documentaries')}
            />

            {/* 6. Knowledge Articles Section (คลังองค์ความรู้สยามศึกษา) */}
            <KnowledgeArticlesSection
              articles={RESEARCH_ARTICLES}
              onSelectArticle={(article) => setSelectedArticle(article)}
              onBookmarkArticle={handleToggleBookmarkArticle}
              isBookmarked={(id) => savedArticleIds.includes(id)}
              onViewAll={() => setCurrentTab('categories')}
            />
          </div>
        )}

        {/* Tab 2: หมวดหมู่วัฒนธรรม (Culture Categories) */}
        {currentTab === 'categories' && (
          <CategoriesScreen
            onSelectArtifact={(art) => setSelectedArtifact(art)}
            onBookmark={handleToggleBookmarkArtifact}
            isBookmarked={(id) => savedArtifactIds.includes(id)}
          />
        )}

        {/* Tab 3: สารคดีพรีเมียม (Exclusive 4K) */}
        {currentTab === 'documentaries' && (
          <DocumentariesScreen
            isLoggedIn={isLoggedIn}
            onOpenAuth={openAuth}
            onShowToast={showToast}
          />
        )}

        {/* Tab 4: Full-Stack Code/API Doc */}
        {currentTab === 'api' && (
          <ApiDocumentationScreen onShowToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateTab={(tab) => setCurrentTab(tab)} />

      {/* Modals & Overlays */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialTab={authInitialTab}
        onLoginSuccess={handleLoginSuccess}
      />

      <ArtifactDetailModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
        onBookmark={handleToggleBookmarkArtifact}
        isBookmarked={selectedArtifact ? savedArtifactIds.includes(selectedArtifact.id) : false}
        onShowToast={showToast}
      />

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookmark={handleToggleBookmarkArticle}
        isBookmarked={selectedArticle ? savedArticleIds.includes(selectedArticle.id) : false}
        onShowToast={showToast}
      />

      <SavedCollectionModal
        isOpen={savedModalOpen}
        onClose={() => setSavedModalOpen(false)}
        savedArtifacts={savedArtifacts}
        savedArticles={savedArticles}
        onSelectArtifact={(art) => setSelectedArtifact(art)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveArtifact={(id) => setSavedArtifactIds((prev) => prev.filter((i) => i !== id))}
        onRemoveArticle={(id) => setSavedArticleIds((prev) => prev.filter((i) => i !== id))}
      />

      <Toast
        show={toast.show}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </div>
  );
}
