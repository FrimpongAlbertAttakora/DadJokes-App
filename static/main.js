var try_1 = document.getElementById('try');
console.log(try_1.innerHTML.replace('Brother', 'Sister'));

try_1.addEventListener("click", () => {
    console.log(try_1.innerHTML);
})

