// ==========================================
// 1. 商品データ（ここを増やすだけで画面に自動反映されます）
// ==========================================
const items = [
    { 
        name: "スクエア型トレイ",
        price: "￥400〜", 
        image: "https://static.mercdn.net/item/detail/orig/photos/m80958482734_1.jpg?1790817440" ,
        link:"https://jp.mercari.com/item/m80958482734"
    },
    { 
        name: "スクエア型トレイ",
        price: "￥400〜",
        image: "https://static.mercdn.net/item/detail/orig/photos/m72501636036_1.jpg?1790817389",
        link:"https://jp.mercari.com/item/m72501636036"
    },
    { 
        name: "ハート型トレイ",
        price: "￥400〜",
        image: "https://static.mercdn.net/item/detail/orig/photos/m45942614794_1.jpg?1790817271",
        link:"https://jp.mercari.com/item/m45942614794"
    },
    { 
        name: "ハート型トレイ",
        price: "￥400〜",
        image: "https://static.mercdn.net/item/detail/orig/photos/m43728594094_1.jpg?1790817214",
        link:"https://jp.mercari.com/item/m43728594094"
    },
    {
        name: "オーバルトレイ",
        price: "￥1,300～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m17019323768_1.jpg?1788176364",
        link:"https://jp.mercari.com/item/m17019323768"    
    },
    {
        name: "リングスタンド",
        price: "￥300～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m13420580378_1.jpg?1787374057",
        link:"https://jp.mercari.com/item/m13420580378"        
    },
    {
        name: "リングスタンド",
        price: "￥300～", 
        image: "https://static.mercdn.net/item/detail/orig/photos/m79298339377_1.jpg?1787373992",
        link:"https://jp.mercari.com/item/m79298339377"        
    },
    {
        name: "ウミガメ型キーホルダー", 
        price: "￥300～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m41133217173_1.jpg?1787226532",
        link:"https://jp.mercari.com/item/m41133217173"            
    },
    { 
        name: "ウミガメ型キーホルダー",
        price: "￥300～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m88270674690_1.jpg?1787226484",
        link:"https://jp.mercari.com/item/m88270674690"                
    },
    {
        name: "スクエア型トレイ",
        price: "￥300～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m55511405092_1.jpg?1786777070",
        link:"https://jp.mercari.com/item/m55511405092"                  
    },
    {
        name: "スクエア型トレイ",
        price: "￥1,100～",
        image: "https://static.mercdn.net/item/detail/orig/photos/m96916780975_1.jpg?1786776983",
        link:"https://jp.mercari.com/item/m96916780975"                      
    },
];

// ==========================================
// 2. 商品カードの自動生成処理（index.htmlでのみ実行）
// ==========================================
// ==========================================
// 2. 商品カードの自動生成処理（index.htmlでのみ実行）
// ==========================================
const itemListContainer = document.getElementById('itemList');

if (itemListContainer) {
    items.forEach(item => {
        const imageContent = item.image 
            ? `<img src="${item.image}" alt="${item.name}">` 
            : `<span>写真</span>`;

        // aタグでカード全体を囲み、別タブで開くように target="_blank" を設定
        const cardHtml = `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="item-card-link">
                <div class="item-card">
                    <div class="item-image">
                        ${imageContent}
                    </div>
                    <div class="item-info">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-price">${item.price}</p>
                    </div>
                </div>
            </a>
        `;

        itemListContainer.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ==========================================
// 3. ハンバーガーメニューの開閉処理
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ==========================================
// 4. お問い合わせアコーディオン開閉処理
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const accordionToggle = document.getElementById('contactAccordionToggle');
    const accordionContent = document.getElementById('contactAccordionContent');

    if (accordionToggle && accordionContent) {
        accordionToggle.addEventListener('click', () => {
            accordionToggle.classList.toggle('active');
            accordionContent.classList.toggle('open');
        });
    }
});