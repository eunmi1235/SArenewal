$(function(){
    console.log(window.innerWidth);  
    
   /* window.addEventListener('resize', (e) => {   
        const width = e.target.innerWidth;
        if (width > 1280) {   
            console.log(23423);  
            
        } else if (width < 720) {
            // 
            console.log(8687);  
        }
    });
    */ 
    const visualSwiper = new Swiper('.visual-swiper', {
        effect: 'fade',
        autoplay: {
            // speed : 2000,
            delay:5000,
            disableOnInteraction:false,
        },
        pagination: {
            el: '.visual-pagaination',
            type:'fraction',
        },
        breakpoints: {
            1023:{
                pagination: {
                    el: '.visual-pagaination',
                    type:'bullets',
                    clickable:true,
                    clickableClass:'.visual-pagaination',  
                },
            },
        },
        navigation: {
            nextEl: '.slide-btnright',
            prevEl: '.slide-btnleft',
        },
        on: {
            init: function () {
                $(".swiper-progressbar").removeClass("animate");
                $(".swiper-progressbar").removeClass("active");
                $(".swiper-progressbar").eq(0).addClass("animate");
                $(".swiper-progressbar").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-progressbar").removeClass("animate");
                $(".swiper-progressbar").removeClass("active");
                $(".swiper-progressbar").eq(0).addClass("active");
            },
            slideChangeTransitionEnd: function () {
                $(".swiper-progressbar").eq(0).addClass("animate");
            },
        },
        loop:true,
    });
    
    
    // 상단텍스트공지 
    // const beltNoticeSwiper = new Swiper(".belt-swiper", { 
    //     autoplay: { 
    //         delay: 1000,  
    //     },  
    //     initialSlide : 1,
    //     allowTouchMove:false, /* 마우스 및 손가락 터치 시 슬라이드 이동 가능여부 */
    //     touchMoveStopPropagation: true,   /* touchmove 중지 */
    //     direction:'vertical',
    //     loop: true,   
    // });   
    
    /*Auction*/ 
    /*auction Tab 버튼*/ 
    $('.auctionTab-btn').click(function(){ 
        const IngTab = $(this).index();  
        
        $('.auctionTab-btn').removeClass('on'); 
        $('.auctionTab-contents').removeClass('on');   
        
        $('#AllAuction').hide(); 
        $('#MoreAuction').show(); 
        
        $(this).addClass('on');
        $(".auctionTab-contents").eq(IngTab).addClass('on');  
    });
    
    /* auction thumbnail hover 기능 */ 
    $('.auction-thumbbox').mouseenter(function(){  
        $('.auction-thumbbox>.auction-thumb').removeClass('on'); 
        $(this).children('.auction-thumb').addClass('on');  
    });
    $('.auction-thumb').mouseleave(function(){
        $(this).removeClass('on'); 
    });
    //auction haert 버튼 
    $('.wish_heart').click(function(){
        $(this).toggleClass('on');
    });
    //auction 더보기 버튼  
    $('#AllAuction').hide();
    $('#MoreAuction').click(function(){  
        $('#AllAuction').show();  
        $('#MoreAuction').hide(); 
        $(".auctionTab-contents.on").css({
            'height':'100%',
            'padding-bottom': '0', 
        });  
    });  
    
    const upcomingSwiper = new Swiper(".upcoming-swiper", {
        slidesPerView: 'auto',
        breakpoints: {
            1439: {
                slidesPerView: 'auto',
                //spaceBetween: 20,
            },
            1023: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                loopedSlides: 1,
            },
        },
    });
    
    /* 띠배너 */
    const platFormSwiper = new Swiper('.platform-swiper', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        initialSlide : 1,
        slidesPerView: 1,
        spaceBetween: 10,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.platform-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.platformBtn-right',
            prevEl: '.platformBtn-left',
        },
        loop: true,
        breakpoints : {
            1023: {
                CenteredSlidesBounds:true,
                centeredSlides:true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.platform-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
        },
    });
    
    
    /* video */ 
    const videoSwiper = new Swiper(".video-swiper", {  
        slidesPerView: 6, 
        spaceBetween: 20, 
        loop:true,
        loopFillGroupWithBlank: true, 
        navigation: {
          nextEl: ".videoBtn-right", 
          prevEl: ".videoBtn-left",
        },
        breakpoints:{ 
            1919: {
                slidesPerView: 4, 
                spaceBetween: 20,   
            },
            1279: { 
                slidesPerView: 3, 
                spaceBetween: 20,   
            }, 
            1023: {
                slidesPerView: 'auto',     
                spaceBetween: 20,  
                loopedSlides:1,
                loop:false,
                loopFillGroupWithBlank: false,
            },   
        } 
    });  
    //video hover 
    $('.video-thumb').mouseenter(function(){ 
        let videoHover = $(this).index();
        $('.video-thumbHover').removeClass('on');     
        $(this).children('.video-thumbHover').eq(videoHover).addClass('on');    
    });  
    $('.video-thumbHover').mouseleave(function(){
        $(this).removeClass('on');  
    });
    /* video 리스트*/
    $('.video-btn').click(function(){
        $('.video-blackBg').fadeIn();
    });
    
    /* 인스타 팝업 */ 
    $('.instar-btn').click(function(){
        const instar = window.open('https://www.instagram.com/', name="_blank", width="700");     
    });
    
    /* video 팝업 */
    $('.video-closebtn').click(function(){
        $('.video-blackBg').fadeOut('fast'); 
    }); 
    
    /*뉴스레터 신청 관련*/ 
    $('#subscript_check').click(function(){ 
        $('.newsAgree-close').click(function(){
            $('.newsletter-terms').fadeOut();
            $('.newsletter-blackBg').fadeOut('fast');
        });
        $('.newsletter-terms').fadeIn();
        $('.newsletter-blackBg').fadeIn('fast');
    }); 
    
    $('.subscriptBtn').click(function(){ 
        $('.newsAgree-comfirmbtn').click(function(){
            $('.newsletter-comfirmbox').fadeOut(); 
            $('.newsletter-blackBg').fadeOut('fast');
        });
        $('.newsletter-comfirmbox').fadeIn();
        $('.newsletter-blackBg').fadeIn('fast');
    }); 
    
    /* 메인 레이어 팝업 */
    $('.main-popup-img').hide();
    $('.main-popup-txt').hide(); /* flexbox 처리로 hide */  
    $('.main-popup-img.on').show();
    $('.main-popup-txt.on').show();    
    $('.main-popup-close, .main-popupBg').off('click'); 
    $('.main-popup-close, .main-popupBg').click(function (){
        $('.main-popupbox').addClass('down');
        $('.main-popupBg').fadeOut('1000', function(){
            $(this).removeClass('on');
            $('.main-popupwrap').removeClass('on');
            $('body').css('overflow','visible');  
        });  
    });  
    
    //오늘 하루 그만보기 기능.
    $('#main_popup_today_stop_btn').on('click', function(){
        closeToday('main-popup'); 
    });  
});

/* scroll top */
$('.scroll-top').off('click'); 
$('.scroll-top').click(function () {
    $('html, body').animate({scrollTop  : '0'}, 700);
}); 

/* 스크롤시 scroll top btn 나오게 함. */
const initHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > initHeight || document.documentElement.scrollTop > initHeight) {
        document.querySelector('.scroll-top').classList.add('show');
    } else {
        document.querySelector('.scroll-top').classList.remove('show');
    }
});

/* pc 다크모드 */
$('.darkmodeBg').click(function () {

    $('*').toggleClass('dark');

    $('.auctionTab-btn').click(function () {
        const darkIngTab = $(this).index();
        $('.auctionTab-btn').removeClass('dark');
        $('.auctionTab-contents').removeClass('dark');

        $(this).addClass('dark');
        $(".auctionTab-contents").eq(darkIngTab).addClass('dark');
    });

    $('.darktxt').text('다크모드로 보기');
    $('.darktxt.dark').text('라이트모드로 보기');
    $('.darktxt-en').text('Dark Mode');
    $('.darktxt-en.dark').text('Light Mode');

    const theme = localStorage.getItem('theme');
    if (theme) {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    } 
}); 
/* mobile 다크모드 */
$('.modebox').click(function () {
    if ($('.mode-toggle>input').is(":checked")) {
        $('*').addClass('dark');
    } else {
        $('*').removeClass('dark'); 
    }

    const theme = localStorage.getItem('theme');
    if (theme) {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
/* 다크모드 새로고침 시 */
window.addEventListener('DOMContentLoaded', () => {
    // console.log("theme ", localStorage.getItem('theme'));

    $('*').toggleClass(localStorage.getItem('theme'));

    $('.auctionTab-btn').click(function () {
        const darkIngTab = $(this).index();
        $('.auctionTab-btn').removeClass('dark');
        $('.auctionTab-contents').removeClass('dark');

        $(this).addClass('dark');
        $(".auctionTab-contents").eq(darkIngTab).addClass('dark');
    });

    $('.darktxt').text('다크모드로 보기');
    $('.darktxt.dark').text('라이트모드로 보기');
    $('.darktxt-en').text('Dark Mode');
    $('.darktxt-en.dark').text('Ligth Mode');

    $('.mode-toggle>input').addClass(localStorage.getItem('theme'));
});  
/* 다크모드 버튼 hover */
$('.darkmodeBg').hover(function () {
    $('.darkmode').toggleClass('active');
}, function () {
    $('.darkmode').toggleClass('active');
});
$('.darkmodeBg.dark').hover(function () {
    $('.darkmode.dark').toggleClass('active');
}, function () {
    $('.darkmode.dark').toggleClass('active');
});

/* main에서만 사용되는 */
if (matchMedia("all and (min-width: 1024px)").matches) {
    /* visual swiper hover 추가 */
    $('.visual-swiper > .swiper-wrapper,.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').off('mouseenter');
    $('.visual-swiper > .swiper-wrapper, .swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').on('mouseenter' ,function(){
        $(this).hover(function(){
            $('.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').css({
                "background-color": "rgba(0,0,0,0.3)",
                "border":"0",
                "border-radius": "100%",
                "display": "flex",
                "align-items": "center",
                "justify-content": "center", 
            }); 
            //$('.swiper-button-prev.slide-btnleft').css("left","40px");   
        }); 

        $('.visual-swiper > .swiper-wrapper').on('mouseleave', function(){
            $('.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').css("background-color",'transparent');
        });
    });  
 
    /* 메인팝업 pc 없음 */
    $('.main-popupBg').removeClass('on');
    $('.main-popupwrap').removeClass('on'); 
//    $('.main-popupbox').addClass('down');
//    $('.main-popupBg').fadeOut('1000', function(){ 
//        $(this).removeClass('on');
//        $('.main-popupwrap').removeClass('on'); 
//        $('body').css('overflow','visible');    
//    });       
    
    /* platform */
    $('.platform-img.pc-ver').show();   
    $('.platform-img.m-ver').hide();   
} else {
    /* visual swiper hover none */ 
    $('.visual-swiper > .swiper-wrapper, .swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').off('mouseenter'); 
    /* 메인팝업 mobile 있음 */
    $('.main-popupBg').addClass('on'); 
    $('.main-popupwrap').addClass('on'); 
    
    /* 띠배너 beltbanner */
    $('.header_beltbox.on').show(function () {
        $('.main-contents').css('margin-top', '100px');
        $('.m-gnbmenu').click(function(){
            $('.submenuBg').css({'top':'0'});    
        });
    });
    $('.beltclose-btn').click(function () {
        $('.main-contents').css('margin-top', '56px');
        $('.m-gnbmenu').click(function(){
            $('.submenuBg').css({'top':'0'});
        }); 
    });

    if($('.main-popupBg').hasClass('on')){
         $('body').css({'overflow':'hidden'});
    }
    $('main-popupBg').toggleClass('on');
    
    /* platform */
    $('.platform-img.pc-ver').hide();    
    $('.platform-img.m-ver').show(); 
}


/* 반응형 reize 추가 */
$(window).resize(function(){ 
    /* gnb */
    if (matchMedia("all and (min-width: 1024px)").matches) {
        /* 쿠키가 있을 때 dim 없는  main 레이어팝업 */
        $('.main-popupBg').removeClass('on');
        
        /* 반응형 visual margin-top 조정 */ 
        if($('.header_beltbox').hasClass('on')) {
            $('.main-contents').css({'margin-top': '162px'});
        } else {
            $('.main-popupBg').removeClass('on');
            $('.main-contents').css({'margin-top': '102px'});
        }  

        /* visual swiper hover 추가 */
        $('.visual-swiper > .swiper-wrapper,.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').off('mouseenter');
        $('.visual-swiper > .swiper-wrapper, .swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').on('mouseenter' ,function(){
            $(this).hover(function(){
                $('.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').css({
                    "background-color": "rgba(0,0,0,0.3)",
                    "border":"0",
                    "border-radius": "100%",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center", 
                }); 
                //$('.swiper-button-prev.slide-btnleft').css("left","40px");   
            }); 

            $('.visual-swiper > .swiper-wrapper').on('mouseleave', function(){
                $('.swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').css("background-color",'transparent');
            });
        });  
    } else {
        /* 쿠키가 없을 때 dim 있는 main 레이어팝업 */
        if ($('.main-popup-txt, .main-popup-img').hasClass('on')) {    
            $('.main-popupBg').addClass('on');   
        }
        /* 쿠키 상관없이 그냥 닫았을 때 resize */
        if($('.main-popupbox').hasClass('down')){ /* down */
            $('.main-popupBg').removeClass('on');
            $('.main-popupwrap').removeClass('on'); 
        } 

        /* 띠배너 beltbanner */
        $('.header_beltbox.on').show(function () {
            $('.main-contents').css('margin-top', '100px');
            $('.m-gnbmenu').click(function(){
                $('.submenuBg').css({'top':'-43px'});
            });
        }); 
        $('.beltclose-btn').click(function () {
            $('.main-contents').css('margin-top', '56px');
            $('.m-gnbmenu').click(function() {
                $('.submenuBg').css({'top':'0'});
            });
        });
        
        /* visual hover none */
        $('.visual-swiper > .swiper-wrapper, .swiper-button-next.slide-btnright, .swiper-button-prev.slide-btnleft').off('mouseenter'); 
        $('.visual-swiper > .swiper-wrapper').off('mouseleave');
    };  
    
    /* visual */
    const visualSwiper = new Swiper('.visual-swiper', {
        effect: 'fade',
        autoplay: {
            // speed : 2000,
            delay:5000,
            disableOnInteraction:false,
        },
        pagination: {
            el: '.visual-pagaination',
            type:'fraction',
        },
        breakpoints: {
            1023:{
                pagination: {
                    el: '.visual-pagaination',
                    type:'bullets',
                    clickable:true,
                    clickableClass:'.visual-pagaination', 
                },
            },
        },
        navigation: {
            nextEl: '.slide-btnright',
            prevEl: '.slide-btnleft',
        },
        on: {
            init: function () {
                $(".swiper-progressbar").removeClass("animate");
                $(".swiper-progressbar").removeClass("active");
                $(".swiper-progressbar").eq(0).addClass("animate");
                $(".swiper-progressbar").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-progressbar").removeClass("animate");
                $(".swiper-progressbar").removeClass("active");
                $(".swiper-progressbar").eq(0).addClass("active");
            },
            slideChangeTransitionEnd: function () {
                $(".swiper-progressbar").eq(0).addClass("animate");
            },
        },
        loop:true, 
    });  
    
    $('.playBtn').on('click', function(){
        visualSwiper.autoplay.start('fast');
        $(this).css({'display':'none'});
        $('.stopBtn').css({'display':'block'});
    });
    $('.stopBtn').on('click', function(){
        visualSwiper.autoplay.stop();
        $(this).css({'display':'none'});
        $('.playBtn').css({'display':'block'});
    }); 
     
    const platFormSwiper = new Swiper('.platform-swiper', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        initialSlide : 1,
        slidesPerView: 1, 
        spaceBetween: 10,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.platform-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.platformBtn-right',
            prevEl: '.platformBtn-left',
        },
        loop: true,
        breakpoints : {
            1023: {
                CenteredSlidesBounds:true,
                centeredSlides:true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                },
            },
        },
    });
});     
