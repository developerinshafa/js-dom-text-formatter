
const textArea = document.getElementById("textArea");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorButtons = document.querySelectorAll(".color-button");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("ithalicBtn");
const underLineBtn = document.getElementById("underLineBtn");
const display = document.getElementById("display");
const charCount = document.getElementById("char-count");
const maxChars = 200;
// const wordsCount = document.getElementById("words-count");
// const words = '';

console.log(clearBtn);

textArea.addEventListener('input', function(){
   const remaining = maxChars - textArea.value.length;
   charCount.textContent = `${remaining}/200 characters remaining`;
})

uppercaseBtn.addEventListener('click', () => {
   const storeValue = textArea.value;
   textArea.value = storeValue.toUpperCase();

});
lowercaseBtn.addEventListener('click', () => {
   const storeValue = textArea.value;
   textArea.value = storeValue.toLowerCase();

});
clearBtn.addEventListener('click',function() {
    // console.log("textArea");
    // const storeValue = textArea.value;
    // console.log(storeValue);
    textArea.value = "";
    charCount.textContent = '200/200 characters remaining';

});
// colorButtons.forEach(button =>{
//     button.addEventListener('click',function (){
//        const color = this.getAttribute('data-color'); 
//        textarea.style.color = color;

//     })
// })

// boldBtn.addEventListener('click', function() {
//    const storeValue = textArea.value;
//    textArea.value = storeValue.Bold();
   
// })



