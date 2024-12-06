
const button = document.getElementById('button');
const close = document.getElementById('close-btn');
const form = document.getElementById('container');

// hide or show the form  when the button is clicked
button.addEventListener('click', function () {
  if (form.style.display === 'none' || form.style.display === '') {
    form.style.display = 'block'; // Show the form
  } else {
    form.style.display = 'none'; // Hide the form
  }
});

// Hide the form when the close button is clicked
close.addEventListener('click', function () {
  form.style.display = 'none';
});
