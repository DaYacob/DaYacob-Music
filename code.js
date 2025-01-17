const title = document.getElementById("title")

const left = document.getElementById("left")
const centre = document.getElementById("centre")
const right = document.getElementById("right")

const songs = document.getElementById("songs")
const library = document.getElementById("library")

const searchBar = document.getElementById("search-bar")
const searching = document.getElementById("searching")

const albumImage = document.getElementById("album-image")
const albumName = document.getElementById("album-name")
const albumDesc = document.getElementById("album-desc")
const save = document.getElementById("save")

const player = document.getElementById("player")
const songImage = document.getElementById("song-image")
const songName = document.getElementById("song-name")
const songFeature = document.getElementById("song-feature")

const progress = document.getElementById("progress")

const songState = document.getElementById("song-state")
const shuffle = document.getElementById("shuffle")
const repeat = document.getElementById("repeat")
const volumebar = document.getElementById("volume")

var firebaseConfig = {
    apiKey: "AIzaSyCUNz4G0i-H63ukOOlTgcSAmYVh-yCEWEw",
    authDomain: "dayacob-music.firebaseapp.com",
    projectId: "dayacob-music",
    storageBucket: "dayacob-music.firebasestorage.app",
    messagingSenderId: "754686380975",
    appId: "1:754686380975:web:c0743c7f1e26f12c5e7d5a",
    measurementId: "G-V932XV9BRQ"
}

firebase.initializeApp(firebaseConfig)

function checkAuthState(){
    firebase.auth().onAuthStateChanged(function(user){
        if (!user) {
            window.location.href = "./login.html"
        }
    })
}

function signout(){
    firebase.auth().signOut()
    .then(function(){
        window.location.href = "./login.html"
        //Switches window to the login page if successfully signed out.
    })
    .catch(function(error) {
        console.error("Error during signout: ", error)
    })
}

checkAuthState()

let all = [
    [
        ["Liked Songs", "DaYacob Music", "0 Songs", "Playlist", "./Images/Albums/Liked.png"],
    ],
    [
        ["Slime Season 2", "Young Thug", "2015", "Album", "./Images/Albums/Slime Season 2.png"],
        ["https://dl.dropbox.com/scl/fi/qipn7dip79mgpvmqmq0tp/Big-Racks.mp3?rlkey=94ehurehk5t8y6f7251crld7n&st=cdwjpugw&dl=0", "", "Big Racks", "Young Thug, Lil Uzi Vert"],
        ["https://dl.dropbox.com/scl/fi/6sbo2jhttq8sgp9akpjsa/Thief-In-The-Night.mp3?rlkey=ixbfoc6impant2jqqp3fyl1nq&st=blotazi8&dl=0", "", "Thief In The Night", "Young Thug, Trouble"],
        ["https://dl.dropbox.com/scl/fi/ynmzgobpubwbwksrxb4gl/Don-t-Know.mp3?rlkey=4o77givrmgyze51dckpaurx3y&st=2enayzw8&dl=0", "", "Don't Know", "Young Thug, Shad Da God"],
        ["https://dl.dropbox.com/scl/fi/z0l8gwkzh94359i77famo/Hey-I.mp3?rlkey=tf3j7q9lnune6rmhv5my5pvn7&st=d0z8zylr&dl=0", "", "Hey, I", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/650d3kcc6nrxze9qwz94e/She-Notice.mp3?rlkey=k4ryhmygj53n1wrvq36indzch&st=5gi6pl5a&dl=0", "", "She Notice", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/f48q4qlz8gtogz74jp4a9/All-Over.mp3?rlkey=g2ycju9242og28d5ogt25qa5c&st=tatj0h4w&dl=0", "", "All Over", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/dhrizj0fgk25xfo24n0ng/Twerk-It.mp3?rlkey=gz765gv4dzanwktr0g2jzpeqf&st=r7he532p&dl=0", "", "Twerk It", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/tbfkb1wffpk2u1eoece6s/Phoenix.mp3?rlkey=5tig2ed2ithgfyo6bit18vels&st=rytjendh&dl=0", "", "Phoenix", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/yq4gswdsjbw93xths6tvf/I-ll-Tell-You-What.mp3?rlkey=7i68ynbp9k22t67w2cuol9r3k&st=8ymm6hea&dl=0", "", "I'll Tell You What", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/u5mad4rtuufiisagubc7t/Mind-Right.mp3?rlkey=jap6a2sjmwrqclhj9qo9hxvuu&st=stxpooth&dl=0", "", "Mind Right", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/v26nia0d8atfig3s9uywm/Go-Crazy.mp3?rlkey=k49mdudsc3fkasnza4d7qidxe&st=ca108lvm&dl=0", "", "Go Crazy", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/1uetu5hnkw31g55pmickl/Pull-Up-On-A-Kid.mp3?rlkey=q0mdtrby86nw7ea0ia7phleat&st=18vx2sf4&dl=0", "", "Pull Up On A Kid", "Young Thug, Yak Gotti"],
        ["https://dl.dropbox.com/scl/fi/wmywj5xsm395bumugex2q/Up.mp3?rlkey=q5lz5unrw217gm761sbzw15yg&st=arl3uduy&dl=0", "", "Up", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/5flpeesnl9l40dl0ulhe1/Bout-Damn-Time.mp3?rlkey=aihdxjvubnyry8fp2cfi8q1dh&st=1jz44f4z&dl=0", "", "Bout (Damn) Time", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/tz80gy891ie6bwbpzfws2/Flaws.mp3?rlkey=ziafjjpm9ws4ddd38qjyz7qxh&st=pucd9fmm&dl=0", "", "Flaws", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/18kvoa4ujbn1ojv8uyzia/Oh-Lord.mp3?rlkey=hc5bsx3kkbbhcnizuuyv8bs2l&st=8k237ksu&dl=0", "", "Oh Lord", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/tiwc2mr3cfrub7nl6vn48/Beast.mp3?rlkey=h4dbzcbwni5r848jmb4hrysdi&st=arzxzz8p&dl=0", "", "Beast", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/tf6ene2xg776nfx39sio1/Never-Made-Love.mp3?rlkey=2cgke502bof1k8e2br7whey7o&st=yl3s4l1j&dl=0", "", "Never Made Love", "Young Thug, Rich Homie Quan"],
        ["https://dl.dropbox.com/scl/fi/69impll2kb0qsf6x91im9/Raw-Might-Just.mp3?rlkey=xvuyg9iry4c8gegph1ma1jt63&st=alb7w0s8&dl=0", "", "Raw (Might Just)", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/dc4a92d79pa051b6bhnax/No-No-No.mp3?rlkey=j799cc2alobfevcbtid9fwuv8&st=bwtkf23g&dl=0", "", "No No No", "Young Thug, Birdman"],
        ["https://dl.dropbox.com/scl/fi/hrbttepkgtw5tl5afn2ho/My-Baby.mp3?rlkey=hu41g8lm2f2yftsj92ayu2sru&st=jka2gwl9&dl=0", "", "My Baby", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/gr2ubndnwyfwjipyeddnn/Love-Me-Forever-Chopped-Screwed.mp3?rlkey=4af7h9dr9f5ejv7lugzsdwj79&st=lpbbk059&dl=0", "", "Love Me Forever (Chopped & Screwed)", "Young Thug"],
    ],
    [
        ["The Whole World Is Free", "OsamaSon", "2024", "Single", "./Images/Albums/The Whole World Is Free.png"],
        ["https://dl.dropbox.com/scl/fi/z7zuxmqoscq4eyna5vgwx/The-Whole-World-Is-Free.mp3?rlkey=7p3dc93azp0e3i03mnf01b643&st=w9chjuip&dl=0", "", "The Whole World Is Free", "OsamaSon"],
    ],
    [
        ["Jeffery", "Young Thug", "2016", "Album", "./Images/Albums/Jeffery.png"],
        ["https://dl.dropbox.com/scl/fi/nsv9ottqpserjlaj8qqst/Wyclef-Jean.mp3?rlkey=1zenpygfpnx7mwlb13b07f82n&st=29hv52k2&dl=0", "", "Wyclef Jean", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/ktdmlx32039l83uquyvan/Floyd-Mayweather.mp3?rlkey=yao7ha1p1zn7ovyhev2i5p9hl&st=h9kzqrvt&dl=0", "", "Floyd Mayweather", "Young Thug, Travis Scott, Gucci Mane, Gunna"],
        ["https://dl.dropbox.com/scl/fi/v9xm41yzaqc43502zxkxd/Swizz-Beatz.mp3?rlkey=0g07i5k1hal0mkxeucoiaf4gh&st=wxmzdami&dl=0", "", "Swizz Beatz", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/g3hi5c393ooirafdt3vx9/Future-Swag.mp3?rlkey=m9hrc3y8uqsjs155ev2hchomj&st=jd7agfp0&dl=0", "", "Future Swag", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/ey8zoii5m9l91yuv33hrs/RiRi.mp3?rlkey=njzywd3yfk7zgg85exmmzrzwo&st=eyslijxb&dl=0", "", "RiRi", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/mlxumvuokvjuz0np19z0p/Guwop.mp3?rlkey=8eyz1dbr5ag8x2ggbfirq9d72&st=vo9koeku&dl=0", "", "Guwop", "Young Thug, Quavo, Offset, Young Scooter"],
        ["https://dl.dropbox.com/scl/fi/n346zlwqehfud2esa8qif/Harambe.mp3?rlkey=wswtjcrdhmfmk7wos05u8tmti&st=vtnmfwny&dl=0", "", "Harambe", "Young Thug"],
        ["https://dl.dropbox.com/scl/fi/opc2wfjq1s2ououdjt0xv/Webbie.mp3?rlkey=tkpuumq6yrgp6vwelb2c8tk0o&st=2m6rakfv&dl=0", "", "Webbie", "Young Thug, Lil Duke"],
        ["https://dl.dropbox.com/scl/fi/ux2ugc8vv0iaehtqfqkv0/Kanye-West.mp3?rlkey=a2rorum0jmymjckzp7i3bgtte&st=oua4a8tk&dl=0", "", "Kanye West", "Young Thug, Wyclef Jean"],
        ["https://dl.dropbox.com/scl/fi/19q8tq0vxrvl9z7dtndks/Pick-Up-The-Phone.mp3?rlkey=4ql3f50ymh0o0dli3nxq9cpos&st=pc6vj8n8&dl=0", "", "Pick Up The Phone", "Young Thug, Travis Scott, Quavo"],
    ],
]

let list = all[0] //List is what album is going to be shown.
let playing = NaN //Index is what album is currently playing.
let currentSong = NaN //CurrentSong is the song that will play.
let loaded = NaN //Checks what album is loaded.

let queue = []
let listened = []
let previous = []

let shuffled = false
let repeated = false
let dragging = false

let volume = 0.5

function loadAudio(album){
    for (let i = 1; i < album.length; i++){
        const newAudio = new Audio(album[i][0])
        newAudio.load()
        album[i][1] = newAudio
    }
}

function unloadAudio(){
    if (loaded){ //Checks if there are any songs loaded.
        for (let i = 1; i < loaded.length; i++){ //Selects all the songs.
            if (loaded[i][1] != ""){ //Checks if the song has already loaded.
                loaded[i][1] = "" //Removes the audio object
            }
        }
    }
}

function updateSongProgression(){
    progress.value = currentSong.currentTime

    if (!isNaN(currentSong.duration)){
        progress.max = currentSong.duration
    }

    currentSong.addEventListener("loadedmetadata", () => {
        progress.max = currentSong.duration
    })

    progress.onchange = function(){
        currentSong.currentTime = progress.value
    }

    currentSong.ontimeupdate = function(){
        if (!dragging){
            if (!isNaN(currentSong.duration)){
                progress.value = currentSong.currentTime
            } else {
                progress.value = 0
            }
        }
    }
}

function updateCurrentAlbum(album){
    list = all[album]
    songs.scrollTo(0, 0)
    updateCurrentSongs()
}

function updateCurrentSongs(){
    while (songs.firstChild) {
        songs.removeChild(songs.firstChild)
        //If there are already songs shown, it would remove them.
    }

    if (withinLibrary()){
        save.src = "./Images/Icons/Saved.png"
    } else {
        save.src = "./Images/Icons/Save.png"
    }

    albumImage.src = list[0][4]
    albumName.innerHTML = list[0][0]
    albumDesc.innerHTML = list[0][1] + " • " + list[0][2] + " • " + list[0][3]

    for (let i = 1; i < list.length; i++){
        const createdSong = document.createElement("li")
        createdSong.classList.add("setplay")

        const songContainer = document.createElement("div")
        songContainer.classList.add("song-container")

        const songText = document.createElement("span")
        songText.innerHTML = `${list[i][2]}<br>${list[i][3]}`
        songContainer.appendChild(songText)

        const createdLike = document.createElement("img")
        createdLike.classList.add("song-like")
        createdLike.src = "./Images/Icons/Save.png"
        songContainer.appendChild(createdLike)

        if (all[0].some(row => row.includes(list[i][0]))){
            createdLike.src = "./Images/Icons/Saved.png"
        } else {
            createdLike.src = "./Images/Icons/Save.png"
        }

        createdLike.addEventListener("click", function(event) {
            event.stopPropagation()
        
            const isLiked = all[0].some(row => row[0] == list[i][0])

            if (playing == all[0]){
                clearQueues()
            }
        
            if (!isLiked) {
                createdLike.src = "./Images/Icons/Saved.png"
                const added = list[i].slice()
                added[1] = ""
                added.push(albumImage.src)
                all[0].push(added)

                if (playing == all[0]){
                    loadAudio(all[0])
                }
            } else {
                createdLike.src = "./Images/Icons/Save.png"
                const removed = all[0].findIndex(row => row[0] == list[i][0])
                all[0].splice(removed, 1)
            }

            if (all[0].length == 2){
                all[0][0][2] = `${all[0].length - 1} Song`
            } else {
                all[0][0][2] = `${all[0].length - 1} Songs`
            }

            if (list == all[0]){
                updateCurrentSongs()
            }

            addTrackPosition(all[0])
        })

        createdSong.appendChild(songContainer)
        songs.appendChild(createdSong)

        if (list[i][1] == currentSong){
            createdSong.style.color = "rgb(36, 156, 68)"
        }
    }

    addButtons()
}

function updateCurrentPlayer(song, pos){
    if (currentSong){
        currentSong.pause()
        currentSong.currentTime = 0
    }
    
    currentSong = song
    currentSong.volume = volume

    left.style.visibility = "visible"

    if (!isNaN(currentSong.duration)){
        currentSong.play()
        songState.src = "./Images/Icons/Pause.png"
    }

    currentSong.addEventListener("loadedmetadata", () => {
        currentSong.play()
        songState.src = "./Images/Icons/Pause.png"
    })

    if (all[0] == playing){ //Check if you are listening to your liked songs
        songImage.src = playing[pos][playing[pos].length - 2]
    } else {
        songImage.src = playing[0][4]
    }
    
    songName.innerHTML = playing[pos][2]
    songFeature.innerHTML = playing[pos][3]

    repeat.style.filter = "invert(0%)"
    repeated = false

    resetColours()
    songData()

    if (list == playing){
        songs.querySelectorAll("li")[pos - 1].style.color = "rgb(36, 156, 68)"
    }
}

function createQueue(starting){
    if (playing.length > starting){
        if (shuffled){
            let randomised = playing.slice(1).filter((_, index) => index + 1 !== starting)

            for (let i = 1; i < randomised.length; i++){
                let j = Math.floor(Math.random() * (i + 1))
                let temp = randomised[i]
                randomised[i] = randomised[j]
                randomised[j] = temp
            } //Fisher-Yates shuffle algorithm.

            randomised.unshift(playing[starting]) //So the first song does not get randomised.

            for (let i = 0; i < randomised.length; i++){
                queue.push(randomised[i])
            }
        } else {
            for (let i = starting; i < playing.length; i++){
                queue.push(playing[i])
            }
        }
    }
}

function addLibrary(){
    const albumImage = document.createElement("img")
    albumImage.src = list[0][4]
    albumImage.style.width = "125px"
    albumImage.style.height = "125px"
    albumImage.setAttribute("data-name", all.indexOf(list))
    library.appendChild(albumImage)

    albumImage.addEventListener("click", function(){
        updateCurrentAlbum(albumImage.dataset.name)

        title.style.visibility = "visible"
        songs.style.visibility = "visible"
        clearSearches()
    })
}

function removeLibrary(album){
    album.remove()
}

function withinLibrary(){
    for (const album of library.querySelectorAll("*")){
        if (album.dataset.name == all.indexOf(list)){
            return album
        }
    }
}

function modifyLibrary(){
    const album = withinLibrary()
    if (!album){
        save.src = "./Images/Icons/Saved.png"
        addLibrary()
    } else {
        save.src = "./Images/Icons/Save.png"
        removeLibrary(album)
    }
}

function songData(){
    updateSongProgression()
    if (!listened.includes(currentSong)){ //Song has not been listened to already.
        listened.push(currentSong)
        currentSong.addEventListener("ended", function() {
            if (repeated){
                currentSong.currentTime = 0
                currentSong.play()
            } else {
                skipCurrentSong()
            }
        })
    }
}

function resetColours(){
    songs.childNodes.forEach(song => {
        song.style.color = "rgb(0, 0, 0)"
    })
}

function updateSongState(){
    if (!isNaN(currentSong.duration)){
        if (currentSong.paused) {
            currentSong.play()
            songState.src = "./Images/Icons/Pause.png"
        } else if (!currentSong.paused) {
            currentSong.pause()
            songState.src = "./Images/Icons/Play.png"
        }
    }
}

function skipCurrentSong(){
    if (currentSong){
        if (queue.length > 0){
            const removed = queue.shift()
            previous.push(removed)
        }
        
        if (queue.length == 0){
            if (list.length > 1){
                if (shuffled){
                    createQueue(Math.floor(Math.random() * playing.length) + 1)
                } else {
                    createQueue(1)
                }
            } else {
                currentSong.pause()
                currentSong.currentTime = 0
                currentSong = NaN
                left.style.visibility = "hidden"
            }
        }

        if (queue.length > 0){
            updateCurrentPlayer(queue[0][1], queue[0][queue[0].length - 1])
        }
    }
}

function rewindCurrentSong(){
    if (currentSong){
        if (previous.length > 0){
            queue.unshift(previous[previous.length - 1])
            updateCurrentPlayer(previous[previous.length - 1][1], previous[previous.length - 1][previous[previous.length - 1].length - 1])
            previous.pop()
        } else {
            currentSong.currentTime = 0
        }
    }
}

function enableShuffle(){
    clearQueues()
    if (shuffled){
        shuffle.style.filter = "invert(0%)"
        shuffled = false
    } else {
        shuffle.style.filter = "invert(100%)"
        shuffled = true
    }
}

function enableRepeat(){
    if (repeated){
        repeat.style.filter = "invert(0%)"
        repeated = false
    } else {
        repeat.style.filter = "invert(100%)"
        repeated = true
    }
}

function clearQueues(){
    while (queue.length > 0){
        queue.pop()
    }

    while (previous.length > 0){
        previous.pop()
    }
}

function addTrackPosition(array){
    for (i = 1; i < array.length; i++){
        if (isNaN(array[i][array[i].length - 1])){
            array[i].push(i)
        } else {
            array[i][array[i].length - 1] = i
        }
    }
}

function addButtons() {
    addTrackPosition(list)
    Array.from(document.getElementsByClassName("setplay")).forEach(function(button){
        const pos = Array.from(document.querySelectorAll("#songs li")).findIndex(item => item.textContent.trim() === button.textContent.trim()) + 1
        button.addEventListener("click", function(){
            if (list[pos][1] != currentSong){
                if (playing != list){
                    loadAudio(list)
                    unloadAudio()
                    playing = list
                    loaded = playing
                }

                clearQueues()
                createQueue(pos)
                updateCurrentPlayer(queue[0][1], pos)
            } else if (currentSong.paused) {
                currentSong.play()
                songState.src = "./Images/Icons/Pause.png"
            } else if (!currentSong.paused) {
                currentSong.pause()
                songState.src = "./Images/Icons/Play.png"
            }
        })
        button.addEventListener("mouseover", function() {
            button.style.background = "rgb(40, 40, 40)"
        })
        button.addEventListener("mouseleave", function() {
            button.style.background = songs.style.background
        })
    })
}

function clearSearches(){
    searchBar.value = ""
    while (searching.firstChild){
        searching.removeChild(searching.firstChild)
    }
}

document.body.onkeydown = function(event){
    const activeElement = document.activeElement
    if (activeElement.id != "search-bar"){
        if (event.key == " "){
            event.preventDefault()
            updateSongState()
        } else if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft"){
            rewindCurrentSong()
        } else if (event.key == "d" || event.key == "D" || event.key == "ArrowRight"){
            skipCurrentSong()
        }

    } else {
        if (event.key == "Enter"){
            const initital = searchBar.value.toLowerCase()
            const tags = initital.split(" ")

            title.style.visibility = "hidden"
            songs.style.visibility = "hidden"

            if (initital.trim()){
                for (let i = 0; i < all.length; i++){
                    const albumName = all[i][0][0]
                    const albumArtist = all[i][0][1]
            
                    const identifier = albumName.toLowerCase() + albumArtist.toLowerCase()
                    const matches = tags.every(tag => identifier.includes(tag))

                    if (matches) {
                        if (!searching.querySelector(`img[data-name = "${identifier}"]`)){
                            const createdAlbum = document.createElement("img")
                            createdAlbum.src = all[i][0][4]
                            createdAlbum.style.width = "150px"
                            createdAlbum.style.height = "150px"
                            createdAlbum.setAttribute("data-name", identifier)
                            createdAlbum.addEventListener("click", function(){
                                title.style.visibility = "visible"
                                songs.style.visibility = "visible"

                                updateCurrentAlbum(i)
                                clearSearches()
                            })
                            searching.appendChild(createdAlbum)
                        }
                    } else {
                        const images = searching.querySelectorAll("img")
                        images.forEach(img => {
                            if (img.dataset.name == identifier){
                                searching.removeChild(img)
                            }
                        })
                    }
                }   
            } else {
                clearSearches()
            }
        }
    }
}

progress.addEventListener("mousedown", function(){
    dragging = true
})
progress.addEventListener("mouseup", function(){
    dragging = false
})

volumebar.addEventListener("input", (event) => {
    currentSong.volume = event.target.value
    volume = event.target.value
})

updateCurrentSongs()