var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
  createMewMew(animals[i]);
}

function createMewMew(str){
  var ele = document.createElement("div");
if(str==="cat"){
  ele.innerHTML="I am a cat";
}else if(str==="dog"){
  ele.innerHTML="woof woof!";
}else if(str!=="cat"&&str!=="dog"){
  ele.innerHTML="I am an animal";
}else{
  ele.innerHTML="Less superior";
}
  
  wrapperEle.appendChild(ele);
  }