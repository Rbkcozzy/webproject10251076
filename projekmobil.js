document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video.lazy");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const source = video.querySelector("source[data-src]");

          if (source) {
            source.src = source.dataset.src;
            video.load();
          }

          obs.unobserve(video);
        }
      });
    },
    { threshold: 0.25 }
  );

  videos.forEach(video => observer.observe(video));
});
