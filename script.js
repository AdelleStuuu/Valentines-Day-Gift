let currentIndex = 0 ;
const images = ["Images/Adelle Sprites/1.png", "Images/Adelle Sprites/2.png", "Images/Adelle Sprites/3.png","Images/Adelle Sprites/4.png"];
const text = ["test","We haven't done a lot these past days... But just so you know, I still love you from the bottom of my heart","Im looking forward to our movie date, but I hope you're looking forward to what I have in store on our anniversary!","Soo, Would like to be my Valentine?"]
function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1); // Move to the next image
    }
    document.getElementById('AdelleImage').src = images[currentIndex];
    document.getElementById('speechBubble').innerHTML = text[currentIndex];

    if (currentIndex === 3) {
        document.getElementById('nextButton').style.visibility = 'hidden';
        document.getElementById('yesButton').style.visibility = 'visible';
        document.getElementById('noButton').style.visibility = 'visible';
    }
}

function sheChoseYes() {
    document.getElementById('AdelleImage').src = "Images/Adelle Sprites/yes.png"
    document.getElementById('speechBubble').innerHTML = "YIPPEEE !!! See you on friday night!!!";
    document.getElementById('yesButton').style.visibility = 'hidden';
    document.getElementById('noButton').style.visibility = 'hidden';
    var audio = document.getElementById("audio");
      audio.play(); 
}

function sheChoseNo() {
    document.getElementById('AdelleImage').src = "Images/Adelle Sprites/no.png"
    document.getElementById('speechBubble').innerHTML = "ow, okay- Theres always next time";
    document.getElementById('yesButton').style.visibility = 'hidden';
    document.getElementById('noButton').style.visibility = 'hidden';
}