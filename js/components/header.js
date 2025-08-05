window.addEventListener('scroll', function () {
    const header = document.getElementById('header')
    if (window.scrollY>10) {
        header.classList.add('scrolled')
        console.log('scroll');
          
    }else{
        header.classList.remove('scrolled')
    }
})