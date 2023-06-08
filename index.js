import { data } from "./dataBase.js";
const root = document.getElementById('root');
const productsBox = document.getElementById('products');
const iphone = document.getElementById('iphone');
const ipad = document.getElementById('ipad');
const macbook = document.getElementById('macbook');
const productInfoContainer = document.getElementById('product_info_container');
const form = document.getElementById('form')
let currentProduct = null;
let orderHistory = []

let arrayOfProduct = []

let localStorageData = localStorage.getItem('orders')

if(localStorageData){
    orderHistory = JSON.parse(localStorageData)
    for(let i = 0; i < orderHistory.length; i++){
        orderCard(orderHistory[i])
    }
}

const myOrdersBtn = document.getElementById('my-orders-btn')
myOrdersBtn.textContent = `My orders ( ${orderHistory.length} )`

myOrdersBtn.addEventListener('click',()=>{
    const container = document.getElementById('container')
    container.classList.remove('container')
    container.classList.add('close-container')
    const myOrders = document.getElementById('my-orders-container')
    myOrders.classList.remove('my-orders-container-close')
    myOrders.classList.add('my-orders-container')
})

const back = document.getElementById('back')
back.addEventListener('click', ()=>{
    const container = document.getElementById('container')
    container.classList.remove('close-container')
    container.classList.add('container')
    const myOrders = document.getElementById('my-orders-container')
    myOrders.classList.remove('my-orders-container')
    myOrders.classList.add('my-orders-container-close')
})

function orderCard (item) {
    const card = createEl('div', 'order-card')
    const date = createEl('p', 'order-date')
    const itemName = createEl('h3', 'itemName-order')
    const price = createEl('p', 'order-price')
    const describeOrder = createEl('div', 'describe-order')
    const cardBox = createEl('div', 'cardBox')

    let isOpen = false

    date.textContent = item.order.date
    itemName.textContent = item.product.name
    price.textContent = `${item.order.price} $`

    card.append(date,itemName,price)
    const box = document.getElementById('orders-box')
    cardBox.append(card,describeOrder)
    box.append(cardBox)

    card.addEventListener('click', ()=>{

        isOpen = !isOpen
        if(isOpen){
            let description = setDescribeOfOrder(item)
            describeOrder.innerHTML = ''
            describeOrder.append(description)
        }else {
            describeOrder.innerHTML = ''
        }
    })
}

function setDescribeOfOrder (item) {
    const describeCard = createEl('div', 'describeCard')
    const h1 = createEl('h1', 'titleOfDesCard')
    const FIO = createEl('p', 'describe-order-text')
    const city = createEl('p', 'describe-order-text')
    const postOffice = createEl('p', 'describe-order-text')
    const paymentMethod = createEl('p', 'describe-order-text')
    const quantity = createEl('p', 'describe-order-text')
    const comment = createEl('p', 'describe-order-text')
    const price = createEl('p', 'describe-price')
    const img = createEl('img', 'describe-img')
    const productName = createEl('h3', 'productName-describe')
    const deleteButton = createEl('button', 'deleteBtn')

    h1.textContent = 'Детали заказа'
    FIO.textContent = `ФИО получателя: ${item.order.surname} ${item.order.name} ${item.order.patronymic}`
    city.textContent = `Город: ${item.order.city}`
    postOffice.textContent = `Отделение новой почты: ${item.order.postOffice}`
    paymentMethod.textContent = `Способ оплаты: ${item.order.paymentMethod}`
    quantity.textContent = `Количество товара: ${item.order.quantity}`
    comment.textContent = `Комментарии к заказу: ${item.order.comments}`
    price.textContent = `Цена: ${item.order.price} $`
    img.src = `/img/${item.product.photo}`
    productName.textContent = item.product.name
    deleteButton.textContent = 'Удалить заказ'

    describeCard.append(h1,img,productName,FIO,city,postOffice,paymentMethod,quantity,comment,price,deleteButton)

    deleteButton.addEventListener('click', ()=>{
        orderHistory = orderHistory.filter(e => {
            if(e.product.name != item.product.name || e.order.price != item.order.price || e.order.quantity != item.order.quantity || e.order.date != item.order.date){
                return e}})

        localStorage.removeItem('orders')
        localStorage.setItem('orders', JSON.stringify(orderHistory))
        myOrdersBtn.textContent = `My orders ( ${orderHistory.length} )`
        const box = document.getElementById('orders-box')
        box.innerHTML = ''
        for(let i = 0; i < orderHistory.length; i++){
            orderCard(orderHistory[i])
        }

    })

    return describeCard

}

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

    orderObj.price = fullPrice

    return {
       product: productObj,
       order: orderObj
    }
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
       let info = createPopup(currentProduct,validInfo)
        let array = orderHistory
        array.push(info)
        localStorage.setItem('orders', JSON.stringify(array))
        myOrdersBtn.textContent = `My orders ( ${orderHistory.length} )`
        const box = document.getElementById('orders-box')
        box.innerHTML = ''
        for(let i = 0; i < orderHistory.length; i++){
            orderCard(orderHistory[i])
        }
    }
});


