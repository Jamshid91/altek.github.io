window.onload = function() {
  let header = document.querySelector('header');
  let hidden = document.querySelector('.hidden');
  let coruselText = document.querySelector('.corusel__text');
  let coruselList = document.querySelector('.corusel__list')
  let headerText = document.querySelector('.header_text');
  let headerImg = document.querySelector('.header_images');
  let images = document.querySelectorAll('.header_images img');
  let site = document.querySelector('.site');
  let mob = document.querySelector('.mob');
  let web = document.querySelector('.web');

  const body = document.body
  
const [first, second, thrid] = images;
console.log(hidden)

  setTimeout(() => {
    site.classList.add('spanAnim')
  }, 1000);
  setTimeout(() => {
    mob.classList.add('spanAnim')
  }, 2000);
  setTimeout(() => {
    web.classList.add('spanAnim')
  }, 3000);

  window.addEventListener('scroll', () => {
   

    const positionHeaderText = headerImg.getBoundingClientRect().top;
    const positionCoruselText = coruselText.getBoundingClientRect().top;
    
    const screenPositionText = window.innerHeight;

    const screenPosition = window.innerHeight / 2;

 if(screenPositionText> positionHeaderText) {
  
 }

      if(screenPosition > positionCoruselText) {
      coruselText.classList.add('caruselTextAnim')
      $('.corusel__list').addClass('addCoruselList')
    }
     else {
      coruselText.classList.remove('caruselTextAnim')
      $('.corusel__list').removeClass('addCoruselList')
    }

    
  });

  document.addEventListener('scroll', () => {
    
    const positionHeaderText = headerText.getBoundingClientRect().top;
    
    const screenPositionText = window.innerHeight;

    if(screenPositionText > positionHeaderText) {

      setTimeout(() => {
        
      // header.style.display = 'none'
      }, 2000);
      
    }

    
    // else {
    //   body.classList.add('disabledScroll')
    // }
  })
 

      $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
          // $(headerImg).addClass('headerImg')
          // $(first).addClass('leftImg')
          // $(second).addClass('middleImg')
          // $(thrid).addClass('rightImg')
          // $(header).addClass('headerBgc')
          // $(headerText).addClass('headerText')

        } else {
          //   $(headerImg).removeClass('headerImg')
          // $(first).removeClass('leftImg')
          // $(second).removeClass('middleImg')
          // $(thrid).removeClass('rightImg')
          // $(header).removeClass('headerBgc')
          // $(headerText).removeClass('headerText')
          // $('.corusel').removeClass('coruselAnim')
          // $('.nav__list a').removeClass('colorNav')
          // $('.nav__button ').removeClass('colorButton')
          // $(coruselText).removeClass('caruselTextAnim')
        }
      });


    window.addEventListener('scroll', () => {
      let footer = document.querySelector('footer');
      let counterBtn = document.querySelector('.owl-nav');
      let line = document.querySelector('.line');
    
      const positionFooter = counterBtn.getBoundingClientRect().top;
  
      const screenPosition = window.innerHeight / 1.45;
  
      
      if(screenPosition > positionFooter) {
        footer.classList.add('animFooter');
        setTimeout(() => {
          line.classList.add('lineAnim')
        }, 1500);
      }
       else {
        footer.classList.remove('animFooter')
        // line.classList.remove('lineAnim')
        setTimeout(() => {
          line.classList.remove('lineAnim')
        }, 1000);
      }
    })
}

