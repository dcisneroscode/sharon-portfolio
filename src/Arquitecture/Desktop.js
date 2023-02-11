class Desktop{
    constructor(){
        this.nav = document.querySelector('.nav');
        this.header = document.querySelector('.header');
        this.figure1 = document.querySelector('.figure-1');
        this.figure2 = document.querySelector('.figure-2');
        this.aboutMy = document.querySelector('.about-my');
        this.aboutMyText = document.querySelector('.about-my__text');
        this.portfolio = document.querySelector('.portfolio');
        this.portfolioJobs = document.querySelector('.portfolio__jobs');
        // this.carousel = document.querySelectorAll('.carousel');
    }

    DesktopAdd(){
        this.nav.classList.add('nav--desktop');
        this.header.classList.add('header--desktop');
        this.figure1.classList.add('figure--desktop-1');
        this.figure2.classList.add('figure--desktop-2');
        this.aboutMy.classList.add('about-my--desktop');
        this.aboutMyText.classList.add('about-my--desktop-text');
        this.portfolio.classList.add('portfolio--desktop');
        this.portfolioJobs.classList.add('portfolio__jobs--desktop');
      
       

    }

    DesktopRemove(){
        this.nav.classList.remove('nav--desktop');
        this.header.classList.remove('header--desktop');
        this.figure1.classList.remove('figure--desktop-1');
        this.figure1.classList.remove('figure--desktop-2');
        this.aboutMy.classList.remove('about-my--desktop');
        this.aboutMyText.classList.remove('about-my--desktop-text');
        this.portfolio.classList.remove('portfolio--desktop');
        this.portfolioJobs.classList.remove('portfolio__jobs--desktop');
        // this.carousel.classList.remove('carousel--desktop');

    }

    
}


export { Desktop };