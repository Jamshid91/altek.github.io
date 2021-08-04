window.onload = function() {
  let header = document.querySelector('header');
  let nav = document.querySelector('nav');
  let logoNav = document.querySelector('.nav__logo path');
  let hidden = document.querySelector('.hidden');
  let corusel = document.querySelector('.corusel');
  let coruselItem = document.querySelector('.corusel__item');
  let coruselText = document.querySelector('.corusel__text');
  let coruselList = document.querySelectorAll('.corusel__list')
  let headerText = document.querySelector('.header_text');
  let headerImg = document.querySelector('.header_images');
  let images = document.querySelectorAll('.header_images img');
  let backImg = document.querySelector('header .circle_img .img');
  let site = document.querySelector('.site');
  let mob = document.querySelector('.mob');
  let web = document.querySelector('.web');
  let advertisings = document.querySelectorAll('.advertising div')
  let headerTexts = document.querySelectorAll('.header_text a')

  const body = document.body
  
const [first, second, thrid] = images;
const [websiteText, webmobText, webappText] = headerTexts;
const [website, webmob, webapp] = advertisings;

websiteText.addEventListener('mouseover', () => {
  website.style.display = 'block'
});
websiteText.addEventListener('mouseout', () => {
  website.style.display = 'none'
});

webmobText.addEventListener('mouseover', () => {
  webmob.style.display = 'block'
});
webmobText.addEventListener('mouseout', () => {
  webmob.style.display = 'none'
});

webappText.addEventListener('mouseover', () => {
  webapp.style.display = 'block'
});
webappText.addEventListener('mouseout', () => {
  webapp.style.display = 'none'
});

  setTimeout(() => {
    site.classList.add('spanAnim')
  }, 1000);
  setTimeout(() => {
    mob.classList.add('spanAnim')
  }, 2000);
  setTimeout(() => {
    web.classList.add('spanAnim')
  }, 3000);


     
 

      $(window).on('scroll', function () {
        
        if ($(window).scrollTop()) {
          $(header).addClass('headerFixed')
          $(first).addClass('leftImg')
          $(second).addClass('middleImg')
          $(thrid).addClass('rightImg')

          setTimeout(() => {
          $(headerText).addClass('headerText')
          $(headerImg).addClass('headerImg')   
          }, 500);

          setTimeout(() => {
          $(backImg).addClass('animBackImg')
          }, 800);

          setTimeout(() => {
            $(header).addClass('headerBgc')  
          }, 1000);

          setTimeout(() => {
            $(header).addClass('headerNone')  
            $('.nav__list a').addClass('colorNav')
            $('.nav__button ').addClass('colorButton')
            $('nav').addClass('navBgc')
            logoNav.attributes[1].value = '#F13651'
          }, 1200);

          setTimeout(() => {
            $(corusel).addClass('coruselAnim')  

            // setTimeout(() => {
            //   $(coruselItem).addClass('coruselItem')
            // }, 1000);
          }, 1500);
          
        } else {
          $(header).removeClass('headerFixed')
          $(first).removeClass('leftImg')
          $(second).removeClass('middleImg')
          $(thrid).removeClass('rightImg')

          setTimeout(() => {
            $(headerText).removeClass('headerText')
            $(headerImg).removeClass('headerImg')
          }, 500);

          setTimeout(() => {
            $(backImg).removeClass('animBackImg')
            }, 800);

          
            setTimeout(() => {
              $(header).removeClass('headerBgc')  
            }, 1000);

            setTimeout(() => {
              $(header).removeClass('headerNone') 
              $('.nav__list a').removeClass('colorNav')
              $('.nav__button ').removeClass('colorButton')
              $('nav').removeClass('navBgc')
              logoNav.attributes[1].value = '#fff'
            }, 1200);

            setTimeout(() => {
              $(corusel).removeClass('coruselAnim')  
            }, 1500);

            $(nav).removeClass('navHidden')
        }
      });



      window.addEventListener('scroll', () => {
        const positionCoruselText = coruselText.getBoundingClientRect().top;
        const positionCoruselItem = coruselItem.getBoundingClientRect().top;
        
        const screenPositionCorusel = window.innerHeight / 2;
        const screenPositionCoruselItem = window.innerHeight / 1.5;

        if(screenPositionCorusel > positionCoruselText) {
          coruselItem.classList.add('coruselItem')
        } else {
          coruselItem.classList.remove('coruselItem')
        }

        if(screenPositionCoruselItem > positionCoruselItem) {
          coruselText.classList.add('caruselTextAnim')
          coruselItem.classList.add('coruselItem')
          setTimeout(() => {
            nav.classList.add('navHidden')
          }, 1000);

          coruselList.forEach(corusel => {
            corusel.classList.add('addCoruselList')
          })
          coruselItem.classList.add('beforeCoruselItem')

        } else {
          coruselText.classList.remove('caruselTextAnim')
          // nav.classList.remove('navHidden')
          coruselList.forEach(corusel => {
            corusel.classList.remove('addCoruselList')
          })
        }

      })



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






