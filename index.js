import { data } from "./dataBase.js";
const root = document.getElementById('root');
const productsBox = document.getElementById('products');
const iphone = document.getElementById('iphone');
const ipad = document.getElementById('ipad');
const macbook = document.getElementById('macbook');
const productInfo = document.getElementById('product_info');

let arrayOfProduct = []

function createProductCard (item) {

   const card = createEl('div', 'card')
   const img = createEl('img', 'card-image')
   const h3 = createEl('h3', 'card-title')
   const flexColor = createEl('div', 'flex-color')
   const p = createEl('p')
   const span = createEl('span')
   const price = createEl('p', 'price')

   img.src = `./img/${item.photo}`;
   h3.textContent = item.name;
   p.textContent = 'color: '
   span.textContent = item.color;
   span.style.color = item.color;
   span.style.fontSize = '17px'
   price.textContent = item.price

   p.append(span)
   flexColor.append(p)
   card.append(img, h3, flexColor, price)
   productsBox.append(card)

   card.addEventListener('click', () =>{
      createInfoCard(item);
   })

}

function createEl(el, className){
   const element = document.createElement(el);
   if(className){
      element.classList.add(className)
   }
   return element
}

function getEvent(array,categori){

   array = []

   productsBox.innerHTML = ''

   array = data.filter(e => e.categori === categori);

   array.forEach(element => {
      createProductCard(element)
   });

}

function createInfoCard(item){

    const infoCard = createEl('div', 'product_info_card')
    const h1 = createEl('h1', 'product_info_title')
    const img = createEl('img', 'product_info_img')
    const giscriptions = createEl('p')
    const flexInfo = createEl('div', 'flex-info')
    const price = createEl('p')
    const button = createEl('button', 'buy_btn')

    h1.textContent = item.name
    img.src = `./img/${item.photo}`
    giscriptions.textContent = item.giscriptions
    price.textContent = item.price
    button.textContent = 'Buy Now'

    flexInfo.append(price,button)
    infoCard.append(h1,img,giscriptions,flexInfo)

    productInfo.innerHTML = ''
    productInfo.append(infoCard) 

    button.addEventListener('click',()=>{
      alert('Product purchased!');
      location.reload()
    })
}

function removeClass(item){
   const list = Array.from(document.getElementsByTagName('li'))  
   list.forEach(e => {
      if(e.className === 'item active'){
         e.classList.remove('active')
      }
   })
   item.classList.add('active')
}

iphone.addEventListener('click', ()=> {
   getEvent(arrayOfProduct,'iphone')
   removeClass(iphone)
});

ipad.addEventListener('click', ()=>{ 
   getEvent(arrayOfProduct,'ipad')
   removeClass(ipad)
});

macbook.addEventListener('click', ()=> {
   getEvent(arrayOfProduct,'macbook')
   removeClass(macbook)
});


