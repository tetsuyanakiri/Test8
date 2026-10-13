import { AudioTrack, CulturalArtifact, Documentary, ResearchArticle, ApiEndpoint } from '../types';

export const CULTURAL_PILLARS: CulturalArtifact[] = [
  {
    id: 'pillar-1',
    title: 'ศิลปวัฒนธรรมและการแสดง',
    titleEn: 'ROYAL PERFORMING ARTS',
    category: 'performing_arts',
    categoryLabel: 'นาฏยศิลป์หลวง',
    era: 'rattanakosin',
    eraLabel: 'รัตนโกสินทร์',
    region: 'ภาคกลาง',
    badge: 'มรดกนาฏยศิลป์หลวง',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTNndAzpxt2_YlMkwcCYpZUaF6Nim9YWD7kdulDpnntwK_ZoAVswN8hTw_gew_JB5GbTtNBu1QKdJIXMOY8uDDwD8LgIZJJ5TRJlat0Ln_s44DVlFus72akPPMS3CmokiIGwOEqvN9ZI8JJEc5S_ctseAzQQvRuS-ISDsPIF7IDTg6B1p0xvexvIXyowRy_V2Knj5elYizFrj2rT9SDx_oJosy9LVvqroGYCkvAuLBZxV4RnPWW1iF',
    altText: 'Exquisite close-up of a royal Thai Khon masked performance actor wearing elaborate gold brocade embroidery costume',
    description: 'สัมผัสความประณีตของการร่ายรำอันศักดิ์สิทธิ์ โขนรามเกียรติ์ มรดกภูมิปัญญาทางวัฒนธรรมที่จับต้องไม่ได้ การฟ้อนเล็บล้านนาอันอ่อนช้อย และหุ่นละครเล็กโจหลุยส์',
    longDescription: 'โขนเป็นนาฏศิลป์ชั้นสูงของไทยที่มีมาแต่โบราณ ผสานศิลปะการเต้น การฟ้อนรำ การพากย์เจรจา เครื่องแต่งกายที่วิจิตรตระการตาด้วยดิ้นทอง ปักเลื่อม และหัวโขนอันศักดิ์สิทธิ์ ยูเนสโกได้ขึ้นทะเบียนโขนไทยเป็นมรดกภูมิปัญญาทางวัฒนธรรมที่จับต้องไม่ได้ของมนุษยชาติในปี พ.ศ. ๒๕๖๑',
    highlights: [
      { label: 'โขนรามเกียรติ์ ตอนศึกมัยราพณ์', value: 'ชมวีดิทัศน์ 4K', icon: 'theater_comedy' },
      { label: 'ฟ้อนเล็บและระบำโบราณคดี', value: 'บันทึกเสียง HI-RES', icon: 'music_note' },
    ],
    provenance: 'สำนักการสังคีต กรมศิลปากร บันทึกตามตำราหลวงราชสำนักสยาม',
    unescoStatus: 'UNESCO Intangible Cultural Heritage of Humanity (2018)',
    tags: ['โขนหลวง', 'รามเกียรติ์', 'นาฏศิลป์', 'หุ่นละครเล็ก', 'ฟ้อนเล็บ']
  },
  {
    id: 'pillar-2',
    title: 'เอกลักษณ์อาหารไทยและสำรับหลวง',
    titleEn: 'CULINARY HERITAGE ARCHIVE',
    category: 'culinary',
    categoryLabel: 'รสชาติแห่งแผ่นดิน',
    era: 'ayutthaya',
    eraLabel: 'อยุธยา / รัตนโกสินทร์',
    region: 'ภาคกลาง',
    badge: 'รสชาติแห่งแผ่นดิน',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwxWs9L58nVK2vucpWPkTPMPMNnXptjrvE3z55LCKW3ejMZjNNKHVscjV9TgmuCvWgnx7WRsHCs5i8-XO4QADdRsTJRMoqunV0VfgwQJOwSD7WhUzRQqACRdfFGwXvbPOhFLyNtp-BEkO62SsX6WsDAKeGYM33KY3LANHABgZ_n5mPlbxFKF2bAv_Q3TP8O8E16wOURUZ9UNksFR9oA8sfuGwKLYnLKuOFUjbDCtsLL9cwiWVOHao5',
    altText: 'Gourmet high end presentation of authentic Royal Thai Cuisine Tom Yum Goong served in an ornate engraved brass bowl',
    description: 'ศาสตร์แห่งรสสัมผัส ๕ รสที่กลมกล่อม สูตรต้นตำรับต้มยำกุ้ง แกงมัสมั่นเสน่ห์ไทยที่ครองใจระดับโลก ตลอดจนขนมหวานชาววังโบราณอย่างเสน่ห์จันทน์และทองเอก',
    longDescription: 'อาหารไทยโบราณคือการผสานศาสตร์สมุนไพรอันล้ำลึกกับสุนทรียภาพแห่งการจัดสำรับ ต้มยำกุ้งได้รับการยกย่องทั่วโลกด้วยรสเปรี้ยว เค็ม เผ็ด หอมระเหยของข่า ตะไคร้ ใบมะกรูด และมันกุ้งแม่น้ำธรรมชาติ สำรับชาววังยังสะท้อนถึงการแกะสลักผักผลไม้ประณีตศิลป์อย่างวิจิตร',
    highlights: [
      { label: 'ต้มยำกุ้งแม่น้ำเครื่องสดสูตรโบราณ', value: 'คัมภีร์ตำรับ', icon: 'restaurant' },
      { label: 'ขนมไทยมงคล ๙ ชนิดและเทคนิคดั้งเดิม', value: 'บันทึกขั้นตอน', icon: 'cake' },
    ],
    provenance: 'คัมภีร์แม่ครัวหัวป่าก์ (ท่านผู้หญิงเปลี่ยน ภาสกรวงศ์) และบันทึกห้องเครื่องพระวิมาดาเธอฯ',
    unescoStatus: 'UNESCO Representative List Candidate (Tom Yum Kung)',
    tags: ['ต้มยำกุ้ง', 'มรดกอาหารสยาม', 'ขนมมงคล', 'สำรับชาววัง', 'มัสมั่น']
  },
  {
    id: 'pillar-3',
    title: 'เทศกาลและประเพณีอันศักดิ์สิทธิ์',
    titleEn: 'SACRED FESTIVALS & RITUALS',
    category: 'festivals',
    categoryLabel: 'ยูเนสโกรับรอง',
    era: 'sukhothai',
    eraLabel: 'สุโขทัย',
    region: 'ภาคกลาง',
    badge: 'ยูเนสโกรับรอง',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7jE0JS5FOhaJYORfsfNbT7Pibq-653eD8FJCYdbpunYg0J-cdiOKO92wHsNhT9fTAcgA78hpbezLzRXqpp5AsY0W28lSku0JRtu1203gaRsCoVm-RS-CAzAKAtZUlkyW5wnptVlANvhhDSfoppdpZAQpLwpXm1YoB_IFReXy-VqSb8LDLj10WpXOeAFiH8TUOyhLKoaBWkJNj8Wl4U0F3iFkcIXPtiop8cJAzd1YClYlLzra5L3dB',
    altText: 'Magical nocturnal Loy Krathong festival in ancient Sukhothai historical park',
    description: 'เฉลิมฉลองประเพณีสงกรานต์ (มรดกทางวัฒนธรรมที่จับต้องไม่ได้ของมนุษยชาติ), ประเพณีลอยกระทงธารประทีป และเทศกาลผีตาโขนด่านซ้ายอันทรงพลังและเปี่ยมสีสัน',
    longDescription: 'ประเพณีสงกรานต์ในประเทศไทยได้รับการขึ้นทะเบียนโดยยูเนสโกเมื่อปี ๒๕๖๖ เป็นสัญลักษณ์แห่งการขึ้นปีใหม่ไทย การแสดงความกตัญญูต่อบรรพบุรุษ และการสรงน้ำพระชำระจิตใจ ขณะที่ประเพณีลอยกระทงเผาเทียนเล่นไฟ ณ อุทยานประวัติศาสตร์สุโขทัย สืบทอดธรรมเนียมการบูชารอยพระพุทธบาทและขอขมาพระแม่คงคามากว่า ๗ ศตวรรษ',
    highlights: [
      { label: 'สงกรานต์: วิถีน้ำ วิถีชุมชนไทย', value: 'UNESCO RECOGNIZED', icon: 'water_drop' },
      { label: 'ผีตาโขนเมืองด่านซ้าย: หน้ากากและจิตวิญญาณ', value: 'สารคดีสั้น', icon: 'masks' },
    ],
    provenance: 'กรมส่งเสริมวัฒนธรรม กระทรวงวัฒนธรรมแห่งราชอาณาจักรไทย',
    unescoStatus: 'UNESCO Intangible Cultural Heritage of Humanity (Songkran 2023)',
    tags: ['สงกรานต์', 'สงกรานต์ยูเนสโก', 'ลอยกระทง', 'ผีตาโขน', 'สุโขทัย']
  },
  {
    id: 'pillar-4',
    title: 'หัตถศิลป์และผ้าไทยโบราณ',
    titleEn: 'TEXTILE & ROYAL CRAFTSMANSHIP',
    category: 'craftsmanship',
    categoryLabel: 'ช่างสิบหมู่ & ประณีตศิลป์',
    era: 'ayutthaya',
    eraLabel: 'อยุธยา / รัตนโกสินทร์',
    region: 'ภาคใต้',
    badge: 'ช่างสิบหมู่ & ประณีตศิลป์',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4P26dztpvgV02LSody9qmO5a7MzorHuTsGW09fiHT-jSGY_wFyfxFP0nyQe3ACQKKDHQkFYW9VOKlwSUd7_-SczIOZRxbrDTPEDmjacy91pO6wnZkf6QuGu7sW6LFD6qrlDL7XdguwICSYuE6tIwVj6mUiqz9kX5CsqMoMlcOIEt08wAxLCDQE39RbUSxy4fvk1ckr-MuImMv6bHrfHyJl05YpMaesrcl19kyh4J1Cthx4T2GCVN',
    altText: 'Ultra detailed macro shot of master weaver hands crafting authentic Thai Mudmee silk cloth and Pha Yok Thong',
    description: 'เจาะลึกมรดกสิ่งทอราชสำนัก ผ้ายกทองเมืองนครศรีธรรมราช ผ้าไหมมัดหมี่ชนบท และลายผ้าขิดอีสาน พร้อมเทคนิคการสืบทอดสีธรรมชาติและลายรดน้ำทองคำ',
    longDescription: 'ผ้ายกทองเมืองนครและช่างสิบหมู่คือยอดมงกุฎแห่งประณีตศิลป์สยาม การทอผ้ายกทองใช้ไหมเส้นละเอียดสอดด้วยเส้นดิ้นทองคำแท้หรือเงินชุบทอง ต้องอาศัยตะกอพิเศษนับร้อยนับพันไม้ สะท้อนความอดทนและความเชี่ยวชาญระดับปรมาจารย์ที่สืบทอดมาแต่ครั้งกรุงศรีอยุธยา',
    highlights: [
      { label: 'ผ้ายกทองเมืองนคร: เส้นไหมสอดดิ้นทอง', value: '3D DIGITAL ZOOM', icon: 'texture' },
      { label: 'เครื่องถมนครและจิตรกรรมลายรดน้ำ', value: 'เกร็ดประวัติศาสตร์', icon: 'brush' },
    ],
    provenance: 'สถาบันช่างสิบหมู่ กรมศิลปากร ร่วมกับกลุ่มทอผ้าโบราณบ้านตรอกแค นครศรีธรรมราช',
    unescoStatus: 'National Living Master Craft Heritage',
    tags: ['ผ้ายกทอง', 'ผ้ายกทองนครศรี', 'ลายรดน้ำ', 'หัตถศิลป์ทองคำ', 'ช่างสิบหมู่']
  }
];

export const ALL_ARTIFACTS: CulturalArtifact[] = [
  ...CULTURAL_PILLARS,
  {
    id: 'art-5',
    title: 'พระบฏและจิตรกรรมฝาผนังวัดภูมินทร์',
    titleEn: 'WAT PHUMIN MURALS & PHRA BOT',
    category: 'performing_arts',
    categoryLabel: 'จิตรกรรมล้านนา',
    era: 'lanna',
    eraLabel: 'ล้านนา',
    region: 'ภาคเหนือ',
    badge: 'กระซิบรักบันลือโลก',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnQb3Rb8jwqAkFh5mPmLwcPemDcdTZ5V-diKZr-LF_GzMj97hb12r-DOpOClZJYVmj5I6XrPsDewWQbNJk0vY7V4BQc1tiQSOxc2gWy5ANS4ikBPDNilTcO1JH0zHuePekhtrFT8YXhF11umhZPTs9MNfccgUBVkpG9ckC5xPiebg8Q6xCLLRc7oKsqR6ETATL1ir2LqE20GrnwHiQrl-zCcYajMfDQd9joNkrvwxkdEj6KpcxYgEe',
    altText: 'Wat Phumin antique Thai temple mural painting of Pu Man Ya Man whispering love',
    description: 'ภาพกระซิบรักบันลือโลก "ปู่ม่านย่าม่าน" จิตรกรรมฝาผนังทรงคุณค่าทางมานุษยวิทยา ถ่ายทอดวิถีชีวิตชาวไทลื้อและขนบธรรมเนียมล้านนาโบราณ',
    longDescription: 'จิตรกรรมฝาผนังวัดภูมินทร์ จังหวัดน่าน วาดโดยหนานบัวผัน จิตรกรชาวไทลื้อ มีเอกลักษณ์ด้วยการสะท้อนความรัก ความอบอุ่น และการแต่งกายของชาวเมืองน่านยุครัตนโกสินทร์ตอนต้น',
    highlights: [
      { label: 'ปู่ม่านย่าม่าน: กระซิบรักบันลือโลก', value: 'ศิลปะไทลื้อ', icon: 'palette' },
      { label: 'การอนุรักษ์สีฝุ่นธรรมชาติ', value: 'รายงานวิจัย', icon: 'history_edu' }
    ],
    provenance: 'วัดภูมินทร์ อำเภอเมือง จังหวัดน่าน',
    tags: ['จิตรกรรม', 'วัดภูมินทร์', 'ล้านนา', 'ปู่ม่านย่าม่าน']
  },
  {
    id: 'art-6',
    title: 'พระปรางค์วัดอรุณราชวราราม',
    titleEn: 'WAT ARUN CENTRAL PRANG ARCHITECTURE',
    category: 'architecture',
    categoryLabel: 'สถาปัตยกรรมชั้นสูง',
    era: 'rattanakosin',
    eraLabel: 'รัตนโกสินทร์',
    region: 'ภาคกลาง',
    badge: 'มหาธาตุเจดีย์ริมเจ้าพระยา',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiuXaQm0d1cHkLBWvqXSYjq0Vp4KtHjD2sjXo7prfBAopHh-l3QD2EsrtfDG89jSFJ_8OerBX0LdxC5InzNxJALPWsgjtJEyJZKc5SdB5E-N0-4JtKDJLbei40LDOo2KqujIuxLOsFcaQ6kwH-qvvnI_Xc8Pzf2t_2yQxGDdnITtXKpyqBNxH1ulzaWBHt8BZjPI0jIQslbyB1_DLzWxQEKYdExmeLbkmHxxz8f82uB0ztUTbdsIxY',
    altText: 'Majestic Wat Arun pagoda silhouette against sky with fine porcelain ornamentation',
    description: 'มหาธาตุเจดีย์ทรงปรางค์สูง ๘๑.๘๕ เมตร ประดับด้วยกระเบื้องเคลือบถ้วยชามจีนโบราณ สัญลักษณ์อันสง่างามของกรุงเทพมหานครและสยามประเทศ',
    longDescription: 'สร้างและบูรณะครั้งใหญ่ในรัชกาลที่ ๒ และ ๓ ผสานสัญลักษณ์เขาพระสุเมรุ ศูนย์กลางแห่งจักรวาลตามคติไตรภูมิ ด้วยการประดับเปลือกหอยและกระเบื้องเครื่องเคลือบหลากสีอย่างอัศจรรย์',
    highlights: [
      { label: 'ความสูงยอดนภศูล', value: '๘๑.๘๕ เมตร', icon: 'architecture' },
      { label: 'กระเบื้องเคลือบลายเบญจรงค์', value: 'นับล้านชิ้น', icon: 'mosaic' }
    ],
    provenance: 'วัดอรุณราชวรารามราชวรมหาวิหาร',
    tags: ['สถาปัตยกรรม', 'วัดอรุณ', 'พระปรางค์', 'รัตนโกสินทร์']
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 1,
    title: 'โหมโรงปฐมดุสิต (ระนาดเอกหลวง)',
    subtitle: 'ระนาดเอก • 04:36',
    performer: 'วงปี่พาทย์ไม้แข็งหลวง บันทึกเสียงพ.ศ. ๒๔๗๔ ณ พระที่นั่งอมรินทรวินิจฉัย',
    recordingYear: 'พ.ศ. ๒๔๗๔ (1931)',
    duration: '04:36',
    durationSeconds: 276,
    isExclusive: false,
    audioQuality: 'FLAC 24-BIT / 96KHZ',
    description: 'เพลงโหมโรงเชิดชูเกียรติยศ บรรเลงด้วยระนาดเอกไม้ชิงชันรางทองคำ ถ่ายทอดความองอาจและสมาธิจิตแห่งคีตศิลป์ไทยโบราณ'
  },
  {
    id: 2,
    title: 'ลาวดวงเดือน (บรรเลงวงเครื่องสาย)',
    subtitle: 'ซอด้วง & จะเข้ • 06:12',
    performer: 'พระนิพนธ์พระเจ้าบรมวงศ์เธอ กรมหมื่นพิไชยมหินทโรดม',
    recordingYear: 'พ.ศ. ๒๔๙๕ (1952)',
    duration: '06:12',
    durationSeconds: 372,
    isExclusive: false,
    audioQuality: 'MASTER ANALOG REMASTER',
    description: 'บทเพลงรักอมตะแห่งสยาม เรียบเรียงเสียงประสานเครื่องสายไทย นุ่มนวล อ่อนหวาน ดุจแสงจันทร์วันเพ็ญกระทบผิวน้ำ'
  },
  {
    id: 3,
    title: 'คัมภีร์ดนตรีไทยในวังหน้า',
    subtitle: 'เสียงบันทึกหายาก • 14:20',
    performer: 'ครูหลวงประดิษฐไพเราะ (ศร ศิลปบรรเลง) และคณะ',
    recordingYear: 'พ.ศ. ๒๔๗๘ (1935)',
    duration: '14:20',
    durationSeconds: 860,
    isExclusive: true,
    audioQuality: 'STUDIO MASTER ARCHIVE (VIP)',
    description: 'บันทึกลับประวัติศาสตร์เพลงหน้าพาทย์ชั้นสูง ซึ่งใช้ในพิธีไหว้ครูดนตรีไทยและพระราชพิธีบวงสรวงเทวดา'
  },
  {
    id: 4,
    title: 'ตำนานซอสามสายคู่แผ่นดิน',
    subtitle: 'เสียงกะโหลกซอโบราณ • 09:45',
    performer: 'เสียงกะโหลกซอสามสายงาช้าง รัชสมัยพระบาทสมเด็จพระพุทธเลิศหล้านภาลัย',
    recordingYear: 'พ.ศ. ๒๕๐๓ (1960)',
    duration: '09:45',
    durationSeconds: 585,
    isExclusive: true,
    audioQuality: 'SACRED TONE ARCHIVE (VIP)',
    description: 'เครื่องดนตรีชั้นสูงอันเป็นที่โปรดปรานของพระมหากษัตริย์ สุ้มเสียงกังวานลึกซึ้งด้วยกะโหลกมะพร้าวสามพูหายาก'
  }
];

export const DOCUMENTARIES: Documentary[] = [
  {
    id: 'doc-1',
    title: 'พระมหาธาตุเจดีย์: มหาศรัทธาสยาม',
    subtitle: 'สัมผัสโครงสร้างสถาปัตยกรรมยอดแหลมที่ท้าทายกาลเวลากว่า ๗๐๐ ปี',
    duration: '๔๘ นาที',
    resolution: '4K UHD HDR',
    year: '๒๕๖๗',
    badge: 'NEW RELEASE',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiuXaQm0d1cHkLBWvqXSYjq0Vp4KtHjD2sjXo7prfBAopHh-l3QD2EsrtfDG89jSFJ_8OerBX0LdxC5InzNxJALPWsgjtJEyJZKc5SdB5E-N0-4JtKDJLbei40LDOo2KqujIuxLOsFcaQ6kwH-qvvnI_Xc8Pzf2t_2yQxGDdnITtXKpyqBNxH1ulzaWBHt8BZjPI0jIQslbyB1_DLzWxQEKYdExmeLbkmHxxz8f82uB0ztUTbdsIxY',
    description: 'เจาะลึกวิศวกรรมการก่อสร้างพระมหาธาตุเจดีย์นครศรีธรรมราช สุโขทัย และอยุธยา ถอดรหัสคติจักรวาลวิทยา และความลับของปูนหมักโบราณที่คงทนแดดฝนมาหลายร้อยปี',
    director: 'ทีมสารคดีหอจดหมายเหตุสยาม ร่วมกับ สมาคมสถาปนิกสยาม',
    chapters: [
      { time: '00:00', title: 'ปฐมบท: มหาธาตุศูนย์กลางจักรวาล' },
      { time: '12:30', title: 'ศิลาแลงและปูนโบราณ: นวัตกรรมช่างสยาม' },
      { time: '26:45', title: 'ยอดฉัตรทองคำและพระบรมสารีริกธาตุ' },
      { time: '41:10', title: 'กาลเวลาและการบูรณปฏิสังขรณ์' }
    ],
    isExclusive: true
  },
  {
    id: 'doc-2',
    title: 'หัตถศิลป์เครื่องทองโบราณ: สารคดีตามรอยช่างสิบหมู่แห่งกรุงศรีอยุธยา',
    subtitle: 'ความวิจิตรของทองคำแท้และอัญมณีในราชสำนักอยุธยา',
    duration: '๕๒ นาที',
    resolution: '4K UHD MASTER',
    year: '๒๕๖๗',
    badge: 'EXCLUSIVITY 4K',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZGbjSJW--MhXX8nUvdwOg7tCd18TpcyhB6EBcMQ1G6UecRoCXuQWyDyPI2mkO2t1CqgOQm6_6JPCzM9i-0tNXK92G1TQaVLPw5Po1V6UmYyxCnrWvwxvlzq5bY-eeHhdJg-YVfQtQZal1jYAI3mR5CvNNVwCN1aJ-eOgNy1yw9tESDmzIFM6c1w2YRaOHz1t2-YHlwAsrp7dt9i21e6k9CHbEn89z2x5IeCYqPk_eLY6B7QLFMW-t',
    description: 'ติดตามการฟื้นฟูเทคนิคการทำทองถัก การสลักดุน และการลงยาราชาวดี โดยช่างทองหลวงรุ่นสุดท้าย ผู้สืบทอดแบบแผนตั้งแต่ยุคกรุงศรีอยุธยา',
    director: 'สำนักช่างสิบหมู่ กรมศิลปากร',
    chapters: [
      { time: '00:00', title: 'กรุสมบัติวัดราชบูรณะ: ประจักษ์พยานแห่งทองคำ' },
      { time: '15:20', title: 'เตาหลอมและเทคนิคการดุนลายโบราณ' },
      { time: '34:10', title: 'การลงยาสีราชาวดี: เคมีโบราณ' },
      { time: '48:00', title: 'ส่งต่อมรดกสู่เยาวชนรุ่นใหม่' }
    ],
    isExclusive: true
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'art-1',
    title: 'ลายรดน้ำ: ความลับแห่งทองคำเปลวและยางรักธรรมชาติ',
    author: 'รศ. ดร. วิมล ประดิษฐ์ศิลป์',
    dateAgo: '๕ วันที่แล้ว',
    category: 'จิตรกรรม',
    readTime: 'เวลาอ่าน ๘ นาที',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiD0GA6UJiZn5isGMJBxmyJI_LEacGluI3dU5qM9HNN16lMHaKhF2yLaeGbWd27LSImVpelBF58_QBbaFARBvOjggLTzJCdtj1Hp4f9sEGX6-3MLZvQkPoquiARLqYg0VpHfFYeAKVpRZhRx6rIdUAfue2tubnRYYAgC_g7PyW22rsfuc2eXk5tNjQKNWgPo-eOraECpY5uEGZG9PpPLdiZ5ot1MrZUhcCBdUrqQe-gB6pZdzg9h68',
    excerpt: 'ศึกษาเทคนิคช่างหลวงโบราณตั้งแต่การเตรียมสมุกรัก การเขียนหรดาล ไปจนถึงการล้างน้ำเปิดลวดลายทองคำอันเป็นอมตะ',
    content: [
      'ลายรดน้ำเป็นงานประณีตศิลป์แขนงหนึ่งของช่างรักสยาม ซึ่งใช้เทคนิคเฉพาะตัวอันชาญฉลาดในการสร้างลวดลายสีทองอร่ามบนพื้นรักสีดำสนิท คำว่า "รดน้ำ" มาจากขั้นตอนสุดท้ายของการทำ ที่ต้องเอาน้ำมารดหรือล้างออก เพื่อให้ปรากฏลวดลายทองคำที่ปิดไว้',
      'กรรมวิธีเริ่มต้นจากการเตรียมพื้นไม้ ทารักสมุก ขัดให้เรียบสนิทจนขึ้นเงาดำ จากนั้นช่างจะเขียนลวดลายด้วย "น้ำหรดาล" (แร่หรดาลผสมน้ำฝักส้มป่อยและกาวกระถิน) น้ำหรดาลนี้จะทำหน้าที่เป็นสารกั้นทอง',
      'เมื่อเขียนลายเสร็จแล้ว จะเช็ดรักเช็ด (ยางรักบริสุทธิ์) บางๆ ทั่วพื้นผิว รอให้รักหมาดจนเกือบแห้ง แล้วจึงปิดทองคำเปลวบริสุทธิ์ ๑๐๐% ทับลงไปให้ทั่ว เมื่อทองติดแน่นดีแล้ว ช่างจะนำน้ำสะอาดมารดและใช้สำลีหรือกระดาษฟางลูบเบาๆ ส่วนที่เขียนด้วยหรดาลจะละลายหลุดออก เหลือเพียงทองคำเปลวที่ติดแน่นบนพื้นรัก ก่อเกิดเป็นลวดลายสว่างไสวเหนือกาลเวลา'
    ],
    citations: [
      'สมเด็จพระเจ้าบรมวงศ์เธอ เจ้าฟ้ากรมพระยานริศรานุวัดติวงศ์. บันทึกเรื่องช่างรักไทย. หอสมุดแห่งชาติ.',
      'กรมศิลปากร. ตำราลายไทยและงานรดน้ำโบราณ. โรงพิมพ์คุรุสภา, ๒๕๒๗.'
    ]
  },
  {
    id: 'art-2',
    title: 'เรือนไทยหมู่คหบดี: วิศวกรรมไร้ตะปูที่รับมือลมมรสุม',
    author: 'สถาบันสถาปัตยกรรมไทย',
    dateAgo: '๒ สัปดาห์ที่แล้ว',
    category: 'สถาปัตยกรรม',
    readTime: 'เวลาอ่าน ๑๒ นาที',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvfzDCsWi1Xxhv5WE3K_AkZhT6m_qahP2EBt5YGSjqEOLk-6M8oMZ8pqvgeJgVq0E6gJFztUGfuFCLi27SIUEMF_jxJw8bhmCUZuTvRu975yMuAUO9q5PukZQOS7S7RyVBEpcBNk_AZvR4MUl1Y0L_MM_5DIMxBlrOVVHhmglEaBJJgIah8IT8WpKl4u-z8yWpMvzGNlkgIDkXdD6HEKHLD7-Z8DbhHboylI3sKXAQG2tXK100HkLB',
    excerpt: 'ถอดรหัสภูมิปัญญาการเข้าไม้แบบเดือยลิ่ม และองศาหลังคาทรงจั่วสูงที่ระบายความร้อนได้อย่างมหัศจรรย์',
    content: [
      'เรือนไทยภาคกลางไม่ได้เป็นเพียงที่อยู่อาศัย แต่คือผลงานวิศวกรรมสถาปัตยกรรมพื้นถิ่นที่คิดค้นขึ้นเพื่อรับมือกับภูมิอากาศร้อนชื้นและมรสุมลุ่มน้ำเจ้าพระยาอย่างสมบูรณ์แบบ',
      'หัวใจสำคัญคือระบบ "ฝาปะกน" และการเข้าไม้แบบเดือย รูสลัก และลิ่มไม้ โดยไม่ใช้ตะปูโลหะแม้แต่ตัวเดียว โครงสร้างทั้งหมดจึงมีความยืดหยุ่นสูง สามารถถอดประกอบและเคลื่อนย้ายไปตั้งในพื้นที่ใหม่ได้โดยไม่ทำให้เนื้อไม้สักเสียหาย',
      'ใต้ถุนที่ยกสูงกว่า ๒.๕ เมตร ช่วยป้องกันน้ำท่วมหลากในฤดูน้ำนอง และเปิดให้ลมพัดผ่านพาความเย็นสู่ชานเรือนด้านบน ขณะที่หลังคาทรงจั่วสูงชัน มีชายคายื่นยาว ป้องกันฝนสาดและระบายมวลอากาศร้อนลอยขึ้นสู่ยอดจั่วอย่างรวดเร็ว'
    ],
    citations: [
      'น. ณ ปากน้ำ. สถาปัตยกรรมเรือนไทยเดิม. สำนักพิมพ์เมืองโบราณ, ๒๕๓๑.',
      'อาจารย์ยอด นิลเพ็ชร. กลวิธีเข้าไม้ช่างไม้ไทยโบราณ. วิทยาลัยเพาะช่าง.'
    ]
  },
  {
    id: 'art-3',
    title: 'เครื่องถมนคร: ศิลปะโลหะวิทยาชั้นสูงแห่งเมืองตามพรลิงค์',
    author: 'หอศิลป์ร่วมสมัย',
    dateAgo: '๓ สัปดาห์ที่แล้ว',
    category: 'ประณีตศิลป์',
    readTime: 'เวลาอ่าน ๑๐ นาที',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQyQLVbEq84p1kScV9DAJ8obhRduSzUnTO5mmFla7IE4h8Nc7jBVYEUc1JnKKcfcNN5KVMipsVd1H3_yKMkhuhafiWHhaRcWKeiIgnJ6sOPwWHXvHJBQbVEBOAHlqnL_K0HBEvQcGLiRGkDxmTCDGdk8oJDye_59AvIYLu7Sd7eG9Jv6tSB9TVzdy2UFUNXbrG-ZVwPPeYgSTWlp4jkF-rrQuVvpwkNDeH8sJVDbdqGKx6PVKL3wHY',
    excerpt: 'การผสานแร่เงิน ทองแดง ตะกั่ว และกำมะถัน เพื่อสร้างสรรค์ลวดลายตัดกับประกายเงาของเงินบริสุทธิ์',
    content: [
      'เครื่องถมนครศรีธรรมราชได้รับการยกย่องว่าเป็นหนึ่งในงานหัตถศิลป์โลหะที่มีชื่อเสียงที่สุดของสยาม คำว่า "ถม" หมายถึงการเทสารผสมสีดำลงไปในร่องลายที่สลักไว้บนภาชนะเงินหรือทอง',
      'ส่วนผสมของ "ยาถม" เป็นสูตรลับเฉพาะที่ผสมผสานแร่เงิน ทองแดง ตะกั่ว และกำมะถัน หลอมเข้าด้วยกันจนเป็นก้อนสีดำมันวาว เมื่อช่างแกะสลักลวดลายลงบนเนื้อเงิน ๙๙.๙% แล้ว จะนำยาถมมาบดละเอียดแล้วเกลี่ยลงในร่องลาย ก่อนจะนำไปเผาไฟเพื่อให้ยาถมละลายแทรกซึมทุกซอกมุม',
      'ขั้นตอนสุดท้ายคือการขัดถูด้วยหินขัดและถ่านไม้ เพื่อลอกยาถมส่วนเกินออกจนเห็นเนื้อเงินเงาวาวตัดกับรอยถมสีดำสนิทอย่างคมชัด หรือหากเป็น "ถมทอง" จะใช้กรรมวิธีเปียกทองคำแท้ด้วยปรอทลงบนผิวเงินลายถม ก่อเกิดเป็นสมบัติล้ำค่าที่นิยมมอบเป็นของขวัญราชทูตระหว่างประเทศ'
    ],
    citations: [
      'พิทักษ์ มโนรมย์. หัตถกรรมเครื่องถมเมืองนครศรีธรรมราช. สำนักงานวัฒนธรรมจังหวัดนครศรีธรรมราช.',
      'บันทึกจดหมายเหตุกรุงศรีอยุธยา ว่าด้วยเครื่องราชบรรณาการ.'
    ]
  }
];

export const API_DOCUMENTATION: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/api/v1/heritage/artifacts',
    description: 'ดึงข้อมูลคลังโบราณวัตถุ มรดกภูมิปัญญาทางวัฒนธรรม และประณีตศิลป์แห่งสยาม',
    parameters: [
      { name: 'era', type: 'string', required: false, description: 'ยุคสมัย: sukhothai, ayutthaya, rattanakosin, lanna' },
      { name: 'category', type: 'string', required: false, description: 'หมวดหมู่วัฒนธรรม: performing_arts, culinary, festivals, craftsmanship, architecture' },
      { name: 'q', type: 'string', required: false, description: 'คำค้นหาภาษาไทยหรืออังกฤษ' }
    ],
    sampleResponse: {
      status: 'success',
      total: 48,
      data: [
        {
          id: 'pillar-1',
          title: 'ศิลปวัฒนธรรมและการแสดง',
          titleEn: 'ROYAL PERFORMING ARTS',
          era: 'rattanakosin',
          unescoStatus: 'UNESCO Intangible Cultural Heritage of Humanity (2018)',
          media: {
            preview: 'https://lh3.googleusercontent.com/...',
            resolution: '4K_UHD'
          }
        }
      ]
    }
  },
  {
    method: 'GET',
    path: '/api/v1/archives/audio',
    description: 'ดึงรายการแผ่นเสียงและไฟล์บันทึกเสียงดนตรีไทยเดิมฉบับหอสมุดดนตรีพระบาทสมเด็จพระเจ้าอยู่หัว',
    parameters: [
      { name: 'format', type: 'string', required: false, description: 'รูปแบบเสียง: flac_24bit, wav_hi_res, mp3_320k' },
      { name: 'instrument', type: 'string', required: false, description: 'เครื่องดนตรี: ranad_ek, saw_sam_sai, pi_nai' }
    ],
    sampleResponse: {
      status: 'success',
      collection: 'Royal Siamese Music Archive',
      tracks: [
        {
          id: 1,
          title: 'โหมโรงปฐมดุสิต (ระนาดเอกหลวง)',
          recordingYear: '1931',
          bitrate: '24-bit/96kHz FLAC',
          curator: 'สำนักการสังคีต กรมศิลปากร'
        }
      ]
    }
  },
  {
    method: 'GET',
    path: '/api/v1/unesco/living-heritage',
    description: 'ดึงรายการมรดกวัฒนธรรมที่จับต้องไม่ได้ของไทยที่ได้รับการขึ้นทะเบียนโดย UNESCO',
    parameters: [
      { name: 'year', type: 'integer', required: false, description: 'ปีที่ขึ้นทะเบียน ค.ศ.' }
    ],
    sampleResponse: {
      status: 'success',
      country: 'Thailand',
      inscriptions: [
        { name: 'Khon, masked dance drama in Thailand', year: 2018, status: 'Inscribed' },
        { name: 'Nuad Thai, traditional Thai massage', year: 2019, status: 'Inscribed' },
        { name: 'Nora, dance drama in southern Thailand', year: 2021, status: 'Inscribed' },
        { name: 'Songkran in Thailand', year: 2023, status: 'Inscribed' }
      ]
    }
  }
];
