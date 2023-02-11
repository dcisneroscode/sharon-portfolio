class Mobile{
    constructor(){
        this.nav = document.querySelector('.nav');
        this.ul = document.querySelector('.nav__list');
        this.header = document.querySelector('.header');
        this.aboutMy = document.querySelector('.about-my');
        this.aboutMyText = document.querySelector('.about-my__text');
        this.portfolio = document.querySelector('.portfolio');
        this.portfolioJobs = document.querySelector('.portfolio__jobs');
        this.contact = document.querySelector('.contact');
        this.footer = document.querySelector('footer');
    }

    MobileAdd(){
        this.nav.classList.add('nav--mobile');
        this.ul.classList.add('nav__list--mobile-tablet');
        this.header.classList.add('header--mobile');   
        this.aboutMy.classList.add('about--mobile');
        this.aboutMyText.classList.add('about-my__text--mobile');
        this.portfolio.classList.add('portfolio--mobile');
        this.portfolioJobs.classList.add('portfolio__jobs--mobile');
        this.contact.classList.add('contact--mobile');
        this.footer.classList.add('footer--mobile');

    }

    MobileRemove(){
        this.nav.classList.remove('nav--mobile');
        this.ul.classList.remove('nav__list--mobile-tablet');
        this.header.classList.remove('header--mobile');
        this.aboutMy.classList.remove('about--mobile');
        this.aboutMyText.classList.remove('about-my__text--mobile');
        this.portfolio.classList.remove('portfolio--mobile');
        this.portfolioJobs.classList.remove('portfolio__jobs--mobile');
        this.contact.classList.remove('contact--mobile');
        this.footer.classList.remove('footer--mobile');
        

    }

    
}

export { Mobile }; 