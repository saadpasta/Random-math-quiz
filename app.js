var opreators = ['+','-','*','/'];
//var opindex = Math.random()*4; //good that your rnum2 cannot be zero
//var operator = ops[opindex];
var randomIndex = Math.floor(Math.random() * opreators.length); 
var randomOps = opreators[randomIndex];


function New(){
    num1=document.getElementById("num1");
    num2=document.getElementById("num2");   
    ops=document.getElementById("operator")
    var question=document.getElementById("question")
   
    rnum1 = Math.floor((Math.random()*10)+1);
    rnum2 = Math.floor((Math.random()*10)+1);
    var randomIndex = Math.floor(Math.random() * opreators.length); 
    var randomOps = opreators[randomIndex];

    num1.innerHTML=rnum1
    ops.innerHTML=randomOps
    num2.innerHTML=rnum2

    var answer=  ops.innerHTML
    console.log(answer)

        if(answer=="+"){
            CompAnswer=rnum1+rnum2
        }
        if(answer=="/")
      {
        CompAnswer=rnum1/rnum2
      }
      
      if(answer=="*"){
        CompAnswer=rnum1*rnum2
      }

      if(answer=="-")
    {
        CompAnswer=rnum1-rnum2
    }

        console.log(CompAnswer)
    
    var useranswer= prompt("Enter Your Answer For " +rnum1+answer+rnum2)

    if(CompAnswer==useranswer){
        alert("Correct Answer")
    }

    if(CompAnswer!=useranswer){
        alert("Wrong Answer \n Coorect Answer : "  + CompAnswer )
    }


    }

// TODO add service worker code here
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  };
