import React from 'react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="w-full bg-[#f5f3ef] shadow-[0_1px_8px_rgba(0,0,0,0.02)] mt-12 border-t border-[#efeeea]">
      <div className="max-w-[1360px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#131b2e] text-[#ffe088] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">token</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1b1c1a]">มรดกสยาม</span>
            </div>
            <p className="text-xs sm:text-sm text-[#45464c] leading-relaxed">
              ศูนย์กลางคลังข้อมูลมรดกทางวัฒนธรรม ประณีตศิลป์ และสถาปัตยกรรมไทยในยุคดิจิทัล ภายใต้แนวคิดสุนทรียศาสตร์ร่วมสมัย
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#efeeea] font-mono text-[10px] text-[#735c00] uppercase tracking-widest font-semibold">
                ROYAL SIAMESE ARCHIVE
              </span>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#1b1c1a] font-semibold">
              หมวดหมู่วัฒนธรรม
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#45464c]">
              <li>
                <button
                  onClick={() => onNavigateTab('categories')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer"
                >
                  สถาปัตยกรรมเรือนไทยและพระอาราม
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('categories')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer"
                >
                  จิตรกรรมลายรดน้ำและเครื่องถม
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('categories')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer"
                >
                  นาฏยศิลป์ โขน ละครหลวง
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('categories')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer"
                >
                  คีตศิลป์และดนตรีไทยเดิม
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Partners */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#1b1c1a] font-semibold">
              ความร่วมมือและพันธมิตร
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#45464c]">
              <li>
                <a
                  href="https://www.m-culture.go.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1b1c1a] transition-colors flex items-center gap-1"
                >
                  <span>กระทรวงวัฒนธรรม (Ministry of Culture)</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.finearts.go.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1b1c1a] transition-colors flex items-center gap-1"
                >
                  <span>กรมศิลปากร (Fine Arts Department)</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.sac.or.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1b1c1a] transition-colors flex items-center gap-1"
                >
                  <span>ศูนย์มานุษยวิทยาสิรินธร (SAC)</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <span className="hover:text-[#1b1c1a] transition-colors">
                  หอจดหมายเหตุแห่งชาติ
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Architecture & Tech */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#1b1c1a] font-semibold">
              สถาปัตยกรรมและเทคโนโลยี
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#45464c]">
              <li>
                <button
                  onClick={() => onNavigateTab('api')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer font-medium text-[#735c00]"
                >
                  API Documentation & Schema
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('api')}
                  className="hover:text-[#1b1c1a] transition-colors text-left cursor-pointer"
                >
                  Open Cultural Heritage Graph
                </button>
              </li>
              <li>
                <span className="hover:text-[#1b1c1a] transition-colors">
                  มาตรฐานการจัดเก็บข้อมูล (Metadata Standards)
                </span>
              </li>
              <li>
                <span className="hover:text-[#1b1c1a] transition-colors">
                  ข้อกำหนดการใช้งานและลิขสิทธิ์
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#efeeea] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#45464c]">
          <p>© 2025 Siam Heritage Platform (มรดกสยาม). All intellectual property and archival rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#735c00] uppercase tracking-wider font-semibold">
              ความร่วมมือเชิงวิชาการร่วมกับกระทรวงวัฒนธรรม
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
