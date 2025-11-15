const posts = [
  {
    avatar: "./images/profile_pic.png",
    author: "Dr. Sarah Smith",
    role: "Computer Science Professor",
    time: "2h ago",
    content: "Excited to announce our new Advanced Machine Learning course! Registration opens next week. This course will cover deep learning, neural networks, and practical AI applications. 🤖",
    likes: 24,
    comments: 8,
    shares: 3
  },
  {
    avatar: "./images/profile_pic.png",
    author: "Emily Johnson",
    role: "Student • Computer Science",
    time: "4h ago",
    content: "Just finished my final project for Web Development class! Built a full-stack e-commerce app with React and Node.js. Thanks to all my classmates who helped along the way! 💻",
    likes: 24,
    comments: 8,
    shares: 3
  },
  {
    avatar: "./images/profile_pic.png",
    author: "Duckucate Official",
    role: "Educational Platform",
    time: "6h ago",
    content: "📚 Study Tip Tuesday: Use the Pomodoro Technique! Study for 25 minutes, then take a 5-minute break. This helps maintain focus and prevents burnout. What's your favorite study method?",
    likes: 102,
    comments: 8,
    shares: 3
  }
];

const feedList = document.getElementById("feed-list");
const template = document.getElementById("post-template");

feedList.addEventListener("change", (e) => {
  if (e.target.classList.contains("like-input")) {
    const likeSpan = e.target.closest("li").querySelector(".likes");
    let count = parseInt(likeSpan.textContent);
    if (e.target.checked) {
      likeSpan.textContent = count + 1;
    } else {
      likeSpan.textContent = count - 1;
    }
  }
});

posts.forEach(p => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".avatar").src = p.avatar;
  clone.querySelector(".author").textContent = p.author;
  clone.querySelector(".role").textContent = p.role;
  clone.querySelector(".time").textContent = p.time;
  clone.querySelector(".content").textContent = p.content;
  clone.querySelector(".likes").textContent = p.likes;
  clone.querySelector(".comments").textContent = p.comments;
  clone.querySelector(".shares").textContent = p.shares;

  feedList.appendChild(clone);
});