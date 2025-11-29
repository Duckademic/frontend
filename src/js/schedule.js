// ================================
// 1) SCHEDULE DATA
// ================================
const scheduleData = {
  Monday: [
    {
      start: "09:00",
      end: "10:20",
      title: "Introduction to Programming",
      teacher: "Dr. Smith",
      type: "Lecture",
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
      modeText: "Project Room / Online",
      dates: "[03.02–02.06]",
      color: "amber",
    },
  ],
};

const typeIconId = {
  Lecture: "icon-video",
  Lab: "icon-navigation",
};

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;

// ================================
// 2) DOM
// ================================
const classesListEl = document.getElementById("schedule-classes");
const dayLabelEl = document.getElementById("schedule-day-label");
const prevBtn = document.getElementById("schedule-prev-btn");
const nextBtn = document.getElementById("schedule-next-btn");

// ================================
// 3) SCHEDULE RENDER
// ================================
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createClassRowHTML(lesson) {
  const timeRange = `${lesson.start} – ${lesson.end}`;
  const colorClass = `class-row--${lesson.color}`;

  const iconId = typeIconId[lesson.type] || "icon-navigation";
  const tagClass = lesson.type === "Lab" ? "class-tag white-tag" : "class-tag";

  return `
    <li class="class-row ${colorClass}">
      <div class="class-time">${escapeHtml(timeRange)}</div>

      <article class="class-card">
        <div class="class-card-inner">
          <header class="class-card-header">
            <h2 class="class-title">${escapeHtml(lesson.title)}</h2>
            <span class="${tagClass}">${escapeHtml(lesson.type)}</span>
          </header>

          <p class="class-teacher">${escapeHtml(lesson.teacher)}</p>

          <div class="class-meta">
            <div class="class-meta-item">
              <span class="class-meta-icon" aria-hidden="true">
                <svg width="18" height="18">
                  <use href="/img/icons.svg#${escapeHtml(iconId)}"></use>
                </svg>
              </span>
              <span>${escapeHtml(lesson.modeText)}</span>
            </div>

            <div class="class-meta-dates">
              ${escapeHtml(lesson.dates)}
            </div>
          </div>
        </div>
      </article>
    </li>
  `;
}

function renderDay() {
  const dayName = dayOrder[currentDayIndex];
  const lessons = scheduleData[dayName] || [];

  if (dayLabelEl) dayLabelEl.textContent = dayName;

  if (!classesListEl) return;

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

  classesListEl.innerHTML = lessons.map(createClassRowHTML).join("");
}

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

// ================================
// 4) DROPDOWNS + DYNAMIC OPTIONS
// ================================

// Константи
const VIEW_OPTIONS = ["General", "Date"];

const FACULTY_OPTIONS = [
  "Faculty of Information Technology",
  "Faculty of History",
  "Faculty of Philosophy",
  "Faculty of Law",
  "Faculty of Economics",
  "Faculty of Psychology",
];

// Залежність Faculty -> Specialty (логічно)
const SPECIALTIES_BY_FACULTY = {
  "Faculty of Information Technology": ["Software Engineering"],
  "Faculty of History": ["History", "Archaeology", "Museum and Heritage Studies"],
  "Faculty of Philosophy": ["Philosophy", "Linguistics", "Translation and Interpreting", "English Philology"],
  "Faculty of Law": ["Law", "International Law"],
  "Faculty of Economics": ["Economics"],
  "Faculty of Psychology": ["Public Relations and Communications", "Journalism and Media Studies"],
};

// Year
const YEAR_OPTIONS = [
  "1 Bachelor",
  "2 Bachelor",
  "3 Bachelor",
  "4 Bachelor",
  "1 Master",
  "2 Master",
];

// Group/Subgroup: за твоїм ТЗ залежність існує, але значення 1..7
// Тож робимо генератор і можемо в майбутньому підмінити логіку.
const GROUP_OPTIONS = ["1", "2", "3", "4", "5", "6", "7"];
const SUBGROUP_OPTIONS = ["1", "2", "3", "4", "5", "6", "7"];

// Стан виборів
const state = {
  view: "General",
  faculty: "Faculty of Information Technology",
  specialty: "Software Engineering",
  year: "3 Bachelor",
  group: "2",
  subgroup: "4",
};

// helpers: знайти dropdown root по name
function getDropdownRootByName(name) {
  // root = батько кнопки (filter-group або schedule-view-dd)
  const menu = document.querySelector(`[data-dd-menu][data-dd-name="${name}"]`);
  if (!menu) return null;
  return menu.parentElement; // filter-group / schedule-view-dd
}

function closeAllDropdowns(exceptRoot = null) {
  document.querySelectorAll(".is-open").forEach((root) => {
    if (root !== exceptRoot) root.classList.remove("is-open");
  });
}

function setDropdownValue(name, value) {
  const root = getDropdownRootByName(name);
  if (!root) return;
  const valueEl = root.querySelector("[data-dd-value]");
  if (valueEl) valueEl.textContent = value;
}

function renderDropdownItems(name, options, selectedValue) {
  const menu = document.querySelector(`[data-dd-menu][data-dd-name="${name}"]`);
  if (!menu) return;

  menu.innerHTML = options
    .map((opt) => {
      const isActive = String(opt) === String(selectedValue);
      return `<button class="dropdown-item${isActive ? " is-active" : ""}" type="button" data-value="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`;
    })
    .join("");
}

// Основний апдейт залежностей
function syncDependentFilters() {
  // specialties by faculty
  const specialties = SPECIALTIES_BY_FACULTY[state.faculty] || [];
  if (!specialties.includes(state.specialty)) {
    state.specialty = specialties[0] || "";
  }

  // group/subgroup (тут просто 1..7, але підв’язка залишена)
  if (!GROUP_OPTIONS.includes(state.group)) state.group = GROUP_OPTIONS[0];
  if (!SUBGROUP_OPTIONS.includes(state.subgroup)) state.subgroup = SUBGROUP_OPTIONS[0];

  // перемалювати меню + тексти
  renderDropdownItems("view", VIEW_OPTIONS, state.view);
  setDropdownValue("view", state.view);

  renderDropdownItems("faculty", FACULTY_OPTIONS, state.faculty);
  setDropdownValue("faculty", state.faculty);

  renderDropdownItems("specialty", specialties, state.specialty);
  setDropdownValue("specialty", state.specialty);

  renderDropdownItems("year", YEAR_OPTIONS, state.year);
  setDropdownValue("year", state.year);

  renderDropdownItems("group", GROUP_OPTIONS, state.group);
  setDropdownValue("group", state.group);

  renderDropdownItems("subgroup", SUBGROUP_OPTIONS, state.subgroup);
  setDropdownValue("subgroup", state.subgroup);
}

function initDropdown(name) {
  const root = getDropdownRootByName(name);
  if (!root) return;

  const btn = root.querySelector("[data-dd-btn]");
  const menu = root.querySelector(`[data-dd-menu][data-dd-name="${name}"]`);
  if (!btn || !menu) return;

  // open/close
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const willOpen = !root.classList.contains("is-open");
    closeAllDropdowns(root);
    root.classList.toggle("is-open", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
  });

  // select
  menu.addEventListener("click", (e) => {
    const item = e.target.closest(".dropdown-item");
    if (!item) return;

    const value = item.dataset.value || item.textContent.trim();

    // update state
    state[name] = value;

    // залежності
    if (name === "faculty") {
      // при зміні факультету — перепризначити specialty
      const specialties = SPECIALTIES_BY_FACULTY[state.faculty] || [];
      state.specialty = specialties[0] || "";
      // при бажанні можна ще скидати group/subgroup
      state.group = GROUP_OPTIONS[0];
      state.subgroup = SUBGROUP_OPTIONS[0];
    }

    if (name === "specialty") {
      // групи залежать від спеціальності — поки просто ресет
      state.group = GROUP_OPTIONS[0];
      state.subgroup = SUBGROUP_OPTIONS[0];
    }

    if (name === "group") {
      // підгрупа залежить від групи — поки просто ресет
      state.subgroup = SUBGROUP_OPTIONS[0];
    }

    syncDependentFilters();

    root.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  });
}

function initAllDropdowns() {
  // Переконаємось що дефолти валідні
  syncDependentFilters();

  // ініціалізація всіх
  ["view", "faculty", "specialty", "year", "group", "subgroup"].forEach(initDropdown);

  // клік поза
  document.addEventListener("click", (e) => {
    const inside = e.target.closest(".filter-group, .schedule-view-dd");
    if (!inside) closeAllDropdowns(null);
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllDropdowns(null);
  });
}

// ================================
// INIT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  renderDay();
  initAllDropdowns();
});
