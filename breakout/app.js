var i=10;

function game(){
document.addEventListener('keydown', function(event) {
   
    var Key = event.key;
  
       if(Key =='ArrowRight'){
        console.log(event.key);
            document.querySelector('.bar').style.transform = "translateX(" + i + "px)";
            i=i+50;
            
       }
        
      
});

document.addEventListener('keydown', function(event) {
   
    var Key = event.key;
  
       if(Key =='ArrowLeft'){
        console.log(event.key);
        i=i-50;
            document.querySelector('.bar').style.transform = "translateX(" + (i-50)+ "px)";
            
            
       }
        
      
});
}

game();