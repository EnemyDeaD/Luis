$(document).ready(function () {

    let modal = $(".modal");
    let modalIcon = $(".modal-icon");
    let modalClose = $("[data-close]");


    //Scroll Month

    $("[data-scroll]").on('click', function (e) {
        e.preventDefault();
        let blockid = $(this).data('scroll');

        let elementOffSet = $(blockid).offset().top;

        $("html, body").animate({
            scrollTop: elementOffSet
        }, 3000);

        console.log(elementOffSet)
    });

    //Modal icon

    
    $("[data-modal]").on('click', function(e) {
        e.preventDefault();

        let modalId = $(this).data('modal');

        $(modalId).addClass('show');


        $("body").addClass('no-scroll');

        setTimeout(function( ) {
            $(modalId).find(".modal-icon").css({
                opacity: "1"
            });
        }, 200)
        
    });



    $(modalClose).on('click', function(e) {
        e.preventDefault();
        let modalParent =  $(this).parents('.modal');


        modalParent.find(".modal-icon").css({
            opacity: "0"
        })

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200)

    });

    $(modal).on('click', function () {

        let $this = $(this);

        $this.find(".modal-icon").css({
            opacity: "0"
        }, 200)


        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
         
    });

    modalIcon.on('click', function (e) {
        e.stopPropagation();
    });


    /*Click*/

    let ptBtn = $("#portfolio_btn");
    let add = $(".portfolio-inner_item_add");

    add.hide();

    ptBtn.on('click', function(e) {
        e.preventDefault();

        add.slideToggle();

    });

    //Burger

    let burger = $("#burger");
    let nav = $("#nav");
    let close = $(".nav-close");

    let more = $(".intro-inner_item_content_button_more");
    let hire = $(".intro-inner_item_content_button_hire");

    burger.on('click', function() {
        nav.addClass('nav_visible');

        if ($(".nav_visible").is(':visible')) {
            burger.css({
               display: "none"
            })


        } 
        else {
            burger.css({
                display: "block"
            });
        }
    });

    close.on('click', function() {
        nav.removeClass('nav_visible');

        if ($(".nav_visible").is(':visible')) {
            burger.css({
               display: "none"
            });
        } 
        else {
            burger.css({
                display: "block"
            });
        }
    });

    //Click element list

    let li = $('ul').children();
    let header = $("#header");
    let headerW;
    

   $(window).on('load resize', function() {

        headerW = header.innerWidth()

        if ( headerW > 870) {
            burger.css({
                display: "none"
            })
        } else {
            burger.css({
               display: "block" 
            })
        }

        
    });

    li.on('click', function() {
        
        $(this).addClass('kk');

        if (li.hasClass('kk')) {
            nav.removeClass('nav_visible');

           
        }

        if ( headerW > 870) {
            burger.css({
                display: "none"
            })
        } else {
            burger.css({
               display: "block" 
            })
        }
        


    });























});