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
