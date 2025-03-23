const video = document.getElementById('video');

// Preload the video
video.load();

// Set buffer settings
video.preload = 'auto';
video.autobuffer = true;

// Handle video buffering
video.addEventListener('waiting', () => {
    console.log('Video is buffering');
});

video.addEventListener('canplay', () => {
    console.log('Video can start playing');
});

// Handle hover events
video.addEventListener('mouseenter', () => {
    video.muted = false;
    if (video.readyState >= 3) { // Check if video is sufficiently buffered
        video.play();
    }
});

video.addEventListener('mouseleave', () => {
    video.muted = true;
    video.play();
});