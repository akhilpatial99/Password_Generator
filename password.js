let lengthp = document.querySelector('#length-number');
let upper = document.querySelector('#uppercase');
let lower = document.querySelector('#lowercase');
let number = document.querySelector('#numbers');
let symbol = document.querySelector('#Symbols');
let passinp = document.querySelector('#pass-input');
let copy = document.querySelector('#copy');
let generate = document.querySelector('#generate');

console.log(lengthp.value)
console.log(upper.checked)
console.log(lower.checked)
console.log(number.checked)
console.log(symbol.checked)

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '1234567890';
const Symbolsstr = '!@#$%^&*()_+';
// 



generate.addEventListener('click', () => {
    let str = '';
    if (upper.checked) {
        str += uppercasestr;
    }
    if (lower.checked) {
        str += lowercasestr;
    }
    if (number.checked) {
        str += numberstr;
    }
    if (symbol.checked) {
        str += Symbolsstr;
    }
    // else{
    //     alert("sorry you not checked any check box")
    // }
    if (str === '') {
        alert("Sorry, you must check at least one checkbox.");
        passinp.value = ""; // Ensure input field is empty
        return;
    }
    console.log(str,"str")
    let password= '';
    for (let i = 0; i < lengthp.value; i++) {
        console.log(str.length, "str.length")
        let index = Math.floor(Math.random() * str.length);
        console.log(index, "index")
        console.log("Math.random()", Math.random())
        console.log("Math.random()* str.length", Math.random() * str.length);
        console.log("math.floor(math.random()* str.length)", Math.floor(Math.random() * str.length))
        console.log(str[index])
        password+=str[index];


    }
    console.log(password,"password")
    passinp.value= password;
})
copy.addEventListener('click',()=>{
    if(passinp.value===''){
        alert('plzzz generate a password first');
    }else{
        let newele= document.createElement('textarea')
        newele.value= passinp.value;
        document.body.appendChild(newele);
        newele.select();
        passinp.select();
        document.execCommand('copy');
        alert('password copied to clipboard');
        newele.remove();


    }
})
