/* ============================================================
   DATA (bilingual)
   ============================================================ */
const DATA = {
  en:{
    brand:"Faisal's Portfolio",
    nav_about:"Instructor", nav_activities:"Activities", nav_rules:"Guidelines",
    nav_office:"Office", nav_university:"University", nav_faq:"FAQ", nav_contact:"Contact",
    hero_eyebrow:"UTAS-Nizwa · General Foundation Program",
    hero_title:'Speak with <span class="grad">confidence</span>.',
    hero_lead:"Welcome to General English (GE1) at UTAS-Nizwa! This is your space for reading, writing, listening and speaking with Mr. Yousef — plus classroom activities that make practice actually fun.",
    hero_cta1:"Try an activity", hero_cta2:"Meet your instructor",
    inst_name:"Mr. Yousef Al-Harthi", inst_role:"General English (GE1) · Foundation Program",
    inst_h:"About your instructor", inst_p:"Helping foundation students build strong English — reading, writing, listening and speaking — and pass GE1 with confidence.",
    inst_focus_h:"Teaching focus", inst_courses_h:"Modules taught", inst_timeline_h:"Experience & milestones",
    research:["Reading & Writing","Listening & Speaking","Grammar & Lexis","Oral presentations","Building confidence"],
    courses:["General English 1 (GE1)","Reading & Writing","Listening & Speaking","Integrated Grammar & Lexis","Oral Presentations"],
    timeline:[
      {yr:"2024",h:"Foundation speaking lead",p:"Runs the public-speaking strand for first-year students."},
      {yr:"2020",h:"Senior English instructor",p:"Designed the Foundation communication modules."},
      {yr:"2016",h:"English instructor",p:"Joined the General Foundation Program at UTAS-Nizwa."},
      {yr:"2014",h:"MA, Applied Linguistics",p:"Focused on spoken fluency and confidence."},
    ],
    stats:[["10","Years teaching"],["1.2k","Students coached"],["40","Workshops led"],["300","Talks coached"]],
    act_h:"Classroom activities", act_p:"Ten tools to warm up the room and get everyone talking — pick one and run it live.",
    activities:[
      {id:"jar",e:"🫙",t:"Magic Number Jar",d:"Shake the jar and draw a folded number — no repeats."},
      {id:"ball",e:"🎾",t:"Question Ball",d:"Toss the ball around — each student introduces themselves."},
      {id:"qotd",e:"❓",t:"Question of the Day",d:"Spin a numbers wheel to pick a student, then ask a question."},
      {id:"timer30",e:"⏱️",t:"30-Second Challenge",d:"A prompt and a 3D timer — keep talking till the buzzer."},
      {id:"motivation",e:"🌟",t:"Daily Motivation",d:"Calm, uplifting quotes and encouragement for new students."},
    ],
    rules_h:"Guidelines that keep things fair", rules_p:"Clear expectations for the university and for our classroom.",
    rules_uni:"University rules", rules_class:"Classroom rules",
    uniRules:[
      {i:"🕐",t:"Attendance & warnings",d:"First warning at 5% absence, second at 10%; over 15% you may be debarred from the final exam."},
      {i:"📄",t:"Valid excuses",d:"Illness (sick-leave certificate), appointments with proof, or death of a first-degree relative (document within 3 days)."},
      {i:"⚖️",t:"Academic integrity",d:"First confirmed cheating = fail the course; second = fail + no registration next semester; third = dismissal."},
      {i:"📝",t:"Exam rules",d:"Bring a valid ID and arrive within 30 minutes (no extra time if late); submit only after half the time, once."},
      {i:"🎓",t:"Discipline & order",d:"Follow the dress code and conduct rules; the maximum study period is 1½ years (2 with one repeat)."},
      {i:"🧾",t:"Appeals",d:"Request a final-grade review at Admission & Registration within 3 working days of results."},
    ],
    classRules:[
      {i:"⏰",t:"Be on time",d:"Attendance is taken each lecture; for 8 AM classes, arriving 10+ minutes late counts as absent."},
      {i:"🗣️",t:"Take part",d:"Join reading, writing, listening and speaking tasks — oral presentations count toward your grade."},
      {i:"💻",t:"SPARK deadlines",d:"Finish your assigned SPARK e-learning activities on time — late submissions score zero (part of CA)."},
      {i:"📧",t:"Stay in touch",d:"We use MS Teams and email — check them regularly and use your university account."},
      {i:"📚",t:"Look after your books",d:"Collect your two Pathways books from your group tutor and return them by the end of term."},
      {i:"💬",t:"Ask for feedback",d:"You have the right to timely, detailed feedback and to know the marking criteria beforehand."},
    ],
    office_h:"Find my office", office_p:"Drop by during office hours — or book a slot by email.",
    officeInfo:[
      ["🏢","Centre","Preparatory Studies Centre (PSC)"],
      ["🚪","Office","1st floor, Room A-112"],
      ["🕑","Office hours","Sun & Wed, 10:00–12:00"],
      ["💻","Also on","MS Teams & email"],
    ],
    office_dir:"From the main gate: head to the PSC building, take the central stairs to the 1st floor, then turn toward the classrooms — A-112 is the marked office.",
    map_lib:"Library", map_labs:"Speaking labs", map_cafe:"Café", map_you:"Block A · You",
    uni_h:"University at a glance", uni_p:"UTAS-Nizwa's General Foundation Program (GFP) — your bridge into degree study, through the Preparatory Studies Centre.",
    uniInfo:[
      {i:"🎯",t:"Vision & mission",d:"UTAS aims to lead in technological and applied education for a sustainable, knowledge-based society."},
      {i:"🧩",t:"The GFP",d:"The General Foundation Program prepares you in English and core skills before Year 1 courses."},
      {i:"📗",t:"Course: GE1",d:"General English 1 (FPGE0001): Reading & Writing (10 hrs/week) and Listening & Speaking (8 hrs/week)."},
      {i:"📚",t:"Textbooks",d:"Pathways Reading & Writing 1 and Pathways Listening & Speaking 1, with integrated Grammar & Lexis."},
      {i:"💻",t:"Platforms",d:"MS Teams and email for class; SPARK and Moodle for independent study."},
      {i:"🎓",t:"Clubs & voice",d:"English and Writing clubs on Tuesdays; share feedback through CIMS (Students' Voice)."},
    ],
    uni_cal_h:"Academic calendar",
    calendar:[["Term","Spring 2026"],["Exemption window","Weeks 1–2"],["Midterm exam","TBA"],["Final exam","TBA"]],
    ann_h:"Announcements",
    announcements:[
      {tag:"New",t:"English exemption window",d:"Have a valid IELTS/TOEFL (under 2 years)? Submit it in the first 2 weeks to be exempted."},
      {tag:"Reminder",t:"SPARK deadlines",d:"Finish your assigned SPARK activities on time — late submissions score zero."},
      {tag:"Club",t:"English & Writing Club",d:"Every Tuesday — one slot a week. Come and practise with us!"},
    ],
    mat_h:"Lecture materials",
    materials:[
      {i:"📗",t:"Pathways Reading & Writing 1",d:"Course textbook"},
      {i:"📘",t:"Pathways Listening & Speaking 1",d:"Course textbook"},
      {i:"💻",t:"SPARK activities",d:"14 e-learning tasks · part of CA"},
      {i:"🧑‍🏫",t:"Moodle & MS Teams",d:"Class page & study platform"},
    ],
    faq_h:"Frequently asked questions",
    faq:[
      {q:"How do I pass GE1?",a:"Score at least 50 in the cumulative mark (CA + Final) and at least 50 in the Final Exam."},
      {q:"How is GE1 graded?",a:"Continuous Assessment is 50% (Midterm 30% + oral presentations and e-learning 20%); the Final Exam is 50%."},
      {q:"What's the attendance limit?",a:"You get a first warning at 5% absence and a second at 10%; above 15% you may be debarred from the final exam."},
      {q:"Can I be exempted from English?",a:"Yes — submit a valid IELTS or TOEFL iBT certificate (under 2 years old) in the first two weeks of the semester."},
      {q:"What if I miss an assessment?",a:"Send a valid excuse to the PSC Unit Head within 3 days; approved cases are given a make-up."},
    ],
    contact_h:"Get in touch", contact_p:"Reach me by email or during office hours — details below.",
    contactInfo:[
      ["📧","Email","yousef.harthi@alnahda.edu.om"],
      ["🏢","Office","Foundation Building, A-112"],
      ["🕑","Hours","Sun & Wed, 10:00–12:00"],
    ],
    contact_follow:"Follow along",
    socials:[{i:"📸",l:"Instagram",u:""},{i:"💼",l:"LinkedIn",u:""},{i:"🐦",l:"X (Twitter)",u:""},{i:"🎓",l:"University page",u:""},{i:"📺",l:"YouTube",u:""}],
    f_name:"Your name", f_email:"Your email", f_msg:"Message", f_send:"Send message",
    f_hint:"This opens your email app so you can send the message to Mr. Yousef.",
    footer:"Built for foundation students who learn by doing. © 2026 Speaking Hub.",
    ttl:{note:"Type two true statements and one false one, mark the lie, then play — the class guesses which card is the lie.",
      defaults:["I have visited three countries.","I can cook a full meal from scratch.","I once met a famous person."], lie:2},
    prompts:["Describe your perfect weekend.","Talk about a food you can't live without.","Convince us to visit your hometown.","Explain your morning routine.","Talk about a hobby you love.","Describe your best friend.","Sell us your favourite app.","Talk about your dream job.","Describe a place that makes you happy.","Talk about a book, show, or game you enjoy.","What would you do with an extra hour a day?","Describe your ideal classroom."],
    thisOrThat:[["Coffee","Tea"],["Beach","Mountains"],["Morning","Night"],["Books","Movies"],["Cats","Dogs"],["Summer","Winter"],["Call","Text"],["Sweet","Savoury"],["City","Countryside"],["Plan","Surprise"],["Music","Podcasts"],["Cooking","Ordering"],["Early bird","Night owl"],["Window","Aisle"],["Save","Spend"],["Speak","Write"]],
    qbank:{
      easy:["What's your name and what does it mean?","Where are you from?","What's your favourite colour?","How many siblings do you have?","What's your favourite food?","What time do you wake up?","What's your favourite subject?","Tea or coffee?","What's your favourite day of the week?","What's your favourite season?","What's one hobby you enjoy?","What's your favourite animal?","What's your favourite fruit?","Do you like sports? Which one?","What's the last thing you ate?","What's your favourite drink?","Do you have a pet?","What's your favourite place at home?","How do you get to university?","What's your favourite app?","What colour is your bag?","What's your favourite ice-cream flavour?","What's the weather like today?","One word for your mood right now?","What's your favourite emoji?","Reading or listening?","What's your favourite holiday?","What's your go-to breakfast?","What kind of music do you like?","What's your dream pet?","What's your favourite number?","What's your favourite month?","Summer or winter clothes?","What's your favourite morning drink?","What's your dream travel destination?","How do you like to spend a break?","What's a word you enjoy saying?"],
      medium:["What's a skill you'd love to learn?","Describe your family in three words.","What's your proudest moment?","Who inspires you and why?","What's a goal for this year?","Describe your perfect day.","What's a challenge you overcame?","What makes a good friend?","A favourite memory from school?","If you could travel anywhere, where?","What's something you're good at?","What job did you want as a kid?","A habit you want to build?","Your favourite way to relax?","A book or story that stuck with you?","What does success mean to you?","A small thing that makes you happy?","How do you handle stress?","Your favourite quality in people?","What would you tell your younger self?","A place where you feel calm?","A language you'd like to speak?","A cause you care about?","Your favourite thing about your city?","A tradition your family keeps?","Something new you tried recently?","What motivates you to study?","Your idea of a good teacher?","A talent people don't know you have?","One thing on your bucket list?","How do you celebrate a win?","A movie everyone should watch?","What makes you laugh the most?"],
      fun:["If you won 1000 riyals, what's the first thing you'd do?","If you could travel to any country, where would you go?","If you were an animal, which one?","What superpower would you pick?","Pineapple on pizza — yes or no?","If you had a robot, what would it do?","What's your karaoke song?","Fly or be invisible?","The weirdest food you've tried?","What's your spirit emoji?","First thing you'd buy after winning a million?","Cereal before or after milk?","Your zombie-apocalypse plan?","If your life had a theme song, what is it?","Your silliest fear?","Teleport or time travel?","Your go-to dance move?","If you could rename yourself, what name?","Best snack of all time?","Never sleep or never eat?","A made-up word you use?","Your superhero name?","Funniest thing that happened this week?","Talk in accents or sing everything?","Your useless-but-fun fact?","Your dream theme-park ride?","Sweet or salty popcorn?","What emoji describes your mornings?","If you had one food forever, what?","Your walk-on song entering class?","Tiny hands or huge feet?","Best cartoon ever?","Swap lives for a day — with who?","If class were on the moon, first thing you'd do?","Your dream superpower sidekick?"]
    },
    quotes:["Every expert was once a beginner.","Your voice matters — use it.","Small steps every day add up.","Mistakes are proof you're trying.","Confidence grows with practice.","You belong here.","Progress, not perfection.","Speak up; your ideas are worth hearing.","Be brave for ten seconds at a time.","A new start is a gift — enjoy it.","You are capable of amazing things.","Nervous means you care. Breathe and begin.","One good question can change everything.","Keep going — future you will thank you.","Growth lives just outside your comfort zone.","Your effort today builds your tomorrow.","Kindness makes any classroom better.","You've got this — one word at a time."],
    m:{
      draw:"Draw a number 🎲", reset:"Reset 🔄", remaining:"Notes left",
      names_ph:"Paste names, one per line", spin:"Spin 🎡", make:"Make teams 🔀",
      next:"Next 💬", reveal:"Reveal", start:"Start", score:"Score", time:"Time",
      winner:"Winner", team_red:"Red Team", team_blue:"Blue Team", need_names:"Add at least 2 names first.",
      wheel_ph:"Options, one per line (e.g. bonus point, extra hint…)", again:"Again",
      correct:"Correct!", wrong:"Not quite.", done:"Done!", tap:"Tap the 🎯!", go:"Go",
      guess_ph:"Type a letter", hint:"Hint", won:"You got it! 🎉", flip:"Flip the cards to match pairs.",
      moves:"Moves", pairs:"Pairs",
      cal_add:"Add entry", cal_save:"Save", cal_cancel:"Cancel",
      cal_saved:"Calendar updated ✔", cal_note:"Edit the dates and labels, then Save. (For the instructor.)",
      cal_date_ph:"Date", cal_label_ph:"Label",
      edit_title:"Edit instructor info", edit_note:"Saved on this device and shown to visitors. (For the instructor.)",
      e_name:"Name", e_role:"Title", e_photo:"Photo", e_photo_pick:"Choose photo 📷", e_photo_clear:"Remove", e_photo_url:"…or paste a photo link", e_about:"About", e_stats:"Stats (number, then label)",
      e_focus:"Teaching focus (one per line)", e_mods:"Modules taught (one per line)",
      e_tl:"Timeline — one per line: year | title | description",
      e_addstat:"Add stat", e_save:"Save changes", e_reset:"Reset to default",
      e_saved:"Instructor info updated ✔", e_reset_done:"Reset to default ✔",
      ttl_play:"Play 🎭", ttl_which:"Which one is the lie?", truth:"Truth ✓", lie:"Lie 🎭",
      timer_start:"Start ⏱️", timer_new:"New prompt", timer_talk:"Talk about this for 30 seconds:", timesup:"Time's up! ⏰",
      tot_hint:"Tap your pick — there are no wrong answers!", tot_next:"Next 🔀",
      box_surprise:"Surprise me 🎁", box_hint:"Tap the box for a random question or task.",
      lvl_all:"All", lvl_easy:"Easy", lvl_med:"Medium", lvl_fun:"Fun", q_next:"Next question", mot_next:"Next 🌟",
      ball_throw:"Throw to next 🎾", ball_student:"Student", ball_done:"That's all six — great job! 🎉",
      ball_say:"When you catch the ball, say:", ball_items:["Your name","Your major / track","Something you love"], ball_extra:"Then answer this question:",
      qotd_upto:"Numbers up to", qotd_spin:"Spin 🎯", qotd_new:"New question",
      off_title:"Edit office details", off_note:"Saved on this device and shown to students. (For the instructor.)",
      off_dir:"Directions", off_add:"Add row", off_saved:"Office details updated ✔", off_reset:"Reset to default", off_reset_done:"Reset to default ✔",
      soc_title:"Edit social links", soc_note:"Add your real links — students tap to open them. (For the instructor.)",
      soc_name:"Name (e.g. Instagram)", soc_url:"Link (https://…)", soc_saved:"Links updated ✔", soc_reset_done:"Reset to default ✔",
      rules_edit_title:"Edit guidelines", rules_edit_note:"Edit the university and classroom rules. (For the instructor.)",
      rules_t:"Title", rules_d:"Detail", rules_saved:"Guidelines updated ✔", rules_reset_done:"Reset to default ✔",
      uni_edit_title:"Edit university info", uni_edit_note:"Edit the intro and info cards. (For the instructor.)",
      uni_intro:"Intro", uni_saved:"University info updated ✔", uni_reset_done:"Reset to default ✔",
      map_title:"Edit campus map", map_note:"Upload your campus map, then tap where your office is to place the marker.",
      map_pick:"Upload map 🗺️", map_saved:"Map updated ✔", map_reset_done:"Reset to default ✔",
      map_zoom_in:"Zoom in", map_zoom_out:"Zoom out", map_reset_pin:"Center pin",
      map_hint2:"Drag to pan · scroll or pinch to zoom · tap to drop the pin · drag the pin to fine-tune.",
      edit_generic_note:"Saved on this device and shown to students. (For the instructor.)",
      ann_edit_title:"Edit announcements", ann_tag:"Tag", ann_saved:"Announcements updated ✔",
      mat_edit_title:"Edit lecture materials", mat_saved:"Materials updated ✔",
      faq_edit_title:"Edit FAQ", faq_q:"Question", faq_a:"Answer", faq_saved:"FAQ updated ✔",
      gen_reset_done:"Reset to default ✔",
      owner_title:"Owner access", owner_note:"Enter the owner email — we'll send a sign-in link to unlock editing. Everyone else sees a read-only site.",
      owner_email_ph:"Owner email", owner_send:"Send link 📩",
      owner_check_email:"Check your inbox and tap \"Sign in\". You'll land back here with editing unlocked.",
      owner_ok:"Owner mode on — you can edit ✏️", owner_bad:"Sign-in link expired or invalid",
      owner_bad_email:"Enter a valid email", owner_locked:"Owner mode off — read-only 🔒",
    },
  },
  ar:{
    brand:"بورتفوليو فيصل",
    nav_about:"المُدرّس", nav_activities:"الأنشطة", nav_rules:"اللوائح",
    nav_office:"المكتب", nav_university:"الجامعة", nav_faq:"الأسئلة", nav_contact:"تواصل",
    hero_eyebrow:"جامعة التقنية والعلوم التطبيقية بنزوى · البرنامج التأسيسي",
    hero_title:'تحدّث بكل <span class="grad">ثقة</span>.',
    hero_lead:"أهلًا بك في مقرر الإنجليزية العامة (GE1) بجامعة التقنية والعلوم التطبيقية بنزوى! هذه مساحتك للقراءة والكتابة والاستماع والتحدّث مع الأستاذ يوسف — بالإضافة إلى أنشطة صفّية تجعل التدريب ممتعًا فعلًا.",
    hero_cta1:"جرّب نشاطًا", hero_cta2:"تعرّف على أستاذك",
    inst_name:"الأستاذ يوسف الحارثي", inst_role:"الإنجليزية العامة (GE1) · البرنامج التأسيسي",
    inst_h:"عن أستاذك", inst_p:"يساعد طلاب التأسيس على بناء إنجليزية قوية — قراءةً وكتابةً واستماعًا وتحدّثًا — واجتياز GE1 بثقة.",
    inst_focus_h:"محاور التدريس", inst_courses_h:"الموادّ التي يُدرّسها", inst_timeline_h:"الخبرة والمحطات",
    research:["القراءة والكتابة","الاستماع والتحدّث","القواعد والمفردات","العروض الشفهية","بناء الثقة"],
    courses:["الإنجليزية العامة ١ (GE1)","القراءة والكتابة","الاستماع والتحدّث","القواعد والمفردات المدمجة","العروض الشفهية"],
    timeline:[
      {yr:"٢٠٢٤",h:"مسؤول مسار الخطابة",p:"يقود مسار الخطابة أمام الجمهور لطلاب السنة الأولى."},
      {yr:"٢٠٢٠",h:"مدرّس إنجليزي أول",p:"صمّم موادّ التواصل في برنامج التأسيس."},
      {yr:"٢٠١٦",h:"مدرّس إنجليزي",p:"التحق بالبرنامج التأسيسي في جامعة التقنية والعلوم التطبيقية بنزوى."},
      {yr:"٢٠١٤",h:"ماجستير لسانيات تطبيقية",p:"تخصّص في الطلاقة الشفهية والثقة."},
    ],
    stats:[["١٠","سنوات تدريس"],["١٢٠٠","طالب دربهم"],["٤٠","ورشة قدّمها"],["٣٠٠","خطاب دربه"]],
    act_h:"الأنشطة الصفية", act_p:"عشر أدوات لتهيئة الصف وجعل الجميع يتحدّث — اختر واحدة وشغّلها مباشرةً.",
    activities:[
      {id:"jar",e:"🫙",t:"الجرة العجيبة",d:"رُجّ الجرة واسحب ورقة برقم — بلا تكرار."},
      {id:"ball",e:"🎾",t:"كرة الأسئلة",d:"تبادلوا رمي الكرة — كل طالب يعرّف بنفسه."},
      {id:"qotd",e:"❓",t:"سؤال اليوم",d:"أدِر عجلة الأرقام لاختيار طالب، ثم اطرح سؤالًا."},
      {id:"timer30",e:"⏱️",t:"تحدّي ٣٠ ثانية",d:"سؤال ومؤقّت ثلاثي الأبعاد — استمر بالكلام حتى الجرس."},
      {id:"motivation",e:"🌟",t:"تحفيز اليوم",d:"اقتباسات هادئة وتشجيع لطلاب التأسيس الجدد."},
    ],
    rules_h:"لوائح تحفظ الإنصاف", rules_p:"توقعات واضحة على مستوى الجامعة وداخل صفّنا.",
    rules_uni:"لوائح الجامعة", rules_class:"لوائح الصف",
    uniRules:[
      {i:"🕐",t:"الحضور والإنذارات",d:"إنذار أول عند غياب ٥٪ وثانٍ عند ١٠٪؛ وتجاوز ١٥٪ قد يمنعك من دخول الاختبار النهائي."},
      {i:"📄",t:"الأعذار المقبولة",d:"المرض (شهادة إجازة مرضية)، المواعيد بإثبات، أو وفاة قريب من الدرجة الأولى (وثيقة خلال ٣ أيام)."},
      {i:"⚖️",t:"النزاهة الأكاديمية",d:"أول غش مؤكّد = رسوب في المقرر؛ والثاني = رسوب ومنع من التسجيل الفصل التالي؛ والثالث = الفصل من الجامعة."},
      {i:"📝",t:"قوانين الاختبار",d:"أحضر بطاقة سارية واحضر خلال ٣٠ دقيقة (لا وقت إضافي عند التأخّر)؛ ولا تسلّم إلا بعد نصف الوقت، ومرة واحدة."},
      {i:"🎓",t:"الانضباط والنظام",d:"التزم بالزيّ وقواعد السلوك؛ الحدّ الأقصى للدراسة سنة ونصف (سنتان مع إعادة واحدة)."},
      {i:"🧾",t:"التظلّمات",d:"اطلب مراجعة الدرجة النهائية لدى مركز القبول والتسجيل خلال ٣ أيام عمل من إعلان النتائج."},
    ],
    classRules:[
      {i:"⏰",t:"الالتزام بالوقت",d:"يُؤخذ الحضور في كل محاضرة؛ ولصفوف الساعة ٨ صباحًا، التأخّر ١٠ دقائق فأكثر يُحتسب غيابًا."},
      {i:"🗣️",t:"شارك بفاعلية",d:"شارك في مهام القراءة والكتابة والاستماع والتحدّث — والعروض الشفهية تُحتسب ضمن درجتك."},
      {i:"💻",t:"مواعيد SPARK",d:"أنجز أنشطة SPARK الإلكترونية في وقتها — التسليم المتأخّر يُصفَّر (جزء من التقييم المستمر)."},
      {i:"📧",t:"ابقَ على تواصل",d:"نستخدم MS Teams والبريد — تابعهما باستمرار واستخدم حسابك الجامعي."},
      {i:"📚",t:"اعتنِ بكتبك",d:"استلم كتابَي Pathways من مرشد المجموعة وأعدهما في نهاية الفصل."},
      {i:"💬",t:"اطلب التغذية الراجعة",d:"لك الحق في تغذية راجعة مفصّلة وفي وقتها، ومعرفة معايير التقييم مسبقًا."},
    ],
    office_h:"موقع مكتبي", office_p:"مرّ في الساعات المكتبية — أو احجز موعدًا عبر البريد.",
    officeInfo:[
      ["🏢","المركز","مركز الدراسات التأسيسية (PSC)"],
      ["🚪","المكتب","الطابق الأول، غرفة A-112"],
      ["🕑","الساعات المكتبية","الأحد والأربعاء، ١٠:٠٠–١٢:٠٠"],
      ["💻","كذلك عبر","MS Teams والبريد"],
    ],
    office_dir:"من البوابة الرئيسية: توجّه إلى مبنى PSC، واصعد بالدرج المركزي إلى الطابق الأول، ثم اتجه نحو القاعات — غرفة A-112 هي المكتب المُعلَّم.",
    map_lib:"المكتبة", map_labs:"معامل التحدّث", map_cafe:"الكافيه", map_you:"المبنى A · أنت",
    uni_h:"الجامعة في لمحة", uni_p:"البرنامج التأسيسي العام (GFP) بجامعة التقنية والعلوم التطبيقية بنزوى — جسرك نحو الدراسة الجامعية عبر مركز الدراسات التأسيسية.",
    uniInfo:[
      {i:"🎯",t:"الرؤية والرسالة",d:"تسعى الجامعة للريادة في التعليم التقني والتطبيقي لبناء مجتمع مستدام قائم على المعرفة."},
      {i:"🧩",t:"البرنامج التأسيسي",d:"يهيّئك في اللغة الإنجليزية والمهارات الأساسية قبل مقررات السنة الأولى."},
      {i:"📗",t:"المقرر: GE1",d:"الإنجليزية العامة ١ (FPGE0001): القراءة والكتابة (١٠ ساعات/أسبوع) والاستماع والتحدّث (٨ ساعات/أسبوع)."},
      {i:"📚",t:"الكتب",d:"Pathways Reading & Writing 1 وPathways Listening & Speaking 1، مع قواعد ومفردات مدمجة."},
      {i:"💻",t:"المنصّات",d:"MS Teams والبريد للصف؛ وSPARK وMoodle للدراسة الذاتية."},
      {i:"🎓",t:"الأندية والصوت",d:"نادي الإنجليزية والكتابة أيام الثلاثاء؛ وشارك ملاحظاتك عبر CIMS (صوت الطالب)."},
    ],
    uni_cal_h:"التقويم الأكاديمي",
    calendar:[["الفصل","ربيع ٢٠٢٦"],["فترة الإعفاء","الأسبوعان ١–٢"],["الاختبار النصفي","يُحدَّد لاحقًا"],["الاختبار النهائي","يُحدَّد لاحقًا"]],
    ann_h:"الإعلانات",
    announcements:[
      {tag:"جديد",t:"فترة الإعفاء من الإنجليزية",d:"لديك IELTS/TOEFL ساري (أقل من سنتين)؟ قدّمه في أول أسبوعين للإعفاء."},
      {tag:"تذكير",t:"مواعيد SPARK",d:"أنجز أنشطة SPARK المسندة في وقتها — التسليم المتأخّر يُصفَّر."},
      {tag:"نادٍ",t:"نادي الإنجليزية والكتابة",d:"كل ثلاثاء — حصّة واحدة أسبوعيًا. تعال وتدرّب معنا!"},
    ],
    mat_h:"مواد المحاضرات",
    materials:[
      {i:"📗",t:"Pathways Reading & Writing 1",d:"كتاب المقرر"},
      {i:"📘",t:"Pathways Listening & Speaking 1",d:"كتاب المقرر"},
      {i:"💻",t:"أنشطة SPARK",d:"١٤ مهمة إلكترونية · جزء من التقييم المستمر"},
      {i:"🧑‍🏫",t:"Moodle وMS Teams",d:"صفحة الصف ومنصّة الدراسة"},
    ],
    faq_h:"الأسئلة الشائعة",
    faq:[
      {q:"كيف أنجح في GE1؟",a:"احصل على ٥٠ على الأقل في الدرجة التراكمية (التقييم المستمر + النهائي) و٥٠ على الأقل في الاختبار النهائي."},
      {q:"كيف يُقيَّم GE1؟",a:"التقييم المستمر ٥٠٪ (نصفي ٣٠٪ + عروض شفهية وأنشطة إلكترونية ٢٠٪)، والاختبار النهائي ٥٠٪."},
      {q:"ما حدّ الغياب المسموح؟",a:"إنذار أول عند ٥٪ وثانٍ عند ١٠٪؛ وتجاوز ١٥٪ قد يمنعك من دخول الاختبار النهائي."},
      {q:"هل يمكن إعفائي من الإنجليزية؟",a:"نعم — قدّم شهادة IELTS أو TOEFL iBT سارية (أقل من سنتين) في أول أسبوعين من الفصل."},
      {q:"ماذا لو فاتني تقييم؟",a:"أرسل عذرًا مقبولًا لرئيس وحدة PSC خلال ٣ أيام؛ وتُمنح الحالات المقبولة اختبارًا بديلًا."},
    ],
    contact_h:"تواصل معي", contact_p:"تواصل معي عبر البريد أو في الساعات المكتبية — التفاصيل بالأسفل.",
    contactInfo:[
      ["📧","البريد","yousef.harthi@alnahda.edu.om"],
      ["🏢","المكتب","مبنى التأسيس، A-112"],
      ["🕑","الساعات","الأحد والأربعاء، ١٠:٠٠–١٢:٠٠"],
    ],
    contact_follow:"تابعني",
    socials:[{i:"📸",l:"إنستغرام",u:""},{i:"💼",l:"لينكدإن",u:""},{i:"🐦",l:"إكس (تويتر)",u:""},{i:"🎓",l:"صفحة الجامعة",u:""},{i:"📺",l:"يوتيوب",u:""}],
    f_name:"اسمك", f_email:"بريدك", f_msg:"الرسالة", f_send:"إرسال الرسالة",
    f_hint:"يفتح تطبيق البريد لديك لإرسال الرسالة إلى الأستاذ يوسف.",
    footer:"صُمّم لطلاب التأسيس الذين يتعلّمون بالممارسة. © ٢٠٢٦ مركز الخطابة.",
    ttl:{note:"اكتب عبارتين صحيحتين وواحدة كاذبة، وحدّد الكذبة، ثم ابدأ — والصف يخمّن أي بطاقة هي الكذبة.",
      defaults:["زُرتُ ثلاث دول.","أستطيع طهي وجبة كاملة من الصفر.","قابلتُ شخصًا مشهورًا مرة."], lie:2},
    prompts:["صِف عطلة نهاية أسبوعك المثالية.","تحدّث عن طعام لا تستطيع العيش بدونه.","أقنعنا بزيارة مدينتك.","اشرح روتينك الصباحي.","تحدّث عن هواية تحبها.","صِف أعز أصدقائك.","سوّق لنا تطبيقك المفضّل.","تحدّث عن وظيفة أحلامك.","صِف مكانًا يُسعدك.","تحدّث عن كتاب أو مسلسل أو لعبة تستمتع بها.","ماذا ستفعل بساعة إضافية يوميًا؟","صِف الصف المثالي بالنسبة لك."],
    thisOrThat:[["قهوة","شاي"],["بحر","جبال"],["صباح","ليل"],["كتب","أفلام"],["قطط","كلاب"],["صيف","شتاء"],["اتصال","رسالة"],["حلو","مالح"],["مدينة","ريف"],["تخطيط","مفاجأة"],["موسيقى","بودكاست"],["طبخ","طلب خارجي"],["مبكّر","سهران"],["نافذة","ممر"],["ادّخار","إنفاق"],["تحدّث","كتابة"]],
    qbank:{
      easy:["ما اسمك وماذا يعني؟","من أين أنت؟","ما لونك المفضّل؟","كم عدد إخوتك؟","ما طعامك المفضّل؟","متى تستيقظ؟","ما مادتك المفضّلة؟","شاي أم قهوة؟","ما يومك المفضّل في الأسبوع؟","ما فصلك المفضّل؟","ما هواية تستمتع بها؟","ما حيوانك المفضّل؟","ما فاكهتك المفضّلة؟","هل تحب الرياضة؟ أيّها؟","ما آخر شيء أكلته؟","ما مشروبك المفضّل؟","هل لديك حيوان أليف؟","ما مكانك المفضّل في البيت؟","كيف تصل إلى الجامعة؟","ما تطبيقك المفضّل؟","ما لون حقيبتك؟","ما نكهة الآيس كريم المفضّلة لديك؟","كيف الطقس اليوم؟","كلمة واحدة تصف مزاجك الآن؟","ما رمزك التعبيري المفضّل؟","قراءة أم استماع؟","ما إجازتك المفضّلة؟","ما فطورك المعتاد؟","أي نوع موسيقى تحب؟","ما حيوان أحلامك الأليف؟","ما رقمك المفضّل؟","ما شهرك المفضّل؟","ملابس الصيف أم الشتاء؟","ما مشروبك الصباحي المفضّل؟","ما وجهة سفر أحلامك؟","كيف تحب قضاء الاستراحة؟","ما كلمة تستمتع بنطقها؟"],
      medium:["ما مهارة تتمنى تعلّمها؟","صِف عائلتك بثلاث كلمات.","ما أكثر لحظة تفتخر بها؟","من يلهمك ولماذا؟","ما هدفك لهذا العام؟","صِف يومك المثالي.","ما تحدٍّ تغلّبت عليه؟","ما الذي يصنع صديقًا جيدًا؟","ذكرى مدرسية مفضّلة؟","لو سافرت لأي مكان، أين؟","ما الشيء الذي تجيده؟","ماذا أردت أن تصبح صغيرًا؟","عادة تريد بناءها؟","طريقتك المفضّلة للاسترخاء؟","كتاب أو قصة بقيت معك؟","ماذا يعني لك النجاح؟","شيء صغير يُسعدك؟","كيف تتعامل مع التوتر؟","صفتك المفضّلة في الناس؟","ماذا تقول لنفسك الأصغر؟","مكان تشعر فيه بالهدوء؟","لغة تودّ أن تتحدّثها؟","قضية تهتم بها؟","ما أجمل ما في مدينتك؟","تقليد تحافظ عليه عائلتك؟","شيء جديد جرّبته مؤخرًا؟","ما الذي يحفّزك للدراسة؟","ما صفات المعلّم الجيد برأيك؟","موهبة لا يعرفها الناس عنك؟","شيء في قائمة أمنياتك؟","كيف تحتفل بإنجاز؟","فيلم يجب أن يشاهده الجميع؟","ما أكثر ما يُضحكك؟"],
      fun:["لو ربحت ١٠٠٠ ريال، ما أول شيء ستفعله؟","لو تستطيع السفر لأي دولة، أين ستذهب؟","لو كنت حيوانًا، أيّها؟","أي قوة خارقة تختار؟","أناناس على البيتزا — نعم أم لا؟","لو كان لديك روبوت، ماذا سيفعل؟","ما أغنيتك في الكاريوكي؟","الطيران أم الاختفاء؟","أغرب طعام جرّبته؟","ما رمزك التعبيري الروحي؟","أول شيء تشتريه لو ربحت مليونًا؟","الحليب قبل الحبوب أم بعدها؟","ما خطتك للنجاة من الزومبي؟","لو كان لحياتك شارة موسيقية، ما هي؟","ما أطرف مخاوفك؟","الانتقال الآني أم السفر عبر الزمن؟","ما حركتك في الرقص؟","لو غيّرت اسمك، فماذا سيكون؟","أفضل وجبة خفيفة على الإطلاق؟","لا نوم أم لا أكل؟","كلمة اخترعتها وتستخدمها؟","ما اسمك كبطل خارق؟","أطرف ما حدث هذا الأسبوع؟","تتكلم بلهجات أم تغنّي كل شيء؟","حقيقتك المسلّية عديمة الفائدة؟","ما لعبة أحلامك في مدينة الملاهي؟","فشار حلو أم مالح؟","أي رمز يصف صباحك؟","لو طعام واحد للأبد، ماذا؟","أغنية دخولك للصف؟","أيادٍ صغيرة أم أقدام ضخمة؟","أفضل كرتون على الإطلاق؟","تبادل حياة ليوم — مع من؟","لو كان الصف على القمر، أول ما تفعله؟","ما مساعدك الخارق في أحلامك؟"]
    },
    quotes:["كل خبير كان مبتدئًا يومًا ما.","صوتك مهم — استخدمه.","الخطوات الصغيرة كل يوم تتراكم.","الأخطاء دليل أنك تحاول.","الثقة تكبر بالممارسة.","مكانك هنا.","تقدّم، لا كمال.","تحدّث؛ أفكارك تستحق أن تُسمع.","كن شجاعًا عشر ثوانٍ في كل مرة.","البداية الجديدة هدية — استمتع بها.","أنت قادر على أشياء رائعة.","التوتر يعني أنك تهتم. تنفّس وابدأ.","سؤال جيد واحد قد يغيّر كل شيء.","استمر — نفسك المستقبلية ستشكرك.","النمو يبدأ خارج منطقة راحتك بقليل.","جهدك اليوم يبني غدك.","اللطف يجعل أي صف أفضل.","أنت قادر — كلمة تلو الأخرى."],
    m:{
      draw:"اسحب رقم 🎲", reset:"إعادة 🔄", remaining:"الأوراق المتبقية",
      names_ph:"الصق الأسماء، اسمًا في كل سطر", spin:"أدِر 🎡", make:"كوّن الفِرق 🔀",
      next:"التالي 💬", reveal:"اكشف", start:"ابدأ", score:"النتيجة", time:"الوقت",
      winner:"الفائز", team_red:"الفريق الأحمر", team_blue:"الفريق الأزرق", need_names:"أضف اسمين على الأقل أولًا.",
      wheel_ph:"الخيارات، خيارًا في كل سطر (مثل: نقطة مكافأة، تلميح إضافي…)", again:"مرة أخرى",
      correct:"صحيح!", wrong:"ليس تمامًا.", done:"انتهى!", tap:"انقر 🎯!", go:"انطلق",
      guess_ph:"اكتب حرفًا", hint:"تلميح", won:"أحسنت! 🎉", flip:"اقلب البطاقات لمطابقة الأزواج.",
      moves:"الحركات", pairs:"الأزواج",
      cal_add:"إضافة موعد", cal_save:"حفظ", cal_cancel:"إلغاء",
      cal_saved:"تم تحديث التقويم ✔", cal_note:"عدّل التواريخ والعناوين ثم احفظ. (للأستاذ.)",
      cal_date_ph:"التاريخ", cal_label_ph:"العنوان",
      edit_title:"تعديل بيانات المدرّس", edit_note:"تُحفظ على هذا الجهاز وتظهر للزوّار. (للأستاذ.)",
      e_name:"الاسم", e_role:"المسمّى", e_photo:"الصورة", e_photo_pick:"اختر صورة 📷", e_photo_clear:"إزالة", e_photo_url:"…أو الصق رابط صورة", e_about:"نبذة", e_stats:"الإحصائيات (الرقم ثم التسمية)",
      e_focus:"محاور التدريس (سطر لكل عنصر)", e_mods:"الموادّ (سطر لكل عنصر)",
      e_tl:"المحطات — سطر لكل محطة: السنة | العنوان | الوصف",
      e_addstat:"إضافة إحصائية", e_save:"حفظ التعديلات", e_reset:"استرجاع الافتراضي",
      e_saved:"تم تحديث بيانات المدرّس ✔", e_reset_done:"تمت الاستعادة ✔",
      ttl_play:"ابدأ 🎭", ttl_which:"أيّها الكذبة؟", truth:"حقيقة ✓", lie:"كذبة 🎭",
      timer_start:"ابدأ ⏱️", timer_new:"سؤال جديد", timer_talk:"تحدّث عن هذا لمدة ٣٠ ثانية:", timesup:"انتهى الوقت! ⏰",
      tot_hint:"اختر — لا توجد إجابة خاطئة!", tot_next:"التالي 🔀",
      box_surprise:"فاجئني 🎁", box_hint:"اضغط الصندوق لسؤال أو مهمة عشوائية.",
      lvl_all:"الكل", lvl_easy:"سهل", lvl_med:"متوسط", lvl_fun:"ممتع", q_next:"سؤال آخر", mot_next:"التالي 🌟",
      ball_throw:"ارمِ للتالي 🎾", ball_student:"الطالب", ball_done:"اكتمل الستة — أحسنتم! 🎉",
      ball_say:"عندما تُمسك الكرة، قُل:", ball_items:["اسمك","تخصّصك / مسارك","شيء تحبه"], ball_extra:"ثم أجب عن هذا السؤال:",
      qotd_upto:"الأرقام حتى", qotd_spin:"أدِر 🎯", qotd_new:"سؤال جديد",
      off_title:"تعديل بيانات المكتب", off_note:"تُحفظ على هذا الجهاز وتظهر للطلاب. (للأستاذ.)",
      off_dir:"الإرشادات", off_add:"إضافة سطر", off_saved:"تم تحديث بيانات المكتب ✔", off_reset:"استرجاع الافتراضي", off_reset_done:"تمت الاستعادة ✔",
      soc_title:"تعديل روابط التواصل", soc_note:"أضِف روابطك الحقيقية — الطلاب يضغطونها لفتحها. (للأستاذ.)",
      soc_name:"الاسم (مثل إنستغرام)", soc_url:"الرابط (https://…)", soc_saved:"تم تحديث الروابط ✔", soc_reset_done:"تمت الاستعادة ✔",
      rules_edit_title:"تعديل اللوائح", rules_edit_note:"عدّل لوائح الجامعة والصف. (للأستاذ.)",
      rules_t:"العنوان", rules_d:"التفصيل", rules_saved:"تم تحديث اللوائح ✔", rules_reset_done:"تمت الاستعادة ✔",
      uni_edit_title:"تعديل بيانات الجامعة", uni_edit_note:"عدّل النبذة وبطاقات المعلومات. (للأستاذ.)",
      uni_intro:"النبذة", uni_saved:"تم تحديث بيانات الجامعة ✔", uni_reset_done:"تمت الاستعادة ✔",
      map_title:"تعديل خريطة الحرم", map_note:"ارفع خريطة حرمك، ثم اضغط مكان مكتبك لوضع العلامة.",
      map_pick:"رفع خريطة 🗺️", map_saved:"تم تحديث الخريطة ✔", map_reset_done:"تمت الاستعادة ✔",
      map_zoom_in:"تكبير", map_zoom_out:"تصغير", map_reset_pin:"توسيط الدبّوس",
      map_hint2:"اسحب للتحريك · مرّر أو اقرص للتكبير · انقر لوضع الدبّوس · اسحب الدبّوس للضبط الدقيق.",
      edit_generic_note:"تُحفظ على هذا الجهاز وتظهر للطلاب. (للأستاذ.)",
      ann_edit_title:"تعديل الإعلانات", ann_tag:"الوسم", ann_saved:"تم تحديث الإعلانات ✔",
      mat_edit_title:"تعديل مواد المحاضرات", mat_saved:"تم تحديث المواد ✔",
      faq_edit_title:"تعديل الأسئلة الشائعة", faq_q:"السؤال", faq_a:"الإجابة", faq_saved:"تم تحديث الأسئلة ✔",
      gen_reset_done:"تمت الاستعادة ✔",
      owner_title:"دخول المالك", owner_note:"أدخل إيميل المالك — بنرسل لك رابط دخول آمن لتفعيل التعديل. يرى بقية الزوّار الموقع للقراءة فقط.",
      owner_email_ph:"إيميل المالك", owner_send:"إرسال الرابط 📩",
      owner_check_email:"تفقّدي بريدك الإلكتروني ودوسي على \"Sign in\". بترجعين للموقع ووضع التعديل مفعّل تلقائياً.",
      owner_ok:"وضع المالك مُفعّل — يمكنك التعديل ✏️", owner_bad:"رابط الدخول منتهي أو غير صالح",
      owner_bad_email:"أدخل إيميل صحيح", owner_locked:"وضع المالك مُوقف — قراءة فقط 🔒",
    },
  }
};

let LANG = "en";
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
let INST={};
function loadInst(){ try{ const s=localStorage.getItem("fh_inst"); if(s) INST=JSON.parse(s); }catch(e){} }
function persistInst(){ try{ localStorage.setItem("fh_inst", JSON.stringify(INST)); }catch(e){} }
let OFF={};
function loadOff(){ try{ const s=localStorage.getItem("fh_office"); if(s) OFF=JSON.parse(s); }catch(e){} }
function persistOff(){ try{ localStorage.setItem("fh_office", JSON.stringify(OFF)); }catch(e){} }
let SOC=null;
function loadSoc(){ try{ const s=localStorage.getItem("fh_socials"); if(s) SOC=JSON.parse(s); }catch(e){} }
function persistSoc(){ try{ if(SOC) localStorage.setItem("fh_socials", JSON.stringify(SOC)); else localStorage.removeItem("fh_socials"); }catch(e){} }
let RUL={};
function loadRul(){ try{ const s=localStorage.getItem("fh_rules"); if(s) RUL=JSON.parse(s); }catch(e){} }
function persistRul(){ try{ localStorage.setItem("fh_rules", JSON.stringify(RUL)); }catch(e){} }
let UNI={};
function loadUni(){ try{ const s=localStorage.getItem("fh_uni"); if(s) UNI=JSON.parse(s); }catch(e){} }
function persistUni(){ try{ localStorage.setItem("fh_uni", JSON.stringify(UNI)); }catch(e){} }
let EX={};
function loadEx(){ try{ const s=localStorage.getItem("fh_extra"); if(s) EX=JSON.parse(s); }catch(e){} }
function persistEx(){ try{ localStorage.setItem("fh_extra", JSON.stringify(EX)); }catch(e){} }
const D = ()=> ({ ...DATA[LANG], ...(INST[LANG]||{}), ...(OFF[LANG]||{}), ...(RUL[LANG]||{}), ...(UNI[LANG]||{}), ...(EX[LANG]||{}), ...(SOC?{socials:SOC}:{}) });
let MAP=null;
function loadMap(){ try{ const s=localStorage.getItem("fh_map"); if(s) MAP=JSON.parse(s); }catch(e){} }
function persistMap(){ try{ if(MAP) localStorage.setItem("fh_map",JSON.stringify(MAP)); else localStorage.removeItem("fh_map"); }catch(e){} }
const DEFAULT_MAP={img:"",mx:52,my:58};
function mapData(){ return MAP||DEFAULT_MAP; }
function renderMap(){
  const el=$("#campusMap"); if(!el) return; const md=mapData();
  el.innerHTML = md.img
    ? `<div class="mapfit"><img src="${esc(md.img)}" alt="Campus map"><span class="marker" style="left:${md.mx}%;top:${md.my}%"></span><span class="youhere" style="left:${md.mx}%;top:${md.my}%">${LANG==="ar"?"أنت هنا":"You are here"}</span></div>`
    : `<div style="display:grid;place-items:center;height:100%;color:var(--ink-soft);font-family:var(--fd);text-align:center;padding:24px;line-height:1.8">🗺️<br>${LANG==="ar"?"لا توجد خريطة بعد — اضغط ✏️ لرفع خريطة الحرم":"No map yet — tap ✏️ to upload your campus map"}</div>`;
}
function initials(name){
  let s=String(name||"").replace(/^\s*(mr\.?|mrs\.?|ms\.?|dr\.?|prof\.?|الأستاذة|الأستاذ|د\.?|أ\.?)\s+/i,"").trim();
  const parts=s.split(/\s+/).filter(Boolean).map(w=>w.replace(/^(al|el)-/i,"").replace(/^ال/,""));
  const a=(parts[0]||"")[0]||""; const b=(parts[parts.length-1]||"")[0]||"";
  return (a+(parts.length>1?b:"")).toUpperCase();
}
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ar = n => LANG==="ar" ? String(n).replace(/\d/g,d=>"٠١٢٣٤٥٦٧٨٩"[d]) : String(n);
const PERSON_SVG='<svg viewBox="0 0 24 24" width="54%" height="54%" fill="rgba(255,255,255,.92)" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z"/></svg>';

/* ---- owner mode (edit gate — Supabase magic-link email) ----
   Setup needed once in Supabase (see SUPABASE_SETUP.md):
   1) SUPABASE_URL / SUPABASE_ANON_KEY below (already filled in).
   2) Authentication → URL Configuration → Site URL + Redirect URLs = this site's exact live URL.
   3) Authentication → Users → Add user → create exactly ONE user with the owner's email
      (mark email confirmed). shouldCreateUser:false below means only that email ever
      gets an email — anyone else's address is silently ignored, no error shown either way.
   No email-template editing needed — this uses Supabase's default "Magic Link" email as-is.
*/
const SUPABASE_URL="https://cjytpicdsedcgqauatkp.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_Ly9alyc24InsrFv595busQ_ZuKdKbDI";
const sb=(window.supabase && /^https:\/\//.test(SUPABASE_URL) && SUPABASE_ANON_KEY!=="YOUR_SUPABASE_ANON_KEY")
  ? window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY) : null;

const EDIT_IDS=["instEditBtn","offEditBtn","socEditBtn","rulesEditBtn","uniEditBtn","mapEditBtn","annEditBtn","matEditBtn","faqEditBtn","calEditBtn"];
let OWNER=false;
async function loadOwner(){
  if(!sb) return;
  try{ const {data}=await sb.auth.getSession(); OWNER=!!(data&&data.session); }catch(e){ OWNER=false; }
}
function applyOwner(){ document.documentElement.classList.toggle("owner",OWNER); const b=$("#ownerBtn"); if(b) b.textContent=OWNER?"🔓":"🔒"; }

if(sb){
  sb.auth.onAuthStateChange((event,session)=>{
    if(event==="SIGNED_IN"){ OWNER=!!session; applyOwner(); closeModal(); toast(D().m.owner_ok); }
    if(event==="SIGNED_OUT"){ OWNER=false; applyOwner(); }
  });
}

async function ownerToggle(){
  if(OWNER){
    OWNER=false; try{ if(sb) await sb.auth.signOut(); }catch(e){}
    applyOwner(); toast(D().m.owner_locked); return;
  }
  if(!sb){ toast("⚠️ Supabase not configured yet"); return; }
  const m=D().m;
  openModal(`<h3>🔒 ${m.owner_title}</h3><p class="sub">${m.owner_note}</p>
    <div class="field"><input id="ownerEmail" type="email" placeholder="${m.owner_email_ph}" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--brd);background:var(--glass-2);color:var(--ink);font-family:var(--fb);font-size:1rem"></div>
    <div class="field-inline"><button class="btn mini coral" id="ownerSendBtn">${m.owner_send}</button></div>`);
  setTimeout(()=>{ const i=$("#ownerEmail"); const b=$("#ownerSendBtn");
    if(i){ i.focus(); i.addEventListener("keydown",e=>{ if(e.key==="Enter") ownerSendCode(); }); }
    if(b) b.onclick=ownerSendCode;
  },80);
}

async function ownerSendCode(){
  const email=(($("#ownerEmail")&&$("#ownerEmail").value)||"").trim();
  if(!email||!/^\S+@\S+\.\S+$/.test(email)){ toast(D().m.owner_bad_email); return; }
  const btn=$("#ownerSendBtn"); if(btn){ btn.disabled=true; btn.textContent="…"; }
  try{
    await sb.auth.signInWithOtp({ email, options:{ shouldCreateUser:false, emailRedirectTo: location.origin+location.pathname } });
  }catch(e){ /* رسالة واحدة لكل الحالات — ما نكشف إذا الإيميل مسجّل */ }
  const m=D().m;
  openModal(`<h3>📩 ${m.owner_title}</h3><p class="sub">${m.owner_check_email}</p>`);
}

/* ============================================================
   CALENDAR (editable + persisted)
   ============================================================ */
let calEdit=false, calSaved=null, calBuf=null;
function loadCal(){ try{ const s=localStorage.getItem("fh_cal"); if(s) calSaved=JSON.parse(s); }catch(e){} }
function saveCal(){ try{ localStorage.setItem("fh_cal", JSON.stringify(calSaved)); }catch(e){} }
function calRows(){ return (calSaved || D().calendar).map(r=>r.slice()); }

function renderCalendar(){
  const wrap=$("#calendar"), ctrl=$("#calControls"), m=D().m;
  if(!calEdit){
    wrap.className="grid g4";
    wrap.innerHTML=calRows().map(([l,v])=>
      `<div style="text-align:center;padding:12px;border-radius:14px;background:var(--glass-2);border:1px solid var(--brd-soft)">
        <div class="d" style="color:var(--accent);font-weight:600">${esc(v)}</div>
        <div style="font-size:.82rem;color:var(--ink-soft)">${esc(l)}</div></div>`).join("");
    ctrl.style.display="none"; $("#calEditBtn").textContent="✏️";
  } else {
    wrap.className="";
    wrap.innerHTML=calBuf.map((r,i)=>
      `<div class="cal-row">
        <input class="date" data-i="${i}" data-f="1" value="${esc(r[1])}" placeholder="${m.cal_date_ph}">
        <input data-i="${i}" data-f="0" value="${esc(r[0])}" placeholder="${m.cal_label_ph}">
        <button class="icon-btn" onclick="calDel(${i})" title="Delete">✕</button>
      </div>`).join("");
    $$("#calendar input").forEach(inp=>inp.oninput=e=>{
      calBuf[+e.target.dataset.i][+e.target.dataset.f]=e.target.value; });
    ctrl.style.display="flex";
    ctrl.innerHTML=`<button class="btn mini" onclick="calAdd()">＋ ${m.cal_add}</button>
      <button class="btn mini coral" onclick="calSaveEdit()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="calCancel()">${m.cal_cancel}</button>
      <span class="cal-note">${m.cal_note}</span>`;
    $("#calEditBtn").textContent="✕";
  }
}
function toggleCalEdit(){ if(calEdit){ calCancel(); return; } calBuf=calRows(); calEdit=true; renderCalendar(); }
function calAdd(){ calBuf.push([D().m.cal_label_ph, D().m.cal_date_ph]); renderCalendar(); }
function calDel(i){ calBuf.splice(i,1); renderCalendar(); }
function calSaveEdit(){ calSaved=calBuf.filter(r=>(r[0]+r[1]).trim()); saveCal(); calEdit=false; renderCalendar(); toast(D().m.cal_saved); }
function calCancel(){ calEdit=false; renderCalendar(); }

/* ============================================================
   RENDER
   ============================================================ */
function render(){
  const d = D();
  $$("[data-t]").forEach(el=>{ const v=d[el.dataset.t]; if(v!=null) el.innerHTML=v; });
  $$(".avatar").forEach(a=>{
    a.innerHTML = d.inst_photo
      ? `<img src="${esc(d.inst_photo)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
      : PERSON_SVG;
  });

  $("#stats").innerHTML = d.stats.map(([n,l])=>
    `<div class="glass stat"><div class="num" data-count="${n}">${n}</div><div class="lbl">${l}</div></div>`).join("");
  $("#research").innerHTML = d.research.map(r=>`<span class="pill">${r}</span>`).join("");
  $("#courses").innerHTML = d.courses.map(c=>`<span class="pill">${c}</span>`).join("");
  $("#timeline").innerHTML = d.timeline.map(t=>
    `<div class="tl"><div class="yr">${t.yr}</div><h4>${t.h}</h4><p>${t.p}</p></div>`).join("");

  $("#acts").innerHTML = d.activities.map(a=>
    `<div class="glass act reveal in" onclick="openActivity('${a.id}')"><span class="emoji">${a.e}</span><h3>${a.t}</h3><p>${a.d}</p></div>`).join("");

  const rc = arr => arr.map(r=>`<div class="glass card"><div class="ico">${r.i}</div><h3>${r.t}</h3><p>${r.d}</p></div>`).join("");
  $("#uniRules").innerHTML = rc(d.uniRules);
  $("#classRules").innerHTML = rc(d.classRules);

  $("#officeInfo").innerHTML = d.officeInfo.map(([i,l,v])=>
    `<div class="info-line"><span class="ico">${i}</span><div><div style="color:var(--ink-soft);font-size:.8rem">${l}</div><b>${v}</b></div></div>`).join("");
  renderMap();

  $("#uniInfo").innerHTML = d.uniInfo.map(u=>`<div class="glass card"><div class="ico">${u.i}</div><h3>${u.t}</h3><p>${u.d}</p></div>`).join("");
  renderCalendar();

  $("#announcements").innerHTML = d.announcements.map(a=>
    `<div class="glass card" style="padding:16px"><span class="pill" style="color:var(--accent)">${a.tag}</span><h3 style="margin-top:8px">${a.t}</h3><p>${a.d}</p></div>`).join("");
  $("#materials").innerHTML = d.materials.map(mt=>
    `<div class="glass card" style="padding:16px;display:flex;gap:12px;align-items:center;cursor:pointer" onclick="toast('${LANG==='ar'?'التنزيل تجريبي':'Demo download'} ⬇️')"><div class="ico" style="margin:0">${mt.i}</div><div><b class="d">${mt.t}</b><div style="font-size:.82rem;color:var(--ink-soft)">${mt.d}</div></div></div>`).join("");

  $("#faqList").innerHTML = d.faq.map(f=>
    `<div class="glass faq-item"><button class="faq-q" onclick="toggleFaq(this)">${f.q}<span class="pm">＋</span></button><div class="faq-a"><p>${f.a}</p></div></div>`).join("");

  $("#contactInfo").innerHTML = d.contactInfo.map(([i,l,v])=>
    `<div class="info-line"><span class="ico">${i}</span><div><div style="color:var(--ink-soft);font-size:.8rem">${l}</div><b>${v}</b></div></div>`).join("");
  $("#socials").innerHTML = (d.socials||[]).map(s=>{
    let u=(s.u||"").trim(); if(u && !/^(https?:|mailto:)/i.test(u)) u="https://"+u;
    return u ? `<a class="soc" href="${esc(u)}" target="_blank" rel="noopener" title="${esc(s.l)}">${s.i}</a>`
             : `<a class="soc" href="#" onclick="return false" title="${esc(s.l)}">${s.i}</a>`;
  }).join("");

  observeReveal(); countUp();
}

/* ---------- language ---------- */
function setLang(l){
  LANG=l; calEdit=false;
  const html=document.documentElement;
  html.classList.add("lang-anim","fade");
  html.lang=l; html.dir=(l==="ar"?"rtl":"ltr"); html.classList.toggle("ar",l==="ar");
  $("#langLabel").textContent = l==="ar" ? "EN" : "عربي";
  setTimeout(()=>{ render(); html.classList.remove("fade");
    document.title = l==="ar" ? "الأستاذ يوسف الحارثي — مركز الخطابة" : "Mr. Yousef Al-Harthi — Foundation Speaking Hub"; }, 200);
}
$("#langBtn").onclick = ()=> setLang(LANG==="en"?"ar":"en");

/* ---------- nav ---------- */
$("#searchBtn").onclick = openSearch;
$("#ownerBtn").onclick = ownerToggle;
$("#calEditBtn").onclick = toggleCalEdit;
$("#instEditBtn").onclick = openInstEditor;
$("#offEditBtn").onclick = openOfficeEditor;
$("#socEditBtn").onclick = openSocialEditor;
$("#rulesEditBtn").onclick = openRulesEditor;
$("#uniEditBtn").onclick = openUniEditor;
$("#mapEditBtn").onclick = openMapEditor;
$("#annEditBtn").onclick = openAnnEditor;
$("#matEditBtn").onclick = openMatEditor;
$("#faqEditBtn").onclick = openFaqEditor;
function scrollToId(id){ document.getElementById(id).scrollIntoView({behavior:"smooth"}); }

/* ---------- faq ---------- */
function toggleFaq(btn){
  const it=btn.closest(".faq-item"); const a=it.querySelector(".faq-a"); const open=it.classList.toggle("open");
  a.style.maxHeight = open ? a.scrollHeight+"px" : 0;
}

/* ---------- reveal + count ---------- */
let RO;
function observeReveal(){
  RO && RO.disconnect();
  RO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); RO.unobserve(e.target);} }),{threshold:.12});
  $$(".reveal:not(.in)").forEach(el=>RO.observe(el));
}
function countUp(){
  $$("[data-count]").forEach(el=>{
    const raw=el.dataset.count; const western="0123456789"; const arabic="٠١٢٣٤٥٦٧٨٩";
    const digits=raw.replace(/[٠-٩]/g,c=>western[arabic.indexOf(c)]);
    const m=digits.match(/[\d.]+/); if(!m) return;
    const target=parseFloat(m[0]); const suffix=raw.replace(/[\d٠-٩.]/g,c=> /[.\d]/.test(c)?"":c);
    let cur=0; const dur=1100, t0=performance.now(); const isFloat=digits.includes(".");
    const toDisp=v=>{ let s=isFloat?v.toFixed(1):Math.round(v).toString(); if(LANG==="ar") s=s.replace(/\d/g,dg=>arabic[dg]); return s+suffix; };
    function step(t){ const p=Math.min((t-t0)/dur,1); cur=target*(1-Math.pow(1-p,3)); el.textContent=toDisp(cur); if(p<1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  });
}

/* ---------- toast ---------- */
let toastT;
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),2600); }

/* ---------- contact -> real email (mailto), no auto-reply ---------- */
function submitContact(){
  const d=D(); const to="yousef.harthi@alnahda.edu.om";
  const name=$("#cName").value.trim(), email=$("#cEmail").value.trim(), msg=$("#cMsg").value.trim();
  const subject=encodeURIComponent((LANG==="ar"?"رسالة من ":"Message from ")+(name||(LANG==="ar"?"طالب":"a student")));
  const body=encodeURIComponent(
    (name?`${d.f_name}: ${name}\n`:"")+
    (email?`${d.f_email}: ${email}\n`:"")+
    (msg?`\n${msg}`:""));
  window.location.href=`mailto:${to}?subject=${subject}&body=${body}`;
}

/* ============================================================
   AUDIO
   ============================================================ */
let AC, muted=false;
function beep(freq=440,dur=.08,type="sine",vol=.15){
  if(muted) return;
  try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(),g=AC.createGain();
    o.type=type;o.frequency.value=freq;o.connect(g);g.connect(AC.destination);
    g.gain.setValueAtTime(vol,AC.currentTime); g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+dur);
    o.start();o.stop(AC.currentTime+dur);
  }catch(e){}
}
function winSound(){ [523,659,784,1046].forEach((f,i)=>setTimeout(()=>beep(f,.18,"triangle",.2),i*90)); }

/* ============================================================
   CONFETTI
   ============================================================ */
const confCanvas=$("#confetti"), cctx=confCanvas.getContext("2d"); let confParts=[], confRAF;
function sizeConf(){ confCanvas.width=innerWidth; confCanvas.height=innerHeight; }
function launchConfetti(){
  sizeConf(); confCanvas.style.display="block";
  const cols=["#ef7e56","#305973","#e0a56b","#4ec3c3","#d9634a","#f4c07a"];
  confParts=Array.from({length:150},()=>({x:innerWidth/2,y:innerHeight*.35,
    vx:(Math.random()-.5)*14, vy:Math.random()*-14-4, g:.3+Math.random()*.2,
    s:6+Math.random()*7, r:Math.random()*6, vr:(Math.random()-.5)*.4, c:cols[Math.random()*cols.length|0], life:1}));
  cancelAnimationFrame(confRAF); tickConf();
}
function tickConf(){
  cctx.clearRect(0,0,confCanvas.width,confCanvas.height); let alive=false;
  confParts.forEach(p=>{ p.vy+=p.g; p.x+=p.vx; p.y+=p.vy; p.r+=p.vr; p.life-=.008;
    if(p.life>0 && p.y<confCanvas.height+40){ alive=true;
      cctx.save(); cctx.globalAlpha=Math.max(p.life,0); cctx.translate(p.x,p.y); cctx.rotate(p.r);
      cctx.fillStyle=p.c; cctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6); cctx.restore(); }
  });
  if(alive) confRAF=requestAnimationFrame(tickConf); else confCanvas.style.display="none";
}
addEventListener("resize",()=>{ if(confCanvas.style.display==="block") sizeConf(); });

/* ============================================================
   MODAL + ACTIVITIES
   ============================================================ */
function openModal(html){ $("#modalBody").innerHTML=html; $("#modalBg").classList.add("open"); }
function closeModal(){ $("#modalBg").classList.remove("open"); }
$("#modalBg").addEventListener("click",e=>{ if(e.target===$("#modalBg")) closeModal(); });

function openActivity(id){
  const a=D().activities.find(x=>x.id===id);
  const head=`<h3>${a.e} ${a.t}</h3><p class="sub">${a.d}</p>`;
  if(id==="jar") return actJar(head);
  if(id==="ball") return actBall(head);
  if(id==="qotd") return actQotd(head);
  if(id==="timer30") return act30(head);
  if(id==="motivation") return actMotivation(head);
}

/* ----- Magic Number Jar ----- */
function actJar(head){
  const m=D().m;
  openModal(`${head}
    <div class="jar-wrap"><div class="jar" id="jJar"><div class="body"><div id="jNotes" style="position:absolute;inset:0"></div></div><div class="lid"></div></div></div>
    <div style="text-align:center;color:var(--ink-soft);font-size:.86rem;margin-bottom:12px" id="jCount"></div>
    <div class="result-big" id="jRes"></div>
    <div class="field-inline" style="justify-content:center;margin-top:6px">
      <label>${LANG==='ar'?'حتى الرقم':'Up to'}</label>
      <input id="jMax" type="number" value="30" min="2" max="60" style="width:80px">
      <button class="btn mini" id="jDraw">${m.draw}</button>
      <button class="btn ghost mini" id="jReset">${m.reset}</button>
    </div>`);
  const notesEl=$("#jNotes"), jar=$("#jJar");
  const cols=["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9","#DCEDC8","#F0F4C3","#FFF9C4","#FFECB3","#FFE0B2"];
  let remaining=[], total=30;
  function build(){
    total=Math.max(2,Math.min(60,parseInt($("#jMax").value)||30));
    notesEl.innerHTML=""; remaining=[];
    const perRow=7, rows=Math.ceil(total/perRow), colW=20, rowH=17, cx=80, bottomY=182;
    let num=0;
    for(let r=0;r<rows;r++){ const c=Math.min(perRow,total-num); const w=(c-1)*colW; const sx=cx-w/2-12;
      for(let i=0;i<c;i++){ num++; remaining.push(num);
        const n=document.createElement("div"); n.className="note"; n.dataset.num=num;
        n.style.background=cols[num%cols.length];
        n.style.left=(sx+i*colW+(Math.random()*6-3))+"px";
        n.style.top=(bottomY-r*rowH+(Math.random()*6-3))+"px";
        n.style.setProperty("--rot",(Math.random()*26-13)+"deg");
        n.style.zIndex=num;
        n.style.setProperty("--dx",(Math.random()*120-60)+"px");
        n.style.setProperty("--dy",(Math.random()*-120-30)+"px");
        n.style.setProperty("--dr",(Math.random()*160-80)+"deg");
        notesEl.appendChild(n);
      }
    }
    upd(); $("#jRes").textContent="";
  }
  function upd(){ $("#jCount").textContent=`${D().m.remaining}: ${ar(remaining.length)} / ${ar(total)}`; }
  function draw(){
    if(!remaining.length) return; $("#jDraw").disabled=true; beep(300,.1,"square",.12);
    jar.classList.add("shaking"); let sh=0; const shi=setInterval(()=>{beep(200+Math.random()*200,.05,"square",.08); if(++sh>6)clearInterval(shi);},200);
    setTimeout(()=>{ jar.classList.remove("shaking");
      const idx=Math.floor(Math.random()*remaining.length); const num=remaining.splice(idx,1)[0];
      const paper=[...notesEl.children].find(c=>c.dataset.num==num);
      if(paper){ paper.classList.add("drawn"); setTimeout(()=>paper.remove(),1000); }
      setTimeout(()=>{ $("#jRes").textContent=ar(num); winSound(); launchConfetti(); upd();
        $("#jDraw").disabled=remaining.length===0;
      },600);
    },2200);
  }
  $("#jDraw").onclick=draw; $("#jReset").onclick=build; $("#jMax").onchange=build;
  build();
}

/* ----- Wheel ----- */
function actWheel(head,mode,celebrate){
  const m=D().m;
  const ph = mode==="names" ? m.names_ph : m.wheel_ph;
  const def = mode==="names" ? "Layla\nOmar\nSara\nYousef\nMaryam\nAli"
                             : (LANG==="ar"?"تلميح إضافي\nنقطة مكافأة\nاختر مقعدك\nواجب أخف\nكلمة تشجيع\nمفاجأة":"Extra hint\nBonus point\nPick your seat\nLighter homework\nShout-out\nSurprise");
  openModal(`${head}
    <div class="wheel-wrap"><span class="wheel-ptr">🔻</span><canvas id="wCanvas" width="260" height="260"></canvas><span class="wheel-hub">🎯</span></div>
    <div class="result-big" id="wRes"></div>
    <div style="text-align:center;margin:6px 0 12px"><button class="btn mini" id="wSpin">${m.spin}</button></div>
    <textarea id="wNames" style="width:100%;min-height:96px;padding:12px;border-radius:12px;border:1px solid var(--brd);background:var(--glass-2);color:var(--ink);font-family:var(--fb)" placeholder="${ph}">${def}</textarea>`);
  const cv=$("#wCanvas"), ctx=cv.getContext("2d"); const R=130; let spinning=false;
  const palette=["#ef7e56","#305973","#e0a56b","#4e8fa8","#d9634a","#7a9a8c","#c98f5a","#3f6f88"];
  function items(){ return $("#wNames").value.split("\n").map(s=>s.trim()).filter(Boolean); }
  function drawWheel(){
    const it=items(); ctx.clearRect(0,0,260,260); if(!it.length) return;
    const seg=2*Math.PI/it.length;
    it.forEach((label,i)=>{
      const a0=-Math.PI/2+i*seg;
      ctx.beginPath(); ctx.moveTo(R,R); ctx.arc(R,R,R,a0,a0+seg); ctx.closePath();
      ctx.fillStyle=palette[i%palette.length]; ctx.fill();
      ctx.save(); ctx.translate(R,R); ctx.rotate(a0+seg/2); ctx.textAlign="right"; ctx.fillStyle="#fff";
      ctx.font="600 13px "+(LANG==="ar"?"Cairo":"Space Grotesk"); const t=label.length>12?label.slice(0,11)+"…":label;
      ctx.fillText(t,R-14,5); ctx.restore();
    });
  }
  function spin(){
    const it=items(); if(it.length<2){ toast(m.need_names); return; }
    if(spinning) return; spinning=true; $("#wRes").textContent="";
    const seg=360/it.length; const win=Math.floor(Math.random()*it.length);
    const final=360*5 - (win+0.5)*seg + (Math.random()*seg*.6-seg*.3);
    cv.style.transform=`rotate(${final}deg)`;
    let tk=0; const ti=setInterval(()=>{ beep(500+Math.random()*300,.03,"square",.06); if(++tk>28)clearInterval(ti);},140);
    setTimeout(()=>{ spinning=false; $("#wRes").textContent="🏆 "+it[win];
      winSound(); if(celebrate) launchConfetti();
    },4300);
  }
  $("#wSpin").onclick=spin; $("#wNames").oninput=drawWheel; drawWheel();
}

/* ----- Team Generator ----- */
function actTeams(head){
  const m=D().m;
  openModal(`${head}
    <textarea id="tNames" style="width:100%;min-height:110px;padding:12px;border-radius:12px;border:1px solid var(--brd);background:var(--glass-2);color:var(--ink);font-family:var(--fb)" placeholder="${m.names_ph}">Layla\nOmar\nSara\nYousef\nMaryam\nAli\nHana\nKarim</textarea>
    <div style="text-align:center;margin:12px 0"><button class="btn mini" id="tMake">${m.make}</button></div>
    <div id="tOut"></div>`);
  $("#tMake").onclick=()=>{
    let names=$("#tNames").value.split("\n").map(s=>s.trim()).filter(Boolean);
    if(names.length<2){ toast(m.need_names); return; }
    for(let i=names.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [names[i],names[j]]=[names[j],names[i]]; }
    const red=[],blue=[]; names.forEach((n,i)=>(i%2?blue:red).push(n));
    const card=(cls,title,arr)=>`<div class="team ${cls}"><h4>${title}</h4>${arr.map(n=>`<div class="m"><span class="av">${esc(n[0]||"?")}</span>${esc(n)}</div>`).join("")}</div>`;
    $("#tOut").innerHTML=`<div class="teams">${card("red",m.team_red,red)}${card("blue",m.team_blue,blue)}</div>`;
    beep(660,.12,"triangle",.16); launchConfetti();
  };
}

/* ----- Ice Breaker ----- */
function actIce(head){
  const m=D().m; const list=D().iceBreakers.slice(); let last=-1;
  openModal(`${head}
    <div class="glass" style="padding:26px;text-align:center;min-height:120px;display:grid;place-items:center;font-family:var(--fd);font-size:1.15rem" id="iCard">🎈</div>
    <div style="text-align:center;margin-top:14px"><button class="btn mini" id="iNext">${m.next}</button></div>`);
  function next(){ let i; do{ i=Math.floor(Math.random()*list.length);}while(i===last&&list.length>1); last=i;
    const c=$("#iCard"); c.style.animation="none"; void c.offsetWidth; c.style.animation="popin .35s ease";
    c.textContent=list[i]; beep(520,.09,"sine",.14); }
  $("#iNext").onclick=next; next();
}

/* ----- Quiz ----- */
function actQuiz(head){
  const m=D().m; const qs=D().quiz.slice(); let i=0,score=0,timer,tleft;
  openModal(`${head}
    <div class="qbar"><i id="qFill" style="width:0%"></i></div>
    <div style="display:flex;justify-content:space-between;font-size:.85rem;color:var(--ink-soft);margin-bottom:10px">
      <span id="qNum"></span><span id="qTime"></span></div>
    <div id="qBody"></div>`);
  function show(){
    if(i>=qs.length) return finish();
    const q=qs[i]; tleft=15;
    $("#qFill").style.width=(i/qs.length*100)+"%";
    $("#qNum").textContent=`${ar(i+1)} / ${ar(qs.length)}`;
    $("#qBody").innerHTML=`<h3 style="font-size:1.15rem;margin-bottom:14px">${q.q}</h3>`+
      q.o.map((o,k)=>`<button class="qopt" data-k="${k}">${o}</button>`).join("");
    $$("#qBody .qopt").forEach(b=>b.onclick=()=>answer(parseInt(b.dataset.k),q));
    clearInterval(timer); tick(); timer=setInterval(tick,1000);
  }
  function tick(){ $("#qTime").textContent=`⏱ ${ar(tleft)}${LANG==='ar'?'ث':'s'}`;
    if(tleft<=0){ clearInterval(timer); answer(-1,qs[i]); return;} tleft--; }
  function answer(k,q){
    clearInterval(timer); const btns=$$("#qBody .qopt"); btns.forEach(b=>b.onclick=null);
    btns[q.c] && btns[q.c].classList.add("correct");
    if(k===q.c){ score++; beep(720,.12,"triangle",.18); } else { if(k>=0) btns[k].classList.add("wrong"); beep(200,.16,"sawtooth",.14); }
    setTimeout(()=>{ i++; show(); },1100);
  }
  function finish(){
    $("#qFill").style.width="100%"; $("#qTime").textContent=""; $("#qNum").textContent=m.done;
    $("#qBody").innerHTML=`<div class="result-big">${ar(score)} / ${ar(qs.length)}</div>
      <p style="text-align:center;color:var(--ink-soft)">${score===qs.length?(LANG==='ar'?'ممتاز! درجة كاملة 🌟':'Perfect score! 🌟'):(LANG==='ar'?'أحسنت!':'Well done!')}</p>
      <div style="text-align:center;margin-top:14px"><button class="btn mini" onclick="openActivity('quiz')">${m.again}</button></div>`;
    if(score>=Math.ceil(qs.length*.7)){ winSound(); launchConfetti(); }
  }
  show();
}

/* ----- Guess the Word ----- */
function actGuess(head){
  const m=D().m; const item=D().words[Math.floor(Math.random()*D().words.length)];
  const word=item.w; let guessed=new Set();
  const isAr=LANG==="ar";
  openModal(`${head}
    <div id="gWord" class="d" style="text-align:center;font-size:2rem;letter-spacing:.3em;margin:10px 0;direction:${isAr?'rtl':'ltr'}"></div>
    <div id="gHint" style="text-align:center;color:var(--ink-soft);min-height:24px;margin-bottom:10px"></div>
    <div class="field-inline" style="justify-content:center">
      <input id="gIn" maxlength="1" style="width:70px;text-align:center;font-size:1.2rem;padding:10px;border-radius:12px;border:1px solid var(--brd);background:var(--glass-2);color:var(--ink)" placeholder="${m.guess_ph}">
      <button class="btn mini" id="gGo">${m.reveal}</button>
      <button class="btn ghost mini" id="gHintBtn">${m.hint} 💡</button>
    </div>
    <div id="gMsg" style="text-align:center;margin-top:12px;font-family:var(--fd)"></div>`);
  function draw(){ $("#gWord").textContent=[...word].map(c=>guessed.has(c)?c:"_").join(" "); }
  function guess(){ const v=$("#gIn").value.trim().toUpperCase(); $("#gIn").value=""; if(!v) return;
    if(word.toUpperCase().includes(v)){ [...word].forEach(c=>{ if(c.toUpperCase()===v) guessed.add(c); }); beep(680,.1,"triangle",.15);
      if([...word].every(c=>guessed.has(c))){ $("#gMsg").textContent=m.won; winSound(); launchConfetti(); }
    } else { beep(220,.12,"sawtooth",.12); }
    draw();
  }
  $("#gGo").onclick=guess; $("#gIn").addEventListener("keydown",e=>{if(e.key==="Enter")guess();});
  $("#gHintBtn").onclick=()=>{ $("#gHint").textContent="💡 "+item.h; };
  draw();
}

/* ----- Memory Match ----- */
function actMemory(head){
  const m=D().m; const emo=["🍎","🚀","🎲","🎧","🌟","🧩"]; let deck=[...emo,...emo]
    .map(v=>({v,id:Math.random()})).sort((a,b)=>a.id-b.id);
  let flipped=[],matched=0,moves=0,lock=false;
  openModal(`${head}<p style="text-align:center;color:var(--ink-soft);font-size:.86rem">${m.flip}</p>
    <div id="mGrid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0"></div>
    <div style="text-align:center;color:var(--ink-soft)"><span id="mStat"></span></div>`);
  const grid=$("#mGrid");
  function stat(){ $("#mStat").textContent=`${m.moves}: ${ar(moves)} · ${m.pairs}: ${ar(matched)}/${ar(emo.length)}`; }
  deck.forEach((card,idx)=>{
    const b=document.createElement("button"); b.className="glass"; b.style.cssText="aspect-ratio:1;font-size:1.6rem;border:1px solid var(--brd);cursor:pointer;border-radius:14px;background:var(--glass-2)";
    b.textContent="❓"; b.dataset.idx=idx;
    b.onclick=()=>{ if(lock||flipped.includes(idx)||b.dataset.done) return;
      b.textContent=card.v; flipped.push(idx); beep(500,.06,"sine",.1);
      if(flipped.length===2){ moves++; lock=true; stat();
        const [a,c]=flipped; const ba=grid.children[a], bc=grid.children[c];
        if(deck[a].v===deck[c].v){ ba.dataset.done=bc.dataset.done="1"; ba.style.opacity=bc.style.opacity=".45"; matched++; flipped=[]; lock=false; stat();
          if(matched===emo.length){ winSound(); launchConfetti(); } beep(720,.1,"triangle",.15);
        } else { setTimeout(()=>{ ba.textContent=bc.textContent="❓"; flipped=[]; lock=false; },700); }
      }
    };
    grid.appendChild(b);
  });
  stat();
}

/* ----- Fast Challenge ----- */
function actFast(head){
  const m=D().m; let score=0,tleft=15,timer,running=false;
  openModal(`${head}
    <div style="display:flex;justify-content:space-between;color:var(--ink-soft);margin-bottom:8px"><span id="fScore"></span><span id="fTime"></span></div>
    <div id="fArena" class="glass" style="position:relative;height:240px;border:1px solid var(--brd);border-radius:16px;overflow:hidden"></div>
    <div style="text-align:center;margin-top:12px"><button class="btn mini" id="fStart">${m.go} ⚡</button></div>`);
  const arena=$("#fArena");
  function upd(){ $("#fScore").textContent=`${m.score}: ${ar(score)}`; $("#fTime").textContent=`⏱ ${ar(tleft)}${LANG==='ar'?'ث':'s'}`; }
  function spawn(){ arena.innerHTML=""; const t=document.createElement("button");
    t.textContent="🎯"; t.style.cssText=`position:absolute;font-size:2rem;border:none;background:none;cursor:pointer;left:${Math.random()*80+5}%;top:${Math.random()*70+5}%;transform:translate(-50%,-50%)`;
    t.onclick=()=>{ if(!running)return; score++; beep(700+score*10,.06,"triangle",.15); upd(); spawn(); };
    arena.appendChild(t);
  }
  function start(){ if(running)return; running=true; score=0; tleft=15; upd(); spawn(); $("#fStart").disabled=true;
    timer=setInterval(()=>{ tleft--; upd(); if(tleft<=0){ clearInterval(timer); running=false; arena.innerHTML=`<div style="display:grid;place-items:center;height:100%;font-family:var(--fd);font-size:1.4rem">${m.done} ${m.score} ${ar(score)}</div>`; $("#fStart").disabled=false; winSound(); if(score>=8)launchConfetti(); } },1000);
  }
  $("#fStart").onclick=start; upd();
}

/* ============================================================
   SEARCH
   ============================================================ */
function openSearch(){
  openModal(`<h3>🔍 ${LANG==='ar'?'بحث':'Search'}</h3><p class="sub">${LANG==='ar'?'ابحث عن قسم للانتقال إليه':'Find a section to jump to'}</p>
    <input id="sIn" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--brd);background:var(--glass-2);color:var(--ink);font-family:var(--fb);font-size:1rem" placeholder="${LANG==='ar'?'اكتب هنا…':'Type here…'}" autofocus>
    <div id="sOut" style="margin-top:12px;display:grid;gap:8px"></div>`);
  const secs=[["instructor","👨‍🏫",D().nav_about],["activities","🎮",D().nav_activities],["rules","📋",D().nav_rules],["office","📍",D().nav_office],["university","🏛️",D().nav_university],["faq","❓",D().nav_faq],["contact","✉️",D().nav_contact]];
  function draw(q){ q=(q||"").toLowerCase();
    $("#sOut").innerHTML=secs.filter(s=>!q||s[2].toLowerCase().includes(q)||s[0].includes(q)).map(s=>
      `<button class="qopt" onclick="closeModal();scrollToId('${s[0]}')">${s[1]} ${s[2]}</button>`).join("")||`<p style="color:var(--ink-soft)">${LANG==='ar'?'لا نتائج':'No results'}</p>`;
  }
  $("#sIn").oninput=e=>draw(e.target.value); draw("");
}

/* ============================================================
   INSTRUCTOR EDITOR (Mr. can edit his own info + persist)
   ============================================================ */
function openInstEditor(){
  const d=D(), m=d.m;
  const statRows=(d.stats||[]).map(([n,l])=>
    `<div class="cal-row"><input class="date" value="${esc(n)}"><input value="${esc(l)}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`
    <h3>✏️ ${m.edit_title}</h3>
    <p class="sub">${m.edit_note}</p>
    <div class="field"><label>${m.e_name}</label><input id="eName" value="${esc(d.inst_name)}"></div>
    <div class="field"><label>${m.e_role}</label><input id="eRole" value="${esc(d.inst_role)}"></div>
    <div class="field"><label>${m.e_photo}</label>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <div id="ePhotoPrev" style="width:52px;height:52px;border-radius:50%;flex:0 0 auto;overflow:hidden;border:1px solid var(--brd);background:conic-gradient(from 160deg,var(--rose),var(--accent),var(--blue),var(--rose));display:grid;place-items:center"></div>
        <button type="button" class="btn ghost mini" onclick="document.getElementById('ePhotoFile').click()">${m.e_photo_pick}</button>
        <button type="button" class="btn ghost mini" onclick="clearPhoto()">${m.e_photo_clear}</button>
      </div>
      <input id="ePhoto" type="hidden" value="${esc(d.inst_photo||"")}">
      <input id="ePhotoFile" type="file" accept="image/*" style="display:none" onchange="pickPhoto(event)">
      <input id="ePhotoUrl" value="${d.inst_photo && !/^data:/.test(d.inst_photo) ? esc(d.inst_photo) : ""}" oninput="setPhotoUrl(this.value)" placeholder="${m.e_photo_url}" style="margin-top:8px">
    </div>
    <div class="field"><label>${m.e_about}</label><textarea id="eAbout">${esc(d.inst_p)}</textarea></div>
    <div class="field"><label>${m.e_stats}</label><div id="eStats">${statRows}</div>
      <button class="btn ghost mini" style="margin-top:6px" onclick="eAddStat()">＋ ${m.e_addstat}</button></div>
    <div class="field"><label>${m.e_focus}</label><textarea id="eFocus">${esc(d.research.join("\n"))}</textarea></div>
    <div class="field"><label>${m.e_mods}</label><textarea id="eMods">${esc(d.courses.join("\n"))}</textarea></div>
    <div class="field"><label>${m.e_tl}</label><textarea id="eTl" style="min-height:120px">${esc(d.timeline.map(t=>`${t.yr} | ${t.h} | ${t.p}`).join("\n"))}</textarea></div>
    <div class="field-inline" style="margin-top:8px">
      <button class="btn mini coral" onclick="saveInst()">✔ ${m.e_save}</button>
      <button class="btn ghost mini" onclick="resetInst()">${m.e_reset}</button>
    </div>`);
  _photoPreview(d.inst_photo||"");
}
function eAddStat(){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input class="date" value=""><input value=""><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#eStats").appendChild(div); }
function saveInst(){
  const o={};
  o.inst_name=$("#eName").value.trim()||D().inst_name;
  o.inst_role=$("#eRole").value.trim();
  o.inst_photo=$("#ePhoto").value.trim();
  o.inst_p=$("#eAbout").value.trim();
  o.stats=[...$("#eStats").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return [i[0].value.trim(),i[1].value.trim()];}).filter(s=>s[0]||s[1]);
  o.research=$("#eFocus").value.split("\n").map(s=>s.trim()).filter(Boolean);
  o.courses=$("#eMods").value.split("\n").map(s=>s.trim()).filter(Boolean);
  o.timeline=$("#eTl").value.split("\n").map(s=>s.trim()).filter(Boolean).map(line=>{const p=line.split("|").map(x=>x.trim());return {yr:p[0]||"",h:p[1]||"",p:p[2]||""};});
  INST[LANG]=o; persistInst(); render(); closeModal(); toast(D().m.e_saved);
}
function resetInst(){ delete INST[LANG]; persistInst(); render(); closeModal(); toast(D().m.e_reset_done); }

/* photo upload / preview */
function _photoPreview(v){ const p=$("#ePhotoPrev"); if(!p) return; p.innerHTML = v ? `<img src="${esc(v)}" alt="" style="width:100%;height:100%;object-fit:cover">` : PERSON_SVG; }
function setPhotoUrl(v){ v=(v||"").trim(); $("#ePhoto").value=v; _photoPreview(v); }
function clearPhoto(){ $("#ePhoto").value=""; if($("#ePhotoUrl")) $("#ePhotoUrl").value=""; _photoPreview(""); }
function pickPhoto(e){
  const f=e.target.files && e.target.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=()=>{ const img=new Image();
    img.onload=()=>{ const S=256, c=document.createElement("canvas"); c.width=c.height=S; const ctx=c.getContext("2d");
      const scale=Math.max(S/img.width,S/img.height), w=img.width*scale, h=img.height*scale;
      ctx.drawImage(img,(S-w)/2,(S-h)/2,w,h);
      let data; try{ data=c.toDataURL("image/jpeg",0.82); }catch(err){ data=r.result; }
      $("#ePhoto").value=data; if($("#ePhotoUrl")) $("#ePhotoUrl").value=""; _photoPreview(data);
    };
    img.onerror=()=>toast(LANG==="ar"?"تعذّر قراءة الصورة":"Couldn't read that image");
    img.src=r.result;
  };
  r.readAsDataURL(f);
}

/* ============================================================
   NEW ACTIVITIES
   ============================================================ */
/* Two Truths & a Lie */
function actTwoTruths(head){
  const t=D().ttl, m=D().m;
  openModal(`${head}
    <p class="sub" style="margin-top:-8px">${t.note}</p>
    <div class="field"><label>1</label><input id="ttl1" value="${esc(t.defaults[0])}"></div>
    <div class="field"><label>2</label><input id="ttl2" value="${esc(t.defaults[1])}"></div>
    <div class="field"><label>3</label><input id="ttl3" value="${esc(t.defaults[2])}"></div>
    <div class="field"><label>${m.ttl_which}</label>
      <div class="field-inline">
        <label><input type="radio" name="ttlLie" value="0" ${t.lie===0?"checked":""}> 1</label>
        <label><input type="radio" name="ttlLie" value="1" ${t.lie===1?"checked":""}> 2</label>
        <label><input type="radio" name="ttlLie" value="2" ${t.lie===2?"checked":""}> 3</label>
      </div></div>
    <div style="text-align:center"><button class="btn mini" id="ttlPlay">${m.ttl_play}</button></div>
    <div class="ttl-cards" id="ttlCards"></div>`);
  $("#ttlPlay").onclick=()=>{
    const s=[$("#ttl1").value,$("#ttl2").value,$("#ttl3").value].map(x=>x.trim());
    if(s.filter(Boolean).length<3){ toast(D().m.need_names); return; }
    const lie=+((document.querySelector('input[name=ttlLie]:checked')||{value:"2"}).value);
    const order=[0,1,2].sort(()=>Math.random()-.5);
    $("#ttlCards").innerHTML=order.map(i=>`<div class="ttl-card" data-lie="${i===lie?1:0}">${esc(s[i])}</div>`).join("");
    $$("#ttlCards .ttl-card").forEach(c=>c.onclick=()=>{
      if(c.classList.contains("truth")||c.classList.contains("lie")) return;
      c.classList.add("reveal");
      setTimeout(()=>{
        if(c.dataset.lie==="1"){ c.classList.add("lie"); c.innerHTML+=' <b>— '+D().m.lie+'</b>'; winSound(); launchConfetti(); }
        else { c.classList.add("truth"); c.innerHTML+=' <b>— '+D().m.truth+'</b>'; beep(600,.1,"sine",.14); }
      },250);
    });
  };
}

/* 30-Second Challenge (3D ring timer) */
function act30(head){
  const m=D().m; const prompts=D().prompts; let t=30, timer=null, running=false;
  const pick=()=>prompts[Math.floor(Math.random()*prompts.length)];
  openModal(`${head}
    <div class="glass" style="padding:14px;text-align:center;font-family:var(--fd);font-weight:600" id="p30"></div>
    <div class="ring-wrap"><div class="ring" id="ring30"><span class="num" id="num30">30</span></div></div>
    <div class="field-inline" style="justify-content:center">
      <button class="btn mini" id="s30">${m.timer_start}</button>
      <button class="btn ghost mini" id="n30">${m.timer_new}</button>
    </div>`);
  const ring=$("#ring30"), num=$("#num30");
  function setPrompt(p){ $("#p30").innerHTML=`${m.timer_talk}<br><span style="color:var(--accent)">${p}</span>`; }
  function paint(){ if(!ring) return; ring.style.background=`conic-gradient(var(--accent) ${(t/30)*360}deg, var(--glass-2) 0)`; if(num) num.textContent=ar(t); }
  function start(){ if(running) return; running=true; $("#s30").disabled=true; t=30; paint();
    timer=setInterval(()=>{ if(!$("#num30")){ clearInterval(timer); return; }
      t--; paint(); if(t<=5&&t>0) beep(520,.06,"square",.13);
      if(t<=0){ clearInterval(timer); running=false; $("#s30").disabled=false; end(); } },1000); }
  function end(){ const f=$("#flash"); f.classList.remove("go"); void f.offsetWidth; f.classList.add("go");
    beep(140,.5,"sawtooth",.2); ring.style.animation="shake .5s"; num.textContent="⏰"; setTimeout(()=>ring.style.animation="",600);
    launchConfetti(); toast(m.timesup); }
  function nw(){ if(running) return; setPrompt(pick()); t=30; paint(); }
  $("#s30").onclick=start; $("#n30").onclick=nw; setPrompt(pick()); paint();
}

/* This or That? */
function actThisOrThat(head){
  const m=D().m; const pairs=D().thisOrThat.slice(); let last=-1;
  openModal(`${head}<p class="sub" style="margin-top:-8px">${m.tot_hint}</p>
    <div class="tot" id="totBox"></div>
    <div style="text-align:center;margin-top:16px"><button class="btn mini" id="totNext">${m.tot_next}</button></div>`);
  function load(){ let i; do{ i=Math.floor(Math.random()*pairs.length);}while(i===last&&pairs.length>1); last=i;
    const box=$("#totBox"); box.removeAttribute("data-done");
    box.innerHTML=`<div class="opt">${esc(pairs[i][0])}</div><div class="opt">${esc(pairs[i][1])}</div>`;
    $$("#totBox .opt").forEach(o=>o.onclick=()=>{ if(box.dataset.done) return; box.dataset.done="1";
      $$("#totBox .opt").forEach(x=>x.classList.add(x===o?"pick":"dim")); beep(620,.08,"sine",.14); });
  }
  $("#totNext").onclick=load; load();
}

/* Random Challenge (3D box) */
function actRandomBox(head){
  const m=D().m; const q=D().qbank; const pool=[...D().prompts,...q.easy,...q.fun]; let spinning=false;
  openModal(`${head}<p class="sub" style="margin-top:-8px">${m.box_hint}</p>
    <div class="rcube-wrap"><div class="rcube" id="rcube">${Array(6).fill('<span class="rface">🎁</span>').join("")}</div></div>
    <div class="result-big" id="rboxRes" style="font-size:1.15rem;line-height:1.5;min-height:52px"></div>
    <div style="text-align:center"><button class="btn mini" id="rboxBtn">${m.box_surprise}</button></div>`);
  const cube=$("#rcube");
  function go(){ if(spinning) return; spinning=true; const r=$("#rboxRes"); if(r) r.textContent="";
    cube.classList.remove("spin"); void cube.offsetWidth; cube.classList.add("spin");
    let tk=0; const ti=setInterval(()=>{ beep(400+Math.random()*300,.03,"square",.06); if(++tk>9)clearInterval(ti); },110);
    setTimeout(()=>{ spinning=false; const rr=$("#rboxRes"); if(rr) rr.textContent="🎁 "+pool[Math.floor(Math.random()*pool.length)]; beep(700,.12,"triangle",.16); },1150);
  }
  cube.onclick=go; $("#rboxBtn").onclick=go;
}

/* Icebreaker Question Bank (100+, by level) */
function actQBank(head){
  const m=D().m; const bank=D().qbank; let level="all", last=-1;
  openModal(`${head}
    <div class="field-inline" style="justify-content:center;flex-wrap:wrap" id="qlvl">
      <button class="btn ghost mini" data-l="all">${m.lvl_all}</button>
      <button class="btn ghost mini" data-l="easy">${m.lvl_easy}</button>
      <button class="btn ghost mini" data-l="medium">${m.lvl_med}</button>
      <button class="btn ghost mini" data-l="fun">${m.lvl_fun}</button>
    </div>
    <div class="glass" style="padding:28px 22px;text-align:center;min-height:130px;display:grid;place-items:center;font-family:var(--fd);font-size:1.2rem;line-height:1.5" id="qCard">💬</div>
    <div style="text-align:center;margin-top:14px"><button class="btn mini" id="qNext">${m.q_next}</button></div>`);
  function list(){ return level==="all" ? [...bank.easy,...bank.medium,...bank.fun] : bank[level]; }
  function next(){ const L=list(); let i; do{ i=Math.floor(Math.random()*L.length);}while(i===last&&L.length>1); last=i;
    const c=$("#qCard"); if(!c) return; c.style.animation="none"; void c.offsetWidth; c.style.animation="popin .35s ease"; c.textContent=L[i]; beep(520,.08,"sine",.13); }
  function setActive(b){ $$("#qlvl button").forEach(x=>x.style.opacity=x===b?"1":".5"); }
  $$("#qlvl button").forEach(b=>b.onclick=()=>{ level=b.dataset.l; setActive(b); last=-1; next(); });
  setActive($("#qlvl button[data-l=all]"));
  $("#qNext").onclick=next; next();
}

/* Daily Motivation */
function actMotivation(head){
  const m=D().m; const qs=D().quotes.slice(); let last=-1, auto;
  openModal(`${head}
    <div class="glass mot-card"><div class="mot-bg">
      <span style="background:var(--rose);left:-20px;top:-20px;width:130px;height:130px"></span>
      <span style="background:var(--blue);right:-20px;bottom:-20px;width:150px;height:150px;animation-delay:-6s"></span></div>
      <div class="mot-quote" id="motQ">🌟</div></div>
    <div style="text-align:center;margin-top:14px"><button class="btn mini" id="motNext">${m.mot_next}</button></div>`);
  function next(){ const q=$("#motQ"); if(!q){ clearInterval(auto); return; }
    let i; do{ i=Math.floor(Math.random()*qs.length);}while(i===last&&qs.length>1); last=i;
    q.style.opacity=0; setTimeout(()=>{ if($("#motQ")){ q.textContent="“"+qs[i]+"”"; q.style.opacity=1; } },250); beep(560,.09,"sine",.12); }
  $("#motNext").onclick=next; next(); auto=setInterval(next,6500);
}

/* Question Ball 🎾 */
function actBall(head){
  const m=D().m; const total=6; let n=1;
  const q=D().qbank; const pool=[...q.easy,...q.medium,...q.fun].sort(()=>Math.random()-.5); let qi=0;
  openModal(`${head}
    <div style="text-align:center"><span class="ball" id="ball">🎾</span></div>
    <div style="text-align:center;font-family:var(--fd);font-weight:700;font-size:1.15rem;margin:4px 0" id="ballCount"></div>
    <div class="glass" style="padding:18px;margin-top:8px">
      <div style="color:var(--ink-soft);font-size:.9rem;margin-bottom:8px">${m.ball_say}</div>
      <ol style="margin:0;padding-inline-start:22px;line-height:2.1;font-family:var(--fd)">
        ${m.ball_items.map(x=>`<li>${x}</li>`).join("")}
      </ol>
      <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--brd-soft)">
        <div style="color:var(--ink-soft);font-size:.9rem;margin-bottom:6px">${m.ball_extra}</div>
        <div class="d" style="font-size:1.08rem;color:var(--accent);line-height:1.5" id="ballQ"></div>
      </div>
    </div>
    <div style="text-align:center;margin-top:16px"><button class="btn mini" id="ballBtn">${m.ball_throw}</button></div>`);
  const ball=$("#ball");
  function showQ(){ const el=$("#ballQ"); if(!el) return; el.style.animation="none"; void el.offsetWidth; el.style.animation="popin .35s ease"; el.textContent=pool[qi % pool.length]; }
  function upd(){ $("#ballCount").textContent=`${m.ball_student} ${ar(n)} / ${ar(total)}`; }
  function toss(){
    ball.style.animation="none"; void ball.offsetWidth; ball.style.animation="toss .8s ease"; beep(520,.1,"sine",.15);
    if(n>=total){ setTimeout(()=>{ $("#ballCount").textContent=m.ball_done; if($("#ballQ"))$("#ballQ").textContent=""; winSound(); launchConfetti(); },420); $("#ballBtn").disabled=true; return; }
    setTimeout(()=>{ n++; qi++; upd(); showQ(); },420);
  }
  $("#ballBtn").onclick=toss; upd(); showQ();
}

/* Question of the Day ❓ (numbers wheel 1..N + question pool) */
function actQotd(head){
  const m=D().m; const q=D().qbank; const pool=[...q.easy,...q.medium,...q.fun]; let spinning=false, lastQ=-1;
  openModal(`${head}
    <div class="wheel-wrap"><span class="wheel-ptr">🔻</span><canvas id="qwCanvas" width="260" height="260"></canvas><span class="wheel-hub">🎓</span></div>
    <div class="result-big" id="qwNum" style="font-size:2.6rem;min-height:44px"></div>
    <div class="glass" style="padding:20px;text-align:center;font-family:var(--fd);font-size:1.18rem;line-height:1.5;min-height:70px;display:grid;place-items:center" id="qwQ">💬</div>
    <div class="field-inline" style="justify-content:center;margin-top:12px">
      <label>${m.qotd_upto}</label><input id="qwMax" type="number" value="30" min="2" max="60" style="width:76px">
      <button class="btn mini" id="qwSpin">${m.qotd_spin}</button>
      <button class="btn ghost mini" id="qwNew">${m.qotd_new}</button>
    </div>`);
  const cv=$("#qwCanvas"), ctx=cv.getContext("2d"); const R=130;
  const palette=["#ef7e56","#305973","#e0a56b","#4e8fa8","#d9634a","#7a9a8c","#c98f5a","#3f6f88"];
  function count(){ return Math.max(2,Math.min(60,parseInt($("#qwMax").value)||30)); }
  function drawWheel(){ const N=count(); ctx.clearRect(0,0,260,260); const seg=2*Math.PI/N;
    for(let i=0;i<N;i++){ const a0=-Math.PI/2+i*seg;
      ctx.beginPath(); ctx.moveTo(R,R); ctx.arc(R,R,R,a0,a0+seg); ctx.closePath(); ctx.fillStyle=palette[i%palette.length]; ctx.fill();
      ctx.save(); ctx.translate(R,R); ctx.rotate(a0+seg/2); ctx.textAlign="right"; ctx.fillStyle="#fff";
      ctx.font="700 "+(N>22?"11":"14")+"px Space Grotesk"; ctx.fillText(String(i+1),R-10,4); ctx.restore(); }
  }
  function newQ(){ const c=$("#qwQ"); if(!c) return; let i; do{ i=Math.floor(Math.random()*pool.length);}while(i===lastQ&&pool.length>1); lastQ=i;
    c.style.animation="none"; void c.offsetWidth; c.style.animation="popin .35s ease"; c.textContent=pool[i]; }
  function spin(){ if(spinning) return; const N=count(); spinning=true; if($("#qwNum")) $("#qwNum").textContent="";
    const seg=360/N; const win=Math.floor(Math.random()*N); const final=360*5-(win+0.5)*seg+(Math.random()*seg*.5-seg*.25);
    cv.style.transform=`rotate(${final}deg)`;
    let tk=0; const ti=setInterval(()=>{ beep(520+Math.random()*260,.03,"square",.06); if(++tk>28)clearInterval(ti); },140);
    setTimeout(()=>{ spinning=false; if($("#qwNum")) $("#qwNum").textContent="🎓 "+ar(win+1); newQ(); winSound(); },4300);
  }
  $("#qwMax").onchange=drawWheel; $("#qwSpin").onclick=spin; $("#qwNew").onclick=newQ; drawWheel(); newQ();
}

/* Office editor (Mr. can edit office details) */
function openOfficeEditor(){
  const d=D(), m=d.m;
  const rows=(d.officeInfo||[]).map(([ic,l,v])=>
    `<div class="cal-row" data-ic="${esc(ic)}"><span style="width:24px;text-align:center">${ic}</span><input class="date" value="${esc(l)}"><input value="${esc(v)}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`
    <h3>📍 ${m.off_title}</h3><p class="sub">${m.off_note}</p>
    <div id="offRows">${rows}</div>
    <button class="btn ghost mini" style="margin:6px 0 14px" onclick="offAdd()">＋ ${m.off_add}</button>
    <div class="field"><label>${m.off_dir}</label><textarea id="offDir" style="min-height:90px">${esc(d.office_dir)}</textarea></div>
    <div class="field-inline">
      <button class="btn mini coral" onclick="saveOffice()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="resetOffice()">${m.off_reset}</button>
    </div>`);
}
function offAdd(){ const div=document.createElement("div"); div.className="cal-row"; div.dataset.ic="📍";
  div.innerHTML='<span style="width:24px;text-align:center">📍</span><input class="date" value=""><input value=""><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#offRows").appendChild(div); }
function saveOffice(){
  const rows=[...$("#offRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return [r.dataset.ic||"📍",i[0].value.trim(),i[1].value.trim()];}).filter(x=>x[1]||x[2]);
  OFF[LANG]={officeInfo:rows, office_dir:$("#offDir").value.trim()}; persistOff(); render(); closeModal(); toast(D().m.off_saved);
}
function resetOffice(){ delete OFF[LANG]; persistOff(); render(); closeModal(); toast(D().m.off_reset_done); }

/* Social links editor (site owner) */
function openSocialEditor(){
  const d=D(), m=d.m;
  const rows=(d.socials||[]).map(s=>
    `<div class="cal-row"><input value="${esc(s.i)}" style="width:46px;text-align:center;padding:9px 4px"><input class="date" value="${esc(s.l)}" placeholder="${m.soc_name}"><input value="${esc(s.u)}" placeholder="${m.soc_url}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`
    <h3>🔗 ${m.soc_title}</h3><p class="sub">${m.soc_note}</p>
    <div id="socRows">${rows}</div>
    <button class="btn ghost mini" style="margin:6px 0 14px" onclick="socAdd()">＋ ${m.off_add}</button>
    <div class="field-inline">
      <button class="btn mini coral" onclick="saveSoc()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="resetSoc()">${m.off_reset}</button>
    </div>`);
}
function socAdd(){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input value="🔗" style="width:46px;text-align:center;padding:9px 4px"><input class="date" value="" placeholder="'+D().m.soc_name+'"><input value="" placeholder="'+D().m.soc_url+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#socRows").appendChild(div); }
function saveSoc(){
  SOC=[...$("#socRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {i:(i[0].value.trim()||"🔗"),l:i[1].value.trim(),u:i[2].value.trim()};}).filter(x=>x.l||x.u);
  persistSoc(); render(); closeModal(); toast(D().m.soc_saved);
}
function resetSoc(){ SOC=null; persistSoc(); render(); closeModal(); toast(D().m.soc_reset_done); }

/* Guidelines editor (university + classroom rules) */
function openRulesEditor(){
  const d=D(), m=d.m;
  const rows=arr=>(arr||[]).map(r=>
    `<div class="cal-row"><input value="${esc(r.i)}" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="${esc(r.t)}" placeholder="${m.rules_t}"><input value="${esc(r.d)}" placeholder="${m.rules_d}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`
    <h3>📋 ${m.rules_edit_title}</h3><p class="sub">${m.rules_edit_note}</p>
    <b class="d" style="display:block;margin-bottom:8px">${d.rules_uni}</b>
    <div id="ruUni">${rows(d.uniRules)}</div>
    <button class="btn ghost mini" style="margin:4px 0 16px" onclick="ruAdd('ruUni')">＋ ${m.off_add}</button>
    <b class="d" style="display:block;margin-bottom:8px">${d.rules_class}</b>
    <div id="ruClass">${rows(d.classRules)}</div>
    <button class="btn ghost mini" style="margin:4px 0 16px" onclick="ruAdd('ruClass')">＋ ${m.off_add}</button>
    <div class="field-inline">
      <button class="btn mini coral" onclick="saveRules()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="resetRules()">${m.off_reset}</button>
    </div>`);
}
function ruAdd(id){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input value="•" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="" placeholder="'+D().m.rules_t+'"><input value="" placeholder="'+D().m.rules_d+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#"+id).appendChild(div); }
function _ruCollect(id){ return [...$("#"+id).querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {i:(i[0].value.trim()||"•"),t:i[1].value.trim(),d:i[2].value.trim()};}).filter(x=>x.t||x.d); }
function saveRules(){ RUL[LANG]={uniRules:_ruCollect("ruUni"), classRules:_ruCollect("ruClass")}; persistRul(); render(); closeModal(); toast(D().m.rules_saved); }
function resetRules(){ delete RUL[LANG]; persistRul(); render(); closeModal(); toast(D().m.rules_reset_done); }

/* University info editor */
function openUniEditor(){
  const d=D(), m=d.m;
  const rows=(d.uniInfo||[]).map(u=>
    `<div class="cal-row"><input value="${esc(u.i)}" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="${esc(u.t)}" placeholder="${m.rules_t}"><input value="${esc(u.d)}" placeholder="${m.rules_d}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`
    <h3>🏛️ ${m.uni_edit_title}</h3><p class="sub">${m.uni_edit_note}</p>
    <div class="field"><label>${m.uni_intro}</label><textarea id="uniIntro">${esc(d.uni_p)}</textarea></div>
    <div id="uniRows">${rows}</div>
    <button class="btn ghost mini" style="margin:4px 0 14px" onclick="uniAdd()">＋ ${m.off_add}</button>
    <div class="field-inline">
      <button class="btn mini coral" onclick="saveUni()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="resetUni()">${m.off_reset}</button>
    </div>`);
}
function uniAdd(){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input value="🏛️" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="" placeholder="'+D().m.rules_t+'"><input value="" placeholder="'+D().m.rules_d+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#uniRows").appendChild(div); }
function saveUni(){
  const info=[...$("#uniRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {i:(i[0].value.trim()||"🏛️"),t:i[1].value.trim(),d:i[2].value.trim()};}).filter(x=>x.t||x.d);
  UNI[LANG]={uni_p:$("#uniIntro").value.trim(), uniInfo:info}; persistUni(); render(); closeModal(); toast(D().m.uni_saved);
}
function resetUni(){ delete UNI[LANG]; persistUni(); render(); closeModal(); toast(D().m.uni_reset_done); }

/* Campus map editor (upload image + place marker) */
let _ME=null, _mapSetImg=null;
function openMapEditor(){
  const m=D().m; const md=mapData(); _ME={mx:md.mx,my:md.my,img:md.img};
  openModal(`
    <h3>🗺️ ${m.map_title}</h3><p class="sub">${m.map_note}</p>
    <div class="mapvp" id="mapvp">
      <div class="mapstage" id="mapstage"><img id="mapimg" alt=""><span class="mapmarker" id="mapmarker"><span class="pulse"></span><span class="pin"></span><span class="hit" id="maphit"></span></span></div>
      <div class="mapxhair" id="mapxhair"><i class="xv"></i><i class="xh"></i></div>
      <div class="mapmag" id="mapmag"></div>
      <div class="mapzoom"><button id="mzIn" title="${m.map_zoom_in}">+</button><button id="mzOut" title="${m.map_zoom_out}">−</button><button id="mzPin" title="${m.map_reset_pin}">⌖</button></div>
      <div class="mapcoords" id="mapcoords"></div>
    </div>
    <p class="map-hint">${m.map_hint2}</p>
    <input id="mapFile" type="file" accept="image/*" style="display:none" onchange="mapPick(event)">
    <div class="field-inline" style="margin-top:10px">
      <button class="btn ghost mini" onclick="document.getElementById('mapFile').click()">${m.map_pick}</button>
      <button class="btn mini coral" onclick="saveMap()">✔ ${m.cal_save}</button>
      <button class="btn ghost mini" onclick="resetMap()">${m.off_reset}</button>
    </div>`);
  mapEditor();
}

/* interactive editor engine */
function mapEditor(){
  const vp=$("#mapvp"), stage=$("#mapstage"), img=$("#mapimg"), marker=$("#mapmarker"),
        hit=$("#maphit"), xhair=$("#mapxhair"), mag=$("#mapmag"), coords=$("#mapcoords");
  let natW=0, natH=0, scale=1, base=1, tx=0, ty=0, ready=false;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const emptyMsg=()=>{ vp.querySelector(".mapempty")&&vp.querySelector(".mapempty").remove();
    const d=document.createElement("div"); d.className="mapempty";
    d.style.cssText="position:absolute;inset:0;display:grid;place-items:center;color:var(--ink-soft);text-align:center;padding:20px;font-family:var(--fd);z-index:2";
    d.textContent=LANG==="ar"?"ارفع صورة الخريطة أولًا 🗺️":"Upload a map image first 🗺️"; vp.appendChild(d); };

  _mapSetImg=(data)=>{ _ME.img=data; load(); };
  function load(){
    const em=vp.querySelector(".mapempty"); if(em) em.remove();
    if(!_ME.img){ marker.style.display="none"; coords.textContent=""; emptyMsg(); return; }
    marker.style.display="";
    img.onload=()=>{ natW=img.naturalWidth; natH=img.naturalHeight;
      stage.style.width=natW+"px"; stage.style.height=natH+"px";
      const vw=vp.clientWidth, vh=vp.clientHeight;
      base=Math.min(vw/natW, vh/natH); scale=base;
      tx=(vw-natW*scale)/2; ty=(vh-natH*scale)/2; ready=true; apply(true);
    };
    img.src=_ME.img;
  }
  function apply(pop){
    stage.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
    marker.style.left=_ME.mx+"%"; marker.style.top=_ME.my+"%";
    marker.style.transform=`translate(-50%,-100%) scale(${1/scale})`;
    coords.textContent=`📍 x ${_ME.mx.toFixed(1)}% · y ${_ME.my.toFixed(1)}%  ·  ${scale/base>1.02?(scale/base).toFixed(1)+"×":"1×"}`;
    if(pop){ marker.classList.remove("pop"); void marker.offsetWidth; marker.classList.add("pop"); }
  }
  function zoomAt(cx,cy,factor){
    if(!ready) return;
    const ns=clamp(scale*factor, base*0.6, base*8);
    const ix=(cx-tx)/scale, iy=(cy-ty)/scale;
    tx=cx-ix*ns; ty=cy-iy*ns; scale=ns; apply();
  }
  function ptToImg(cx,cy){ return { x:clamp((cx-tx)/scale/natW*100,0,100), y:clamp((cy-ty)/scale/natH*100,0,100) }; }
  function markerScreen(){ return { x:tx+(_ME.mx/100*natW)*scale, y:ty+(_ME.my/100*natH)*scale }; }
  function showXhair(on){ xhair.classList.toggle("on",on); }
  function moveXhair(){ const s=markerScreen(); xhair.querySelector(".xv").style.left=s.x+"px"; xhair.querySelector(".xh").style.top=s.y+"px"; }
  function showMag(on){ mag.classList.toggle("on",on); }
  function updateMag(){
    if(!_ME.img) return;
    const D2=112, F=2.4, bw=natW*base*F, bh=natH*base*F;
    mag.style.backgroundImage=`url(${_ME.img})`; mag.style.backgroundSize=`${bw}px ${bh}px`;
    mag.style.backgroundPosition=`${D2/2 - (_ME.mx/100*bw)}px ${D2/2 - (_ME.my/100*bh)}px`;
    const s=markerScreen(); let mx=s.x-D2/2, my=s.y-D2-18;
    mx=clamp(mx,6,vp.clientWidth-D2-6); if(my<6) my=s.y+18;
    mag.style.left=mx+"px"; mag.style.top=my+"px";
  }

  /* pointer handling: pan vs tap vs marker-drag */
  const pts=new Map(); let mode=null, startX=0, startY=0, lastX=0, lastY=0, moved=false, pinchD=0, raf=0;
  function schedule(){ if(raf) return; raf=requestAnimationFrame(()=>{ raf=0; apply(); if(mode==="marker"){ moveXhair(); updateMag(); } }); }

  hit.addEventListener("pointerdown",e=>{ if(!ready) return; e.stopPropagation();
    mode="marker"; marker.classList.add("drag"); showXhair(true); showMag(true); moveXhair(); updateMag();
    hit.setPointerCapture&&hit.setPointerCapture(e.pointerId); e.preventDefault();
  });

  vp.addEventListener("pointerdown",e=>{
    if(!ready) return; pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(mode==="marker") return;
    if(pts.size===2){ mode="pinch"; const a=[...pts.values()]; pinchD=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y); return; }
    mode="pan"; moved=false; vp.classList.add("grabbing");
    const r=vp.getBoundingClientRect(); startX=lastX=e.clientX-r.left; startY=lastY=e.clientY-r.top;
  },{passive:true});

  window.addEventListener("pointermove",e=>{
    if(!ready) return; const r=vp.getBoundingClientRect(); const cx=e.clientX-r.left, cy=e.clientY-r.top;
    if(mode==="marker"){ const p=ptToImg(cx,cy); _ME.mx=+p.x.toFixed(2); _ME.my=+p.y.toFixed(2); schedule(); return; }
    if(pts.has(e.pointerId)) pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(mode==="pinch" && pts.size>=2){ const a=[...pts.values()]; const nd=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
      const mid={x:(a[0].x+a[1].x)/2-r.left,y:(a[0].y+a[1].y)/2-r.top}; if(pinchD>0) zoomAt(mid.x,mid.y,nd/pinchD); pinchD=nd; return; }
    if(mode==="pan"){ const dx=cx-lastX, dy=cy-lastY; if(Math.abs(cx-startX)+Math.abs(cy-startY)>6) moved=true;
      tx+=dx; ty+=dy; lastX=cx; lastY=cy; schedule(); }
  },{passive:true});

  function endPointer(e){
    if(mode==="marker"){ mode=null; marker.classList.remove("drag"); showXhair(false); showMag(false); apply(true); }
    else if(mode==="pan"){ const r=vp.getBoundingClientRect();
      if(!moved){ const p=ptToImg((e.clientX||0)-r.left,(e.clientY||0)-r.top); _ME.mx=+p.x.toFixed(2); _ME.my=+p.y.toFixed(2); apply(true); }
      mode=null; vp.classList.remove("grabbing");
    }
    pts.delete(e.pointerId); if(pts.size<2 && mode==="pinch") mode=null;
  }
  window.addEventListener("pointerup",endPointer);
  window.addEventListener("pointercancel",e=>{ pts.delete(e.pointerId); if(mode){ mode=null; marker.classList.remove("drag"); showXhair(false); showMag(false); vp.classList.remove("grabbing"); } });

  vp.addEventListener("wheel",e=>{ if(!ready) return; e.preventDefault(); const r=vp.getBoundingClientRect();
    zoomAt(e.clientX-r.left,e.clientY-r.top, e.deltaY<0?1.12:1/1.12); },{passive:false});

  $("#mzIn").onclick=()=>zoomAt(vp.clientWidth/2,vp.clientHeight/2,1.35);
  $("#mzOut").onclick=()=>zoomAt(vp.clientWidth/2,vp.clientHeight/2,1/1.35);
  $("#mzPin").onclick=()=>{ if(!ready) return; _ME.mx=50; _ME.my=50; const vw=vp.clientWidth,vh=vp.clientHeight;
    scale=base; tx=(vw-natW*scale)/2; ty=(vh-natH*scale)/2; apply(true); };

  load();
}

function mapPick(e){ const f=e.target.files&&e.target.files[0]; if(!f) return; const r=new FileReader();
  r.onload=()=>{ const im=new Image();
    im.onload=()=>{ const MAXW=1600, sc=Math.min(1,MAXW/im.width), w=Math.round(im.width*sc), h=Math.round(im.height*sc);
      const c=document.createElement("canvas"); c.width=w; c.height=h; const cx=c.getContext("2d");
      cx.imageSmoothingQuality="high"; cx.drawImage(im,0,0,w,h);
      let data; try{ data=c.toDataURL("image/jpeg",0.88); }catch(err){ data=r.result; }
      if(_mapSetImg) _mapSetImg(data); };
    im.onerror=()=>toast(LANG==="ar"?"تعذّر قراءة الصورة":"Couldn't read that image"); im.src=r.result; };
  r.readAsDataURL(f); }
function saveMap(){ if(!_ME) return; MAP={img:_ME.img,mx:_ME.mx,my:_ME.my}; persistMap(); renderMap(); closeModal(); toast(D().m.map_saved); }
function resetMap(){ MAP=null; persistMap(); renderMap(); closeModal(); toast(D().m.map_reset_done); }

/* Announcements / Materials / FAQ editors */
function _exReset(key){ if(EX[LANG]){ delete EX[LANG][key]; if(!Object.keys(EX[LANG]).length) delete EX[LANG]; } persistEx(); render(); closeModal(); toast(D().m.gen_reset_done); }

function openAnnEditor(){
  const d=D(), m=d.m;
  const rows=(d.announcements||[]).map(a=>
    `<div class="cal-row"><input class="date" value="${esc(a.tag)}" placeholder="${m.ann_tag}"><input value="${esc(a.t)}" placeholder="${m.rules_t}"><input value="${esc(a.d)}" placeholder="${m.rules_d}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`<h3>📢 ${m.ann_edit_title}</h3><p class="sub">${m.edit_generic_note}</p>
    <div id="annRows">${rows}</div>
    <button class="btn ghost mini" style="margin:4px 0 14px" onclick="annAdd()">＋ ${m.off_add}</button>
    <div class="field-inline"><button class="btn mini coral" onclick="saveAnn()">✔ ${m.cal_save}</button><button class="btn ghost mini" onclick="_exReset('announcements')">${m.off_reset}</button></div>`);
}
function annAdd(){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input class="date" value="" placeholder="'+D().m.ann_tag+'"><input value="" placeholder="'+D().m.rules_t+'"><input value="" placeholder="'+D().m.rules_d+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#annRows").appendChild(div); }
function saveAnn(){ const arr=[...$("#annRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {tag:i[0].value.trim()||"•",t:i[1].value.trim(),d:i[2].value.trim()};}).filter(x=>x.t||x.d); EX[LANG]={...(EX[LANG]||{}),announcements:arr}; persistEx(); render(); closeModal(); toast(D().m.ann_saved); }

function openMatEditor(){
  const d=D(), m=d.m;
  const rows=(d.materials||[]).map(x=>
    `<div class="cal-row"><input value="${esc(x.i)}" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="${esc(x.t)}" placeholder="${m.rules_t}"><input value="${esc(x.d)}" placeholder="${m.rules_d}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`<h3>📁 ${m.mat_edit_title}</h3><p class="sub">${m.edit_generic_note}</p>
    <div id="matRows">${rows}</div>
    <button class="btn ghost mini" style="margin:4px 0 14px" onclick="matAdd()">＋ ${m.off_add}</button>
    <div class="field-inline"><button class="btn mini coral" onclick="saveMat()">✔ ${m.cal_save}</button><button class="btn ghost mini" onclick="_exReset('materials')">${m.off_reset}</button></div>`);
}
function matAdd(){ const div=document.createElement("div"); div.className="cal-row";
  div.innerHTML='<input value="📄" style="width:44px;text-align:center;padding:9px 4px"><input class="date" value="" placeholder="'+D().m.rules_t+'"><input value="" placeholder="'+D().m.rules_d+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#matRows").appendChild(div); }
function saveMat(){ const arr=[...$("#matRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {i:(i[0].value.trim()||"📄"),t:i[1].value.trim(),d:i[2].value.trim()};}).filter(x=>x.t||x.d); EX[LANG]={...(EX[LANG]||{}),materials:arr}; persistEx(); render(); closeModal(); toast(D().m.mat_saved); }

function openFaqEditor(){
  const d=D(), m=d.m;
  const rows=(d.faq||[]).map(f=>
    `<div class="cal-row" style="flex-wrap:wrap"><input value="${esc(f.q)}" style="flex:1 1 100%" placeholder="${m.faq_q}"><input value="${esc(f.a)}" style="flex:1 1 100%" placeholder="${m.faq_a}"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button></div>`).join("");
  openModal(`<h3>❓ ${m.faq_edit_title}</h3><p class="sub">${m.edit_generic_note}</p>
    <div id="faqRows">${rows}</div>
    <button class="btn ghost mini" style="margin:4px 0 14px" onclick="faqAdd()">＋ ${m.off_add}</button>
    <div class="field-inline"><button class="btn mini coral" onclick="saveFaq()">✔ ${m.cal_save}</button><button class="btn ghost mini" onclick="_exReset('faq')">${m.off_reset}</button></div>`);
}
function faqAdd(){ const div=document.createElement("div"); div.className="cal-row"; div.style.flexWrap="wrap";
  div.innerHTML='<input value="" style="flex:1 1 100%" placeholder="'+D().m.faq_q+'"><input value="" style="flex:1 1 100%" placeholder="'+D().m.faq_a+'"><button class="icon-btn" onclick="this.parentElement.remove()">✕</button>';
  $("#faqRows").appendChild(div); }
function saveFaq(){ const arr=[...$("#faqRows").querySelectorAll(".cal-row")].map(r=>{const i=r.querySelectorAll("input");return {q:i[0].value.trim(),a:i[1].value.trim()};}).filter(x=>x.q||x.a); EX[LANG]={...(EX[LANG]||{}),faq:arr}; persistEx(); render(); closeModal(); toast(D().m.faq_saved); }

/* ============================================================
   HERO tilt + particles
   ============================================================ */
const tilt=$("#tilt");
addEventListener("mousemove",e=>{
  if(matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const w=innerWidth,h=innerHeight; const rx=(e.clientY/h-.5)*-10, ry=(e.clientX/w-.5)*10;
  tilt.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
});

const stars=$("#stars"), sctx=stars.getContext("2d"); let pts=[];
function sizeStars(){ stars.width=innerWidth; stars.height=innerHeight;
  pts=Array.from({length:Math.min(70,innerWidth/18|0)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.8+.4})); }
function tickStars(){ sctx.clearRect(0,0,stars.width,stars.height);
  const dark=document.documentElement.classList.contains("dark");
  sctx.fillStyle=dark?"rgba(255,131,100,.55)":"rgba(255,131,100,.5)";
  pts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>stars.width)p.vx*=-1; if(p.y<0||p.y>stars.height)p.vy*=-1;
    sctx.beginPath(); sctx.arc(p.x,p.y,p.r,0,7); sctx.fill(); });
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){ const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=dx*dx+dy*dy;
    if(d<10000){ sctx.strokeStyle=(dark?"rgba(255,131,100,":"rgba(255,131,100,")+(1-d/10000)*.25+")"; sctx.lineWidth=.6;
      sctx.beginPath(); sctx.moveTo(pts[i].x,pts[i].y); sctx.lineTo(pts[j].x,pts[j].y); sctx.stroke(); } }
  requestAnimationFrame(tickStars);
}
addEventListener("resize",sizeStars);
sizeStars(); tickStars();

/* cursor spotlight on activity cards */
document.addEventListener("pointermove",e=>{ const el=e.target.closest?e.target.closest(".act"):null; if(!el) return;
  const r=el.getBoundingClientRect(); el.style.setProperty("--mx",(e.clientX-r.left)+"px"); el.style.setProperty("--my",(e.clientY-r.top)+"px"); });

/* ---------- init ---------- */
loadCal();
loadInst();
loadOff();
loadSoc();
loadRul();
loadUni();
loadMap();
loadEx();
render();
EDIT_IDS.forEach(id=>{ const b=document.getElementById(id); if(b) b.classList.add("ownerbtn"); });
applyOwner();
loadOwner().then(applyOwner); /* async: confirms a real Supabase session, then re-applies once resolved */
