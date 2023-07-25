const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1=document.getElementById("password1");
let password2=document.getElementById("password2");


function generate(){
    let password3=""
    let password4=""
    for(let i=0;i<16;i++){
        let index= Math.floor(Math.random()*characters.length)
       password3+=characters[index]   
    }
    password1.textContent=password3
    
    for(let j=0;j<16;j++){
          let index2=Math.floor(Math.random()*characters.length)
        password4+=characters[index2]   
    }
   
    
    if(password3===password4){
        
         for(let k=0;k<16;k++){
          let index3=Math.floor(Math.random()*characters.length)
        password4+=characters[index3]   
    }
    }else{
             password2.textContent=password4
        
    }
    

}




