document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".prodCardSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
         navigation: {
            nextEl: ".prodCardSlider .swiper-button-next",
            prevEl: ".prodCardSlider .swiper-button-prev",
        },
        breakpoints: {
            280: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
             576: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".testimonialSlider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".testimonialSlider .swiper-button-next",
            prevEl: ".testimonialSlider .swiper-button-prev",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressContainer = document.querySelector(".autoplayProgrshldr");
    const totalSlides = document.querySelectorAll(".newArrivalSlider .swiper-slide").length;
    const progressCount = Math.min(totalSlides, 3);

    // Create the progress bars dynamically
    for (let i = 0; i < progressCount; i++) {
        const bar = document.createElement("div");
        bar.className = "autoplay-progress-bar";
        bar.setAttribute("data-slide", i);

        const fill = document.createElement("div");
        fill.className = "progress-fill";
        bar.appendChild(fill);

        // 🔥 Add click event
        bar.addEventListener("click", () => {
            swiper.slideToLoop(i);
            // Slide to correct index (loop-safe)
        });

        progressContainer.appendChild(bar);
    }


    // Get progress fills again after creation
    const progressBars = document.querySelectorAll(".autoplay-progress-bar");

    const swiper = new Swiper(".newArrivalSlider", {
        spaceBetween: 30,
        centeredSlides: true,
        allowTouchMove: false,
        loop: totalSlides > 1,
        // Enable looping only if more than 1 slide
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            // Start animation on first slide when Swiper is initialized
            init(swiper) {
                animateProgress(swiper.realIndex % progressCount, swiper.params.autoplay.delay);
            },

            slideChangeTransitionStart(swiper) {
                resetAllProgress();
            },

            slideChangeTransitionEnd(swiper) {
                animateProgress(swiper.realIndex % progressCount, swiper.params.autoplay.delay);
            },
        },
    });

    function resetAllProgress() {
        progressBars.forEach(bar => {
            const fill = bar.querySelector(".progress-fill");
            fill.style.transition = "none";
            fill.style.width = "0%";
            // Force reflow to reset transition cleanly
            void fill.offsetWidth;
        });
    }

    function animateProgress(index, delay) {
        const activeFill = document.querySelector(`.autoplay-progress-bar[data-slide="${index}"] .progress-fill`);
        if (activeFill) {
            activeFill.style.transition = `width ${delay}ms linear`;
            activeFill.style.width = "100%";
        }
    }
})



