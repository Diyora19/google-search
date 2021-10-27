
document.querySelector('button').onclick = function(){
    let input = document.querySelector('input').value;
    let url = 'https://www.google.com/search?q=' + input;

    window.open(url);

}


// elementlar da funksiyalarni ishlatish

// function func(){}
// element.onclick = function(){}
// element.addEventListener('click', function(){})
