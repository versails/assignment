var elements=[];
window.onload = function(){
  if(JSON.parse(localStorage.getItem("todo-elements")!=null)){
        elements =JSON.parse(localStorage.getItem("todo-elements"));
    console.log("elements:"+elements);
    display();
  }
}
function addElement(){
  if(document.querySelector(".addTxt").value.trim()!=""){
    elements.push(document.querySelector(".addTxt").value.trim());
    if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }else{
      localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    console.log(localStorage.getItem("todo-elements"));
    display();
  }
}
function display(){
  document.querySelector(".list").innerHTML = "";
  for(var i = 0; i < elements.length; i++)
  document.querySelector(".list").innerHTML +=
  "<center><div class='element'>"+elements[i]+"<img class='tick'src='assets/tickmark-icon.png'onclick='strike("+i+")'><img class='dustbin' src='assets/icon-remove.png'onclick='del("+i+")'></div></center>";
}
function del(index){
  elements.splice(index, 1);
  if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }else{
      localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
  display();
}
function strike(index){
  if(elements[index].includes("<strike>")){
   elements[index] = elements[index].replace("<strike>","");
    elements[index] = elements[index].replace("</strike>","");
  }
  else
    elements[index] = "<strike>"+elements[index]+"</strike>";if(localStorage.getItem("todo-elements")==null){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }else{
      localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
  display();
}