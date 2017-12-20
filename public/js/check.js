/* $(document).ready(function(){
  const email = $('#email').val()
  const password = $('#password').val()

  $("#login").submit((e)=>{
    if(email === '') { console.log('ce champ et vide');}
    if(password === '') { console.log('ce champ et password est vide');}
    $('#error').append('<p class="alert alert-danger">erreur</p>');
  })

  
}); */




  
const allTd = document.querySelectorAll('td');

for(let i = 0; i < allTd.length; i++) {
  if(allTd[i].innerHTML == ''){
    console.log('ce champ son vide');
  } else {
    console.log('ce champ ne son pas vide');
  }
}
