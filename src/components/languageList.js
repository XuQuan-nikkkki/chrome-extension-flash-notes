const languageList = [
  {
    language: 'Afrikaans (Suid-Afrika)',
    languageCode: 'af-ZA'
  },
  {
    language: 'አማርኛ (ኢትዮጵያ)',
    languageCode: 'am-ET'
  },
  {
    language: 'Հայ (Հայաստան)',
    languageCode: 'hy-AM'
  },
  {
    language: 'Azərbaycan (Azərbaycan)',
    languageCode: 'az-AZ'
  },
  {
    language: 'Bahasa Indonesia (Indonesia)',
    languageCode: 'id-ID'
  },
  {
    language: 'Bahasa Melayu (Malaysia)',
    languageCode: 'ms-MY'
  },
  {
    language: 'বাংলা (বাংলাদেশ)',
    languageCode: 'bn-BD'
  },
  {
    language: 'বাংলা (ভারত)',
    languageCode: 'bn-IN'
  },
  {
    language: 'Català (Espanya)',
    languageCode: 'ca-ES'
  },
  {
    language: 'Čeština (Česká republika)',
    languageCode: 'cs-CZ'
  },
  {
    language: 'Dansk (Danmark)',
    languageCode: 'da-DK'
  },
  {
    language: 'Deutsch (Deutschland)',
    languageCode: 'de-DE'
  },
  {
    language: 'English (Australia)',
    languageCode: 'en-AU'
  },
  {
    language: 'English (Canada)',
    languageCode: 'en-CA'
  },
  {
    language: 'English (Ghana)',
    languageCode: 'en-GH'
  },
  {
    language: 'English (Great Britain)',
    languageCode: 'en-GB'
  },
  {
    language: 'English (India)',
    languageCode: 'en-IN'
  },
  {
    language: 'English (Ireland)',
    languageCode: 'en-IE'
  },
  {
    language: 'English (Kenya)',
    languageCode: 'en-KE'
  },
  {
    language: 'English (New Zealand)',
    languageCode: 'en-NZ'
  },
  {
    language: 'English (Nigeria)',
    languageCode: 'en-NG'
  },
  {
    language: 'English (Philippines)',
    languageCode: 'en-PH'
  },
  {
    language: 'English (South Africa)',
    languageCode: 'en-ZA'
  },
  {
    language: 'English (Tanzania)',
    languageCode: 'en-TZ'
  },
  {
    language: 'English (United States)',
    languageCode: 'en-US'
  },
  {
    language: 'Español (Argentina)',
    languageCode: 'es-AR'
  },
  {
    language: 'Español (Bolivia)',
    languageCode: 'es-BO'
  },
  {
    language: 'Español (Chile)',
    languageCode: 'es-CL'
  },
  {
    language: 'Español (Colombia)',
    languageCode: 'es-CO'
  },
  {
    language: 'Español (Costa Rica)',
    languageCode: 'es-CR'
  },
  {
    language: 'Español (Ecuador)',
    languageCode: 'es-EC'
  },
  {
    language: 'Español (El Salvador)',
    languageCode: 'es-SV'
  },
  {
    language: 'Español (España)',
    languageCode: 'es-ES'
  },
  {
    language: 'Español (Estados Unidos)',
    languageCode: 'es-US'
  },
  {
    language: 'Español (Guatemala)',
    languageCode: 'es-GT'
  },
  {
    language: 'Español (Honduras)',
    languageCode: 'es-HN'
  },
  {
    language: 'Español (México)',
    languageCode: 'es-MX'
  },
  {
    language: 'Español (Nicaragua)',
    languageCode: 'es-NI'
  },
  {
    language: 'Español (Panamá)',
    languageCode: 'es-PA'
  },
  {
    language: 'Español (Paraguay)',
    languageCode: 'es-PY'
  },
  {
    language: 'Español (Perú)',
    languageCode: 'es-PE'
  },
  {
    language: 'Español (Puerto Rico)',
    languageCode: 'es-PR'
  },
  {
    language: 'Español (República Dominicana)',
    languageCode: 'es-DO'
  },
  {
    language: 'Español (Uruguay)',
    languageCode: 'es-UY'
  },
  {
    language: 'Español (Venezuela)',
    languageCode: 'es-VE'
  },
  {
    language: 'Euskara (Espainia)',
    languageCode: 'eu-ES'
  },
  {
    language: 'Filipino (Pilipinas)',
    languageCode: 'fil-PH'
  },
  {
    language: 'Français (Canada)',
    languageCode: 'fr-CA'
  },
  {
    language: 'Français (France)',
    languageCode: 'fr-FR'
  },
  {
    language: 'Galego (España)',
    languageCode: 'gl-ES'
  },
  {
    language: 'ქართული (საქართველო)',
    languageCode: 'ka-GE'
  },
  {
    language: 'ગુજરાતી (ભારત)',
    languageCode: 'gu-IN'
  },
  {
    language: 'Hrvatski (Hrvatska)',
    languageCode: 'hr-HR'
  },
  {
    language: 'IsiZulu (Ningizimu Afrika)',
    languageCode: 'zu-ZA'
  },
  {
    language: 'Íslenska (Ísland)',
    languageCode: 'is-IS'
  },
  {
    language: 'Italiano (Italia)',
    languageCode: 'it-IT'
  },
  {
    language: 'Jawa (Indonesia)',
    languageCode: 'jv-ID'
  },
  {
    language: 'ಕನ್ನಡ (ಭಾರತ)',
    languageCode: 'kn-IN'
  },
  {
    language: 'ភាសាខ្មែរ (កម្ពុជា)',
    languageCode: 'km-KH'
  },
  {
    language: 'ລາວ (ລາວ)',
    languageCode: 'lo-LA'
  },
  {
    language: 'Latviešu (latviešu)',
    languageCode: 'lv-LV'
  },
  {
    language: 'Lietuvių (Lietuva)',
    languageCode: 'lt-LT'
  },
  {
    language: 'Magyar (Magyarország)',
    languageCode: 'hu-HU'
  },
  {
    language: 'മലയാളം (ഇന്ത്യ)',
    languageCode: 'ml-IN'
  },
  {
    language: 'मराठी (भारत)',
    languageCode: 'mr-IN'
  },
  {
    language: 'Nederlands (Nederland)',
    languageCode: 'nl-NL'
  },
  {
    language: 'नेपाली (नेपाल)',
    languageCode: 'ne-NP'
  },
  {
    language: 'Norsk bokmål (Norge)',
    languageCode: 'nb-NO'
  },
  {
    language: 'Polski (Polska)',
    languageCode: 'pl-PL'
  },
  {
    language: 'Português (Brasil)',
    languageCode: 'pt-BR'
  },
  {
    language: 'Português (Portugal)',
    languageCode: 'pt-PT'
  },
  {
    language: 'Română (România)',
    languageCode: 'ro-RO'
  },
  {
    language: 'සිංහල (ශ්රී ලංකාව)',
    languageCode: 'si-LK'
  },
  {
    language: 'Slovenčina (Slovensko)',
    languageCode: 'sk-SK'
  },
  {
    language: 'Slovenščina (Slovenija)',
    languageCode: 'sl-SI'
  },
  {
    language: 'Urang (Indonesia)',
    languageCode: 'su-ID'
  },
  {
    language: 'Swahili (Tanzania)',
    languageCode: 'sw-TZ'
  },
  {
    language: 'Swahili (Kenya)',
    languageCode: 'sw-KE'
  },
  {
    language: 'Suomi (Suomi)',
    languageCode: 'fi-FI'
  },
  {
    language: 'Svenska (Sverige)',
    languageCode: 'sv-SE'
  },
  {
    language: 'தமிழ் (இந்தியா)',
    languageCode: 'ta-IN'
  },
  {
    language: 'தமிழ் (சிங்கப்பூர்)',
    languageCode: 'ta-SG'
  },
  {
    language: 'தமிழ் (இலங்கை)',
    languageCode: 'ta-LK'
  },
  {
    language: 'தமிழ் (மலேசியா)',
    languageCode: 'ta-MY'
  },
  {
    language: 'తెలుగు (భారతదేశం)',
    languageCode: 'te-IN'
  },
  {
    language: 'Tiếng Việt (Việt Nam)',
    languageCode: 'vi-VN'
  },
  {
    language: 'Türkçe (Türkiye)',
    languageCode: 'tr-TR'
  },
  {
    language: 'اردو (پاکستان)',
    languageCode: 'ur-PK'
  },
  {
    language: 'اردو (بھارت)',
    languageCode: 'ur-IN'
  },
  {
    language: 'Ελληνικά (Ελλάδα)',
    languageCode: 'el-GR'
  },
  {
    language: 'Български (България)',
    languageCode: 'bg-BG'
  },
  {
    language: 'Русский (Россия)',
    languageCode: 'ru-RU'
  },
  {
    language: 'Српски (Србија)',
    languageCode: 'sr-RS'
  },
  {
    language: 'Українська (Україна)',
    languageCode: 'uk-UA'
  },
  {
    language: 'עברית (ישראל)',
    languageCode: 'he-IL'
  },
  {
    language: 'العربية (إسرائيل)',
    languageCode: 'ar-IL'
  },
  {
    language: 'العربية (الأردن)',
    languageCode: 'ar-JO'
  },
  {
    language: 'العربية (الإمارات)',
    languageCode: 'ar-AE'
  },
  {
    language: 'العربية (البحرين)',
    languageCode: 'ar-BH'
  },
  {
    language: 'العربية (الجزائر)',
    languageCode: 'ar-DZ'
  },
  {
    language: 'العربية (السعودية)',
    languageCode: 'ar-SA'
  },
  {
    language: 'العربية (العراق)',
    languageCode: 'ar-IQ'
  },
  {
    language: 'العربية (الكويت)',
    languageCode: 'ar-KW'
  },
  {
    language: 'العربية (المغرب)',
    languageCode: 'ar-MA'
  },
  {
    language: 'العربية (تونس)',
    languageCode: 'ar-TN'
  },
  {
    language: 'العربية (عُمان)',
    languageCode: 'ar-OM'
  },
  {
    language: 'العربية (فلسطين)',
    languageCode: 'ar-PS'
  },
  {
    language: 'العربية (قطر)',
    languageCode: 'ar-QA'
  },
  {
    language: 'العربية (لبنان)',
    languageCode: 'ar-LB'
  },
  {
    language: 'العربية (مصر)',
    languageCode: 'ar-EG'
  },
  {
    language: 'فارسی (ایران)',
    languageCode: 'fa-IR'
  },
  {
    language: 'हिन्दी (भारत)',
    languageCode: 'hi-IN'
  },
  {
    language: 'ไทย (ประเทศไทย)',
    languageCode: 'th-TH'
  },
  {
    language: '한국어 (대한민국)',
    languageCode: 'ko-KR'
  },
  {
    language: '國語 (台灣)',
    languageCode: 'cmn-Hant-TW'
  },
  {
    language: '廣東話 (香港)',
    languageCode: 'yue-Hant-HK'
  },
  {
    language: '日本語（日本）',
    languageCode: 'ja-JP'
  },
  {
    language: '普通話 (香港)',
    languageCode: 'cmn-Hans-HK'
  },
  {
    language: '普通话 (中国大陆)',
    languageCode: 'cmn-Hans-CN'
  }
];

export default languageList;
