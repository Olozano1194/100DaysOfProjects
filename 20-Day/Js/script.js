const btn = document.getElementById('btn');
const btns = document.querySelectorAll('.container-numbers input');


btn.addEventListener("click", ()=>{
    let select = false;

    btns.forEach(btn => {
        if (btn.classList.contains('selected')) {
            select = true;
            
        }
    });

    if (select) {
        window.location.href= "thank.html"; 
    }else {
        alert('Por favor selecciona al menos un número antes de enviar')
    }
});

btns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        e.target.classList.toggle('selected');
        // = '#959EAC';
    })
});




