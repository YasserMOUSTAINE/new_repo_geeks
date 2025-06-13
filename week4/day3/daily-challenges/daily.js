class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript Basics", "Yasser", 300);
video1.watch();

const video2 = new Video("React Tutorial", "Moustaine", 600);
video2.watch();

const videoData = [
  { title: "Node.js Crash Course", uploader: "Ali", time: 450 },
  { title: "HTML in 10 Minutes", uploader: "Sara", time: 150 },
  { title: "CSS Flexbox", uploader: "Omar", time: 200 },
  { title: "MongoDB Guide", uploader: "Lina", time: 500 },
  { title: "Express.js Intro", uploader: "Nour", time: 350 }
];

videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  video.watch();
});
