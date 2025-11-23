const courses = [
  {
    title: "Introduction to Programming",
    teacher: "Dr. Smith",
    description: "Learn programming fundamentals with Python",
    assignments: 5,
    students: 32,
    grade: "5+",
    cardColorClass: "course-card-blue",
    deadlineClass: "course-deadline-warning",
    deadlineText: "Deadline: Tomorrow 9:00 AM"
  },
  {
    title: "Data Science",
    teacher: "Prof. Johnson",
    description: "Data analysis and machine learning concepts",
    assignments: 5,
    students: 32,
    grade: "5-",
    cardColorClass: "course-card-mint",
    deadlineClass: "course-deadline-info",
    deadlineText: "Deadline: Friday 2:00 PM"
  },
  {
    title: "Web Development",
    teacher: "Dr. Williams",
    description: "Modern web applications with React",
    assignments: 8,
    students: 32,
    grade: "4+",
    cardColorClass: "course-card-rose",
    deadlineClass: "course-deadline-danger",
    deadlineText: "Deadline: Yesterday 11:00 AM"
  },
  {
    title: "Database",
    teacher: "Dr. Smith",
    description: "Learn programming fundamentals with Python",
    assignments: 5,
    students: 32,
    grade: "5+",
    cardColorClass: "course-card-mint",
    deadlineClass: "course-deadline-warning",
    deadlineText: "Deadline: Wednesday 9:00 AM"
    }
];


const coursesListEl = document.getElementById("courses-list");

function renderCourseCard(course) {
  return `
    <li class="course-card ${course.cardColorClass}">
      <div class="course-card-header">
        <div class="course-card-text-head">
          <h2 class="course-title">${course.title}</h2>
          <p class="course-teacher">${course.teacher}</p>
        </div>
        <span class="course-grade">${course.grade}</span>
      </div>

      <p class="course-description">
        ${course.description}
      </p>

      <ul class="course-meta">
        <li class="course-meta-item">
          <svg class="course-meta-icon" width="16" height="16">
            <use href="/img/icons.svg#icon-SVG-5"></use>
          </svg>
          <span class="course-meta-text">${course.assignments} assignments</span>
        </li>
        <li class="course-meta-item">
          <svg class="course-meta-icon" width="16" height="16">
            <use href="/img/icons.svg#icon-SVG-9"></use>
          </svg>
          <span class="course-meta-text">${course.students} students</span>
        </li>
      </ul>

      <div class="course-deadline ${course.deadlineClass}">
        <svg class="course-deadline-icon" width="16" height="16">
          <use href="/img/icons.svg#icon-SVG-11"></use>
        </svg>
        <p class="course-deadline-text">${course.deadlineText}</p>
      </div>

      <div class="course-actions">
        <button class="course-btn course-btn-primary">Open Course</button>
        <button class="course-btn course-btn-secondary">Assignments</button>
      </div>
    </li>
  `;
}

function renderCourses(list) {
  coursesListEl.innerHTML = list.map(renderCourseCard).join("");
}

renderCourses(courses);
