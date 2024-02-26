function randomRBG(){
    const r = Math.floor(Math.random() * 256);    
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rbg(${r},${b}, ${g})`
}

const letters = document.querySelectorAll('.letter');
const inervalId = setInterval(function(){
    for(let letter of letters){
        letter.computedStyleMap.color = randomRBG();
    }
},2000);