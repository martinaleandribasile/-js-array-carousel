console.log("Js ok");

const boxMainImg = document.getElementById("mainimgbox");
const sideImgBox = document.getElementById("sideimgbox");
const mainImages = ["01", "02", "03", "04", "05"];
let starterimgNumber = 0;
let sideimgclass = "sideimg"
for (let i = 0; i < mainImages.length; i++) {
    const image = mainImages[i];
    const imageClass = i === starterimgNumber ? 'd-block mainimg' : 'd-none mainimg';
    boxMainImg.innerHTML += `<img src="img/${image}.jpg" class="${imageClass}">`
};
for (let i = 0; i < mainImages.length; i++) {
    const sideimage = mainImages[i];
    sideImgBox.innerHTML += `<img src="img/${sideimage}.jpg" class="${sideimgclass}">`
};


const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
let activeIndex = 1
const sideimgarray = document.querySelectorAll(".sideimg");
sideimgarray[0].classList.add("sideonfocus");
console.log(sideimgarray);

nextButton.addEventListener('click', function () {
    if (activeIndex < mainImages.length - 1) {
        boxMainImg.innerHTML = '';
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
        activeIndex++
    }
    else if (activeIndex === (mainImages.length - 1)) {
        boxMainImg.innerHTML = '';
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
        activeIndex = 0;
    }
});

previousButton.addEventListener('click', function () {
    if (activeIndex > 0) {
        boxMainImg.innerHTML = '';
        console.log(activeIndex)
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
        activeIndex--;
    } else if (activeIndex === 0) {
        boxMainImg.innerHTML = '';
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
        activeIndex = 4;
    }
});


