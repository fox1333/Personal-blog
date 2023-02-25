const
	player = document.querySelector('.column__audio'),
	playBtn = document.querySelector('.play'),
	prevBtn = document.querySelector('.prev'),
	nextBtn = document.querySelector('.next'),
	audio = document.querySelector('.audio'),
	progressContainer = document.querySelector('.progress__container'),
	progress = document.querySelector('.progress'),
	title = document.querySelector('.song'),
	cover = document.querySelector('.cover__img'),
	imgSrc = document.querySelector('#play-pause')

const songs = ['Hollywood Undead - Cashed Out', 'NEFFEX - Never Give Up', 'Skillet - Hero']

let songIndex = 0

function loadSong(song) {
	title.innerHTML = song
	audio.src = `audio/${song}.mp3`
	cover.src = `img/cover${songIndex + 1}.jpg`

}
loadSong(songs[songIndex])

function playSong() {
	player.classList.add('play')
	cover.classList.add('active')

	audio.play()
}

function pauseSong() {
	player.classList.remove('play')
	cover.classList.remove('active')

	audio.pause()
}
playBtn.addEventListener('click', () => {
	const isPlaying = player.classList.contains('play')
	if (isPlaying) {
		pauseSong()
		$('#play-pause').addClass('fas fa-play');
		$('#Mplay-pause').removeClass('as fa-pause');
	} else {
		playSong()
		$('#play-pause').addClass('fas fa-pause');
		$('#play-pause').removeClass('as fa-play');
	}
})
//Next Song
function nextSong() {
	songIndex++

	if (songIndex > songs.length - 1) {
		songIndex = 0
	}

	loadSong(songs[songIndex])
	playSong()
	$('#play-pause').addClass('fas fa-pause');
	$('#play-pause').removeClass('as fa-play');
}
nextBtn.addEventListener('click', nextSong)
//Prev Song
function prevSong() {
	songIndex--
	if (songIndex < 0) {
		songIndex = songs.length - 1
	}
	loadSong(songs[songIndex])
	playSong()
	$('#play-pause').addClass('fas fa-pause');
	$('#play-pause').removeClass('as fa-play');
}
prevBtn.addEventListener('click', prevSong)


//Progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement
	const progressPercent = (currentTime / duration
	) * 100
	// console.log(progressPercent)
	progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)

//Set Progress 
function setProgress(e) {
	const width = this.clientWidth
	const clickX = e.offsetX
	const duration = audio.duration
	audio.currentTime = (clickX / width) * duration

}
progressContainer.addEventListener('click', setProgress)
audio.volume = 0.2