const r1 = document.getElementById('1');
const r2 = document.getElementById('2');
const r3 = document.getElementById('3');
const r4 = document.getElementById('4');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

const allR = document.querySelectorAll('input')
console.log(allR);

const button = document.querySelector('button')

const answerP = document.querySelector('.answer')

const map = new Map();

map.set('західно-український', 'західноукраїнський');
map.set('східно-слов\'янський', 'східнослов\'янський');
map.set('крипсько-татарський', 'кримськотатарський');
map.set('радіо-фізичний', 'радіофізичний');
map.set('восьми-градусний', 'восьмиградусний');
map.set('вищезгаданий', 'вище згаданий');
map.set('високо авторитетний', 'високоавторитетний');
map.set('шикоро відомий', 'широковідомий');
map.set('діаметральнопротилежний', 'діаметрально протилежний');
map.set('послідовно-миролюбний', 'послідовно миролюбний');
map.set('професійно-орієнтований', 'професійно орієнтований');
map.set('різкоокреслений', 'різко окреслений');
map.set('суспільно-корисний', 'суспільно корисний');
map.set('суспільно-необхідний', 'суспільно необхідний');
map.set('суспільно-небезпечний', 'суспільно небезпечний');
map.set('матеріально-відповідальний', 'матеріально відповідальний');
map.set('науково-обгрунтований', 'науково обгрунтований');
map.set('навчально виховний', 'навчально-виховний');
map.set('культурно освітній', 'культурно-освітній');
map.set('всесвітньоісторичний', 'всесвітньо-історичний');
map.set('народновизвольний', 'народно-визвольний');
map.set('літературнохудожній', 'літературно-художній');
map.set('світлорожевий', 'світло-рожевий');
map.set('червого-гарячий', 'червоногарячий');
map.set('кислосолодкий', 'кисло-солодкий');
map.set('золото-гарячий', 'золотогарячий');
map.set('лимонно-кислий', 'лимоннокислий');
map.set('молочно-кислий', 'молочнокислий');
map.set('біло-сніжний', 'білосніжний');
map.set('сніжнобілий', 'сніжно-білий');
map.set('північносхідний', 'північно-східний');
map.set('фізикотехнічний', 'фізико-технічний');
map.set('воєнностратегічний', 'воєнно-стратегічний');





let ansver;
let ansverText;


const randomOptions = function(){
    p1.style.backgroundColor = '';
    p2.style.backgroundColor = '';
    p3.style.backgroundColor = '';
    p4.style.backgroundColor = '';
    allR.forEach((x, i, node) => x.checked = false)
    let mapKeys = map.keys();
    let mapValues = map.values();
    // let mapValues2 = map.values();
    // let mapValues3 = map.values();
    // let mapValues4 = map.values();
    let mapSize = map.size
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    let arrVal = [];
    for(let i = 0; i<mapSize; i++){
        arrVal.push(mapValues.next().value)
    }
    let key = arrKeys.splice(Math.floor(Math.random() * mapSize), 1);
    let val1 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val2 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);
    let val3 = arrVal.splice(Math.floor((Math.random() * arrVal.length)), 1);

    let determiner = Math.random()
    if(determiner < 0.25){
        p1.textContent = val1;
        p2.textContent = key;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 2;
    }
    if(determiner > 0.25 && determiner < 0.5){
        p1.textContent = key;
        p2.textContent = val1;
        p3.textContent = val2;
        p4.textContent = val3;
        ansverText = key;
        ansver = 1;
    }
    if(determiner > 0.5 && determiner < 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = key;
        p4.textContent = val3;
        ansverText = key;
        ansver = 3;
    }
    if(determiner > 0.75){
        p1.textContent = val1;
        p2.textContent = val2;
        p3.textContent = val3;
        p4.textContent = key;
        ansverText = key;
        ansver = 4;
    }

}
const test = function(e){
    e.preventDefault()
    let mapSize = map.size
    let mapKeys = map.keys();
    let arrKeys = [];
    for(let i = 0; i<mapSize; i++){
        arrKeys.push(mapKeys.next().value)
    }
    if(allR[ansver-1].checked){
        console.log('True');
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2000)
        // allR[ansver-1].checked = false
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
    } else{
        let check;
        allR.forEach((x, i, node) => {
            if(x.checked){
                check = x.value
            }
        });
        if(check == 1){
            p1.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 2){
            p2.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 3){
            p3.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(check == 4){
            p4.style.backgroundColor = 'rgb(248, 97, 97)'
        }
        if(ansver == 1){
            p1.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 2){
            p2.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 3){
            p3.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        if(ansver == 4){
            p4.style.backgroundColor = 'rgb(137, 255, 91)'
        }
        ansverText = ansverText[0];
        let x = `${ansverText} - ${map.get(ansverText)}`
        answerP.textContent = x;
        setTimeout(randomOptions, 2000)
        
    }
}

button.addEventListener('click', test)
randomOptions()

