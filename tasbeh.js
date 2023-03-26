const tasbehAytuvchi = document.querySelector('.tasbeh--aytuvchi');
const tasbehRaqam = document.querySelector('.raqam')
const asosiyBtn = document.querySelector('.asosiy')
const tozalovchiBtn = document.querySelector('.tozalovchi')

let start = `🌙Tasbeh ayting dindoshim🌙`
tasbehAytuvchi.innerHTML = start

let result = 0;
tasbehRaqam.innerHTML = result;

function result1 () {
    tasbehRaqam.textContent = result;
}

asosiyBtn.addEventListener('click', () => {
    result ++
    result1()
    if(result == 1) {
        return tasbehAytuvchi.innerHTML = `1. ☪️Cубханаллоҳ`
    } 
    
    if(result == 34) {
        return tasbehAytuvchi.innerHTML = `2. ☪️Алхамдулиллах`  
    }
    
    if (result == 67) {
        return tasbehAytuvchi.innerHTML = `3. ☪️Аллоху Акбар`
    }

    if(result == 99) {
        return result = 0
    }
})

tozalovchiBtn.addEventListener('click', () => {
    result = 0;
    result1()
})


