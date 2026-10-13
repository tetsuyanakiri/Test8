import React, { useState, useEffect } from 'react';
import { AUDIO_TRACKS, DOCUMENTARIES } from '../data/culturalData';
import { AudioTrack } from '../types';
import { thaiSynthesizer } from '../utils/audioSynthesizer';

interface MediaPlayerHubProps {
  isLoggedIn: boolean;
  onOpenAuth: (tab: 'login' | 'register') => void;
  onShowToast: (title: string, message: string) => void;
  onBookmarkTrack?: (track: AudioTrack) => void;
}

export const MediaPlayerHub: React.FC<MediaPlayerHubProps> = ({
  isLoggedIn,
  onOpenAuth,
  onShowToast
}) => {
  const [activeTab, setActiveTab] = useState<'audio' | 'video'>('audio');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTimeSec, setCurrentTimeSec] = useState(102); // 01:42 as in original HTML
  const [waveformBars, setWaveformBars] = useState<number[]>([
    24, 40, 56, 32, 48, 64, 40, 56, 28, 44, 60, 36, 52, 32, 56, 48, 24, 32, 56, 40, 20, 48, 28, 36, 16
  ]);

  const currentTrack = AUDIO_TRACKS[currentTrackIndex];
  const totalDurationSec = currentTrack.durationSeconds;

  // Sync with audio synthesizer
  useEffect(() => {
    thaiSynthesizer.setVolume(volume);
    thaiSynthesizer.setNoteCallback((_freq) => {
      // Dynamic bar animation on note strike
      setWaveformBars((prev) =>
        prev.map((val, idx) => {
          const shift = Math.sin(Date.now() / 200 + idx) * 12;
          return Math.max(12, Math.min(64, Math.floor(val + shift)));
        })
      );
    });

    return () => {
      thaiSynthesizer.stop();
    };
  }, []);

  // Time ticker when playing
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= totalDurationSec) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, totalDurationSec]);

  const togglePlay = () => {
    const nextState = thaiSynthesizer.toggle();
    setIsPlaying(nextState);
    if (nextState) {
      onShowToast(
        'กำลังสดับรับฟัง',
        `${currentTrack.title} (ระบบบูรณะเสียงจำลองปี่พาทย์ 24-bit)`
      );
    } else {
      onShowToast('พักการเล่นชั่วคราว', 'กดปุ่มเล่นเพื่อสดับรับฟังต่อ');
    }
  };

  const handleSelectTrack = (index: number) => {
    const track = AUDIO_TRACKS[index];
    if (track.isExclusive && !isLoggedIn) {
      onShowToast('เฉพาะสมาชิกพรีเมียม', `กรุณาเข้าสู่ระบบเพื่อรับฟัง ${track.title}`);
      setTimeout(() => {
        onOpenAuth('login');
      }, 600);
      return;
    }

    setCurrentTrackIndex(index);
    setCurrentTimeSec(0);
    if (!isPlaying) {
      const started = thaiSynthesizer.start();
      setIsPlaying(true);
    }
    onShowToast('สลับแทร็กสำเร็จ', `เล่น: ${track.title}`);
  };

  const handleSkipTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % AUDIO_TRACKS.length;
    handleSelectTrack(nextIdx);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTimeSec(Math.floor(ratio * totalDurationSec));
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onShowToast('คัดลอกลิงก์แล้ว', `แชร์ผลงาน ${currentTrack.title} ให้ผู้สนใจ`);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, (currentTimeSec / totalDurationSec) * 100);

  return (
    <section className="w-full bg-[#f5f3ef] py-12 my-8 border-y border-[#efeeea]">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header & Mode Selector */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black text-[#ffe088] font-mono text-[10px] uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">graphic_eq</span>
              <span>SIAM MULTIMEDIA PRESERVATION ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] tracking-tight">
              ระบบคลังสื่อมรดกไทย (Audio & Video Player)
            </h2>
            <p className="text-sm sm:text-base text-[#45464c] max-w-2xl leading-relaxed">
              ฟังเสียงบันทึกเครื่องสายไทยเดิมอายุกว่า ๑๐๐ ปี และรับชมสารคดีประวัติศาสตร์ระดับ 4K พร้อมจำลองสิทธิ์การเข้าชมสำหรับสมาชิก
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex items-center p-1 bg-[#efeeea] rounded-lg border border-[#e4e2de]">
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-4 py-1.5 rounded font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'audio'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#45464c] hover:text-[#1b1c1a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">audiotrack</span>
              <span>คีตศิลป์ไทยเดิม</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-1.5 rounded font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-[#45464c] hover:text-[#1b1c1a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
              <span>สารคดีพิเศษ (Exclusive)</span>
            </button>
          </div>
        </div>

        {/* Media Player Console Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Player Display (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-xl p-6 sm:p-8 shadow-lg flex flex-col justify-between relative overflow-hidden border border-[#efeeea]">
            {activeTab === 'audio' ? (
              /* Audio Mode View */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-[#131b2e] text-[#ffe088] flex items-center justify-center shadow-md shrink-0">
                      <span className="material-symbols-outlined text-[36px]">radio</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#735c00] font-semibold">
                        กำลังเล่น: แผ่นเสียงประวัติศาสตร์
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-[#1b1c1a]">
                        {currentTrack.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#45464c]">
                        {currentTrack.performer}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#ffe088] text-[#241a00] font-mono text-[10px] uppercase tracking-wider font-semibold shrink-0">
                    {currentTrack.audioQuality}
                  </span>
                </div>

                {/* Waveform Visualizer Component */}
                <div className="w-full bg-[#f5f3ef] p-4 rounded-lg flex flex-col gap-2 border border-[#efeeea]">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#76777d]">
                    <span>{formatTime(currentTimeSec)}</span>
                    <span className="text-[#735c00] font-semibold">STEREO AUDIO RESTORED</span>
                    <span>{currentTrack.duration}</span>
                  </div>

                  {/* Simulated Waveform Bars */}
                  <div
                    className={`h-16 flex items-end gap-1.5 px-2 overflow-hidden transition-opacity duration-300 ${
                      isPlaying ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    {waveformBars.map((height, idx) => {
                      const isPlayed = (idx / waveformBars.length) * 100 <= progressPercent;
                      return (
                        <div
                          key={idx}
                          style={{ height: `${height}px` }}
                          className={`w-1 rounded-full transition-all duration-150 ${
                            isPlayed ? 'bg-[#735c00]' : 'bg-[#c6c6cd]'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Scrub Bar Progress */}
                  <div
                    onClick={handleSeek}
                    className="w-full bg-[#eae8e4] h-2 rounded-full overflow-hidden cursor-pointer relative"
                    title="คลิกเพื่อเลื่อนตำแหน่งเพลง"
                  >
                    <div
                      style={{ width: `${progressPercent}%` }}
                      className="bg-[#735c00] h-full transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Player Controls Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#131b2e] transition-all shadow-md cursor-pointer"
                      title={isPlaying ? 'หยุดชั่วคราว' : 'เล่นดนตรีไทย'}
                    >
                      <span className="material-symbols-outlined text-[26px]">
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <button
                      onClick={handleSkipTrack}
                      className="w-10 h-10 rounded-full bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] flex items-center justify-center transition-all cursor-pointer"
                      title="แทร็กถัดไป"
                    >
                      <span className="material-symbols-outlined text-[20px]">skip_next</span>
                    </button>

                    {/* Volume Slider */}
                    <div className="flex items-center gap-2 text-[#45464c] text-xs ml-2">
                      <span className="material-symbols-outlined text-[18px]">
                        {volume === 0 ? 'volume_off' : volume < 0.5 ? 'volume_down' : 'volume_up'}
                      </span>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          setVolume(v);
                          thaiSynthesizer.setVolume(v);
                        }}
                        className="w-16 sm:w-20 accent-[#735c00] h-1.5 cursor-pointer"
                      />
                      <span className="font-mono text-[10px] hidden sm:inline">
                        {Math.round(volume * 100)}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onShowToast('บันทึกแล้ว', `เพิ่ม ${currentTrack.title} ในเพลย์ลิสต์ส่วนตัว`)}
                      className="px-3 py-1.5 rounded bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] font-mono text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
                      <span>บันทึกในเพลย์ลิสต์</span>
                    </button>
                    <button
                      onClick={handleShare}
                      className="px-3 py-1.5 rounded bg-[#efeeea] hover:bg-[#eae8e4] text-[#1b1c1a] font-mono text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">share</span>
                      <span>แชร์</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Video Mode View */
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-[#131b2e]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZGbjSJW--MhXX8nUvdwOg7tCd18TpcyhB6EBcMQ1G6UecRoCXuQWyDyPI2mkO2t1CqgOQm6_6JPCzM9i-0tNXK92G1TQaVLPw5Po1V6UmYyxCnrWvwxvlzq5bY-eeHhdJg-YVfQtQZal1jYAI3mR5CvNNVwCN1aJ-eOgNy1yw9tESDmzIFM6c1w2YRaOHz1t2-YHlwAsrp7dt9i21e6k9CHbEn89z2x5IeCYqPk_eLY6B7QLFMW-t"
                    alt="Cinematic frame of Royal Thai puppet Khon Lakorn Lek rehearsal inside palace pavilion"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#131b2e]/60 flex items-center justify-center p-4">
                    <div className="text-center p-6 max-w-md bg-[#131b2e]/90 backdrop-blur-md rounded-xl text-white space-y-3 shadow-xl border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-[#ffe088] text-[#241a00] mx-auto flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">
                          {isLoggedIn ? 'play_arrow' : 'lock'}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#ffe088]">
                        สารคดีความคมชัด 4K สำหรับสมาชิก
                      </h4>
                      <p className="text-xs text-[#e4e2de] leading-relaxed">
                        "หัตถศิลป์เครื่องทองโบราณ: สารคดีตามรอยช่างสิบหมู่แห่งกรุงศรีอยุธยา" ความยาว ๕๒ นาที
                      </p>
                      {!isLoggedIn ? (
                        <button
                          onClick={() => onOpenAuth('login')}
                          className="mt-2 px-5 py-2 rounded bg-[#ffe088] text-[#241a00] hover:bg-[#fed65b] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                        >
                          เข้าสู่ระบบเพื่อปลดล็อกการรับชม
                        </button>
                      ) : (
                        <button
                          onClick={() => onShowToast('กำลังโหลดวีดิทัศน์ 4K', 'เชื่อมต่อสัญญาณถ่ายทอดความละเอียดสูง 3840x2160 UHD')}
                          className="mt-2 px-5 py-2 rounded bg-[#ffe088] text-[#241a00] hover:bg-[#fed65b] font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
                        >
                          รับชมฉบับเต็มความคมชัด 4K HDR
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Playlist & Recommendations Deck (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between space-y-4 border border-[#efeeea]">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-[#efeeea]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1b1c1a] font-semibold">
                  รายการในคลังแนะนำ
                </span>
                <span className="px-2 py-0.5 rounded bg-[#f5f3ef] font-mono text-[10px] text-[#735c00] font-medium">
                  อัปเดตสัปดาห์นี้
                </span>
              </div>

              {/* Playlist Items */}
              <div className="space-y-1.5">
                {AUDIO_TRACKS.map((track, idx) => {
                  const isActive = idx === currentTrackIndex && activeTab === 'audio';

                  return (
                    <div
                      key={track.id}
                      onClick={() => handleSelectTrack(idx)}
                      className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all border ${
                        isActive
                          ? 'bg-[#f5f3ef] border-[#ffe088] shadow-sm'
                          : 'hover:bg-[#f5f3ef] border-transparent'
                      } ${track.isExclusive && !isLoggedIn ? 'opacity-85' : ''}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`material-symbols-outlined text-[20px] shrink-0 ${
                            isActive
                              ? 'text-[#735c00]'
                              : track.isExclusive
                              ? 'text-[#735c00]'
                              : 'text-[#76777d]'
                          }`}
                        >
                          {isActive
                            ? 'equalizer'
                            : track.isExclusive
                            ? 'lock'
                            : 'music_note'}
                        </span>
                        <div className="truncate">
                          <div
                            className={`text-sm truncate ${
                              isActive ? 'font-bold text-[#1b1c1a]' : 'text-[#1b1c1a]'
                            }`}
                          >
                            {track.title}
                          </div>
                          <div className="font-mono text-[10px] text-[#45464c] truncate">
                            {track.subtitle}
                          </div>
                        </div>
                      </div>

                      {track.isExclusive ? (
                        <span className="px-2 py-0.5 rounded bg-[#410002] text-[#ffdad6] font-mono text-[10px] uppercase tracking-wider shrink-0 ml-2">
                          สมาชิก
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-[#735c00] font-semibold shrink-0 ml-2">
                          ฟรี
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Authenticity Certificate Box */}
            <div className="p-4 rounded-lg bg-[#f5f3ef] space-y-1.5 border border-[#efeeea]">
              <div className="flex items-center gap-1.5 text-[#735c00] font-mono text-[11px] uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>การรับรองความถูกต้อง</span>
              </div>
              <p className="text-xs text-[#45464c] leading-relaxed">
                ข้อมูลเสียงและภาพได้รับการแปลงสภาพดิจิทัล (Digitized) ร่วมกับสำนักการสังคีต กรมศิลปากร
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
