document.addEventListener("DOMContentLoaded", () => {
  const upcomingList = document.getElementById("upcoming-list");
  const template = document.getElementById("upcoming-template");

  // Приклад масиву подій
  const upcomingEvents = [
    {
      title: "Programming Assignment Due",
      time: "Tomorrow 11:59 PM",
      type: "Assignment",
      icon: "/img/icons.svg#icon-SVG-11"
    },
    {
      title: "Data Science Lab",
      time: "Friday 2:00 PM",
      type: "Lab",
      icon: "/img/icons.svg#icon-SVG-3"
    },
    {
      title: "Study Group Meeting",
      time: "Saturday 10:00 AM",
      type: "Lecture",
      icon: "/img/icons.svg#icon-SVG-4"
    }
  ];

  // Генеруємо елементи
  upcomingEvents.forEach(event => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".title").textContent = event.title;
    clone.querySelector(".time").textContent = event.time;
    clone.querySelector(".type").textContent = event.type || "";
    clone.querySelector(".icon use").setAttribute("href", event.icon);

    upcomingList.appendChild(clone);
  });
});
