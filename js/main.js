"use strict";

// enable - disable block on page
function disabledBlock(trigger, block) {
  var arr = document.getElementsByName(trigger);
  var target = document.getElementById(block);
  arr.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element.value === 'true') {
        target.classList.remove('_disabled');
        target.lastElementChild.disabled = false;
      } else {
        target.classList.add('_disabled');
        target.lastElementChild.value = '';
        target.lastElementChild.disabled = true;
      }
    });
  });
} // Collecting form data in the object


function сollectFormData(form) {
  var arrInput = form.querySelectorAll('input');
  var arrSelect = form.querySelectorAll('select');
  var data = {};

  if (arrInput.length > 0) {
    arrInput.forEach(function (element) {
      if (element.type === 'radio') {
        if (element.checked === true) data[element.name] = element.value;
      } else {
        data[element.name] = element.value;
      }
    });
  }

  if (arrSelect.length > 0) {
    arrSelect.forEach(function (element) {
      data[element.name] = element.value;
    });
  }

  return data;
} // hide or show meader-menu


function showElementHeader() {
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  var header = document.querySelector('.header');
  var pageUp = document.querySelector('.page-up');

  if (scroll > header.clientHeight * 2) {
    header.classList.add('_transform');
  } else {
    header.classList.remove('_transform');
  }

  if (scroll > window.innerHeight - header.clientHeight) {
    header.classList.add('_visible');
  } else {
    header.classList.remove('_visible');
  }

  if (scroll > window.innerHeight * 1.5) {
    pageUp.classList.remove('_disabled');
  } else {
    pageUp.classList.add('_disabled');
  }
}

window.onscroll = showElementHeader; // Show modal

var modalTanks = document.querySelector('.thanks');
var modalTanksClose = modalTanks.querySelector('.thanks__close');
var overlay = document.querySelector('.overlay');
modalTanksClose.addEventListener('click', function () {
  overlay.classList.add('_disabled');
  modalTanks.classList.add('_disabled');
});

function showWindowThank(name) {
  modalTanks.querySelector('.thanks__title').innerHTML = name;
  overlay.classList.remove('_disabled');
  modalTanks.classList.remove('_disabled');
} // Working with the site menu


var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener('click', function () {
  document.body.classList.toggle('_look');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
}); // Smooth scrolling on page

var gotoLinks = document.querySelectorAll('._scroll-goto[data-goto]');
gotoLinks.forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();

    if (element.dataset.goto && document.querySelector(element.dataset.goto)) {
      window.scrollTo({
        top: document.querySelector(element.dataset.goto).offsetTop,
        behavior: 'smooth'
      });
    }

    document.body.classList.remove('_look');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });
}); // work with like photos gallery

var like = document.querySelectorAll('.gallery__like');
like.forEach(function (element) {
  var likeIcon = element;
  var likeCounte = element.nextElementSibling;
  likeCounte.innerHTML = 1 + Math.floor(Math.random() * 11);
  likeIcon.addEventListener('click', function (e) {
    e.preventDefault();

    if (likeIcon.classList.contains('icon-heart-transparent')) {
      likeIcon.classList.remove('icon-heart-transparent');
      likeIcon.classList.add('icon-heart-solid');
      likeCounte.innerHTML = +likeCounte.textContent + 1;
    } else {
      likeIcon.classList.remove('icon-heart-solid');
      likeIcon.classList.add('icon-heart-transparent');
      likeCounte.innerHTML = +likeCounte.textContent - 1;
    }
  });
}); //  Work with the form "Guest card"

var guestCard = document.getElementById('guestCard');
var maskPhone = IMask(document.getElementById('guestPhone'), {
  mask: '+7 (000) 000-00-00'
});
var maskNumOfChildren = IMask(document.getElementById('numOfChildren'), {
  mask: Number,
  min: 0
});

function cleanForm(form) {
  var submitButton = form.querySelector('button[type="submit"]');
  form.reset();
  form.querySelector('#blockAlcoholType').classList.add('_disabled');
  form.querySelector('#blockNumOfChildren').classList.add('_disabled');
  submitButton.disabled = false;
}

guestCard.addEventListener('submit', function (event) {
  event.preventDefault();
  var currentform = event.target;
  var data = сollectFormData(currentform);
  var guest = "".concat(data.firstname, " ").concat(data.secondname);
  currentform.querySelector('button[type="submit"]').disabled = true;
  cleanForm(currentform);
  maskPhone.updateValue();
  maskNumOfChildren.updateValue();
  showWindowThank(guest);
});
disabledBlock('children', 'blockNumOfChildren');
disabledBlock('drink', 'blockAlcoholType');