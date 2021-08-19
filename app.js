const musicContainer = document.querySelector('.music-container')
const playBTN = document.querySelector('#play')
const prevBTN = document.querySelector('#prev')
const nextBTN = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// song titles

const songs = ['Not Shy','sorry not sorry', 'in the morning']

//track songs
let songIndex = 2;

//load songs DOM 
loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `img/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBTN.querySelector('i.fas').classList.remove('fa-play')
    playBTN.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBTN.querySelector('i.fas').classList.add('fa-play')
    playBTN.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])
    playSong()
}



function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }

  function updateProgress(e){
      console.log(e.srcElement.currentTime)
  }

//event listeners

playBTN.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    }else{
        playSong()
    }
})

//change songs

prevBTN.addEventListener('click',prevSong)
nextBTN.addEventListener('click',nextSong)

