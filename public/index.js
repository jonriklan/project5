const toggleButton = document.getElementById('toggleButton');
const catImage1 = document.getElementById('catImage1');
const catImage2 = document.getElementById('catImage2');

toggleButton.addEventListener('click', function() {
  catImage1.classList.toggle('hidden');
  catImage2.classList.toggle('hidden');
});
