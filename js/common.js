$(function(){    
    /* gnb menu */ 
    let gnb = $(this).index();     
    if(matchMedia("all and (min-width: 1024px)").matches) {   
        $('.header_gnbmenu>li>a').mouseenter(function(){  
            $('.main-contents').click(function(){
               $(".submenuBg").stop().slideUp(); 
                $('.header_gnbmenu>li>a').removeClass('on');
            });  
            
            $('.header_gnbmenu>li>a').removeClass('on');    
            $(".submenuBg").stop().slideDown();
            $(this).eq(gnb).addClass('on');  
        });  
        $(".submenuBg").mouseleave(function(){ 
            $(".submenuBg").stop().slideUp();
            $('.header_gnbmenu>li>a').removeClass('on');
        });   

        /* 상단 notice swiper */  
        if($('.header_beltbox').hasClass('on')){   
            $(this).removeClass('on');    
            $('.main-contents').css('margin-top','100px');   
        } else {   
            $(this).addClass('on');     
            $('.main-contents').css('margin-top','162px'); 
            $('.beltclose-btn').click(function(){  
                $('.header_beltbox').stop().slideUp(400, function(){
                    $('.header_beltbox').removeClass('on');
                });
                $('.main-contents').css('margin-top','100px');
            });
        };
        $('.header_beltbox').toggleClass('on');   

        /* topsearch right 위치*/
        $('.topsearch-box>form').css('right','auto');
        $('.search-bubble-box').removeClass('on');  
        
    } else { /* 테블릿 */ 
        /* 모바일 gnb */  
        $('.header_gnbmenu>li>a').mouseenter(false);
        $(".submenuBg").mouseleave(false);
        $('.topsearch-box>form').css('right','-100%');  
        
        /* mobile gnb bg */ 
        $('.m-gnbmenu').off('click'); 
        $('.m-gnbmenu').click(function(){ 
            /* 모바일 gnb메뉴 top 위치 */
           if($('.header_beltbox').hasClass('on')){
               $('.submenuBg').animate({'top':'-43px'});
           } else {
               $('.submenuBg').animate({'top':'0'});
           }    
            $('.gnb_submenuBg').addClass('on');
            $('.submenuBg').addClass('on');
            $('body').css({'overflow':'hidden'}); 
            
            $('.submenuBg').animate({'right':'0','transition':'ease .2s','display':'block'}, function(){
                $('.gnb_submenuBg').off('click');
                $('.gnb_submenuBg').click(function () {

                    $('body').css({'overflow': 'visible'});
                    $('.submenu').stop().slideUp(function () {
                        $('.gnbmenu_arrow').removeClass('on');
                    });
                    $('.submenuBg').animate({'right': '-100%', 'transition': 'ease .2s'}, function () {
                        $(this).removeClass('on');
                        $('.gnb_submenuBg').removeClass('on');
                    });
                }); 
                
                $('.subGnbmenu-tit').off('click');  
                $('.subGnbmenu-tit').click(function(){ 
                    let Mobilegnb = $(this).index(); 

                    $('.gnbmenu_arrow>span').removeClass('on');
                    $('.gnbmenu_arrow').removeClass('on'); 
                    $('.submenu').stop().slideUp();     


                    $('.gnbmenu_arrow>span').eq(Mobilegnb).toggleClass('on');  
                    $('.gnbmenu_arrow').eq(Mobilegnb).addClass('on');
                    $('.submenu').eq(Mobilegnb).stop().slideDown();  

                    $('.modebox').removeClass('on'); 
                });  
            }); 
        }); 
        
        $('.submenuBg-closeBtn').off('click');
        $('.submenuBg-closeBtn').click(function(){   
            $('body').css({'overflow': 'visible'});
            $('.gnbmenu_arrow').removeClass('on');
            $('.submenuBg').animate({'right': '-100%', 'transition': 'ease .2s'}, function () {
                $(this).removeClass('on');
                $('.gnb_submenuBg').removeClass('on');
            });  
        }); 
        
        /* topsearch */ 
        $('.topsearch-box>form').animate({'right': '-100%', 'transition': 'ease .2s'});
        $('body').css({'overflow':'visible'});  

        /* 상단 notice swiper */
        if($('.header_beltbox').hasClass('on')){   
            $(this).removeClass('on');    
            $('.main-contents').css('margin-top','56px');    
        } else { 
            $(this).addClass('on');     
            $('.main-contents').css('margin-top','100px'); 
            $('.beltclose-btn').click(function(){  
                $('.header_beltbox').stop().slideUp(400, function(){
                    $('.header_beltbox').removeClass('on');
                });
                $('.main-contents').css('margin-top','56px');  
            });
        };
        $('.header_beltbox').toggleClass('on');  

    };// 종료구문 
    
    /* utility menu */
    $('.utility-join').hide();
    $('.utility-login').hide();  
    $('.gnb_join').hide(); 
    $('.gnb_login').hide(); 
    $('.utility-icon').hide(); 
    
    $('.utility-icon.on').show();
    
    /* 모바일 gnb 유틸리티 */
    $('.gnb_logout').click(function(){
        $('.gnb_join').show();  
        $('.gnb_member').hide(); 
        $('.gnb_login').show();  
        $(this).hide(); 
    }); 
    
    /*pc 유틸리티 */
    $('.utility-logout').click(function(){
        $('.utility-join').show(); 
        $('.utility-account').hide(); 
        $('.utility-login').show(); 
        $(this).hide(); 
    }); 
    
    let utilityMenu = $(this).index();
    $('.utility-tab').mouseenter(function(){ 
        $(this).children('a').addClass('on'); /* 화살표 회전 */
        $('.bubble-box').removeClass('on'); 
        $(this).children('.bubble-box').eq(utilityMenu).addClass('on'); 
    });  
    
    $('.bubble-box').mouseleave(function(){ 
        $(this).removeClass('on');
        $('.utility-lang>a').removeClass('on');  
    });  
    $('.utility-tab').mouseleave(function(){ 
        $(this).children('a').removeClass('on');  
        $('.bubble-box').removeClass('on');
    });  
    
    /* top search 유틸리티 겹침X */     
    // $('.topsearch-text').click(function(){
    //     if($('.search-bubble-box').hasClass('on')){   
    //         $('.bubble-box01').eq(utilityMenu).removeClass('hide');
    //         $('.bubble-box02').eq(utilityMenu).removeClass('hide');
    //         $('.search-bubble-box').addClass('on');
    //     } else { /* 검색기능 보여질 때 겹침X */  
    //         $('.bubble-box01').addClass('hide');
    //         $('.bubble-box02').addClass('hide');
    //         $('.search-bubble-box').removeClass('on');
    //         $('.main-contents, #contents').click(function(){
    //             $('.search-bubble-box').removeClass('on');
    //             $('.bubble-box01').eq(utilityMenu).removeClass('hide');
    //             $('.bubble-box02').eq(utilityMenu).removeClass('hide');
    //         }); 
    //     }  
    //     $('.search-bubble-box').toggleClass('on');   
    // });   
    /* 최근검색 키워드 삭제 */ 
    $('.keyword-del').click(function(){     
        $(this).parent('.recent-keyword').hide();
    }); 
    /* 최근검색 전체삭제 */
    $('.keyword-all-del').click(function(){  
        $('.recent-keyword').hide();  
    }); 
    
    /* 모바일 gnb 서치*/
    $('.m-top-search').click(function(){
        $('.topsearch-box>form').animate({'right':'0','transition':'ease .5s'});    
        $('body').css({'overflow':'hidden'}); 
        //$('.topsearch-box>form').show(); 
        $('.topsearch>input').show(); 
        $('.topsearch-btn').show();  
        $('.search-bubble-box').addClass('on');  
    });
    $('.top-search-closeBtn').click(function(){
        $('.topsearch-box>form').animate({'right':'-100%','transition':'ease .5s'});    
        $('body').css({'overflow':'visible'});  
    });  
    
    /*top search placeholder */   
    $('.topsearch>input').attr('placeholder', '작가,작품명 검색'); /* placeholder 초기값 */
    $('.topsearch-en>input').attr('placeholder', 'Artists, Works');   
    
    /* footer family site */ 
    $('.Familysite-selectbox').click(function(){   
        if($('.Familysite').hasClass('on')){
            $(this).addClass('on');   
            $(".familyselect").removeClass('on'); 
        } else {   
            $('.familyselect').addClass('on');   
            $('.innerfooter').click(function(){ 
                console.log(6656456);
                $('.familyselect').removeClass('on'); 
                $('.Familysite').removeClass('on'); /* 화살표 */     
            });  
        }; 
        $('.Familysite').toggleClass('on'); 
    });         

    /* scroll top */
    $('.scroll-top').click(function(){ 
        $('html, body').animate({scrollTop: '0'}, 700);
    });   
});    

/* top search filter 기능 */  
function searchFilter() {
    if(window.Event.keyCode == 13){ 
        $('.topsearch-btn').trigger("click");
        $('.search-bubble-box').removeClass('on');
    } else if($('.topsearch-text').val().length == 0) {
        $('.search-bubble-box').removeClass('on'); 
        $('.bubble-box01').removeClass('hide');
        $('.bubble-box02').removeClass('hide');  
    } else { 
        // $('.search-bubble-box').addClass('on');      
        if($('.search-bubble-box').hasClass('on')){              
            $('.bubble-box01').eq(utilityMenu).removeClass('hide');
            $('.bubble-box02').eq(utilityMenu).removeClass('hide');
            $('.search-bubble-box').addClass('on');
        } else { /* 검색기능 보여질 때 겹침X */  
            $('.bubble-box01').addClass('hide');
            $('.bubble-box02').addClass('hide');
            $('.search-bubble-box').removeClass('on');
            $('.main-contents, #contents').click(function(){
                $('.search-bubble-box').removeClass('on');
                $('.bubble-box01').eq(utilityMenu).removeClass('hide');
                $('.bubble-box02').eq(utilityMenu).removeClass('hide');
            }); 
        }  
        $('.search-bubble-box').toggleClass('on'); 
    } 
}    



/* 반응형 reszie */
$(window).resize(function(){
    let gnb = $(this).index();  
    if(matchMedia("all and (min-width: 1024px)").matches) {
        $('.header_gnbmenu>li>a').off('mouseenter');
        $('.header_gnbmenu>li>a').mouseenter(function(){
            $('.main-contents').click(function(){ /* 외부 클릭시 닫기 */ 
                $(".submenuBg").stop().slideUp('fast', function(){
                    $(this).css({'top':'61px'});
                });  
                $('.header_gnbmenu>li>a').removeClass('on'); 
            });

            $('.submenuBg').css({'right':'auto','height':'auto','background-color':'#f2f2f2','top':'61px'}).stop().slideDown();

            /*$('.gnb_submenuBg').removeClass('on').css({'right':'-100%'}); */  
            $('.gnb_submenuBg').show(function(){ 
                $(this).css({'right':'-100%'});
            }); 
            
            $('.gnbmenu_arrow').removeClass('on');  
            $('.submenu').css({'display':'block'});
            

            $('.header_gnbmenu>li>a').removeClass('on');    
            $(".submenuBg").stop().slideDown(); 
            $(this).eq(gnb).addClass('on'); 
            
            $('.subGnbmenu-tit').off('click');
            $('.submenu').css({'margin-top':'0'}); 
        }); 
        
        $(".submenuBg").mouseleave(function(){ 
            $(".submenuBg").stop().slideUp();
            $('.header_gnbmenu>li>a').removeClass('on');
        });
        
        $('.bubble-box').mouseleave(function(){  
            $(this).removeClass('on');
            $('.utility-lang>a').removeClass('on');
        }); 
        
        $('.utility-tab').mouseleave(function(){
            $(this).children('a').removeClass('on'); 
            $('.bubble-box').removeClass('on');
        });
        
        //$('.gnb_submenuBg').hide(); 
        $('.submenuBg').hide(); 
        
        $('.header').show(function(){
            $('.main-header').show(function(){
                /*$('.main-contents').css('top','56px'); */
                $('.main-contents').css('margin-top','100px');
            });
            $(this).hasClass('main-header');
        });
        $('.beltclose-btn').click(function(){
            $('.header_beltbox').stop().slideUp(400);
            $('.main-contents').css('margin-top','100px');
            $('.header_beltbox').removeClass('on');
        });

        /* 모바일 메뉴 open 된 채로 resize 될 때 gnb 닫힘 */
        $('.gnb_submenuBg').removeClass('on');
        $('.submenuBg').removeClass('on');

        /* top search right 위치 */
        // $('.topsearch-box>form').animate({'right': '0'});  
        $('.main-contents, #contents').click(function(){
            $('.search-bubble-box').removeClass('on');
            $('.bubble-box01').eq(utilityMenu).removeClass('hide');
            $('.bubble-box02').eq(utilityMenu).removeClass('hide');
        }); 
        
        /* topsearch right 위치*/
        $('.topsearch-box>form').css('right','auto');
        $('.search-bubble-box').removeClass('on');  

        /* 상단 notice swiper */
        if($('.header_beltbox').hasClass('on')){   
            $(this).removeClass('on');    
            $('.main-contents').css('margin-top','100px');    
        } else { 
            $(this).addClass('on');     
            $('.main-contents').css('margin-top','162px');  
            $('.beltclose-btn').click(function(){  
                $('.header_beltbox').stop().slideUp(400, function(){
                    $('.header_beltbox').removeClass('on');
                });
                $('.main-contents').css('margin-top','100px'); 
            }); 
        };
        $('.header_beltbox').toggleClass('on');     
    } else { /* 테블릿 */   
        $(".submenuBg").off('mouseleave');
        $('.submenuBg').off('mouseenter');
        $('.header_gnbmenu>li>a').off('mouseenter');
        $('.submenu').hide(); 
        $('.topsearch-box>form').css('right','-100%'); 
        
        $('.m-gnbmenu').off('click'); 
        $('.m-gnbmenu').click(function(){ 
            /* 모바일 gnb메뉴 top 위치 */ 
           if($('.header_beltbox').hasClass('on')){
               $('.submenuBg').animate({'top':'-43px'});
           } else {
               $('.submenuBg').animate({'top':'0'}); 
           } 
            
            $('.submenuBg').removeAttr("style");
            $('.submenuBg').hide();
            
            $('.gnb_submenuBg').addClass('on');
            $('.submenuBg').addClass('on');
            $('body').css({'overflow':'hidden'});
            $('.submenuBg').css({'right':'-100%'});
            $('.submenuBg').show();
            
            $('.submenuBg').animate({'right':'0','transition':'ease .2s'}, function(){
//                $('.submenuBg').show(); 
                $('.gnb_submenuBg').off('click'); 
                $('.gnb_submenuBg').click(function(){
                    $('body').css({'overflow':'visible'});
                    $('.submenu').stop().slideUp(function(){
                        $('.gnbmenu_arrow').removeClass('on');
                    });
                    $('.submenuBg').animate({'right':'-100%','transition':'ease .2s'}, function(){
                        $(this).removeClass('on');
                        $('.gnb_submenuBg').removeClass('on');
                    }); 
                }); 
                
                $('.subGnbmenu-tit').off('click');
                $('.subGnbmenu-tit').click(function(){
                    let Mobilegnb = $(this).index();

                    $('.gnbmenu_arrow>span').removeClass('on');
                    $('.gnbmenu_arrow').removeClass('on');
                    $('.submenu').stop().slideUp();


                    $('.gnbmenu_arrow>span').eq(Mobilegnb).toggleClass('on');
                    $('.gnbmenu_arrow').eq(Mobilegnb).addClass('on');
                    $('.submenu').eq(Mobilegnb).stop().slideDown();

                    $('.submenu').css({
                        'margin-top':'29.5px',
                    })

                    $('.modebox').removeClass('on'); 
                }); 
            }); 
            
            /* 모바일 gnb메뉴 top 위치 */ 
            if($('.header_beltbox').hasClass('on')){ /* on */
                $('.submenuBg').animate({'top':'-43px'});
            } else {
                $('.submenuBg').animate({'top':'0'});
            }; 
            
            /* 모바일 topsearch */
            $('.m-top-search').click(function (){
                $('.search-bubble-box').addClass('on');
            }); 
            
//            $('.gnb_submenuBg').css('overflow','hidden'); 
//            $('.gnb_submenuBg').show();   
        });   

        /* 상단 notice swiper */
        if($('.header_beltbox').hasClass('on')){   
            $(this).removeClass('on');    
            $('.main-contents').css('margin-top','56px');    
        } else { 
            $(this).addClass('on');     
            $('.main-contents').css('margin-top','100px');   
            $('.beltclose-btn').click(function(){  
                $('.header_beltbox').stop().slideUp(400, function(){
                    $('.gnb_submenuBg').css('overflow','visible');  
                    $('.header_beltbox').removeClass('on');
                });
                $('.main-contents').css('margin-top','56px');  
            }); 
        };

        $('.header_beltbox').toggleClass('on');     
        
        /* 닫기 버튼 */
        /* 닫기 버튼 (gnb) */
        $('.submenuBg-closeBtn').off('click');
        $('.submenuBg-closeBtn').click(function(){
            $('body').css({'overflow':'visible'});
            $('.gnbmenu_arrow').removeClass('on');
            $('.submenuBg').animate({'right':'-100%','transition':'none'}, function(){

                $(this).removeClass('on');
                $('.gnb_submenuBg').removeClass('on');
            });
            $('.gnb_submenuBg').animate({'right': '-100%','transition':'none'});

            /* top search box 닫기 기능 */
            $('.topsearch-box>form').animate({'right': '-100%', 'transition': 'ease .1ms'});
            $('body').css({'overflow':'visible'});
        });  
        
        /* 띠배너 beltbanner */
        $('.header_beltbox.on').show(function(){
            $('.main-contents').css('margin-top','100px');
        });
        $('.beltclose-btn').click(function(){
            $('.main-contents').css('margin-top','56px');
            $('.gnb_submenuBg').css('overflow','visible');
            $('.header_beltbox').removeClass('on');
        });
         
        /*top search placeholder */    
        $('.topsearch>input').attr('placeholder', '작가,작품명 검색'); /* placeholder 초기값 */
        $('.topsearch-en>input').attr('placeholder', 'Artists, Works'); 
    }   
});  


    