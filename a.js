// 1. Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением

// const btn = document.querySelector('button');
// btn.addEventListener('click', function (){
//     alert('hi')
// })

// 2. Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить
// значение инпута на «+375(29)111-11-11»

// const btn = document.querySelector('button');
// const input = document.querySelector('input')
// btn.addEventListener('click', function (){
//     input.value = "+375(29)111-11-11"
// })

// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

// const btn = document.querySelector('button');
// const input = document.querySelector('input')
// btn.addEventListener('click', function (){
//     alert(input.value);
// })

// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

// const btn = document.querySelector('button');
// const input = document.querySelector('input')
// try{
//     if(input.value === null) {
//         throw new Error('Введите строку');
//     }
//     else {
//         btn.addEventListener('click', function (){
//         alert(input.value);
//         })
//     }  
// }
// catch(error){
//     console.log(error.message)
// }

// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. 

// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const result = document.querySelector('.result');
// const fib = [];

// btn.addEventListener('click', function (){
//     if(input.value < 0) console.log('Введите число больше нуля');
//     else{
//         for(let i = 0; i < input.value; i++){
//             if(i == 0 || i == 1) fib.push(i);
//             else{
//                 fib.push(fib[i - 1] + fib[i - 2]);
//             }
//         }
//         result.textContent = fib
//     }
// })


// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

// const btn = document.querySelector('button');
// const input = document.querySelector('input')
// btn.addEventListener('click', function (){
//     input.value = "!!!"
// })

// 7. Записать в результат удвоенное значение инпута. Добавить проверки 

// const btn = document.querySelector('button');
// const input = document.querySelector('input')
// const result = document.querySelector('p');

// btn.addEventListener('click', function (){
//     if(isNaN(input.value)) console.log('Введите число');
//     else result.textContent = `Результат: ${input.value * 2}`;
// })

// 8. У вас есть кнопка. После нажатия поменять background.

// const btn = document.querySelector('button');

// btn.addEventListener('click', function (){
//     btn.style.background = 'red';
// })

// 9. У вас есть кнопка. После каждого нажатия менять background.

// const btn = document.querySelector('button');
// let flag = false

// btn.addEventListener('click', function (){
//     if(flag == false){
//         btn.style.background = 'red';
//         flag = true;
//     }
//     else{
//         btn.style.background = 'yellow';
//         flag = false;
//     }
// })

// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

// const block = document.querySelector('.block');
// const unblock = document.querySelector('.unblock');
// const input = document.querySelector('input');

// block.addEventListener('click', function (){
//     input.disabled = true
// })

// unblock.addEventListener('click', function (){
//     input.disabled = false
// })


// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const btn = document.querySelector('button');

// let temp = '';
// btn.addEventListener('click', function(){
//     temp = first.value;
//     first.value = second.value;
//     second.value = temp
// })

// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector('button');
const input = document.querySelector('input');
const p = document.querySelector('p');

const arr = []
btn.addEventListener('click', function (){
    if(input.value != ""){
        arr.push(input.value)
        p.textContent = arr
    }
    else{
        console.log('Поле пустое')
    }
})