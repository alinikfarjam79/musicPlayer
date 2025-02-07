import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// slider configuration
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

//music
let recommendedSongsSection = document.querySelector('#RecommendedSongs');
let FeaturedArtistsSection = document.querySelector('#FeaturedArtists');
let MusicListSection = document.querySelector('#MusicList');
let playIcon = document.querySelector('#playIcon');
let ImgPlayer = document.querySelector('#ImgPlayer');
let audioNamePlayer = document.querySelector('#audioNamePlayer');
let ArtistNamePlayer = document.querySelector('#ArtistNamePlayer');
const musicList = [
    {
        name: "Goriz",
        artist: "Ebi",
        cover: "img/ebi-goriz.jpg",
        src: "music/02 - Goriz.mp3",
        id: 0,
        time: '5:26'
    },
    {
        name: "Harighe Sabz",
        artist: "Ebi",
        cover: "img/ebi-harigh.jpg",
        src: "music/07 Harighe Sabz.mp3",
        id: 1,
        time: '3:49'
    },
    {
        name: "Navazesh",
        artist: "Ebi",
        cover: "img/ebi-navazesh.jpg",
        src: "music/07 Navazesh.mp3",
        id: 2,
        time: '3:52'
    },
    {
        name: "Hamin Khobe",
        artist: "Ebi",
        cover: "img/ebi-haminkhobe.jpg",
        src: "music/Ebi - Hamin KHoobe.mp3",
        id: 3,
        time: '5:00'
    },
    {
        name: "Mesle Marizi",
        artist: "Az shanbe",
        cover: "img/azshanbe-meslemarizi.jpg",
        src: "music/Az Shanbe-Mesle Marizi -musicdel.ir.mp3",
        id: 4,
        time: '2:41'
    },
    {
        name: "Gole Yakh",
        artist: "Kourosh Yaghmaei",
        cover: "img/kaveh-golyakh.jpg",
        src: "music/Kourosh Yaghmaei - Gole Yakh (320).mp3",
        id: 5,
        time: '5:14'
    },
    {
        name: "Aramesh",
        artist: "Mehrad Hidden",
        cover: "img/hidden-aramesh.jpg",
        src: "music/Mehrad Hidden - Aramesh [320].mp3",
        id: 6,
        time: '3:44'
    },

    {
        name: "Hamin Monde bood",
        artist: "Chavoshi",
        cover: "img/chavoshi-shekastam.jpg",
        src: "music/Mohsen Chavoshi - Hamin Moonde Bood (320).mp3",
        id: 7,
        time: '3:56'
    },
    {
        name: "Man Bayad",
        artist: "Chavoshi",
        cover: "img/chvoshi-manbayad.jpg",
        src: "music/Mohsen Chavoshi - Man Bayad Miraftam (320).mp3",
        id: 8,
        time: '3:45'
    },
    {
        name: "Bimeye omr",
        artist: "Shervin",
        cover: "img/shervin-bimeomre.jpg",
        src: "music/Shervin - Bimeye Omr.mp3",
        id: 9,
        time: '3:21'
    },
    {
        name: "Aramesh",
        artist: "Mehrad Hidden",
        cover: "img/hidden-aramesh.jpg",
        src: "music/Mehrad Hidden - Aramesh [320].mp3",
        id: 10,
        time: '3:44'
    },
    {
        name: "Marde Tanha",
        artist: "Farhad",
        cover: "img/farhad-mard.jpg",
        src: "music/Farhad Mehrad - Marde Tanha (320).mp3",
        id: 11,
        time: '3:17'
    },
    {
        name: "Ye Shabe Mahtab",
        artist: "Farhad",
        cover: "img/farhad-yeShab.jpg",
        src: "music/Farhad Mehrad - Ye Shabe Mahtab (320).mp3",
        id: 12,
        time: '4:33'
    },
    {
        name: "Do Panjerah",
        artist: "Googosh",
        cover: "img/ebi-panajareh.jpg",
        src: "music/Googoosh And Ebi - Do Panjareh.mp3",
        id: 13,
        time: '4:11'
    },
    {
        name: "Bemoon",
        artist: "Googosh",
        cover: "/img/gogosh-bemon.jpg",
        src: "music/Googoosh - Bemoon Ta Bemoonam [320].mp3",
        id: 14,
        time: '2:54'
    },


]
// {/* <figure
// class="w-24 h-24 lg:w-32 gap-2 cursor-pointer lg:h-32 flex flex-col items-center shrink-0 bg-indigo-500/50  rounded-full shadow-md shadow-indigo-500/50">
// <img src="img/aref-soltan.jpg"
//     class="w-full h-full bg-cover bg-center hover:scale-95 rounded-full transition" alt="">
// <p class="text-white text-[18px]">Aref</p>
// </figure> */}
let index = 0;

function setRecommendedSongs() {
    musicList.slice(0, 7).forEach((song) => {
        recommendedSongsSection.innerHTML += `
        <figure  id="music" class=" w-24 h-24 lg:w-40 gap-2 cursor-pointer lg:h-40 flex flex-col rounded-lg items-center shrink-0 bg-indigo-500/50  shadow-md shadow-indigo-500/50" >
         <img src="${song.cover}" data-id=${song.id}
            class=" w-[98%] h-[98%] bg-cover bg-center hover:scale-105 rounded-lg transition" alt="">
            <div class=" pointer-events-none w-full px-2">
                <p class="text-white md:text-[18px] text-[16px]">${song.name}</p>
                <p class="text-gray-400 md:text-[16px] text-[14px]">${song.artist}</p> 
            </div>
        </figure>`;
    })
}
function setFeaturedSongs() {
    musicList.slice(7, 15).forEach((song) => {
        FeaturedArtistsSection.innerHTML += `
        <figure
         data-id=${song.id} id="music" class="w-24 h-24 lg:w-32 gap-2 cursor-pointer lg:h-32 flex flex-col items-center shrink-0 bg-indigo-500/50  rounded-full shadow-md shadow-indigo-500/50">
            <img src=${song.cover} data-id=${song.id}
            class=" w-full h-full bg-cover bg-center hover:scale-95 rounded-full transition" alt="">
            <p class="text-white text-[18px] pointer-events-none">${song.artist}</p>
        </figure> `;
    })
}


function setMusicList() {
    musicList.slice(5, 14).forEach((song) => {
        let img = song.cover;
        MusicListSection.innerHTML += `
        <div data-id=${song.id} id="music" class=" w-[95%] h-[68px]  flex justify-center items-center">
                        <div class=" w-[80%] flex gap-3 h-full">
                            <div data-id=${song.id} class="group transition-all relative overflow-hidden bg-cover bg-center h-16 w-20 rounded-lg border" alt="">
                                <img src=${img} data-id=${song.id} class="w-full z-0  h-full"/>
                                    
                                <div data-id=${song.id}
                                    class="w-full z-20 absolute top-0 left-0  h-full bg-purple-300 opacity-0 hidden group-hover:flex transition-all cursor-pointer group-hover:opacity-65 justify-center items-center">
                                    <svg data-id=${song.id} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-9 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>

                                </div>
                            </div>
                            <div class=" flex flex-col justify-center pb-2">
                                <p class="text-base text-white font-semibold">${song.name}</p>
                                <p class="text-sm text-gray-300">${song.artist}</p>
                            </div>
                        </div>
                        <p class="w-[20%] h-full text-white text-sm  flex items-center justify-center pr-2">${song.time}</p>
        </div>
        `
    })
}

function changePlayerIconToStop() {
    let path = playIcon.querySelector('svg > path');
    path.removeAttribute('d')
    path.setAttribute('d', 'M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z')
    ImgPlayer.classList.add('ImgPlayer')
}
window.addEventListener('DOMContentLoaded', () => {
    const music = new Audio();

    music.src = 'music/02 - Goriz.mp3';
    setRecommendedSongs();
    setFeaturedSongs();
    setMusicList();
    let seek = document.querySelector('#seek');
    let bar2 = document.querySelector('#bar2');
    let dot = document.querySelector('#dot');
    let backIcon = document.querySelector('#backIcon');
    let nextIcon = document.querySelector('#nextIcon');
    let Allmusic = document.querySelectorAll('#music');
    Allmusic.forEach((item) => {
        item.addEventListener('click', (e) => {
            index = e.target.getAttribute('data-id');
            music.src = musicList[index].src;
            ImgPlayer.src = musicList[index].cover;
            audioNamePlayer.innerText = musicList[index].name;
            ArtistNamePlayer.innerText = musicList[index].artist;
            music.play();
            changePlayerIconToStop();
        })
    })

    playIcon.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            changePlayerIconToStop();
        } else {
            music.pause();
            let path = playIcon.querySelector('svg > path');
            path.removeAttribute('d')
            ImgPlayer.classList.remove('ImgPlayer')

            path.setAttribute('d', 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z')
        }
    })




    music.addEventListener('timeupdate', () => {
        let curr = music.currentTime;
        let dur = music.duration;

        // let minend = Math.floor(dur / 60);
        // let secend = Math.floor(dur % 60);

        // let minstart = Math.floor(curr / 60);
        // let secstart = Math.floor(curr % 60);
        let progressbar = parseInt((curr / dur) * 100);
        seek.value = progressbar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;

    })

    seek.addEventListener('change', () => {
        music.currentTime = seek.value * music.duration / 100;
    });

    music.addEventListener('ended', () => {
        index -= 0;
        index += 1;
        if (index > musicList.length - 1) {
            index = 0;
        }
        music.src = musicList[index].src;
        ImgPlayer.src = musicList[index].cover;
        audioNamePlayer.innerText = musicList[index].name;
        ArtistNamePlayer.innerText = musicList[index].artist;
        music.play();
        changePlayerIconToStop();
    })

    backIcon.addEventListener('click', () => {
        index -= 1;
        if (index < 0) {
            index = musicList.length - 1;
        }
        music.src = musicList[index].src;
        ImgPlayer.src = musicList[index].cover;
        audioNamePlayer.innerText = musicList[index].name;
        ArtistNamePlayer.innerText = musicList[index].artist;
        music.play();
        changePlayerIconToStop();
    })

    nextIcon.addEventListener('click', () => {
        index -= 0;
        index += 1;
        if (index > musicList.length - 1) {
            index = 0;
        }
        music.src = musicList[index].src;
        ImgPlayer.src = musicList[index].cover;
        audioNamePlayer.innerText = musicList[index].name;
        ArtistNamePlayer.innerText = musicList[index].artist;
        music.play();
        changePlayerIconToStop();
    })
})