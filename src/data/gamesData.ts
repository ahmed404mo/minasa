export const gamesData: Record<string, any[]> = {
  "africa": [
    {
      type: "quiz", riddle: "المستوى 1: مقابر عملاقة بناها الفراعنة زمان على شكل مثلثات.. أنا مين؟",
      options: [
        { img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=400", text: "الأهرامات" }, 
        { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400", text: "ناطحات السحاب" }, 
        { img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=400", text: "الملعب الروماني" }
      ],
      answer: "الأهرامات", fact: "المعلومة السحرية 🌟: الهرم الأكبر متكون من أكتر من 2 مليون حجر عملاق!"
    },
    {
      type: "quiz", riddle: "المستوى 2: أطول نهر في العالم وبيجري في مصر.. اسمه إيه؟",
      options: [
        { img: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?q=80&w=400", text: "نهر النيل" }, 
        { img: "https://images.unsplash.com/photo-1610123590390-eb60980c922a?q=80&w=400", text: "نهر الأمازون" }, 
        { img: "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?q=80&w=400", text: "النهر الجليدي" }
      ],
      answer: "نهر النيل", fact: "المعلومة السحرية 🌟: نهر النيل بيعبر في 11 دولة أفريقية لحد ما يوصل لمصر!"
    },
    {
      type: "quiz", riddle: "المستوى 3: أكلة مصرية شعبية معمولة من الرز والعدس والمكرونة.. إيه هي؟",
      options: [
        { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400", text: "برجر" }, 
        { img: "https://thumb.ac-illust.com/b7/b74d0b5f2b01dd6a326d8279719d6f72_t.jpeg", text: "الكشري" }, 
        { img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400", text: "سوشي" }
      ],
      answer: "الكشري", fact: "المعلومة السحرية 🌟: الكشري من أشهر وألذ الأكلات اللي بيحبها كل المصريين والسياح! مبروك خلصت أفريقيا 🏆"
    }
  ],
  "south-america": [
    {
      type: "dragDrop", riddle: "المستوى 1: وصل الصورة باللي يناسبها!",
      pairs: [
        { item: "الأمازون", match: "أكبر غابة", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=400" },
        { item: "البرازيل", match: "كرة القدم", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400" }
      ],
      fact: "المعلومة السحرية 🌟: البرازيل هي أكتر دولة كسبت كاس العالم في التاريخ!"
    },
    {
      type: "dragDrop", riddle: "المستوى 2: ركز ووصل صح!",
      pairs: [
        { item: "النهر", match: "مياه عذبة", img: "https://images.unsplash.com/photo-1437482273943-2873cfbac38a?q=80&w=400" },
        { item: "الببغاء", match: "طائر ملون", img: "https://images.unsplash.com/photo-1552728089-57bdde30ebe3?q=80&w=400" }
      ],
      fact: "المعلومة السحرية 🌟: غابات الأمازون بتطلع أكتر من 20% من الأكسجين اللي بنتنفسه!"
    },
    {
      type: "dragDrop", riddle: "المستوى 3: التحدي الأخير في التوصيل!",
      pairs: [
        { item: "دلافين وردية", match: "نهر الأمازون", img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=400" },
        { item: "كأس العالم", match: "البرازيل", img: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=400" }
      ],
      fact: "المعلومة السحرية 🌟: نهر الأمازون مفيهوش ولا كوبري واحد مبني فوقيه! مبروك خلصت أمريكا الجنوبية 🏆"
    }
  ],
  "europe": [
    {
      type: "memory", riddle: "المستوى 1: طابق الصور الحقيقية (4 كروت)",
      cards: [
        { id: 1, type: "t", content: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400" }, 
        { id: 2, type: "t", content: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400" }, 
        { id: 3, type: "c", content: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400" }, 
        { id: 4, type: "c", content: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400" }
      ],
      fact: "المعلومة السحرية 🌟: برج إيفل في الصيف بيطول كام سنتيمتر لأن الحديد بيتمدد مع الحرارة!"
    },
    {
      type: "memory", riddle: "المستوى 2: طابق الصورة مع الكلمة (6 كروت)",
      cards: [
        { id: 1, type: "t", content: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400" }, { id: 2, type: "t", content: "برج إيفل" },
        { id: 3, type: "c", content: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400" }, { id: 4, type: "c", content: "كرواسون" },
        { id: 5, type: "a", content: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" }, { id: 6, type: "a", content: "اللوفر" }
      ],
      fact: "المعلومة السحرية 🌟: متحف اللوفر كبير جداً لدرجة إنك محتاج شهور عشان تشوف كل لوحة فيه!"
    },
    {
      type: "memory", riddle: "المستوى 3: تحدي الذاكرة القوية! (8 كروت)",
      cards: [
        { id: 1, type: "t", content: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400" }, { id: 2, type: "t", content: "برج" },
        { id: 3, type: "c", content: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400" }, { id: 4, type: "c", content: "مخبوزات" },
        { id: 5, type: "a", content: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" }, { id: 6, type: "a", content: "متحف" },
        { id: 7, type: "f", content: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400" }, { id: 8, type: "f", content: "فرنسا" }
      ],
      fact: "المعلومة السحرية 🌟: فرنسا بتصنع أكتر من 400 نوع مختلف من الجبنة! مبروك خلصت أوروبا 🏆"
    }
  ],
  "antarctica": [
    {
      type: "trueFalse", riddle: "المستوى 1: هل طائر البطريق يستطيع الطيران في الهواء؟",
      isTrue: false, fact: "المعلومة السحرية 🌟: البطريق مش بيطير في الهوا، لكنه بيطير تحت الماية وهو بيعوم بسرعة جداً!"
    },
    {
      type: "trueFalse", riddle: "المستوى 2: أنتاركتيكا هي أبرد مكان على كوكب الأرض بالكامل؟",
      isTrue: true, fact: "المعلومة السحرية 🌟: صح! الجليد هناك بيغطي القارة كلها طول السنة."
    },
    {
      type: "trueFalse", riddle: "المستوى 3: يوجد في القارة القطبية مدن كبيرة بها شوارع ومدارس؟",
      isTrue: false, fact: "المعلومة السحرية 🌟: خطأ! مفيش مدن هناك، بيعيش فيها العلماء بس في محطات الأبحاث. مبروك خلصت أنتاركتيكا 🏆"
    }
  ],
  "australia": [
    {
      type: "oddOneOut", riddle: "المستوى 1: مين من الحيوانات دي مش بيعيش في أستراليا؟",
      options: [
        { img: "https://images.unsplash.com/photo-1598858712172-520e5018cb17?q=80&w=400", text: "كنغر", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1531885566085-f5d6f1fdb2c8?q=80&w=400", text: "كوالا", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=400", text: "أسد", isOdd: true }, 
        { img: "https://images.unsplash.com/photo-1517424161788-51f67f2bde88?q=80&w=400", text: "تمساح", isOdd: false }
      ],
      fact: "المعلومة السحرية 🌟: الأسد بيعيش في أفريقيا، لكن الكنغر والكوالا هما أصحاب الأرض في أستراليا!"
    },
    {
      type: "oddOneOut", riddle: "المستوى 2: إيه المكان اللي مش موجود في أستراليا؟",
      options: [
        { img: "https://images.unsplash.com/photo-1523351980838-89c0dae8bb81?q=80&w=400", text: "دار الأوبرا", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400", text: "برج إيفل", isOdd: true }, 
        { img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400", text: "حاجز مرجاني", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400", text: "شاطئ", isOdd: false }
      ],
      fact: "المعلومة السحرية 🌟: برج إيفل في فرنسا! دار الأوبرا هي اللي في أستراليا وشكلها زي شراع المركب."
    },
    {
      type: "oddOneOut", riddle: "المستوى 3: إيه اللي ملوش علاقة بجو أستراليا؟",
      options: [
        { img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400", text: "ركوب الأمواج", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1610444391264-16a759c86fc4?q=80&w=400", text: "رجل الثلج", isOdd: true }, 
        { img: "https://images.unsplash.com/photo-1598858712172-520e5018cb17?q=80&w=400", text: "كنغر", isOdd: false }, 
        { img: "https://images.unsplash.com/photo-1531885566085-f5d6f1fdb2c8?q=80&w=400", text: "كوالا", isOdd: false }
      ],
      fact: "المعلومة السحرية 🌟: أستراليا جوها حر ومعندهمش تلج يعملوا منه رجل الثلج! مبروك خلصت أستراليا 🏆"
    }
  ],
  "asia": [
    {
      type: "scramble", riddle: "المستوى 1: اضغط على الحروف بالترتيب لتكوين أشهر أكلة يابانية!",
      letters: ["ش", "ي", "س", "و"], answer: "سوشي",
      fact: "المعلومة السحرية 🌟: اليابانيين بياكلوا السوشي بعصيان خشب اسمها (هاشي)!"
    },
    {
      type: "scramble", riddle: "المستوى 2: رتب الحروف لاسم أشهر جبل بركاني في اليابان!",
      letters: ["ج", "ي", "ف", "و"], answer: "فوجي",
      fact: "المعلومة السحرية 🌟: جبل فوجي عالي جداً والثلج بيغطي القمة بتاعته طول السنة!"
    },
    {
      type: "scramble", riddle: "المستوى 3: رتب الحروف لاسم مسلسلات الكرتون اليابانية المشهورة!",
      letters: ["ي", "م", "ن", "أ"], answer: "أنمي",
      fact: "المعلومة السحرية 🌟: اليابان بتعمل أكتر من 60% من مسلسلات الأنمي في العالم كله! مبروك خلصت آسيا 🏆"
    }
  ],
  "north-america": [
    {
      type: "selectImage", riddle: "المستوى 1: اضغط على صورة (تمثال الحرية) الحقيقي 🗽",
      options: [
        { img: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?q=80&w=400", isCorrect: true },
        { img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400", isCorrect: false },
        { img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=400", isCorrect: false }
      ],
      fact: "المعلومة السحرية 🌟: تمثال الحرية أهدته فرنسا لأمريكا كرمز للصداقة والسلام!"
    },
    {
      type: "selectImage", riddle: "المستوى 2: أين صورة الـ (برجر)؟ 🍔",
      options: [
        { img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400", isCorrect: false },
        { img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400", isCorrect: true },
        { img: "https://thumb.ac-illust.com/b7/b74d0b5f2b01dd6a326d8279719d6f72_t.jpeg", isCorrect: false }
      ],
      fact: "المعلومة السحرية 🌟: البرجر اتسمى كده على اسم مدينة (هامبورج) الألمانية!"
    },
    {
      type: "selectImage", riddle: "المستوى 3: أين يتم صناعة الأفلام (هوليوود)؟ 🎬",
      options: [
        { img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400", isCorrect: true },
        { img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400", isCorrect: false },
        { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400", isCorrect: false }
      ],
      fact: "المعلومة السحرية 🌟: هوليوود موجودة في ولاية كاليفورنيا وهي عاصمة السينما في العالم! مبروك خلصت أمريكا الشمالية 🏆"
    }
  ]
};