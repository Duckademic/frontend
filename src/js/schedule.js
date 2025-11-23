// ===== Дані розкладу =====
// Ключ — назва дня, значення — масив занять
const scheduleData = {
  Monday: [
    {
      start: "09:00",
      end: "10:20",
      title: "Introduction to Programming",
      teacher: "Dr. Smith",
      type: "Lecture",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[23.01–28.05]",
      color: "blue",
    },
    {
      start: "10:30",
      end: "11:50",
      title: "Data Science Lab",
      teacher: "Prof. Johnson",
      type: "Lab",
      modeIcon: "📍",
      modeText: "Room 101",
      dates: "[24.01–31.01, 14.02–01.05, 15.05–29.05]",
      color: "green",
    },
    {
      start: "12:10",
      end: "13:30",
      title: "Web Development Workshop",
      teacher: "Dr. Williams",
      type: "Lecture",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[23.01, 06.02]",
      color: "rose",
    },
    {
      start: "13:40",
      end: "15:00",
      title: "Study Group – Algorithms",
      teacher: "Student Led",
      type: "Lab",
      modeIcon: "📍",
      modeText: "Library Room 3",
      dates: "[24.01–31.01, 14.02–01.05, 15.05–29.05]",
      color: "amber",
    },
  ],

  Tuesday: [
    {
      start: "08:30",
      end: "09:50",
      title: "Discrete Mathematics",
      teacher: "Dr. Brown",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 204",
      dates: "[24.01–30.05]",
      color: "blue",
    },
    {
      start: "10:00",
      end: "11:20",
      title: "Operating Systems",
      teacher: "Dr. Miller",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 305",
      dates: "[24.01–30.05]",
      color: "rose",
    },
    {
      start: "11:30",
      end: "13:00",
      title: "Operating Systems Lab",
      teacher: "Assistant Team",
      type: "Lab",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[31.01–31.05]",
      color: "green",
    },
  ],

  Wednesday: [
    {
      start: "09:00",
      end: "10:20",
      title: "Database Systems",
      teacher: "Dr. Smith",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 110",
      dates: "[25.01–31.05]",
      color: "blue",
    },
    {
      start: "10:30",
      end: "11:50",
      title: "Database Lab",
      teacher: "Prof. Johnson",
      type: "Lab",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[01.02–31.05]",
      color: "green",
    },
    {
      start: "12:10",
      end: "13:30",
      title: "Software Engineering",
      teacher: "Dr. Williams",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 207",
      dates: "[25.01–31.05]",
      color: "rose",
    },
  ],

  Thursday: [
    {
      start: "09:00",
      end: "10:20",
      title: "Computer Networks",
      teacher: "Dr. Green",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 301",
      dates: "[26.01–01.06]",
      color: "blue",
    },
    {
      start: "10:30",
      end: "11:50",
      title: "Computer Networks Lab",
      teacher: "Assistant Team",
      type: "Lab",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[02.02–01.06]",
      color: "green",
    },
    {
      start: "12:10",
      end: "13:30",
      title: "UI/UX Workshop",
      teacher: "Guest Lecturer",
      type: "Lecture",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[09.02, 23.02, 09.03]",
      color: "amber",
    },
  ],

  Friday: [
    {
      start: "08:30",
      end: "09:50",
      title: "Probability & Statistics",
      teacher: "Dr. Carter",
      type: "Lecture",
      modeIcon: "📍",
      modeText: "Room 210",
      dates: "[27.01–02.06]",
      color: "blue",
    },
    {
      start: "10:00",
      end: "11:20",
      title: "Machine Learning Basics",
      teacher: "Prof. Johnson",
      type: "Lecture",
      modeIcon: "💻",
      modeText: "Online",
      dates: "[27.01–02.06]",
      color: "rose",
    },
    {
      start: "11:30",
      end: "13:00",
      title: "Project Work – Duckademic",
      teacher: "Mentor Team",
      type: "Lab",
      modeIcon: "💻",
      modeText: "Project Room / Online",
      dates: "[03.02–02.06]",
      color: "amber",
    },
  ],
};

// Порядок днів для перемикання стрілками
const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;

// ===== Пошук елементів в DOM =====
const classesListEl = document.getElementById("schedule-classes");
const dayLabelEl = document.getElementById("schedule-day-label");
const prevBtn = document.getElementById("schedule-prev-btn");
const nextBtn = document.getElementById("schedule-next-btn");

// ===== Хелпер для створення HTML заняття =====
function createClassRowHTML(lesson) {
  const timeRange = `${lesson.start} – ${lesson.end}`;
  const colorClass = `class-row--${lesson.color}`;

  return `
    <li class="class-row ${colorClass}">
      <div class="class-time">${timeRange}</div>
      <article class="class-card">
        <div class="class-card-inner">
          <header class="class-card-header">
            <h2 class="class-title">${lesson.title}</h2>
            <span class="class-tag">${lesson.type}</span>
          </header>

          <p class="class-teacher">${lesson.teacher}</p>

          <div class="class-meta">
            <div class="class-meta-item">
              <span class="class-meta-icon">${lesson.modeIcon}</span>
              <span>${lesson.modeText}</span>
            </div>
            <div class="class-meta-dates">
              ${lesson.dates}
            </div>
          </div>
        </div>
      </article>
    </li>
  `;
}

// ===== Рендер дня =====
function renderDay() {
  const dayName = dayOrder[currentDayIndex];
  const lessons = scheduleData[dayName] || [];

  dayLabelEl.textContent = dayName;

  if (!lessons.length) {
    classesListEl.innerHTML = `
      <li class="class-row">
        <div class="class-time"></div>
        <article class="class-card">
          <div class="class-card-inner">
            <p class="class-teacher">No classes scheduled for this day.</p>
          </div>
        </article>
      </li>
    `;
    return;
  }

  const html = lessons.map(createClassRowHTML).join("");
  classesListEl.innerHTML = html;
}

// ===== Обробники кнопок попередній/наступний день =====
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentDayIndex = (currentDayIndex - 1 + dayOrder.length) % dayOrder.length;
    renderDay();
  });

  nextBtn.addEventListener("click", () => {
    currentDayIndex = (currentDayIndex + 1) % dayOrder.length;
    renderDay();
  });
}

// Початковий рендер
if (classesListEl && dayLabelEl) {
  renderDay();
}
