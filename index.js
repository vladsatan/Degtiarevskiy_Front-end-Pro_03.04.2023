const root = document.getElementById('root');
const img = document.createElement('img');

let randomNumber = Math.floor(Math.random() * 10)

while(randomNumber === 0) {
   randomNumber = Math.floor(Math.random() * 10)
}

img.src = `./images/${randomNumber}.jpg`

root.append(img);