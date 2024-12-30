
let string = "";
 let buttons = document.querySelectorAll('.btn');
 
Array.from(buttons).forEach((buttons)=>{
  buttons.addEventListener('click',(e)=>{
    console.log(buttons.innerHTML)
    
    if(e.target.innerHTML=='='){
      string= eval(string);
      document.querySelector('#result').value= string;
    }
    else if(e.target.innerHTML=='C'){
      string="";
      document.querySelector('#result').value = "";
    }
    else{
      
      string= string + e.target.innerHTML;
      document.querySelector('#result').value = string;
      
  }
  })
})
