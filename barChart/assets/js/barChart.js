var bar = document.querySelector('#bar');
var button = document.querySelectorAll('.button');
var score = 0;
var increments = 1;

$('#increment').keypress(function(event){
  if(event.which === 13){
    increments = $(this).val();
    $(this).val('');
    console.log(increments)
  }
})

$('#number').keypress(function(event){
  if(event.which === 13){
    score = $(this).val();
    score = Number(score)
    limit();
    $(this).val('');
console.log(score);
    bar.style.width = score + '%';
    bar.textContent = score + '%';
  }
})

for(var i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(){
    if(this.textContent === "Plus"){
      score += Number(increments);
     limit();
     bar.textContent = score + '%';
     }
     else{
      score -= Number(increments);
     limit();
     bar.textContent = score + '%';
     };
     console.log(score);
      bar.style.width = score + '%'
    })
}

function limit(){
  if (score > 100){
    score = 100
};
if(score < 0){
    score = 0
};
}
/*
plus.addEventListener('click', function(){
  if (this.textContent === 'Plus'){
    score += 1;
  bar.style.width = score + '%'
}})
*/
bar.addEventListener('click', function(){
  alert('here')
})