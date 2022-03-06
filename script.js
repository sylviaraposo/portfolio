const portfolioApp = {}

// a function to allow for smooth scrolling from links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


portfolioApp.animationToggle = function () {
    let animationSwitch = document.getElementById('animation-check');

    animationSwitch.onclick = function () {
        let heading = document.querySelector('h1');
        heading.style.border = 'none';
        
        if (animationSwitch.checked === true) {
            heading.style.removeProperty('border-right');
        } 
    };
}

// a function to check have animations triggered when user scrolls to divs with an animation 
portfolioApp.inViewAnimation = function () {
    let isInViewport = function (element) {
        let distance = element.getBoundingClientRect();
        return (
            distance.top >= 0 &&
            distance.left >= 0 &&
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            distance.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    let images = document.querySelectorAll('.img-container');
    let rightAnimate = document.querySelector('.animate-right');
    let leftAnimate = document.querySelector('.animate-left');
    let topAnimate = document.querySelector('.animate-down');

    window.addEventListener('scroll', function (event) {
        images.forEach(image => {
            image.style.opacity = '1';
            image.classList.add('animate__animated')
            image.classList.add('animate__slow')
            image.classList.add('animate__fadeIn')
            })

        if (isInViewport(rightAnimate)) {
            rightAnimate.classList.add('animate__slow')
            rightAnimate.classList.add('animate__animated')
            rightAnimate.classList.add('animate__bounceInRight')
            rightAnimate.style.opacity = '1';
        }

        if (isInViewport(leftAnimate)) {
            leftAnimate.style.opacity = '1';
            leftAnimate.classList.add('animate__slow')
            leftAnimate.classList.add('animate__animated')
            leftAnimate.classList.add('animate__bounceInLeft')
        }

        if (isInViewport(topAnimate)) {
            topAnimate.classList.add('animate__slow')
            topAnimate.classList.add('animate__animated')
            topAnimate.classList.add('animate__fadeIn')
        }
        
        
    }, false);
}

portfolioApp.projectView = function () {

    // a listener for the bounce animation
    let speechBubbles = document.querySelectorAll('.speech-bubble')
    
    speechBubbles.forEach(speechBubble => {
        speechBubble.addEventListener('mouseover', function () {
            speechBubble.classList.add('animate__animated')
            speechBubble.classList.add('animate__pulse')
        }) 
        speechBubble.addEventListener('mouseout', function () {
            speechBubble.classList.remove('animate__animated')
            speechBubble.classList.remove('animate__pulse')

        }) 

    });
    
    console.log(speechBubbles);

    let imageElement = document.querySelector('.selected-project-img');
    let selectedAnswer = document.querySelector('input[name="project-choices"]:checked');
    let projectList = document.querySelectorAll('input[name="project-choices"]')
    

    projectList.forEach(project => {
        project.addEventListener('change', function () {
            
            imageElement.src = `./assets/${project.value}.jpg`;
            imageElement.alt = `A screenshot from my ${project.value} web-development project.`;

        })
    });
    

}


portfolioApp.init = function () {

    portfolioApp.animationToggle();
    portfolioApp.inViewAnimation();
    portfolioApp.projectView();


}


portfolioApp.init(); 