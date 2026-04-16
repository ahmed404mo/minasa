// تأكد إن السطر ده بيبدأ بـ export const gamesData
export const gamesData: Record<string, any[]> = {
  "africa": [
    {
      type: "quiz", riddle: "المستوى 1: مقابر عملاقة بناها الفراعنة زمان على شكل مثلثات.. أنا مين؟",
      options: [{ icon: "🔺", text: "الأهرامات" }, { icon: "🏢", text: "ناطحات السحاب" }, { icon: "🏟️", text: "الملعب الروماني" }],
      answer: "الأهرامات", fact: "المعلومة السحرية 🌟: الهرم الأكبر متكون من أكتر من 2 مليون حجر عملاق!"
    },
    {
      type: "quiz", riddle: "المستوى 2: أطول نهر في العالم وبيجري في مصر.. اسمه إيه؟",
      options: [{ icon: "💧", text: "نهر النيل" }, { icon: "🌊", text: "نهر الأمازون" }, { icon: "❄️", text: "النهر الجليدي" }],
      answer: "نهر النيل", fact: "المعلومة السحرية 🌟: نهر النيل بيعبر في 11 دولة أفريقية لحد ما يوصل لمصر!"
    },
    {
      type: "quiz", riddle: "المستوى 3: أكلة مصرية شعبية معمولة من الرز والعدس والمكرونة.. إيه هي؟",
      options: [{ icon: "🍔", text: "برجر" }, { icon: "🍲", text: "الكشري" }, { icon: "🍣", text: "سوشي" }],
      answer: "الكشري", fact: "المعلومة السحرية 🌟: الكشري من أشهر وألذ الأكلات اللي بيحبها كل المصريين والسياح! مبروك خلصت أفريقيا 🏆"
    }
  ],
  "south-america": [
    {
      type: "dragDrop", riddle: "المستوى 1: وصل الكلمة باللي يناسبها!",
      pairs: [{ item: "الأمازون", match: "أكبر غابة" }, { item: "البرازيل", match: "كرة القدم" }],
      fact: "المعلومة السحرية 🌟: البرازيل هي أكتر دولة كسبت كاس العالم في التاريخ!"
    },
    {
      type: "dragDrop", riddle: "المستوى 2: ركز ووصل صح!",
      pairs: [{ item: "نهر الأمازون", match: "مياه عذبة" }, { item: "أكسجين", match: "رئة الأرض" }, { item: "ببغاء", match: "طائر ملون" }],
      fact: "المعلومة السحرية 🌟: غابات الأمازون بتطلع أكتر من 20% من الأكسجين اللي بنتنفسه!"
    },
    {
      type: "dragDrop", riddle: "المستوى 3: التحدي الأخير في التوصيل!",
      pairs: [{ item: "حيوانات", match: "الغابة" }, { item: "دلافين وردية", match: "نهر الأمازون" }, { item: "كأس العالم", match: "5 مرات" }, { item: "أمريكا", match: "الجنوبية" }],
      fact: "المعلومة السحرية 🌟: نهر الأمازون مفيهوش ولا كوبري واحد مبني فوقيه! مبروك خلصت أمريكا الجنوبية 🏆"
    }
  ],
  "europe": [
    {
      type: "memory", riddle: "المستوى 1: طابق صورتين زي بعض (4 كروت)",
      cards: [{ id: 1, type: "t", content: "🗼" }, { id: 2, type: "t", content: "🗼" }, { id: 3, type: "c", content: "🥐" }, { id: 4, type: "c", content: "🥐" }],
      fact: "المعلومة السحرية 🌟: برج إيفل في الصيف بيطول كام سنتيمتر لأن الحديد بيتمدد مع الحرارة!"
    },
    {
      type: "memory", riddle: "المستوى 2: طابق الصورة مع الكلمة (6 كروت)",
      cards: [{ id: 1, type: "t", content: "🗼" }, { id: 2, type: "t", content: "برج" }, { id: 3, type: "c", content: "🥐" }, { id: 4, type: "c", content: "مخبوزات" }, { id: 5, type: "a", content: "🎨" }, { id: 6, type: "a", content: "متحف" }],
      fact: "المعلومة السحرية 🌟: متحف اللوفر كبير جداً لدرجة إنك محتاج 100 يوم عشان تتفرج على كل حاجة فيه!"
    },
    {
      type: "memory", riddle: "المستوى 3: تحدي الذاكرة القوية! (8 كروت)",
      cards: [{ id: 1, type: "t", content: "🗼" }, { id: 2, type: "t", content: "برج" }, { id: 3, type: "c", content: "🥐" }, { id: 4, type: "c", content: "كرواسون" }, { id: 5, type: "a", content: "🎨" }, { id: 6, type: "a", content: "متحف" }, { id: 7, type: "f", content: "🇫🇷" }, { id: 8, type: "f", content: "فرنسا" }],
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
      options: [{ icon: "🦘", text: "كنغر", isOdd: false }, { icon: "🐨", text: "كوالا", isOdd: false }, { icon: "🦁", text: "أسد", isOdd: true }, { icon: "🐊", text: "تمساح", isOdd: false }],
      fact: "المعلومة السحرية 🌟: الأسد بيعيش في أفريقيا، لكن الكنغر والكوالا هما أصحاب الأرض في أستراليا!"
    },
    {
      type: "oddOneOut", riddle: "المستوى 2: إيه المكان اللي مش موجود في أستراليا؟",
      options: [{ icon: "🎭", text: "دار الأوبرا", isOdd: false }, { icon: "🗼", text: "برج إيفل", isOdd: true }, { icon: "🐠", text: "حاجز مرجاني", isOdd: false }, { icon: "🏖️", text: "شاطئ سيدني", isOdd: false }],
      fact: "المعلومة السحرية 🌟: برج إيفل في فرنسا! دار الأوبرا هي اللي في أستراليا وشكلها زي شراع المركب."
    },
    {
      type: "oddOneOut", riddle: "المستوى 3: إيه اللي ملوش علاقة بعالم أستراليا؟",
      options: [{ icon: "🪃", text: "بوميرانج", isOdd: false }, { icon: "⛄", text: "رجل الثلج", isOdd: true }, { icon: "🏄", text: "ركوب الأمواج", isOdd: false }, { icon: "🐨", text: "كوالا", isOdd: false }],
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
      type: "selectImage", riddle: "المستوى 1: اضغط على صورة (تمثال الحرية) 🗽",
      options: [
        { img: "https://png.pngtree.com/png-vector/20230808/ourlarge/pngtree-statue-of-liberty-clipart-statue-of-liberty-holding-a-torch-and-vector-png-image_6869453.png", isCorrect: true },
        { img: "https://thumbs.dreamstime.com/b/eiffel-tower-hand-drawn-comic-illustration-vector-doodle-style-cartoon-284399865.jpg", isCorrect: false },
        { img: "https://static.vecteezy.com/system/resources/thumbnails/000/207/558/small/pyramids.jpg", isCorrect: false }
      ],
      fact: "المعلومة السحرية 🌟: تمثال الحرية أهدته فرنسا لأمريكا كرمز للصداقة والسلام!"
    },
    {
      type: "selectImage", riddle: "المستوى 2: أين صورة الـ (برجر)؟ 🍔",
      options: [
        { img: "https://t3.ftcdn.net/jpg/00/71/27/58/360_F_71275800_6q6o3Pm2b3B5JFTl57vkvlG9OPI348n0.jpg", isCorrect: false },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rx-7TUHUojkMnfvi-n3tiAVrO8fLH6R4zQ&s", isCorrect: true },
        { img: "https://thumb.ac-illust.com/b7/b74d0b5f2b01dd6a326d8279719d6f72_t.jpeg", isCorrect: false }
      ],
      fact: "المعلومة السحرية 🌟: البرجر اتسمى كده على اسم مدينة (هامبورج) الألمانية، بس أمريكا اللي شهرته!"
    },
    {
      type: "selectImage", riddle: "المستوى 3: أين يتم صناعة الأفلام (هوليوود)؟ 🎬",
      options: [
        { img: "https://abroadz.com/wp-content/uploads/2020/08/sydney-opera-house-flat-illustration-cartoon-icon-free-vector.jpg", isCorrect: false },
        { img: "https://img.freepik.com/free-vector/serene-mountain-lake-with-cherry-blossoms_1308-163470.jpg?semt=ais_hybrid&w=740&q=80", isCorrect: false },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCK-jRB76WJ2UsEW0Zjg0-gT1DMOIfmYFrsQ&s", isCorrect: true }
      ],
      fact: "المعلومة السحرية 🌟: هوليوود موجودة في ولاية كاليفورنيا وهي عاصمة السينما في العالم! مبروك خلصت أمريكا الشمالية 🏆"
    }
  ]
};