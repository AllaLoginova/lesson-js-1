// Задача 1

const blockBtn = document.querySelector('#add-block-btn');
const blockContainer = document.querySelector('#block-container');

blockBtn.addEventListener('click', () => {
    const block = document.createElement('div');

    block.className = 'block';
    block.style.backgroundColor = 'rgb(' + 
        `${Math.floor(Math.random() * 256)}, ` +
        `${Math.floor(Math.random() * 256)}, ` +
        `${Math.floor(Math.random() * 256)})`

    block.addEventListener('click', () => {
        block.remove();
    
});


    blockContainer.append(block);
});

// console.log(document.body.children);
// console.log(getChildren(document.body));

// function getChildren(element, spaces=0) {
//     let result = '';
//     for (let el of element.children) {
//         result += ' '.repeat(spaces) + el.nodeName + '\n';
//         if (el.hasChildNodes()) {
//             result += getChildren(el, spaces + 2);
//         }
//     }

//     return result;
// }



