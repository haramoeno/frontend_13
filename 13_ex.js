// データの定義
// 大分類
let cate1 = [
    '---',                  // 未選択
    '家具',
    'ベッド・マットレス',
    '収納家具・収納グッズ',
    '子供家具',
    '調理器具'              // ※追加
];

// 小分類
let cate2 = [
    // 未選択
    ['---'],
    // 家具のカテゴリ
    ['ベッド', 'ソファ', '棚・ラック', 'テーブル・椅子'],
    // ベッド・マットレスのカテゴリ
    ['ベッド', '寝具', 'マットレス'],
    // 収納家具・収納グッズ'のカテゴリ
    ['家具・ラック', '収納システム'],
    // 子供家具
    ['子供部屋家具', 'ベビー家具・ベビーグッズ'],
    // 調理器具　※追加
    ['包丁', '鍋', 'フライパン']
];
// 商品の定義
var itemList = [
    { id: '0001', name: 'ソファベット', tags: ['ベッド', 'ソファ', '寝具'], price: 50000 },
    { id: '0002', name: 'シングルベット', tags: ['ベッド', 'ソファ', '寝具'], price: 30000 },
    { id: '0003', name: '子供用ベット', tags: ['ベッド', 'ソファ', '寝具', '子供部屋家具'], price: 20000 },
    { id: '0004', name: 'ソファ', tags: ['ソファ'], "price": 10000 },
    { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: 4000, },
    { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: 5000, },
    { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: 55000, },
    { id: '0008', name: 'サイドテーブル', tags: ['テーブル・椅子'], price: 4000, },
    { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: 4000, },
    { id: '0010', name: '子供部屋用収納', tags: ['収納システム', '子供部屋家具'], price: 35000 },
    { id: '0011', name: '三徳包丁', tags: ['包丁'], price: 5000 },
    { id: '0012', name: 'ソース鍋', tags: ['鍋'], price: 3500 },
    { id: '0013', name: '鉄フライパン', tags: ['フライパン'], price: 1000 },
];
//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');
// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu');
// 商品リストを表示する要素を取得
var itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    cate1.forEach(e => {
        let option = document.createElement('option');
        option.value = e;    // optionの値に配列の値を代入
        option.text = e;     // optionの表示文字列に配列の値を代入
        cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    });
}

// 小分類のoptionを追加する関数
function setSubMenu(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = '';

    // 大分類の配列に保存されている数だけoptionとして追加する
    cate2[idx].forEach(e => {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = e;    // optionの値に配列の値を代入
        option.text = e;     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    });
}

//　商品一覧の表示の巻子
function viewItemList(tag) {
    itemListElement.innerHTML = '';

    itemList.forEach(e=> {
        if (e.tags.some(t => t === tag)) {
            // li要素を作成
            let li = document.createElement('li');
            // テキスト情報を作成
            let text = document.createTextNode(e.id + ':' + e.name);
            // ul要素に追加
            li.appendChild(text);
            itemListElement.appendChild(li);
        }
    });
}

//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function () {
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択にあわせて、小分類の生成
    setSubMenu(idx);
    //　小分類が選択されたときに、最初に表示される値
    viewItemList(cate2[idx][0]);
});

// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function () {
    // 選択されば値を取得
    let val = cate2Element.value;
    viewItemList(val);

});

//--- プログラムの実行 ---
// 大分類の生成
setMainMenu();
