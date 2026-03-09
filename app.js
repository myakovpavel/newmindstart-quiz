const appEl = document.getElementById("app");
const progressBarEl = document.getElementById("progressBar");
const progressTextEl = document.getElementById("progressText");
const backButtonEl = document.getElementById("backButton");

const steps = [
  {
    id: "welcome",
    type: "hero",
    trackProgress: false,
    title: "СДЕЛАЙ ЖИЗНЬ\nЛЕГЧЕ И ЯСНЕЕ",
    description:
      "Этот квиз от NewMindStart собирает твой персональный профиль: фокус, энергия, эмоциональный баланс и ежедневные привычки. В конце ты получишь стартовый план на 4 недели.",
    pills: ["4-5 минут", "На базе поведенческой психологии", "Персональные рекомендации"],
    cta: "Пройти персональный квиз",
  },
  {
    id: "age",
    type: "single",
    question: "Сколько тебе лет?",
    description: "Возраст нужен только для корректной персонализации программы.",
    options: [
      { label: "18-24", value: "18-24" },
      { label: "25-34", value: "25-34" },
      { label: "35-44", value: "35-44" },
      { label: "45-54", value: "45-54" },
      { label: "55-64", value: "55-64" },
      { label: "65+", value: "65+" },
    ],
    nextLabel: "Дальше",
  },
  {
    id: "teaser_people",
    type: "info",
    title: "500 000+ участников уже с NewMindStart",
    description:
      "Люди с разным темпом жизни используют платформу, чтобы снизить тревожность, улучшить концентрацию и вернуть устойчивую энергию в день.",
    box: "Мы не даем «универсальные советы». Твой план строится по ответам в этом квизе.",
    cta: "Продолжить",
  },
  {
    id: "energy_after_rest",
    type: "single",
    question: "Как часто к вечеру чувствуешь себя выжатым(ой), даже если вроде отдыхал(а)?",
    options: [
      { label: "Почти каждый день", score: 1, tags: ["energy", "stress"] },
      { label: "Пару раз в неделю", score: 2, tags: ["energy"] },
      { label: "Редко", score: 3, tags: ["balance"] },
    ],
  },
  {
    id: "deadline_delay",
    type: "single",
    question: "Бывает, что ты откладываешь важное до последнего момента?",
    options: [
      { label: "Да, часто", score: 1, tags: ["focus", "habits"] },
      { label: "Иногда", score: 2, tags: ["focus"] },
      { label: "Почти нет", score: 3, tags: ["discipline"] },
    ],
  },
  {
    id: "distracted_level",
    type: "single",
    question: "Что лучше всего описывает твою концентрацию в течение дня?",
    options: [
      { label: "Легко отвлекаюсь даже на мелочи", score: 1, tags: ["focus"] },
      { label: "Иногда теряю нить", score: 2, tags: ["focus"] },
      { label: "Обычно держу фокус", score: 3, tags: ["discipline"] },
      { label: "Почти всегда в потоке", score: 4, tags: ["discipline", "balance"] },
    ],
  },
  {
    id: "overwhelm_feeling",
    type: "single",
    question: "Как часто тревога или перегруз мешают спокойно проживать день?",
    options: [
      { label: "Часто", score: 1, tags: ["stress"] },
      { label: "Иногда", score: 2, tags: ["stress"] },
      { label: "Редко", score: 3, tags: ["balance"] },
    ],
  },
  {
    id: "mood_swings",
    type: "single",
    question: "Бывают ли резкие эмоциональные качели?",
    options: [
      { label: "Да, заметно", score: 1, tags: ["balance"] },
      { label: "Иногда", score: 2, tags: ["balance"] },
      { label: "Почти не бывает", score: 3, tags: ["resilience"] },
    ],
  },
  {
    id: "inner_harmony",
    type: "single",
    question: "В последние месяцы ты ощущаешь внутреннюю опору и контакт с близкими?",
    options: [
      { label: "Да, в основном", score: 4, tags: ["connection"] },
      { label: "Скорее частично", score: 2, tags: ["connection"] },
      { label: "Скорее нет", score: 1, tags: ["connection", "stress"] },
    ],
  },
  {
    id: "statement_emotions",
    type: "single",
    question: "Мне сложно открыто говорить о своих чувствах.",
    description: "Выбери, насколько это похоже на тебя.",
    options: [
      { label: "Полностью не согласен(на)", score: 5, tags: ["confidence"] },
      { label: "Скорее не согласен(на)", score: 4, tags: ["confidence"] },
      { label: "Не уверен(а)", score: 3, tags: ["confidence"] },
      { label: "Скорее согласен(на)", score: 2, tags: ["confidence"] },
      { label: "Полностью согласен(на)", score: 1, tags: ["confidence", "connection"] },
    ],
  },
  {
    id: "statement_tasks",
    type: "single",
    question: "Объем задач часто кажется неподъемным.",
    description: "Выбери, насколько это похоже на тебя.",
    options: [
      { label: "Полностью не согласен(на)", score: 5, tags: ["focus"] },
      { label: "Скорее не согласен(на)", score: 4, tags: ["focus"] },
      { label: "Не уверен(а)", score: 3, tags: ["focus"] },
      { label: "Скорее согласен(на)", score: 2, tags: ["stress"] },
      { label: "Полностью согласен(на)", score: 1, tags: ["stress", "habits"] },
    ],
  },
  {
    id: "statement_decisions",
    type: "single",
    question: "Мне тяжело принимать решения без сомнений.",
    description: "Выбери, насколько это похоже на тебя.",
    options: [
      { label: "Полностью не согласен(на)", score: 5, tags: ["confidence"] },
      { label: "Скорее не согласен(на)", score: 4, tags: ["confidence"] },
      { label: "Не уверен(а)", score: 3, tags: ["confidence"] },
      { label: "Скорее согласен(на)", score: 2, tags: ["confidence"] },
      { label: "Полностью согласен(на)", score: 1, tags: ["confidence", "stress"] },
    ],
  },
  {
    id: "statement_fear_fail",
    type: "single",
    question: "Страх ошибки часто тормозит мои цели.",
    description: "Выбери, насколько это похоже на тебя.",
    options: [
      { label: "Полностью не согласен(на)", score: 5, tags: ["discipline"] },
      { label: "Скорее не согласен(на)", score: 4, tags: ["discipline"] },
      { label: "Не уверен(а)", score: 3, tags: ["discipline"] },
      { label: "Скорее согласен(на)", score: 2, tags: ["confidence"] },
      { label: "Полностью согласен(на)", score: 1, tags: ["confidence", "focus"] },
    ],
  },
  {
    id: "compliments",
    type: "single",
    question: "Сложно принять комплимент, потому что внутри есть недоверие к себе?",
    options: [
      { label: "Да, почти всегда", score: 1, tags: ["confidence"] },
      { label: "Иногда зависит от ситуации", score: 2, tags: ["confidence"] },
      { label: "Практически нет", score: 4, tags: ["confidence"] },
      { label: "Трудно оценить", score: 2, tags: ["confidence"] },
    ],
  },
  {
    id: "social_insecurity",
    type: "single",
    question: "В общении ты часто чувствуешь неуверенность?",
    options: [
      { label: "Да", score: 1, tags: ["confidence", "connection"] },
      { label: "Нет", score: 4, tags: ["connection"] },
      { label: "Иногда", score: 2, tags: ["confidence"] },
    ],
  },
  {
    id: "overthinking_partner",
    type: "single",
    question: "В отношениях склонен(на) накручивать себя из-за поведения партнера?",
    options: [
      { label: "Да, часто", score: 1, tags: ["stress", "connection"] },
      { label: "Иногда", score: 2, tags: ["connection"] },
      { label: "Редко", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "others_first",
    type: "single",
    question: "Часто ставишь нужды других выше своих, даже в ущерб себе?",
    options: [
      { label: "Да", score: 1, tags: ["boundaries"] },
      { label: "Иногда", score: 2, tags: ["boundaries"] },
      { label: "Нет", score: 4, tags: ["boundaries", "resilience"] },
    ],
  },
  {
    id: "last_motivation",
    type: "single",
    question: "Когда в последний раз ты чувствовал(а) устойчивую мотивацию?",
    options: [
      { label: "В последние дни", score: 4, tags: ["energy"] },
      { label: "1-2 недели назад", score: 3, tags: ["energy"] },
      { label: "Пару месяцев назад", score: 2, tags: ["energy"] },
      { label: "Давно не помню", score: 1, tags: ["energy", "stress"] },
    ],
  },
  {
    id: "improve_areas",
    type: "multi",
    question: "Какие области тебе хочется улучшить в первую очередь?",
    description: "Можно выбрать несколько пунктов.",
    options: [
      { label: "Управление тревогой", score: 2, tags: ["stress"] },
      { label: "Стабильная энергия", score: 2, tags: ["energy"] },
      { label: "Фокус и продуктивность", score: 2, tags: ["focus"] },
      { label: "Уверенность в себе", score: 2, tags: ["confidence"] },
      { label: "Коммуникация и отношения", score: 2, tags: ["connection"] },
      { label: "Личный баланс и границы", score: 2, tags: ["boundaries"] },
    ],
  },
  {
    id: "morning_first",
    type: "single",
    question: "Что обычно происходит в первые 30 минут после пробуждения?",
    options: [
      { label: "Сразу хватаюсь за телефон", score: 1, tags: ["habits", "focus"] },
      { label: "Собираюсь в спешке", score: 2, tags: ["habits"] },
      { label: "Есть короткий ритуал и план", score: 4, tags: ["discipline"] },
      { label: "Каждый день по-разному", score: 2, tags: ["habits"] },
    ],
  },
  {
    id: "physical_activity",
    type: "single",
    question: "Сколько движения у тебя в неделю?",
    options: [
      { label: "Почти нет", score: 1, tags: ["energy"] },
      { label: "1-2 коротких занятия", score: 2, tags: ["energy"] },
      { label: "3-4 тренировки или активные прогулки", score: 3, tags: ["energy"] },
      { label: "5+ активных дней", score: 4, tags: ["energy", "discipline"] },
    ],
  },
  {
    id: "quit_habits",
    type: "multi",
    question: "Какие привычки ты хотел(а) бы сократить?",
    description: "Можно выбрать несколько.",
    options: [
      { label: "Бесконечный скролл", score: 1, tags: ["habits", "focus"] },
      { label: "Прокрастинация", score: 1, tags: ["habits", "focus"] },
      { label: "Переработки без пауз", score: 1, tags: ["energy"] },
      { label: "Эмоциональные заедания", score: 1, tags: ["stress"] },
      { label: "Ночной режим сна", score: 1, tags: ["sleep"] },
      { label: "Самокритика", score: 1, tags: ["confidence"] },
      { label: "Пока ничего", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "sleep_improve",
    type: "multi",
    question: "Что тебе хотелось бы улучшить в сне?",
    description: "Выбери все актуальные пункты.",
    options: [
      { label: "Сложно заснуть", score: 1, tags: ["sleep", "stress"] },
      { label: "Часто просыпаюсь ночью", score: 1, tags: ["sleep"] },
      { label: "Просыпаюсь без энергии", score: 1, tags: ["sleep", "energy"] },
      { label: "Сбитый режим", score: 1, tags: ["sleep", "habits"] },
      { label: "Сон в порядке", score: 4, tags: ["sleep"] },
    ],
  },
  {
    id: "recent_triggers",
    type: "multi",
    question: "Что в последнее время стало источником повышенного напряжения?",
    description: "Можно выбрать несколько.",
    options: [
      { label: "Рабочая нагрузка", score: 1, tags: ["stress"] },
      { label: "Финансовые вопросы", score: 1, tags: ["stress"] },
      { label: "Отношения", score: 1, tags: ["connection"] },
      { label: "Семья", score: 1, tags: ["connection"] },
      { label: "Состояние здоровья", score: 1, tags: ["energy"] },
      { label: "Сильных триггеров нет", score: 4, tags: ["resilience"] },
    ],
  },
  {
    id: "happier_life",
    type: "multi",
    question: "Чтобы жить спокойнее и счастливее, на чем важнее всего сфокусироваться?",
    description: "Выбери несколько приоритетов.",
    options: [
      { label: "Эмоциональная устойчивость", score: 2, tags: ["balance"] },
      { label: "Ясный ум и концентрация", score: 2, tags: ["focus"] },
      { label: "Регулярный отдых без вины", score: 2, tags: ["boundaries"] },
      { label: "Здоровые отношения", score: 2, tags: ["connection"] },
      { label: "Уверенность в себе", score: 2, tags: ["confidence"] },
      { label: "Больше жизненной энергии", score: 2, tags: ["energy"] },
    ],
  },
  {
    id: "plan_targets",
    type: "multi",
    question: "Какие направления включить в персональный план в первую очередь?",
    description: "Можно выбрать несколько.",
    options: [
      { label: "Дыхательные и антистресс-практики", score: 2, tags: ["stress"] },
      { label: "Утренняя система запуска дня", score: 2, tags: ["habits"] },
      { label: "Фокус-блоки без отвлечений", score: 2, tags: ["focus"] },
      { label: "Прокачка самооценки", score: 2, tags: ["confidence"] },
      { label: "Границы и мягкая коммуникация", score: 2, tags: ["boundaries"] },
      { label: "Режим восстановления и сна", score: 2, tags: ["sleep"] },
    ],
  },
  {
    id: "evidence",
    type: "info",
    title: "Метод NewMindStart опирается на доказательные подходы",
    description:
      "Мы используем техники из CBT, поведенческой психологии, практик саморегуляции и микро-обучения. Программа строится так, чтобы маленькие действия закреплялись в реальной жизни.",
    box: "Ты получишь не «мотивационный шум», а пошаговую структуру, которую можно выполнить даже в загруженный день.",
    cta: "Отлично, дальше",
  },
  {
    id: "behavior_knowledge",
    type: "single",
    question: "Насколько ты знаком(а) с поведенческими техниками и работой с привычками?",
    options: [
      { label: "Хорошо знаком(а), уже практиковал(а)", score: 4, tags: ["discipline"] },
      { label: "Что-то пробовал(а), но без системы", score: 2, tags: ["habits"] },
      { label: "Почти не знаком(а)", score: 1, tags: ["habits"] },
    ],
  },
  {
    id: "heard_expert",
    type: "single",
    question: "Ты пришел(ла) по рекомендации специалиста?",
    options: [
      { label: "Да", score: 3, tags: ["motivation"] },
      { label: "Нет", score: 2, tags: ["motivation"] },
    ],
  },
  {
    id: "teaser_community",
    type: "info",
    title: "Ты не один(одна): у нас сильное сообщество практики",
    description:
      "Сессии в группе, короткие задания и поддержка кураторов помогают удерживать ритм и видеть результат уже в первые недели.",
    box: "В среднем участники отмечают рост энергии и фокуса уже в первые 10-14 дней регулярной работы.",
    cta: "Продолжить",
  },
  {
    id: "daily_goal",
    type: "single",
    question: "Сколько времени в день ты готов(а) выделять на свою программу?",
    options: [
      { label: "5 минут", score: 1, tags: ["habits"] },
      { label: "10 минут", score: 2, tags: ["habits"] },
      { label: "15 минут", score: 3, tags: ["discipline"] },
      { label: "20+ минут", score: 4, tags: ["discipline"] },
    ],
  },
  {
    id: "email",
    type: "input",
    field: "email",
    question: "Куда отправить твой персональный профиль NewMindStart?",
    description: "Мы пришлем краткий отчет и стартовый план в формате, удобном для ежедневного использования.",
    placeholder: "you@example.com",
    inputType: "email",
    nextLabel: "Получить профиль",
  },
  {
    id: "newsletter",
    type: "single",
    question: "Хочешь получать короткие письма с практиками, которые реально работают?",
    options: [
      { label: "Да, 1-2 письма в неделю", value: "yes" },
      { label: "Нет, только мой отчет", value: "no" },
    ],
  },
  {
    id: "name",
    type: "input",
    field: "name",
    question: "Как к тебе обращаться в плане?",
    description: "Имя нужно, чтобы персональные рекомендации выглядели как твоя рабочая карта, а не шаблон.",
    placeholder: "Например, Павел",
    inputType: "text",
    nextLabel: "Сформировать отчет",
  },
  {
    id: "summary",
    type: "summary",
    title: "Карта твоего состояния готова",
  },
  {
    id: "plan_preview",
    type: "plan",
    title: "Твоя программа NewMindStart на 4 недели",
  },
  {
    id: "calculating",
    type: "loading",
    trackProgress: false,
    title: "Собираем персональный маршрут",
    description:
      "Сопоставляем твои ответы с поведенческими паттернами, чтобы план был посильным и реалистичным.",
    duration: 3800,
  },
  {
    id: "final",
    type: "final",
    title: "Твой стартовый план готов",
  },
];

const state = {
  currentStepIndex: 0,
  answers: {},
  loadingTimer: null,
  loadingInterval: null,
};

const trackedStepIndices = steps
  .map((step, index) => ({ step, index }))
  .filter(({ step }) => step.trackProgress !== false)
  .map(({ index }) => index);

const insightMap = {
  focus: {
    title: "Фокус и ментальная ясность",
    text: "Тебе полезен режим коротких концентрированных блоков и защита внимания от цифрового шума.",
  },
  stress: {
    title: "Снижение стресса",
    text: "Ключ к прогрессу: стабильные антистресс-ритуалы 2-3 раза в день, а не редкие длинные практики.",
  },
  energy: {
    title: "Восстановление энергии",
    text: "Главный рычаг роста: ритм сна, паузы восстановления и умеренная регулярная активность.",
  },
  confidence: {
    title: "Уверенность и самооценка",
    text: "Фокус программы: снизить внутреннюю критику и заменить ее системой поддерживающих действий.",
  },
  boundaries: {
    title: "Личные границы",
    text: "Тебе даст рост навык экологичного «нет» и структурированное распределение личного ресурса.",
  },
  connection: {
    title: "Отношения и контакт",
    text: "Для устойчивости важно укрепить коммуникацию, чтобы не накапливать напряжение в диалогах.",
  },
  sleep: {
    title: "Качество сна",
    text: "Нужна настройка вечернего ритуала: меньше возбуждающих стимулов, больше предсказуемости.",
  },
  habits: {
    title: "Устойчивые привычки",
    text: "Будем строить микро-шаги, которые легко повторять ежедневно и превращать в новую норму.",
  },
  discipline: {
    title: "Режим и последовательность",
    text: "У тебя хороший потенциал роста через четкий ритм: маленькие действия, но ежедневно.",
  },
  resilience: {
    title: "Эмоциональная устойчивость",
    text: "Текущий базис уже неплохой. Задача плана: закрепить его и сделать более предсказуемым.",
  },
  balance: {
    title: "Внутренний баланс",
    text: "Для стабильности важно поддерживать эмоциональное равновесие через регулярные чек-ины.",
  },
  motivation: {
    title: "Внутренняя мотивация",
    text: "Тебе подойдет формат с быстрыми видимыми победами, чтобы поддерживать темп без перегруза.",
  },
};

function getCurrentStep() {
  return steps[state.currentStepIndex];
}

function getAnswer(stepId) {
  return state.answers[stepId];
}

function setAnswer(stepId, value) {
  state.answers[stepId] = value;
}

function escapeHtml(raw) {
  return String(raw)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderOptions(step) {
  const selected = getAnswer(step.id);
  const selectedSet = new Set(Array.isArray(selected) ? selected : [selected].filter((v) => v !== undefined));
  const className = step.options.length > 4 ? "options" : "options cols-2";

  return `
    <div class="${className}">
      ${step.options
        .map((option, index) => {
          const isSelected = selectedSet.has(index);
          return `
            <button
              type="button"
              class="option ${isSelected ? "selected" : ""}"
              data-action="select-option"
              data-index="${index}"
            >
              ${escapeHtml(option.label)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderNavigation(step) {
  const nextLabel = step.nextLabel || "Дальше";
  return `
    <div class="step-actions">
      <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(nextLabel)}</button>
    </div>
    <div id="errorText" class="hint-error"></div>
  `;
}

function renderHeroStep(step) {
  return `
    <article class="step hero">
      <div class="hero-copy">
        <h1>${step.title.replaceAll("\n", "<br />")}</h1>
        <p>${escapeHtml(step.description)}</p>
        <div class="hero-pill-row">
          ${step.pills.map((pill) => `<span class="hero-pill">${escapeHtml(pill)}</span>`).join("")}
        </div>
        <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(step.cta)}</button>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-gradient-bar"></div>
        <div class="hero-stat">
          <div>
            <strong>500K+</strong>
            <span>участников уже в программе</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>средняя оценка опыта</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderInfoStep(step) {
  return `
    <article class="step">
      <h2 class="question-title">${step.title}</h2>
      <p class="question-description">${escapeHtml(step.description)}</p>
      <div class="info-box">${escapeHtml(step.box)}</div>
      <div class="step-actions">
        <button type="button" class="btn btn-primary" data-action="next-step">${escapeHtml(step.cta || "Продолжить")}</button>
      </div>
    </article>
  `;
}

function renderQuestionStep(step) {
  return `
    <article class="step">
      <h2 class="question-title">${escapeHtml(step.question)}</h2>
      ${step.description ? `<p class="question-description">${escapeHtml(step.description)}</p>` : ""}
      ${renderOptions(step)}
      ${renderNavigation(step)}
    </article>
  `;
}

function renderInputStep(step) {
  const currentValue = escapeHtml(getAnswer(step.id) || "");
  return `
    <article class="step">
      <h2 class="question-title">${escapeHtml(step.question)}</h2>
      <p class="question-description">${escapeHtml(step.description || "")}</p>
      <div class="input-wrap">
        <input
          id="textInput"
          class="text-input"
          type="${escapeHtml(step.inputType || "text")}"
          placeholder="${escapeHtml(step.placeholder || "")}"
          value="${currentValue}"
          autocomplete="${step.field === "email" ? "email" : "given-name"}"
        />
      </div>
      ${renderNavigation(step)}
    </article>
  `;
}

function getInitials(name) {
  const source = String(name || "").trim();
  if (!source) return "Гость";
  return source;
}

function computeSummary() {
  let normalizedTotal = 0;
  let normalizedCount = 0;
  const tags = {};

  for (const step of steps) {
    if (!["single", "multi"].includes(step.type)) continue;
    if (!Array.isArray(step.options) || step.options.length === 0) continue;
    if (!step.options.some((option) => typeof option.score === "number")) continue;

    const answer = getAnswer(step.id);
    if (answer === undefined || answer === null) continue;

    const selectedIndexes = Array.isArray(answer) ? answer : [answer];
    const selectedOptions = selectedIndexes
      .map((index) => step.options[index])
      .filter(Boolean)
      .filter((option) => typeof option.score === "number");

    if (selectedOptions.length === 0) continue;

    const maxOptionScore = Math.max(...step.options.map((option) => option.score || 0), 1);
    const avgScore =
      selectedOptions.reduce((sum, option) => sum + (option.score || 0), 0) / selectedOptions.length;
    normalizedTotal += avgScore / maxOptionScore;
    normalizedCount += 1;

    for (const option of selectedOptions) {
      const optionTags = Array.isArray(option.tags) ? option.tags : [];
      for (const tag of optionTags) {
        tags[tag] = (tags[tag] || 0) + 1;
      }
    }
  }

  const score = normalizedCount === 0 ? 0 : Math.round((normalizedTotal / normalizedCount) * 100);
  const sortedTags = Object.entries(tags)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);

  const topTags = sortedTags.length > 0 ? sortedTags.slice(0, 3) : ["focus", "energy", "balance"];
  const insights = topTags.map((tag) => insightMap[tag]).filter(Boolean);

  return { score, insights };
}

function renderSummaryStep() {
  const { score, insights } = computeSummary();
  const scoreDegrees = Math.max(4, Math.min(360, Math.round((score / 100) * 360)));
  const name = getInitials(getAnswer("name"));

  return `
    <article class="step">
      <h2 class="question-title">Профиль готов, ${escapeHtml(name)}</h2>
      <p class="question-description">
        Ниже стартовая оценка твоего текущего уровня устойчивости. Это не диагноз, а точка отсчета для программы.
      </p>

      <div class="summary-grid">
        <div>
          <div class="score-ring" style="background: conic-gradient(var(--accent) ${scoreDegrees}deg, #d9e4ff ${scoreDegrees}deg)">
            <div class="score-ring-inner">
              <div>
                <div class="score-value">${score}</div>
                <div class="score-note">индекс устойчивости</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-cards">
          ${insights
            .map(
              (item) => `
              <article class="summary-card">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `
            )
            .join("")}
          <article class="summary-card">
            <h3>Что это значит на практике</h3>
            <p>План будет коротким и выполнимым: ежедневные микрошаги, еженедельные фокусы и четкий трек прогресса без перегруза.</p>
          </article>
        </div>
      </div>

      <div class="step-actions">
        <button type="button" class="btn btn-primary" data-action="next-step">Посмотреть мой план</button>
      </div>
    </article>
  `;
}

function renderPlanStep() {
  const name = getInitials(getAnswer("name"));
  const dailyGoalIndex = getAnswer("daily_goal");
  const dailyGoal = dailyGoalIndex !== undefined ? steps.find((s) => s.id === "daily_goal").options[dailyGoalIndex].label : "10-15 минут";

  return `
    <article class="step">
      <h2 class="question-title">План ${escapeHtml(name)}: первые 4 недели</h2>
      <p class="question-description">
        Мы собрали стартовый маршрут под твой ритм. Базовая нагрузка: <strong>${escapeHtml(dailyGoal)}</strong> в день.
      </p>

      <div class="plan-columns">
        <article class="plan-card">
          <h3>Неделя 1. Стабилизация</h3>
          <p>Убираем перегруз: дыхательная техника 2 раза в день, вечерний чек-ин и короткие паузы восстановления.</p>
        </article>
        <article class="plan-card">
          <h3>Неделя 2. Фокус</h3>
          <p>Добавляем 1-2 фокус-блока в день, снижаем контекстные переключения и фиксируем реальные триггеры отвлечения.</p>
        </article>
        <article class="plan-card">
          <h3>Неделя 3. Уверенность</h3>
          <p>Работа с внутренним критиком, тренировка ясной коммуникации и упражнения на устойчивые решения.</p>
        </article>
        <article class="plan-card">
          <h3>Неделя 4. Закрепление</h3>
          <p>Переносим инструменты в обычную жизнь и собираем персональную систему поддержания результата.</p>
        </article>
      </div>

      <div class="footer-badges">
        <span class="footer-badge">Ежедневные микро-уроки</span>
        <span class="footer-badge">Групповые практики 5 дней в неделю</span>
        <span class="footer-badge">Проверка прогресса каждую неделю</span>
      </div>

      <div class="step-actions">
        <button type="button" class="btn btn-primary" data-action="next-step">Собрать финальную версию</button>
      </div>
    </article>
  `;
}

function renderLoadingStep(step) {
  return `
    <article class="step">
      <h2 class="question-title">${escapeHtml(step.title)}</h2>
      <p class="question-description">${escapeHtml(step.description)}</p>
      <div class="loader-wrap">
        <div class="loader-bar">
          <div id="loaderFill" class="loader-fill"></div>
        </div>
        <div id="loaderText" class="question-description">Подготовка рекомендаций... 0%</div>
      </div>
    </article>
  `;
}

function renderFinalStep() {
  const name = getInitials(getAnswer("name"));
  const email = getAnswer("email") || "your@email.com";
  return `
    <article class="step">
      <h2 class="question-title">Готово, ${escapeHtml(name)}. Твой квиз NewMindStart опубликован локально</h2>
      <p class="final-note">
        Мы зафиксировали твой персональный профиль и структуру плана. Отчет привязан к адресу <strong>${escapeHtml(
          email
        )}</strong>.
        Это демо-копия квиза в стиле NewMindStart, запущенная на локальном сервере.
      </p>
      <div class="info-box">
        Следующий шаг: подключить реальную отправку email/CRM и платежный модуль, если нужно превратить демо в продакшн-воронку.
      </div>
      <div class="step-actions">
        <button type="button" class="btn btn-primary" data-action="restart">Пройти еще раз</button>
      </div>
    </article>
  `;
}

function renderStep() {
  clearLoadingResources();
  const step = getCurrentStep();

  if (step.type === "hero") {
    appEl.innerHTML = renderHeroStep(step);
  } else if (step.type === "info") {
    appEl.innerHTML = renderInfoStep(step);
  } else if (step.type === "single" || step.type === "multi") {
    appEl.innerHTML = renderQuestionStep(step);
  } else if (step.type === "input") {
    appEl.innerHTML = renderInputStep(step);
    const input = document.getElementById("textInput");
    if (input) {
      input.focus();
      input.addEventListener("input", () => {
        setAnswer(step.id, input.value.trimStart());
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          nextStep();
        }
      });
    }
  } else if (step.type === "summary") {
    appEl.innerHTML = renderSummaryStep();
  } else if (step.type === "plan") {
    appEl.innerHTML = renderPlanStep();
  } else if (step.type === "loading") {
    appEl.innerHTML = renderLoadingStep(step);
    startLoadingSequence(step.duration || 3500);
  } else if (step.type === "final") {
    appEl.innerHTML = renderFinalStep();
  }

  updateHeader();
}

function updateHeader() {
  const step = getCurrentStep();
  const trackedPosition = trackedStepIndices.findIndex((index) => index === state.currentStepIndex);
  const displayRatio =
    trackedPosition < 0 || trackedStepIndices.length === 0
      ? 0
      : (trackedPosition + 1) / trackedStepIndices.length;

  const percent = Math.round(displayRatio * 100);
  progressBarEl.style.width = `${percent}%`;
  progressTextEl.textContent = `${percent}%`;

  const hideBack =
    state.currentStepIndex === 0 ||
    step.type === "loading" ||
    step.type === "final";

  backButtonEl.disabled = hideBack;
}

function showError(message) {
  const errorEl = document.getElementById("errorText");
  if (!errorEl) return;
  errorEl.textContent = message;
}

function validateStep(step) {
  if (step.type === "single") {
    const answer = getAnswer(step.id);
    if (answer === undefined || answer === null) {
      return "Выбери один вариант, чтобы продолжить.";
    }
    return null;
  }

  if (step.type === "multi") {
    const answer = getAnswer(step.id);
    if (!Array.isArray(answer) || answer.length === 0) {
      return "Выбери хотя бы один вариант.";
    }
    return null;
  }

  if (step.type === "input") {
    const answer = String(getAnswer(step.id) || "").trim();
    if (!answer) return "Заполни поле, чтобы продолжить.";
    if (step.field === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer);
      if (!isValidEmail) return "Введи корректный email.";
    }
    if (step.field === "name" && answer.length < 2) {
      return "Имя должно быть не короче 2 символов.";
    }
    return null;
  }

  return null;
}

function goToStep(index) {
  state.currentStepIndex = Math.max(0, Math.min(steps.length - 1, index));
  renderStep();
}

function nextStep() {
  const step = getCurrentStep();
  const error = validateStep(step);
  if (error) {
    showError(error);
    return;
  }
  goToStep(state.currentStepIndex + 1);
}

function previousStep() {
  const step = getCurrentStep();
  if (step.type === "loading" || step.type === "final") return;
  goToStep(state.currentStepIndex - 1);
}

function clearLoadingResources() {
  if (state.loadingTimer) {
    window.clearTimeout(state.loadingTimer);
    state.loadingTimer = null;
  }
  if (state.loadingInterval) {
    window.clearInterval(state.loadingInterval);
    state.loadingInterval = null;
  }
}

function startLoadingSequence(durationMs) {
  const loaderFill = document.getElementById("loaderFill");
  const loaderText = document.getElementById("loaderText");
  if (!loaderFill || !loaderText) return;

  const started = Date.now();
  state.loadingInterval = window.setInterval(() => {
    const elapsed = Date.now() - started;
    const ratio = Math.min(1, elapsed / durationMs);
    const percent = Math.round(ratio * 100);
    loaderFill.style.width = `${percent}%`;
    loaderText.textContent = `Подготовка рекомендаций... ${percent}%`;
  }, 110);

  state.loadingTimer = window.setTimeout(() => {
    clearLoadingResources();
    goToStep(state.currentStepIndex + 1);
  }, durationMs + 90);
}

function toggleOption(step, optionIndex) {
  if (step.type === "single") {
    setAnswer(step.id, optionIndex);
    renderStep();
    return;
  }

  if (step.type === "multi") {
    const current = getAnswer(step.id);
    const selected = new Set(Array.isArray(current) ? current : []);
    if (selected.has(optionIndex)) {
      selected.delete(optionIndex);
    } else {
      selected.add(optionIndex);
    }
    setAnswer(step.id, Array.from(selected).sort((a, b) => a - b));
    renderStep();
  }
}

appEl.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  const step = getCurrentStep();

  if (action === "select-option") {
    const index = Number(target.dataset.index);
    if (!Number.isNaN(index)) toggleOption(step, index);
    return;
  }

  if (action === "next-step") {
    nextStep();
    return;
  }

  if (action === "restart") {
    state.answers = {};
    goToStep(0);
  }
});

backButtonEl.addEventListener("click", () => {
  previousStep();
});

renderStep();
