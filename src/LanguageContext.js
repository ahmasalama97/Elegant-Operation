import React, { createContext, useEffect, useState } from "react";

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("arabic");

  let lang = {};
  if (language === "english") {
    lang = {
      topBar: {
        follow: "Follow Us:",
      },
      nav: {
        home: "HOME",
        about: "ABOUT US",
        hotels: "HOTELS",
        contact: "CONTACT US",
      },
      slider: {
        slider1: "Trips, Experiences, and Places. All In One Service",
        slider2: "Best Offers Trips From Us",
        slider3: "World's Best Tourist Destinations",
      },
      popularPlaces: {
        riyadh: "Riyadh",
        riyadhDesc:
          "The Riyadh Province, also known as the Riyadh Region, is a region of Saudi Arabia, located in the geographic center of the country. It is the second-largest region by both area and population, behind the Eastern Province and Mecca Region respectively.",
        jeddah: "Jeddah",
        jeddahDesc:
          "Jeddah is a city in the Hejaz region of Saudi Arabia and the country's commercial center. Established in the 6th century BC as a fishing village, Jeddah’s prominence grew in 647 when the Caliph Osman made it a major port for Indian Ocean trade routes, channelling goods to Mecca, and to serve Muslim travelers for Islamic pilgrimage.",
        madinah: "Al Madinah Al Munawwarah",
        madinahDesc:
          "Medina, officially Al Madinah Al Munawwarah. It IS the fourth-most populous city in the country. Located at the core of the Medina Province in the western reaches of the country, while the rest is occupied by the Hejaz Mountains, empty valleys, agricultural spaces and older dormant volcanoes.",
        dammam: "Dammam",
        dammamDesc:
          "Dammam is the fifth-most populous city in Saudi Arabia after Riyadh, Jeddah, Mecca, and Medina. It is the capital of the Eastern Province. The judicial and administrative bodies of the province, in addition to the administrative offices of other minor governmental departments functioning within the province, are located in the city.",
      },
      general: {
        transport: "Transportations",
        catering: "Catering",
        pcr: "PCR Test(s)",
        hotelServices:
          "Resevation and equipped tourists accomodation facilities licenced by Ministry of Tourism and qualified for quarantine, at all levels, five stars, four stars and three stars.",
        transportServices:
          "Providing the latest means of transportation from the airport to the shelter, in accordance with precautionary, requiements specified by the Public Health Authority with the presence of field supervisors.",
        cateringServices:
          "Suppling catering services in accordance with health requirements and standards, taking into account the list for each guest.",
        pcrServices:
          "Conducting PCR analyzes from accredited and licensed laboratories from the Saudi Ministry of Health.",
        nights: "Nights",
        meals: "Meals",
        oneWay: "One Way",
        fromAirport: "From Airport",
        visas: "Tourist Visas",
        hotelReservation: "Hotel Reservations of All Levels",
        transportations: "Means of Transportation for Internal Transportation",
        hotelCatering: "Catering Services for Hotels",
        institutionalQuarantine: "Institutional Quarantine Services",
        copyright: "Copyright",
        companyName: "Elegant Operation",
        year: "@2022",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
      },
      pageHeaders: {
        destinations: "POPULAR DESTINATIONS",
        quarantine: "QUARANTINE SERVICES",
        ourHotels: "OUR HOTELS",
        allotmentHotels: "ALLOTMENT HOTELS",
        ourPartners: "OUR PARTNERS",
        welcome: "WELCOME TO ELEGANT OPERATION",
        overview: "OVERVIEW",
        ourServices: "Our Services",
        ourCompany: "Our Company",
        ourVision: "Our Vision",
        leadership: "LEADERSHIP",
        ourCities: "OUR CITIES",
        navigation: "NAVIGATION",
      },
      hotels: {
        taj: "TAJ AL-RAQI",
        subTaj: "TAJ AL-KHALIL PREVIOUSLY",
        hijra: "AL-HIJRA AL-RAQI",
        subHijra: "AFWAJ AL-TAWBAH 11 PREVIOUSLY",
        safwa: "AL-SAFWA AL-RAQI",
        subSafwa: "SAFWAT AL-TAJ PREVIOUSLY",
        malak: "MALAK AL-RAQI",
        subMalak: "MALAK AL-TAQWA PREVIOUSLY",
        kady: "KADY AL-RAQI",
        subKady: "ZOHOUR AL-TAJ PREVIOUSLY",
        azka: "AZKA AL-SAFA",
        nesour: "NESOUR AL-MOHAJEREEN",
        mathaer: "MATHAER AL-JEWAR",
        fajr: "FAJR AL-BADIE 2",
        royal: "ROYAL MAJESTIC",
        bolman: "BOLMAN ZAMZAM",
      },
      about: {
        companyDesc:
          "A company specialized in managing and operating hotels, providing catering services and organizing tourist trips Umrah, Hajj and quarantine programs.",
        visionDesc:
          "Serving the pilgrims from all over the world and its connection with the vision of our wise leadership. Our energies and capabilities to serve them, whose priority is to spare no effort in making every effort. Providing everything that meets the needs of God's guests and fulfills their aspirations.",
      },
      leaders: {
        director: "Ahmed Khawaja",
        directorPos: "Executive Director",
      },
      contact: {
        callUs: "Call Us Now",
        support: "Support 24/7 - Online 24 hours",
        phoneNumber: "0126530666",
        address: "Mecca Aziza, Al Safah Tower",
        subAddress: "Floor 4, Office 113",
        availability: "Available All Time",
        mailUs: "Mail Us Now",
      },
    };
  } else {
    lang = {
      topBar: {
        follow: "تابعونا:",
      },
      nav: {
        home: "الصفحة الرئيسية",
        about: "من نحن",
        hotels: "الفنادق",
        contact: "تواصل معنا",
      },
      slider: {
        slider1: "الرحلات والتجارب والأماكن. خدمة الكل في واحد",
        slider2: "أفضل عروض الرحلات منا",
        slider3: "أفضل الوجهات السياحية في العالم",
      },
      popularPlaces: {
        riyadh: "الرياض",
        riyadhDesc:
          "منطقة الرياض، هي إحدى مناطق المملكة العربية السعودية، وتقع في المركز الجغرافي للبلد. وهي ثاني أكبر منطقة من حيث المساحة وعدد السكان، بعد المنطقة الشرقية ومنطقة مكة المكرمة على التوالي.",
        jeddah: "جدة",
        jeddahDesc:
          "جدة هي مدينة في منطقة الحجاز بالمملكة العربية السعودية والمركز التجاري للبلاد. تأسست جدة في القرن السادس قبل الميلاد كقرية صيد، ونمت شهرة جدة في عام 647 عندما جعلها الخليفة عثمان ميناءًا رئيسيًا لطرق التجارة في المحيط الهندي، وتوجيه البضائع إلى مكة، وخدمة المسافرين المسلمين للحج الإسلامي.",
        madinah: "المدينة المنورة",
        madinahDesc:
          "المدينة، رسمياً المدينة المنورة. إنها رابع أكبر مدينة في البلاد من حيث عدد السكان. تقع في قلب محافظة المدينة المنورة في الروافد الغربية للبلاد، بينما يحتل الباقي جبال الحجاز والوديان الفارغة والمساحات الزراعية والبراكين الخاملة الأقدم.",
        dammam: "الدمام",
        dammamDesc:
          "الدمام هي خامس مدينة من حيث عدد السكان في المملكة العربية السعودية بعد الرياض وجدة ومكة والمدينة المنورة. هي عاصمة المنطقة الشرقية. وتقع في المدينة الهيئات القضائية والإدارية للمحافظة، بالإضافة إلى المكاتب الإدارية للإدارات الحكومية الفرعية الأخرى العاملة داخل المحافظة.",
      },
      general: {
        transport: "المواصلات",
        catering: "تقديم الطعام",
        pcr: "PCR اختبار",
        hotelServices:
          "تجديد وتجهيز مرافق اقامة السائحين المرخصة من وزارة السياحة والمؤهلة للحجر الصحي على جميع المستويات خمس نجوم واربعة نجوم وثلاث نجوم",
        transportServices:
          "توفير أحدث وسائل النقل من المطار إلى المأوى ، وفق الاشتراطات الاحترازية التي تحددها هيئة الصحة العامة بحضور المشرفين الميدانيين.",
        cateringServices:
          "تقديم خدمات التموين وفق المتطلبات والمعايير الصحية مع مراعاة القائمة الخاصة بكل ضيف",
        pcrServices:
          "إجراء تحاليل تفاعل البوليميراز المتسلسل من مختبرات معتمدة ومرخصة من وزارة الصحة السعودية",
        nights: "ليالي",
        meals: "وجبات",
        oneWay: "اتجاه مباشر",
        fromAirport: "من المطار",
        visas: "تأشيرات سياحية",
        hotelReservation: "حجوزات فندقية بجميع المستويات",
        transportations: "وسيلة النقل الخاصة بالنقل الداخلي",
        hotelCatering: "خدمات المطاعم للفنادق",
        institutionalQuarantine: "خدمات الحجر الصحي المؤسسي",
        copyright: "حقوق نشر",
        companyName: "التشغيل الراقي",
        year: "@٢٠٢٢",
        a: "٠",
        b: "١",
        c: "٢",
        d: "٣",
        e: "٤",
        f: "٥",
        g: "٦",
        h: "٧",
        i: "٨",
        j: "٩",
      },
      pageHeaders: {
        destinations: "الوجهات الاكثر شهرة",
        quarantine: "خدمات الحجر الصحي",
        ourHotels: "فنادقنا",
        allotmentHotels: "فنادق مخصصة",
        ourPartners: "عملائنا",
        welcome: "مرحباً بكم في التشغيل الراقي",
        overview: "نظرة عامة",
        ourServices: "خدماتنا",
        ourCompany: "شركتنا",
        ourVision: "رؤيتنا",
        leadership: "الرئاسة",
        ourCities: "مدننا",
        navigation: "التنقل",
      },
      hotels: {
        taj: "التاج الراقي",
        subTaj: "تاج الخليل سابقاً",
        hijra: "الهجرة الراقي",
        subHijra: "أفواج التوبة ١١ سابقاً",
        safwa: "الصفوة الراقي",
        subSafwa: "صفوة التاج سابقا",
        malak: "ملاك الراقي",
        subMalak: "ملاك التقوى سابقا",
        kady: "كادي الراقي",
        subKady: "زهور التاج سابقا",
        azka: "ازكى الصفا",
        nesour: "نسور المهاجرين",
        mathaer: "مئاثر الجوار",
        fajr: "فجر البديع ٢",
        royal: "رويال ماجيستيك",
        bolman: "بولمان زمزم",
      },
      about: {
        companyDesc:
          "شركة مختصة في ادارة وتشغيل الفنادق والاعاشة وتنظيم الرحلات السياحية وبرامج العمرة والحج و الحجر المؤسسي.",
        visionDesc:
          "خدمة الحجاج من جميع أنحاء العالم وارتباطها برؤية قيادتنا الرشيدة. طاقاتنا وقدراتنا لخدمتهم ، وأولويتنا عدم ادخار أي جهد في بذل كل جهد. تقديم كل ما يلبي احتياجات ضيوف الله ويحقق تطلعاتهم.",
      },
      contact: {
        callUs: "اتصل بنا الآن",
        support: "دعم ٢٤/٧ - عبر الإنترنت ٢٤ ساعة",
        phoneNumber: "٠١٢٦٥٣٠٦٦٦",
        address: "مكة العزيزة، برج الصفا",
        subAddress: "الدور الدابع، مكتب ١١٣",
        availability: "متاح جميع الاوقات",
        mailUs: "راسلنا بالبريد الآن",
      },
      leaders: {
        director: "أحمد خواجة",
        directorPos: "المدير التنفيذي",
      },
    };
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
const LanguageConsumer = LanguageContext.Consumer;

export { LanguageProvider, LanguageConsumer, LanguageContext };
