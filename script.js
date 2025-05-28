const bookData = {
  physics: {
    "Physical Quantities and Units": ["Measurement", "Errors", "Unit Systems"],
    "Vector": ["Vector Addition", "Vector Resolution", "Vector Components"],
    "Motion": ["Speed and Velocity", "Acceleration", "Equations of Motion"],
    "Newton’s Laws of Motion": ["First Law", "Second Law", "Third Law", "Friction"],
    "Work, Power and Energy": ["Work", "Power", "Kinetic and Potential Energy", "Conservation of Energy"],
    "Gravitation": ["Newton’s Law of Gravitation", "Acceleration due to Gravity", "Kepler’s Laws"],
    "Properties of Matter": ["Elasticity", "Viscosity", "Surface Tension", "Fluid Pressure"],
    "Heat and Thermodynamics": ["Thermal Expansion", "Heat Transfer", "Laws of Thermodynamics", "Heat Engines"],
    "Wave": ["Types of Waves", "Wave Properties", "Interference", "Standing Waves"],
    "Sound": ["Nature of Sound", "Speed of Sound", "Doppler Effect", "Resonance"],
    "Light": ["Reflection", "Refraction", "Lenses and Mirrors", "Optical Instruments"],
    "Static Electricity": ["Charge", "Coulomb's Law", "Electric Field and Potential", "Capacitors"],
    "Current Electricity": ["Current", "Ohm’s Law", "Series and Parallel Circuits", "Electrical Power"],
    "Magnetism": ["Magnetic Fields", "Magnetism of Earth", "Electromagnetism", "Ampere’s Law"],
    "Modern Physics": ["Photoelectric Effect", "X-rays", "Atomic Models", "Radioactivity"]
  },
  chemistry: {
    "Qualitative Chemistry": ["Acid-Base Reactions", "Salt Formation", "Precipitation Reactions"],
    "Periodic Properties and Chemical Bonding": ["Atomic Radius", "Ionization Energy", "Covalent and Ionic Bonds"],
    "Chemical Reactions": ["Types of Reactions", "Reaction Rates", "Chemical Equilibrium"],
    "Acid-Base and Salt": ["pH Scale", "Neutralization", "Buffer Solutions"],
    "Applied Chemistry": ["Industrial Applications", "Environmental Impact", "Green Chemistry"],
    "Environmental Chemistry": ["Air Pollution", "Water Pollution", "Waste Management"],
    "Organic Chemistry": ["Hydrocarbons", "Functional Groups", "Organic Reactions"],
    "Quantitative Chemistry": ["Mole Concept", "Stoichiometry", "Concentration Calculations"],
    "Electrochemistry": ["Redox Reactions", "Electrochemical Cells", "Electrolysis"],
    "Chemistry in Industry": ["Fertilizer Production", "Petrochemicals", "Pharmaceuticals"]
  },
  math: {
    "Matrix and Determinant": ["Types of Matrices", "Determinant Properties", "Inverse of Matrices"],
    "Straight Line": ["Slope", "Equation of Line", "Angle Between Lines"],
    "Circle": ["Standard Equation", "Tangents", "Chord Properties"],
    "Trigonometric Ratios of Compound Angles": ["Addition Formulas", "Subtraction Formulas", "Multiple Angles"],
    "Differentiation": ["Limits", "Derivatives", "Applications of Derivatives"],
    "Integration": ["Indefinite Integrals", "Definite Integrals", "Area Under Curve"],
    "Complex Number": ["Algebra of Complex Numbers", "Polar Form", "De Moivre's Theorem"],
    "Polynomials": ["Roots of Equations", "Remainder Theorem", "Factor Theorem"],
    "Conic Sections": ["Parabola", "Ellipse", "Hyperbola"],
    "Inverse Trigonometric Functions": ["Principal Values", "Properties", "Graphs"],
    "Statics": ["Forces", "Equilibrium", "Center of Gravity"],
    "Dynamics": ["Kinematics", "Newton's Laws", "Projectile Motion"]
  },
  biology: {
    "Cell and its Structure": ["Cell Types", "Organelles", "Cell Membrane"],
    "Cell Division": ["Mitosis", "Meiosis", "Cell Cycle"],
    "Cell Chemistry": ["Biomolecules", "Enzymes", "Metabolism"],
    "Microorganisms": ["Bacteria", "Viruses", "Fungi"],
    "Algae and Fungi": ["Types of Algae", "Fungal Structure", "Reproduction"],
    "Bryophyta and Pteridophyta": ["Mosses", "Ferns", "Life Cycle"],
    "Gymnosperms and Angiosperms": ["Seed Plants", "Flowering Plants", "Pollination"],
    "Tissues and Tissue Systems": ["Plant Tissues", "Animal Tissues", "Functions"],
    "Animal Diversity and Classification": ["Invertebrates", "Vertebrates", "Taxonomy"],
    "Introduction to Animals": ["Hydra", "Grasshoper", "Rohu", "Animal Body Plans", "Symmetry", "Development"],
    "Digestion and Absorption": ["Digestive System", "Enzymes", "Nutrient Absorption"],
    "Blood Circulation": ["Heart Structure", "Blood Vessels", "Circulatory Pathways"],
    "Respiration and Breathing": ["Respiratory System", "Gas Exchange", "Breathing Mechanism"],
    "Excretion and Osmoregulation": ["Kidneys", "Nephrons", "Water Balance"],
    "Movement and Locomotion": ["Muscles", "Skeletal System", "Types of Movement"]
  },
  bangla: {
    "মূল গ্রন্থাংশ": [
      "বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন – বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "অপরিচিতা – রবীন্দ্রনাথ ঠাকুর",
      "সাহিত্যে খেলা – প্রমথ চৌধুরী",
      "বিলাসী – শরৎচন্দ্র চট্টোপাধ্যায়",
      "অর্ধাঙ্গী – বেগম রোকেয়া",
      "যৌবনের গান – কাজী নজরুল ইসলাম",
      "জীবন ও বৃক্ষ – মোতাহের হোসেন চৌধুরী",
      "গন্তব্য কাবুল – সৈয়দ মুজতবা আলী",
      "মাসি-পিসি – মানিক বন্দ্যোপাধ্যায়",
      "কপিলদাস মুর্মুর শেষ কাজ – শওকত আলী",
      "রেইনকোট – আখতারুজ্জামান ইলিয়াস",
      "নেকলেস – গী দ্য মোপাসাঁ",
      "ঋতু বর্ণন – আলাওল",
      "বিভীষণের প্রতি মেঘনাদ – মাইকেল মধুসূদন দত্ত",
      "সোনার তরী – রবীন্দ্রনাথ ঠাকুর",
      "বিদ্রোহী – কাজী নজরুল ইসলাম",
      "সুচেতনা – জীবনানন্দ দাশ",
      "প্রতিদান – জসীমউদ্দীন",
      "তাহারেই পড়ে মনে – সুফিয়া কামাল",
      "পদ্মা – ফররুখ আহমদ",
      "ফেব্রুয়ারি ১৯৬৯ – শামসুর রাহমান",
      "আঠারো বছর বয়স – সুকান্ত ভট্টাচার্য",
      "আমি কিংবদন্তির কথা বলছি – আবু জাফর ওবায়দুল্লাহ",
      "প্রত্যাবর্তনের লজ্জা – আল মাহমুদ"
    ],
    "উপন্যাস": [
      "লালসালু – সৈয়দ ওয়ালীউল্লাহ"
    ],
    "নাটক": [
      "সিরাজউদ্দৌলা – সিকান্দার আবু জাফর"
    ],
    "ব্যাকরণ": [
      "বাংলা উচ্চারণের নিয়ম",
      "বাংলা বানানের নিয়ম",
      "বাংলা ভাষার ব্যাকরণিক শব্দশ্রেণী",
      "বাংলা শব্দগঠন (উপসর্গ, প্রত্যয় ও সমাস)",
      "বাক্যতত্ত্ব",
      "অপপ্রয়োগ ও শুদ্ধপ্রয়োগ"
    ],
    "রচনামূলক": [
      "পারিভাষিক শব্দ ও অনুবাদ",
      "দিনলিপি ও অভিজ্ঞতা বর্ণনা",
      "ভাষণ রচনা ও প্রতিবেদন",
      "বৈদ্যুতিক চিঠি, পত্রলিখন ও আবেদনপত্র",
      "সারাংশ, সারমর্ম, সারসংক্ষেপ ও ভাবসম্প্রসারণ",
      "সংলাপ ও ক্ষুদে গল্প রচনা",
      "প্রবন্ধ ও নিবন্ধ"
    ]
  },
  english: {
    "Unit 1: People or Institutions Making History": [
      "Lesson 1: Nelson Mandela, from Apartheid Fighter to President",
      "Lesson 2: Working Children",
      "Lesson 3: The Unforgettable History"
    ],
    "Unit 2: Events and Festivals": [
      "Lesson 1: Pahela Baishakh in Dhaka",
      "Lesson 2: The 16th December",
      "Lesson 3: Ekushey February"
    ],
    "Unit 3: Glimpses of the Past": [
      "Lesson 1: The Story of Lipi",
      "Lesson 2: The Story of the Statue of Liberty",
      "Lesson 3: The Story of the Nobel Prize"
    ],
    "Unit 4: Are We Aware?": [
      "Lesson 1: A Sad Day",
      "Lesson 2: A Firefighter",
      "Lesson 3: A Heartbreaking Incident"
    ],
    "Unit 5: Nature and Environment": [
      "Lesson 1: The Storm",
      "Lesson 2: The Greener the Better",
      "Lesson 3: Save the Sundarbans"
    ],
    "Unit 6: Health and Hygiene": [
      "Lesson 1: Health is Wealth",
      "Lesson 2: Hygiene",
      "Lesson 3: A Healthy Life"
    ],
    "Unit 7: Learning a Language": [
      "Lesson 1: Learning English",
      "Lesson 2: Learning English through Stories",
      "Lesson 3: Learning English through Songs"
    ],
    "Unit 8: Pastimes": [
      "Lesson 1: Pastimes",
      "Lesson 2: Pastimes in the Past",
      "Lesson 3: Pastimes Today"
    ],
    "Unit 9: Food and Nutrition": [
      "Lesson 1: Food Pyramid",
      "Lesson 2: Nutrition Facts",
      "Lesson 3: Junk Food"
    ],
    "Unit 10: Dreams": [
      "Lesson 1: I Have a Dream",
      "Lesson 2: Dream Big",
      "Lesson 3: Dreams Come True"
    ],
    "Grammar": [
      "Articles",
      "Prepositions",
      "Right Forms of Verbs",
      "Subject-Verb Agreement",
      "Modifiers",
      "Sentence Connectors",
      "Punctuation",
      "Narration (Direct and Indirect Speech)",
      "Voice (Active and Passive)",
      "Conditional Sentences",
      "Sentence Transformation",
      "Tag Questions"
    ]
  },
  gk: {
    "Bangladesh Affairs": ["Liberation War", "Constitution", "Geography"],
    "International Affairs": ["UN", "International Organizations", "World History"],
    "Current Affairs": ["National Elections (BD)", "Economic Development (BD)", "Tech Innovations (BD)"]
  },
  ict: {
    "তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত": [
      "তথ্য ও যোগাযোগ প্রযুক্তির ধারণা",
      "তথ্য প্রযুক্তির ইতিহাস",
      "বাংলাদেশে তথ্য প্রযুক্তির উন্নয়ন",
      "তথ্য প্রযুক্তির ব্যবহার ও প্রভাব"
    ],
    "কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং": [
      "কমিউনিকেশন সিস্টেমের মৌলিক ধারণা",
      "নেটওয়ার্কের প্রকারভেদ",
      "নেটওয়ার্ক টপোলজি",
      "ইন্টারনেট ও ইন্টারনেট প্রোটোকল"
    ],
    "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস": [
      "সংখ্যা পদ্ধতির প্রকারভেদ",
      "বাইনারি, অক্টাল ও হেক্সাডেসিমাল সংখ্যা",
      "সংখ্যা রূপান্তর",
      "লজিক গেট ও বুলিয়ান অ্যালজেবরা",
      "ডিজিটাল ডিভাইসের প্রকারভেদ"
    ],
    "ওয়েব ডিজাইন পরিচিতি ও HTML": [
      "ওয়েব ডিজাইনের মৌলিক ধারণা",
      "HTML এর পরিচিতি",
      "HTML ট্যাগ ও উপাদান",
      "ওয়েবপেজ নির্মাণের প্রাথমিক ধাপ"
    ],
    "প্রোগ্রামিং ভাষা": [
      "প্রোগ্রামিং ভাষার প্রকারভেদ",
      "সিউডোকোড ও ফ্লোচার্ট",
      "প্রোগ্রামিং ভাষার মৌলিক উপাদান",
      "সাধারণ প্রোগ্রামিং সমস্যা ও সমাধান"
    ],
    "ডেটাবেজ ম্যানেজমেন্ট সিস্টেম": [
      "ডেটাবেজের ধারণা",
      "ডেটাবেজ মডেল",
      "রিলেশনাল ডেটাবেজ",
      "SQL এর মৌলিক ব্যবহার",
      "ডেটাবেজ ডিজাইন ও বাস্তবায়ন"
    ]
  }
}

function updateChapters() {
  const book = document.getElementById("bookSelect").value;
  const chapterSelect = document.getElementById("chapterSelect");
  const topicSelect = document.getElementById("topicSelect");

  chapterSelect.innerHTML = '<option disabled selected>Select Chapter</option>';
  topicSelect.innerHTML = '<option disabled selected>Select Topic</option>';

  const chapters = Object.keys(bookData[book]);
  chapters.forEach(ch => {
    const opt = document.createElement("option");
    opt.value = ch;
    opt.textContent = ch;
    chapterSelect.appendChild(opt);
  });
}

function updateTopics() {
  const book = document.getElementById("bookSelect").value;
  const chapter = document.getElementById("chapterSelect").value;
  const topicSelect = document.getElementById("topicSelect");

  topicSelect.innerHTML = '<option disabled selected>Select Topic</option>';

  bookData[book][chapter].forEach(tp => {
    const opt = document.createElement("option");
    opt.value = tp;
    opt.textContent = tp;
    topicSelect.appendChild(opt);
  });
}

async function generateQuiz() {
  const book = document.getElementById("bookSelect").value;
  const chapter = document.getElementById("chapterSelect").value;
  const topic = document.getElementById("topicSelect").value;
  const count = parseInt(document.getElementById("questionCount").value);
  const options = parseInt(document.getElementById("optionCount").value);

  
  
  //Testing keys
  function generateUserMessage(count, topic, chapter, book) {
    const subjectText = `${topic} ${chapter} ${book}`.toLowerCase();
    const isMathRelated = /physics|chemistry|math|ict/.test(subjectText);
    const isEnglishNeed = /english/.test(book) ? " in English" : " in bangla";
    
    const requirements = isMathRelated
          ? `- Include both theoretical (conceptual/memorization-based) and mathematical (problem-solving) questions.
      - At least 30% of the questions should be mathematical.
      - Try to Include mathematical qustion as possible
      - Use realistic values and proper units (e.g. m/s, degree, kg) in mathematical questions.
      - Difficult Question must need with mathematical things`
          : `- Include only conceptual and theoretical questions.
      - Avoid complex calculations or mathematical problem-solving.`;
  
    return `Generate ${count} multiple-choice questions with ${options} options from the topic "${topic}" under the chapter "${chapter}" from the "${book}" textbook for HSC Level Board exam questions from the year 2000 to 2024.
        Requirements:
        ${requirements}
        - Never use LaTeX, MathJax Katex use valid text instead.
        - ${isEnglishNeed}.
        
        Output Format:
        Return only a valid JSON array where each object contains:
        - question_id (as a unique number)
        - question
        - options
        - correct_answer (exact match from options)
        - explanation (if mathematical question, try to skip long text and give in mathematical solution. use line break and tab instaed of using "arrow" or something like this.)`;
  }

  const userMessage = generateUserMessage(count, topic, chapter, book);

  let quizbox = document.getElementById("quizBox");
  quizBox.textContent = "Generating...";
  
  /* To add multiple api keys
  let API_KEYS = ["", "", "", "", ""];
  const apikey = API_KEYS[Math.floor(Math.random() * 5)];
 */
 const apikey = "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";
  
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apikey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",  // অথবা "llama3-70b-8192"
      messages: [
        {
          role: "user",
          content: userMessage
        }
      ]
    })
  });

  const test = await response.json();
  let mcq = test.choices?.[0]?.message?.content || "No response";
  
  quizbox.innerHTML = mcq;  // response-এ LaTeX কোড আছে
 //Testing Keys 
 extractJSON();
 
 
  // Now making the mcq as an OMR
  const omrData = JSON.parse(quizBox.textContent);
  quizBox.innerHTML = ""; // clear previous
  
  // Remove previous timer box if exists
  const oldControlBox = document.getElementById("controlBox");
  if (oldControlBox) oldControlBox.remove();
  
  // Sticky timer + start/stop UI
  const controlBox = document.createElement("div");
  controlBox.id = "controlBox";
  controlBox.className = "sticky top-0 bg-white shadow p-2 flex justify-between items-center gap-2 z-50";
  controlBox.innerHTML = `
    <div class="flex gap-2 items-center">
      <input id="minuteInput" type="number" min="1" value="1" class="w-16 p-1 border rounded text-center"/>
      <button id="startBtn" class="bg-green-500 text-white px-3 py-1 rounded">Start</button>
      <button id="stopBtn" class="hidden bg-red-500 text-white px-3 py-1 rounded">Stop</button>
    </div>
    <div id="timerDisplay" class="text-xl font-bold">00:00</div>
    <button id="submitBtn" class="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    <button id="printQues" class="bg-red-600 text-white px-4 py-2 rounded" onclick="window.print()">Print</button>
  `;
  quizBox.before(controlBox);

  // Timer logic
  let timerInterval;
  let inputMin = document.getElementById("minuteInput");
  inputMin.value = count * 0.6;
  document.getElementById("startBtn").onclick = () => {
    const mins = parseInt(inputMin.value) || 1;
    let timeLeft = mins * 60;
    updateDisplay(timeLeft);

    timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        return;
      }
      timeLeft--;
      updateDisplay(timeLeft);
    }, 1000);

    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  };
  document.getElementById("stopBtn").onclick = () => {
    clearInterval(timerInterval);
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
  };
  function updateDisplay(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    document.getElementById("timerDisplay").textContent = `${m}:${s}`;
  }

  // Build MCQ OMR Sheet
  let selected = {};
  omrData.forEach((q, i) => {
    const container = document.createElement("div");
    container.className = "bg-white p-4 rounded shadow space-y-2";

    const optionsHTML = q.options.map(opt => `
        <label class="flex items-center gap-2">
          <input type="radio" name="q${q.question_id}" value="${opt}">
          <span>${opt}</span>
        </label>
      `).join("");
      
      const html = `
        <div class="grid grid-cols-2 gap-x-6 gap-y-2">
          ${optionsHTML}
        </div>
      `;
    
    container.innerHTML = `
      <div class="font-semibold">${String(i + 1).padStart(2, 0)}. ${q.question}</div>
      <div>${optionsHTML}</div>
      <div class="hidden explanation mt-2 p-2 rounded text-sm bg-gray-100 border">
        <div><strong>Correct:</strong> <span class="text-green-600">${q.correct_answer}</span></div>
        <div><strong>Explanation:</strong> ${q.explanation.replace(/\t/g, "&nbsp;&nbsp;&nbsp;").replace(/\n/g, "<br>")}</div>
      </div>
    `;
    quizBox.appendChild(container);
  });

 // Submit Logic
document.getElementById("submitBtn").onclick = () => {
  const allQuestions = omrData; // ধরে নিচ্ছি omrData তে সব প্রশ্ন আছে
  let correct = 0, incorrect = 0, blank = 0;

  allQuestions.forEach(question => {
    const qid = question.question_id;
    const selected = document.querySelector(`input[name="q${qid}"]:checked`);
    const parent = document.querySelector(`input[name="q${qid}"]`)?.closest(".bg-white");
    const explanationHTML = `<div><strong>Explanation:</strong> ${question.explanation.replace(/\t/g, "&nbsp;&nbsp;&nbsp;").replace(/\n/g, "<br>")}</div>`;

    if (!parent) return; // যদি parent না পাওয়া যায়, skip

    if (!selected) {
      blank++;
      parent.querySelector(".explanation").classList.remove("hidden");
      parent.querySelector(".explanation").innerHTML =
        `<div><strong class="text-yellow-600">No Answer Given</strong></div>
         <div><strong class="text-green-600">Correct:</strong> ${question.correct_answer}</div>
         ${explanationHTML}`;
    } else if (selected.value === question.correct_answer) {
      correct++;
      parent.querySelector(".explanation").classList.remove("hidden");
      parent.querySelector(".explanation").innerHTML =
        `<div><strong class="text-green-600">Correct Answer:</strong> ${question.correct_answer}</div>
         ${explanationHTML}`;
    } else {
      incorrect++;
      parent.querySelector(".explanation").classList.remove("hidden");
      parent.querySelector(".explanation").innerHTML =
        `<div><strong class="text-red-600">Wrong Answer:</strong> ${selected.value}</div>
         <div><strong class="text-green-600">Correct:</strong> ${question.correct_answer}</div>
         ${explanationHTML}`;
    }
  });

  showResultPopup(correct, incorrect, blank); // blank পাস করতেও ভুলিস না
};

  function showResultPopup(correct, incorrect, blank) {
    const popup = document.createElement("div");
    popup.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 resultShowing";
    popup.innerHTML = `
      <div class="bg-white p-6 rounded shadow-lg text-center space-y-2">
        <h2 class="text-xl font-bold text-blue-600">Quiz Result</h2>
        <p class="text-green-600 font-semibold">Correct: ${correct}</p>
        <p class="text-red-600 font-semibold">Incorrect: ${incorrect}</p>
        <p class="text-yellow-600 font-semibold">Blank: ${blank}</p>
        <button onclick="this.closest('.fixed').remove()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    `;
    document.body.appendChild(popup);
  }
}

function extractJSON() {
  const inputString = document.getElementById("quizBox");
  const firstIndex = inputString.textContent.indexOf('[');  // Find the first '['
  const lastIndex = inputString.textContent.lastIndexOf(']');  // Find the last ']'

  // If JSON is found and there's text above, or below it
  if (firstIndex !== -1 && lastIndex !== -1 && firstIndex < lastIndex) {
      // Extract the JSON part
      const jsonPart = inputString.textContent.substring(firstIndex, lastIndex + 1);
      
      try {
          const jsonData = JSON.parse(jsonPart); // Parse the matched JSON string
          inputString.textContent = JSON.stringify(jsonData, null, 2); // Display the JSON in alert
      } catch (error) {
          inputString.textContent = "Error parsing JSON. Please Generate again.";
          generateQuiz();
      }
  } else {
      inputString.textContent = "AI not responded. Please Generate again.";
      generateQuiz();
  }
}

//Blinking
let txt="Quizolia", i=0, del=0, el=document.getElementById("t");
function loop(){
  el.textContent=txt.slice(0,i);
  if(!del) i++;
  else i--;
  if(i>txt.length) del=1;
  if(i<0) del=0;
  setTimeout(loop, del ? 100 : 500);
}
loop();