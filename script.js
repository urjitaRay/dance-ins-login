const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

document.querySelector('.form-box.login form').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
});

