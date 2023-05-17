document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.switch-btn');
    const rus = document.querySelector('.rus');
    const eng = document.querySelector('.eng');

   
    btn.addEventListener('click', () => {
        btn.classList.toggle('switch-on');
        rus.classList.toggle('hidden');
        eng.classList.toggle('hidden');
});

 
  });