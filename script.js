const button = document.getElementById('button');

button.addEventListener('click',function(){

   const form = document.getElementById('container');
   if(form.style.display === 'none' || form.style.display === '' )
    form.style.display = 'block';
  else
  form.style.display = 'none'
})