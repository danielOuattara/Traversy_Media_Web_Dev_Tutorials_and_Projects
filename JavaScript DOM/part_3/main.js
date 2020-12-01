// let button = document.querySelector('button');
// console.log(button);
// button.addEventListener('click', function() {
//     console.log('Hello Brad !');
//     button.style.padding =' 20px';
//     button.style.fontSize = "30px";
//     button.style.backgroundColor = "#f4f4f4";
//     button.textContent = "Clicked !";
// });

//button.addEventListener('click', function(e) {                                                                                                                                                                                                                                                          
   // console.log(e);
   // console.log(e.target);
   // console.log(e.target.id);
   // console.log(e.target.className);
   // console.log(e.target.classList);
   // console.log(e.type);
   // console.table(e)



//    console.log(e.clientX);
//    console.log(e.clientY);
//    console.log(e.clientX, e.clientY);
//    console.log(e.offsetX);
//    console.log(e.offsetY);
//    console.log(e.offsetX, e.offsetY);


// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);


// MouseEvent

// });
let button = document.querySelector('button');
let box = document.querySelector('#box');

// button.addEventListener('click', runEvent);                                                                                                                                                                                                                                                        
//button.addEventListener('dblclick', runEvent);                                                                                                                                                                                                                                                        
// button.addEventListener('mousedown', runEvent);                                                                                                                                                                                                                                                        
// button.addEventListener('mouseup', runEvent);                                                                                                                                                                                                                                                        


// box.addEventListener("mouseenter", runEvent)
// box.addEventListener("mouseleave", runEvent)


// box.addEventListener("mousemove", runEvent_2)


// function runEvent(e) {
//     console.log('EVETN TYPE' + " " + e.type);
// }
// function runEvent_2(e) {
//     // box.innerHTML = '<h3> Mouse X : ' + e.offsetX + '</h3> <h3> Mouse Y : ' + e.offsetY + '</h3>';
//     box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ',' + (e.offsetX+e.offsetY)/2 + ')';
//     box.innerHTML = 'rgb(' + e.offsetX + ', ' + e.offsetY + ',' + (e.offsetX+e.offsetY)/2 + ')';
//     box.style.textAlign= "center";
//     box.style.fontSize= "28px";
// }


// keyboard & input event


let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE' + " " + e.type);
    console.log(e.target.value);
}
