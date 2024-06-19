const navMenu = document.getElementById('navMenu');

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }
});

const videoPlayer = document.getElementById('videoPlayer');

function changeVideo(videoSrc) {
    const videoSource = videoPlayer.querySelector('source');
    videoSource.src = videoSrc;
    videoPlayer.load();
}

