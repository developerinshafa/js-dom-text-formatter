
const textArea = document.getElementById("textArea");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorButtons = document.querySelectorAll(".color-button");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("ithalicBtn");
const underLineBtn = document.getElementById("underLineBtn");
const display = document.getElementById("display");

console.log(clearBtn);

uppercaseBtn.addEventListener('click', () => {
   const storeValue = textArea.value;
   textArea.value = storeValue.toUpperCase();

});
lowercaseBtn.addEventListener('click', () => {
   const storeValue = textArea.value;
   textArea.value = storeValue.toLowerCase();

});
clearBtn.addEventListener('click',() => {
    // console.log("textArea");
    // const storeValue = textArea.value;
    // console.log(storeValue);
    textArea.value = "";

});
// colorButtons.forEach(button =>{
//     button.addEventListener('click',function (){
//        const color = this.getAttribute('data-color'); 
//        textArea.style.color = color;

//     })
// })
// boldBtn.addEventListener('click', () => {
//     textArea.style.fontWeight = boldBtn();
   
// })


// uppercaseBtn.addEventListener('click', () => {
//     textInput.value = textInput.value.toUpperCase(); 
// });

// lowercaseBtn.addEventListener('click', () => {
//     textInput.value = textInput.value.toLowerCase(); 
// });

// clearBtn.addEventListener('click', () => {
//     textInput.value = textInput.value.toClear(); 
// });

// colourBtn.forEach('click', () => {
//     textInput.value = textInput.value.toColour(); 
// });
