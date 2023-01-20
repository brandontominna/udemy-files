


const container = document.querySelector('#container')
// const newImg = document.createElement('img')

// selecting element, then creating image element, 

// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

// setting image source, 
// append it to container 

// container.appendChild(newImg)


// now need to make 100 at them, and replace the number in the src
// with a different one 

// set the link to a variable 
let baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i= 1; i <= 151; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const label = document.createElement('span')
    label.innerText = `#${i}`;
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}

// for each i, make a new empty image,
// then make the image source the base url, change the i, and add .png
// then append it to the container/element 


// now to add numbers near the images, 

