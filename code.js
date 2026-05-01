////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables to access different HTML elements

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
const songLiked = document.getElementById("song-liked")

const progress = document.getElementById("progress")

const songState = document.getElementById("song-state")
const shuffle = document.getElementById("shuffle")
const repeat = document.getElementById("repeat")
const volumeBar = document.getElementById("volume")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Firebase Configuration

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
        // Checks if the user has not logged in
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Array

let all = [
    [
        ["Liked Songs", "DaYacob Music", "0 Songs", "Playlist", "./Images/Albums/Liked.png", "rgb(230, 177, 80)"],
    ],

     [
        ["him", "Nettspend", "2026", "Album", "https://dl.dropbox.com/scl/fi/e6h2k2wa5jb311hp393oi/him.jpg?rlkey=nqq0tln8dpgg7wvd0ounvy3jz&st=38y11iiz&dl=0", "rgb(238, 42, 60)"],
        ["https://dl.dropbox.com/scl/fi/3pwzua8j68ojg3t39uupu/kriss-kross.mp3?rlkey=oi0i3mig3z6wi8ftd1ku98a68&st=okmad28p&dl=0", "", "kriss kross", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/sp2wibweqxmhq0ias26ex/sumthin-different.mp3?rlkey=4yt3txhwoolkgctfklzm9ldnl&st=0y7ol1og&dl=0", "", "sumthin different", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/td8k476o7gi2jvkmtvt5q/medicine-taste-like-shit.mp3?rlkey=vl53427m8e88g6r0mu6qac7rg&st=168n8uve&dl=0", "", "medicine taste like shit", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/21mnms16gs07l5n22ezzk/strong.mp3?rlkey=tn59xwn1ugq8uyv1xm3whc3al&st=gmxs9fp0&dl=0", "", "strong", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/unq641150o5giqybtidmd/bliss.mp3?rlkey=zt431puiye0w195rv85nqpxej&st=u7ztg1b1&dl=0", "", "bliss", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/zqgto48f2kw1vxy30tkbu/change-on-me.mp3?rlkey=556e3larc46s07jaubu88tbx6&st=5w8a40ng&dl=0", "", "change on me", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/z45aykwh77cdmi4wu5l71/goin-dumb.mp3?rlkey=wftct8pk18uh23bzjci2jbi1h&st=bsn9snpl&dl=0", "", "goin dumb", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/zp9nsp35pvkvv3rbq6yaj/team-x.mp3?rlkey=admwt0xrda31svoqjr0omftdb&st=tvqix5al&dl=0", "", "team x", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/9x3ozmuzo1ipphhn2mlyu/high-off-life.mp3?rlkey=6xssy654gnqddrytx0kl8xk2h&st=085u63e7&dl=0", "", "high off life", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/vevta388gu5jz4a8uu1l0/breesh-breesh.mp3?rlkey=bnj4ay2306gi443un64nt75so&st=oiqms93g&dl=0", "", "breesh breesh", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/jvorda9sf2lz0v08puqyy/mf.mp3?rlkey=l4d2z1e7j8wzjlmkrev7cvg57&st=fmw1aqtm&dl=0", "", "$ mf", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/8k2uxhkmwc0l2c9e794pn/hywds.mp3?rlkey=1h8ysq15wjyi1fou6f707jb73&st=sched8vk&dl=0", "", "hywds", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/pkqgrqnuayiyhjbi231os/young-ho.mp3?rlkey=3ydjuul4tvxicbfmppij0v5bv&st=llka1jlg&dl=0", "", "young ho", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/28zjn11h30oz4uram9zph/pocket-bag.mp3?rlkey=ns0scuac8uhhmemv9batcjqoo&st=iu0kum30&dl=0", "", "pocket bag", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/0slk6xxv5s493mi2d799x/killin.mp3?rlkey=op1oommj5kbpjqpud3twvhvr0&st=59qxefoy&dl=0", "", "killin", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/27pbx07bbaikmu507kei0/sallys.mp3?rlkey=kccrn7nq3f79syzhiioxpp6da&st=uzn2lh8s&dl=0", "", "sallys", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/mljjv1199roa4xd2aa73m/problems.mp3?rlkey=k5zz8cxlyljz78vobcaeq523m&st=crtowzgo&dl=0", "", "problems", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/2jloabvn5ftc31vnmlhco/snapchat.mp3?rlkey=wp0fpa2tt6cfo9ll2png0skj4&st=ue4uc02t&dl=0", "", "snapchat", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/wv29783ir724j1j7ix5px/sonder.mp3?rlkey=pdrrywqeebm842x2a48m594gs&st=3beg044r&dl=0", "", "sonder", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/05tj2v8wut1v4kh9j9iq6/10k-ona-dog.mp3?rlkey=tk49gi7elo5gzj8g7rzdkecf9&st=vjitnqwh&dl=0", "", "10k ona dog", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/3cc3vf57veczwohfft9iv/beep-beep.mp3?rlkey=34txnj9xhyuwubded3ekpplvt&st=x06muql9&dl=0", "", "beep beep", "Nettspend"],
        ["https://dl.dropbox.com/scl/fi/yeedl7wuw60kzz7sk0b7i/shootin.mp3?rlkey=tgwnsb58zbyon7eieooktak6u&st=iiqt46ra&dl=0", "", "shootin", "Nettspend"],
    ],
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Variables

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Functions

function isSongLiked(songSrc){
    return all[0].some(row => row[0] === songSrc)
}

function likeSong(songData){
    if (isSongLiked(songData[0])) return

    const added = songData.slice()
    added[1] = ""
    added.push(albumImage.src)

    all[0].push(added)

    if (playing == all[0]){
        const newAudio = new Audio(added[0])
        newAudio.load()
        added[1] = newAudio
    }

    updateLikedCount()
}

function unlikeSong(songSrc){
    const index = all[0].findIndex(row => row[0] === songSrc)
    if (index === -1) return

    if (playing == all[0]){
        queue = queue.filter(q => q[0] !== songSrc)
    }

    all[0].splice(index, 1)
    updateLikedCount()
}

function updateLikedCount(){
    all[0][0][2] = `${all[0].length - 1} Song${all[0].length - 1 === 1 ? "" : "s"}`
}

function refreshPlayerLikeIcon(){
    if (!playing || !currentSong) return

    const song = playing.find(s => s[1] === currentSong)
    if (!song) return

    songLiked.src = isSongLiked(song[0])
        ? "./Images/Icons/Saved.png"
        : "./Images/Icons/Save.png"
}

function loadAudio(album){ //Loads album
    for (let i = 1; i < album.length; i++){
        const newAudio = new Audio(album[i][0]) //Creates new audio object
        newAudio.load() //Loads the audio object
        album[i][1] = newAudio //Assigns the audio to the array
    }
}

function unloadAudio(){ //Unloads the loaded album
    if (loaded){ //Checks if there are any songs loaded.
        for (let i = 1; i < loaded.length; i++){ //Selects all the songs
            if (loaded[i][1] != ""){ //Checks if the song has already loaded
                loaded[i][1] = "" //Removes the audio object
            }
        }
    }
}

function updateSongProgression(){ //Updates the song progression bar
    progress.value = currentSong.currentTime

    if (!isNaN(currentSong.duration)){ //Assigns the progress bar's max to the duration if current song is loaded
        progress.max = currentSong.duration
    }

    currentSong.addEventListener("loadedmetadata", () => { //Waits until it loads (if it already loaded it doesn't go here)
        progress.max = currentSong.duration
    })

    progress.onchange = function(){ //When the progress changes, the current song's current time changes to match it
        currentSong.currentTime = progress.value
    }

    currentSong.ontimeupdate = function(){ //When the current song's current time updates, the progress changes
        if (!dragging){
            if (!isNaN(currentSong.duration)){
                progress.value = currentSong.currentTime
            } else {
                progress.value = 0
            }
        }
    }
}

function updateCurrentAlbum(album){ //Updates the current album
    list = all[album]
    window.scrollTo(0, 0)
    updateCurrentSongs()
}

function artistSearch(name){ //Used to automatically search for artists
    const tags = name.split(", ")

    searchBar.value = tags[0]
    searchEntered()
}

function updateCurrentSongs(){ //Updates the list of songs
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
    albumDesc.innerHTML = list[0][1] + " • " + list[0][2] + " • " + list[0][3] //Applies the album image, name and description

    title.style.background = `linear-gradient(to bottom, ${list[0][5]}, rgb(40, 40, 40))` //Applies the custom colour gradient

    for (let i = 1; i < list.length; i++){ //Creates a song for every song in the album and adds it to the songs list
        const createdSong = document.createElement("li")
        createdSong.classList.add("setplay")

        const songContainer = document.createElement("div")
        songContainer.classList.add("song-container")

        const songNumber = document.createElement("p")
        songNumber.classList.add("song-num")
        songNumber.innerHTML = `                  ${i}`
        songContainer.appendChild(songNumber)

        const songName = document.createElement("p")
        songName.classList.add("song-name")
        songName.innerHTML = list[i][2]
        songContainer.appendChild(songName)

        const songFeature = document.createElement("p")
        songFeature.classList.add("song-feature")
        songFeature.innerHTML = list[i][3]
        songContainer.appendChild(songFeature)

        if (list == all[0]){ //Checks if it in the liked songs
            const songAlbum = document.createElement("p")
            songAlbum.classList.add("song-album")

            const album = findAlbum(false, songName.innerHTML)
            songAlbum.innerHTML = album[0][0]
            songContainer.appendChild(songAlbum)

            songAlbum.addEventListener("click", function(event) {//Takes the user to the album page on click
                event.stopPropagation()

                findAlbum(true, songName.innerHTML)
            })
        }

        const createdLike = document.createElement("img")
        createdLike.classList.add("song-like")
        createdLike.src = "./Images/Icons/Save.png"
        songContainer.appendChild(createdLike)

        songContainer.addEventListener("mouseover", function() {
            createdLike.style.display = "block"
        })
        
        songContainer.addEventListener("mouseleave", function(){
            const song = list[i]

            if (!isSongLiked(song[0])){
                createdLike.style.display = "none"
            }
        })

        if (isSongLiked(list[i][0])){
            createdLike.src = "./Images/Icons/Saved.png"
            createdLike.style.display = "block"
        } else {
            createdLike.src = "./Images/Icons/Save.png"
            createdLike.style.display = "none"
        }

        songFeature.addEventListener("click", function(event){ //Takes the user to search for the artist on click
            event.stopPropagation()
            artistSearch(songFeature.innerHTML)
        })

        createdLike.addEventListener("click", function(event){
            event.stopPropagation()

            const song = list[i]

            if (!isSongLiked(song[0])){
                likeSong(song)
            } else {
                unlikeSong(song[0])
            }

            updateCurrentSongs()
            refreshPlayerLikeIcon()
        })

        createdSong.appendChild(songContainer)
        songs.appendChild(createdSong)

        if (list[i][1] == currentSong){
            songNumber.style.color = "rgb(36, 156, 68)"
            songName.style.color = "rgb(36, 156, 68)"
        }
    }

    addButtons()
}

function updateCurrentPlayer(song, pos){ //Updates the song player at the bottom
    songLiked.onclick = null

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
    refreshPlayerLikeIcon()

    songLiked.onclick = function(event){
        event.stopPropagation()

        const song = playing[pos]

        if (!isSongLiked(song[0])){
            likeSong(song)
        } else {
            unlikeSong(song[0])
        }

        refreshPlayerLikeIcon()

        if (list == playing){
            updateCurrentSongs()
        }
    }

    repeat.style.filter = "invert(0%)"
    repeated = false

    resetColours()
    songData()

    if (list == playing){
        const songContainer = songs.querySelectorAll("li")[pos - 1]
        const songNumber = songContainer.querySelector(".song-num")
        const songName = songContainer.querySelector(".song-name")

        songNumber.style.color = "rgb(36, 156, 68)"
        songName.style.color = "rgb(36, 156, 68)"
    }
}

function createQueue(starting){ //Creates the queue if it empty
    if (playing.length > starting){
        if (shuffled){
            let randomised = playing.slice(1).filter((_, index) => index + 1 !== starting)

            for (let i = 1; i < randomised.length; i++){
                let j = Math.floor(Math.random() * (i + 1))
                let temp = randomised[i]
                randomised[i] = randomised[j]
                randomised[j] = temp
            } //Fisher-Yates shuffle algorithm.

            randomised.unshift(playing[starting]) //So the first song does not get randomised

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

function addLibrary(){ //Adds releases to the library
    const albumImage = document.createElement("img")
    albumImage.src = list[0][4]
    albumImage.style.width = "125px"
    albumImage.style.height = "125px"
    albumImage.setAttribute("data-name", all.indexOf(list))
    library.appendChild(albumImage)

    albumImage.addEventListener("click", function(){
        updateCurrentAlbum(albumImage.dataset.name)

        title.style.display = "flex"
        songs.style.display = "block"
        clearSearches()
    })
}

function removeLibrary(album){ //Removes releases from the library
    album.remove()
}

function withinLibrary(){ //Checks if the album exists within the library
    for (const album of library.querySelectorAll("*")){
        if (album.dataset.name == all.indexOf(list)){
            return album
        }
    }
}

function modifyLibrary(){ //Changes the album saved icon if it in or not in the library
    const album = withinLibrary()
    if (!album){
        save.src = "./Images/Icons/Saved.png"
        addLibrary()
    } else {
        save.src = "./Images/Icons/Save.png"
        removeLibrary(album)
    }
}

function songData(){ //Adds function to songs that not been listened to previously
    updateSongProgression()
    if (!listened.includes(currentSong)){ //Song has not been listened to already
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

function resetColours(){ //Resets the colour of the text
    songs.childNodes.forEach(song => {
        const songNumber = song.querySelector(".song-num")
        const songName = song.querySelector(".song-name")

        songNumber.style.color = "rgb(255, 255, 255)"
        songName.style.color = "rgb(255, 255, 255)"
    })
}

function updateSongState(){ //Checks whether the song is paused or playing
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

function findAlbum(update, song){
    //Update suggests if the album should be updated
    //Song suggests what song name to find

    for (let i = 1; i < all.length; i++){ //Starts at 1 so it ignores liked songs
        for (let j = 0; j < all[i].length; j++){
            if (all[i][j][2] == song){
                if (update){
                    title.style.display = "flex"
                    songs.style.display = "block"
                    clearSearches()

                    updateCurrentAlbum(i)
                } else {
                    return all[i]
                }
            }
        }
    }
}

function skipCurrentSong(){ //Skip songs
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

function rewindCurrentSong(){ //Rewind songs
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

function enableShuffle(){ //Shuffle
    clearQueues()
    if (shuffled){
        shuffle.style.filter = "invert(0%)"
        shuffled = false
    } else {
        shuffle.style.filter = "invert(100%)"
        shuffled = true
    }
}

function enableRepeat(){ //Repeat
    if (repeated){
        repeat.style.filter = "invert(0%)"
        repeated = false
    } else {
        repeat.style.filter = "invert(100%)"
        repeated = true
    }
}

function clearQueues(){ //Clears the queue and stack
    while (queue.length > 0){
        queue.pop()
    }

    while (previous.length > 0){
        previous.pop()
    }
}

function addTrackPosition(array){ //Adds track positions so it knows the position when shuffling
    for (let i = 1; i < array.length; i++){
        if (isNaN(array[i][array[i].length - 1])){
            array[i].push(i)
        } else {
            array[i][array[i].length - 1] = i
        }
    }
}

function addButtons(){ //Adds buttons to the songs in the song list
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
            button.style.background = "rgb(50, 50, 50)"
        })
        button.addEventListener("mouseleave", function() {
            button.style.background = songs.style.background
        })
    })
}

function clearSearches(){ //Clears the search bar and hides the results
    searchBar.value = ""
    searching.style.display = "none"
}

function searchEntered(){ //Checks when you press enter while searching
    const initital = searchBar.value.toLowerCase()
    const tags = initital.split(" ")

    title.style.display = "none"
    songs.style.display = "none"

    const values = {
        "Artist": "artists",
        "Album": "albums",
        "Single": "singles",
        "EP": "eps",
        "Playlist": "playlists",
    }

    const sections = searching.querySelectorAll("div")
    sections.forEach(section => {
        const images = section.querySelectorAll("img")
        images.forEach(img => {
            section.removeChild(img)
        })
    })

    if (initital.trim()){
        searching.style.display = "block"
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
                        title.style.display = "flex"
                        songs.style.display = "block"

                        updateCurrentAlbum(i)
                        clearSearches()
                    })
                    
                    const sectionID = values[all[i][0][3]]
                    if (sectionID){
                        const section = document.getElementById(sectionID)
                        if (section.childElementCount < 10){
                            section.appendChild(createdAlbum)
                        }
                    }
                }
            } else {
                sections.forEach(section => {
                    const images = section.querySelectorAll("img")
                    images.forEach(img => {
                        if (img.dataset.name == identifier){
                            section.removeChild(img)
                        }
                    })
                })
            }
        }

        Array.from(searching.children).forEach((text, index, array) => {
            if (text.tagName == "P") {
                const section = array[index + 1]
                if (section.childElementCount == 0){
                    text.style.display = "none"
                    section.style.display = "none"
                } else {
                    text.style.display = "block"
                    section.style.display = "flex"
                }
            }
        })
    } else {
        clearSearches()
    }
}

document.body.onkeydown = function(event){ //Checks when you put any key down
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
            searchEntered()
        }
    }
}

progress.addEventListener("mousedown", function(){ //Checks if you are dragging on the progress bar
    dragging = true
})
progress.addEventListener("mouseup", function(){ //Checks if you let go off the progress bar
    dragging = false
})

volumeBar.addEventListener("input", (event) => { //Adjusts the volume
    currentSong.volume = event.target.value
    volume = event.target.value
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions called immediately

modifyLibrary()
updateCurrentSongs()
