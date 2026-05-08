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
"You are simply the best."
];

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

let music = document.getElementById("music");

if(musicStarted == false)
{
    music.src = songs[currentSong];
    music.play();
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

    console.log("Now playing:", songs[currentSong]);

    music.src = songs[currentSong];
    music.play();
});

