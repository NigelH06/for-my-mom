let images =
[
    "Images/extra1.jpg",
    "Images/extra2.jpg",
    "Images/IMG_0128.jpg",
    "Images/IMG_0152.jpg",
    "Images/IMG_0163.jpg",
    "Images/IMG_0196.jpg",
    "Images/IMG_0355.jpg",
    "Images/IMG_0418.JPG",
    "Images/IMG_0421.JPG",
    "Images/IMG_0427.jpg",
    "Images/IMG_0611.jpg",
    "Images/IMG_0612.jpg",
    "Images/IMG_2615.jpg",
    "Images/IMG_2616.jpg",
    "Images/IMG_2617.jpg",
    "Images/IMG_4597.jpg",
    "Images/IMG_7125.jpg",
    "Images/IMG_8935.JPG",
    "Images/IMG_8942.JPG",
    "Images/IMG_3518.JPG",
    "Images/IMG_4703.JPG",
    "Images/IMG_5171.JPG",
    "Images/IMG_4909.jpg"
];
let messages =
[
    "I love you mom, even in the times when it seems like I am distant.",
    "You have always had my back, and I know you always will have my back.",
    "I hope you know how much I appreciate you, truly, I am not the best at expressing it and I apologize for it.",
    "I would not be able to live life without you.",
    "You are the strongest, most beautiful woman I have ever had in my life, and that will never change.",
"You carry so much on your shoulders that I oftentimes wish I could help carry that burden with you.",
"You deserve happiness in your life.",
"Do you like the song selections?",
"This website is custom made for you, I can keep adding pictures, songs, whatever you want to it.",
"If you have ever wondered if you are doing enough for me and Kaleb, stop wondering, you have.",
"You have always been more than enough for Kaleb and I.",
"One day I hope I can give back even a fraction of everything you’ve given me.",
"Do you like the pictures?",
"I will admit, while doing this, I have come to realize why you love taking pictures so much.",
"I hope these memories bring you nothing but happiness today.",
"I wish I could do more for you.",
"I hope you don't feel lonely today, even if Kaleb and I aren't there.",
"Do you remember when you used to call Kaleb and I each other's names?",
"I appreciate you so much.",
"I truly hope this makes you happy.",
"I remember your goals of wanting to establish a company, and as I get better at engineering, so will my support towards your goals.",
"One day I want to design a software application for you, to help you towards your goals.",
"You are simply the best.",
"I know there were times you carried more than anyone realized.",
"You have always made home feel warm and safe.",
"I appreciate all the sacrifices you made for Kaleb and I that went unnoticed.",
"I admire and appreciate how resilient you are.",
"I know I do not always say thank you enough, but I am always grateful for what you do for me.",
"I hope you revisit this, and I hope it makes you smile every time you see this.",
"I never want you to feel unappreciated.",
"I appreciate how much love you give to Kaleb and I.",
"I appreciate all the times you encouraged me when I doubted myself.",
"I am grateful that you are in my life.",
"I appreciate every moment you spent making sure I was/am okay.",
"You shaped a big part of who I am today.",
"I am grateful for the stability you gave in the hardest moments of my life.",
"I appreciate how hard you worked for Kaleb and I.",
"The older I get, the more I realize how much love was hidden inside the little things you did for us every day.",
"I know there were times you were exhausted, stressed, or hurting, and you still found a way to be strong and present for us.",
"The greatest blessing in my life is that I was raised by someone who loves as deep as you do.",
"Life has not always been fair to you, which is why I truly hope you know how deeply appreciated you are.",
"I appreciate you not just for what you did for us, but for the kind of person you have always tried to be.",
"I know there were sacrifices you made that Kaleb and I probably never even noticed growing up.",
"I hope one day I can give you the same sense of comfort and support that you have always given me.",
"I think a lot of the strength I have today exists because of the way you raised me.",
"I know I do not always express emotions well, but I hope this helps show even a small part of how much you mean to me.",
"You spent so much of your life making sure Kaleb and I felt loved, and I hope today you feel that same love returned to you.",
"I think one of the hardest things about growing up is realizing just how much your mom protected you from without ever saying it.",
"I know there were/are times I made things harder for you, and I appreciate that your love for me never changed.",
"I know there were times you felt alone while still trying to make sure nobody else did.",
"I know this website cannot fully express everything I feel, but I needed you to know how grateful I truly am.",
"I truly believe a lot of people spend their whole lives wishing they had the kind of love you gave me.",
"Some of the safest moments in my life came from simply knowing you were there.",
"I know becoming the person I want to be would not even be possible without everything you poured into me.",
"I hope you know that the love you gave us continues to live on inside the people we are becoming.",
"I think one of the most comforting things in my life has always been knowing I could come to you.",
"I know I have not always been the best at showing it, but your love means more to me than I can explain.",
"I appreciate how much emotional weight you carried while still trying to make life feel normal for us.",
"I think one of the reasons I value love so deeply is because of the way you loved us growing up."
];

let clickCount = 0;

shuffleArray(images);

shuffleArray(messages);

let currentMessage = 0;

let musicStarted = false;

let songs =
[
    "Audio/song1.m4a",
    "Audio/song2.m4a",
    "Audio/song3.m4a",
    "Audio/song4.m4a",
    "Audio/song5.m4a"
];
shuffleArray(songs);
let currentSong = 0;

let currentImage = 0;

function shuffleArray(array)
{
    for(let i = array.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = array[i];

        array[i] = array[j];

        array[j] = temp;
    }
}


function showMessage()
{
   document.getElementById("message").innerHTML =
   messages[currentMessage];

   currentMessage++;

if(currentMessage >= messages.length)
{
    currentMessage = 0;
}

    let image = document.getElementById("slideshow-image");

    image.style.display = "block";

clickCount++;

let button = document.getElementById("next-button");
let collage = document.querySelector(".photo-collage");

if(clickCount == 1)
{
    collage.appendChild(button);
    button.innerHTML = "Next";
}

if(clickCount % 3 == 1)
{
    image.style.opacity = 0;

    setTimeout(function()
    {
        image.onload = function()
        {
            image.style.opacity = 1;
        };

        image.src = images[currentImage];
    }, 500);

    currentImage++;

    if(currentImage >= images.length)
    {
        currentImage = 0;
    }
}

let music = document.getElementById("music");

if(musicStarted == false)
{
    music.src = songs[currentSong];
    music.load();

    music.play().catch(function(error)
    {
        console.log("Playback failed:", error);
    });

    musicStarted = true;
}
}

let music = document.getElementById("music");

music.addEventListener("ended", function()
{
    console.log("Song ended");

    currentSong++;

    if(currentSong >= songs.length)
    {
        currentSong = 0;
    }

    music.src = songs[currentSong];

    music.load();

    music.play().catch(function(error)
    {
        console.log("Playback failed:", error);
    });
});