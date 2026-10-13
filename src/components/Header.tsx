import React from 'react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isLoggedIn: boolean;
  memberName: string;
  onOpenAuth: (initialTab: 'login' | 'register') => void;
  onToggleMember: () => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  isLoggedIn,
  memberName,
  onOpenAuth,
  onToggleMember,
  savedCount,
  onOpenSaved
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f5]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#efeeea]">
      <div className="h-20 max-w-[1360px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#131b2e] text-[#ffe088] flex items-center justify-center shadow-[0_2px_12px_rgba(19,27,46,0.15)] group-hover:bg-black transition-colors">
              <span className="material-symbols-outlined text-[24px]">token</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[20px] leading-tight tracking-tight text-[#1b1c1a]">มรดกสยาม</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#735c00]">SIAM HERITAGE ARCHIVE</span>
            </div>
          </button>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => setCurrentTab('home')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                currentTab === 'home'
                  ? 'bg-[#eae8e4] text-[#1b1c1a]'
                  : 'text-[#45464c] hover:bg-[#efeeea] hover:text-[#1b1c1a]'
              }`}
            >
              หน้าแรก (Home)
            </button>
            <button
              onClick={() => setCurrentTab('categories')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                currentTab === 'categories'
                  ? 'bg-[#eae8e4] text-[#1b1c1a]'
                  : 'text-[#45464c] hover:bg-[#efeeea] hover:text-[#1b1c1a]'
              }`}
            >
              หมวดหมู่วัฒนธรรม (Culture Categories)
            </button>
            <button
              onClick={() => setCurrentTab('documentaries')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                currentTab === 'documentaries'
                  ? 'bg-[#eae8e4] text-[#1b1c1a]'
                  : 'text-[#45464c] hover:bg-[#efeeea] hover:text-[#1b1c1a]'
              }`}
            >
              สารคดีพรีเมียม (Exclusive)
            </button>
            <button
              onClick={() => setCurrentTab('api')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                currentTab === 'api'
                  ? 'bg-[#eae8e4] text-[#1b1c1a]'
                  : 'text-[#45464c] hover:bg-[#efeeea] hover:text-[#1b1c1a]'
              }`}
            >
              Full-Stack Code/API Doc
            </button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Saved Bookmarks Button */}
          {savedCount > 0 && (
            <button
              onClick={onOpenSaved}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] text-xs font-medium transition-colors cursor-pointer"
              title="รายการที่บันทึกไว้"
            >
              <span className="material-symbols-outlined text-[16px] text-[#735c00]">bookmark</span>
              <span>{savedCount}</span>
            </button>
          )}

          {/* Member Badge Pill */}
          <button
            onClick={onToggleMember}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer ${
              isLoggedIn
                ? 'bg-[#f5f3ef] text-[#45464c] border border-[#ffe088]'
                : 'bg-[#efeeea] text-[#76777d] hover:text-[#1b1c1a]'
            }`}
            title="คลิกเพื่อสลับสถานะสมาชิก"
          >
            <span className="material-symbols-outlined text-[16px] text-[#735c00]">workspace_premium</span>
            <span className="font-mono text-[11px]">{isLoggedIn ? `${memberName} (Member)` : 'ผู้เยี่ยมชม (Guest)'}</span>
            <span className={`w-2 h-2 rounded-full ${isLoggedIn ? 'bg-[#735c00]' : 'bg-[#76777d]'}`}></span>
          </button>

          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#45464c] hover:bg-[#efeeea] hover:text-[#1b1c1a] transition-all cursor-pointer whitespace-nowrap"
              >
                เข้าสู่ระบบ
              </button>
              <button
                onClick={() => onOpenAuth('register')}
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-[#131b2e] transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer whitespace-nowrap shadow-sm"
              >
                สมัครสมาชิก
              </button>
            </div>
          ) : (
            <button
              onClick={onToggleMember}
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs text-[#76777d] hover:text-[#1b1c1a] hover:bg-[#efeeea] transition-all cursor-pointer"
            >
              ออกจากระบบ
            </button>
          )}

          {/* Avatar Icon */}
          <button
            onClick={() => onOpenAuth(isLoggedIn ? 'login' : 'register')}
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#131b2e] transition-colors cursor-pointer"
            title="บัญชีผู้ใช้งาน"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#efeeea] flex items-center justify-center text-[#1b1c1a] hover:bg-[#eae8e4] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f5] border-t border-[#efeeea] px-6 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              currentTab === 'home' ? 'bg-[#eae8e4] text-[#1b1c1a]' : 'text-[#45464c]'
            }`}
          >
            หน้าแรก (Home)
          </button>
          <button
            onClick={() => { setCurrentTab('categories'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              currentTab === 'categories' ? 'bg-[#eae8e4] text-[#1b1c1a]' : 'text-[#45464c]'
            }`}
          >
            หมวดหมู่วัฒนธรรม (Culture Categories)
          </button>
          <button
            onClick={() => { setCurrentTab('documentaries'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              currentTab === 'documentaries' ? 'bg-[#eae8e4] text-[#1b1c1a]' : 'text-[#45464c]'
            }`}
          >
            สารคดีพรีเมียม (Exclusive)
          </button>
          <button
            onClick={() => { setCurrentTab('api'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              currentTab === 'api' ? 'bg-[#eae8e4] text-[#1b1c1a]' : 'text-[#45464c]'
            }`}
          >
            Full-Stack Code/API Doc
          </button>
          <div className="pt-2 border-t border-[#efeeea] flex items-center justify-between">
            <span className="text-xs text-[#76777d]">
              {isLoggedIn ? `สมาชิก: ${memberName}` : 'โหมดผู้เยี่ยมชม'}
            </span>
            <button
              onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}
              className="px-3 py-1.5 rounded bg-black text-white text-xs font-medium"
            >
              {isLoggedIn ? 'จัดการบัญชี' : 'เข้าสู่ระบบ'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
