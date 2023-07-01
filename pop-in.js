document.addEventListener('DOMContentLoaded', function() {
  const openPopInBtn = document.querySelector('.open-pop-in-btn');
  const closePopInBtn = document.querySelector('.close-pop-in-btn');
  const popInContainer = document.querySelector('.pop-in-container');

  openPopInBtn.addEventListener('click', openPopIn);
  closePopInBtn.addEventListener('click', closePopIn);

// sourcery skip: avoid-function-declarations-in-blocks
  function openPopIn() {
    popInContainer.classList.add('show');
  }

  function closePopIn() {
    popInContainer.classList.remove('show');
  }
});
