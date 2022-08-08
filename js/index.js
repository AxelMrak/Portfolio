// Get elements by DOM
const buttons = document.querySelectorAll(`.btn-with-animation`);
const links = document.querySelectorAll(`.link-with-animation`);
const sections = document.querySelectorAll(`.section-to-appear`);

// Travel through each button
buttons.forEach(btn => {

    const linkWhite = event => { // Function present in event listener
        event.preventDefault();
        links.forEach(link => { //For each link, we go switch between mouseover event and mouseout event.
            switch (event.type) {
                case `mouseover`:
                    if (btn.contains(link) == true) { //This prevent the coloration of all links. Only the anchor IN THIS button in this moment.
                        link.style.color = `white`;
                        break;
                    }
                case `mouseout`:
                    link.style.color = `black`;
                    break;
            }
        });
    }

    // Event Listeners
    btn.addEventListener(`mouseover`, linkWhite)
    btn.addEventListener(`mouseout`, linkWhite)
});


// Function that does appear each section when the user do scroll
sections.forEach(section => {
    const appearSections = event => {
        let positionSection = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight / 3;
        if (positionSection < screenHeight) {
            section.style.transition = `all 0.5s`; //Set transition for smooth effect
            section.style.opacity = `1`; //Appear
        } else {
            section.style.transition = `all 1s`;
            section.style.opacity = `0`;
        }
    };
    window.addEventListener(`scroll`, appearSections);
});


