/*WHAT TO DO

1. Take input and then display it on DOM

*/


//------- Getting Elements -----------
var input = document.getElementById("todo-input");
var enterBtn = document.getElementById("entBtn");
var mainCntr = document.getElementById("mainContainer");

//------- Event Listeners -----------

//var ul = createUl("todo-list");

//Enter Key
input.addEventListener("keyup",function(e){
    if(input.value.length > 0)
        {
                if(e.keyCode === 13)
            {   
                var todo =  
                 createLists(input.value);
                if(!mainCntr.querySelector(".todo"))
                    {
                        var noTodosP = document.querySelector("p.no-todos");
                        mainCntr.removeChild(noTodosP);
                        
                        var ul = createUl("todo-list");
             
                        ul.append(todo);
                        mainCntr.append(ul)
                        
                    }
                else{
                    var ul = document.querySelector(".todo-list")
                    ul.append(todo)
                }
                
                input.value = ""
        
//                ul.append(todo);
//                mainCntr.append(ul)
//                input.value = "";
                
                todo.style.opacity = 0;
                
                setTimeout(function(){
                    todo.style.opacity = 1;
                },900)
            }
        }
})

//Clicking on Enter Button
enterBtn.addEventListener("click",function(e){
    
    
    if(input.value.length > 0)
        {   
                var todo =  
                 createLists(input.value);
                if(!mainCntr.querySelector(".todo"))
                    {
                        var noTodosP = document.querySelector("p.no-todos");
                        mainCntr.removeChild(noTodosP);
                        
                        var ul = createUl("todo-list");
             
                        ul.append(todo);
                        mainCntr.append(ul)
                        
                    }
                else{
                    var ul = document.querySelector(".todo-list")
                    ul.append(todo)
                }
                
                input.value = ""
        
//                ul.append(todo);
//                mainCntr.append(ul)
//                input.value = "";
                
                todo.style.opacity = 0;
                
                setTimeout(function(){
                    todo.style.opacity = 1;
                },900)
            }
        })
//  if(input.value.length > 0)
//      {
//          var todo = createLists(input.value)
//          mainCntr.append(todo)
//          input.value = "";
//      }


//--------------- Access Buttons ------------

mainCntr.addEventListener("click",function(e){
    if(e.target.nodeName === "BTN"){
            
        var button = e.target;
        var typeButton = button.getAttribute("class");
        
        
        var li = button.parentElement.parentElement;
        var ul = li.parentElement;
        
        switch(typeButton)
            {
                case "remove":

                    ul.removeChild(li);
                    if(ul.children.length === 0)
                        {
                            var p = createParagraph("You are free now, Got some more to do!? Add here","no-todos");
                            var ul = document.querySelector(".todo-list");
                            mainCntr.removeChild(ul);
                            mainCntr.append(p);
                        }
                    break;
                    
                    
                case "up":
                    var preElement = li.previousElementSibling;
                   
                    if(preElement !== null)
                        {
                            console.log(li)
                            ul.removeChild(li);
                            ul.insertBefore(li,preElement)
                        }
                    
                    break;
                    
                    
                case "down":
                    var nextElement = li.nextElementSibling;
                    console.log(nextElement);
                    
                    if(nextElement !== null)
                        {
                            ul.removeChild(li);
                            ul.insertBefore(li,nextElement.nextElementSibling)
                            
                        }
                    
                    break;
            }
        
        
    }
})

//HELPERS
//-----CreateElement------
function createElement(type, className)
{
    var element = document.createElement(type);
    if(className)
        {
            element.classList.add(className);
        }
    return element;
}

//-----------CreateParagraph--------
function createParagraph(text,className)
{
    var p = createElement("p", className);
    p.innerText = text;
    return p;
}

//-------Create Div --------
function createDiv(className)
{
    var div = createElement("div", className);
    return div;
}

//-------Create Ul-------
function createUl(className)
{
    var ul = createElement("ul", className);
    return ul;
}

//--------Create Li------
function createLi(className)
{
    var li = createElement("li", className);
    return li;
}


function createBtn(text,className)
{
    var btn = createElement("btn",className)
    btn.innerText = text;
    return btn;
}

//------------ Creating DOM --------

//Creating LI
function createLists(text)
{
   var li = createLi("todo");
    var p = createParagraph(text);
    li.append(p);
    
    var div = createDiv("accessBtn")
    li.append(div);
    
    var upBtn = createBtn("Up","up")
    div.append(upBtn)
    
    var downBtn = createBtn("Down","down")
    div.append(downBtn)
    
    var removeBtn = createBtn("Remove","remove")
    div.append(removeBtn)
    
    return li;
}

function noTodo()
{
    var div = createDiv("no-todos")
    var p = createParagraph("No TODOS to Display") 
    
    div.append(p)
    
    return div;
}

//console.log(noTodo());