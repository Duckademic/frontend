document.addEventListener("DOMContentLoaded", () => {
  const upcomingList = document.getElementById("upcoming-list");
  const template = document.getElementById("upcoming-template");

  // Якщо на цій сторінці немає блоку "Upcoming" — нічого не робимо
  if (!upcomingList || !template) return;

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

  upcomingEvents.forEach(event => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".title").textContent = event.title;
    clone.querySelector(".time").textContent = event.time;
    clone.querySelector(".type").textContent = event.type || "";

    // шукаємо <use> всередині svg з класом .icon
    const useEl = clone.querySelector(".icon use");
    if (useEl) {
      useEl.setAttribute("href", event.icon);
    }

    upcomingList.appendChild(clone);
  });
});
