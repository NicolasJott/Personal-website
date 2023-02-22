const linksList = document.getElementById('links');
const resumeButton = document.querySelector('.resume');
const logo = document.querySelector('.logo');
const landingContent = document.getElementById('landing')
const aboutContent = document.getElementById('about')
const experienceContent = document.getElementById('experience')
const workContent = document.getElementById('work')
const contactContent = document.getElementById('contact')
const content = document.querySelector('.pages')

//hide header on scroll down
const header = document.querySelector('header')

const footerDate = document.getElementById('year').innerHTML = new Date().getFullYear();
//track scroll event
const options = {
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeup-enter-active');
      entry.target.classList.remove('fadeup-enter');
      observer.unobserve(entry.target);
    }
  });
}, options);

const aboutItems = aboutContent.children;
const experienceItems = experienceContent.children;
const workItems = workContent.children;
const contactItems = contactContent.children;

for (let i = 0; i < aboutItems.length; i++) {
  const aboutItem = aboutItems[i];
  aboutItem.classList.add('fadeup-enter');
  observer.observe(aboutItem);
}

for (let i = 0; i < experienceItems.length; i++) {
  const experienceItem = experienceItems[i];
  experienceItem.classList.add('fadeup-enter');
  observer.observe(experienceItem);
}

for (let i = 0; i < workItems.length; i++) {
  const workItem = workItems[i];
  workItem.classList.add('fadeup-enter');
  observer.observe(workItem);
}

for (let i = 0; i < contactItems.length; i++) {
  const contactItem = contactItems[i];
  contactItem.classList.add('fadeup-enter');
  observer.observe(contactItem);
}

function scrollToAnchor(anchorId) {
  const target = document.querySelector(anchorId);
  target.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener to each anchor
const anchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchors.length; i++) {
  const anchor = anchors[i];
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = anchor.getAttribute('href');
    scrollToAnchor(targetId);
  });
}

let lastScrollPos = 0;
let scrollDirection;


window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  
  if (currentScrollPos > lastScrollPos) {
    scrollDirection = 'down';
    header.classList.add('fadedown-enter');
    header.classList.add('header-shadow')
  } else {
    scrollDirection = 'up';
    header.classList.remove('fadedown-enter');
  }

  if (currentScrollPos <= 100) {
    header.classList.remove('header-shadow')
  }
  
  lastScrollPos = currentScrollPos;
});
// Logo transition
setTimeout(() => {
    logo.classList.add('fade-enter-active')
    logo.classList.remove('fade-enter')
})
const listItems = linksList.children;
for (let i = 0; i < listItems.length; i++) {
  const listItem = listItems[i];
  listItem.style.transitionDelay = `${i * 100}ms`;

  // Add the 'fadedown-enter-active' class after a short delay
  setTimeout(() => {
    listItem.classList.add("fadedown-enter-active");
    listItem.classList.remove("fadedown-enter");
  }, 50 + (i * 100));
}

// Add the 'fadedown-enter' and 'fadedown-enter-active' classes to the resume button
resumeButton.style.transitionDelay = "400ms";
setTimeout(() => {
  resumeButton.classList.add("fadedown-enter-active");
  resumeButton.classList.remove("fadedown-enter");
}, 450);

// landing transition
const landingItems = landingContent.children;
for (let i = 0; i < landingItems.length; i++) {
    const landingItem = landingItems[i];
    landingItem.style.transitionDelay = `${i * 100}ms`;

    setTimeout(() => {
        landingItem.classList.add('fadeup-enter-active');
        landingItem.classList.remove('fadeup-enter')
    })
}


// nav sidebar
const navBtn = document.querySelector('.nav-button')
const sidebar = document.querySelector('.sidebar')


navBtn.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar')
  content.classList.toggle('blur')
})

// sidebar links
const aboutBtn = document.getElementById('abtBtn')
aboutBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
  content.classList.remove('blur')
})

const experienceBtn = document.getElementById('expBtn')
experienceBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
  content.classList.remove('blur')
})

const workBtn = document.getElementById('workBtn')
workBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
  content.classList.remove('blur')
})

const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar')
  content.classList.remove('blur')
})