document.addEventListener("DOMContentLoaded", () => {
  const profileList = document.getElementById("profile-list");
  const template = document.getElementById("profile-template");

  // Якщо на цій сторінці немає профілю — нічого не робимо
  if (!profileList || !template) return;

  const profileData = {
    name: "Emily Johnson",
    role: "Computer Science Student",
    avatar: "/img/profile_pic.png",
    courses: 3,
    assignments: 2,
    groups: 5
  };

  const clone = template.content.cloneNode(true);

  clone.querySelector(".avatar").src = profileData.avatar;
  clone.querySelector(".avatar").alt = profileData.name;
  clone.querySelector(".name").textContent = profileData.name;
  clone.querySelector(".role").textContent = profileData.role;
  clone.querySelector(".courses").textContent = profileData.courses;
  clone.querySelector(".assignments").textContent = profileData.assignments;
  clone.querySelector(".groups").textContent = profileData.groups;

  profileList.appendChild(clone);
});
