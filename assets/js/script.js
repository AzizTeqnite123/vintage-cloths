// SCRIPT FOR ACCORDIANS FAQS

document.addEventListener('DOMContentLoaded', function () {
    function faqsAccordion() {
        var accordionSections = document.querySelectorAll(".accordion-item");

        if (accordionSections.length > 0) {
            var firstAccordionItemHeader = accordionSections[0].querySelector(".accordion-item-header");
            var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

            if (firstAccordionItemBody) {
                firstAccordionItemHeader.classList.add("active");
                firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
            }
        }

        accordionSections.forEach(section => {
            var accordionItemHeaders = section.querySelector(".accordion-item-header");
            var accordionItemBody = section.querySelector(".accordion-item-body");

            accordionItemHeaders.addEventListener("click", function () {
                var currentlyActiveHeader = document.querySelector(".accordion-item-header.active");
                var currentlyActiveBody = currentlyActiveHeader ? currentlyActiveHeader.nextElementSibling : null;

                if (currentlyActiveHeader && currentlyActiveBody) {
                    currentlyActiveHeader.classList.remove("active");
                    currentlyActiveBody.style.maxHeight = 0;
                }

                if (accordionItemHeaders !== currentlyActiveHeader) {
                    accordionItemHeaders.classList.add("active");
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemHeaders.classList.remove("active");
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    }

    faqsAccordion();
});

// SCRIPT FOR ACCORDIANS FAQS