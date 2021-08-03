window.onload = function() {
        let header = document.querySelector('header');
        let nav = document.querySelector('nav');
        let logoNav = document.querySelector('.nav__logo path');
        let navBtn = document.querySelector('.nav__button');
        let navList = document.querySelectorAll('.nav__list a');
        let backImg = document.querySelector('header .circle_img .img');
        let hidden = document.querySelector('.hidden');
        let coruselText = document.querySelector('.corusel__text');
        let coruselItem = document.querySelector('.corusel__item');
        let coruselList = document.querySelectorAll('.corusel__list')
        let headerText = document.querySelector('.header_text');
        let headerImg = document.querySelector('.header_images');
        let images = document.querySelectorAll('.header_images img');
        let site = document.querySelector('.site');
        let mob = document.querySelector('.mob');
        let web = document.querySelector('.web');
      
        const body = document.body
        const [first, second, thrid] = images;

        
       

        setTimeout(() => {
          site.classList.add('spanAnim')
        }, 1000);
        setTimeout(() => {
          mob.classList.add('spanAnim')
        }, 2000);
        setTimeout(() => {
          web.classList.add('spanAnim')
        }, 3000);

        document.addEventListener('scroll', scrollPage);


        function scrollPage() {

            const positionHeader = headerText.getBoundingClientRect().top;
            const positionCorusel = coruselItem.getBoundingClientRect().top;
        
            const screenPosition = window.innerHeight / 1.75;
            const screenPositionCorusel = window.innerHeight;

            let addAnimTextImg = function() {
              headerText.classList.add('headerText')
              headerImg.classList.add('headerImg')
            }

            if(screenPosition > positionHeader) {


              setTimeout(() => {
                nav.style.background = "white"
                logoNav.attributes[1].value = 'red'
                navBtn.classList.add('colorButton')
                navList.forEach(text => {
                  text.classList.add('colorNav')
                })
              }, 3000);

                  header.classList.add('headerFixed')
                  first.classList.add('leftImg')
                  second.classList.add('middleImg')
                  thrid.classList.add('rightImg')


                setTimeout(addAnimTextImg,  900);  


                  
                  setTimeout(() => {
                    backImg.classList.add('animBackImg')
                  }, 1200);

                  setTimeout(() => {
                      header.classList.add('headerBgc')  
                  }, 2000);



                setTimeout(() => {
                      header.classList.add('headerNone') 
                      }, 3000);
            }

            if(screenPositionCorusel > positionCorusel) {
              coruselText.classList.add('caruselTextAnim')
              coruselList.forEach(list => {
                list.classList.add('addCoruselList')
              })
              

            } else {
              coruselText.classList.remove('caruselTextAnim')
            }

        }

        
      //   $(window).on('scroll', function (e) { 
      //     if ($(window).scrollTop()) {

      //         $(header).addClass('headerFixed')

      //         // $(headerImg).addClass('headerImg')
      //         $(first).addClass('leftImg')
      //         $(second).addClass('middleImg')
      //         $(thrid).addClass('rightImg')

      //   let headerTextImg = setTimeout(() => {
      //   $(headerText).addClass('headerText')
      //   $(headerImg).addClass('headerImg')
      //   }, 900);  


        
      //   let animBackImg =  setTimeout(() => {
      //     $(backImg).addClass('animBackImg')
      //   }, 1200);

      //   var headerBgc =  setTimeout(() => {
      //       $(header).addClass('headerBgc')  
      //   }, 2000);



      //   var headerNone =  setTimeout(() => {
      //       $(header).css('display', 'none') 
      //       }, 3000);

      //         // $(header).addClass('headerBgc')
      //         // $(headerText).addClass('headerText')
      //         $('.nav__list a').addClass('colorNav')
      //         $('.nav__button ').addClass('colorButton')
    
      //       } else {
      //         clearTimeout(headerNone)
      //           // $(headerText).removeClass('headerText')
      //           // $('.corusel').removeClass('coruselAnim')
      //           // $('.nav__list a').removeClass('colorNav')
      //           // $('.nav__button ').removeClass('colorButton')
      //           // $(coruselText).removeClass('caruselTextAnim')
      //           // $(header).css('display', 'block')
      //           // $(headerImg).removeClass('headerImg')
      //           $(first).removeClass('leftImg')
      //           $(second).removeClass('middleImg')
      //           $(thrid).removeClass('rightImg')
      //           $(header).removeClass('headerFixed')
      //           $(header).removeClass('headerBgc')
      //       }
      // } )

       
}
