


let starbutton = document.getElementById('startsolving');
console.log(starbutton);
let start =document.getElementById('start');
let popup = document.getElementById('topic-tags');
popup.style.display = 'none'
starbutton.addEventListener('click', (e) => {
 popup.style.display = ''
})

let popupExit = document.getElementById('close-tags');
popupExit.addEventListener('click', () => {
    popup.style.display = 'none'
})
let tags = document.getElementById('tags');
tags.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.innerText === 'tagbadge') {
        // console.log('inside');
        e.target.style.background = 'linear-gradient(95deg, #FCC822 0%, #FFCD2E 100%)'
        e.target.nextSibling.style.display = '';
        e.target.nextSibling.style.backgroundColor = 'black';
        e.target.nextSibling.style.color = 'white'
    }
    else if (e.target.innerText === 'close') {
        // console.log( e.target.previousSibling);
        e.target.previousSibling.style.background = '#D1D1D1'
        e.target.style.display = 'none';
    }
}
)
start.addEventListener('click',()=>
{
    location.href='quiztemplate.html';
}
)

