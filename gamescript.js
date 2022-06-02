console.log("helloworld");
let gmarr=["m11","m12",'m13','m14','m21','m22','m23','m24','m31','m32','m33','m34','m41','m42','m43','m44']
let shuffldarray= shuffle(gmarr)              //shuffled list for every reload
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
} 
var btn = document.getElementById('startbutton');
btn.addEventListener('click', () => {
  begin();});

var maincondition=1
let round=1
function begin(){

  let myclick=[];                             //list which stores your clicks
  const l=shuffldarray.slice(0,round);  
  //let txt='';
  //l.forEach(tempfunction);
  /*document.getElementById("demo").innerHTML=txt;
  function tempfunction(value){
    txt+=value;
    }*/ 
  console.log(l)
 
  var elements = document.getElementsByClassName("button");
  console.log(elements);
   /*
  for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
      let num = ((i-1) * 4) + (j-1);
      elements[num].onclick = function() {
        myclick.push("m" + i + "" + j);
      };
    }
  }  */
  elements[0].onclick=function(){myclick.push("m11");};
  elements[1].onclick=function(){myclick.push("m12");};
  elements[2].onclick=function(){myclick.push("m13");};
  elements[3].onclick=function(){myclick.push("m14");};
  elements[4].onclick=function(){myclick.push("m21");};
  elements[5].onclick=function(){myclick.push("m22");};
  elements[6].onclick=function(){myclick.push("m23");};
  elements[7].onclick=function(){myclick.push("m24");};
  elements[8].onclick=function(){myclick.push("m31");};
  elements[9].onclick=function(){myclick.push("m32");};
  elements[10].onclick=function(){myclick.push("m33");};
  elements[11].onclick=function(){myclick.push("m34");};
  elements[12].onclick=function(){myclick.push("m41");};
  elements[13].onclick=function(){myclick.push("m42");};
  elements[14].onclick=function(){myclick.push("m43");};
  elements[15].onclick=function(){myclick.push("m44");};
   function finalchek(){
    console.log(myclick);
    for (let m=0; m<round;m++){
      if (myclick.includes(l[m])){
        maincondition=1;
      }
      else{maincondition=0;
        alert("game is lost, reload to restart");
        throw("Game lost...ggs\n Reload to restart!!!");
        ;}
    }
  document.getElementById('demo2').innerHTML=" score : "+round;  
  if (round==16){alert("you win ! GGWP :)");throw("YOU WIN! GGS")}  
  round++;
  begin();
  }
  mytimer=setInterval(blinker,1000);
  let x=0
  function blinker(){
    document.getElementById(shuffldarray[x]).style.backgroundColor='blue';
    
   
    if (x==round-1){
      clearInterval(mytimer)
    }
    x++;
  }
  setTimeout(changeback,1000*round+1000)
  function changeback(){
    mytimer2=setInterval(blinker2,200);
    let y=0
    function blinker2(){
      document.getElementById(shuffldarray[y]).style.backgroundColor='black';
      
    
   
      if (y==round-1){
        clearInterval(mytimer2);
        console.log("settimeout begins now");
        setTimeout(finalchek,1500*round+2000)
        
      }
      y++;
    }
  }
 
  
  

  


    } 

