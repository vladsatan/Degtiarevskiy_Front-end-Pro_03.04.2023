const currentId = document.getElementById('input')
const button = document.getElementById('search')

button.addEventListener('click',()=>{
    if(currentId.value === '' || currentId.value > 100 || currentId.value < 1){
        alert('Ошибка! Введите номер поста в промежутке от 1 до 100')
    }else{
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentId.value}`)
            .then(response => response.json())
            .then(data => createPost(data))
            .catch(err => console.error(err));
    }
})

const createPost = (data) => {
   const container = document.getElementById('post-container')
   container.innerHTML = ""
   const post = document.createElement('div')
   const title = document.createElement('h2')
   const body = document.createElement('p')
   const id = document.createElement('h3')
   const button = document.createElement('button')

    post.classList.add('post-box')

    title.textContent = data.title
    body.textContent = data.body
    id.textContent = data.id
    button.textContent = 'Комментарии'

    post.append(id,title,body,button)
    container.append(post)

    button.addEventListener('click', ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
            .then(response => response.json())
            .then(comments => createComments(comments))
    })
}

const createComments = (commetsArray) => {
    commetsArray.forEach(data=>{
        const comment = document.createElement('div')
        const photo = document.createElement('img')
        const userName = document.createElement('h3')
        const text = document.createElement('p')
        const flex = document.createElement('div')

        flex.classList.add('comment-flex')
        comment.classList.add('comment')

        photo.src = './user.png'
        userName.textContent = data.email
        text.textContent = data.body

        flex.append(photo,userName)
        comment.append(flex,text)
        document.getElementById('post-container').append(comment)
    })

}