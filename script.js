console.log("Js ok");

const boxMainImg = document.getElementById("mainimgbox");
const sideImgBox = document.getElementById("sideimgbox");
const mainImages = ["01", "02", "03", "04", "05"];
let starterimgNumber = 0;
let sideimgclass = "sideimg"
/*for (let i = 0; i < mainImages.length; i++) {
    const sideimg = mainImages[i];
    let sideimgcreate = document.createElement(`<img src="img/${sideimg}.jpg">`);
    sideimg.classList.add("sideimg")
    sideImgBox.innerHTML += sideimgcreate
};*/


for (let i = 0; i < mainImages.length; i++) {
    const image = mainImages[i];
    const imageClass = i === starterimgNumber ? 'd-block mainimg' : 'd-none mainimg';
    boxMainImg.innerHTML += `<img src="img/${image}.jpg" class="${imageClass}">`
};
for (let i = 0; i < mainImages.length; i++) {
    const sideimage = mainImages[i];
    sideImgBox.innerHTML += `<img src="img/${sideimage}.jpg" class="sideimg">`
};
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
let activeIndex = 0

nextButton.addEventListener('click', function () {
    if (activeIndex < mainImages.length - 1) {
        boxMainImg.innerHTML = '';
        activeIndex++;
        /*for (let i = 0; i < mainImages.length; i++) {
            if (i === activeIndex) {
                sideimgclass.classList.add("sideonfocus");
            } else {
                sideimgclass.classList.remove("sideonfocus");
            }
        }*/
        for (let i = 0; i < mainImages.length; i++) {
            const image = mainImages[i];
            const imageClass = i === activeIndex ? 'd-block mainimg' : 'd-none mainimg'
            boxMainImg.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'
        }
    }
});
previousButton.addEventListener('click', function () {
    if (activeIndex > 0) {
        boxMainImg.innerHTML = '';
        activeIndex--;

        for (let i = 0; i < mainImages.length; i++) {
            const image = mainImages[i];
            const imageClass = i === activeIndex ? 'd-block mainimg' : 'd-none mainimg'
            boxMainImg.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'
        }
    }
});

