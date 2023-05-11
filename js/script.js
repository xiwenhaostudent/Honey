const header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.navlist li a')
const scrollTopBtn = document.querySelector('.scroll')

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

window.onscroll = () => {
  if (window.scrollY > 80) {
    scrollTopBtn.style.display = 'block'
  } else {
    scrollTopBtn.style.display = 'none'
  }
  header.classList.toggle('sticky', window.scrollY > 80)
  menu.classList.remove('bx-x')
  navlist.classList.remove('open')
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        // document.querySelector('.navlist li a[href*=' + id + ']').classList.add('active')
        document.querySelector(`.navlist li a[href*="${id}"]`).classList.add('active')
      })
    }
  })
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  // reset: true
})

sr.reveal('.home-text', { delay: 300 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.container', { delay: 400 })

sr.reveal('.about-img', {})
sr.reveal('.about-text', { delay: 300 })

sr.reveal('.middle-text', {})
sr.reveal('.row-btn,.shop-content', { delay: 300 })

sr.reveal('.review-content,.contact', { delay: 300 })

const popup = document.getElementById('working-hours-popup')
const link = document.getElementById('working-hours-link')
const popupTitle = document.getElementById('popup-title')
const popupContent = document.getElementById('popup-content')
const popupCloseBtn = document.getElementById('popup-close-btn')

link.addEventListener('click', function (event) {
  event.preventDefault() // prevent link default behavior
  popupTitle.textContent = 'Working Hours'

  const date = new Date()
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  popupContent.textContent = `Today is ${dayOfWeek}, ${month} ${day}, ${year}. We are open from 11:00 am to 8:00 pm.`

  popup.style.display = 'block'
})

popupCloseBtn.addEventListener('click', function () {
  popup.style.display = 'none'
})

function openMenu () {
  document.getElementById("menu-popup").classList.add("active")
}

function openOrder () {
  document.getElementById("order-popup").classList.add("active")
}

function closePopup () {
  document.querySelectorAll(".homepopup").forEach(popup => {
    popup.classList.remove("active")
  })
}

const aboutpopup = document.getElementById('explore-story-popup')
const aboutlink = document.getElementById('explore-story-link')
const aboutpopupTitle = document.getElementById('aboutpopup-title')
const aboutpopupContentText = document.getElementById('aboutpopup-content-text')
const aboutpopupCloseBtn = document.getElementById('aboutpopup-close-btn')

aboutlink.addEventListener('click', function (event) {
  event.preventDefault() // prevent link default behavior
  aboutpopupTitle.textContent = 'Explore Story'
  aboutpopupContentText.textContent = 'Honey is one of the oldest known sweeteners. It has been used for centuries as a natural remedy for a variety of ailments. Today, honey is still a popular food and is used in a variety of ways in cooking and baking.'
  aboutpopup.style.display = 'block'
})

aboutpopupCloseBtn.addEventListener('click', function () {
  aboutpopup.style.display = 'none'
})


const heartIcons = document.querySelectorAll('#heart-icon')
heartIcons.forEach(function (heartIcon) {
  heartIcon.addEventListener('click', function (event) {
    event.preventDefault()
    // event.target.classList.toggle('bxs-heart')
    heartIcon.classList.toggle('bxs-heart')
  })
})
