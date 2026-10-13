import React, { useState } from 'react';
import { API_DOCUMENTATION } from '../data/culturalData';
import { ApiEndpoint } from '../types';

interface ApiDocumentationScreenProps {
  onShowToast: (title: string, message: string) => void;
}

export const ApiDocumentationScreen: React.FC<ApiDocumentationScreenProps> = ({ onShowToast }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(API_DOCUMENTATION[0]);
  const [activeLang, setActiveLang] = useState<'curl' | 'typescript' | 'python'>('typescript');
  const [responseOutput, setResponseOutput] = useState<string>(
    JSON.stringify(API_DOCUMENTATION[0].sampleResponse, null, 2)
  );
  const [isExecuting, setIsExecuting] = useState(false);

  const handleSelectEndpoint = (ep: ApiEndpoint) => {
    setSelectedEndpoint(ep);
    setResponseOutput(JSON.stringify(ep.sampleResponse, null, 2));
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setResponseOutput(JSON.stringify(selectedEndpoint.sampleResponse, null, 2));
      onShowToast('200 OK Response', `เรียกข้อมูลสำเร็จจาก ${selectedEndpoint.path}`);
    }, 300);
  };

  const generateSnippet = () => {
    const url = `https://siamheritage.or.th${selectedEndpoint.path}`;
    if (activeLang === 'curl') {
      return `curl -X ${selectedEndpoint.method} "${url}" \\\n  -H "Authorization: Bearer <SIAM_API_KEY>" \\\n  -H "Accept: application/json"`;
    }
    if (activeLang === 'typescript') {
      return `import axios from 'axios';\n\nconst response = await axios.${selectedEndpoint.method.toLowerCase()}('${url}', {\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Accept': 'application/json'\n  }\n});\nconsole.log(response.data);`;
    }
    return `import requests\n\nresponse = requests.${selectedEndpoint.method.toLowerCase()}(\n    "${url}",\n    headers={"Authorization": "Bearer YOUR_API_KEY"}\n)\nprint(response.json())`;
  };

  return (
    <div className="max-w-[1360px] mx-auto px-6 py-12 space-y-10">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131b2e] text-[#ffe088] font-mono text-[10px] uppercase tracking-widest font-semibold">
          <span className="material-symbols-outlined text-[16px]">terminal</span>
          <span>OPEN CULTURAL GRAPH & REST API SPEC</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
          สถาปัตยกรรมระบบและคู่มือนักพัฒนา (Full-Stack Code / API Doc)
        </h1>
        <p className="text-sm sm:text-base text-[#45464c] max-w-2xl leading-relaxed">
          เชื่อมต่อคลังข้อมูลมรดกวัฒนธรรมสยาม แผ่นเสียงโบราณ และทะเบียนมรดกโลกผ่าน RESTful API และมาตรฐาน CIDOC-CRM / Dublin Core
        </p>
      </div>

      {/* Grid: Endpoints Nav & Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Endpoints List (4 cols) */}
        <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md border border-[#efeeea] space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold pb-2 border-b border-[#efeeea]">
            เอนด์พอยต์สาธารณะ (Public API Endpoints)
          </div>
          <div className="space-y-2">
            {API_DOCUMENTATION.map((ep) => (
              <div
                key={ep.path}
                onClick={() => handleSelectEndpoint(ep)}
                className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                  selectedEndpoint.path === ep.path
                    ? 'bg-[#f5f3ef] border-[#735c00] shadow-sm'
                    : 'border-transparent hover:bg-[#f5f3ef]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                    {ep.method}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#1b1c1a] truncate">
                    {ep.path}
                  </span>
                </div>
                <p className="text-xs text-[#45464c] line-clamp-1">
                  {ep.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#efeeea] text-xs text-[#76777d] font-mono">
            Rate Limit: 1,000 requests/min (Free tier)
          </div>
        </div>

        {/* Right Sandbox & Documentation (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Endpoint Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#efeeea] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                  {selectedEndpoint.method}
                </span>
                <span className="font-mono text-base font-bold text-[#1b1c1a]">
                  {selectedEndpoint.path}
                </span>
              </div>
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-[#131b2e] font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                <span>{isExecuting ? 'กำลังส่ง...' : 'ทดสอบเรียก API'}</span>
              </button>
            </div>

            <p className="text-sm text-[#45464c]">
              {selectedEndpoint.description}
            </p>

            {/* Parameters Table */}
            {selectedEndpoint.parameters.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold">
                  พารามิเตอร์คำขอ (Request Query Parameters)
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-[#efeeea]">
                    <thead className="bg-[#f5f3ef] font-mono text-[10px] text-[#76777d]">
                      <tr>
                        <th className="p-2 border-b border-[#efeeea]">ชื่อพารามิเตอร์</th>
                        <th className="p-2 border-b border-[#efeeea]">ชนิดข้อมูล</th>
                        <th className="p-2 border-b border-[#efeeea]">จำเป็น</th>
                        <th className="p-2 border-b border-[#efeeea]">คำอธิบาย</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedEndpoint.parameters.map((param) => (
                        <tr key={param.name} className="border-b border-[#efeeea] font-mono">
                          <td className="p-2 font-semibold text-[#1b1c1a]">{param.name}</td>
                          <td className="p-2 text-[#735c00]">{param.type}</td>
                          <td className="p-2 text-[#76777d]">{param.required ? 'ใช่' : 'ไม่'}</td>
                          <td className="p-2 font-sans text-[#45464c]">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Code Snippet & Live Response Console */}
          <div className="bg-[#131b2e] rounded-xl overflow-hidden shadow-lg border border-white/10 text-white">
            {/* Snippet Header */}
            <div className="bg-black/40 px-6 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                {(['typescript', 'python', 'curl'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded text-xs font-mono uppercase cursor-pointer ${
                      activeLang === lang
                        ? 'bg-[#ffe088] text-[#241a00] font-bold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(generateSnippet());
                  onShowToast('คัดลอกโค้ดแล้ว', `คัดลอกโค้ดตัวอย่างภาษา ${activeLang}`);
                }}
                className="text-xs font-mono text-white/70 hover:text-[#ffe088] flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">content_copy</span>
                <span>คัดลอกโค้ด</span>
              </button>
            </div>

            {/* Code Output */}
            <pre className="p-6 font-mono text-xs text-[#ffe088] overflow-x-auto leading-relaxed">
              <code>{generateSnippet()}</code>
            </pre>

            {/* Live Response Box */}
            <div className="border-t border-white/10 p-6 bg-black/60 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-white/60">
                <span>Response Body (JSON): 200 OK</span>
                <span className="text-emerald-400">Content-Type: application/json</span>
              </div>
              <pre className="p-4 rounded-lg bg-black/80 font-mono text-xs text-emerald-300 overflow-x-auto max-h-64 leading-relaxed">
                <code>{responseOutput}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
