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


var itemList1 = [
    { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'] },
    { id: '0003', name: '子ども用ベッド', tags: ['ベッド', 'ソファ', '寝具', '子ども部屋家具'] },
    { id: '0004', name: 'ソファ', tags: ['ソファ'] },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'] },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'] },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'] },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'] },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'] },
    { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'] },
    { id: '0011', name: '鉄製フライパン', tags: ['フライパン'] },
    { id: '0012', name: '圧力鍋', tags: ['鍋'] },
    { id: '0013', name: 'ペティナイフ', tags: ['包丁']　},
    
];

var itemList2 = {
    price: 'ソファベッド',
    price: 'シングルベッド',
    price: '子ども用ベッド',
    price: 'キューブボックス',
    price: 'オープンラック',
    price: 'コンピュータデスク',
    price: 'サイドテーブル',
    price: 'ダイニングテーブル',
    price: '子ども部屋用収納',
    price: '鉄製フライパン', 
    price: '圧力鍋',
    price: 'ペティナイフ',
}
;



let cate1Element = document.getElementById('mainMenu');

let cate2Element = document.getElementById('subMenu');

var itemListElement = document.getElementById('itemList');


function setMainMenu() {
    
    cate1Element.innerHTML = '';

    
    for (let i = 0; i < cate1.length; i++) {
        
        let option = document.createElement('option');
        option.value = cate1[i];    
        option.text = cate1[i];     
        cate1Element.appendChild(option); 
    }
}


function setSubMenu(idx) {
    
    cate2Element.innerHTML = '';

    
    for (let i = 0; i < cate2[idx].length; i++) {
        
        let option = document.createElement('option');
        option.value = cate2[idx][i];    
        option.text = cate2[idx][i];     
        cate2Element.appendChild(option);      
    }
}


function viewItemList(tag) {
    itemListElement.innerHTML = '';
    for (let i = 0; i < itemList1.length; i++) {
        if (itemList1[i].tags.some(t => t === tag)) {
            
            let li = document.createElement('li');
            
            let text = document.createTextNode(itemList1[i].id + ':' + itemList1[i].name);
            
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    }
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