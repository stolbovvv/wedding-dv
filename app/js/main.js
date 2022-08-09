// enable - disable block on page
function disabledBlock(trigger, block) {
  const arr = document.getElementsByName(trigger);
  const target = document.getElementById(block);

  arr.forEach((element) => {
    element.addEventListener('click', () => {
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
}

// Collecting form data in the object
function сollectFormData(form) {
  const arrInput = form.querySelectorAll('input');
  const arrSelect = form.querySelectorAll('select');
  const data = {};

  if (arrInput.length > 0) {
    arrInput.forEach((element) => {
      if (element.type === 'radio') {
        if (element.checked === true) data[element.name] = element.value;
      } else {
        data[element.name] = element.value;
      }
    });
  }

  if (arrSelect.length > 0) {
    arrSelect.forEach((element) => {
      data[element.name] = element.value;
    });
  }

  return data;
}

// hide or show meader-menu
function showElementHeader() {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
  const header = document.querySelector('.header');
  const pageUp = document.querySelector('.page-up');

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

window.onscroll = showElementHeader;

// Show modal
const modalTanks = document.querySelector('.thanks');
const modalTanksClose = modalTanks.querySelector('.thanks__close');
const overlay = document.querySelector('.overlay');

modalTanksClose.addEventListener('click', () => {
  overlay.classList.add('_disabled');
  modalTanks.classList.add('_disabled');
});

function showWindowThank(name) {
  modalTanks.querySelector('.thanks__title').innerHTML = name;
  overlay.classList.remove('_disabled');
  modalTanks.classList.remove('_disabled');
}

// Working with the site menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_look');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});

// Smooth scrolling on page
const gotoLinks = document.querySelectorAll('._scroll-goto[data-goto]');

gotoLinks.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    if (element.dataset.goto && document.querySelector(element.dataset.goto)) {
      window.scrollTo({
        top: document.querySelector(element.dataset.goto).offsetTop,
        behavior: 'smooth',
      });
    }

    document.body.classList.remove('_look');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  });
});

// work with like photos gallery
const like = document.querySelectorAll('.gallery__like');

like.forEach((element) => {
  const likeIcon = element;
  const likeCounte = element.nextElementSibling;

  likeCounte.innerHTML = 1 + Math.floor(Math.random() * 11);

  likeIcon.addEventListener('click', (e) => {
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
});

//  Work with the form "Guest card"
const guestCard = document.getElementById('guestCard');
const maskPhone = IMask(document.getElementById('guestPhone'), {
  mask: '+7 (000) 000-00-00',
});
const maskNumOfChildren = IMask(document.getElementById('numOfChildren'), {
  mask: Number,
  min: 0,
});

function cleanForm(form) {
  const submitButton = form.querySelector('button[type="submit"]');

  form.reset();
  form.querySelector('#blockAlcoholType').classList.add('_disabled');
  form.querySelector('#blockNumOfChildren').classList.add('_disabled');

  submitButton.disabled = false;
}

guestCard.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentform = event.target;
  const data = сollectFormData(currentform);
  const guest = `${data.firstname} ${data.secondname}`;

  currentform.querySelector('button[type="submit"]').disabled = true;

  cleanForm(currentform);
  maskPhone.updateValue();
  maskNumOfChildren.updateValue();

  showWindowThank(guest);
});

disabledBlock('children', 'blockNumOfChildren');
disabledBlock('drink', 'blockAlcoholType');
