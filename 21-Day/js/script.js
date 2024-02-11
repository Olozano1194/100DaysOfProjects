const iconMenu = document.querySelector('.icon-menu');
const iconShare = document.querySelector('.icon');

iconShare.addEventListener('mouseover', () => {
    iconMenu.style.display = 'flex';
});

iconMenu.addEventListener( "mouseout", (e)=>{ 
    if (!e.relatedTarget || !e.relatedTarget.classList.contains('icon-menu')) {
        iconMenu.style.display = 'none';
        
    }
});