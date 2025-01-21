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
        ["Liked Songs", "DaYacob Music", "0 Songs", "Playlist", "./Images/Albums/Liked.png", "rgb(89, 61, 191)"],
    ],
    [
        ["Slime Season 2", "Young Thug", "2015", "Album", "./Images/Albums/Slime Season 2.png", "rgb(64, 5, 5)"],
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
        ["The Whole World Is Free", "OsamaSon", "2024", "Single", "./Images/Albums/The Whole World Is Free.png", "rgb(209, 51, 33)"],
        ["https://dl.dropbox.com/scl/fi/z7zuxmqoscq4eyna5vgwx/The-Whole-World-Is-Free.mp3?rlkey=7p3dc93azp0e3i03mnf01b643&st=w9chjuip&dl=0", "", "The Whole World Is Free", "OsamaSon"],
    ],
    [
        ["nothing like uuu", "Nettspend", "2024", "Single", "./Images/Albums/nothing like uuu.png", "rgb(50, 54, 66)"],
        ["https://dl.dropbox.com/scl/fi/guldh4jnuxcmbfb4rhgff/nothing-like-uuu.mp3?rlkey=i4gknb05i75jy8g6upj96umhz&st=kjkzgx66&dl=0", "", "nothing like uuu", "Nettspend"],
    ],
    [
        ["Jeffery", "Young Thug", "2016", "Album", "./Images/Albums/Jeffery.png", "rgb(111, 122, 171)"],
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
    [
        ["Grave House", "Sematary, Ghost Mountain", "2019", "Album", "./Images/Albums/Grave House.png", "rgb(122, 5, 17)"],
        ["https://dl.dropbox.com/scl/fi/dwyg3f0wjf0kgjsye5mcg/Fury-Road.mp3?rlkey=hfp2twp2scmj293f6qwmo7au7&st=f35c8vx8&dl=0", "", "Fury Road", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/o8lpylk2r8vnwy1sukdbf/Nevada.mp3?rlkey=d56vgw0uv9dt6zmp9j37p9ieh&st=ru2esfl2&dl=0", "", "Nevada", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/v0t65fldwsjfdzxsi5yzs/Interstate.mp3?rlkey=wd4szjgzsmrech8abkc8xrk6s&st=q1qqutao&dl=0", "", "Interstate", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/k8mt8rrhgxi0d5q4imyca/New-Rocks.mp3?rlkey=f57fsgne31sjdkd818lpa5y41&st=x1anrfke&dl=0", "", "New Rocks", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/v42olp30rnqghcmrgn7m0/Goat-Man.mp3?rlkey=pt1g6xy9xv02nzut91ujqp6ch&st=7inws5ug&dl=0", "", "Goat Man", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/4ehrjnz4w637j5l3jcz2a/Orbs.mp3?rlkey=9dviw5hsdy65x0pnw2coxmvbw&st=x6824zly&dl=0", "", "Orbs", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/1ahsvv2o3caoaqpj9lm6p/Skin-Mask.mp3?rlkey=e2g9bywt60opvb1ciy7bvyzp4&st=x26rv4pc&dl=0", "", "Skin Mask", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/wvqlrnr2iwdt22flwq9cn/Dead-By-Dawn.mp3?rlkey=l0iwbc81390tllovdrw3f5ufc&st=n1b1jdw4&dl=0", "", "Dead By Dawn", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/7fdne69wz6aqr1qzthl3w/Fury-Road-2.mp3?rlkey=chhqiamjqjzoxssvczbi6c25w&st=gyy9jkkz&dl=0", "", "Fury Road 2", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/8yzwwru44see25zoaqnzb/Ready-For-The-House.mp3?rlkey=hj6kp3olb3joqgwd47o8b7q1j&st=lcmm8add&dl=0", "", "Ready For The House", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/4x9buvyn3tzzc90ypem8o/Stand-Your-Ground.mp3?rlkey=bvfpahc634yzpvu25lva4aams&st=tsdzs523&dl=0", "", "Stand Your Ground", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/6yys8amydmkz1g80eckaw/Broken-Angel-Hospital.mp3?rlkey=8rkflwimj9yi4mdngn13jvkre&st=ynmuuxb5&dl=0", "", "Broken Angel Hospital", "Sematary, Ghost Mountain"],
    ],
    [
        ["Hundred Acre Wrist", "Sematary, Ghost Mountain", "2020", "Album", "./Images/Albums/Hundred Acre Wrist.png", "rgb(42, 173, 21)"],
        ["https://dl.dropbox.com/scl/fi/w6nduxgk0gsrdarjwt6q7/Heffalumps.mp3?rlkey=a5sk3ewmafbte932xq1nh9j3m&st=zf0s0zwv&dl=0", "", "Heffalumps", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/rt0611861niumj6gayfh6/Louisville-Slugger.mp3?rlkey=c4emrc6usuhlj09jhcq4mhv8q&st=2jsjrfor&dl=0", "", "Louisville Slugger", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/zltlq9g401rowx5sbi3s9/Tourniquet.mp3?rlkey=6i80660vkbz1qhj2px0j1szxw&st=h6xeglbs&dl=0", "", "Tourniquet", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/gatm9bfkb1n6re0k67tba/Deer-God.mp3?rlkey=fbmghlqtnzqv9ene0owp30548&st=q4midf8r&dl=0", "", "Deer God", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/tu1hn8gg0gboltkdgo804/Taxidermy.mp3?rlkey=ql493pdx2fv9fut1buozbxvqk&st=gc6dczz2&dl=0", "", "Taxidermy", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/9npxt4chgdyobmg4dd47v/Sigil.mp3?rlkey=pa731n5gn60mvriqh9ldjpyke&st=07eeaj8y&dl=0", "", "Sigil", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/rp69ui7qnofps5ydeuiod/Johnny-Cutter.mp3?rlkey=z5npb98hy4zzgakqanrcfu98l&st=oe9y59nh&dl=0", "", "Johnny Cutter", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/zs4owhui3oi7ypj3rjoz9/Goodbye-Horses.mp3?rlkey=qp9wrl9y7b7v77zgywku2lu7h&st=zkz1kwgf&dl=0", "", "Goodbye Horses", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/lnrcom19hium48v8iina3/Nazgul.mp3?rlkey=nu5x32pyh6vyd303vr1ozm0o9&st=8mreyham&dl=0", "", "Nazgul", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/hl6othzvx7vn0mbor6t7m/Cleaver-Valley.mp3?rlkey=ztp9xrt9wkual75f4e0a72lab&st=vebyqmii&dl=0", "", "Cleaver Valley", "Sematary, Ghost Mountain"],
    ],
    [
        ["Rainbow Bridge 3", "Sematary", "2021", "Album", "./Images/Albums/Rainbow Bridge 3.png", "rgb(189, 21, 21)"],
        ["https://dl.dropbox.com/scl/fi/0v6cczi7iqhk9t7zdbd70/God-s-Light-Burns-Upon-My-Flesh.mp3?rlkey=h031odnnirvxfldjsrp84i5ng&st=hgif3675&dl=0", "", "God's Light Burns Upon My Flesh", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/88s62udntkzwtzqd5hxhj/Murder-Ride.mp3?rlkey=894204zn6vmvxmtyvfh24bpew&st=xzy6wjiw&dl=0", "", "Murder Ride", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/qbgiu6avv5nyswjppwqk9/Chainsaw-Party.mp3?rlkey=r2ch1tqcl4neb2dj5ojgy7hhp&st=7zkquytc&dl=0", "", "Chainsaw Party", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/0pgrls0vhgp5w58ohvf0m/I-m-A-Sinner.mp3?rlkey=j6ir5l3q8ojvaymgbsn65x2iy&st=zig4l5i1&dl=0", "", "I'm A Sinner", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/pgqi44cg06i24x7aczz8w/Skin-Mask-2.mp3?rlkey=4ffqj12iyonp5muojobl6udsa&st=sj8smvoy&dl=0", "", "Skin Mask 2", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/g0140qyta28x52gm9bup5/Necromanser.mp3?rlkey=nn699q463hfcyuussu4k021wy&st=5k7frgpk&dl=0", "", "Necromanser", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/kvuzf5hx35vvu29aybgwy/Forest-Fire.mp3?rlkey=kajiqx14pwas4t3syusxzc4re&st=3x7wdr4b&dl=0", "", "Forest Fire", "Sematary, Buckshot"],
        ["https://dl.dropbox.com/scl/fi/weanhjtyg6qxq7oswhdaj/Creepin-Thru-Da-Woods.mp3?rlkey=kolz7f23gkj6i61oq8ye5bw00&st=kkeo3rw5&dl=0", "", "Creepin' Thru Da Woods", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/z54w4xzsd0bnyh1yyumg4/Toothtaker.mp3?rlkey=1wmk2io80rmb2n03uhrzynm3f&st=yuyzmlhc&dl=0", "", "Toothtaker", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/530a7xr6ez06vz8f9ueby/Come-With-Me-To-Hell.mp3?rlkey=6wrwcwe0iu5oltypz03c8cwds&st=wosifbin&dl=0", "", "Come With Me To Hell", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/3r50qbnhwi5bvfaz97bne/Goin-Mordum.mp3?rlkey=hwc3i8wwt38ja5yvaojou0tpm&st=y8alyemr&dl=0", "", "Goin' Mordum", "Sematary, Ghost Mountain"],
        ["https://dl.dropbox.com/scl/fi/k5w8nujgu96j9wagnwox6/Witching-Hour.mp3?rlkey=wj88ql697d7p1nbts1zv5fh4p&st=qriljemu&dl=0", "", "Witching Hour", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/ozin1fxdi76g2ikatjvfj/Skincarver.mp3?rlkey=m499zsz24q4aq40ijmh4hu62f&st=qalvvvls&dl=0", "", "Skincarver", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/7l9skaj79oekbcfwxrff1/Meet-By-The-River.mp3?rlkey=oc5bi8mdpc2rzbjk25kj9w1id&st=y3c2mph2&dl=0", "", "Meet Me By The River", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/hrwzlo7bw1rymanonv9uv/Truey-Jeans.mp3?rlkey=1yjxo7fc5pym59itr23td4ifb&st=itkl4q8s&dl=0", "", "Truey Jeans", "Sematary"],
        ["https://dl.dropbox.com/scl/fi/zxdo15ri1gh2354p26s16/Crucifixion.mp3?rlkey=1iwkn6lis41cn2tt7pr7kw6sg&st=p78uhasa&dl=0", "", "Crucifixion", "Sematary"],
        
    ],
    [
        ["Still Da Same", "Sematary, xaviersobased", "2025", "Single", "./Images/Albums/Still Da Same.png", "rgb(80, 59, 163)"],
        ["https://dl.dropbox.com/scl/fi/xxjslxawyklhmromv1re4/Still-Da-Same.mp3?rlkey=12ueinicuxw798l2epho4airm&st=4jghs0q5&dl=0", "", "Still Da Same", "Sematary, xaviersobased"],
    ],
    [
        ["Working On Dying", "Bladee", "2017", "Album", "./Images/Albums/Working On Dying.png", "rgb(105, 31, 18)"],
        ["https://dl.dropbox.com/scl/fi/f0fhant40rk955y8zo02c/Redlight-Moments.mp3?rlkey=rnm9tf0gpdleqxdu247qftrpp&st=plbndcm5&dl=0", "", "Redlight Moments", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/civc57qwttr5g8hrtqjh3/Lordship.mp3?rlkey=guapyq6lfniwfxnsfx087tm4d&st=cxbc0ktp&dl=0", "", "Lordship", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/7hqy7kgg2v6lq4cknlev9/Knightsbridge.mp3?rlkey=a7uiffpzky5gdsyew94u59bzr&st=chto2cmj&dl=0", "", "Knightsbridge", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/xk293ud6cmn395qnwzs8l/Backstr-t-Boys.mp3?rlkey=qltr6d07m2gor4sjma85rzimb&st=yb079iur&dl=0", "", "Backstr€€t Boys", "Bladee, Black Kray"],
        ["https://dl.dropbox.com/scl/fi/wvskmlgz1bthqm3i1kory/Under-Your-Spell.mp3?rlkey=wtekjjqvou55cg0a343pjmjup&st=abgowcgt&dl=0", "", "Under Your Spell", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/8qaoegrjsoj3k9vth7b1b/D-925.mp3?rlkey=r5149e2fjaof1sxtpzxbesias&st=gn8db5si&dl=0", "", "D-925", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/3grxwq33vn9glx4jschmc/Gatekeeper.mp3?rlkey=u5lm1jzwnvdwls1v28z28h8st&st=79l5jmg1&dl=0", "", "Gatekeeper", "Bladee"],
        ["https://dl.dropbox.com/scl/fi/qq7kfw74f0ular34x72xf/Cherry-Bracelets.mp3?rlkey=3rybbi50r359ozkx0aybljihq&st=t4limh7t&dl=0", "", "Cherry Bracelets", "Bladee, Yung Lean, Ecco2k"],
        ["https://dl.dropbox.com/scl/fi/hz62uwzy2nf7oa9gdgwu6/Best-Buy.mp3?rlkey=0fb9molbzin8hhkyb4ipx1wj4&st=hfvfgqv8&dl=0", "", "Best Buy", "Bladee"],
    ],
    [
        ["EVOL", "Future", "2016", "Album", "./Images/Albums/Evol.png", "rgb(49, 55, 66)"],
        ["https://dl.dropbox.com/scl/fi/3v9aojse12a23i7e4s9v9/Ain-t-No-Time.mp3?rlkey=n4lnqdlg0xex1itj8whwvvl9u&st=iw1bfkcm&dl=0", "", "Ain't No Time", "Future"],
        ["https://dl.dropbox.com/scl/fi/ekv4hgjqtdf0d0ez6sluw/In-Her-Mouth.mp3?rlkey=c9mo5no8x67ve4bkfn59vsj0l&st=agp4ohki&dl=0", "", "In Her Mouth", "Future"],
        ["https://dl.dropbox.com/scl/fi/ltt160vogwfyzad5cntf6/Maybach.mp3?rlkey=i0hcz9ut3uiwg4buwfp2kq10e&st=5pvglg8m&dl=0", "", "Maybach", "Future"],
        ["https://dl.dropbox.com/scl/fi/tyz25cqrp1y2rafqk6cna/Xanny-Family.mp3?rlkey=yhl2tco77af1ex9kjwv5wsuhb&st=uftery6t&dl=0", "", "Xanny Family", "Future"],
        ["https://dl.dropbox.com/scl/fi/h29rb1cvh35sfrx0tkegb/Lil-Haiti-Baby.mp3?rlkey=17ys4eette76xitv426wgev28&st=re8qqwye&dl=0", "", "Lil Haiti Baby", "Future"],
        ["https://dl.dropbox.com/scl/fi/rjdgu1o1mgbl4b03innf8/Photo-Copied.mp3?rlkey=ff74cefwhyng41uv1jeeg7ovr&st=0lqatiuz&dl=0", "", "Photo Copied", "Future"],
        ["https://dl.dropbox.com/scl/fi/qnjvg80ck4wthtm3qa1e4/Seven-Rings.mp3?rlkey=i23c9atixhxvvn0drludey4du&st=ok4j2sgk&dl=0", "", "Seven Rings", "Future"],
        ["https://dl.dropbox.com/scl/fi/2tx0yiejqbjbbz8tdbkar/Lie-To-Me.mp3?rlkey=a416i4uv5pzvatfux2714cgk1&st=ltf17k6q&dl=0", "", "Lie To Me", "Future"],
        ["https://dl.dropbox.com/scl/fi/iymi0dgdz6t6347mtu1te/Program.mp3?rlkey=c3tcci4df2dzuu8wman8vq0gk&st=os8pak2k&dl=0", "", "Program", "Future"],
        ["https://dl.dropbox.com/scl/fi/gr3cttp1n3djylbqrhacq/Low-Life.mp3?rlkey=72qqqp2jcdcd8bmkdxkvtbwl6&st=0fuljorw&dl=0", "", "Low Life", "Future, The Weeknd"],
        ["https://dl.dropbox.com/scl/fi/i03m2tv1bvvqa1tz71eg3/Fly-Shit-Only.mp3?rlkey=sc7e0l120vcoo19m63dzmr8u3&st=bi96mme5&dl=0", "", "Fly Shit Only", "Future"],
        ["https://dl.dropbox.com/scl/fi/k3bkx2kj1f567gwvmiwxk/Wicked.mp3?rlkey=s86u9rwqocpur12kpacthdnwq&st=jkbfp753&dl=0", "", "Wicked", "Future"],
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
    window.scrollTo(0, 0)
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

    title.style.background = `linear-gradient(to bottom, ${list[0][5]}, rgb(40, 40, 40))`

    for (let i = 1; i < list.length; i++){
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

        if (list == all[0]){
            const songAlbum = document.createElement("p")
            songAlbum.classList.add("song-album")

            const album = findAlbum(false, songName.innerHTML)
            songAlbum.innerHTML = album[0][0]
            songContainer.appendChild(songAlbum)

            songAlbum.addEventListener("click", function(event) {
                event.stopPropagation()

                findAlbum(true, songName.innerHTML)
            })
        }

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
                    const newAudio = new Audio(all[0][all[0].length - 1][0])
                    newAudio.load()
                    all[0][all[0].length - 1][1] = newAudio
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
            songNumber.style.color = "rgb(36, 156, 68)"
            songName.style.color = "rgb(36, 156, 68)"
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
        const songContainer = songs.querySelectorAll("li")[pos - 1]
        const songNumber = songContainer.querySelector(".song-num")
        const songName = songContainer.querySelector(".song-name")

        songNumber.style.color = "rgb(36, 156, 68)"
        songName.style.color = "rgb(36, 156, 68)"
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

        title.style.display = "flex"
        songs.style.display = "block"
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
        const songNumber = song.querySelector(".song-num")
        const songName = song.querySelector(".song-name")

        songNumber.style.color = "rgb(255, 255, 255)"
        songName.style.color = "rgb(255, 255, 255)"
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
            button.style.background = "rgb(50, 50, 50)"
        })
        button.addEventListener("mouseleave", function() {
            button.style.background = songs.style.background
        })
    })
}

function clearSearches(){
    searchBar.value = ""
    searching.style.display = "none"
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

            title.style.display = "none"
            songs.style.display = "none"

            const values = {
                "Artist": "artists",
                "Album": "albums",
                "Single": "singles",
                "EP": "eps",
                "Playlist": "playlists",
            }

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
                                if (section.childElementCount <= 10){
                                    section.appendChild(createdAlbum)
                                }
                            }
                        }
                    } else {
                        const sections = searching.querySelectorAll("div")
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

modifyLibrary()
updateCurrentSongs()
