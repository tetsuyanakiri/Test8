import React, { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'register';
  onLoginSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login',
  onLoginSuccess
}) => {
  const [tab, setTab] = useState<'login' | 'register'>(initialTab);
  const [name, setName] = useState('คุณสมชาย มโนรมย์');
  const [email, setEmail] = useState('heritage.member@siamheritage.or.th');
  const [password, setPassword] = useState('••••••••••••');

  // Sync initial tab when opened
  React.useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(tab === 'register' ? (name || 'สมาชิกมรดกสยาม') : 'คุณสมชาย');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#131b2e]/80 backdrop-blur-md transition-opacity duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#efeeea]">
        {/* Modal Header */}
        <div className="p-6 bg-[#131b2e] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ffe088] text-[#241a00] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[20px]">token</span>
            </div>
            <div>
              <div className="text-lg font-bold text-[#ffe088]">
                {tab === 'login' ? 'เข้าสู่ระบบสมาชิกมรดกสยาม' : 'สมัครสมาชิกใหม่มรดกสยาม'}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#e4e2de]">
                SIAM HERITAGE PORTAL
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#e4e2de] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#f5f3ef] p-1 mx-6 mt-6 rounded-lg border border-[#efeeea]">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer text-center ${
              tab === 'login'
                ? 'bg-black text-white shadow-sm'
                : 'text-[#45464c] hover:text-[#1b1c1a]'
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer text-center ${
              tab === 'register'
                ? 'bg-black text-white shadow-sm'
                : 'text-[#45464c] hover:text-[#1b1c1a]'
            }`}
          >
            ลงทะเบียนใหม่
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Social SSO Options */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                onLoginSuccess('คุณวิภาดา (Google SSO)');
                onClose();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#f5f3ef] hover:bg-[#efeeea] transition-colors font-mono text-xs text-[#1b1c1a] border border-[#efeeea] cursor-pointer"
            >
              <span className="font-bold text-red-500">G</span>
              <span>บัญชี Google</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onLoginSuccess('คุณกิตติศักดิ์ (ThaID)');
                onClose();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#f5f3ef] hover:bg-[#efeeea] transition-colors font-mono text-xs text-[#1b1c1a] border border-[#efeeea] cursor-pointer"
            >
              <span className="font-bold text-blue-700">THAID</span>
              <span>ดิจิทัลไอดีไทย</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#efeeea]" />
            <span className="font-mono text-[10px] text-[#76777d] uppercase tracking-wider">
              หรือใช้อีเมล
            </span>
            <div className="flex-1 h-px bg-[#efeeea]" />
          </div>

          {/* Fields */}
          <div className="space-y-3">
            {tab === 'register' && (
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#1b1c1a]">
                  ชื่อ-นามสกุล / นามเรียกขาน
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="คุณสมชาย มโนรมย์"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#f5f3ef] text-sm text-[#1b1c1a] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#735c00] border border-[#efeeea]"
                  required
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#1b1c1a]">
                อีเมลสถาบัน หรือส่วนบุคคล
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="heritage.member@siamheritage.or.th"
                className="w-full px-4 py-2.5 rounded-lg bg-[#f5f3ef] text-sm text-[#1b1c1a] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#735c00] border border-[#efeeea]"
                required
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="font-mono text-[10px] uppercase tracking-wider text-[#1b1c1a]">
                  รหัสผ่าน
                </label>
                <a href="#forgot" className="font-mono text-[10px] text-[#735c00] hover:underline">
                  ลืมรหัสผ่าน?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 rounded-lg bg-[#f5f3ef] text-sm text-[#1b1c1a] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#735c00] border border-[#efeeea]"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="authPersist"
              defaultChecked
              className="rounded text-black focus:ring-0 cursor-pointer"
            />
            <label htmlFor="authPersist" className="text-xs text-[#45464c] cursor-pointer">
              จดจำการเข้าสู่ระบบบนอุปกรณ์นี้ (๓๐ วัน)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white hover:bg-[#131b2e] transition-all font-mono text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>
              {tab === 'login' ? 'เข้าสู่ระบบเพื่อสำรวจคลัง' : 'สร้างบัญชีสมาชิกฟรี'}
            </span>
          </button>

          <p className="text-[11px] text-center text-[#76777d]">
            การดำเนินการต่อถือว่าท่านยอมรับ{' '}
            <span className="text-[#735c00] underline">ข้อกำหนดสยามมรดก</span>{' '}
            และนโยบายคุ้มครองข้อมูลส่วนบุคคล
          </p>
        </form>
      </div>
    </div>
  );
};
