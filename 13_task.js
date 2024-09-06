let cate1 = [
    '---',                  
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子ども家具',
    '調理器具'
    
];


let cate2 = [
    
    ['---'],
    
    ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],
    
    ['ベッド', '寝具', 'マットレス'],
    
    ['家具・ラック', '収納システム'],
    
    ['子ども部屋家具', 'ベビー家具・ベビーグッズ'],
    
    ['フライパン', '鍋', '包丁']
];


var itemList = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 3000 },
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 5000 },
    { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'], price: 6000 },
    { id: '0004', name: 'ソファ', tags: ['ソファ'], price: 2000 },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: 2500 },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: 3500 },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: 8000 },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'], price: 2000 },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: 4000 },
    { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'], price: 5500 },
    { id: '0011', name: '鉄製フライパン', tags: ['フライパン'], price:1500 },
    { id: '0012', name: '圧力鍋', tags: ['鍋'], price: 4500 },
    { id: '0013', name: 'ペティナイフ', tags: ['包丁'], price: 1000 },
];




let cate1Element = document.getElementById('mainMenu');

let cate2Element = document.getElementById('subMenu');

var itemListElement = document.getElementById('itemList');


function setMainMenu() {
    
    cate1Element.innerHTML = '';

    
    cate1.forEach(function(e){
        
        let option = document.createElement('option');
        option.value = e;    
        option.text = e;     
        cate1Element.appendChild(option);     
    });
}


function setSubMenu(idx) {
    
    cate2Element.innerHTML = '';

    
    cate2[idx].forEach(function(e) {
        
        let option = document.createElement('option');
        option.value = e;
        option.text = e;     
        cate2Element.appendChild(option); 
    });
}


function viewItemList(tag) {
    itemListElement.innerHTML = '';
    
    itemList.forEach(function(e) {
        if (e.tags.some(t => t === tag)) {
            
            let li = document.createElement('li');
            
            let text = document.createTextNode(e.id + ':' + e.name);
            
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    });
}


cate1Element.addEventListener('change', function () {
    
    let idx = cate1Element.selectedIndex;
    
    setSubMenu(idx);
    
    viewItemList(cate2[idx][0]);
});


cate2Element.addEventListener('change', function () {
    
    let val = cate2Element.value;
    viewItemList(val);

});


setMainMenu();