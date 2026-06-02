#!/usr/bin/env node
// Split monolithic lesson files into individual lesson files + generate manifest
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const LESSONS_DIR = path.join(ROOT, 'lessons');
const QUIZZES_DIR = path.join(ROOT, 'quizzes');

// Track mapping: which track does each lesson category/source belong to
const TRACK_MAP = {
  // Stock lessons → stock-markets track
  'stock': 'stock-markets',
  // Options lessons → options track
  'option': 'options',
};

function loadGlobal(file, varName) {
  let code = fs.readFileSync(path.join(ROOT, 'js', file), 'utf8');
  // Replace 'const' with 'var' so it becomes a context property
  code = code.replace(/^const\s+/gm, 'var ');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx[varName];
}

function sanitizeForJS(obj) {
  // Convert object to a nicely formatted JS string
  return JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, (_, key) => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? `${key}:` : `"${key}":`)
    .replace(/\\n/g, '\\n');
}

function splitLessons() {
  console.log('=== Splitting Lessons ===\n');

  const stockLessons = loadGlobal('content-stock.js', 'STOCK_LESSONS') || [];
  const optionLessons = loadGlobal('content-options.js', 'OPTION_LESSONS') || [];

  console.log(`Stock lessons: ${stockLessons.length}`);
  console.log(`Option lessons: ${optionLessons.length}`);

  const manifest = {
    tracks: [
      { id: 'stock-markets', label: 'Stock Markets' },
      { id: 'options', label: 'Options Trading' },
      { id: 'quantitative', label: 'Quantitative Finance' },
      { id: 'advanced', label: 'Advanced Strategies' },
      { id: 'expert', label: 'Expert / Research' },
    ],
    lessons: [],
    quizzes: [],
  };

  let order = 0;

  // Process stock lessons
  stockLessons.forEach((lesson, i) => {
    const track = 'stock-markets';
    order++;
    const enriched = { ...lesson, track, order, prerequisites: [] };
    // Add prerequisite: previous lesson in same track
    if (i > 0) enriched.prerequisites = [stockLessons[i - 1].id];

    const fileName = `${lesson.id}.js`;
    const filePath = path.join(LESSONS_DIR, track, fileName);
    const content = `LESSON_REGISTRY["${lesson.id}"] = ${sanitizeForJS(enriched)};\n`;
    fs.writeFileSync(filePath, content);

    manifest.lessons.push({ id: lesson.id, track, file: `${track}/${fileName}` });
    console.log(`  [${order}] ${track}/${fileName}`);
  });

  // Process options lessons
  optionLessons.forEach((lesson, i) => {
    const track = 'options';
    order++;
    const enriched = { ...lesson, track, order, prerequisites: [] };
    if (i > 0) enriched.prerequisites = [optionLessons[i - 1].id];

    const fileName = `${lesson.id}.js`;
    const filePath = path.join(LESSONS_DIR, track, fileName);
    const content = `LESSON_REGISTRY["${lesson.id}"] = ${sanitizeForJS(enriched)};\n`;
    fs.writeFileSync(filePath, content);

    manifest.lessons.push({ id: lesson.id, track, file: `${track}/${fileName}` });
    console.log(`  [${order}] ${track}/${fileName}`);
  });

  // Write manifest
  fs.writeFileSync(path.join(LESSONS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written: ${manifest.lessons.length} lessons, ${manifest.tracks.length} tracks`);

  // Generate script tags
  const tags = manifest.lessons.map(l => `  <script src="lessons/${l.file}"></script>`).join('\n');
  fs.writeFileSync(path.join(ROOT, 'scripts', 'lesson-tags.txt'), tags);
  console.log(`Script tags written to scripts/lesson-tags.txt`);

  return manifest;
}

function splitQuizzes() {
  console.log('\n=== Splitting Quizzes ===\n');

  const quizData = loadGlobal('content-quizzes.js', 'QUIZ_DATA') || {};
  const manifest = [];

  for (const [key, quiz] of Object.entries(quizData)) {
    const fileName = `${key}.js`;
    const filePath = path.join(QUIZZES_DIR, fileName);
    const content = `QUIZ_REGISTRY["${key}"] = ${sanitizeForJS(quiz)};\n`;
    fs.writeFileSync(filePath, content);
    manifest.push({ id: key, file: fileName });
    console.log(`  ${fileName} (${quiz.questions?.length || 0} questions)`);
  }

  // Write quiz manifest
  fs.writeFileSync(path.join(QUIZZES_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nQuiz manifest: ${manifest.length} categories`);

  // Generate quiz script tags
  const tags = manifest.map(q => `  <script src="quizzes/${q.file}"></script>`).join('\n');
  fs.writeFileSync(path.join(ROOT, 'scripts', 'quiz-tags.txt'), tags);
  console.log('Quiz script tags written to scripts/quiz-tags.txt');
}

splitLessons();
splitQuizzes();
console.log('\nDone! Copy tags from scripts/lesson-tags.txt and scripts/quiz-tags.txt into index.html');
