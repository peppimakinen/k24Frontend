// export function showKisu(element) {
//     async function modifyKisut() {
//         try {
//             //fetch
//             const response = await fetch('kisut.json');
//             if (!response.ok) throw new Error('SURKEETA');
//             const images = await response.json();

            // const random = Math.floor(Math.random() * images.length);

            // const name = images[random].name;
            // const description = images[random].description;
            // const address = images[random].address;

//             document.querySelector('img').src = address;
//             document.querySelector('img').alt = name;
//             document.querySelector('figcaption').innerText = description;

//         } catch (error) {
//             console.log('SURKEETA');
//         }

//     }

//     console.log(element)
//     element.addEventListener('click', () => modifyKisut());
// }

export function showKisu(element) {
    async function createKisut() {
        try {
            //fetch
            const response = await fetch('kisut.json');
            if (!response.ok) throw new Error('SURKEETA');
            const images = await response.json();
    
            images.forEach((item) => {
                console.log(`Nimi: ${item.name}`);
            });
    
            const random = Math.floor(Math.random() * images.length);

            const name = images[random].name;
            const description = images[random].description;
            const address = images[random].address;
            
            const cards = document.querySelector('#cards');
            cards.innerHTML = '';
    
            //luodaan figure
            const figure = document.createElement('figure');
            cards.appendChild(figure);
    
            // luodaan kuva
            const kuva = document.createElement('img');
            kuva.src = address;
            kuva.alt = name;
            figure.appendChild(kuva);
    
            // luodaan figcaption
            const kuvateksti = document.createElement('figcaption');
            const node = document.createTextNode(description);
            kuvateksti.appendChild(node);
            figure.appendChild(kuvateksti);
    
        } catch (error) {
            console.log('SURKEETA');
        }
    
    }
    element.addEventListener('click', () => createKisut());
}
