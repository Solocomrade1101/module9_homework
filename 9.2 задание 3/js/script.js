const input = document.querySelector('.input');
const button = document.querySelector('.button');
const div = document.querySelector('.div');




function useRequest(url, callback) {
   let xhr = new XMLHttpRequest();
   url = url + 'limit=' + input.value;
   xhr.open('GET', url, true);

   xhr.onload = function () {
      if (xhr.status != 200) {
         console.log('Статус ответа:', xhr.status);
      } else {
         const result = JSON.parse(xhr.response);
         if (callback) {
            callback(result);
         }
      }
   };

   xhr.onerror = function () {
      console.log('Ошибка!')
   };

   xhr.send();
};

function displayResult(apiData) {
   let cards = '';

   apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
         <img src="${item.download_url}" class="card-image"/>
         <p class="author">${item.author}</p>
      </div>
      `;
      cards += cardBlock
   });

   div.innerHTML = cards;
}

button.addEventListener('click', () => {
   if (input.value > 10 || input.value < 1) {
      div.innerHTML = 'Число вне диапазона от 1 до 10';
   } else {
      useRequest('https://picsum.photos/v2/list?', displayResult)
   }
})
