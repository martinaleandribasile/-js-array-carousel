console.log("Js ok");
//prendo gli elementi necessari
const boxMainImg = document.getElementById("mainimgbox");
const sideImgBox = document.getElementById("sideimgbox");
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
let sideimgclass = "sideimg"

//creo il mio array 
const mainImages = ["01", "02", "03", "04", "05"];

//inizializzo un starternumber 0 per compararlo nel if
let starterimgNumber = 0;

// creo dei loop per creare i tag immagine sia nel main che nel said box
for (let i = 0; i < mainImages.length; i++) {
    const image = mainImages[i];
    //uso il mio startnuber 0 per condizionare le classi presenti nelle immagini nel mainbox
    const imageClass = i === starterimgNumber ? 'd-block mainimg' : 'd-none mainimg';
    boxMainImg.innerHTML += `<img src="img/${image}.jpg" class="${imageClass}">`
};
for (let i = 0; i < mainImages.length; i++) {
    const sideimage = mainImages[i];
    sideImgBox.innerHTML += `<img src="img/${sideimage}.jpg" class="${sideimgclass}">`
};

//prendo in un array tutte le immagini side create nel for precedente
const sideimgarray = document.querySelectorAll(".sideimg");
//all immagine a indice 0 do gia' la classe focus
sideimgarray[0].classList.add("sideonfocus");
console.log(sideimgarray);

//inizializzo un indice a 1 in quanto al primo loop voglio che passi direttamente all indice 1
let activeIndex = 0

function imgassignment() {

    for (let i = 0; i < mainImages.length; i++) {
        const image = mainImages[i];
        const imageClass = i === activeIndex ? 'd-block mainimg' : 'd-none mainimg'
        boxMainImg.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'
        if (i === activeIndex) {
            sideimgarray[i].classList.add("sideonfocus")
        } else {
            sideimgarray[i].classList.remove("sideonfocus")
        }
    }

}

// creo evento click sul nextbutton
nextButton.addEventListener('click', function () {
    if (activeIndex < mainImages.length - 1) {
        boxMainImg.innerHTML = '';
        activeIndex++
    }
    else if (activeIndex === mainImages.length - 1) {
        boxMainImg.innerHTML = '';
        activeIndex = 0;
    }
    imgassignment();
});

previousButton.addEventListener('click', function () {

    if (activeIndex > 0) {
        boxMainImg.innerHTML = '';
        activeIndex--
    } else if (activeIndex === 0) {
        boxMainImg.innerHTML = '';
        activeIndex = mainImages.length - 1;
    }
    imgassignment();
});


