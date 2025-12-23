// ===== KodYolu - Kod Öğrenme Uygulaması =====

// ===== State Management =====
let state = {
    xp: 0,
    level: 1,
    selectedLanguage: null, // 'python', 'csharp', 'web', 'javascript'
    completedLessons: [],
    completedAlgorithms: [],
    completedExercises: [],
    quizScores: {},
    totalQuizCorrect: 0,
    totalQuizAnswered: 0,
    activities: [],
    badges: []
};

// Dil bilgileri
const languageInfo = {
    python: { name: 'Python', icon: '🐍', ext: '.py' },
    csharp: { name: 'C#', icon: '💜', ext: '.cs' },
    web: { name: 'HTML & CSS', icon: '🌐', ext: '.html' },
    javascript: { name: 'JavaScript', icon: '⚡', ext: '.js' }
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    checkLanguageSelection();
    setupNavigation();
    setupConceptCards();
    updateUI();
    updateLanguageUI(); // Dile göre UI güncelle
    setGreeting();
    
    // Komut Referansını başlat
    setTimeout(() => {
        if (typeof window.initReference === 'function') {
            window.initReference();
        }
    }, 100);
});

// ===== Language Selection =====
function checkLanguageSelection() {
    if (!state.selectedLanguage) {
        showLanguageModal();
    } else {
        hideLanguageModal();
        updateLanguageUI();
    }
}

function showLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) modal.classList.remove('hidden');
}

function hideLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) modal.classList.add('hidden');
}

function selectLanguage(lang) {
    state.selectedLanguage = lang;
    saveState();
    hideLanguageModal();
    updateLanguageUI();
    
    // Egzersizleri yeniden başlat
    initExercises();
    currentFilter = 'all';
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Sayfayı güncelle
    renderExercisesList();
    updateLevelProgress();
    setupSandbox();
    
    // Komut referansını güncelle
    if (typeof window.updateReferenceForLanguage === 'function') {
        window.updateReferenceForLanguage();
    }
    
    showToast(`${languageInfo[lang].icon} ${languageInfo[lang].name} seçildi!`);
}

function updateLanguageUI() {
    const lang = state.selectedLanguage || 'python';
    const info = languageInfo[lang];
    
    // Sidebar'daki dil göstergesini güncelle
    const iconEl = document.getElementById('current-lang-icon');
    const nameEl = document.getElementById('current-lang-name');
    
    if (iconEl) iconEl.textContent = info.icon;
    if (nameEl) nameEl.textContent = info.name;
    
    // Sandbox dosya adını güncelle
    const fileTab = document.querySelector('.file-tab');
    if (fileTab) {
        fileTab.innerHTML = `<span class="dot green"></span> main${info.ext}`;
    }
    
    // Egzersiz workspace dosya adını güncelle
    const exerciseFilename = document.querySelector('#exercise-workspace .filename');
    if (exerciseFilename) {
        exerciseFilename.textContent = `egzersiz${info.ext}`;
    }
    
    // Ana sayfa kod preview'ını güncelle
    updateHomeCodePreview(lang);
    
    // Sandbox placeholder'ı güncelle
    updateSandboxPlaceholder(lang);
    
    // Kavram kartlarını güncelle
    updateConceptCards(lang);
}

function updateConceptCards(lang) {
    const conceptsData = getConceptsData();
    
    // Kavram kartlarındaki açıklamaları dile göre güncelle
    const cardTitles = {
        python: {
            variables: { title: 'Değişkenler', desc: 'Verileri hafızada saklama' },
            conditions: { title: 'Koşullar (If-Else)', desc: 'Karar verme yapıları' },
            loops: { title: 'Döngüler', desc: 'Tekrar eden işlemler' },
            functions: { title: 'Fonksiyonlar', desc: 'Yeniden kullanılabilir kod blokları' },
            lists: { title: 'Listeler & Diziler', desc: 'Veri koleksiyonları' }
        },
        csharp: {
            variables: { title: 'Değişkenler', desc: 'Tip güvenli veri saklama' },
            conditions: { title: 'Koşullar (If-Else)', desc: 'Karar yapıları' },
            loops: { title: 'Döngüler', desc: 'for, while, foreach' },
            functions: { title: 'Metotlar', desc: 'Sınıf içi fonksiyonlar' },
            lists: { title: 'Diziler & Listeler', desc: 'Array ve List<T>' }
        },
        javascript: {
            variables: { title: 'Değişkenler', desc: 'let, const, var' },
            conditions: { title: 'Koşullar', desc: 'if-else ve ternary' },
            loops: { title: 'Döngüler', desc: 'for, forEach, map' },
            functions: { title: 'Fonksiyonlar', desc: 'Arrow functions' },
            lists: { title: 'Diziler (Arrays)', desc: 'Array metodları' }
        },
        web: {
            variables: { title: 'HTML Temelleri', desc: 'Web sayfası yapısı' },
            conditions: { title: 'CSS Temelleri', desc: 'Stil ve görünüm' },
            loops: { title: 'Box Model', desc: 'Margin, padding, border' },
            functions: { title: 'Flexbox', desc: 'Esnek yerleşim' },
            lists: { title: 'CSS Grid', desc: 'Izgara yerleşimi' }
        }
    };
    
    const cards = cardTitles[lang] || cardTitles.python;
    
    document.querySelectorAll('.concept-card').forEach(card => {
        const conceptId = card.dataset.concept;
        if (cards[conceptId]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = cards[conceptId].title;
            if (p) p.textContent = cards[conceptId].desc;
        }
    });
}

function updateHomeCodePreview(lang) {
    const codeBody = document.querySelector('.code-preview .code-body code');
    const filename = document.querySelector('.code-preview .filename');
    const outputText = document.querySelector('.code-preview .output-text');
    
    if (!codeBody || !filename) return;
    
    const previews = {
        python: {
            filename: 'merhaba.py',
            code: `<span class="keyword">def</span> <span class="function">selamla</span>(<span class="param">isim</span>):
    <span class="keyword">return</span> <span class="string">f"Merhaba, {isim}!"</span>

<span class="comment"># Çalıştır</span>
<span class="function">print</span>(<span class="function">selamla</span>(<span class="string">"Kodcu"</span>))`,
            output: 'Merhaba, Kodcu!'
        },
        csharp: {
            filename: 'Program.cs',
            code: `<span class="keyword">static void</span> <span class="function">Selamla</span>(<span class="keyword">string</span> <span class="param">isim</span>)
{
    <span class="function">Console</span>.WriteLine(<span class="string">$"Merhaba, {isim}!"</span>);
}

<span class="comment">// Çalıştır</span>
<span class="function">Selamla</span>(<span class="string">"Kodcu"</span>);`,
            output: 'Merhaba, Kodcu!'
        },
        javascript: {
            filename: 'app.js',
            code: `<span class="keyword">function</span> <span class="function">selamla</span>(<span class="param">isim</span>) {
    <span class="keyword">return</span> <span class="string">\`Merhaba, \${isim}!\`</span>;
}

<span class="comment">// Çalıştır</span>
<span class="function">console</span>.<span class="function">log</span>(<span class="function">selamla</span>(<span class="string">"Kodcu"</span>));`,
            output: 'Merhaba, Kodcu!'
        },
        web: {
            filename: 'index.html',
            code: `<span class="keyword">&lt;!DOCTYPE html&gt;</span>
<span class="keyword">&lt;html&gt;</span>
<span class="keyword">&lt;body&gt;</span>
    <span class="keyword">&lt;h1</span> <span class="param">class</span>=<span class="string">"baslik"</span><span class="keyword">&gt;</span>Merhaba!<span class="keyword">&lt;/h1&gt;</span>
<span class="keyword">&lt;/body&gt;</span>
<span class="keyword">&lt;/html&gt;</span>`,
            output: 'Web sayfası oluşturuldu!'
        }
    };
    
    const preview = previews[lang] || previews.python;
    filename.textContent = preview.filename;
    codeBody.innerHTML = preview.code;
    if (outputText) outputText.textContent = preview.output;
}

function updateSandboxPlaceholder(lang) {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;
    
    const placeholders = {
        python: `# Python kodunu buraya yaz...
# Örnek:
print('Merhaba Dünya!')

isim = 'Ali'
print(f'Merhaba, {isim}!')`,
        csharp: `// C# kodunu buraya yaz...
// Örnek:
Console.WriteLine("Merhaba Dünya!");

string isim = "Ali";
Console.WriteLine($"Merhaba, {isim}!");`,
        javascript: `// JavaScript kodunu buraya yaz...
// Örnek:
console.log("Merhaba Dünya!");

let isim = "Ali";
console.log(\`Merhaba, \${isim}!\`);`,
        web: `<!-- HTML kodunu buraya yaz... -->
<!-- Örnek: -->
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>
<body>
    <h1>Merhaba Dünya!</h1>
</body>
</html>`
    };
    
    codeInput.placeholder = placeholders[lang] || placeholders.python;
}

// ===== LocalStorage =====
function loadState() {
    const saved = localStorage.getItem('kodYoluState');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }
}

function saveState() {
    localStorage.setItem('kodYoluState', JSON.stringify(state));
}

// ===== Navigation =====
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.dataset.section;
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show section
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            // Komut Referansı bölümüne geçildiğinde yenile
            if (sectionId === 'reference') {
                setTimeout(() => {
                    if (typeof window.initReference === 'function') {
                        window.initReference();
                    }
                }, 50);
            }
        });
    });
}

function startLearning() {
    document.querySelector('[data-section="concepts"]').click();
}

// ===== Greeting =====
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Merhaba!';
    
    if (hour < 12) {
        greeting = 'Günaydın! ☀️';
    } else if (hour < 18) {
        greeting = 'İyi günler! 👋';
    } else {
        greeting = 'İyi akşamlar! 🌙';
    }
    
    document.getElementById('greeting').textContent = greeting;
}

// ===== UI Updates =====
function updateUI() {
    // Update XP bar
    const xpForNextLevel = state.level * 100;
    const xpProgress = (state.xp % 100) / 100 * 100;
    document.getElementById('xp-fill').style.width = `${xpProgress}%`;
    document.getElementById('user-xp').textContent = state.xp % 100;
    document.getElementById('user-level').textContent = state.level;
    
    // Update stats
    const exercisesCompleted = state.completedExercises ? state.completedExercises.length : 0;
    document.getElementById('completed-count').textContent = 
        state.completedLessons.length + state.completedAlgorithms.length + exercisesCompleted;
    document.getElementById('quiz-score').textContent = state.totalQuizCorrect * 10;
    
    // Progress section stats
    document.getElementById('total-xp-stat').textContent = state.xp;
    document.getElementById('lessons-completed-stat').textContent = state.completedLessons.length;
    
    const exercisesStatEl = document.getElementById('exercises-completed-stat');
    if (exercisesStatEl) {
        exercisesStatEl.textContent = exercisesCompleted;
    }
    
    const accuracy = state.totalQuizAnswered > 0 
        ? Math.round((state.totalQuizCorrect / state.totalQuizAnswered) * 100) 
        : 0;
    document.getElementById('quiz-accuracy-stat').textContent = `${accuracy}%`;
    
    // Overall progress
    const totalItems = 5 + 30 + 4 + 3; // lessons + exercises + algorithms + quizzes
    const completedItems = state.completedLessons.length + 
                          exercisesCompleted +
                          state.completedAlgorithms.length + 
                          Object.keys(state.quizScores).length;
    const progressPercent = Math.round((completedItems / totalItems) * 100);
    
    document.getElementById('overall-percentage').textContent = `${progressPercent}%`;
    const circle = document.getElementById('overall-progress-circle');
    if (circle) {
        const offset = 283 - (283 * progressPercent / 100);
        circle.style.strokeDashoffset = offset;
    }
    
    // Update quiz statuses
    ['basics', 'loops', 'algorithms'].forEach(quiz => {
        const status = document.getElementById(`quiz-status-${quiz}`);
        if (state.quizScores[quiz] !== undefined) {
            status.textContent = `${state.quizScores[quiz]}/5 Doğru`;
            status.classList.add('completed');
        }
    });
    
    // Update roadmap
    state.completedLessons.forEach(lesson => {
        const item = document.querySelector(`[data-step="${lesson}"]`);
        if (item) item.classList.add('completed');
    });
    
    // Update badges
    updateBadges();
    
    // Update activity list
    renderActivities();
}

function updateBadges() {
    // First lesson badge
    if (state.completedLessons.length > 0) {
        document.getElementById('badge-first-lesson')?.classList.remove('locked');
    }
    
    // First quiz badge
    if (Object.keys(state.quizScores).length > 0) {
        document.getElementById('badge-first-quiz')?.classList.remove('locked');
    }
    
    // Algorithm master badge
    if (state.completedAlgorithms.length >= 4) {
        document.getElementById('badge-algorithm-master')?.classList.remove('locked');
    }
    
    // Perfect score badge
    if (Object.values(state.quizScores).some(score => score === 5)) {
        document.getElementById('badge-perfect-score')?.classList.remove('locked');
    }
    
    // Level 5 badge
    if (state.level >= 5) {
        document.getElementById('badge-level-5')?.classList.remove('locked');
    }
    
    // Dedication badge (completed 3+ items)
    if (state.completedLessons.length + state.completedAlgorithms.length >= 3) {
        document.getElementById('badge-dedication')?.classList.remove('locked');
    }
}

function addXP(amount) {
    state.xp += amount;
    
    // Level up check
    while (state.xp >= state.level * 100) {
        state.xp -= state.level * 100;
        state.level++;
        showToast(`🎉 Seviye ${state.level} oldun!`);
    }
    
    saveState();
    updateUI();
}

function addActivity(icon, text) {
    state.activities.unshift({
        icon,
        text,
        time: new Date().toISOString()
    });
    
    // Keep only last 20 activities
    state.activities = state.activities.slice(0, 20);
    saveState();
    renderActivities();
}

function renderActivities() {
    const list = document.getElementById('activity-list');
    if (!list) return;
    
    list.innerHTML = state.activities.map(activity => {
        const timeAgo = getTimeAgo(new Date(activity.time));
        return `
            <div class="activity-item">
                <span class="activity-icon">${activity.icon}</span>
                <span class="activity-text">${activity.text}</span>
                <span class="activity-time">${timeAgo}</span>
            </div>
        `;
    }).join('') || `
        <div class="activity-item">
            <span class="activity-icon">🎉</span>
            <span class="activity-text">Hesap oluşturuldu</span>
            <span class="activity-time">Şimdi</span>
        </div>
    `;
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return 'Şimdi';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} dk önce`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} saat önce`;
    return `${Math.floor(seconds / 86400)} gün önce`;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ===== Concepts =====
// Dile göre concepts verisini döndüren fonksiyon
function getConceptsData() {
    const lang = state.selectedLanguage || 'python';
    return allConceptsData[lang] || allConceptsData.python;
}

function setupConceptCards() {
    document.querySelectorAll('.concept-card').forEach(card => {
        card.addEventListener('click', () => {
            const conceptId = card.dataset.concept;
            openConcept(conceptId);
        });
    });
}

function openConcept(conceptId) {
    const conceptsData = getConceptsData();
    const concept = conceptsData[conceptId];
    if (!concept) return;
    
    document.getElementById('concept-detail').innerHTML = concept.content;
    document.getElementById('concept-modal').classList.add('active');
    
    // Mark as completed
    const lessonIndex = Object.keys(conceptsData).indexOf(conceptId) + 1;
    if (!state.completedLessons.includes(lessonIndex)) {
        state.completedLessons.push(lessonIndex);
        addXP(20);
        addActivity('📖', `${concept.title} dersini tamamladın`);
        saveState();
        updateUI();
        showToast(`+20 XP! ${concept.title} dersini tamamladın!`);
    }
}

function closeModal() {
    document.getElementById('concept-modal').classList.remove('active');
}

// ===== Algorithms =====
// Dile göre algoritma verisini döndüren fonksiyon
function getAlgorithmsData() {
    const lang = state.selectedLanguage || 'python';
    return allAlgorithmsData[lang] || allAlgorithmsData.python;
}

// Run fonksiyonları (tüm diller için aynı mantık)
const algorithmRunners = {
    sum: (n) => {
        let toplam = 0;
        for (let i = 1; i <= n; i++) {
            toplam += i;
        }
        return toplam;
    },
    max: (n) => {
        const liste = [];
        for (let i = 0; i < n; i++) {
            liste.push(Math.floor(Math.random() * 100) + 1);
        }
        const max = Math.max(...liste);
        return `Liste: [${liste.join(', ')}]\nEn büyük: ${max}`;
    },
    factorial: (n) => {
        let sonuc = 1;
        for (let i = 1; i <= n; i++) {
            sonuc *= i;
        }
        return `${n}! = ${sonuc}`;
    },
    fibonacci: (n) => {
        if (n <= 0) return '[]';
        if (n === 1) return '[0]';
        const seri = [0, 1];
        for (let i = 2; i < n; i++) {
            seri.push(seri[i-1] + seri[i-2]);
        }
        return `[${seri.join(', ')}]`;
    }
};

let currentAlgorithm = null;

function showAlgorithm(algoId) {
    const algorithmsData = getAlgorithmsData();
    const algo = algorithmsData[algoId];
    if (!algo) return;
    
    currentAlgorithm = algoId;
    
    document.getElementById('algo-title').textContent = algo.title;
    document.getElementById('algo-description').textContent = algo.description;
    
    // Hints
    const hintsHtml = algo.hints.map(hint => `<li>${hint}</li>`).join('');
    document.getElementById('algo-hints').innerHTML = hintsHtml;
    
    // Steps
    const stepsHtml = algo.steps.map((step, i) => `
        <div class="step-item">
            <span class="step-number">${i + 1}</span>
            <span class="step-text">${step}</span>
        </div>
    `).join('');
    document.getElementById('algo-steps').innerHTML = stepsHtml;
    
    // Code
    document.getElementById('algo-code').textContent = algo.code;
    
    // Show workspace
    document.getElementById('algorithm-workspace').classList.remove('hidden');
    
    // Mark as completed
    if (!state.completedAlgorithms.includes(algoId)) {
        state.completedAlgorithms.push(algoId);
        addXP(30);
        addActivity('🧩', `${algo.title} algoritmasını çözdün`);
        saveState();
        updateUI();
        showToast(`+30 XP! ${algo.title} algoritmasını çözdün!`);
    }
    
    // Scroll to workspace
    document.getElementById('algorithm-workspace').scrollIntoView({ behavior: 'smooth' });
}

function closeWorkspace() {
    document.getElementById('algorithm-workspace').classList.add('hidden');
    currentAlgorithm = null;
}

function runAlgorithm() {
    if (!currentAlgorithm) return;
    
    const input = parseInt(document.getElementById('algo-input').value) || 5;
    const runner = algorithmRunners[currentAlgorithm];
    const result = runner ? runner(input) : 'Sonuç hesaplanamadı';
    
    document.getElementById('algo-result').textContent = result;
}

// ===== Quizzes =====
// Dile göre quiz verisini döndüren fonksiyon
function getQuizzesData() {
    const lang = state.selectedLanguage || 'python';
    return allQuizzesData[lang] || allQuizzesData.python;
}

let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedAnswer = null;

function startQuiz(quizId) {
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[quizId];
    if (!quiz) return;
    
    currentQuiz = quizId;
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;
    
    document.querySelector('.quiz-selector').style.display = 'none';
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    document.getElementById('total-questions').textContent = quiz.questions.length;
    
    showQuestion();
}

function showQuestion() {
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[currentQuiz];
    const question = quiz.questions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    
    // Show question
    document.getElementById('quiz-question').textContent = question.question;
    
    // Show code if exists
    const codeBlock = document.getElementById('quiz-code-block');
    if (question.code) {
        document.getElementById('quiz-code').textContent = question.code;
        codeBlock.classList.remove('hidden');
    } else {
        codeBlock.classList.add('hidden');
    }
    
    // Show options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="quiz-option" onclick="selectAnswer(${index})" data-index="${index}">
            ${option}
        </button>
    `).join('');
    
    // Reset state
    selectedAnswer = null;
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('btn-next').disabled = true;
    document.getElementById('btn-hint').disabled = false;
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[currentQuiz];
    const question = quiz.questions[currentQuestionIndex];
    const correct = question.correct;
    
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === correct) {
            btn.classList.add('correct');
        }
        if (i === index && i !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden', 'correct', 'wrong');
    
    if (index === correct) {
        quizScore++;
        state.totalQuizCorrect++;
        feedback.classList.add('correct');
        document.getElementById('feedback-icon').textContent = '✓';
        document.getElementById('feedback-text').textContent = 'Doğru! Harika!';
    } else {
        feedback.classList.add('wrong');
        document.getElementById('feedback-icon').textContent = '✗';
        document.getElementById('feedback-text').textContent = `Yanlış. Doğru cevap: ${question.options[correct]}`;
    }
    
    state.totalQuizAnswered++;
    saveState();
    
    // Enable next button
    document.getElementById('btn-next').disabled = false;
    document.getElementById('btn-hint').disabled = true;
}

function showHint() {
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[currentQuiz];
    const question = quiz.questions[currentQuestionIndex];
    showToast(`💡 İpucu: ${question.hint}`);
}

function nextQuestion() {
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[currentQuiz];
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        // Quiz finished
        finishQuiz();
    }
}

function finishQuiz() {
    const quizzesData = getQuizzesData();
    const quiz = quizzesData[currentQuiz];
    const xpEarned = quizScore * 10;
    
    // Save score
    state.quizScores[currentQuiz] = quizScore;
    addXP(xpEarned);
    addActivity('📝', `${quiz.title} testini ${quizScore}/${quiz.questions.length} doğru ile tamamladın`);
    saveState();
    updateUI();
    
    // Show results
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('final-score').textContent = quizScore;
    document.getElementById('xp-earned').textContent = xpEarned;
}

function closeQuiz() {
    document.getElementById('quiz-results').classList.add('hidden');
    document.querySelector('.quiz-selector').style.display = 'grid';
    currentQuiz = null;
}

// ===== Reset Progress =====
function resetProgress() {
    if (confirm('Tüm ilerlemeniz silinecek. Emin misiniz?')) {
        const currentLang = state.selectedLanguage; // Dil seçimini koru
        localStorage.removeItem('kodYoluState');
        state = {
            xp: 0,
            level: 1,
            selectedLanguage: currentLang,
            completedLessons: [],
            completedAlgorithms: [],
            completedExercises: [],
            quizScores: {},
            totalQuizCorrect: 0,
            totalQuizAnswered: 0,
            activities: [],
            badges: []
        };
        
        // Reset UI elements
        document.querySelectorAll('.roadmap-item').forEach(item => {
            item.classList.remove('completed');
        });
        
        document.querySelectorAll('.badge').forEach(badge => {
            badge.classList.add('locked');
        });
        
        ['basics', 'loops', 'algorithms'].forEach(quiz => {
            const status = document.getElementById(`quiz-status-${quiz}`);
            status.textContent = 'Başlamadı';
            status.classList.remove('completed');
        });
        
        // Reset exercises
        renderExercisesList();
        
        updateUI();
        showToast('İlerleme sıfırlandı!');
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeWorkspace();
        closeExercise();
    }
});

// ===== Exercises =====
// Seviye sistemi: Algoritma -> Değişkenler -> Koşullar -> Döngüler -> Fonksiyonlar -> İleri Algoritmalar
const levelOrder = ['algorithms_basic', 'variables', 'conditions', 'loops', 'functions', 'algorithms_advanced'];
const levelNames = {
    'algorithms_basic': 'Temel Algoritmalar',
    'variables': 'Değişkenler',
    'conditions': 'Koşullar',
    'loops': 'Döngüler',
    'functions': 'Fonksiyonlar',
    'algorithms_advanced': 'İleri Algoritmalar'
};

// Egzersiz fonksiyonları - allExercises aşağıda exercisesData tanımlandıktan sonra doldurulacak
var allExercises = null;

function initAllExercises() {
    if (allExercises) return;
    allExercises = {
        python: typeof exercisesData !== 'undefined' ? exercisesData : [],
        csharp: typeof csharpExercises !== 'undefined' ? csharpExercises : [],
        javascript: typeof javascriptExercises !== 'undefined' ? javascriptExercises : [],
        web: typeof webExercises !== 'undefined' ? webExercises : []
    };
}

function getExercisesForLanguage(lang) {
    initAllExercises();
    return allExercises[lang] || allExercises['python'] || [];
}

function getCurrentExercises() {
    const lang = state.selectedLanguage || 'python';
    return getExercisesForLanguage(lang);
}

const exercisesData = [
    // ========== SEVİYE 1: TEMEL ALGORİTMALAR (5 egzersiz) ==========
    {
        id: 1,
        category: 'algorithms_basic',
        level: 1,
        title: 'Toplama Algoritması',
        difficulty: 'easy',
        description: 'İki sayıyı toplamak için bir algoritma yaz. a ve b sayılarını toplayıp sonucu yazdır.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'a = 10', isLine: true },
            { type: 'text', content: 'b = 5', isLine: true },
            { type: 'text', content: 'sonuc = a ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' b', isLine: true },
            { type: 'text', content: 'print(sonuc)' },
        ],
        hint: 'İki sayıyı toplamak için + operatörü kullanılır.',
        explanation: 'Toplama işlemi en temel algoritmadır. İki değeri + operatörü ile toplarız ve sonucu bir değişkende saklarız.'
    },
    {
        id: 2,
        category: 'algorithms_basic',
        level: 1,
        title: 'Ortalama Hesaplama',
        difficulty: 'easy',
        description: 'Üç sayının ortalamasını hesapla. Toplam / sayı adedi formülünü kullan.',
        expectedOutput: '20.0',
        code: [
            { type: 'text', content: 'a, b, c = 10, 20, 30', isLine: true },
            { type: 'text', content: 'toplam = a + b + c', isLine: true },
            { type: 'text', content: 'ortalama = toplam ' },
            { type: 'blank', answer: '/', placeholder: '?', width: 40 },
            { type: 'text', content: ' ' },
            { type: 'blank', answer: '3', placeholder: '?', width: 40 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'print(ortalama)' },
        ],
        hint: 'Ortalama = Toplam / Eleman sayısı. Bölme için / kullanılır.',
        explanation: 'Ortalama algoritması: Önce tüm sayıları topla, sonra kaç sayı olduğuna böl. Bölme işlemi / operatörü ile yapılır.'
    },
    {
        id: 3,
        category: 'algorithms_basic',
        level: 1,
        title: 'Çift/Tek Kontrolü',
        difficulty: 'easy',
        description: 'Bir sayının çift mi tek mi olduğunu bul. Mod operatörü (%) kullan.',
        expectedOutput: 'Çift',
        code: [
            { type: 'text', content: 'sayi = 8', isLine: true },
            { type: 'text', content: 'if sayi ' },
            { type: 'blank', answer: '%', placeholder: '?', width: 40 },
            { type: 'text', content: ' 2 == ' },
            { type: 'blank', answer: '0', placeholder: '?', width: 40 },
            { type: 'text', content: ':' },
            { type: 'newline' },
            { type: 'text', content: '    print("Çift")', isLine: true },
            { type: 'text', content: 'else:', isLine: true },
            { type: 'text', content: '    print("Tek")' },
        ],
        hint: 'Mod operatörü (%) kalanı verir. 2\'ye bölümünden kalan 0 ise çifttir.',
        explanation: 'Mod (%) operatörü bölümden kalanı verir. Bir sayı 2\'ye bölündüğünde kalan 0 ise çift, 1 ise tektir. Bu temel bir algoritmadır.'
    },
    {
        id: 4,
        category: 'algorithms_basic',
        level: 1,
        title: 'Büyük Sayıyı Bulma',
        difficulty: 'medium',
        description: 'İki sayıdan büyük olanı bul ve yazdır.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'a = 15', isLine: true },
            { type: 'text', content: 'b = 25', isLine: true },
            { type: 'text', content: 'if a ' },
            { type: 'blank', answer: '>', placeholder: '?', width: 40 },
            { type: 'text', content: ' b:' },
            { type: 'newline' },
            { type: 'text', content: '    buyuk = a', isLine: true },
            { type: 'blank', answer: 'else', placeholder: '????', width: 70 },
            { type: 'text', content: ':' },
            { type: 'newline' },
            { type: 'text', content: '    buyuk = b', isLine: true },
            { type: 'text', content: 'print(buyuk)' },
        ],
        hint: 'İki değeri karşılaştırmak için > operatörü kullanılır.',
        explanation: 'Karşılaştırma algoritması: İki değeri > ile karşılaştırırız. Hangisi büyükse onu seçeriz. Bu, sıralama algoritmalarının temelidir.'
    },
    {
        id: 5,
        category: 'algorithms_basic',
        level: 1,
        title: 'Sayı Değiştirme (Swap)',
        difficulty: 'medium',
        description: 'İki değişkenin değerlerini yer değiştir. Geçici değişken kullan.',
        expectedOutput: 'a=20, b=10',
        code: [
            { type: 'text', content: 'a = 10', isLine: true },
            { type: 'text', content: 'b = 20', isLine: true },
            { type: 'text', content: '# Yer değiştir', isLine: true },
            { type: 'blank', answer: 'gecici', alternatives: ['temp', 'tmp'], placeholder: '??????', width: 90 },
            { type: 'text', content: ' = a', isLine: true },
            { type: 'text', content: 'a = ' },
            { type: 'blank', answer: 'b', placeholder: '?', width: 40 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'b = gecici', isLine: true },
            { type: 'text', content: 'print(f"a={a}, b={b}")' },
        ],
        hint: 'Değerleri kaybetmemek için geçici bir değişken kullan.',
        explanation: 'Swap algoritması: Bir değeri geçici değişkende sakla, sonra değerleri değiştir. Bu, sıralama algoritmalarında çok kullanılır.'
    },
    
    // ========== SEVİYE 2: DEĞİŞKENLER (5 egzersiz) ==========
    {
        id: 6,
        category: 'variables',
        level: 2,
        title: 'Değişken Tanımlama',
        difficulty: 'easy',
        description: 'Bir değişken tanımla ve değer ata. "isim" adında bir değişken oluştur ve içine "Ahmet" değerini ata.',
        expectedOutput: 'Ahmet',
        code: [
            { type: 'blank', answer: 'isim', placeholder: '???', width: 80 },
            { type: 'text', content: ' = ' },
            { type: 'blank', answer: '"Ahmet"', alternatives: ["'Ahmet'"], placeholder: '???', width: 100 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'print(isim)' },
        ],
        hint: 'Değişken ismi = "değer" şeklinde yazılır. Metinler tırnak içine alınır.',
        explanation: 'Python\'da değişken tanımlamak için değişken_adı = değer yazılır. Metin (string) değerler çift veya tek tırnak içine alınmalıdır.'
    },
    {
        id: 7,
        category: 'variables',
        level: 2,
        title: 'Sayı Değişkeni',
        difficulty: 'easy',
        description: 'Bir sayı değişkeni tanımla. "yas" adında bir değişken oluştur ve içine 25 değerini ata.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'yas = ' },
            { type: 'blank', answer: '25', placeholder: '???', width: 60 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'print(yas)' },
        ],
        hint: 'Sayılar tırnak işareti olmadan yazılır.',
        explanation: 'Sayısal değerler (integer veya float) tırnak işareti olmadan doğrudan yazılır. Tırnak içine alırsanız metin olur!'
    },
    {
        id: 8,
        category: 'variables',
        level: 2,
        title: 'Print Fonksiyonu',
        difficulty: 'easy',
        description: '"Merhaba Dünya!" metnini ekrana yazdır.',
        expectedOutput: 'Merhaba Dünya!',
        code: [
            { type: 'blank', answer: 'print', placeholder: '???', width: 80 },
            { type: 'text', content: '(' },
            { type: 'blank', answer: '"Merhaba Dünya!"', alternatives: ["'Merhaba Dünya!'"], placeholder: '???', width: 180 },
            { type: 'text', content: ')' },
        ],
        hint: 'Ekrana yazdırmak için print() fonksiyonu kullanılır.',
        explanation: 'print() fonksiyonu parantez içindeki değeri ekrana yazdırır. Metinler tırnak içine alınmalıdır.'
    },
    {
        id: 9,
        category: 'variables',
        level: 2,
        title: 'Değişken Birleştirme',
        difficulty: 'easy',
        description: 'Ad ve soyadı birleştirerek tam ismi oluştur.',
        expectedOutput: 'Ali Yılmaz',
        code: [
            { type: 'text', content: 'ad = "Ali"', isLine: true },
            { type: 'text', content: 'soyad = "Yılmaz"', isLine: true },
            { type: 'text', content: 'tam_isim = ad ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' " " + soyad', isLine: true },
            { type: 'text', content: 'print(tam_isim)' },
        ],
        hint: 'Metinleri birleştirmek için + operatörü kullanılır.',
        explanation: 'String concatenation: Metinleri + ile birleştirebiliriz. Arada boşluk için " " ekledik.'
    },
    {
        id: 10,
        category: 'variables',
        level: 2,
        title: 'Tip Dönüşümü',
        difficulty: 'medium',
        description: 'Metin olan sayıyı gerçek sayıya çevir ve toplama yap.',
        expectedOutput: '25',
        code: [
            { type: 'text', content: 'metin_sayi = "20"', isLine: true },
            { type: 'text', content: 'sayi = ' },
            { type: 'blank', answer: 'int', placeholder: '???', width: 60 },
            { type: 'text', content: '(metin_sayi)', isLine: true },
            { type: 'text', content: 'sonuc = sayi + 5', isLine: true },
            { type: 'text', content: 'print(sonuc)' },
        ],
        hint: 'Metni sayıya çevirmek için int() veya float() kullanılır.',
        explanation: 'Type casting: int() fonksiyonu metni tam sayıya çevirir. "20" metin, 20 ise sayıdır. İşlem yapmak için dönüşüm gerekir.'
    },
    
    // ========== SEVİYE 3: KOŞULLAR (5 egzersiz) ==========
    {
        id: 11,
        category: 'conditions',
        level: 3,
        title: 'Basit If Koşulu',
        difficulty: 'easy',
        description: 'Eğer sayı 10\'dan büyükse "Büyük" yazdır.',
        expectedOutput: 'Büyük',
        code: [
            { type: 'text', content: 'sayi = 15', isLine: true },
            { type: 'blank', answer: 'if', placeholder: '???', width: 60 },
            { type: 'text', content: ' sayi ' },
            { type: 'blank', answer: '>', placeholder: '?', width: 40 },
            { type: 'text', content: ' 10:' },
            { type: 'newline' },
            { type: 'text', content: '    print("Büyük")' },
        ],
        hint: 'if koşul: şeklinde yazılır. Büyüktür işareti > kullanılır.',
        explanation: 'if anahtar kelimesi koşul kontrolü yapar. Koşul doğruysa (True) alt satırdaki kod çalışır. > işareti "büyüktür" anlamına gelir.'
    },
    {
        id: 12,
        category: 'conditions',
        level: 3,
        title: 'If-Else Yapısı',
        difficulty: 'easy',
        description: 'Yaş 18 veya üzeriyse "Yetişkin", değilse "Çocuk" yazdır.',
        expectedOutput: 'Yetişkin',
        code: [
            { type: 'text', content: 'yas = 20', isLine: true },
            { type: 'text', content: 'if yas ' },
            { type: 'blank', answer: '>=', placeholder: '??', width: 50 },
            { type: 'text', content: ' 18:' },
            { type: 'newline' },
            { type: 'text', content: '    print("Yetişkin")', isLine: true },
            { type: 'blank', answer: 'else', placeholder: '????', width: 70 },
            { type: 'text', content: ':' },
            { type: 'newline' },
            { type: 'text', content: '    print("Çocuk")' },
        ],
        hint: '>= "büyük veya eşit" anlamına gelir. else koşul sağlanmazsa çalışır.',
        explanation: '>= operatörü "büyük veya eşit" kontrolü yapar. else bloğu, if koşulu False olduğunda çalışır.'
    },
    {
        id: 13,
        category: 'conditions',
        level: 3,
        title: 'Elif Kullanımı',
        difficulty: 'medium',
        description: 'Not değerlendirmesi yap: 90+ "AA", 80+ "BB", altı "CC"',
        expectedOutput: 'BB',
        code: [
            { type: 'text', content: 'not_ort = 85', isLine: true },
            { type: 'text', content: 'if not_ort >= 90:', isLine: true },
            { type: 'text', content: '    print("AA")', isLine: true },
            { type: 'blank', answer: 'elif', placeholder: '????', width: 70 },
            { type: 'text', content: ' not_ort >= 80:' },
            { type: 'newline' },
            { type: 'text', content: '    print("BB")', isLine: true },
            { type: 'text', content: 'else:', isLine: true },
            { type: 'text', content: '    print("CC")' },
        ],
        hint: 'elif = else if. Birden fazla koşul kontrolü için kullanılır.',
        explanation: 'elif (else if) birden fazla koşul kontrol etmemizi sağlar. Koşullar sırayla kontrol edilir, ilk doğru olan çalışır.'
    },
    {
        id: 14,
        category: 'conditions',
        level: 3,
        title: 'Mantıksal Operatörler',
        difficulty: 'medium',
        description: 'Hem yaş 18+ hem de ehliyet varsa "Araba kullanabilir" yazdır.',
        expectedOutput: 'Araba kullanabilir',
        code: [
            { type: 'text', content: 'yas = 25', isLine: true },
            { type: 'text', content: 'ehliyet_var = True', isLine: true },
            { type: 'text', content: 'if yas >= 18 ' },
            { type: 'blank', answer: 'and', placeholder: '???', width: 60 },
            { type: 'text', content: ' ehliyet_var:' },
            { type: 'newline' },
            { type: 'text', content: '    print("Araba kullanabilir")' },
        ],
        hint: 'and operatörü iki koşulun da doğru olmasını gerektirir.',
        explanation: 'and operatörü: Her iki koşul da True olmalı. or operatörü: En az biri True olmalı. not operatörü: Değeri tersine çevirir.'
    },
    {
        id: 15,
        category: 'conditions',
        level: 3,
        title: 'İç İçe Koşullar',
        difficulty: 'hard',
        description: 'Pozitif sayı ise çift/tek kontrolü yap.',
        expectedOutput: 'Pozitif ve Çift',
        code: [
            { type: 'text', content: 'sayi = 8', isLine: true },
            { type: 'text', content: 'if sayi > 0:', isLine: true },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'if', placeholder: '??', width: 50 },
            { type: 'text', content: ' sayi % 2 == 0:' },
            { type: 'newline' },
            { type: 'text', content: '        print("Pozitif ve Çift")', isLine: true },
            { type: 'text', content: '    else:', isLine: true },
            { type: 'text', content: '        print("Pozitif ve Tek")' },
        ],
        hint: 'Bir if bloğu içinde başka bir if yazabilirsin.',
        explanation: 'Nested conditions: İç içe koşullar daha karmaşık mantık kurmamızı sağlar. Girinti (indentation) çok önemli!'
    },
    
    // ========== SEVİYE 4: DÖNGÜLER (5 egzersiz) ==========
    {
        id: 16,
        category: 'loops',
        level: 4,
        title: 'For Döngüsü',
        difficulty: 'easy',
        description: '0\'dan 4\'e kadar sayıları yazdır (0, 1, 2, 3, 4).',
        expectedOutput: '0 1 2 3 4',
        code: [
            { type: 'blank', answer: 'for', placeholder: '???', width: 60 },
            { type: 'text', content: ' i in ' },
            { type: 'blank', answer: 'range', placeholder: '?????', width: 80 },
            { type: 'text', content: '(' },
            { type: 'blank', answer: '5', placeholder: '?', width: 40 },
            { type: 'text', content: '):' },
            { type: 'newline' },
            { type: 'text', content: '    print(i)' },
        ],
        hint: 'for döngüsü ve range() fonksiyonu kullanılır. range(5) -> 0,1,2,3,4',
        explanation: 'for döngüsü belirli sayıda tekrar yapar. range(5) fonksiyonu 0\'dan 4\'e kadar (5 dahil değil) sayılar üretir.'
    },
    {
        id: 17,
        category: 'loops',
        level: 4,
        title: 'While Döngüsü',
        difficulty: 'easy',
        description: 'sayac 0\'dan başlasın, 3\'ten küçük olduğu sürece yazdır ve 1 artır.',
        expectedOutput: '0 1 2',
        code: [
            { type: 'text', content: 'sayac = 0', isLine: true },
            { type: 'blank', answer: 'while', placeholder: '?????', width: 80 },
            { type: 'text', content: ' sayac < 3:' },
            { type: 'newline' },
            { type: 'text', content: '    print(sayac)', isLine: true },
            { type: 'text', content: '    sayac ' },
            { type: 'blank', answer: '+=', alternatives: ['= sayac +'], placeholder: '??', width: 50 },
            { type: 'text', content: ' 1' },
        ],
        hint: 'while koşul sağlandığı sürece döner. += değeri artırır.',
        explanation: 'while döngüsü koşul True olduğu sürece çalışır. += operatörü değişkeni artırır (sayac += 1 = sayac = sayac + 1).'
    },
    {
        id: 18,
        category: 'loops',
        level: 4,
        title: 'Liste Döngüsü',
        difficulty: 'easy',
        description: 'Listedeki her meyveyi yazdır.',
        expectedOutput: 'elma armut muz',
        code: [
            { type: 'text', content: 'meyveler = ["elma", "armut", "muz"]', isLine: true },
            { type: 'text', content: 'for ' },
            { type: 'blank', answer: 'meyve', alternatives: ['m', 'item', 'x'], placeholder: '?????', width: 80 },
            { type: 'text', content: ' in meyveler:' },
            { type: 'newline' },
            { type: 'text', content: '    print(meyve)' },
        ],
        hint: 'for eleman in liste: şeklinde yazılır.',
        explanation: 'for döngüsü listeler üzerinde iterasyon yapmamızı sağlar. Her turda liste elemanı değişkene atanır.'
    },
    {
        id: 19,
        category: 'loops',
        level: 4,
        title: 'Toplam Hesaplama',
        difficulty: 'medium',
        description: '1\'den 5\'e kadar sayıların toplamını bul.',
        expectedOutput: '15',
        code: [
            { type: 'text', content: 'toplam = 0', isLine: true },
            { type: 'text', content: 'for i in range(1, 6):', isLine: true },
            { type: 'text', content: '    toplam ' },
            { type: 'blank', answer: '+=', placeholder: '??', width: 50 },
            { type: 'text', content: ' i', isLine: true },
            { type: 'text', content: 'print(' },
            { type: 'blank', answer: 'toplam', placeholder: '??????', width: 90 },
            { type: 'text', content: ')' },
        ],
        hint: '+= operatörü değeri ekleyerek günceller.',
        explanation: 'Akkümülatör deseni: Bir toplam değişkeni başlat, döngüde değerleri ekle. 1+2+3+4+5 = 15'
    },
    {
        id: 20,
        category: 'loops',
        level: 4,
        title: 'Break ile Döngü Kontrolü',
        difficulty: 'medium',
        description: 'Sayı 5\'e eşit olunca döngüyü kır.',
        expectedOutput: '0 1 2 3 4',
        code: [
            { type: 'text', content: 'for i in range(10):', isLine: true },
            { type: 'text', content: '    if i == 5:', isLine: true },
            { type: 'text', content: '        ' },
            { type: 'blank', answer: 'break', placeholder: '?????', width: 80 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: '    print(i)' },
        ],
        hint: 'break komutu döngüyü anında sonlandırır.',
        explanation: 'break komutu döngüyü hemen bitirir. Belirli bir koşulda döngüden çıkmak için kullanılır.'
    },
    
    // ========== SEVİYE 5: FONKSİYONLAR (5 egzersiz) ==========
    {
        id: 21,
        category: 'functions',
        level: 5,
        title: 'Fonksiyon Tanımlama',
        difficulty: 'easy',
        description: '"selamla" adında bir fonksiyon tanımla ve "Merhaba!" yazdırsın.',
        expectedOutput: 'Merhaba!',
        code: [
            { type: 'blank', answer: 'def', placeholder: '???', width: 60 },
            { type: 'text', content: ' selamla():' },
            { type: 'newline' },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'print', placeholder: '?????', width: 80 },
            { type: 'text', content: '("Merhaba!")', isLine: true },
            { type: 'newline' },
            { type: 'text', content: 'selamla()' },
        ],
        hint: 'Fonksiyon tanımlamak için def anahtar kelimesi kullanılır.',
        explanation: 'def anahtar kelimesi fonksiyon tanımlar. Fonksiyon adından sonra parantez ve iki nokta gelir. Fonksiyon gövdesi girintili yazılır.'
    },
    {
        id: 22,
        category: 'functions',
        level: 5,
        title: 'Parametreli Fonksiyon',
        difficulty: 'easy',
        description: 'Bir isim alıp "Merhaba, {isim}!" yazdıran fonksiyon yaz.',
        expectedOutput: 'Merhaba, Ali!',
        code: [
            { type: 'text', content: 'def selamla(' },
            { type: 'blank', answer: 'isim', placeholder: '????', width: 70 },
            { type: 'text', content: '):' },
            { type: 'newline' },
            { type: 'text', content: '    print(f"Merhaba, {isim}!")', isLine: true },
            { type: 'newline' },
            { type: 'text', content: 'selamla(' },
            { type: 'blank', answer: '"Ali"', alternatives: ["'Ali'"], placeholder: '???', width: 70 },
            { type: 'text', content: ')' },
        ],
        hint: 'Parantez içine parametre adı yazılır. Fonksiyon çağrılırken değer verilir.',
        explanation: 'Fonksiyonlar parametre alabilir. Parametre, fonksiyona dışarıdan veri geçirmemizi sağlar. f-string ile değişkenler {} içinde kullanılır.'
    },
    {
        id: 23,
        category: 'functions',
        level: 5,
        title: 'Return İfadesi',
        difficulty: 'medium',
        description: 'İki sayıyı toplayıp sonucu döndüren bir fonksiyon yaz.',
        expectedOutput: '8',
        code: [
            { type: 'text', content: 'def topla(a, b):' },
            { type: 'newline' },
            { type: 'text', content: '    ' },
            { type: 'blank', answer: 'return', placeholder: '??????', width: 90 },
            { type: 'text', content: ' a + b', isLine: true },
            { type: 'newline' },
            { type: 'text', content: 'sonuc = topla(3, 5)', isLine: true },
            { type: 'text', content: 'print(' },
            { type: 'blank', answer: 'sonuc', placeholder: '?????', width: 80 },
            { type: 'text', content: ')' },
        ],
        hint: 'return fonksiyondan değer döndürür.',
        explanation: 'return anahtar kelimesi fonksiyondan bir değer döndürür. Bu değer bir değişkene atanabilir veya doğrudan kullanılabilir.'
    },
    {
        id: 24,
        category: 'functions',
        level: 5,
        title: 'Varsayılan Parametre',
        difficulty: 'medium',
        description: 'Varsayılan selamlama mesajı olan fonksiyon yaz.',
        expectedOutput: 'Merhaba!',
        code: [
            { type: 'text', content: 'def selamla(mesaj' },
            { type: 'blank', answer: '=', placeholder: '?', width: 40 },
            { type: 'text', content: '"Merhaba!"):' },
            { type: 'newline' },
            { type: 'text', content: '    print(mesaj)', isLine: true },
            { type: 'newline' },
            { type: 'text', content: 'selamla()  # Varsayılan değer kullanılır' },
        ],
        hint: 'Parametre = değer şeklinde varsayılan değer atanır.',
        explanation: 'Varsayılan parametreler fonksiyon çağrılırken değer verilmezse kullanılır. Bu esneklik sağlar.'
    },
    {
        id: 25,
        category: 'functions',
        level: 5,
        title: 'Birden Fazla Return',
        difficulty: 'hard',
        description: 'Bölme işlemi yapan ve hem bölüm hem kalanı döndüren fonksiyon.',
        expectedOutput: 'Bölüm: 3, Kalan: 1',
        code: [
            { type: 'text', content: 'def bol(a, b):', isLine: true },
            { type: 'text', content: '    bolum = a // b', isLine: true },
            { type: 'text', content: '    kalan = a ' },
            { type: 'blank', answer: '%', placeholder: '?', width: 40 },
            { type: 'text', content: ' b', isLine: true },
            { type: 'text', content: '    return bolum, ' },
            { type: 'blank', answer: 'kalan', placeholder: '?????', width: 80 },
            { type: 'text', content: '', isLine: true },
            { type: 'newline' },
            { type: 'text', content: 'b, k = bol(10, 3)', isLine: true },
            { type: 'text', content: 'print(f"Bölüm: {b}, Kalan: {k}")' },
        ],
        hint: 'Python\'da virgülle ayrılmış birden fazla değer döndürülebilir.',
        explanation: 'Python fonksiyonları tuple olarak birden fazla değer döndürebilir. Bu değerler aynı şekilde birden fazla değişkene atanabilir.'
    },
    
    // ========== SEVİYE 6: İLERİ ALGORİTMALAR (5 egzersiz) ==========
    {
        id: 26,
        category: 'algorithms_advanced',
        level: 6,
        title: 'Faktöriyel Hesaplama',
        difficulty: 'medium',
        description: 'N! (faktöriyel) hesapla. 5! = 5×4×3×2×1 = 120',
        expectedOutput: '120',
        code: [
            { type: 'text', content: 'n = 5', isLine: true },
            { type: 'text', content: 'sonuc = ' },
            { type: 'blank', answer: '1', placeholder: '?', width: 40 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'for i in range(1, n + 1):', isLine: true },
            { type: 'text', content: '    sonuc ' },
            { type: 'blank', answer: '*=', placeholder: '??', width: 50 },
            { type: 'text', content: ' i', isLine: true },
            { type: 'text', content: 'print(sonuc)' },
        ],
        hint: 'Faktöriyel çarpma işlemidir. *= değeri çarparak günceller.',
        explanation: 'Faktöriyel algoritması: 1\'den N\'e kadar tüm sayıları çarp. *= operatörü çarparak günceller (sonuc *= i = sonuc = sonuc * i).'
    },
    {
        id: 27,
        category: 'algorithms_advanced',
        level: 6,
        title: 'Fibonacci Serisi',
        difficulty: 'medium',
        description: 'İlk 7 Fibonacci sayısını üret: 0, 1, 1, 2, 3, 5, 8',
        expectedOutput: '0 1 1 2 3 5 8',
        code: [
            { type: 'text', content: 'a, b = 0, 1', isLine: true },
            { type: 'text', content: 'for i in range(7):', isLine: true },
            { type: 'text', content: '    print(a, end=" ")', isLine: true },
            { type: 'text', content: '    a, b = b, a ' },
            { type: 'blank', answer: '+', placeholder: '?', width: 40 },
            { type: 'text', content: ' b' },
        ],
        hint: 'Her sayı önceki iki sayının toplamıdır.',
        explanation: 'Fibonacci: Her sayı = önceki + ondan önceki. Python\'da a, b = b, a+b ile paralel atama yapılır. Bu zarif bir swap yöntemidir.'
    },
    {
        id: 28,
        category: 'algorithms_advanced',
        level: 6,
        title: 'Asal Sayı Kontrolü',
        difficulty: 'hard',
        description: 'Bir sayının asal olup olmadığını kontrol et.',
        expectedOutput: 'Asal',
        code: [
            { type: 'text', content: 'sayi = 17', isLine: true },
            { type: 'text', content: 'asal = True', isLine: true },
            { type: 'text', content: 'for i in range(2, sayi):', isLine: true },
            { type: 'text', content: '    if sayi % i ' },
            { type: 'blank', answer: '==', placeholder: '??', width: 50 },
            { type: 'text', content: ' 0:' },
            { type: 'newline' },
            { type: 'text', content: '        asal = ' },
            { type: 'blank', answer: 'False', placeholder: '?????', width: 80 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: '        break', isLine: true },
            { type: 'text', content: 'if asal:', isLine: true },
            { type: 'text', content: '    print("Asal")' },
        ],
        hint: 'Asal sayı sadece 1 ve kendisine bölünür. Tam bölünüyorsa (kalan 0) asal değildir.',
        explanation: 'Asal sayı algoritması: 2\'den sayıya kadar böl, tam bölünüyorsa asal değil. Optimizasyon: √n\'e kadar kontrol yeterli.'
    },
    {
        id: 29,
        category: 'algorithms_advanced',
        level: 6,
        title: 'Dizi Tersine Çevirme',
        difficulty: 'medium',
        description: 'Bir listeyi tersine çevir (son eleman başa gelsin).',
        expectedOutput: '[5, 4, 3, 2, 1]',
        code: [
            { type: 'text', content: 'liste = [1, 2, 3, 4, 5]', isLine: true },
            { type: 'text', content: 'ters = []', isLine: true },
            { type: 'text', content: 'for i in range(len(liste) - 1, -1, ' },
            { type: 'blank', answer: '-1', placeholder: '??', width: 50 },
            { type: 'text', content: '):' },
            { type: 'newline' },
            { type: 'text', content: '    ters.' },
            { type: 'blank', answer: 'append', placeholder: '??????', width: 90 },
            { type: 'text', content: '(liste[i])', isLine: true },
            { type: 'text', content: 'print(ters)' },
        ],
        hint: 'range(start, stop, step) - negatif step geriye sayar. append() listeye eleman ekler.',
        explanation: 'Tersine çevirme: Sondan başa doğru iterasyon yap. range(n-1, -1, -1) geriye doğru sayar. Python\'da liste[::-1] de kullanılabilir.'
    },
    {
        id: 30,
        category: 'algorithms_advanced',
        level: 6,
        title: 'Bubble Sort (Kabarcık Sıralaması)',
        difficulty: 'hard',
        description: 'Basit sıralama algoritması: Yan yana elemanları karşılaştır ve değiştir.',
        expectedOutput: '[1, 2, 3, 4, 5]',
        code: [
            { type: 'text', content: 'liste = [5, 2, 4, 1, 3]', isLine: true },
            { type: 'text', content: 'for i in range(len(liste)):', isLine: true },
            { type: 'text', content: '    for j in range(len(liste) - 1):', isLine: true },
            { type: 'text', content: '        if liste[j] ' },
            { type: 'blank', answer: '>', placeholder: '?', width: 40 },
            { type: 'text', content: ' liste[j + 1]:' },
            { type: 'newline' },
            { type: 'text', content: '            liste[j], liste[j + 1] = liste[j + 1], ' },
            { type: 'blank', answer: 'liste[j]', placeholder: '????????', width: 100 },
            { type: 'text', content: '', isLine: true },
            { type: 'text', content: 'print(liste)' },
        ],
        hint: 'Komşu elemanları karşılaştır, büyük olan sağa gitsin. Python\'da swap: a, b = b, a',
        explanation: 'Bubble Sort: Her turda en büyük eleman "kabarcık gibi" sona yükselir. İç içe döngülerle O(n²) karmaşıklık. Temel ama öğretici bir algoritma.'
    }
];

let currentExercise = null;
let currentExerciseIndex = 0;
let filteredExercises = [];
let currentFilter = 'all';

function initExercises() {
    filteredExercises = [...getCurrentExercises()];
}

// Initialize exercises on page load
document.addEventListener('DOMContentLoaded', () => {
    initExercises();
    renderExercisesList();
    updateLevelProgress();
    setupLevelNodes();
});

function setupLevelNodes() {
    document.querySelectorAll('.level-node').forEach(node => {
        node.addEventListener('click', () => {
            const level = parseInt(node.dataset.level);
            if (isLevelUnlocked(level)) {
                // Bu seviyenin kategorisini bul ve filtrele
                const categoryMap = {
                    1: 'algorithms_basic',
                    2: 'variables',
                    3: 'conditions',
                    4: 'loops',
                    5: 'functions',
                    6: 'algorithms_advanced'
                };
                filterExercises(categoryMap[level]);
                
                // Aktif butonu güncelle
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.category === categoryMap[level]) {
                        btn.classList.add('active');
                    }
                });
            } else {
                showLockedMessage(level);
            }
        });
    });
}

function getUnlockedLevels() {
    // Her seviyedeki egzersizlerin tamamlanma durumunu kontrol et
    const completedExercises = state.completedExercises || [];
    const exercises = getCurrentExercises();
    const unlockedLevels = [1]; // Seviye 1 her zaman açık
    
    for (let level = 1; level <= 5; level++) {
        const levelExercises = exercises.filter(ex => ex.level === level);
        const completedInLevel = levelExercises.filter(ex => completedExercises.includes(ex.id)).length;
        
        // Seviyedeki tüm egzersizler tamamlandıysa bir sonraki seviye açılır
        if (completedInLevel >= levelExercises.length && levelExercises.length > 0) {
            if (!unlockedLevels.includes(level + 1)) {
                unlockedLevels.push(level + 1);
            }
        }
    }
    
    return unlockedLevels;
}

function isLevelUnlocked(level) {
    return getUnlockedLevels().includes(level);
}

function updateLevelProgress() {
    const completedExercises = state.completedExercises || [];
    const exercises = getCurrentExercises();
    const unlockedLevels = getUnlockedLevels();
    
    for (let level = 1; level <= 6; level++) {
        const levelExercises = exercises.filter(ex => ex.level === level);
        const completedInLevel = levelExercises.filter(ex => completedExercises.includes(ex.id)).length;
        
        const node = document.querySelector(`.level-node[data-level="${level}"]`);
        const statusEl = document.getElementById(`level-status-${level}`);
        
        if (!node || !statusEl) continue;
        
        node.classList.remove('locked', 'completed', 'active');
        
        if (unlockedLevels.includes(level)) {
            if (completedInLevel >= levelExercises.length) {
                node.classList.add('completed');
                statusEl.textContent = '✓ Tamamlandı';
            } else {
                // Aktif seviye (çalışılan)
                if (completedInLevel > 0 || level === Math.max(...unlockedLevels)) {
                    node.classList.add('active');
                }
                statusEl.textContent = `${completedInLevel}/${levelExercises.length}`;
            }
        } else {
            node.classList.add('locked');
            statusEl.textContent = '🔒';
        }
    }
}

function renderExercisesList() {
    const container = document.getElementById('exercises-list');
    if (!container) return;
    
    const completedExercises = state.completedExercises || [];
    const unlockedLevels = getUnlockedLevels();
    
    container.innerHTML = filteredExercises.map((exercise, index) => {
        const isCompleted = completedExercises.includes(exercise.id);
        const isLocked = !unlockedLevels.includes(exercise.level);
        
        return `
            <div class="exercise-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
                 onclick="${isLocked ? 'showLockedMessage(' + exercise.level + ')' : 'openExercise(' + index + ')'}">
                ${isLocked ? '<div class="lock-overlay"><span>🔒</span></div>' : ''}
                <div class="exercise-card-header">
                    <span class="exercise-number">#${exercise.id}</span>
                    <span class="exercise-difficulty ${exercise.difficulty}">${getDifficultyText(exercise.difficulty)}</span>
                </div>
                <h3>${exercise.title}</h3>
                <p>${exercise.description.substring(0, 80)}...</p>
                <div class="exercise-card-footer">
                    <span class="exercise-tag">${getCategoryText(exercise.category)}</span>
                    <span class="exercise-level">Seviye ${exercise.level}</span>
                </div>
            </div>
        `;
    }).join('');
    
    updateLevelProgress();
}

function showLockedMessage(level) {
    const prevLevel = level - 1;
    const prevLevelName = getLevelName(prevLevel);
    showToast(`🔒 Bu bölüm kilitli! Önce "${prevLevelName}" bölümünü tamamla.`);
}

function getLevelName(level) {
    const names = {
        1: 'Temel Algoritmalar',
        2: 'Değişkenler',
        3: 'Koşullar',
        4: 'Döngüler',
        5: 'Fonksiyonlar',
        6: 'İleri Algoritmalar'
    };
    return names[level] || `Seviye ${level}`;
}

function getDifficultyText(difficulty) {
    const map = { easy: 'Kolay', medium: 'Orta', hard: 'Zor' };
    return map[difficulty] || difficulty;
}

function getCategoryText(category) {
    const map = { 
        'algorithms_basic': 'Temel Algoritmalar',
        'variables': 'Değişkenler', 
        'conditions': 'Koşullar', 
        'loops': 'Döngüler', 
        'functions': 'Fonksiyonlar',
        'algorithms_advanced': 'İleri Algoritmalar'
    };
    return map[category] || category;
}

function filterExercises(category) {
    currentFilter = category;
    const exercises = getCurrentExercises();
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter exercises
    if (category === 'all') {
        filteredExercises = [...exercises];
    } else {
        filteredExercises = exercises.filter(ex => ex.category === category);
    }
    
    renderExercisesList();
}

function openExercise(index) {
    currentExerciseIndex = index;
    currentExercise = filteredExercises[index];
    
    // Kilit kontrolü
    if (!isLevelUnlocked(currentExercise.level)) {
        showLockedMessage(currentExercise.level);
        return;
    }
    
    // Hide exercise list, show workspace
    document.getElementById('exercises-list').style.display = 'none';
    document.querySelector('.exercise-categories').style.display = 'none';
    document.querySelector('.level-progress-container').style.display = 'none';
    document.getElementById('exercise-workspace').classList.remove('hidden');
    
    // Update header
    document.getElementById('exercise-category-tag').textContent = getCategoryText(currentExercise.category);
    document.getElementById('exercise-title').textContent = `#${currentExercise.id} - ${currentExercise.title}`;
    document.getElementById('exercise-description').textContent = currentExercise.description;
    document.getElementById('expected-output').textContent = currentExercise.expectedOutput;
    
    // Update navigation
    document.getElementById('current-exercise-num').textContent = index + 1;
    document.getElementById('total-exercises').textContent = filteredExercises.length;
    
    // Önceki/sonraki butonlarını güncelle (kilitli olanları atla)
    updateExerciseNavigation();
    
    // Render code editor
    renderCodeEditor();
    
    // Hide previous result
    document.getElementById('exercise-result').classList.add('hidden');
}

function updateExerciseNavigation() {
    const prevBtn = document.getElementById('btn-prev-exercise');
    const nextBtn = document.getElementById('btn-next-exercise');
    
    // Önceki buton
    let hasPrev = false;
    for (let i = currentExerciseIndex - 1; i >= 0; i--) {
        if (isLevelUnlocked(filteredExercises[i].level)) {
            hasPrev = true;
            break;
        }
    }
    prevBtn.disabled = !hasPrev;
    
    // Sonraki buton
    let hasNext = false;
    for (let i = currentExerciseIndex + 1; i < filteredExercises.length; i++) {
        if (isLevelUnlocked(filteredExercises[i].level)) {
            hasNext = true;
            break;
        }
    }
    nextBtn.disabled = !hasNext;
}

function renderCodeEditor() {
    const container = document.getElementById('code-lines');
    let html = '';
    let lineNumber = 1;
    let blankIndex = 0;
    
    // Group code elements into lines
    let currentLine = [];
    const lines = [];
    
    currentExercise.code.forEach(item => {
        if (item.type === 'newline') {
            lines.push(currentLine);
            currentLine = [];
        } else if (item.isLine) {
            currentLine.push(item);
            lines.push(currentLine);
            currentLine = [];
        } else {
            currentLine.push(item);
        }
    });
    
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }
    
    lines.forEach((line, lineIdx) => {
        html += `<div class="code-line">`;
        html += `<span class="line-number">${lineNumber++}</span>`;
        html += `<div class="line-content">`;
        
        line.forEach(item => {
            if (item.type === 'text') {
                // Apply syntax highlighting
                let content = item.content;
                content = highlightSyntax(content);
                html += content;
            } else if (item.type === 'blank') {
                html += `
                    <span class="code-blank">
                        <input type="text" 
                               class="blank-input" 
                               data-index="${blankIndex}"
                               data-answer="${item.answer}"
                               data-alternatives="${item.alternatives ? item.alternatives.join('|') : ''}"
                               placeholder="${item.placeholder}"
                               style="width: ${item.width}px"
                               autocomplete="off"
                               spellcheck="false">
                    </span>
                `;
                blankIndex++;
            }
        });
        
        html += `</div></div>`;
    });
    
    container.innerHTML = html;
    
    // Add enter key handler to inputs
    container.querySelectorAll('.blank-input').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                checkExercise();
            }
        });
    });
    
    // Focus first input
    const firstInput = container.querySelector('.blank-input');
    if (firstInput) firstInput.focus();
}

function highlightSyntax(text) {
    // Keywords
    const keywords = ['def', 'if', 'else', 'elif', 'for', 'while', 'return', 'in', 'and', 'or', 'not', 'True', 'False', 'None', 'break', 'continue'];
    const functions = ['print', 'range', 'len', 'input', 'int', 'str', 'float'];
    
    let result = text;
    
    // Handle strings first (to avoid processing content inside strings)
    result = result.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="code-text string">$&</span>');
    
    // Handle comments
    result = result.replace(/(#.*)$/gm, '<span class="code-text comment">$1</span>');
    
    // Handle keywords (only if not inside a span already)
    keywords.forEach(kw => {
        const regex = new RegExp(`\\b(${kw})\\b(?![^<]*>)`, 'g');
        result = result.replace(regex, '<span class="code-text keyword">$1</span>');
    });
    
    // Handle function names
    functions.forEach(fn => {
        const regex = new RegExp(`\\b(${fn})(?=\\()(?![^<]*>)`, 'g');
        result = result.replace(regex, '<span class="code-text function">$1</span>');
    });
    
    // Handle numbers
    result = result.replace(/\b(\d+)\b(?![^<]*>)/g, '<span class="code-text number">$1</span>');
    
    // Handle operators
    result = result.replace(/([+\-*/%=<>!]+)(?![^<]*>)/g, '<span class="code-text operator">$1</span>');
    
    // Wrap remaining text
    return `<span class="code-text">${result}</span>`;
}

function checkExercise() {
    const inputs = document.querySelectorAll('.blank-input');
    let allCorrect = true;
    let wrongAnswers = [];
    
    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim();
        const correctAnswer = input.dataset.answer;
        const alternatives = input.dataset.alternatives ? input.dataset.alternatives.split('|') : [];
        
        // Check if answer is correct (including alternatives)
        const isCorrect = userAnswer === correctAnswer || alternatives.includes(userAnswer);
        
        input.classList.remove('correct', 'wrong');
        
        if (isCorrect) {
            input.classList.add('correct');
        } else {
            input.classList.add('wrong');
            allCorrect = false;
            wrongAnswers.push({
                userAnswer: userAnswer || '(boş)',
                correctAnswer: correctAnswer,
                index: index + 1
            });
        }
    });
    
    // Show result
    const resultDiv = document.getElementById('exercise-result');
    resultDiv.classList.remove('hidden', 'success', 'error');
    
    if (allCorrect) {
        resultDiv.classList.add('success');
        document.getElementById('result-icon').textContent = '✓';
        document.getElementById('result-title').textContent = 'Mükemmel! Doğru cevap!';
        document.getElementById('result-details').innerHTML = `
            <p>Tebrikler! Tüm boşlukları doğru doldurdun.</p>
            <p style="margin-top: 8px; color: var(--accent-warning);">+25 XP kazandın!</p>
        `;
        
        // Award XP and mark as completed
        if (!state.completedExercises) state.completedExercises = [];
        if (!state.completedExercises.includes(currentExercise.id)) {
            state.completedExercises.push(currentExercise.id);
            addXP(25);
            addActivity('💻', `${currentExercise.title} egzersizini tamamladın`);
            saveState();
            
            // Show XP popup
            showXPPopup(25);
            
            // Seviye tamamlandı mı kontrol et
            checkLevelCompletion(currentExercise.level);
        }
        
        updateUI();
        updateLevelProgress();
        renderExercisesList();
        updateExerciseNavigation();
        
    } else {
        resultDiv.classList.add('error');
        document.getElementById('result-icon').textContent = '✗';
        document.getElementById('result-title').textContent = 'Yanlış cevap!';
        
        let detailsHtml = '<p>Bazı boşluklar yanlış:</p>';
        wrongAnswers.forEach(wrong => {
            detailsHtml += `
                <div class="explanation">
                    <strong>Boşluk ${wrong.index}:</strong> "${wrong.userAnswer}" yazdın, 
                    doğrusu: <span class="correct-answer">${wrong.correctAnswer}</span>
                </div>
            `;
        });
        
        detailsHtml += `
            <div class="explanation" style="margin-top: 16px;">
                <strong>💡 Açıklama:</strong> ${currentExercise.explanation}
            </div>
        `;
        
        document.getElementById('result-details').innerHTML = detailsHtml;
    }
}

function showXPPopup(amount) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.textContent = `+${amount} XP`;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 1500);
}

function checkLevelCompletion(level) {
    const completedExercises = state.completedExercises || [];
    const exercises = getCurrentExercises();
    const levelExercises = exercises.filter(ex => ex.level === level);
    const completedInLevel = levelExercises.filter(ex => completedExercises.includes(ex.id)).length;
    
    // Seviye tamamlandıysa
    if (completedInLevel >= levelExercises.length) {
        const levelName = getLevelName(level);
        
        // Bonus XP ver
        addXP(50);
        addActivity('🎉', `"${levelName}" bölümünü tamamladın! +50 bonus XP`);
        
        // Bir sonraki seviye açıldı mı?
        if (level < 6) {
            const nextLevelName = getLevelName(level + 1);
            setTimeout(() => {
                showToast(`🔓 Yeni bölüm açıldı: "${nextLevelName}"!`);
            }, 1000);
        } else {
            // Tüm seviyeler tamamlandı!
            setTimeout(() => {
                showToast(`🏆 Tebrikler! Tüm egzersizleri tamamladın!`);
            }, 1000);
        }
        
        saveState();
    }
}

function showExerciseHint() {
    if (currentExercise) {
        showToast(`💡 İpucu: ${currentExercise.hint}`);
    }
}

function closeExercise() {
    document.getElementById('exercise-workspace').classList.add('hidden');
    document.getElementById('exercises-list').style.display = 'grid';
    document.querySelector('.exercise-categories').style.display = 'flex';
    document.querySelector('.level-progress-container').style.display = 'block';
    currentExercise = null;
    
    // Listeyi güncelle
    renderExercisesList();
}

function prevExercise() {
    // Kilitli olmayanı bul
    for (let i = currentExerciseIndex - 1; i >= 0; i--) {
        if (isLevelUnlocked(filteredExercises[i].level)) {
            openExercise(i);
            return;
        }
    }
}

function nextExercise() {
    // Kilitli olmayanı bul
    for (let i = currentExerciseIndex + 1; i < filteredExercises.length; i++) {
        if (isLevelUnlocked(filteredExercises[i].level)) {
            openExercise(i);
            return;
        }
    }
}

// Update state to include exercises
if (!state.completedExercises) {
    state.completedExercises = [];
}

// ===== Sandbox (Code Editor) =====
const exampleCodes = {
    python: {
        hello: `# Merhaba Dünya!
print("Merhaba Dünya!")
print("Python öğrenmeye hoş geldin!")`,

        variables: `# Değişkenler
isim = "Ali"
yas = 25
boy = 1.75

print(f"İsim: {isim}")
print(f"Yaş: {yas}")
print(f"Boy: {boy}")`,

        condition: `# If-Else Koşulları
yas = 18

if yas >= 18:
    print("Yetişkinsiniz!")
else:
    print("Çocuksunuz.")`,

        loop: `# For Döngüsü
print("Sayılar:")
for i in range(1, 6):
    print(i)`,

        function: `# Fonksiyonlar
def selamla(isim):
    print(f"Merhaba, {isim}!")

selamla("Ali")
selamla("Ayşe")`,

        list: `# Listeler
sayilar = [1, 2, 3, 4, 5]
print("Liste:")
for s in range(5):
    print(s)`,

        fibonacci: `# Fibonacci
a = 0
b = 1
print(a)
print(b)
for i in range(5):
    c = a + b
    print(c)
    a = b
    b = c`,

        factorial: `# Faktöriyel
n = 5
sonuc = 1
for i in range(1, 6):
    sonuc = sonuc * i
print(sonuc)`
    },
    
    csharp: {
        hello: `// Merhaba Dünya!
Console.WriteLine("Merhaba Dünya!");
Console.WriteLine("C# öğrenmeye hoş geldin!");`,

        variables: `// Değişkenler
string isim = "Ali";
int yas = 25;
double boy = 1.75;

Console.WriteLine($"İsim: {isim}");
Console.WriteLine($"Yaş: {yas}");
Console.WriteLine($"Boy: {boy}");`,

        condition: `// If-Else Koşulları
int yas = 18;

if (yas >= 18)
{
    Console.WriteLine("Yetişkinsiniz!");
}
else
{
    Console.WriteLine("Çocuksunuz.");
}`,

        loop: `// For Döngüsü
Console.WriteLine("Sayılar:");
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,

        function: `// Metotlar (Fonksiyonlar)
void Selamla(string isim)
{
    Console.WriteLine($"Merhaba, {isim}!");
}

Selamla("Ali");
Selamla("Ayşe");`,

        list: `// Diziler ve Listeler
int[] sayilar = {1, 2, 3, 4, 5};

Console.WriteLine("Dizi elemanları:");
foreach (int sayi in sayilar)
{
    Console.WriteLine(sayi);
}`,

        fibonacci: `// Fibonacci Serisi
int a = 0, b = 1;
Console.WriteLine(a);
Console.WriteLine(b);

for (int i = 0; i < 8; i++)
{
    int c = a + b;
    Console.WriteLine(c);
    a = b;
    b = c;
}`,

        factorial: `// Faktöriyel Hesaplama
int n = 5;
int sonuc = 1;

for (int i = 1; i <= n; i++)
{
    sonuc *= i;
}

Console.WriteLine($"{n}! = {sonuc}");`
    },
    
    javascript: {
        hello: `// Merhaba Dünya!
console.log("Merhaba Dünya!");
console.log("JavaScript öğrenmeye hoş geldin!");`,

        variables: `// Değişkenler
let isim = "Ali";
let yas = 25;
const boy = 1.75;

console.log("İsim: " + isim);
console.log("Yaş: " + yas);
console.log("Boy: " + boy);`,

        condition: `// If-Else Koşulları
let yas = 18;

if (yas >= 18) {
    console.log("Yetişkinsiniz!");
} else {
    console.log("Çocuksunuz.");
}`,

        loop: `// For Döngüsü
console.log("Sayılar:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,

        function: `// Fonksiyonlar
function selamla(isim) {
    console.log("Merhaba, " + isim + "!");
}

selamla("Ali");
selamla("Ayşe");

// Arrow function
const topla = (a, b) => a + b;
console.log("5 + 3 = " + topla(5, 3));`,

        list: `// Diziler
const sayilar = [1, 2, 3, 4, 5];

console.log("Dizi elemanları:");
sayilar.forEach(sayi => {
    console.log(sayi);
});

// Map ile dönüştürme
const kareler = sayilar.map(x => x * x);
console.log("Kareler: " + kareler);`,

        fibonacci: `// Fibonacci Serisi
let a = 0, b = 1;
console.log(a);
console.log(b);

for (let i = 0; i < 8; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}`,

        factorial: `// Faktöriyel Hesaplama
function faktoriyel(n) {
    if (n <= 1) return 1;
    return n * faktoriyel(n - 1);
}

for (let i = 1; i <= 7; i++) {
    console.log(i + "! = " + faktoriyel(i));
}`
    },
    
    web: {
        hello: `<!DOCTYPE html>
<html>
<head>
    <title>Merhaba Dünya</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        h1 {
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <h1>🌍 Merhaba Dünya!</h1>
</body>
</html>`,

        variables: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Değişkenleri</title>
    <style>
        :root {
            --primary-color: #6c5ce7;
            --secondary-color: #a29bfe;
            --text-color: white;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: var(--primary-color);
            color: var(--text-color);
            padding: 40px;
        }
        
        .box {
            background: var(--secondary-color);
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>CSS Değişkenleri</h1>
    <div class="box">Birinci Kutu</div>
    <div class="box">İkinci Kutu</div>
</body>
</html>`,

        condition: `<!DOCTYPE html>
<html>
<head>
    <title>Flexbox Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .card {
            flex: 1;
            min-width: 150px;
            background: #667eea;
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Flexbox Kartlar</h1>
    <div class="container">
        <div class="card">Kart 1</div>
        <div class="card">Kart 2</div>
        <div class="card">Kart 3</div>
    </div>
</body>
</html>`,

        loop: `<!DOCTYPE html>
<html>
<head>
    <title>Grid Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        
        .item {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 40px;
            text-align: center;
            border-radius: 10px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1>CSS Grid</h1>
    <div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
</body>
</html>`,

        function: `<!DOCTYPE html>
<html>
<head>
    <title>Buton Stilleri</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background: #1a1a2e;
        }
        
        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }
        
        .btn-primary { background: #6c5ce7; color: white; }
        .btn-success { background: #00b894; color: white; }
        .btn-danger { background: #d63031; color: white; }
    </style>
</head>
<body>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
</body>
</html>`,

        list: `<!DOCTYPE html>
<html>
<head>
    <title>Liste Stilleri</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #f5f5f5;
        }
        
        ul {
            list-style: none;
            padding: 0;
            max-width: 400px;
        }
        
        li {
            background: white;
            padding: 15px 20px;
            margin: 8px 0;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        li::before {
            content: "✓";
            background: #00b894;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <h1>Yapılacaklar</h1>
    <ul>
        <li>HTML öğren</li>
        <li>CSS öğren</li>
        <li>JavaScript öğren</li>
    </ul>
</body>
</html>`,

        fibonacci: `<!DOCTYPE html>
<html>
<head>
    <title>Animasyon</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #1a1a2e;
        }
        
        .loader {
            width: 80px;
            height: 80px;
            border: 4px solid #333;
            border-top: 4px solid #6c5ce7;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loader"></div>
</body>
</html>`,

        factorial: `<!DOCTYPE html>
<html>
<head>
    <title>Form Tasarımı</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            padding: 40px;
            background: #667eea;
        }
        
        .form {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            width: 300px;
        }
        
        h2 { margin-top: 0; color: #333; }
        
        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 2px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
        }
        
        input:focus {
            border-color: #667eea;
            outline: none;
        }
        
        button {
            width: 100%;
            padding: 14px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="form">
        <h2>Giriş Yap</h2>
        <input type="email" placeholder="E-posta">
        <input type="password" placeholder="Şifre">
        <button>Giriş</button>
    </div>
</body>
</html>`
    }
};

// Legacy support
const exampleCodesLegacy = {
    hello: `# Merhaba Dünya!
print("Merhaba Dünya!")
print("Python öğrenmeye hoş geldin!")`,

    variables: `# Değişkenler
isim = "Ali"
yas = 25
boy = 1.75
ogrenci = True

print(f"İsim: {isim}")
print(f"Yaş: {yas}")
print(f"Boy: {boy} metre")
print(f"Öğrenci mi: {ogrenci}")`,

    condition: `# If-Else Koşulları
yas = 18

if yas >= 18:
    print("Yetişkinsiniz!")
    print("Oy kullanabilirsiniz.")
else:
    print("Henüz çocuksunuz.")
    print("Biraz daha bekleyin.")

# Not kontrolü
not_ort = 75

if not_ort >= 90:
    print("Notunuz: AA")
elif not_ort >= 80:
    print("Notunuz: BB")
elif not_ort >= 70:
    print("Notunuz: CC")
else:
    print("Notunuz: FF")`,

    loop: `# Döngüler

# For döngüsü
print("1'den 5'e kadar:")
for i in range(1, 6):
    print(i)

print()

# While döngüsü
print("Geri sayım:")
sayac = 5
while sayac > 0:
    print(sayac)
    sayac -= 1
print("Başla!")

print()

# Liste üzerinde döngü
meyveler = ["elma", "armut", "muz"]
for meyve in meyveler:
    print(f"Ben {meyve} severim!")`,

    function: `# Fonksiyonlar

# Basit fonksiyon
def selamla():
    print("Merhaba!")

selamla()

# Parametreli fonksiyon
def selamla_kisi(isim):
    print(f"Merhaba, {isim}!")

selamla_kisi("Ali")
selamla_kisi("Ayşe")

# Return ile değer döndürme
def topla(a, b):
    return a + b

sonuc = topla(5, 3)
print(f"5 + 3 = {sonuc}")

# Varsayılan parametre
def uslu(sayi, us=2):
    return sayi ** us

print(f"3² = {uslu(3)}")
print(f"2³ = {uslu(2, 3)}")`,

    list: `# Listeler

# Liste oluşturma
sayilar = [1, 2, 3, 4, 5]
print("Liste:", sayilar)

# Eleman ekleme
sayilar.append(6)
print("6 eklendi:", sayilar)

# Eleman erişimi
print(f"İlk eleman: {sayilar[0]}")
print(f"Son eleman: {sayilar[-1]}")

# Liste uzunluğu
print(f"Uzunluk: {len(sayilar)}")

# Liste döngüsü
toplam = 0
for sayi in sayilar:
    toplam += sayi
print(f"Toplam: {toplam}")

# Liste sıralama
karisik = [3, 1, 4, 1, 5, 9, 2, 6]
karisik.sort()
print("Sıralı:", karisik)`,

    fibonacci: `# Fibonacci Serisi
# Her sayı önceki iki sayının toplamıdır
# 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

def fibonacci(n):
    seri = []
    a, b = 0, 1
    
    for i in range(n):
        seri.append(a)
        a, b = b, a + b
    
    return seri

# İlk 10 Fibonacci sayısı
sonuc = fibonacci(10)
print("Fibonacci Serisi:")
print(sonuc)

# Formüllü hesaplama
print("\\nAdım adım:")
a, b = 0, 1
for i in range(10):
    print(f"F({i}) = {a}")
    a, b = b, a + b`,

    factorial: `# Faktöriyel Hesaplama
# n! = n × (n-1) × (n-2) × ... × 2 × 1
# Örnek: 5! = 5 × 4 × 3 × 2 × 1 = 120

def faktoriyel(n):
    if n <= 1:
        return 1
    sonuc = 1
    for i in range(1, n + 1):
        sonuc *= i
    return sonuc

# Test
for i in range(1, 8):
    print(f"{i}! = {faktoriyel(i)}")

print()

# Recursive (özyinelemeli) versiyon
def faktoriyel_recursive(n):
    if n <= 1:
        return 1
    return n * faktoriyel_recursive(n - 1)

print("Recursive ile 6! =", faktoriyel_recursive(6))`
};

// Hata türleri ve önerileri
const errorPatterns = [
    {
        pattern: /SyntaxError.*invalid syntax/i,
        message: "Sözdizimi hatası! Kodunuzda yazım hatası var.",
        suggestion: "Parantezleri, tırnak işaretlerini ve iki nokta (:) işaretlerini kontrol edin.",
        lesson: "variables",
        lessonName: "Değişkenler"
    },
    {
        pattern: /NameError.*is not defined/i,
        message: "Tanımsız değişken hatası!",
        suggestion: "Değişkeni kullanmadan önce tanımladığınızdan emin olun. Yazım hatası olabilir.",
        lesson: "variables",
        lessonName: "Değişkenler"
    },
    {
        pattern: /IndentationError/i,
        message: "Girinti hatası!",
        suggestion: "Python'da girintiler (boşluklar) çok önemli. if, for, while ve def'den sonra 4 boşluk kullanın.",
        lesson: "conditions",
        lessonName: "Koşullar"
    },
    {
        pattern: /TypeError.*unsupported operand/i,
        message: "Tür uyumsuzluğu hatası!",
        suggestion: "Farklı türdeki verileri işlem yapmaya çalışıyorsunuz. Örneğin sayı ile metni toplayamazsınız.",
        lesson: "variables",
        lessonName: "Değişkenler"
    },
    {
        pattern: /TypeError.*'.*' object is not callable/i,
        message: "Çağırma hatası!",
        suggestion: "Fonksiyon olmayan bir şeyi fonksiyon gibi çağırmaya çalışıyorsunuz. Parantezleri kontrol edin.",
        lesson: "functions",
        lessonName: "Fonksiyonlar"
    },
    {
        pattern: /IndexError.*out of range/i,
        message: "Index hatası!",
        suggestion: "Listenin olmayan bir elemanına erişmeye çalışıyorsunuz. Liste uzunluğunu kontrol edin.",
        lesson: "loops",
        lessonName: "Döngüler"
    },
    {
        pattern: /ZeroDivisionError/i,
        message: "Sıfıra bölme hatası!",
        suggestion: "Bir sayıyı sıfıra bölemezsiniz. Bölen sayının 0 olmadığından emin olun.",
        lesson: "algorithms_basic",
        lessonName: "Temel Algoritmalar"
    },
    {
        pattern: /ValueError/i,
        message: "Değer hatası!",
        suggestion: "Geçersiz bir değer kullandınız. Örneğin int('abc') çalışmaz.",
        lesson: "variables",
        lessonName: "Değişkenler"
    },
    {
        pattern: /KeyError/i,
        message: "Anahtar hatası!",
        suggestion: "Sözlükte olmayan bir anahtara erişmeye çalışıyorsunuz.",
        lesson: "loops",
        lessonName: "Döngüler"
    }
];

let recommendedLesson = null;

// Sandbox'ta dil değiştirme
function switchSandboxLang(lang) {
    state.selectedLanguage = lang;
    saveState();
    
    // Dil butonlarını güncelle
    document.querySelectorAll('.sandbox-lang-selector .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Tüm UI'ı güncelle
    updateLanguageUI();
    
    // Kod alanını temizle ve placeholder güncelle
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.value = '';
        updateLineNumbers();
    }
    clearOutput();
    
    // Subtitle güncelle
    const subtitle = document.getElementById('sandbox-subtitle');
    if (subtitle) {
        const langInfo = languageInfo[lang];
        subtitle.textContent = `${langInfo.icon} ${langInfo.name} kodlarını yaz, çalıştır ve sonuçları gör!`;
    }
    
    // Sidebar'daki dili de güncelle
    const iconEl = document.getElementById('current-lang-icon');
    const nameEl = document.getElementById('current-lang-name');
    if (iconEl) iconEl.textContent = languageInfo[lang].icon;
    if (nameEl) nameEl.textContent = languageInfo[lang].name;
    
    // Egzersizleri de güncelle
    initExercises();
    renderExercisesList();
    updateLevelProgress();
    
    // Komut referansını güncelle
    if (typeof window.updateReferenceForLanguage === 'function') {
        window.updateReferenceForLanguage();
    }
    
    showToast(`${languageInfo[lang].icon} ${languageInfo[lang].name} seçildi!`);
}

// Sandbox başlangıçta aktif dili ayarla
function initSandboxLangButtons() {
    const lang = state.selectedLanguage || 'python';
    document.querySelectorAll('.sandbox-lang-selector .lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Subtitle güncelle
    const subtitle = document.getElementById('sandbox-subtitle');
    if (subtitle) {
        const langInfo = languageInfo[lang];
        subtitle.textContent = `${langInfo.icon} ${langInfo.name} kodlarını yaz, çalıştır ve sonuçları gör!`;
    }
}

function setupSandbox() {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;
    
    // Dil butonlarını ayarla
    initSandboxLangButtons();
    
    // Satır numaralarını güncelle
    codeInput.addEventListener('input', updateLineNumbers);
    codeInput.addEventListener('scroll', syncScroll);
    
    // Klavye kısayolları
    codeInput.addEventListener('keydown', (e) => {
        // Ctrl+Enter - Çalıştır
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        
        // Ctrl+L - Temizle
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            clearCode();
        }
        
        // Tab - Girinti
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            codeInput.value = codeInput.value.substring(0, start) + '    ' + codeInput.value.substring(end);
            codeInput.selectionStart = codeInput.selectionEnd = start + 4;
            updateLineNumbers();
        }
    });
    
    updateLineNumbers();
}

function updateLineNumbers() {
    const codeInput = document.getElementById('code-input');
    const lineNumbers = document.getElementById('line-numbers');
    if (!codeInput || !lineNumbers) return;
    
    const lines = codeInput.value.split('\n').length;
    let numbersHtml = '';
    for (let i = 1; i <= Math.max(lines, 15); i++) {
        numbersHtml += i + '\n';
    }
    lineNumbers.textContent = numbersHtml;
}

function syncScroll() {
    const codeInput = document.getElementById('code-input');
    const lineNumbers = document.getElementById('line-numbers');
    if (codeInput && lineNumbers) {
        lineNumbers.scrollTop = codeInput.scrollTop;
    }
}

function runCode() {
    const codeInput = document.getElementById('code-input');
    const outputContent = document.getElementById('output-content');
    if (!codeInput || !outputContent) return;
    
    const code = codeInput.value.trim();
    const lang = state.selectedLanguage || 'python';
    
    if (!code) {
        outputContent.innerHTML = `
            <div class="output-placeholder">
                <span class="placeholder-icon">📝</span>
                <p>Önce bir kod yazın!</p>
            </div>
        `;
        return;
    }
    
    // Çıktıyı temizle
    outputContent.innerHTML = '<div class="output-line info">⏳ Kod analiz ediliyor...</div>';
    
    // Hata panelini gizle
    closeErrorHelp();
    
    // Dile göre çalıştır
    setTimeout(() => {
        switch(lang) {
            case 'python':
                runPythonCode(code, outputContent);
                break;
            case 'csharp':
                runCSharpCode(code, outputContent);
                break;
            case 'javascript':
                runJavaScriptCode(code, outputContent);
                break;
            case 'web':
                runWebCode(code, outputContent);
                break;
            default:
                runPythonCode(code, outputContent);
        }
    }, 100);
}

function runPythonCode(code, outputContent) {
    let output = [];
    let hasError = false;
    let variables = {};
    
    try {
        const lines = code.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            
            // Boş satır veya yorum
            if (!trimmed || trimmed.startsWith('#')) continue;
            
            // Değişken ataması: isim = "değer" veya isim = sayı
            const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
            if (assignMatch && !trimmed.includes('==')) {
                const varName = assignMatch[1];
                let value = assignMatch[2].trim();
                
                // String değer
                if ((value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))) {
                    variables[varName] = value.slice(1, -1);
                }
                // Sayı değer
                else if (!isNaN(value)) {
                    variables[varName] = parseFloat(value);
                }
                // Başka değişkene referans veya ifade
                else {
                    try {
                        // Basit aritmetik
                        let expr = value;
                        for (const [vn, vv] of Object.entries(variables)) {
                            expr = expr.replace(new RegExp('\\b' + vn + '\\b', 'g'), 
                                typeof vv === 'string' ? `"${vv}"` : vv);
                        }
                        variables[varName] = eval(expr);
                    } catch {
                        variables[varName] = value;
                    }
                }
                continue;
            }
            
            // print() ifadesi
            const printMatch = trimmed.match(/^print\s*\(\s*(.+)\s*\)$/);
            if (printMatch) {
                let content = printMatch[1].trim();
                let result = '';
                
                // f-string
                if (content.startsWith('f"') || content.startsWith("f'")) {
                    result = content.slice(2, -1);
                    // {değişken} yerleştir
                    result = result.replace(/\{(\w+)\}/g, (match, varName) => {
                        return variables[varName] !== undefined ? variables[varName] : match;
                    });
                }
                // Normal string
                else if ((content.startsWith('"') && content.endsWith('"')) ||
                         (content.startsWith("'") && content.endsWith("'"))) {
                    result = content.slice(1, -1);
                }
                // Değişken veya ifade
                else {
                    // Virgülle ayrılmış çoklu değer
                    if (content.includes(',')) {
                        const parts = content.split(',').map(p => {
                            p = p.trim();
                            if (variables[p] !== undefined) return variables[p];
                            if ((p.startsWith('"') && p.endsWith('"')) ||
                                (p.startsWith("'") && p.endsWith("'"))) {
                                return p.slice(1, -1);
                            }
                            return p;
                        });
                        result = parts.join(' ');
                    } else {
                        if (variables[content] !== undefined) {
                            result = variables[content];
                        } else {
                            // İfadeyi değerlendir
                            try {
                                let expr = content;
                                for (const [vn, vv] of Object.entries(variables)) {
                                    expr = expr.replace(new RegExp('\\b' + vn + '\\b', 'g'), 
                                        typeof vv === 'string' ? `"${vv}"` : vv);
                                }
                                result = eval(expr);
                            } catch {
                                result = content;
                            }
                        }
                    }
                }
                
                output.push(String(result));
                continue;
            }
            
            // For döngüsü (basit)
            const forMatch = trimmed.match(/^for\s+(\w+)\s+in\s+range\s*\(\s*(.+)\s*\)\s*:$/);
            if (forMatch) {
                const varName = forMatch[1];
                const rangeArgs = forMatch[2].split(',').map(a => parseInt(a.trim()));
                let start = 0, end = 0, step = 1;
                
                if (rangeArgs.length === 1) {
                    end = rangeArgs[0];
                } else if (rangeArgs.length === 2) {
                    start = rangeArgs[0];
                    end = rangeArgs[1];
                } else if (rangeArgs.length === 3) {
                    start = rangeArgs[0];
                    end = rangeArgs[1];
                    step = rangeArgs[2];
                }
                
                // Döngü gövdesini bul
                let bodyLines = [];
                let j = i + 1;
                while (j < lines.length && (lines[j].startsWith('    ') || lines[j].startsWith('\t') || lines[j].trim() === '')) {
                    if (lines[j].trim()) bodyLines.push(lines[j].trim());
                    j++;
                }
                
                // Döngüyü çalıştır
                for (let k = start; step > 0 ? k < end : k > end; k += step) {
                    variables[varName] = k;
                    for (const bodyLine of bodyLines) {
                        const bodyPrint = bodyLine.match(/^print\s*\(\s*(.+)\s*\)$/);
                        if (bodyPrint) {
                            let val = bodyPrint[1].trim();
                            if (variables[val] !== undefined) {
                                output.push(String(variables[val]));
                            } else if ((val.startsWith('"') && val.endsWith('"')) ||
                                       (val.startsWith("'") && val.endsWith("'"))) {
                                output.push(val.slice(1, -1));
                            }
                        }
                    }
                }
                
                i = j - 1;
                continue;
            }
        }
        
        if (output.length === 0) {
            output.push('✓ Kod başarıyla çalıştı. (Çıktı üretilmedi)');
        }
        
    } catch (e) {
        hasError = true;
        output = [`❌ Hata: ${e.message}`];
        handleError(e.message);
    }
    
    outputContent.innerHTML = output.map(line => 
        `<div class="output-line ${hasError ? 'error' : ''}">${escapeHtml(String(line))}</div>`
    ).join('');
}

function runCSharpCode(code, outputContent) {
    let output = [];
    let hasError = false;
    let variables = {};
    
    // İfadeyi değerlendir (matematiksel işlemler ve değişkenler)
    function evaluateExpression(expr) {
        expr = expr.trim();
        
        // Parantezleri temizle
        if (expr.startsWith('(') && expr.endsWith(')')) {
            expr = expr.slice(1, -1);
        }
        
        // String mi?
        if (expr.startsWith('"') && expr.endsWith('"')) {
            return expr.slice(1, -1);
        }
        
        // Boolean?
        if (expr === 'true') return true;
        if (expr === 'false') return false;
        
        // Direkt sayı mı?
        if (!isNaN(expr) && expr !== '') {
            return parseFloat(expr);
        }
        
        // Sadece değişken mi?
        if (variables[expr] !== undefined) {
            return variables[expr];
        }
        
        // Matematiksel ifade - değişkenleri değerlerle değiştir
        let evalExpr = expr;
        for (const [varName, varValue] of Object.entries(variables)) {
            // Tam kelime eşleşmesi için regex
            const regex = new RegExp('\\b' + varName + '\\b', 'g');
            evalExpr = evalExpr.replace(regex, varValue);
        }
        
        // Güvenli değerlendirme (sadece sayılar ve operatörler)
        try {
            // Sadece güvenli karakterler: sayılar, +, -, *, /, %, (, ), boşluk, nokta
            if (/^[\d\s\+\-\*\/\%\(\)\.]+$/.test(evalExpr)) {
                return eval(evalExpr);
            }
        } catch (e) {}
        
        return expr; // Değerlendiremediyse olduğu gibi döndür
    }
    
    try {
        const lines = code.split('\n');
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('//')) continue;
            
            // Console.WriteLine
            const printMatch = trimmed.match(/Console\.WriteLine\s*\(\s*(.+)\s*\)\s*;?$/);
            if (printMatch) {
                let content = printMatch[1].trim();
                
                // String interpolation $"..."
                if (content.startsWith('$"') && content.endsWith('"')) {
                    let result = content.slice(2, -1);
                    // {değişken} veya {ifade} değiştir
                    result = result.replace(/\{([^}]+)\}/g, (match, expr) => {
                        const val = evaluateExpression(expr.trim());
                        return val !== undefined ? val : match;
                    });
                    output.push(result);
                }
                // Normal string
                else if (content.startsWith('"') && content.endsWith('"')) {
                    output.push(content.slice(1, -1));
                }
                // Değişken veya ifade
                else {
                    const result = evaluateExpression(content);
                    output.push(String(result));
                }
                continue;
            }
            
            // Console.Write (satır atlamadan)
            const writeMatch = trimmed.match(/Console\.Write\s*\(\s*(.+)\s*\)\s*;?$/);
            if (writeMatch) {
                let content = writeMatch[1].trim();
                if (content.startsWith('"') && content.endsWith('"')) {
                    // Eğer son çıktı varsa ona ekle, yoksa yeni oluştur
                    const text = content.slice(1, -1);
                    if (output.length > 0) {
                        output[output.length - 1] += text;
                    } else {
                        output.push(text);
                    }
                } else {
                    const result = evaluateExpression(content);
                    if (output.length > 0) {
                        output[output.length - 1] += String(result);
                    } else {
                        output.push(String(result));
                    }
                }
                continue;
            }
            
            // Değişken tanımlama: int x = 5; veya string s = "test";
            const varMatch = trimmed.match(/^(int|string|double|float|bool|var)\s+(\w+)\s*=\s*(.+?)\s*;?$/);
            if (varMatch) {
                const varType = varMatch[1];
                const varName = varMatch[2];
                let valueExpr = varMatch[3].trim();
                
                // Noktalı virgülü kaldır
                if (valueExpr.endsWith(';')) {
                    valueExpr = valueExpr.slice(0, -1).trim();
                }
                
                variables[varName] = evaluateExpression(valueExpr);
                continue;
            }
            
            // Değişken ataması (tip olmadan): x = 10;
            const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+?)\s*;?$/);
            if (assignMatch && variables[assignMatch[1]] !== undefined) {
                const varName = assignMatch[1];
                let valueExpr = assignMatch[2].trim();
                if (valueExpr.endsWith(';')) {
                    valueExpr = valueExpr.slice(0, -1).trim();
                }
                variables[varName] = evaluateExpression(valueExpr);
                continue;
            }
        }
        
        if (output.length === 0) {
            output.push('✓ C# kodu analiz edildi. (Çıktı üretilmedi)');
        }
        
    } catch (e) {
        hasError = true;
        output = [`❌ Hata: ${e.message}`];
    }
    
    outputContent.innerHTML = output.map(line => 
        `<div class="output-line ${hasError ? 'error' : ''}">${escapeHtml(String(line))}</div>`
    ).join('');
}

function runJavaScriptCode(code, outputContent) {
    let output = [];
    let hasError = false;
    
    try {
        // console.log'u yakala
        const originalLog = console.log;
        console.log = (...args) => {
            output.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        
        // Kodu çalıştır
        eval(code);
        
        // console.log'u geri al
        console.log = originalLog;
        
        if (output.length === 0) {
            output.push('✓ JavaScript kodu çalıştı. (Çıktı üretilmedi)');
        }
        
    } catch (e) {
        hasError = true;
        output = [`❌ Hata: ${e.name}: ${e.message}`];
        handleError(`${e.name}: ${e.message}`);
    }
    
    outputContent.innerHTML = output.map(line => 
        `<div class="output-line ${hasError ? 'error' : ''}">${escapeHtml(String(line))}</div>`
    ).join('');
}

function runWebCode(code, outputContent) {
    // HTML/CSS kodu için önizleme göster
    try {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.style.background = 'white';
        
        outputContent.innerHTML = '';
        outputContent.appendChild(iframe);
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
        
    } catch (e) {
        outputContent.innerHTML = `<div class="output-line error">❌ Hata: ${e.message}</div>`;
    }
}

window.escapeHtml = function(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
var escapeHtml = window.escapeHtml;

function handleError(errorMessage) {
    const outputContent = document.getElementById('output-content');
    outputContent.innerHTML = `<div class="output-line error">❌ ${errorMessage}</div>`;
    
    // Hata türünü bul ve yardım göster
    for (const pattern of errorPatterns) {
        if (pattern.pattern.test(errorMessage)) {
            showErrorHelp(errorMessage, pattern);
            return;
        }
    }
    
    // Genel hata
    showErrorHelp(errorMessage, {
        message: "Bir hata oluştu!",
        suggestion: "Kodunuzu kontrol edin ve tekrar deneyin.",
        lesson: "variables",
        lessonName: "Temel Kavramlar"
    });
}

function showErrorHelp(errorMessage, pattern) {
    const panel = document.getElementById('error-help-panel');
    const errorMsgEl = document.getElementById('error-message');
    const suggestionEl = document.getElementById('error-suggestion');
    const lessonBtn = document.getElementById('goto-lesson-btn');
    
    panel.classList.remove('hidden');
    errorMsgEl.textContent = errorMessage;
    
    suggestionEl.innerHTML = `
        <h4>💡 Çözüm Önerisi:</h4>
        <p>${pattern.suggestion}</p>
    `;
    
    recommendedLesson = pattern.lesson;
    lessonBtn.innerHTML = `📚 "${pattern.lessonName}" Dersine Git →`;
}

function closeErrorHelp() {
    const panel = document.getElementById('error-help-panel');
    if (panel) panel.classList.add('hidden');
}

function goToRecommendedLesson() {
    if (recommendedLesson) {
        // Egzersizler bölümüne git
        document.querySelector('[data-section="exercises"]').click();
        
        // Biraz bekle ve filtrele
        setTimeout(() => {
            filterExercises(recommendedLesson);
        }, 300);
    }
    closeErrorHelp();
}

function clearCode() {
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.value = '';
        updateLineNumbers();
        codeInput.focus();
    }
}

function clearOutput() {
    const outputContent = document.getElementById('output-content');
    if (outputContent) {
        outputContent.innerHTML = `
            <div class="output-placeholder">
                <span class="placeholder-icon">🚀</span>
                <p>Kodunu yaz ve "Çalıştır" butonuna bas!</p>
                <p class="placeholder-hint">veya Ctrl+Enter kullan</p>
            </div>
        `;
    }
    closeErrorHelp();
}

function loadExample() {
    loadExampleCode('hello');
}

function loadExampleCode(exampleId) {
    const codeInput = document.getElementById('code-input');
    const lang = state.selectedLanguage || 'python';
    
    if (codeInput && exampleCodes[lang] && exampleCodes[lang][exampleId]) {
        codeInput.value = exampleCodes[lang][exampleId];
        updateLineNumbers();
        clearOutput();
        codeInput.focus();
        
        const langInfo = languageInfo[lang];
        showToast(`📄 ${langInfo.icon} "${exampleId}" örneği yüklendi!`);
    }
}

// Sandbox'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    setupSandbox();
});

// ===== KOMUT REFERANSI =====
var currentReferenceFilter = 'all';
var currentSearchQuery = '';

// Mevcut dil için komutları al
window.getCurrentCommands = function() {
    if (typeof allCommandsData === 'undefined') {
        console.error('allCommandsData yüklenmedi!');
        return [];
    }
    const lang = state.selectedLanguage || 'python';
    return allCommandsData[lang] || allCommandsData.python || [];
};

// Referans listesini render et
window.renderReferenceList = function() {
    const container = document.getElementById('reference-list');
    if (!container) {
        console.error('reference-list container bulunamadı!');
        return;
    }
    
    const commands = window.getCurrentCommands();
    if (!commands || commands.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">⚠️</div>
                <h3>Komutlar yüklenemedi</h3>
                <p>Sayfayı yenileyin</p>
            </div>
        `;
        return;
    }
    
    let filtered = [...commands];
    
    // Kategori filtresi
    if (currentReferenceFilter !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === currentReferenceFilter);
    }
    
    // Arama filtresi
    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase();
        filtered = filtered.filter(cmd => 
            cmd.name.toLowerCase().includes(query) ||
            cmd.shortDesc.toLowerCase().includes(query) ||
            cmd.description.toLowerCase().includes(query)
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>Sonuç bulunamadı</h3>
                <p>Farklı bir arama terimi deneyin</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    for (let i = 0; i < filtered.length; i++) {
        const cmd = filtered[i];
        const syntaxLine = cmd.syntax.split('\n')[0].replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html += `
            <div class="reference-card" onclick="window.openCommand('${cmd.id}')">
                <div class="reference-card-header">
                    <div class="reference-card-icon">${cmd.icon}</div>
                    <div class="reference-card-title">
                        <h3>${cmd.name}</h3>
                        <span>${cmd.categoryName}</span>
                    </div>
                    <span class="reference-card-category">${cmd.categoryName}</span>
                </div>
                <p class="reference-card-desc">${cmd.shortDesc}</p>
                <div class="reference-card-syntax">${syntaxLine}</div>
            </div>
        `;
    }
    container.innerHTML = html;
    console.log('Kartlar eklendi:', filtered.length);
}

// Kategori filtrele
window.filterReference = function(category) {
    currentReferenceFilter = category;
    
    // Aktif butonu güncelle
    document.querySelectorAll('.ref-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    window.renderReferenceList();
};

// Arama
window.searchReference = function() {
    const input = document.getElementById('reference-search-input');
    currentSearchQuery = input ? input.value : '';
    window.renderReferenceList();
};

// Komut detayını aç
window.openCommand = function(commandId) {
    const commands = window.getCurrentCommands();
    const cmd = commands.find(c => c.id === commandId);
    if (!cmd) return;
    
    const detail = document.getElementById('command-detail');
    if (!detail) return;
    
    // Parametreler HTML
    let paramsHtml = '';
    if (cmd.parameters && cmd.parameters.length > 0) {
        paramsHtml = `
            <div class="command-section">
                <h3>📋 Parametreler</h3>
                <ul>
                    ${cmd.parameters.map(p => `<li><strong>${p.name}</strong>: ${p.desc}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Örnekler HTML
    let examplesHtml = '';
    if (cmd.examples && cmd.examples.length > 0) {
        examplesHtml = `
            <div class="command-section">
                <h3>💻 Örnekler</h3>
                ${cmd.examples.map(ex => `
                    <div class="command-example">
                        <div class="command-example-header">
                            <span>${ex.title}</span>
                        </div>
                        <pre class="command-example-code">${escapeHtml(ex.code)}</pre>
                        ${ex.output ? `<div class="command-example-output">${escapeHtml(ex.output)}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // İpuçları HTML
    let tipsHtml = '';
    if (cmd.tips && cmd.tips.length > 0) {
        tipsHtml = `
            <div class="command-tips">
                <h4>💡 İpuçları</h4>
                <ul>
                    ${cmd.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // İlgili komutlar HTML
    let relatedHtml = '';
    if (cmd.related && cmd.related.length > 0) {
        relatedHtml = `
            <div class="command-section">
                <h3>🔗 İlgili Komutlar</h3>
                <div class="command-related">
                    ${cmd.related.map(rel => `
                        <span class="related-command-tag" onclick="openCommand('${rel}')">${rel}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    detail.innerHTML = `
        <div class="command-detail-header">
            <div class="command-icon">${cmd.icon}</div>
            <div class="command-title-area">
                <h2>${cmd.name}</h2>
                <span class="command-category-tag">${cmd.categoryName}</span>
            </div>
        </div>
        
        <div class="command-section">
            <h3>📖 Açıklama</h3>
            <p>${cmd.description}</p>
        </div>
        
        <div class="command-section">
            <h3>✍️ Sözdizimi (Syntax)</h3>
            <div class="command-syntax-box">${escapeHtml(cmd.syntax)}</div>
        </div>
        
        ${paramsHtml}
        ${examplesHtml}
        ${tipsHtml}
        ${relatedHtml}
    `;
    
    document.getElementById('command-modal').classList.add('active');
}

// Komut modalını kapat
window.closeCommandModal = function() {
    document.getElementById('command-modal').classList.remove('active');
};

// Referans bölümünü başlat
window.initReference = function() {
    console.log('initReference çağrıldı');
    const commands = window.getCurrentCommands();
    console.log('Komut sayısı:', commands.length);
    
    window.renderReferenceList();
    
    // Subtitle güncelle
    const subtitle = document.getElementById('reference-subtitle');
    if (subtitle) {
        const lang = state.selectedLanguage || 'python';
        const info = languageInfo[lang];
        subtitle.textContent = `${info.icon} ${info.name} - Tüm komutları ve yapıları detaylı öğren!`;
    }
};

// Dil değiştiğinde referansı güncelle
window.updateReferenceForLanguage = function() {
    currentReferenceFilter = 'all';
    currentSearchQuery = '';
    
    // Arama kutusunu temizle
    const searchInput = document.getElementById('reference-search-input');
    if (searchInput) searchInput.value = '';
    
    // Kategori butonlarını sıfırla
    document.querySelectorAll('.ref-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    window.initReference();
};

// ===== AUTOCOMPLETE SİSTEMİ =====

// Her dil için autocomplete önerileri
const autocompleteData = {
    python: [
        // Anahtar kelimeler
        { name: 'if', type: 'keyword', desc: 'Koşul ifadesi', snippet: 'if ${1:koşul}:\n    ${2:pass}' },
        { name: 'elif', type: 'keyword', desc: 'Else if koşulu', snippet: 'elif ${1:koşul}:\n    ${2:pass}' },
        { name: 'else', type: 'keyword', desc: 'Diğer durum', snippet: 'else:\n    ${1:pass}' },
        { name: 'for', type: 'keyword', desc: 'For döngüsü', snippet: 'for ${1:i} in ${2:range(10)}:\n    ${3:pass}' },
        { name: 'while', type: 'keyword', desc: 'While döngüsü', snippet: 'while ${1:koşul}:\n    ${2:pass}' },
        { name: 'def', type: 'keyword', desc: 'Fonksiyon tanımla', snippet: 'def ${1:fonksiyon_adı}(${2:parametreler}):\n    ${3:pass}' },
        { name: 'class', type: 'keyword', desc: 'Sınıf tanımla', snippet: 'class ${1:SınıfAdı}:\n    def __init__(self):\n        ${2:pass}' },
        { name: 'return', type: 'keyword', desc: 'Değer döndür' },
        { name: 'import', type: 'keyword', desc: 'Modül içe aktar', snippet: 'import ${1:modül}' },
        { name: 'from', type: 'keyword', desc: 'Modülden içe aktar', snippet: 'from ${1:modül} import ${2:*}' },
        { name: 'try', type: 'keyword', desc: 'Hata yakalama bloğu', snippet: 'try:\n    ${1:pass}\nexcept ${2:Exception} as e:\n    ${3:print(e)}' },
        { name: 'except', type: 'keyword', desc: 'Hata yakala' },
        { name: 'finally', type: 'keyword', desc: 'Her durumda çalış' },
        { name: 'with', type: 'keyword', desc: 'Context manager', snippet: 'with ${1:open("dosya.txt")} as ${2:f}:\n    ${3:pass}' },
        { name: 'lambda', type: 'keyword', desc: 'Anonim fonksiyon', snippet: 'lambda ${1:x}: ${2:x}' },
        { name: 'True', type: 'keyword', desc: 'Boolean True' },
        { name: 'False', type: 'keyword', desc: 'Boolean False' },
        { name: 'None', type: 'keyword', desc: 'Boş değer' },
        { name: 'and', type: 'keyword', desc: 'Mantıksal VE' },
        { name: 'or', type: 'keyword', desc: 'Mantıksal VEYA' },
        { name: 'not', type: 'keyword', desc: 'Mantıksal DEĞİL' },
        { name: 'in', type: 'keyword', desc: 'İçinde mi kontrol' },
        { name: 'is', type: 'keyword', desc: 'Aynı nesne mi' },
        { name: 'break', type: 'keyword', desc: 'Döngüden çık' },
        { name: 'continue', type: 'keyword', desc: 'Sonraki iterasyon' },
        { name: 'pass', type: 'keyword', desc: 'Boş ifade' },
        { name: 'global', type: 'keyword', desc: 'Global değişken' },
        { name: 'assert', type: 'keyword', desc: 'Doğrulama' },
        
        // Fonksiyonlar
        { name: 'print', type: 'function', desc: 'Ekrana yazdır', snippet: 'print(${1:"Merhaba"})' },
        { name: 'input', type: 'function', desc: 'Kullanıcıdan girdi al', snippet: 'input(${1:"Giriş: "})' },
        { name: 'len', type: 'function', desc: 'Uzunluk döndür', snippet: 'len(${1:liste})' },
        { name: 'range', type: 'function', desc: 'Sayı aralığı', snippet: 'range(${1:10})' },
        { name: 'int', type: 'function', desc: 'Tam sayıya çevir', snippet: 'int(${1:değer})' },
        { name: 'float', type: 'function', desc: 'Ondalık sayıya çevir', snippet: 'float(${1:değer})' },
        { name: 'str', type: 'function', desc: 'Metne çevir', snippet: 'str(${1:değer})' },
        { name: 'bool', type: 'function', desc: 'Boolean\'a çevir', snippet: 'bool(${1:değer})' },
        { name: 'list', type: 'function', desc: 'Liste oluştur', snippet: 'list(${1:})' },
        { name: 'dict', type: 'function', desc: 'Sözlük oluştur', snippet: 'dict(${1:})' },
        { name: 'set', type: 'function', desc: 'Küme oluştur', snippet: 'set(${1:})' },
        { name: 'tuple', type: 'function', desc: 'Tuple oluştur', snippet: 'tuple(${1:})' },
        { name: 'type', type: 'function', desc: 'Tip döndür', snippet: 'type(${1:değer})' },
        { name: 'abs', type: 'function', desc: 'Mutlak değer', snippet: 'abs(${1:sayı})' },
        { name: 'max', type: 'function', desc: 'En büyük değer', snippet: 'max(${1:liste})' },
        { name: 'min', type: 'function', desc: 'En küçük değer', snippet: 'min(${1:liste})' },
        { name: 'sum', type: 'function', desc: 'Toplam', snippet: 'sum(${1:liste})' },
        { name: 'sorted', type: 'function', desc: 'Sıralı liste', snippet: 'sorted(${1:liste})' },
        { name: 'reversed', type: 'function', desc: 'Ters sıra', snippet: 'reversed(${1:liste})' },
        { name: 'enumerate', type: 'function', desc: 'Index ile döngü', snippet: 'enumerate(${1:liste})' },
        { name: 'zip', type: 'function', desc: 'Paralel iterasyon', snippet: 'zip(${1:liste1}, ${2:liste2})' },
        { name: 'map', type: 'function', desc: 'Fonksiyon uygula', snippet: 'map(${1:fonksiyon}, ${2:liste})' },
        { name: 'filter', type: 'function', desc: 'Filtrele', snippet: 'filter(${1:fonksiyon}, ${2:liste})' },
        { name: 'open', type: 'function', desc: 'Dosya aç', snippet: 'open(${1:"dosya.txt"}, ${2:"r"})' },
        { name: 'round', type: 'function', desc: 'Yuvarla', snippet: 'round(${1:sayı}, ${2:2})' },
        { name: 'isinstance', type: 'function', desc: 'Tip kontrolü', snippet: 'isinstance(${1:nesne}, ${2:tip})' },
        
        // Metodlar
        { name: '.append()', type: 'method', desc: 'Listeye ekle', snippet: '.append(${1:eleman})' },
        { name: '.extend()', type: 'method', desc: 'Liste genişlet', snippet: '.extend(${1:liste})' },
        { name: '.insert()', type: 'method', desc: 'Pozisyona ekle', snippet: '.insert(${1:index}, ${2:eleman})' },
        { name: '.remove()', type: 'method', desc: 'Elemanı sil', snippet: '.remove(${1:eleman})' },
        { name: '.pop()', type: 'method', desc: 'Son elemanı çıkar', snippet: '.pop(${1:})' },
        { name: '.sort()', type: 'method', desc: 'Listeyi sırala', snippet: '.sort()' },
        { name: '.reverse()', type: 'method', desc: 'Listeyi ters çevir', snippet: '.reverse()' },
        { name: '.split()', type: 'method', desc: 'Metni böl', snippet: '.split(${1:" "})' },
        { name: '.join()', type: 'method', desc: 'Listeyi birleştir', snippet: '.join(${1:liste})' },
        { name: '.strip()', type: 'method', desc: 'Boşlukları temizle', snippet: '.strip()' },
        { name: '.lower()', type: 'method', desc: 'Küçük harfe çevir', snippet: '.lower()' },
        { name: '.upper()', type: 'method', desc: 'Büyük harfe çevir', snippet: '.upper()' },
        { name: '.replace()', type: 'method', desc: 'Değiştir', snippet: '.replace(${1:"eski"}, ${2:"yeni"})' },
        { name: '.find()', type: 'method', desc: 'Bul', snippet: '.find(${1:"aranan"})' },
        { name: '.count()', type: 'method', desc: 'Say', snippet: '.count(${1:eleman})' },
        { name: '.format()', type: 'method', desc: 'Formatla', snippet: '.format(${1:değer})' },
        { name: '.keys()', type: 'method', desc: 'Sözlük anahtarları', snippet: '.keys()' },
        { name: '.values()', type: 'method', desc: 'Sözlük değerleri', snippet: '.values()' },
        { name: '.items()', type: 'method', desc: 'Anahtar-değer çiftleri', snippet: '.items()' },
        { name: '.get()', type: 'method', desc: 'Güvenli değer al', snippet: '.get(${1:"anahtar"}, ${2:varsayılan})' },
        
        // Snippets
        { name: 'ifmain', type: 'snippet', desc: 'Main bloğu', snippet: 'if __name__ == "__main__":\n    ${1:main()}' },
        { name: 'fori', type: 'snippet', desc: 'Index ile for döngüsü', snippet: 'for i in range(${1:10}):\n    ${2:print(i)}' },
        { name: 'fore', type: 'snippet', desc: 'Enumerate ile for', snippet: 'for i, item in enumerate(${1:liste}):\n    ${2:print(i, item)}' },
        { name: 'listcomp', type: 'snippet', desc: 'Liste anlama', snippet: '[${1:x} for ${2:x} in ${3:liste}]' },
        { name: 'dictcomp', type: 'snippet', desc: 'Sözlük anlama', snippet: '{${1:k}: ${2:v} for ${3:k, v} in ${4:items}}' },
    ],
    
    csharp: [
        // Anahtar kelimeler
        { name: 'if', type: 'keyword', desc: 'Koşul ifadesi', snippet: 'if (${1:koşul})\n{\n    ${2}\n}' },
        { name: 'else', type: 'keyword', desc: 'Diğer durum', snippet: 'else\n{\n    ${1}\n}' },
        { name: 'else if', type: 'keyword', desc: 'Else if koşulu', snippet: 'else if (${1:koşul})\n{\n    ${2}\n}' },
        { name: 'for', type: 'keyword', desc: 'For döngüsü', snippet: 'for (int ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++)\n{\n    ${3}\n}' },
        { name: 'foreach', type: 'keyword', desc: 'Foreach döngüsü', snippet: 'foreach (var ${1:item} in ${2:liste})\n{\n    ${3}\n}' },
        { name: 'while', type: 'keyword', desc: 'While döngüsü', snippet: 'while (${1:koşul})\n{\n    ${2}\n}' },
        { name: 'do', type: 'keyword', desc: 'Do-while döngüsü', snippet: 'do\n{\n    ${1}\n} while (${2:koşul});' },
        { name: 'switch', type: 'keyword', desc: 'Switch ifadesi', snippet: 'switch (${1:değişken})\n{\n    case ${2:değer}:\n        ${3}\n        break;\n    default:\n        ${4}\n        break;\n}' },
        { name: 'try', type: 'keyword', desc: 'Hata yakalama', snippet: 'try\n{\n    ${1}\n}\ncatch (Exception ${2:e})\n{\n    ${3:Console.WriteLine(e.Message);}\n}' },
        { name: 'class', type: 'keyword', desc: 'Sınıf tanımla', snippet: 'class ${1:SınıfAdı}\n{\n    ${2}\n}' },
        { name: 'public', type: 'keyword', desc: 'Public erişim' },
        { name: 'private', type: 'keyword', desc: 'Private erişim' },
        { name: 'static', type: 'keyword', desc: 'Static üye' },
        { name: 'void', type: 'keyword', desc: 'Değer döndürmez' },
        { name: 'return', type: 'keyword', desc: 'Değer döndür' },
        { name: 'new', type: 'keyword', desc: 'Yeni nesne oluştur' },
        { name: 'null', type: 'keyword', desc: 'Boş referans' },
        { name: 'true', type: 'keyword', desc: 'Boolean True' },
        { name: 'false', type: 'keyword', desc: 'Boolean False' },
        { name: 'break', type: 'keyword', desc: 'Döngüden çık' },
        { name: 'continue', type: 'keyword', desc: 'Sonraki iterasyon' },
        { name: 'using', type: 'keyword', desc: 'Namespace kullan', snippet: 'using ${1:System};' },
        { name: 'namespace', type: 'keyword', desc: 'Namespace tanımla', snippet: 'namespace ${1:MyNamespace}\n{\n    ${2}\n}' },
        { name: 'async', type: 'keyword', desc: 'Asenkron metot' },
        { name: 'await', type: 'keyword', desc: 'Asenkron bekle' },
        { name: 'var', type: 'keyword', desc: 'Tip çıkarımı' },
        
        // Tipler
        { name: 'int', type: 'variable', desc: '32-bit tam sayı' },
        { name: 'string', type: 'variable', desc: 'Metin tipi' },
        { name: 'bool', type: 'variable', desc: 'Boolean tipi' },
        { name: 'double', type: 'variable', desc: '64-bit ondalık' },
        { name: 'float', type: 'variable', desc: '32-bit ondalık' },
        { name: 'char', type: 'variable', desc: 'Karakter tipi' },
        { name: 'long', type: 'variable', desc: '64-bit tam sayı' },
        { name: 'decimal', type: 'variable', desc: 'Hassas ondalık' },
        { name: 'object', type: 'variable', desc: 'Temel nesne tipi' },
        { name: 'List', type: 'class', desc: 'Dinamik liste', snippet: 'List<${1:int}> ${2:liste} = new List<${1:int}>();' },
        { name: 'Dictionary', type: 'class', desc: 'Anahtar-değer', snippet: 'Dictionary<${1:string}, ${2:int}> ${3:dict} = new Dictionary<${1:string}, ${2:int}>();' },
        { name: 'Array', type: 'class', desc: 'Sabit dizi' },
        
        // Fonksiyonlar
        { name: 'Console.WriteLine', type: 'function', desc: 'Konsola yaz', snippet: 'Console.WriteLine(${1:"Merhaba"});' },
        { name: 'Console.Write', type: 'function', desc: 'Konsola yaz (satır atlamaz)', snippet: 'Console.Write(${1:"Merhaba"});' },
        { name: 'Console.ReadLine', type: 'function', desc: 'Konsoldan oku', snippet: 'Console.ReadLine()' },
        { name: 'Console.ReadKey', type: 'function', desc: 'Tuş oku', snippet: 'Console.ReadKey();' },
        { name: 'int.Parse', type: 'function', desc: 'String\'den int\'e', snippet: 'int.Parse(${1:str})' },
        { name: 'int.TryParse', type: 'function', desc: 'Güvenli dönüşüm', snippet: 'int.TryParse(${1:str}, out ${2:result})' },
        { name: 'Convert.ToInt32', type: 'function', desc: 'Int\'e çevir', snippet: 'Convert.ToInt32(${1:değer})' },
        { name: 'Math.Abs', type: 'function', desc: 'Mutlak değer', snippet: 'Math.Abs(${1:sayı})' },
        { name: 'Math.Max', type: 'function', desc: 'En büyük', snippet: 'Math.Max(${1:a}, ${2:b})' },
        { name: 'Math.Min', type: 'function', desc: 'En küçük', snippet: 'Math.Min(${1:a}, ${2:b})' },
        { name: 'Math.Pow', type: 'function', desc: 'Üs al', snippet: 'Math.Pow(${1:taban}, ${2:üs})' },
        { name: 'Math.Sqrt', type: 'function', desc: 'Karekök', snippet: 'Math.Sqrt(${1:sayı})' },
        { name: 'Math.Round', type: 'function', desc: 'Yuvarla', snippet: 'Math.Round(${1:sayı}, ${2:2})' },
        
        // Metodlar
        { name: '.ToString()', type: 'method', desc: 'String\'e çevir', snippet: '.ToString()' },
        { name: '.ToLower()', type: 'method', desc: 'Küçük harfe', snippet: '.ToLower()' },
        { name: '.ToUpper()', type: 'method', desc: 'Büyük harfe', snippet: '.ToUpper()' },
        { name: '.Trim()', type: 'method', desc: 'Boşluk temizle', snippet: '.Trim()' },
        { name: '.Split()', type: 'method', desc: 'Böl', snippet: '.Split(${1:\',\'})' },
        { name: '.Contains()', type: 'method', desc: 'İçeriyor mu', snippet: '.Contains(${1:"aranan"})' },
        { name: '.IndexOf()', type: 'method', desc: 'Index bul', snippet: '.IndexOf(${1:"aranan"})' },
        { name: '.Replace()', type: 'method', desc: 'Değiştir', snippet: '.Replace(${1:"eski"}, ${2:"yeni"})' },
        { name: '.Substring()', type: 'method', desc: 'Alt metin', snippet: '.Substring(${1:başlangıç}, ${2:uzunluk})' },
        { name: '.Length', type: 'method', desc: 'Uzunluk' },
        { name: '.Add()', type: 'method', desc: 'Listeye ekle', snippet: '.Add(${1:eleman})' },
        { name: '.Remove()', type: 'method', desc: 'Listeden sil', snippet: '.Remove(${1:eleman})' },
        { name: '.Clear()', type: 'method', desc: 'Temizle', snippet: '.Clear()' },
        { name: '.Count', type: 'method', desc: 'Eleman sayısı' },
        
        // Snippets
        { name: 'main', type: 'snippet', desc: 'Main metodu', snippet: 'static void Main(string[] args)\n{\n    ${1}\n}' },
        { name: 'cw', type: 'snippet', desc: 'Console.WriteLine', snippet: 'Console.WriteLine(${1});' },
        { name: 'prop', type: 'snippet', desc: 'Property', snippet: 'public ${1:int} ${2:Name} { get; set; }' },
        { name: 'ctor', type: 'snippet', desc: 'Constructor', snippet: 'public ${1:ClassName}()\n{\n    ${2}\n}' },
    ],
    
    javascript: [
        // Anahtar kelimeler
        { name: 'if', type: 'keyword', desc: 'Koşul ifadesi', snippet: 'if (${1:koşul}) {\n    ${2}\n}' },
        { name: 'else', type: 'keyword', desc: 'Diğer durum', snippet: 'else {\n    ${1}\n}' },
        { name: 'else if', type: 'keyword', desc: 'Else if koşulu', snippet: 'else if (${1:koşul}) {\n    ${2}\n}' },
        { name: 'for', type: 'keyword', desc: 'For döngüsü', snippet: 'for (let ${1:i} = 0; ${1:i} < ${2:10}; ${1:i}++) {\n    ${3}\n}' },
        { name: 'for...of', type: 'keyword', desc: 'Değerler üzerinde döngü', snippet: 'for (const ${1:item} of ${2:array}) {\n    ${3}\n}' },
        { name: 'for...in', type: 'keyword', desc: 'Anahtarlar üzerinde döngü', snippet: 'for (const ${1:key} in ${2:object}) {\n    ${3}\n}' },
        { name: 'while', type: 'keyword', desc: 'While döngüsü', snippet: 'while (${1:koşul}) {\n    ${2}\n}' },
        { name: 'do', type: 'keyword', desc: 'Do-while döngüsü', snippet: 'do {\n    ${1}\n} while (${2:koşul});' },
        { name: 'switch', type: 'keyword', desc: 'Switch ifadesi', snippet: 'switch (${1:değişken}) {\n    case ${2:değer}:\n        ${3}\n        break;\n    default:\n        ${4}\n}' },
        { name: 'try', type: 'keyword', desc: 'Hata yakalama', snippet: 'try {\n    ${1}\n} catch (${2:error}) {\n    ${3:console.error(error);}\n}' },
        { name: 'function', type: 'keyword', desc: 'Fonksiyon tanımla', snippet: 'function ${1:fonksiyonAdı}(${2:parametreler}) {\n    ${3}\n}' },
        { name: 'const', type: 'keyword', desc: 'Sabit değişken' },
        { name: 'let', type: 'keyword', desc: 'Block-scoped değişken' },
        { name: 'var', type: 'keyword', desc: 'Function-scoped değişken' },
        { name: 'return', type: 'keyword', desc: 'Değer döndür' },
        { name: 'class', type: 'keyword', desc: 'Sınıf tanımla', snippet: 'class ${1:SınıfAdı} {\n    constructor() {\n        ${2}\n    }\n}' },
        { name: 'new', type: 'keyword', desc: 'Yeni nesne' },
        { name: 'this', type: 'keyword', desc: 'Mevcut nesne' },
        { name: 'null', type: 'keyword', desc: 'Boş değer' },
        { name: 'undefined', type: 'keyword', desc: 'Tanımsız' },
        { name: 'true', type: 'keyword', desc: 'Boolean True' },
        { name: 'false', type: 'keyword', desc: 'Boolean False' },
        { name: 'break', type: 'keyword', desc: 'Döngüden çık' },
        { name: 'continue', type: 'keyword', desc: 'Sonraki iterasyon' },
        { name: 'import', type: 'keyword', desc: 'Modül içe aktar', snippet: 'import { ${1} } from \'${2:modül}\';' },
        { name: 'export', type: 'keyword', desc: 'Dışa aktar' },
        { name: 'async', type: 'keyword', desc: 'Asenkron fonksiyon', snippet: 'async function ${1:fonksiyon}() {\n    ${2}\n}' },
        { name: 'await', type: 'keyword', desc: 'Promise bekle' },
        { name: 'typeof', type: 'keyword', desc: 'Tip kontrolü' },
        { name: 'instanceof', type: 'keyword', desc: 'Instance kontrolü' },
        
        // Fonksiyonlar
        { name: 'console.log', type: 'function', desc: 'Konsola yazdır', snippet: 'console.log(${1});' },
        { name: 'console.error', type: 'function', desc: 'Hata yazdır', snippet: 'console.error(${1});' },
        { name: 'console.warn', type: 'function', desc: 'Uyarı yazdır', snippet: 'console.warn(${1});' },
        { name: 'console.table', type: 'function', desc: 'Tablo olarak yazdır', snippet: 'console.table(${1});' },
        { name: 'alert', type: 'function', desc: 'Uyarı göster', snippet: 'alert(${1:"Mesaj"});' },
        { name: 'prompt', type: 'function', desc: 'Kullanıcı girişi', snippet: 'prompt(${1:"Soru"});' },
        { name: 'parseInt', type: 'function', desc: 'Tam sayıya çevir', snippet: 'parseInt(${1:str})' },
        { name: 'parseFloat', type: 'function', desc: 'Ondalığa çevir', snippet: 'parseFloat(${1:str})' },
        { name: 'Number', type: 'function', desc: 'Sayıya çevir', snippet: 'Number(${1:değer})' },
        { name: 'String', type: 'function', desc: 'Metne çevir', snippet: 'String(${1:değer})' },
        { name: 'Boolean', type: 'function', desc: 'Boolean\'a çevir', snippet: 'Boolean(${1:değer})' },
        { name: 'Array.isArray', type: 'function', desc: 'Dizi mi kontrol', snippet: 'Array.isArray(${1:değer})' },
        { name: 'JSON.parse', type: 'function', desc: 'JSON\'dan nesneye', snippet: 'JSON.parse(${1:jsonStr})' },
        { name: 'JSON.stringify', type: 'function', desc: 'Nesneden JSON\'a', snippet: 'JSON.stringify(${1:obj})' },
        { name: 'setTimeout', type: 'function', desc: 'Gecikmeli çalıştır', snippet: 'setTimeout(() => {\n    ${1}\n}, ${2:1000});' },
        { name: 'setInterval', type: 'function', desc: 'Tekrarlı çalıştır', snippet: 'setInterval(() => {\n    ${1}\n}, ${2:1000});' },
        { name: 'fetch', type: 'function', desc: 'HTTP isteği', snippet: 'fetch(${1:"url"})\n    .then(res => res.json())\n    .then(data => {\n        ${2}\n    });' },
        { name: 'document.getElementById', type: 'function', desc: 'ID ile element bul', snippet: 'document.getElementById(${1:"id"})' },
        { name: 'document.querySelector', type: 'function', desc: 'CSS seçici ile bul', snippet: 'document.querySelector(${1:"selector"})' },
        { name: 'document.querySelectorAll', type: 'function', desc: 'Tüm eşleşenleri bul', snippet: 'document.querySelectorAll(${1:"selector"})' },
        
        // Metodlar
        { name: '.map()', type: 'method', desc: 'Her eleman için dönüşüm', snippet: '.map(${1:item} => ${2})' },
        { name: '.filter()', type: 'method', desc: 'Filtreleme', snippet: '.filter(${1:item} => ${2})' },
        { name: '.reduce()', type: 'method', desc: 'İndirgeme', snippet: '.reduce((${1:acc}, ${2:item}) => ${3}, ${4:başlangıç})' },
        { name: '.forEach()', type: 'method', desc: 'Her eleman için', snippet: '.forEach(${1:item} => {\n    ${2}\n})' },
        { name: '.find()', type: 'method', desc: 'Eleman bul', snippet: '.find(${1:item} => ${2})' },
        { name: '.findIndex()', type: 'method', desc: 'Index bul', snippet: '.findIndex(${1:item} => ${2})' },
        { name: '.includes()', type: 'method', desc: 'İçeriyor mu', snippet: '.includes(${1:aranan})' },
        { name: '.some()', type: 'method', desc: 'En az biri mi', snippet: '.some(${1:item} => ${2})' },
        { name: '.every()', type: 'method', desc: 'Hepsi mi', snippet: '.every(${1:item} => ${2})' },
        { name: '.push()', type: 'method', desc: 'Sona ekle', snippet: '.push(${1:eleman})' },
        { name: '.pop()', type: 'method', desc: 'Sondan çıkar', snippet: '.pop()' },
        { name: '.shift()', type: 'method', desc: 'Baştan çıkar', snippet: '.shift()' },
        { name: '.unshift()', type: 'method', desc: 'Başa ekle', snippet: '.unshift(${1:eleman})' },
        { name: '.slice()', type: 'method', desc: 'Dilimleme', snippet: '.slice(${1:başlangıç}, ${2:bitiş})' },
        { name: '.splice()', type: 'method', desc: 'Ekleme/Silme', snippet: '.splice(${1:index}, ${2:silSayısı})' },
        { name: '.join()', type: 'method', desc: 'Birleştir', snippet: '.join(${1:", "})' },
        { name: '.split()', type: 'method', desc: 'Böl', snippet: '.split(${1:" "})' },
        { name: '.trim()', type: 'method', desc: 'Boşluk temizle', snippet: '.trim()' },
        { name: '.toLowerCase()', type: 'method', desc: 'Küçük harfe', snippet: '.toLowerCase()' },
        { name: '.toUpperCase()', type: 'method', desc: 'Büyük harfe', snippet: '.toUpperCase()' },
        { name: '.replace()', type: 'method', desc: 'Değiştir', snippet: '.replace(${1:"eski"}, ${2:"yeni"})' },
        { name: '.length', type: 'method', desc: 'Uzunluk' },
        { name: '.toString()', type: 'method', desc: 'String\'e çevir', snippet: '.toString()' },
        
        // Snippets
        { name: 'arrow', type: 'snippet', desc: 'Arrow function', snippet: 'const ${1:fn} = (${2}) => {\n    ${3}\n};' },
        { name: 'arrowshort', type: 'snippet', desc: 'Kısa arrow function', snippet: 'const ${1:fn} = (${2}) => ${3};' },
        { name: 'promise', type: 'snippet', desc: 'Promise', snippet: 'new Promise((resolve, reject) => {\n    ${1}\n});' },
        { name: 'asyncfn', type: 'snippet', desc: 'Async function', snippet: 'async function ${1:fnName}() {\n    try {\n        ${2}\n    } catch (error) {\n        console.error(error);\n    }\n}' },
        { name: 'cl', type: 'snippet', desc: 'console.log', snippet: 'console.log(${1});' },
    ],
    
    web: [
        // HTML Etiketleri
        { name: 'html', type: 'snippet', desc: 'HTML5 şablonu', snippet: '<!DOCTYPE html>\n<html lang="tr">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${1:Sayfa}</title>\n</head>\n<body>\n    ${2}\n</body>\n</html>' },
        { name: 'div', type: 'keyword', desc: 'Block konteyner', snippet: '<div>${1}</div>' },
        { name: 'span', type: 'keyword', desc: 'Inline konteyner', snippet: '<span>${1}</span>' },
        { name: 'p', type: 'keyword', desc: 'Paragraf', snippet: '<p>${1}</p>' },
        { name: 'h1', type: 'keyword', desc: 'Başlık 1', snippet: '<h1>${1}</h1>' },
        { name: 'h2', type: 'keyword', desc: 'Başlık 2', snippet: '<h2>${1}</h2>' },
        { name: 'h3', type: 'keyword', desc: 'Başlık 3', snippet: '<h3>${1}</h3>' },
        { name: 'a', type: 'keyword', desc: 'Link', snippet: '<a href="${1:#}">${2:Link}</a>' },
        { name: 'img', type: 'keyword', desc: 'Resim', snippet: '<img src="${1}" alt="${2}">' },
        { name: 'ul', type: 'keyword', desc: 'Sırasız liste', snippet: '<ul>\n    <li>${1}</li>\n</ul>' },
        { name: 'ol', type: 'keyword', desc: 'Sıralı liste', snippet: '<ol>\n    <li>${1}</li>\n</ol>' },
        { name: 'li', type: 'keyword', desc: 'Liste öğesi', snippet: '<li>${1}</li>' },
        { name: 'table', type: 'keyword', desc: 'Tablo', snippet: '<table>\n    <tr>\n        <th>${1}</th>\n    </tr>\n    <tr>\n        <td>${2}</td>\n    </tr>\n</table>' },
        { name: 'form', type: 'keyword', desc: 'Form', snippet: '<form action="${1}" method="${2:POST}">\n    ${3}\n</form>' },
        { name: 'input', type: 'keyword', desc: 'Giriş alanı', snippet: '<input type="${1:text}" name="${2}" placeholder="${3}">' },
        { name: 'button', type: 'keyword', desc: 'Buton', snippet: '<button type="${1:button}">${2:Buton}</button>' },
        { name: 'textarea', type: 'keyword', desc: 'Metin alanı', snippet: '<textarea name="${1}" rows="${2:4}" cols="${3:50}">${4}</textarea>' },
        { name: 'select', type: 'keyword', desc: 'Dropdown', snippet: '<select name="${1}">\n    <option value="${2}">${3}</option>\n</select>' },
        { name: 'label', type: 'keyword', desc: 'Etiket', snippet: '<label for="${1}">${2}</label>' },
        { name: 'header', type: 'keyword', desc: 'Sayfa başlığı', snippet: '<header>\n    ${1}\n</header>' },
        { name: 'nav', type: 'keyword', desc: 'Navigasyon', snippet: '<nav>\n    ${1}\n</nav>' },
        { name: 'main', type: 'keyword', desc: 'Ana içerik', snippet: '<main>\n    ${1}\n</main>' },
        { name: 'footer', type: 'keyword', desc: 'Sayfa altı', snippet: '<footer>\n    ${1}\n</footer>' },
        { name: 'section', type: 'keyword', desc: 'Bölüm', snippet: '<section>\n    ${1}\n</section>' },
        { name: 'article', type: 'keyword', desc: 'Makale', snippet: '<article>\n    ${1}\n</article>' },
        { name: 'script', type: 'keyword', desc: 'JavaScript', snippet: '<script>\n    ${1}\n</script>' },
        { name: 'style', type: 'keyword', desc: 'CSS', snippet: '<style>\n    ${1}\n</style>' },
        { name: 'link', type: 'keyword', desc: 'CSS bağla', snippet: '<link rel="stylesheet" href="${1:style.css}">' },
        
        // CSS Özellikleri
        { name: 'display', type: 'variable', desc: 'Görüntüleme tipi', snippet: 'display: ${1:flex};' },
        { name: 'flex', type: 'variable', desc: 'Flexbox', snippet: 'display: flex;\njustify-content: ${1:center};\nalign-items: ${2:center};' },
        { name: 'grid', type: 'variable', desc: 'CSS Grid', snippet: 'display: grid;\ngrid-template-columns: ${1:repeat(3, 1fr)};\ngap: ${2:20px};' },
        { name: 'position', type: 'variable', desc: 'Konumlandırma', snippet: 'position: ${1:relative};' },
        { name: 'margin', type: 'variable', desc: 'Dış boşluk', snippet: 'margin: ${1:0};' },
        { name: 'padding', type: 'variable', desc: 'İç boşluk', snippet: 'padding: ${1:20px};' },
        { name: 'width', type: 'variable', desc: 'Genişlik', snippet: 'width: ${1:100%};' },
        { name: 'height', type: 'variable', desc: 'Yükseklik', snippet: 'height: ${1:auto};' },
        { name: 'background', type: 'variable', desc: 'Arka plan', snippet: 'background: ${1:#fff};' },
        { name: 'color', type: 'variable', desc: 'Metin rengi', snippet: 'color: ${1:#333};' },
        { name: 'font-size', type: 'variable', desc: 'Yazı boyutu', snippet: 'font-size: ${1:16px};' },
        { name: 'font-weight', type: 'variable', desc: 'Yazı kalınlığı', snippet: 'font-weight: ${1:bold};' },
        { name: 'border', type: 'variable', desc: 'Kenarlık', snippet: 'border: ${1:1px} solid ${2:#ccc};' },
        { name: 'border-radius', type: 'variable', desc: 'Köşe yuvarlama', snippet: 'border-radius: ${1:8px};' },
        { name: 'box-shadow', type: 'variable', desc: 'Kutu gölgesi', snippet: 'box-shadow: ${1:0} ${2:4px} ${3:6px} rgba(0, 0, 0, 0.1);' },
        { name: 'transition', type: 'variable', desc: 'Geçiş efekti', snippet: 'transition: ${1:all} ${2:0.3s} ease;' },
        { name: 'transform', type: 'variable', desc: 'Dönüşüm', snippet: 'transform: ${1:translateY(-5px)};' },
        { name: ':hover', type: 'method', desc: 'Hover efekti', snippet: ':hover {\n    ${1}\n}' },
        { name: '@media', type: 'snippet', desc: 'Media query', snippet: '@media (max-width: ${1:768px}) {\n    ${2}\n}' },
    ]
};

// Autocomplete state
let autocompleteState = {
    visible: false,
    selectedIndex: 0,
    matches: [],
    currentWord: '',
    wordStart: 0
};

// Autocomplete başlat
function initAutocomplete() {
    const codeInput = document.getElementById('code-input');
    const dropdown = document.getElementById('autocomplete-dropdown');
    
    if (!codeInput || !dropdown) return;
    
    // Input olayları
    codeInput.addEventListener('input', handleAutocompleteInput);
    codeInput.addEventListener('keydown', handleAutocompleteKeydown);
    codeInput.addEventListener('blur', () => {
        // Biraz gecikme ile kapat (tıklama için)
        setTimeout(() => hideAutocomplete(), 150);
    });
    codeInput.addEventListener('click', hideAutocomplete);
    codeInput.addEventListener('scroll', updateDropdownPosition);
}

// Input değiştiğinde
function handleAutocompleteInput(e) {
    const codeInput = e.target;
    const cursorPos = codeInput.selectionStart;
    const text = codeInput.value;
    
    // İmleç pozisyonundaki kelimeyi bul
    const { word, start } = getCurrentWord(text, cursorPos);
    
    if (word.length >= 1) {
        const matches = getAutocompleteMatches(word);
        if (matches.length > 0) {
            autocompleteState.currentWord = word;
            autocompleteState.wordStart = start;
            autocompleteState.matches = matches;
            autocompleteState.selectedIndex = 0;
            showAutocomplete(matches);
            return;
        }
    }
    
    hideAutocomplete();
}

// Mevcut kelimeyi bul
function getCurrentWord(text, cursorPos) {
    let start = cursorPos;
    
    // Geriye doğru kelime başlangıcını bul
    while (start > 0) {
        const char = text[start - 1];
        if (/[\s\(\)\[\]\{\}\,\;\:\+\-\*\/\=\<\>\!\&\|\^\~\%]/.test(char)) {
            break;
        }
        start--;
    }
    
    // Nokta ile başlıyorsa metodları göster
    if (start > 0 && text[start - 1] === '.') {
        start--;
    }
    
    const word = text.substring(start, cursorPos);
    return { word, start };
}

// Eşleşen önerileri bul
function getAutocompleteMatches(word) {
    const lang = getCurrentSandboxLang();
    const data = autocompleteData[lang] || autocompleteData.python;
    
    const lowerWord = word.toLowerCase();
    
    // Eşleşmeleri bul ve skorla
    const matches = data
        .filter(item => item.name.toLowerCase().includes(lowerWord))
        .map(item => ({
            ...item,
            score: item.name.toLowerCase().startsWith(lowerWord) ? 2 : 1
        }))
        .sort((a, b) => {
            // Önce başlayanlar, sonra içerenler
            if (b.score !== a.score) return b.score - a.score;
            // Aynı skorsa alfabetik
            return a.name.localeCompare(b.name);
        })
        .slice(0, 12); // Max 12 öneri
    
    return matches;
}

// Mevcut sandbox dilini al
function getCurrentSandboxLang() {
    const activeLangBtn = document.querySelector('.sandbox-lang-selector .lang-btn.active');
    if (activeLangBtn) {
        return activeLangBtn.dataset.lang || 'python';
    }
    return state.selectedLanguage || 'python';
}

// Autocomplete göster
function showAutocomplete(matches) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    const list = document.getElementById('autocomplete-list');
    
    if (!dropdown || !list) return;
    
    // Listeyi oluştur
    list.innerHTML = matches.map((item, index) => {
        const iconClass = item.type || 'keyword';
        const iconLetter = getIconLetter(item.type);
        
        // Eşleşen kısmı vurgula
        const highlightedName = highlightMatch(item.name, autocompleteState.currentWord);
        
        return `
            <div class="autocomplete-item ${index === autocompleteState.selectedIndex ? 'selected' : ''}" 
                 data-index="${index}"
                 onmouseenter="selectAutocompleteItem(${index})"
                 onmousedown="applyAutocomplete(${index})">
                <div class="autocomplete-icon ${iconClass}">${iconLetter}</div>
                <div class="autocomplete-content">
                    <div class="autocomplete-name">${highlightedName}</div>
                    <div class="autocomplete-desc">${item.desc}</div>
                </div>
                <div class="autocomplete-type">${getTypeName(item.type)}</div>
            </div>
        `;
    }).join('');
    
    // Hint ekle
    list.innerHTML += `
        <div class="autocomplete-hint">
            <span><kbd>↑</kbd><kbd>↓</kbd> Seç</span>
            <span><kbd>Tab</kbd> veya <kbd>Enter</kbd> Uygula</span>
            <span><kbd>Esc</kbd> Kapat</span>
        </div>
    `;
    
    updateDropdownPosition();
    dropdown.classList.remove('hidden');
    autocompleteState.visible = true;
}

// Dropdown pozisyonunu güncelle
function updateDropdownPosition() {
    const codeInput = document.getElementById('code-input');
    const dropdown = document.getElementById('autocomplete-dropdown');
    
    if (!codeInput || !dropdown || !autocompleteState.visible) return;
    
    // İmlecin konumunu hesapla (basitleştirilmiş)
    const cursorPos = codeInput.selectionStart;
    const text = codeInput.value.substring(0, cursorPos);
    const lines = text.split('\n');
    const currentLine = lines.length;
    const currentCol = lines[lines.length - 1].length;
    
    // Karakterlerin piksel genişliği (yaklaşık)
    const charWidth = 8.4;
    const lineHeight = 22.4; // 14px * 1.6 line-height
    
    const left = Math.min(currentCol * charWidth + 20, codeInput.clientWidth - 300);
    const top = currentLine * lineHeight + 20 - codeInput.scrollTop;
    
    dropdown.style.left = `${Math.max(0, left)}px`;
    dropdown.style.top = `${Math.min(top, codeInput.clientHeight - 100)}px`;
}

// Autocomplete gizle
function hideAutocomplete() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
    autocompleteState.visible = false;
}

// Klavye olayları
function handleAutocompleteKeydown(e) {
    if (!autocompleteState.visible) return;
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectAutocompleteItem((autocompleteState.selectedIndex + 1) % autocompleteState.matches.length);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            selectAutocompleteItem((autocompleteState.selectedIndex - 1 + autocompleteState.matches.length) % autocompleteState.matches.length);
            break;
            
        case 'Tab':
        case 'Enter':
            if (autocompleteState.matches.length > 0) {
                e.preventDefault();
                applyAutocomplete(autocompleteState.selectedIndex);
            }
            break;
            
        case 'Escape':
            e.preventDefault();
            hideAutocomplete();
            break;
    }
}

// Öğe seç
function selectAutocompleteItem(index) {
    autocompleteState.selectedIndex = index;
    
    // UI güncelle
    const items = document.querySelectorAll('.autocomplete-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === index);
    });
    
    // Seçili öğeyi görünür yap
    const selectedItem = items[index];
    if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
    }
}

// Öneriyi uygula
function applyAutocomplete(index) {
    const match = autocompleteState.matches[index];
    if (!match) return;
    
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;
    
    const text = codeInput.value;
    const cursorPos = codeInput.selectionStart;
    
    // Mevcut kelimeyi seçili öneriyle değiştir
    let insertText = match.snippet || match.name;
    
    // Snippet yer tutucularını temizle (basit versiyon)
    let cursorOffset = insertText.length;
    const placeholderMatch = insertText.match(/\$\{1:[^}]*\}/);
    if (placeholderMatch) {
        cursorOffset = insertText.indexOf(placeholderMatch[0]);
    }
    insertText = insertText.replace(/\$\{\d+:([^}]*)\}/g, '$1').replace(/\$\{\d+\}/g, '');
    
    const before = text.substring(0, autocompleteState.wordStart);
    const after = text.substring(cursorPos);
    
    codeInput.value = before + insertText + after;
    
    // İmleci uygun yere konumla
    const newPos = autocompleteState.wordStart + cursorOffset;
    codeInput.setSelectionRange(newPos, newPos);
    codeInput.focus();
    
    // Satır numaralarını güncelle
    if (typeof updateLineNumbers === 'function') {
        updateLineNumbers();
    }
    
    hideAutocomplete();
}

// İkon harfi
function getIconLetter(type) {
    const letters = {
        keyword: 'K',
        function: 'F',
        method: 'M',
        variable: 'V',
        class: 'C',
        snippet: 'S'
    };
    return letters[type] || 'K';
}

// Tip adı
function getTypeName(type) {
    const names = {
        keyword: 'Anahtar',
        function: 'Fonksiyon',
        method: 'Metot',
        variable: 'Değişken',
        class: 'Sınıf',
        snippet: 'Şablon'
    };
    return names[type] || type;
}

// Eşleşen kısmı vurgula
function highlightMatch(name, word) {
    const lowerName = name.toLowerCase();
    const lowerWord = word.toLowerCase();
    const index = lowerName.indexOf(lowerWord);
    
    if (index === -1) return escapeHtml(name);
    
    const before = name.substring(0, index);
    const match = name.substring(index, index + word.length);
    const after = name.substring(index + word.length);
    
    return `${escapeHtml(before)}<span class="match">${escapeHtml(match)}</span>${escapeHtml(after)}`;
}

// Global fonksiyonlar
window.selectAutocompleteItem = selectAutocompleteItem;
window.applyAutocomplete = applyAutocomplete;

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initAutocomplete, 500);
});

