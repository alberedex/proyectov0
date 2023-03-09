

let reprod = document.getElementById('btn-play');
let modal = document.getElementById('btnClose');
let video = document.getElementById('video');
let divvideo = document.getElementById('modal-bodyVideo');

modal.addEventListener('click',function(){
    console.log(video);
    let videoRepeat = video.cloneNode(true);

    video.remove();
    // divVideo.removeChild(video);
    divvideo.appendChild(videoRepeat);
});