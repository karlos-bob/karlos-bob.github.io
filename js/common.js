$(function() {
    //при нажатии на кнопку с id="save"
    $('#save').click(function() {
        //переменная formValid
        var formValid = true;
        //перебрать все элементы управления input
        $('input').each(function() {
            //найти предков, которые имеют класс .form-group, для установления success/error
            var formGroup = $(this).parents('.form-group');
            //найти glyphicon, который предназначен для показа иконки успеха или ошибки
            var glyphicon = formGroup.find('.form-control-feedback');
            //для валидации данных используем HTML5 функцию checkValidity
            if (this.checkValidity()) {
                //добавить к formGroup класс .has-success, удалить has-error
                formGroup.addClass('has-success').removeClass('has-error');
                //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
            } else {
                //добавить к formGroup класс .has-error, удалить .has-success
                formGroup.addClass('has-error').removeClass('has-success');
                //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
                glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                //отметить форму как невалидную
                formValid = false;
            }
        });
        //если форма валидна, то
        if (formValid) {
            //сркыть модальное окно
            $('#myModal').modal('hide');
            //отобразить сообщение об успехе
            $('#success-alert').removeClass('hidden');
        }
    });

});


// var slideout = new Slideout({
//         'panel': document.getElementById('panel'),
//         'menu': document.getElementById('menu'),
//         'side': 'right',
//         'padding':98,
//         'easing': 'ease-out',
//         // 'tolerance': 270
        
//       });

//       // Toggle button
//     document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
//         slideout.toggle();

//       });

//     document.querySelector('.js-slideout-toggle2').addEventListener('click', function() {
//         slideout.close();

//       });

//     function close(eve) {
//       eve.preventDefault();
//       slideout.close();
//     }

//     slideout
//       .on('beforeopen', function() {
//         this.panel.classList.add('panel-open');
//       })
//       .on('open', function() {
//         this.panel.addEventListener('click', close);
//       })
//       .on('beforeclose', function() {
//         this.panel.classList.remove('panel-open');
//         this.panel.removeEventListener('click', close);
//       });


  // $(function() {
  //   $('#my-menu').mmenu({
  //       extensions: ['effect-menu-slide', 'pagedim-black'],
  //       offCanvas: {
  //           position: 'right'
  //       },
  //          "slidingSubmenus": false,
  //   });

    // var API = $("#my-menu").data( "mmenu" );
    
    // API.bind('opening.mm', function($panel) {
    //     console.log("TEST");
    //     $('.hamburger').addClass('is-active');
    // }).bind('closing.mm', function() {
    //      $('.hamburger').removeClass('is-active');
    // })

        // var check;
        
        // $(function() {
        //     $('#menu-pull').click(function() {
        //         $('#menu-pull').addClass( "is-active" );
        //         check = 1;
        //         console.log(check);
        //     });
        // });
           
        //    $(function () {
        //     if ( check = 1)  {
        //     $('#menu-pull').click(function() {
        //         console.log("Реагирует");
        //         $('#menu-pull').removeClass( "is-active" );
        //         check = 0;
        //         });
        //     };
        //     console.log(check);
        // });
         

   // });




 

// $(document).ready(function () {
//
//       $(function() {
//     var $menu = $('#my-menu').mmenu({
//         extensions: ['effect-menu-slide', 'pagedim-black'],
//         offCanvas: {
//             position: 'right'
//         },
//         "slidingSubmenus": false,
// });
//     var icon = $("#menu-pull");
//     var api = $("#my-menu").data( "mmenu" );
//
//      $("#menu-pull").on( "click", function() {
//             api.open();
//
//             api.bind( "opened", function() {
//         $('#menu-pull').addClass( "is-active" );
//        // $icon.on( "click", function() {
//        //    api.close();
//        // });
//    });
//
//     api.bind( "closed", function() {
//       setTimeout(function() {
//          $icon.removeClass( "is-active" );
//       }, 100);
//       $icon.on( "click", function() {
//          api.open();
//       });
//    });
//         });
//
// });
//     $("#popup").magnificPopup();
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        nav:true,
        navText:false,
        dots: true,
        pagination: true,
        lazyLoad: true,
        autoplay:true,
        animateOut: 'fadeOut',
        slideSpeed : 200,
        autoplayTimeout: 9000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    if (screen.width <= 767) {
        $('.dropdown-toggle').onclick(
            function(){ $('.dropdown').addClass('open') },
            function(){ $('.dropdown').removeClass('open') })
    }
    else {
            $('.dropdown').hover(
                function(){ $(this).addClass('open') },
                function(){ $(this).removeClass('open') }
            )
        }
    });






// });


