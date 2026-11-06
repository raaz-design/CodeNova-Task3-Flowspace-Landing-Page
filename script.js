"use strict";
const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation menu');navLinks.classList.remove('is-open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation menu':'Close navigation menu');navLinks.classList.toggle('is-open',!open);});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.nav')&&menuButton.getAttribute('aria-expanded')==='true')closeMenu();});
const billingToggle=document.querySelector('#billing-toggle');
const monthlyLabel=document.querySelector('#monthly-label');
const yearlyLabel=document.querySelector('#yearly-label');
billingToggle.addEventListener('click',()=>{const yearly=billingToggle.getAttribute('aria-checked')!=='true';billingToggle.setAttribute('aria-checked',String(yearly));billingToggle.setAttribute('aria-label',yearly?'Yearly billing selected':'Monthly billing selected');monthlyLabel.classList.toggle('active-label',!yearly);yearlyLabel.classList.toggle('active-label',yearly);document.querySelectorAll('[data-monthly][data-yearly]').forEach(price=>{price.textContent=yearly?price.dataset.yearly:price.dataset.monthly;});});
const faqButtons=[...document.querySelectorAll('.faq-question')];
faqButtons.forEach(button=>button.addEventListener('click',()=>{const wasOpen=button.getAttribute('aria-expanded')==='true';faqButtons.forEach(other=>{other.setAttribute('aria-expanded','false');document.getElementById(other.getAttribute('aria-controls')).hidden=true;});if(!wasOpen){button.setAttribute('aria-expanded','true');document.getElementById(button.getAttribute('aria-controls')).hidden=false;}}));
