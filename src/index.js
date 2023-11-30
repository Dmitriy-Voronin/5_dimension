import './index.scss';
import heroAuthorImgSrc from './img/hero_img.png';
import logoSrc from './img/logo.svg';

const siteBg = document.querySelector('.site-bg');
const header = document.querySelector('.header');
const heroBg = document.querySelector('.hero__bg');
const logoWrap = document.querySelector('.header__logo');
const heroInfowrap = document.querySelector('.hero__info-wrap');
const heroAuthorImgWrap = document.querySelector('.hero__author-img-wrap');
const heroSignupBtn = document.querySelector('.signup__btn');
const heroSignupDate = document.querySelector('.signup__date');
const heroInfo = document.querySelector('.hero__author-info');
const heroInfoLink = document.querySelector('.hero__author-info-link-img');
const questions = document.querySelector('.questions');
const body = document.body;

const logo = new Image();
logo.src = logoSrc;
logoWrap.append(logo);

const heroAuthorImg = new Image();
heroAuthorImg.src = heroAuthorImgSrc;
heroAuthorImgWrap.append(heroAuthorImg);



setTimeout(() => {
  setTimeout(() => {
    siteBg.classList.add('visible');
  }, 100);
  setTimeout(() => {
    heroInfowrap.classList.add('hero__info-wrap--visible')
  }, 500);
  setTimeout(() => {
    header.classList.add('header--visible')
  }, 700);
}, 100);

setTimeout(() => {
  setTimeout(() => {
    heroBg.classList.add('hero__bg--visible')
  }, 500);
 
  heroAuthorImgWrap.classList.add('hero__author-img-wrap--visible');
  heroSignupBtn.classList.add('signup__btn--visible');
  heroSignupDate.classList.add('signup__date--visible');
  setTimeout(() => {
    heroInfo.classList.add('hero__author-info--visible');
  }, 700);
  setTimeout(() => {
    heroInfoLink.classList.add('hero__author-info-link-img--visible');
  }, 1000);
}, 1000);

heroInfoLink.addEventListener('animationend', () => {
  body.style.overflow = 'auto';
  questions.style.display = 'flex';
});

const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.1) {
      document.querySelectorAll('.animate').forEach((el) => {
        el.classList.add('scroll');
      })
    }
    if (entry.intersectionRatio >= 0.5) {
      document.querySelectorAll('.animate-element').forEach((el) => {
        el.classList.add('visible');
      })
      
    } else {
      document.querySelectorAll('.animate-element').forEach((el) => {
        el.classList.remove('visible');
      });
      document.querySelectorAll('.animate').forEach((el) => {
        el.classList.remove('scroll');
      })
    }
    if (entry.boundingClientRect.top >= 1155) {
      document.querySelectorAll('.animate').forEach((el) => {
        el.classList.remove('scroll');
      })
    } 
  })
}, {
  threshold: [0.1, 0.5, 1]
});

observer.observe(questions);

window.addEventListener('resize', () => {
  console.log(window.innerHeight);
  if (window.innerHeight > 1155) {
    document.querySelectorAll('.animate').forEach((el) => {
      el.classList.remove('scroll');
    })
  }
});

