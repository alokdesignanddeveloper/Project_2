const humberger = document.getElementById('humberger')

const menubar = document.getElementById('menubar')

humberger.addEventListener('click',() => {

console.log(humberger.classList);

if (humberger.classList.contains('off'))
    {

        // humberger.innerText = 'NAV OFF';
        humberger.classList.remove('off');
        humberger.classList.add('on');
        menubar.classList.remove('hidden');
        menubar.classList.add('block');
    }

else {

    // humberger.innerText = 'NAV ON';
    console.log('class list is on');
    humberger.classList.remove('on');
    humberger.classList.add('off');
    menubar.classList.remove('flex');
    menubar.classList.add('hidden');

     }

})