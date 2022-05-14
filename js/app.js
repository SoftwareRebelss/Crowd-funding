 const Humberguer = document.querySelector('#btnHamburger');
 const header = document.querySelector('.header');
 const Over_lay = document.querySelector('.body-overlay'); 
 const Fadelements = document.querySelectorAll('.has-fade');
 const Class_Remove = document.querySelectorAll('remove-this-class');
 const back_this_one = document.querySelector('.btns-back');
 const back_up = document.querySelector('.bookmark-back');
 const bookmark_btn = document.querySelector('.bookmark-btn');
 const pledge_update = document.querySelector('#pledges');
 let error_messege = document.querySelector('.error');
 let alert_bambo = document.querySelector('.alert-bambo');
 let no_reward_pop_up = document.querySelector('.no-reward');
 


 Humberguer.addEventListener('click', function(){
console.log('click Humberguer');

 if(header.classList.contains('open')){ /*if the toggle is in X mode*/ 
    header.classList.remove('open');

   Fadelements.forEach(function(element){
   element.classList.remove('fade-in');  /* hiding the mobile menu list*/
   element.classList.add('fade-out');
    });
  
 }else{
    header.classList.add('open'); /*if the toggle is in 3 lines mode*/
    
    Fadelements.forEach(function (element){ 
    element.classList.add('fade-in');  /* showing the mobile menu list*/
    element.classList.remove('fade-out');
    });

 }
 });

 back_this_one.addEventListener('click', function(){
   bookmark_btn.innerHTML = 'Bookmarked';
   
  let btns_backed = document.querySelector('.btns-back').style.color = 'green';
});



let reward = document.querySelector('.reward-bambo').addEventListener('click' , function(){
    console.log('working');
     Over_lay.classList.add('fade-in');
     
     alert_bambo.classList.remove('remove-this-class');
     
    });

    let Close_alert = document.querySelector('.modal-close').addEventListener('click', function(){
      alert_bambo.classList.add('remove-this-class');
    });

    let btn_submit = document.querySelector('.btn-pledge').addEventListener('click' , Calcpladges);

function Calcpladges(){
  let user_input_data = document.querySelector('.user-input-data').value;
  let sol = 101 - user_input_data;

  document.querySelector('.numbers').textContent = sol + " left";
  if (user_input_data < 25 ){
    error_messege.style.color = "red";

  }
  else{
    error_messege.innerHTML = "Thank you";
  }
}
let completed = document.querySelector('.no-rewards-link').addEventListener('click' ,function(){
  alert_bambo.classList.add('remove-this-class');
  no_reward_pop_up.classList.remove('pop-box');

let btn_no_pledge = document.querySelector('.btn-pledgee').addEventListener('click', function(){
  no_reward_pop_up.classList.add('pop-box');
  Over_lay.classList.remove('fade-in');

})
     
});

   



     
   

       
    
 
 