

let reprod = document.getElementById('btn-play');
let modal = document.getElementById('btnClose');
let video = document.getElementById('video');
let divvideo = document.getElementById('modal-bodyVideo');

video.style.display = 'none';

reprod.addEventListener('click',function(){
    video.style.display = 'block';
    video.focus();
});