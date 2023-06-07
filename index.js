import { data } from "./dataBase.js";
const root = document.getElementById('root');
const productsBox = document.getElementById('products');
const iphone = document.getElementById('iphone');
const ipad = document.getElementById('ipad');
const macbook = document.getElementById('macbook');
const productInfoContainer = document.getElementById('product_info_container');
const form = document.getElementById('form')
let currentProduct = null;

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
      closeOrderForm();
   })

}

function createEl(el, className,id){
   const element = document.createElement(el);
   if(className){
      element.classList.add(className)
   }
   if(id){
      element.id = id
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

    productInfoContainer.innerHTML = ''
    productInfoContainer.append(infoCard) 

    button.addEventListener('click',()=>{
        openOrderForm()
        currentProduct = item
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

function displayErrorMessage(errorId, message) {
   let errorElement = document.getElementById(errorId);
    errorElement.innerText = message;
}

function clearErrorMessage(errorId) {
    let errorElement = document.getElementById(errorId);
    errorElement.innerText = '';
}
function orderValidator(){

   let name = form.elements.name
   let surname = form.elements.surname
   let patronymic = form.elements.patronymic
   let city = form.elements.city
   let postOffice = form.elements.postOffice
   let paymentMethod = form.elements.payment
   let quantity = form.elements.quantity
   let comments = form.elements.comments

   let isValid = true;
   let errorMessages = {
        name: 'Введите имя',
        surname: 'Введите фамилию',
        patronymic: 'Введите отчество',
        city: 'Выберите город',
        postOffice: 'Выберите отделение новой почты',
        paymentMethod: 'Выберите метод оплаты',
        quantity: 'Введите количество товара'
    };

    if (name.value === '') {
        displayErrorMessage('error-1', errorMessages.name);
        isValid = false;
    } else {
        clearErrorMessage('error-1');
    }

    if (surname.value === '') {
        displayErrorMessage('error-2', errorMessages.surname);
        isValid = false;
    } else {
        clearErrorMessage('error-2');
    }

    if (patronymic.value === '') {
        displayErrorMessage('error-3', errorMessages.patronymic);
        isValid = false;
    } else {
        clearErrorMessage('error-3');
    }

    if (city.value === '-') {
        displayErrorMessage('error-4', errorMessages.city);
        isValid = false;
    } else {
        clearErrorMessage('error-4');
    }

    if (postOffice.value === '-') {
        displayErrorMessage('error-5', errorMessages.postOffice);
        isValid = false;
    } else {
        clearErrorMessage('error-5');
    }

    if (quantity.value === '') {
        displayErrorMessage('error-6', errorMessages.paymentMethod);
        isValid = false;
    } else {
        clearErrorMessage('error-6');
    }

    if (quantity.value === '') {
        displayErrorMessage('error-7', errorMessages.quantity);
        isValid = false;
    } else {
        clearErrorMessage('error-7');
    }

    if (isValid) {

        let date = new Date()
        let curr_day = date.getDate()
        let curr_month = date.getMonth() + 1;
        let curr_year = date.getFullYear();

        if(curr_day < 10) {
            curr_day = '0' + curr_day
        }
        if(curr_month < 10){
            curr_month = '0' + curr_month
        }

        let dateOfOrder = curr_day + "." + curr_month + "." + curr_year

        let orderInfo = {
            name: name.value,
            surname: surname.value,
            patronymic: patronymic.value,
            city: city.value,
            postOffice: postOffice.value,
            paymentMethod: paymentMethod.value,
            quantity: quantity.value,
            comments: comments.value,
            date: dateOfOrder
        }
        return orderInfo;
    }

}

function createPopup(productObj,orderObj){

   const popup = createEl('div', "popup")
   const popupBg = createEl('div', "popup-bg")
   const title = createEl('h1', 'popup-title')
   const productInfoBox = createEl('div', 'productInfoBox')
   const orderInfoBox = createEl('div', 'orderInfoBox')
   const img = createEl('img', 'popup-img')
   const productName = createEl('h4', 'productName')
   const productTitle = createEl('h3','product-title')
   const color = createEl('p', 'popup-color')
   const orderTitle = createEl('h3', 'order-title')
   const FIO = createEl('p', 'popup-order-text')
   const city = createEl('p', 'popup-order-text')
   const postOffice = createEl('p', 'popup-order-text')
   const paymentMethod = createEl('p', 'popup-order-text')
   const quantity = createEl('p', 'popup-order-text')
   const comment = createEl('p', 'popup-order-text')
   const price = createEl('p', 'popup-price')
   const submit = createEl('button', 'popup-submit')

    title.textContent = 'Ваш заказ был успешно оформлен!'
    img.src = `img/${productObj.photo}`
    productName.textContent = productObj.name
    productTitle.textContent = 'Информация о товаре'
    color.textContent = `Цвет: ${productObj.color}`
    orderTitle.textContent = 'Информация о доставке'
    FIO.textContent = `ФИО: ${orderObj.surname} ${orderObj.name} ${orderObj.patronymic}`
    city.textContent = `Город: ${orderObj.city}`
    postOffice.textContent = `Отделение новой почты: ${orderObj.postOffice}`
    paymentMethod.textContent = `Способ оплаты: ${orderObj.paymentMethod}`
    quantity.textContent = `Количество товара: ${orderObj.quantity}`
    comment.textContent = `Комментарии к заказу: ${orderObj.comments}`

    let fullPrice = Number(orderObj.quantity) * Number((productObj.price).slice(0,-1))
    price.textContent = `Цена к оплате: ${fullPrice} $`

    submit.textContent = 'Принять'

    productInfoBox.append(productTitle,img,productName,color)
    orderInfoBox.append(orderTitle,FIO,city,postOffice,paymentMethod,quantity,comment,price)
    popup.append(title,productInfoBox,orderInfoBox,submit)
    popupBg.append(popup)
    root.append(popupBg)

    submit.addEventListener('click',()=>{
        popupBg.remove()
    })
}

function openOrderForm(){
    const orderBox = document.getElementById('order-box')
    orderBox.classList.remove('order-box-close')
    orderBox.classList.add('order-box')
}

function closeOrderForm(){
    const orderBox = document.getElementById('order-box')
    orderBox.classList.remove('order-box')
    orderBox.classList.add('order-box-close')
    form.reset()
}

iphone.addEventListener('click', ()=> {
   getEvent(arrayOfProduct,'iphone')
   removeClass(iphone)
   closeOrderForm()
});

ipad.addEventListener('click', ()=>{ 
   getEvent(arrayOfProduct,'ipad')
   removeClass(ipad)
   closeOrderForm()
});

macbook.addEventListener('click', ()=> {
   getEvent(arrayOfProduct,'macbook')
   removeClass(macbook)
   closeOrderForm()
});

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let validInfo =  orderValidator()
    if(validInfo){
        closeOrderForm()
        createPopup(currentProduct,validInfo)
    }
});


