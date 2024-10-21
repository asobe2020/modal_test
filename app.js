const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

const list = document.getElementById('list')

for(let i = 0; i < 10; i++){
  const listItems = document.createElement('li')
  list.appendChild(listItems)
  listItems.id = "modalOpen"
  listItems.className = "content"
  const listItemImage = document.createElement('img')
  listItemImage.src = "img/t.jpg"
  listItemImage.width = 100
  listItemImage.height = 100
  listItems.appendChild(listItemImage)
  const listItemNames = document.createElement('p')
  const listItemPrimes = document.createElement('p')
  listItemNames.textContent = `Tシャツ_${i+1}`
  listItemPrimes.textContent = `￥1500`
  listItems.appendChild(listItemNames)
  listItems.appendChild(listItemPrimes)

    // 各リストアイテムにクリックイベントリスナーを追加
    listItems.addEventListener('click', function() {
      modalOpen(); // モーダルを開く
    });

    // バツ印がクリックされた時
    buttonClose.addEventListener('click', modalClose);
    function modalClose() {
      modal.style.display = 'none';
    }

    // モーダルコンテンツ以外がクリックされた時
    addEventListener('click', outsideClose);
    function outsideClose(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }
}


// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

