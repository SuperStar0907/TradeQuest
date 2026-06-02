// ============================================
// Quiz Engine
// ============================================

const QuizModule = (() => {
  let currentQuiz = null;
  let currentQuestionIndex = 0;
  let answers = [];
  let selectedOption = null;
  let answered = false;
  let controller = null;

  function renderCategories() {
    const container = document.getElementById('quizCategories');
    const progress = LessonsModule.getProgress();
    const quizScores = progress.quizScores || {};

    let html = '';
    for (const [key, quiz] of Object.entries(DataModule.quizzes)) {
      const score = quizScores[key];
      const scoreHtml = score !== undefined
        ? `<div class="quiz-category-score">Best: ${score}%</div>`
        : '<div class="quiz-category-score text-muted">Not attempted</div>';

      html += `
        <div class="quiz-category-card" data-quiz="${key}">
          <div class="quiz-category-icon">${quiz.icon}</div>
          <div class="quiz-category-name">${quiz.name}</div>
          <div class="quiz-category-count">${quiz.questions.length} questions</div>
          ${scoreHtml}
        </div>`;
    }
    container.innerHTML = html;

    // Category card clicks handled by delegation in init()
  }

  function startQuiz(quizKey) {
    const quiz = DataModule.quizzes[quizKey];
    if (!quiz) return;

    currentQuiz = { key: quizKey, ...quiz };
    currentQuestionIndex = 0;
    answers = [];
    selectedOption = null;
    answered = false;

    document.getElementById('quizCategories').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizActive').classList.remove('hidden');

    renderQuestion();
  }

  function renderQuestion() {
    if (!currentQuiz) return;
    const q = currentQuiz.questions[currentQuestionIndex];
    const total = currentQuiz.questions.length;

    // Progress
    document.getElementById('quizProgressFill').style.width = `${((currentQuestionIndex) / total) * 100}%`;

    // Question
    const questionDiv = document.getElementById('quizQuestion');
    let typeLabel = q.type === 'true-false' ? 'True or False' : q.type === 'calculate' ? 'Calculate' : 'Multiple Choice';
    questionDiv.innerHTML = `
      <div class="quiz-question-number">Question ${currentQuestionIndex + 1} of ${total} — ${typeLabel}</div>
      <div class="quiz-question-text">${q.question}</div>`;

    // Options
    const optionsDiv = document.getElementById('quizOptions');
    selectedOption = null;
    answered = false;

    if (q.type === 'multiple-choice') {
      const letters = ['A', 'B', 'C', 'D'];
      optionsDiv.innerHTML = q.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span>${opt}</span>
        </div>
      `).join('');
      // Click handling via event delegation in init()
    } else if (q.type === 'true-false') {
      optionsDiv.innerHTML = `
        <div class="quiz-option" data-index="0">
          <span class="quiz-option-letter">T</span>
          <span>True</span>
        </div>
        <div class="quiz-option" data-index="1">
          <span class="quiz-option-letter">F</span>
          <span>False</span>
        </div>`;
      // Click handling via event delegation in init()
    } else if (q.type === 'calculate') {
      optionsDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px;">
          <span style="color: var(--text-secondary);">${q.unit || ''}</span>
          <input type="number" id="calcAnswer" class="form-group" style="background: var(--bg-input); border: 1px solid var(--border); color: var(--text-primary); padding: 10px 14px; border-radius: 6px; font-family: var(--font-mono); font-size: 16px; width: 150px;">
          <button class="btn btn-primary" id="calcSubmit">Submit</button>
        </div>`;
      // calcSubmit click + calcAnswer keydown handled via delegation in init()
    }

    // Hide explanation
    document.getElementById('quizExplanation').classList.add('hidden');
    document.getElementById('quizNext').textContent = currentQuestionIndex < total - 1 ? 'Next Question' : 'See Results';
    document.getElementById('quizActions').style.visibility = 'hidden';
  }

  function selectOption(index) {
    if (answered) return;
    answered = true;

    const q = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = index === q.correct;
    answers.push(isCorrect);

    const options = document.querySelectorAll('#quizOptions .quiz-option');
    options.forEach((opt, i) => {
      opt.style.pointerEvents = 'none';
      if (i === q.correct) opt.classList.add('correct');
      if (i === index && !isCorrect) opt.classList.add('incorrect');
    });

    showExplanation(q, isCorrect);
  }

  function selectTrueFalse(value, el) {
    if (answered) return;
    answered = true;

    const q = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = value === q.correct;
    answers.push(isCorrect);

    const options = document.querySelectorAll('#quizOptions .quiz-option');
    options.forEach(opt => {
      opt.style.pointerEvents = 'none';
      const optVal = parseInt(opt.dataset.index) === 0;
      if (optVal === q.correct) opt.classList.add('correct');
    });
    if (!isCorrect) el.classList.add('incorrect');

    showExplanation(q, isCorrect);
  }

  function checkCalculation(value) {
    if (answered) return;
    answered = true;

    const q = currentQuiz.questions[currentQuestionIndex];
    const tolerance = q.tolerance || 0.01;
    const isCorrect = Math.abs(value - q.answer) <= tolerance;
    answers.push(isCorrect);

    const input = document.getElementById('calcAnswer');
    input.style.borderColor = isCorrect ? 'var(--green)' : 'var(--red)';
    input.disabled = true;
    document.getElementById('calcSubmit').disabled = true;

    showExplanation(q, isCorrect);
  }

  function showExplanation(q, isCorrect) {
    const explDiv = document.getElementById('quizExplanation');
    explDiv.innerHTML = `
      <h4>${isCorrect ? 'Correct!' : 'Incorrect'}</h4>
      <p>${q.explanation}</p>`;
    explDiv.classList.remove('hidden');
    explDiv.style.borderColor = isCorrect ? 'var(--green)' : 'var(--red)';

    document.getElementById('quizActions').style.visibility = 'visible';
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuiz.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    document.getElementById('quizActive').classList.add('hidden');
    const resultsDiv = document.getElementById('quizResults');
    resultsDiv.classList.remove('hidden');

    const correct = answers.filter(a => a).length;
    const total = answers.length;
    const percentage = Math.round((correct / total) * 100);

    // Determine color
    let color = 'var(--red)';
    if (percentage >= 80) color = 'var(--green)';
    else if (percentage >= 60) color = 'var(--orange)';

    // ELO-style rating update
    const progress = LessonsModule.getProgress();
    const ratings = progress.skillRatings || { fundamentals: 1200, 'technical-analysis': 1200, 'options-basics': 1200, 'options-greeks': 1200 };
    const currentRating = ratings[currentQuiz.key] || 1200;
    const expectedScore = 1 / (1 + Math.pow(10, (1500 - currentRating) / 400));
    const actualScore = percentage / 100;
    const kFactor = 32;
    const newRating = Math.round(currentRating + kFactor * (actualScore - expectedScore));
    const ratingChange = newRating - currentRating;
    ratings[currentQuiz.key] = newRating;
    progress.skillRatings = ratings;

    // Save best score
    if (!progress.quizScores) progress.quizScores = {};
    const prevBest = progress.quizScores[currentQuiz.key] || 0;
    if (percentage > prevBest) progress.quizScores[currentQuiz.key] = percentage;

    // XP
    const xpEarned = Math.round(percentage / 10) * 5;
    progress.xp = (progress.xp || 0) + xpEarned;

    LessonsModule.saveProgress(progress);
    LessonsModule.addActivity(`Scored ${percentage}% on ${currentQuiz.name} quiz`);

    resultsDiv.innerHTML = `
      <div class="quiz-score-big" style="color: ${color}">${percentage}%</div>
      <div class="quiz-score-label">${correct} of ${total} correct</div>
      <div style="margin-bottom: 24px;">
        <div class="rating-change" style="font-family: var(--font-mono); font-size: 16px;">
          Skill Rating: ${currentRating} → ${newRating}
          <span style="color: ${ratingChange >= 0 ? 'var(--green)' : 'var(--red)'}">
            (${ratingChange >= 0 ? '+' : ''}${ratingChange})
          </span>
        </div>
        <div style="color: var(--text-muted); margin-top: 4px;">+${xpEarned} XP earned</div>
      </div>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-secondary" id="quizRetry">Retry Quiz</button>
        <button class="btn btn-primary" id="quizBack">Back to Quizzes</button>
      </div>`;
    // Retry/Back clicks handled via delegation in init()
  }

  // Init
  function init() {
    controller = new SectionController();
    renderCategories();

    // Event delegation for quiz options (handles multiple-choice, true-false, calculate)
    controller.on(document.getElementById('quizOptions'), 'click', (e) => {
      const option = e.target.closest('.quiz-option');
      if (option && !answered) {
        const q = currentQuiz?.questions[currentQuestionIndex];
        if (!q) return;
        const index = parseInt(option.dataset.index);
        if (q.type === 'multiple-choice') {
          selectOption(index);
        } else if (q.type === 'true-false') {
          const val = index === 0;
          selectTrueFalse(val, option);
        }
        return;
      }
      // Handle calculate submit button
      if (e.target.id === 'calcSubmit' || e.target.closest('#calcSubmit')) {
        const val = parseFloat(document.getElementById('calcAnswer').value);
        checkCalculation(val);
      }
    });

    // Handle Enter key on calculate input via delegation
    controller.on(document.getElementById('quizOptions'), 'keydown', (e) => {
      if (e.key === 'Enter' && e.target.id === 'calcAnswer') {
        const val = parseFloat(e.target.value);
        checkCalculation(val);
      }
    });

    // Event delegation for quiz category cards
    controller.on(document.getElementById('quizCategories'), 'click', (e) => {
      const card = e.target.closest('.quiz-category-card');
      if (card) startQuiz(card.dataset.quiz);
    });

    // Next button
    controller.on(document.getElementById('quizNext'), 'click', nextQuestion);

    // Event delegation for results page buttons
    controller.on(document.getElementById('quizResults'), 'click', (e) => {
      if (e.target.id === 'quizRetry' || e.target.closest('#quizRetry')) {
        startQuiz(currentQuiz.key);
      } else if (e.target.id === 'quizBack' || e.target.closest('#quizBack')) {
        document.getElementById('quizResults').classList.add('hidden');
        document.getElementById('quizCategories').classList.remove('hidden');
        renderCategories();
      }
    });
  }

  function cleanup() {
    if (controller) { controller.destroy(); controller = null; }
  }

  return { init, renderCategories, cleanup };
})();
