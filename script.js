'use strict';

// consts

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Run function - replace innerHTML
const getData = function () {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/lego/4.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = ' Aug 07, 2023';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
};

setTimeout(getData, 2500);
