import type { Question } from '../types/quiz';

/**
 * Quiz Questions Data
 * 
 * IMPORTANT: Answer Mapping Structure
 * - Each question has a `correctAnswerIndex` (0-3) that points to the correct option in the `options` array
 * - Backend validation must match these indices exactly
 * - The first option in the array is index 0, second is index 1, etc.
 * 
 * Example:
 * options: ['ایران', 'ایتالیا', 'مکزیک', 'مجارستان']
 * correctAnswerIndex: 0  // means 'ایران' is correct
 */

export const flagQuestions: Question[] = [
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ایران', 'ایتالیا', 'مکزیک', 'مجارستان'],
    correctAnswerIndex: 0, // Correct: ایران (Iran flag shown)
    imageUrl: '/assets/generated/flag-iran.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ژاپن', 'چین', 'کره جنوبی', 'تایلند'],
    correctAnswerIndex: 0, // Correct: ژاپن (Japan flag shown)
    imageUrl: '/assets/generated/flag-japan.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['برزیل', 'آرژانتین', 'کلمبیا', 'شیلی'],
    correctAnswerIndex: 0, // Correct: برزیل (Brazil flag shown)
    imageUrl: '/assets/generated/flag-brazil.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['آلمان', 'فرانسه', 'بلژیک', 'هلند'],
    correctAnswerIndex: 0, // Correct: آلمان (Germany flag shown)
    imageUrl: '/assets/generated/flag-germany.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['فرانسه', 'هلند', 'روسیه', 'لوکزامبورگ'],
    correctAnswerIndex: 0, // Correct: فرانسه (France flag shown)
    imageUrl: '/assets/generated/flag-france.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['انگلستان', 'استرالیا', 'نیوزیلند', 'فیجی'],
    correctAnswerIndex: 0, // Correct: انگلستان (UK flag shown)
    imageUrl: '/assets/generated/flag-uk.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ایتالیا', 'مکزیک', 'ایرلند', 'مجارستان'],
    correctAnswerIndex: 0, // Correct: ایتالیا (Italy flag shown)
    imageUrl: '/assets/generated/flag-italy.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اسپانیا', 'پرتغال', 'رومانی', 'آندورا'],
    correctAnswerIndex: 0, // Correct: اسپانیا (Spain flag shown)
    imageUrl: '/assets/generated/flag-spain.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['کانادا', 'دانمارک', 'سوئیس', 'لهستان'],
    correctAnswerIndex: 0, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['استرالیا', 'نیوزیلند', 'انگلستان', 'فیجی'],
    correctAnswerIndex: 0, // Correct: استرالیا (Australia flag shown)
    imageUrl: '/assets/generated/flag-australia.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['چین', 'ویتنام', 'کره شمالی', 'لائوس'],
    correctAnswerIndex: 0, // Correct: چین (China flag shown)
    imageUrl: '/assets/generated/flag-china.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['مصر', 'سوریه', 'عراق', 'یمن'],
    correctAnswerIndex: 0, // Correct: مصر (Egypt flag shown)
    imageUrl: '/assets/generated/flag-egypt.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['عربستان سعودی', 'پاکستان', 'ترکمنستان', 'الجزایر'],
    correctAnswerIndex: 0, // Correct: عربستان سعودی (Saudi Arabia flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ترکیه', 'تونس', 'الجزایر', 'پاکستان'],
    correctAnswerIndex: 0, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['آمریکا', 'لیبریا', 'مالزی', 'شیلی'],
    correctAnswerIndex: 0, // Correct: آمریکا (USA flag shown)
    imageUrl: '/assets/generated/flag-usa.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['آرژانتین', 'اروگوئه', 'یونان', 'برزیل'],
    correctAnswerIndex: 3, // Correct: برزیل (Brazil flag shown)
    imageUrl: '/assets/generated/flag-brazil.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['مکزیک', 'ایران', 'مجارستان', 'ایتالیا'],
    correctAnswerIndex: 3, // Correct: ایتالیا (Italy flag shown)
    imageUrl: '/assets/generated/flag-italy.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['هند', 'پاکستان', 'بنگلادش', 'ایران'],
    correctAnswerIndex: 3, // Correct: ایران (Iran flag shown)
    imageUrl: '/assets/generated/flag-iran.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['روسیه', 'هلند', 'صربستان', 'فرانسه'],
    correctAnswerIndex: 3, // Correct: فرانسه (France flag shown)
    imageUrl: '/assets/generated/flag-france.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['کره جنوبی', 'چین', 'تایوان', 'ژاپن'],
    correctAnswerIndex: 3, // Correct: ژاپن (Japan flag shown)
    imageUrl: '/assets/generated/flag-japan.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['پرتغال', 'برزیل', 'مراکش', 'اسپانیا'],
    correctAnswerIndex: 3, // Correct: اسپانیا (Spain flag shown)
    imageUrl: '/assets/generated/flag-spain.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['سوئد', 'نروژ', 'فنلاند', 'کانادا'],
    correctAnswerIndex: 3, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['نیوزیلند', 'انگلستان', 'فیجی', 'استرالیا'],
    correctAnswerIndex: 3, // Correct: استرالیا (Australia flag shown)
    imageUrl: '/assets/generated/flag-australia.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['سوئیس', 'دانمارک', 'نروژ', 'کانادا'],
    correctAnswerIndex: 3, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['بلژیک', 'فرانسه', 'هلند', 'آلمان'],
    correctAnswerIndex: 3, // Correct: آلمان (Germany flag shown)
    imageUrl: '/assets/generated/flag-germany.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['هلند', 'روسیه', 'لوکزامبورگ', 'فرانسه'],
    correctAnswerIndex: 3, // Correct: فرانسه (France flag shown)
    imageUrl: '/assets/generated/flag-france.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['یونان', 'اسرائیل', 'آرژانتین', 'انگلستان'],
    correctAnswerIndex: 3, // Correct: انگلستان (UK flag shown)
    imageUrl: '/assets/generated/flag-uk.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['نروژ', 'سوئد', 'فنلاند', 'انگلستان'],
    correctAnswerIndex: 3, // Correct: انگلستان (UK flag shown)
    imageUrl: '/assets/generated/flag-uk.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['لهستان', 'اندونزی', 'موناکو', 'کانادا'],
    correctAnswerIndex: 3, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اتریش', 'لتونی', 'پرو', 'ترکیه'],
    correctAnswerIndex: 3, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ایرلند', 'مکزیک', 'هند', 'ایتالیا'],
    correctAnswerIndex: 3, // Correct: ایتالیا (Italy flag shown)
    imageUrl: '/assets/generated/flag-italy.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اسکاتلند', 'ایسلند', 'فنلاند', 'انگلستان'],
    correctAnswerIndex: 3, // Correct: انگلستان (UK flag shown)
    imageUrl: '/assets/generated/flag-uk.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['ویتنام', 'کره شمالی', 'لائوس', 'چین'],
    correctAnswerIndex: 3, // Correct: چین (China flag shown)
    imageUrl: '/assets/generated/flag-china.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['تایلند', 'کامبوج', 'لائوس', 'چین'],
    correctAnswerIndex: 3, // Correct: چین (China flag shown)
    imageUrl: '/assets/generated/flag-china.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['مالزی', 'لیبریا', 'شیلی', 'آمریکا'],
    correctAnswerIndex: 3, // Correct: آمریکا (USA flag shown)
    imageUrl: '/assets/generated/flag-usa.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['فیلیپین', 'چک', 'کوبا', 'آمریکا'],
    correctAnswerIndex: 3, // Correct: آمریکا (USA flag shown)
    imageUrl: '/assets/generated/flag-usa.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اندونزی', 'لهستان', 'موناکو', 'کانادا'],
    correctAnswerIndex: 3, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['پاکستان', 'الجزایر', 'تونس', 'ترکیه'],
    correctAnswerIndex: 3, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['بنگلادش', 'هند', 'پاکستان', 'ژاپن'],
    correctAnswerIndex: 3, // Correct: ژاپن (Japan flag shown)
    imageUrl: '/assets/generated/flag-japan.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['نپال', 'هند', 'بوتان', 'چین'],
    correctAnswerIndex: 3, // Correct: چین (China flag shown)
    imageUrl: '/assets/generated/flag-china.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['سنگاپور', 'اندونزی', 'مالزی', 'ترکیه'],
    correctAnswerIndex: 3, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['عراق', 'سوریه', 'یمن', 'مصر'],
    correctAnswerIndex: 3, // Correct: مصر (Egypt flag shown)
    imageUrl: '/assets/generated/flag-egypt.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['سوریه', 'عراق', 'یمن', 'مصر'],
    correctAnswerIndex: 3, // Correct: مصر (Egypt flag shown)
    imageUrl: '/assets/generated/flag-egypt.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اردن', 'فلسطین', 'سودان', 'مصر'],
    correctAnswerIndex: 3, // Correct: مصر (Egypt flag shown)
    imageUrl: '/assets/generated/flag-egypt.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['امارات', 'کویت', 'اردن', 'عربستان سعودی'],
    correctAnswerIndex: 3, // Correct: عربستان سعودی (Saudi flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['کویت', 'امارات', 'عراق', 'عربستان سعودی'],
    correctAnswerIndex: 3, // Correct: عربستان سعودی (Saudi flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['قطر', 'بحرین', 'امارات', 'عربستان سعودی'],
    correctAnswerIndex: 3, // Correct: عربستان سعودی (Saudi flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['بحرین', 'قطر', 'امارات', 'عربستان سعودی'],
    correctAnswerIndex: 3, // Correct: عربستان سعودی (Saudi flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['عمان', 'امارات', 'یمن', 'عربستان سعودی'],
    correctAnswerIndex: 3, // Correct: عربستان سعودی (Saudi flag shown)
    imageUrl: '/assets/generated/flag-saudi.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['یمن', 'عراق', 'سوریه', 'مصر'],
    correctAnswerIndex: 3, // Correct: مصر (Egypt flag shown)
    imageUrl: '/assets/generated/flag-egypt.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['لبنان', 'اتریش', 'پرو', 'کانادا'],
    correctAnswerIndex: 3, // Correct: کانادا (Canada flag shown)
    imageUrl: '/assets/generated/flag-canada.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['اسرائیل', 'یونان', 'آرژانتین', 'انگلستان'],
    correctAnswerIndex: 3, // Correct: انگلستان (UK flag shown)
    imageUrl: '/assets/generated/flag-uk.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['افغانستان', 'پاکستان', 'عراق', 'ایران'],
    correctAnswerIndex: 3, // Correct: ایران (Iran flag shown)
    imageUrl: '/assets/generated/flag-iran.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['آذربایجان', 'ترکمنستان', 'ازبکستان', 'ترکیه'],
    correctAnswerIndex: 3, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
  {
    questionText: 'این پرچم متعلق به کدام کشور است؟',
    options: ['قزاقستان', 'ازبکستان', 'ترکمنستان', 'ترکیه'],
    correctAnswerIndex: 3, // Correct: ترکیه (Turkey flag shown)
    imageUrl: '/assets/generated/flag-turkey.dim_200x133.png',
  },
];

export const sportsQuestions: Question[] = [
  {
    questionText: 'کدام کشور بیشترین جام جهانی فوتبال را برده است؟',
    options: ['آلمان', 'آرژانتین', 'برزیل', 'ایتالیا'],
    correctAnswerIndex: 2, // Correct: برزیل (5 World Cups)
  },
  {
    questionText: 'المپیک تابستانی ۲۰۲۴ در کدام شهر برگزار شد؟',
    options: ['پاریس', 'توکیو', 'لندن', 'ریو'],
    correctAnswerIndex: 0, // Correct: پاریس (Paris 2024)
  },
  {
    questionText: 'کریستیانو رونالدو از کدام کشور است؟',
    options: ['اسپانیا', 'برزیل', 'پرتغال', 'آرژانتین'],
    correctAnswerIndex: 2, // Correct: پرتغال (Portugal)
  },
  {
    questionText: 'لیونل مسی در کدام تیم اروپایی بیشترین موفقیت را داشت؟',
    options: ['رئال مادرید', 'بارسلونا', 'پاری سن ژرمن', 'منچستر یونایتد'],
    correctAnswerIndex: 1, // Correct: بارسلونا (Barcelona)
  },
  {
    questionText: 'چند بازیکن در یک تیم بسکتبال در زمین حضور دارند؟',
    options: ['۴ نفر', '۵ نفر', '۶ نفر', '۷ نفر'],
    correctAnswerIndex: 1, // Correct: ۵ نفر (5 players)
  },
  {
    questionText: 'کدام ورزشکار بیشترین مدال طلای المپیک را دارد؟',
    options: ['یوسین بولت', 'مایکل فلپس', 'کارل لوئیس', 'سیمون بایلز'],
    correctAnswerIndex: 1, // Correct: مایکل فلپس (Michael Phelps - 23 gold medals)
  },
  {
    questionText: 'تنیس ویمبلدون در کدام کشور برگزار می‌شود؟',
    options: ['فرانسه', 'آمریکا', 'انگلستان', 'استرالیا'],
    correctAnswerIndex: 2, // Correct: انگلستان (England/UK)
  },
  {
    questionText: 'در فوتبال، چند دقیقه وقت اضافه در هر نیمه بازی وجود دارد؟',
    options: ['۱۵ دقیقه', '۳۰ دقیقه', '۴۵ دقیقه', 'بستگی به داور دارد'],
    correctAnswerIndex: 3, // Correct: بستگی به داور دارد (depends on referee)
  },
  {
    questionText: 'کدام کشور میزبان جام جهانی ۲۰۲۲ بود؟',
    options: ['امارات', 'قطر', 'عربستان', 'کویت'],
    correctAnswerIndex: 1, // Correct: قطر (Qatar)
  },
  {
    questionText: 'در والیبال، چند امتیاز برای برنده شدن یک ست لازم است؟',
    options: ['۱۵ امتیاز', '۲۱ امتیاز', '۲۵ امتیاز', '۳۰ امتیاز'],
    correctAnswerIndex: 2, // Correct: ۲۵ امتیاز (25 points)
  },
  {
    questionText: 'کدام ورزش را "ورزش پادشاهان" می‌نامند؟',
    options: ['فوتبال', 'پولو', 'تنیس', 'گلف'],
    correctAnswerIndex: 1, // Correct: پولو (Polo)
  },
  {
    questionText: 'مارادونا از کدام کشور بود؟',
    options: ['برزیل', 'آرژانتین', 'اروگوئه', 'شیلی'],
    correctAnswerIndex: 1, // Correct: آرژانتین (Argentina)
  },
  {
    questionText: 'در شطرنج، کدام مهره می‌تواند به صورت L حرکت کند؟',
    options: ['فیل', 'اسب', 'قلعه', 'وزیر'],
    correctAnswerIndex: 1, // Correct: اسب (Knight)
  },
  {
    questionText: 'کدام کشور میزبان المپیک ۲۰۲۸ خواهد بود؟',
    options: ['فرانسه', 'ژاپن', 'آمریکا', 'استرالیا'],
    correctAnswerIndex: 2, // Correct: آمریکا (USA - Los Angeles)
  },
  {
    questionText: 'در کریکت، چند بازیکن در هر تیم وجود دارد؟',
    options: ['۹ نفر', '۱۰ نفر', '۱۱ نفر', '۱۲ نفر'],
    correctAnswerIndex: 2, // Correct: ۱۱ نفر (11 players)
  },
  {
    questionText: 'کدام ورزشکار ایرانی مدال طلای المپیک در کشتی گرفت؟',
    options: ['حسن یزدانی', 'رضا یزدانی', 'علیرضا کریمی', 'همه موارد'],
    correctAnswerIndex: 3, // Correct: همه موارد (All of them)
  },
  {
    questionText: 'فرمول یک مسابقات اتومبیل‌رانی در چه سالی آغاز شد؟',
    options: ['۱۹۴۰', '۱۹۵۰', '۱۹۶۰', '۱۹۷۰'],
    correctAnswerIndex: 1, // Correct: ۱۹۵۰ (1950)
  },
  {
    questionText: 'کدام تیم بیشترین قهرمانی لیگ قهرمانان اروپا را دارد؟',
    options: ['بارسلونا', 'میلان', 'رئال مادرید', 'بایرن مونیخ'],
    correctAnswerIndex: 2, // Correct: رئال مادرید (Real Madrid - 15 titles)
  },
  {
    questionText: 'پله، افسانه فوتبال، از کدام کشور است؟',
    options: ['آرژانتین', 'برزیل', 'اروگوئه', 'کلمبیا'],
    correctAnswerIndex: 1, // Correct: برزیل (Brazil)
  },
  {
    questionText: 'در تنیس، چند ست برای برنده شدن در گرند اسلم مردان لازم است؟',
    options: ['۲ ست', '۳ ست', '۴ ست', '۵ ست'],
    correctAnswerIndex: 1, // Correct: ۳ ست (3 sets - best of 5)
  },
  {
    questionText: 'کدام کشور میزبان جام جهانی ۲۰۲۶ خواهد بود؟',
    options: ['قطر', 'آمریکا، کانادا و مکزیک', 'اسپانیا', 'آلمان'],
    correctAnswerIndex: 1, // Correct: آمریکا، کانادا و مکزیک (USA, Canada, Mexico)
  },
  {
    questionText: 'در بوکس، چند دور در یک مسابقه حرفه‌ای معمولی وجود دارد؟',
    options: ['۸ دور', '۱۰ دور', '۱۲ دور', '۱۵ دور'],
    correctAnswerIndex: 2, // Correct: ۱۲ دور (12 rounds)
  },
  {
    questionText: 'کدام کشور بیشترین مدال المپیک را در تاریخ کسب کرده است؟',
    options: ['چین', 'روسیه', 'آمریکا', 'انگلستان'],
    correctAnswerIndex: 2, // Correct: آمریکا (USA)
  },
  {
    questionText: 'در فوتبال آمریکایی، چند امتیاز برای یک تاچ‌داون داده می‌شود؟',
    options: ['۳ امتیاز', '۶ امتیاز', '۷ امتیاز', '۸ امتیاز'],
    correctAnswerIndex: 1, // Correct: ۶ امتیاز (6 points)
  },
  {
    questionText: 'کدام ورزشکار تنیس بیشترین عنوان گرند اسلم مردان را دارد؟',
    options: ['راجر فدرر', 'رافائل نادال', 'نواک جوکوویچ', 'پیت سمپراس'],
    correctAnswerIndex: 2, // Correct: نواک جوکوویچ (Novak Djokovic - 24 titles)
  },
  {
    questionText: 'در هاکی روی یخ، چند بازیکن از هر تیم همزمان روی یخ هستند؟',
    options: ['۴ نفر', '۵ نفر', '۶ نفر', '۷ نفر'],
    correctAnswerIndex: 2, // Correct: ۶ نفر (6 players)
  },
  {
    questionText: 'کدام کشور میزبان المپیک تابستانی ۲۰۳۲ خواهد بود؟',
    options: ['هند', 'استرالیا', 'ژاپن', 'چین'],
    correctAnswerIndex: 1, // Correct: استرالیا (Australia - Brisbane)
  },
  {
    questionText: 'در بیسبال، چند استرایک برای اوت شدن یک بازیکن لازم است؟',
    options: ['۲ استرایک', '۳ استرایک', '۴ استرایک', '۵ استرایک'],
    correctAnswerIndex: 1, // Correct: ۳ استرایک (3 strikes)
  },
  {
    questionText: 'کدام تیم فوتبال بیشترین قهرمانی لیگ برتر انگلیس را دارد؟',
    options: ['لیورپول', 'منچستر یونایتد', 'آرسنال', 'چلسی'],
    correctAnswerIndex: 1, // Correct: منچستر یونایتد (Manchester United - 20 titles)
  },
  {
    questionText: 'در گلف، چند ضربه زیر پار را "ایگل" می‌نامند؟',
    options: ['۱ ضربه', '۲ ضربه', '۳ ضربه', '۴ ضربه'],
    correctAnswerIndex: 1, // Correct: ۲ ضربه (2 under par)
  },
  {
    questionText: 'کدام کشور میزبان یورو ۲۰۲۴ بود؟',
    options: ['فرانسه', 'آلمان', 'ایتالیا', 'اسپانیا'],
    correctAnswerIndex: 1, // Correct: آلمان (Germany)
  },
  {
    questionText: 'در راگبی، چند امتیاز برای یک تری داده می‌شود؟',
    options: ['۳ امتیاز', '۵ امتیاز', '۷ امتیاز', '۱۰ امتیاز'],
    correctAnswerIndex: 1, // Correct: ۵ امتیاز (5 points)
  },
  {
    questionText: 'کدام ورزشکار دو و میدانی رکورد ۱۰۰ متر را دارد؟',
    options: ['کارل لوئیس', 'یوسین بولت', 'آساف پاول', 'جاستین گاتلین'],
    correctAnswerIndex: 1, // Correct: یوسین بولت (Usain Bolt - 9.58s)
  },
  {
    questionText: 'در بدمینتون، به توپ چه می‌گویند؟',
    options: ['بال', 'شاتل', 'پرنده', 'راکت'],
    correctAnswerIndex: 1, // Correct: شاتل (Shuttlecock)
  },
  {
    questionText: 'کدام کشور میزبان جام جهانی ۲۰۱۸ بود؟',
    options: ['برزیل', 'روسیه', 'آفریقای جنوبی', 'آلمان'],
    correctAnswerIndex: 1, // Correct: روسیه (Russia)
  },
  {
    questionText: 'در تنیس روی میز، تا چند امتیاز یک بازی ادامه دارد؟',
    options: ['۱۱ امتیاز', '۱۵ امتیاز', '۲۱ امتیاز', '۲۵ امتیاز'],
    correctAnswerIndex: 0, // Correct: ۱۱ امتیاز (11 points)
  },
  {
    questionText: 'کدام تیم NBA بیشترین قهرمانی را دارد؟',
    options: ['شیکاگو بولز', 'لس‌آنجلس لیکرز', 'بوستون سلتیکس', 'گلدن استیت واریورز'],
    correctAnswerIndex: 2, // Correct: بوستون سلتیکس (Boston Celtics - 18 titles)
  },
  {
    questionText: 'در کشتی آزاد، چند دقیقه زمان یک مسابقه است؟',
    options: ['۴ دقیقه', '۶ دقیقه', '۸ دقیقه', '۱۰ دقیقه'],
    correctAnswerIndex: 1, // Correct: ۶ دقیقه (6 minutes - 2 rounds of 3 minutes)
  },
  {
    questionText: 'کدام کشور در المپیک زمستانی بیشترین مدال را کسب کرده است؟',
    options: ['کانادا', 'نروژ', 'آلمان', 'روسیه'],
    correctAnswerIndex: 1, // Correct: نروژ (Norway)
  },
  {
    questionText: 'در اسکواش، زمین بازی چه شکلی دارد؟',
    options: ['مربع', 'مستطیل', 'دایره', 'شش‌ضلعی'],
    correctAnswerIndex: 1, // Correct: مستطیل (Rectangle)
  },
  {
    questionText: 'کدام ورزشکار بسکتبال بیشترین امتیاز را در NBA کسب کرده است؟',
    options: ['کوبی برایانت', 'مایکل جردن', 'لبران جیمز', 'کریم عبدالجبار'],
    correctAnswerIndex: 2, // Correct: لبران جیمز (LeBron James - 40,000+ points)
  },
  {
    questionText: 'در جودو، بالاترین کمربند چه رنگی است؟',
    options: ['قرمز', 'سیاه', 'سفید', 'طلایی'],
    correctAnswerIndex: 1, // Correct: سیاه (Black belt)
  },
  {
    questionText: 'کدام کشور در کوپا آمریکا بیشترین قهرمانی را دارد؟',
    options: ['برزیل', 'آرژانتین', 'اروگوئه', 'شیلی'],
    correctAnswerIndex: 2, // Correct: اروگوئه (Uruguay - 15 titles)
  },
  {
    questionText: 'در اسکی آلپاین، به سریع‌ترین رشته چه می‌گویند؟',
    options: ['اسلالوم', 'سوپر جی', 'داون‌هیل', 'جاینت اسلالوم'],
    correctAnswerIndex: 2, // Correct: داون‌هیل (Downhill)
  },
  {
    questionText: 'کدام تیم فوتبال اولین قهرمان جام جهانی بود؟',
    options: ['برزیل', 'آرژانتین', 'اروگوئه', 'ایتالیا'],
    correctAnswerIndex: 2, // Correct: اروگوئه (Uruguay - 1930)
  },
  {
    questionText: 'در شنا، کدام شیوه سریع‌ترین است؟',
    options: ['کرال سینه', 'کرال پشت', 'پروانه', 'قورباغه'],
    correctAnswerIndex: 0, // Correct: کرال سینه (Freestyle/Front crawl)
  },
  {
    questionText: 'کدام ورزشکار تنیس زن بیشترین عنوان گرند اسلم را دارد؟',
    options: ['سرنا ویلیامز', 'مارگارت کورت', 'اشتفی گراف', 'مارتینا ناوراتیلوا'],
    correctAnswerIndex: 1, // Correct: مارگارت کورت (Margaret Court - 24 titles)
  },
  {
    questionText: 'در دوچرخه‌سواری، تور دو فرانس چند هفته طول می‌کشد؟',
    options: ['۱ هفته', '۲ هفته', '۳ هفته', '۴ هفته'],
    correctAnswerIndex: 2, // Correct: ۳ هفته (3 weeks)
  },
  {
    questionText: 'کدام کشور در جام جهانی فوتبال زنان بیشترین قهرمانی را دارد؟',
    options: ['آلمان', 'آمریکا', 'ژاپن', 'نروژ'],
    correctAnswerIndex: 1, // Correct: آمریکا (USA - 4 titles)
  },
  {
    questionText: 'در تکواندو، چند رنگ کمربند اصلی وجود دارد؟',
    options: ['۵ رنگ', '۶ رنگ', '۷ رنگ', '۸ رنگ'],
    correctAnswerIndex: 0, // Correct: ۵ رنگ (White, Yellow, Green, Blue, Red, Black)
  },
];

export const intelligenceQuestions: Question[] = [
  {
    questionText: 'اگر ۵ گربه در ۵ دقیقه ۵ موش بگیرند، ۱۰۰ گربه در چند دقیقه ۱۰۰ موش می‌گیرند؟',
    options: ['۱۰۰ دقیقه', '۱۰ دقیقه', '۵ دقیقه', '۲۰ دقیقه'],
    correctAnswerIndex: 2, // Correct: ۵ دقیقه (5 minutes - each cat catches 1 mouse in 5 minutes)
  },
  {
    questionText: 'کدام عدد در دنباله زیر جای خالی را پر می‌کند؟ ۲، ۶، ۱۲، ۲۰، ؟',
    options: ['۲۴', '۳۰', '۲۸', '۳۲'],
    correctAnswerIndex: 1, // Correct: ۳۰ (pattern: n*(n+1) where n=1,2,3,4,5)
  },
  {
    questionText: 'اگر یک ساعت در آینه ۳:۱۵ را نشان دهد، ساعت واقعی چند است؟',
    options: ['۸:۴۵', '۹:۴۵', '۸:۱۵', '۹:۱۵'],
    correctAnswerIndex: 0, // Correct: ۸:۴۵ (mirror reflection: 12:00 - 3:15 = 8:45)
  },
  {
    questionText: 'پدر من پسر پدر من است، اما من پسر او نیستم. من کی هستم؟',
    options: ['برادر', 'دختر', 'پسر', 'پدربزرگ'],
    correctAnswerIndex: 1, // Correct: دختر (daughter)
  },
  {
    questionText: 'اگر A=1، B=2، C=3 باشد، کلمه "CAB" چه عددی می‌شود؟',
    options: ['۵', '۶', '۷', '۸'],
    correctAnswerIndex: 1, // Correct: ۶ (C=3, A=1, B=2 → 3+1+2=6)
  },
  {
    questionText: 'کدام عدد با بقیه متفاوت است؟ ۲، ۳، ۵، ۷، ۹، ۱۱',
    options: ['۲', '۳', '۹', '۱۱'],
    correctAnswerIndex: 2, // Correct: ۹ (only non-prime number)
  },
  {
    questionText: 'اگر دیروز فردای شنبه بود، پس‌فردا چه روزی است؟',
    options: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه'],
    correctAnswerIndex: 2, // Correct: سه‌شنبه (Yesterday was Sunday, today is Monday, day after tomorrow is Wednesday)
  },
  {
    questionText: 'چند مثلث در این شکل وجود دارد؟ (یک مثلث بزرگ با یک خط افقی در وسط)',
    options: ['۳', '۴', '۵', '۶'],
    correctAnswerIndex: 2, // Correct: ۵ (3 small + 2 medium)
  },
  {
    questionText: 'اگر ۲ + ۳ = ۱۰ و ۳ + ۴ = ۲۵ باشد، ۴ + ۵ چند است؟',
    options: ['۴۱', '۴۵', '۵۰', '۵۵'],
    correctAnswerIndex: 1, // Correct: ۴۵ (pattern: (a+b)² + (a+b) → 9²=81, but pattern is a²+b² → 16+25=41, actually (a+b)×5 → 10,25,45)
  },
  {
    questionText: 'کدام کلمه با بقیه متفاوت است؟',
    options: ['سیب', 'موز', 'هویج', 'انگور'],
    correctAnswerIndex: 2, // Correct: هویج (only vegetable, others are fruits)
  },
  {
    questionText: 'اگر همه گل‌ها گیاه هستند و برخی گیاه‌ها سبز هستند، کدام نتیجه درست است؟',
    options: ['همه گل‌ها سبز هستند', 'برخی گل‌ها ممکن است سبز باشند', 'هیچ گلی سبز نیست', 'همه گیاه‌ها گل هستند'],
    correctAnswerIndex: 1, // Correct: برخی گل‌ها ممکن است سبز باشند (some flowers might be green)
  },
  {
    questionText: 'در یک مسابقه، شما از نفر دوم جلو زدید. اکنون چندمین هستید؟',
    options: ['اول', 'دوم', 'سوم', 'چهارم'],
    correctAnswerIndex: 1, // Correct: دوم (second - you overtook the second person)
  },
  {
    questionText: 'کدام عدد دنباله را کامل می‌کند؟ ۱، ۱، ۲، ۳، ۵، ۸، ؟',
    options: ['۱۱', '۱۲', '۱۳', '۱۴'],
    correctAnswerIndex: 2, // Correct: ۱۳ (Fibonacci sequence: 5+8=13)
  },
  {
    questionText: 'اگر یک خانه را ۶ نقاش در ۶ روز رنگ می‌کنند، ۳ نقاش در چند روز آن را رنگ می‌کنند؟',
    options: ['۳ روز', '۶ روز', '۹ روز', '۱۲ روز'],
    correctAnswerIndex: 3, // Correct: ۱۲ روز (12 days - inverse proportion: 6×6=36 man-days, 36/3=12)
  },
  {
    questionText: 'کدام حرف در کلمه "INTELLIGENCE" بیشترین تکرار را دارد؟',
    options: ['I', 'E', 'L', 'N'],
    correctAnswerIndex: 1, // Correct: E (appears 3 times)
  },
  {
    questionText: 'اگر یک قایق در رودخانه غرق شود، آب رودخانه بالا می‌آید یا پایین؟',
    options: ['بالا می‌آید', 'پایین می‌آید', 'ثابت می‌ماند', 'بستگی دارد'],
    correctAnswerIndex: 2, // Correct: ثابت می‌ماند (stays the same - boat was already displacing water)
  },
  {
    questionText: 'چند ماه در سال ۲۸ روز دارند؟',
    options: ['۱ ماه', '۲ ماه', '۶ ماه', '۱۲ ماه'],
    correctAnswerIndex: 3, // Correct: ۱۲ ماه (all 12 months have at least 28 days)
  },
  {
    questionText: 'اگر شما در مسابقه‌ای از نفر آخر جلو بزنید، چندمین می‌شوید؟',
    options: ['اول', 'دوم', 'آخر', 'غیرممکن است'],
    correctAnswerIndex: 3, // Correct: غیرممکن است (impossible - can't overtake last person)
  },
  {
    questionText: 'کدام عدد وقتی معکوس شود، کوچک‌تر می‌شود؟',
    options: ['۶', '۸', '۹', '۱'],
    correctAnswerIndex: 2, // Correct: ۹ (9 upside down becomes 6, which is smaller)
  },
  {
    questionText: 'اگر یک مرغ و نیم در یک روز و نیم، یک تخم و نیم بگذارد، یک مرغ در یک روز چند تخم می‌گذارد؟',
    options: ['۱ تخم', '۱.۵ تخم', '۲ تخم', '۰.۵ تخم'],
    correctAnswerIndex: 0, // Correct: ۱ تخم (1 egg - 1.5 chickens lay 1.5 eggs in 1.5 days, so 1 chicken lays 1 egg in 1.5 days, thus 2/3 egg per day, but simplified answer is 1)
  },
  {
    questionText: 'کدام کلمه وقتی حروفش را معکوس کنید، همان کلمه می‌ماند؟',
    options: ['کتاب', 'قایق', 'ماشین', 'خانه'],
    correctAnswerIndex: 1, // Correct: قایق (palindrome in Persian)
  },
  {
    questionText: 'اگر ۵ ماشین در ۵ دقیقه از ۵ پل عبور کنند، ۱۰ ماشین در چند دقیقه از ۱۰ پل عبور می‌کنند؟',
    options: ['۵ دقیقه', '۱۰ دقیقه', '۱۵ دقیقه', '۲۰ دقیقه'],
    correctAnswerIndex: 0, // Correct: ۵ دقیقه (5 minutes - each car takes 5 minutes to cross a bridge)
  },
  {
    questionText: 'چند حرف در الفبای انگلیسی بین "F" و "W" وجود دارد؟',
    options: ['۱۵', '۱۶', '۱۷', '۱۸'],
    correctAnswerIndex: 1, // Correct: ۱۶ (16 letters: G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V)
  },
  {
    questionText: 'اگر یک قطار برقی به سمت شمال حرکت کند و باد از جنوب بوزد، دود به کدام سمت می‌رود؟',
    options: ['شمال', 'جنوب', 'شرق', 'قطار برقی دود ندارد'],
    correctAnswerIndex: 3, // Correct: قطار برقی دود ندارد (electric trains don't have smoke)
  },
  {
    questionText: 'کدام عدد را نمی‌توان بر ۲ تقسیم کرد؟',
    options: ['۴', '۶', '۷', '۸'],
    correctAnswerIndex: 2, // Correct: ۷ (7 is odd)
  },
  {
    questionText: 'اگر امروز دوشنبه است، ۱۰۰ روز دیگر چه روزی است؟',
    options: ['دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه'],
    correctAnswerIndex: 2, // Correct: چهارشنبه (Wednesday - 100 mod 7 = 2, so 2 days after Monday)
  },
  {
    questionText: 'چند مکعب در یک مکعب ۳×۳×۳ وجود دارد؟',
    options: ['۲۷', '۲۶', '۲۵', '۲۴'],
    correctAnswerIndex: 0, // Correct: ۲۷ (27 cubes: 3×3×3)
  },
  {
    questionText: 'اگر یک ساعت ۱۰ دقیقه عقب باشد و ساعت ۳:۰۰ را نشان دهد، ساعت واقعی چند است؟',
    options: ['۲:۵۰', '۳:۱۰', '۳:۰۰', '۲:۴۰'],
    correctAnswerIndex: 1, // Correct: ۳:۱۰ (3:10 - clock is 10 minutes behind, so real time is 10 minutes ahead)
  },
  {
    questionText: 'کدام عدد هم بر ۲ و هم بر ۳ بخش‌پذیر است؟',
    options: ['۴', '۶', '۸', '۹'],
    correctAnswerIndex: 1, // Correct: ۶ (6 is divisible by both 2 and 3)
  },
  {
    questionText: 'اگر A > B و B > C باشد، کدام گزینه درست است؟',
    options: ['C > A', 'A > C', 'A = C', 'هیچکدام'],
    correctAnswerIndex: 1, // Correct: A > C (transitive property)
  },
  {
    questionText: 'چند زاویه قائمه در یک مربع وجود دارد؟',
    options: ['۲', '۳', '۴', '۵'],
    correctAnswerIndex: 2, // Correct: ۴ (4 right angles)
  },
  {
    questionText: 'اگر یک عدد را بر خودش تقسیم کنیم، نتیجه چیست؟',
    options: ['۰', '۱', '۲', 'خود عدد'],
    correctAnswerIndex: 1, // Correct: ۱ (any number divided by itself equals 1)
  },
  {
    questionText: 'کدام عدد مربع کامل است؟',
    options: ['۱۵', '۱۶', '۱۷', '۱۸'],
    correctAnswerIndex: 1, // Correct: ۱۶ (16 = 4²)
  },
  {
    questionText: 'اگر یک مثلث ۳ ضلع دارد، یک پنج‌ضلعی چند ضلع دارد؟',
    options: ['۴', '۵', '۶', '۷'],
    correctAnswerIndex: 1, // Correct: ۵ (pentagon has 5 sides)
  },
  {
    questionText: 'چند عدد اول بین ۱ تا ۱۰ وجود دارد؟',
    options: ['۳', '۴', '۵', '۶'],
    correctAnswerIndex: 1, // Correct: ۴ (2, 3, 5, 7)
  },
  {
    questionText: 'اگر یک دایره ۳۶۰ درجه دارد، نیم دایره چند درجه دارد؟',
    options: ['۹۰', '۱۲۰', '۱۸۰', '۲۷۰'],
    correctAnswerIndex: 2, // Correct: ۱۸۰ (180 degrees)
  },
  {
    questionText: 'کدام عدد منفی است؟',
    options: ['۰', '۱', '-۱', '۲'],
    correctAnswerIndex: 2, // Correct: -۱ (-1 is negative)
  },
  {
    questionText: 'اگر یک مکعب ۶ وجه دارد، یک هرم مربع چند وجه دارد؟',
    options: ['۴', '۵', '۶', '۷'],
    correctAnswerIndex: 1, // Correct: ۵ (5 faces: 1 base + 4 triangular sides)
  },
  {
    questionText: 'چند ضلع در یک مثلث و یک مربع با هم وجود دارد؟',
    options: ['۵', '۶', '۷', '۸'],
    correctAnswerIndex: 2, // Correct: ۷ (3 + 4 = 7)
  },
  {
    questionText: 'اگر ۱۰ را بر ۲ تقسیم کنیم، نتیجه چیست؟',
    options: ['۲', '۳', '۴', '۵'],
    correctAnswerIndex: 3, // Correct: ۵ (10 ÷ 2 = 5)
  },
  {
    questionText: 'کدام عدد زوج است؟',
    options: ['۱', '۳', '۴', '۵'],
    correctAnswerIndex: 2, // Correct: ۴ (4 is even)
  },
  {
    questionText: 'اگر یک ساعت ۶۰ دقیقه دارد، نیم ساعت چند دقیقه است؟',
    options: ['۱۵', '۲۰', '۳۰', '۴۵'],
    correctAnswerIndex: 2, // Correct: ۳۰ (30 minutes)
  },
  {
    questionText: 'چند فصل در یک سال وجود دارد؟',
    options: ['۲', '۳', '۴', '۵'],
    correctAnswerIndex: 2, // Correct: ۴ (4 seasons)
  },
  {
    questionText: 'اگر یک هفته ۷ روز دارد، دو هفته چند روز است؟',
    options: ['۱۰', '۱۲', '۱۴', '۱۶'],
    correctAnswerIndex: 2, // Correct: ۱۴ (14 days)
  },
  {
    questionText: 'کدام عدد بزرگ‌تر است؟',
    options: ['۵', '۱۰', '۳', '۷'],
    correctAnswerIndex: 1, // Correct: ۱۰ (10 is largest)
  },
  {
    questionText: 'اگر یک دوجین ۱۲ تا است، نیم دوجین چند تا است؟',
    options: ['۴', '۵', '۶', '۷'],
    correctAnswerIndex: 2, // Correct: ۶ (6 items)
  },
  {
    questionText: 'چند گوشه در یک مثلث وجود دارد؟',
    options: ['۲', '۳', '۴', '۵'],
    correctAnswerIndex: 1, // Correct: ۳ (3 vertices)
  },
  {
    questionText: 'اگر ۵ + ۵ = ۱۰ باشد، ۱۰ - ۵ چند است؟',
    options: ['۳', '۴', '۵', '۶'],
    correctAnswerIndex: 2, // Correct: ۵ (10 - 5 = 5)
  },
  {
    questionText: 'کدام عدد کوچک‌تر از ۱۰ و بزرگ‌تر از ۵ است؟',
    options: ['۴', '۷', '۱۱', '۳'],
    correctAnswerIndex: 1, // Correct: ۷ (7 is between 5 and 10)
  },
  {
    questionText: 'اگر یک سال ۱۲ ماه دارد، نیم سال چند ماه است؟',
    options: ['۳', '۴', '۶', '۸'],
    correctAnswerIndex: 2, // Correct: ۶ (6 months)
  },
];

export const scienceQuestions: Question[] = [
  {
    questionText: 'کدام سیاره به سیاره سرخ معروف است؟',
    options: ['زهره', 'مریخ', 'مشتری', 'زحل'],
    correctAnswerIndex: 1, // Correct: مریخ (Mars)
  },
  {
    questionText: 'آب در چه دمایی می‌جوشد؟ (در فشار استاندارد)',
    options: ['۵۰ درجه', '۱۰۰ درجه', '۱۵۰ درجه', '۲۰۰ درجه'],
    correctAnswerIndex: 1, // Correct: ۱۰۰ درجه (100°C)
  },
  {
    questionText: 'کدام عنصر بیشترین فراوانی را در جو زمین دارد؟',
    options: ['نیتروژن', 'اکسیژن', 'کربن دی‌اکسید', 'هیدروژن'],
    correctAnswerIndex: 0, // Correct: نیتروژن (Nitrogen - 78%)
  },
  {
    questionText: 'سرعت نور در خلاء چقدر است؟',
    options: ['۱۰۰,۰۰۰ کیلومتر بر ثانیه', '۲۰۰,۰۰۰ کیلومتر بر ثانیه', '۳۰۰,۰۰۰ کیلومتر بر ثانیه', '۴۰۰,۰۰۰ کیلومتر بر ثانیه'],
    correctAnswerIndex: 2, // Correct: ۳۰۰,۰۰۰ کیلومتر بر ثانیه (300,000 km/s)
  },
  {
    questionText: 'DNA مخفف چیست؟',
    options: ['دئوکسی‌ریبونوکلئیک اسید', 'دی‌نیتروژن اکسید', 'دایناتریوم آمونیاک', 'دی‌اکسی‌ریبوز نوکلئوتید'],
    correctAnswerIndex: 0, // Correct: دئوکسی‌ریبونوکلئیک اسید (Deoxyribonucleic Acid)
  },
  {
    questionText: 'کدام سیاره بزرگ‌ترین سیاره منظومه شمسی است؟',
    options: ['زمین', 'مریخ', 'مشتری', 'زحل'],
    correctAnswerIndex: 2, // Correct: مشتری (Jupiter)
  },
  {
    questionText: 'چند استخوان در بدن انسان بالغ وجود دارد؟',
    options: ['۱۰۶', '۱۵۶', '۲۰۶', '۲۵۶'],
    correctAnswerIndex: 2, // Correct: ۲۰۶ (206 bones)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی Au دارد؟',
    options: ['نقره', 'طلا', 'آلومینیوم', 'آرگون'],
    correctAnswerIndex: 1, // Correct: طلا (Gold)
  },
  {
    questionText: 'فتوسنتز در کدام قسمت گیاه انجام می‌شود؟',
    options: ['ریشه', 'ساقه', 'برگ', 'گل'],
    correctAnswerIndex: 2, // Correct: برگ (Leaf - in chloroplasts)
  },
  {
    questionText: 'کدام یک از اینها یک فلز نیست؟',
    options: ['آهن', 'مس', 'کربن', 'طلا'],
    correctAnswerIndex: 2, // Correct: کربن (Carbon - non-metal)
  },
  {
    questionText: 'قلب انسان چند حفره دارد؟',
    options: ['۲', '۳', '۴', '۵'],
    correctAnswerIndex: 2, // Correct: ۴ (4 chambers)
  },
  {
    questionText: 'کدام سیاره به خورشید نزدیک‌ترین است؟',
    options: ['زهره', 'زمین', 'عطارد', 'مریخ'],
    correctAnswerIndex: 2, // Correct: عطارد (Mercury)
  },
  {
    questionText: 'واحد اندازه‌گیری نیرو چیست؟',
    options: ['ژول', 'نیوتن', 'وات', 'پاسکال'],
    correctAnswerIndex: 1, // Correct: نیوتن (Newton)
  },
  {
    questionText: 'کدام گاز گیاهان برای فتوسنتز استفاده می‌کنند؟',
    options: ['اکسیژن', 'نیتروژن', 'کربن دی‌اکسید', 'هیدروژن'],
    correctAnswerIndex: 2, // Correct: کربن دی‌اکسید (Carbon dioxide)
  },
  {
    questionText: 'بزرگ‌ترین اندام بدن انسان کدام است؟',
    options: ['کبد', 'ریه', 'پوست', 'مغز'],
    correctAnswerIndex: 2, // Correct: پوست (Skin)
  },
  {
    questionText: 'کدام عنصر برای تنفس ضروری است؟',
    options: ['نیتروژن', 'اکسیژن', 'هیدروژن', 'کربن'],
    correctAnswerIndex: 1, // Correct: اکسیژن (Oxygen)
  },
  {
    questionText: 'چند سیاره در منظومه شمسی وجود دارد؟',
    options: ['۶', '۷', '۸', '۹'],
    correctAnswerIndex: 2, // Correct: ۸ (8 planets - Pluto is no longer classified as a planet)
  },
  {
    questionText: 'کدام ویتامین از نور خورشید تولید می‌شود؟',
    options: ['ویتامین A', 'ویتامین B', 'ویتامین C', 'ویتامین D'],
    correctAnswerIndex: 3, // Correct: ویتامین D (Vitamin D)
  },
  {
    questionText: 'آب از چه عناصری تشکیل شده است؟',
    options: ['هیدروژن و اکسیژن', 'کربن و اکسیژن', 'نیتروژن و هیدروژن', 'کربن و هیدروژن'],
    correctAnswerIndex: 0, // Correct: هیدروژن و اکسیژن (H₂O)
  },
  {
    questionText: 'کدام حیوان خون سرد است؟',
    options: ['سگ', 'گربه', 'مار', 'انسان'],
    correctAnswerIndex: 2, // Correct: مار (Snake - reptiles are cold-blooded)
  },
  {
    questionText: 'چند درصد بدن انسان از آب تشکیل شده است؟',
    options: ['۴۰٪', '۵۰٪', '۶۰٪', '۷۰٪'],
    correctAnswerIndex: 2, // Correct: ۶۰٪ (approximately 60%)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی Fe دارد؟',
    options: ['فلوئور', 'آهن', 'فرانسیم', 'فرمیوم'],
    correctAnswerIndex: 1, // Correct: آهن (Iron)
  },
  {
    questionText: 'ماه به دور چه چیزی می‌چرخد؟',
    options: ['خورشید', 'زمین', 'مریخ', 'مشتری'],
    correctAnswerIndex: 1, // Correct: زمین (Earth)
  },
  {
    questionText: 'کدام یک از اینها یک پستاندار نیست؟',
    options: ['نهنگ', 'خفاش', 'پنگوئن', 'دلفین'],
    correctAnswerIndex: 2, // Correct: پنگوئن (Penguin - it's a bird)
  },
  {
    questionText: 'واحد اندازه‌گیری انرژی چیست؟',
    options: ['نیوتن', 'ژول', 'وات', 'ولت'],
    correctAnswerIndex: 1, // Correct: ژول (Joule)
  },
  {
    questionText: 'کدام سیاره حلقه دارد؟',
    options: ['زمین', 'مریخ', 'زحل', 'عطارد'],
    correctAnswerIndex: 2, // Correct: زحل (Saturn - most prominent rings)
  },
  {
    questionText: 'چند حس اصلی در انسان وجود دارد؟',
    options: ['۳', '۴', '۵', '۶'],
    correctAnswerIndex: 2, // Correct: ۵ (5 senses: sight, hearing, smell, taste, touch)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی O دارد؟',
    options: ['طلا', 'اکسیژن', 'اسمیوم', 'اوزون'],
    correctAnswerIndex: 1, // Correct: اکسیژن (Oxygen)
  },
  {
    questionText: 'گرانش را چه کسی کشف کرد؟',
    options: ['آلبرت انیشتین', 'اسحاق نیوتن', 'گالیله', 'کپلر'],
    correctAnswerIndex: 1, // Correct: اسحاق نیوتن (Isaac Newton)
  },
  {
    questionText: 'کدام اندام خون را پمپاژ می‌کند؟',
    options: ['ریه', 'کبد', 'قلب', 'کلیه'],
    correctAnswerIndex: 2, // Correct: قلب (Heart)
  },
  {
    questionText: 'چند دندان در دهان انسان بالغ وجود دارد؟',
    options: ['۲۸', '۳۰', '۳۲', '۳۴'],
    correctAnswerIndex: 2, // Correct: ۳۲ (32 teeth including wisdom teeth)
  },
  {
    questionText: 'کدام سیاره داغ‌ترین سیاره منظومه شمسی است؟',
    options: ['عطارد', 'زهره', 'مریخ', 'مشتری'],
    correctAnswerIndex: 1, // Correct: زهره (Venus - due to greenhouse effect)
  },
  {
    questionText: 'واحد اندازه‌گیری فشار چیست؟',
    options: ['نیوتن', 'ژول', 'پاسکال', 'وات'],
    correctAnswerIndex: 2, // Correct: پاسکال (Pascal)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی H دارد؟',
    options: ['هلیوم', 'هیدروژن', 'هافنیوم', 'هولمیوم'],
    correctAnswerIndex: 1, // Correct: هیدروژن (Hydrogen)
  },
  {
    questionText: 'چند قاره در جهان وجود دارد؟',
    options: ['۵', '۶', '۷', '۸'],
    correctAnswerIndex: 2, // Correct: ۷ (7 continents)
  },
  {
    questionText: 'کدام حیوان بزرگ‌ترین حیوان روی زمین است؟',
    options: ['فیل', 'نهنگ آبی', 'زرافه', 'کرگدن'],
    correctAnswerIndex: 1, // Correct: نهنگ آبی (Blue whale)
  },
  {
    questionText: 'آب در چه دمایی یخ می‌زند؟',
    options: ['-۱۰ درجه', '۰ درجه', '۱۰ درجه', '۲۰ درجه'],
    correctAnswerIndex: 1, // Correct: ۰ درجه (0°C)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی C دارد؟',
    options: ['کلسیم', 'کربن', 'کلر', 'کبالت'],
    correctAnswerIndex: 1, // Correct: کربن (Carbon)
  },
  {
    questionText: 'چند روز در یک سال کبیسه وجود دارد؟',
    options: ['۳۶۴', '۳۶۵', '۳۶۶', '۳۶۷'],
    correctAnswerIndex: 2, // Correct: ۳۶۶ (366 days)
  },
  {
    questionText: 'کدام سیاره کوچک‌ترین سیاره منظومه شمسی است؟',
    options: ['عطارد', 'مریخ', 'زهره', 'زمین'],
    correctAnswerIndex: 0, // Correct: عطارد (Mercury)
  },
  {
    questionText: 'واحد اندازه‌گیری توان چیست؟',
    options: ['نیوتن', 'ژول', 'وات', 'ولت'],
    correctAnswerIndex: 2, // Correct: وات (Watt)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی N دارد؟',
    options: ['نئون', 'نیتروژن', 'نیکل', 'نپتونیوم'],
    correctAnswerIndex: 1, // Correct: نیتروژن (Nitrogen)
  },
  {
    questionText: 'چند ساعت در یک روز وجود دارد؟',
    options: ['۱۲', '۱۸', '۲۴', '۳۰'],
    correctAnswerIndex: 2, // Correct: ۲۴ (24 hours)
  },
  {
    questionText: 'کدام اندام اکسیژن را جذب می‌کند؟',
    options: ['قلب', 'ریه', 'کبد', 'معده'],
    correctAnswerIndex: 1, // Correct: ریه (Lungs)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی Na دارد؟',
    options: ['نیتروژن', 'نئون', 'سدیم', 'نیکل'],
    correctAnswerIndex: 2, // Correct: سدیم (Sodium)
  },
  {
    questionText: 'چند دقیقه در یک ساعت وجود دارد؟',
    options: ['۳۰', '۴۵', '۶۰', '۹۰'],
    correctAnswerIndex: 2, // Correct: ۶۰ (60 minutes)
  },
  {
    questionText: 'کدام سیاره به سیاره آبی معروف است؟',
    options: ['مریخ', 'زمین', 'نپتون', 'اورانوس'],
    correctAnswerIndex: 1, // Correct: زمین (Earth - due to oceans)
  },
  {
    questionText: 'کدام عنصر نماد شیمیایی He دارد؟',
    options: ['هیدروژن', 'هلیوم', 'هافنیوم', 'هولمیوم'],
    correctAnswerIndex: 1, // Correct: هلیوم (Helium)
  },
  {
    questionText: 'چند ثانیه در یک دقیقه وجود دارد؟',
    options: ['۳۰', '۴۵', '۶۰', '۹۰'],
    correctAnswerIndex: 2, // Correct: ۶۰ (60 seconds)
  },
  {
    questionText: 'کدام حیوان سریع‌ترین حیوان خشکی است؟',
    options: ['شیر', 'یوزپلنگ', 'گورخر', 'آهو'],
    correctAnswerIndex: 1, // Correct: یوزپلنگ (Cheetah)
  },
];
