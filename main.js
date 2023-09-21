const mainContainer = document.querySelector(".main-container"),
    imagePreview = mainContainer.querySelectorAll(".image-preview"),
    image = mainContainer.querySelectorAll(".image-preview img"),
    video = mainContainer.querySelectorAll("video");

window.onload = () => {
    mainContainer.onmouseenter = () => {
        image.forEach((image) => {
            image.style.opacity = 0.5;
        })
    }
    mainContainer.onmouseleave = () => {
        image.forEach((image) => {
            image.style.opacity = 1;
        })
    }

    let tl = gsap.timeline();

    tl.to(imagePreview, {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.1
    })

    imagePreview.forEach((image, index) => {
        image.onmouseenter = () => {
            video[index].play();
        }
        image.onmouseleave = () => {
            video[index].pause();
        }
    })

}