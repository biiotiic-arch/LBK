document.addEventListener('DOMContentLoaded', () => {
  const skipBtn = document.querySelector('.skip');
  const preloader = document.getElementById('preloader');
  skipBtn.addEventListener('click', () => preloader.style.display = 'none');
});