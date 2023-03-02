const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const button = document.querySelector('.button');
const div = document.querySelector('.div');

const useRequest = () => {
   let url = 'https://picsum.photos/'
   url = url + input1.value + '/' + input2.value
   return fetch(url)
      .then((response) => {
         return response.url;
      })
      .then((url) => { div.innerHTML = `<img src="${url}">`; })
      .catch(() => { console.log('error') });
}

button.addEventListener('click', async () => {
   if (isNaN(input1.value) || isNaN(input2.value) || input1.value < 100 || input1.value > 300 || input2.value < 100 || input2.value > 300) {
      div.innerHTML = 'Oдно из чисел вне диапазона от 100 до 300'
   } else {
      const requestResult = await useRequest();
   }
})

// button.addEventListener('click', () => {
//    let url = 'https://picsum.photos/'
//    url = url + input1.value + '/' + input2.value
//    fetch(url)
//       .then((response) => {
//          console.log('response', response);

//          const result = response.url;
//          console.log('result', result);
//          return result;
//       })
//       .then((data) => {

//          div.innerHTML = `<img src="${data}">`;
//       })
//       .catch(() => { console.log('error') });
// });