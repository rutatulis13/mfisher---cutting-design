var elem = document.querySelector('.menu');
var bounding = elem.getBoundingClientRect();

const counter = document.querySelector(".num-carousel");
const newCounter = document.createElement('span');

// Returns something like this:
// {top: -123, left: 0, right: 0, bottom: 25}
console.log(bounding);




function myFunc(){
    console.log(elem.scrollX);
    console.log(elem.offsetTop);
    if (
      
        bounding.left + window.scrollX < 0
  
    ) {
        console.log('Not in the viewport... whomp whomp');
    } else {
        console.log('in the viewport');
    }}

// function myFunc(){
//     if(document.getElementById("vase-3").offsetX == 0) {
//         console.log("labas");
//     }
// }




// const allImg = document.querySelectorAll('.zoomImg');
// const vaseFirst = document.querySelector('#vase-3');
// const vaseSecond = document.querySelector('#vase-4');

// const numFirst = document.querySelector('#vase-3');
// const numSecond = document.querySelector('#vase-4');

// function myFunc() {
//     // home
//     if (window.scrollX >= numFirst.offsetTop) {
//       allImg.forEach(link => {
//         img.classList.remove('active');
//       });
//       vaseFirst.classList.add('active');
//     }



// const container = document.querySelector(".gallery-carousel");
// const cards = document.querySelector(".cards");
// const card = document.querySelector(".zoomImg");
// let isPressedDown = false;
// let cursorXSpace;

// container.addEventListener("mousedown", (e) => {
//     isPressedDown = true;
//     cursorXSpace = e.offsetX - cards.offsetLeft;
//     console.log(cards.offsetLeft);
//     // cards.appendChild(cards.firstElementChild);
//     // cards.style.transition = "none";
//     // cards.style.transition = "linear 2s";
//     // console.log("labas");
// });

// container.addEventListener("mouseup", () => { 
//     isPressedDown = false;
// });

// container.addEventListener("mousemove", (e) => {
//     if(!isPressedDown) return;
//     e.preventDefault();
//     cards.style.left = `${e.offsetX - cursorXSpace}px`;
//     // cards.appendChild(cards.firstElementChild);
//     // cards.style.transition = "none";
//     // console.log("labas");
//     boundCards();
// });

// // var x = 0;

// // function myFunc(){
// //     document.getElementsByClassName("cards").innerHTML = cards.appendChild(cards.firstElementChild);
// //     console.log("labas");
// //     // if(!isPressedDown) return;
// //     // cards.style.left = `${e.offsetX - cursorXSpace}px`;
// //     // cards.appendChild(cards.firstElementChild);
// //     // boundCards();
// // }
// // // cards.addEventListener("scroll", () => { 
// // //     cards.appendChild(cards.firstElementChild);
// // //     console.log("labas");
   
// // // });

// function boundCards(){
//     const container_rect = container.getBoundingClientRect();
//     const cards_rect = cards.getBoundingClientRect();
//     if(parseInt(cards.style.left) > 0) {
//         cards.style.left = 0;
//     } else if(cards_rect.right < container_rect.right) {
//         cards.style.left = `-${cards_rect.width - container_rect.width}px`
//     }
// }

