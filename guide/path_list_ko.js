var __GUIDE_LIST, __SITENAME,  __CONSTANT_HEAD, __CONSTANT_RULE, __CONSTANT_LSIT;

__SITENAME = { siteName : "Soul Auction"};
/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    no : 1,  		// NO
    dep1 : 1,		// depth-1
    dep2 : 1,		// depth-2
    dep3 : 1,		// depth-3
    dep4 : 0,		// depth-4  lang
    dep5 : 0,		// depth-5
    url : 1,		// File path
    role : 0,		// 담당자
    stateHTML : 0,	// HTML
    stateJS : 0,	// javascript
    state : 0,		// 완료상태
    pubUpdate  : 1,	// 퍼블수정 날짜
    devUpdate  : 0,	// 개발수정 날짜
    check      : 0,	// 옵션
    etc : 1			// 기타 메모
};


/***
 * 아래 리스트 추가
 * 지원 key 값
 *  각 뎁스에 해당하는 key값으로 입력
 */
__CONSTANT_LIST = [
/**
    * example
    {
        stateLine : "",              // 상태 클래스 (이상무 : "" , 수정 : "edit", 삭제 : "del")
        dep1 : '1뎁스 메뉴 이름',     // option ( 1뎁스 입력시 구분선 )
        dep2 : '2뎁스 메뉴 이름',     // option
        dep3 : '3뎁스 메뉴 이름',     // option
        dep4 : '4뎁스 메뉴 이름',     // option
        dep5 : '5뎁스 메뉴 이름',     // option
        url :  '/html/main.html'	//파일URL
        role : '홍길동',             // 담당자
        stateHTML : 1,              // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        stateJS : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        state   : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        pubUpdate : 2022-0000,		// 마지막날 배경색표기
        devUpdate : 2022-0000,		// 
        option : '디자인변경예정',       // 비고 란에 출력
        etc    : '디자인변경예정',       // 비고 란에 출력
    }
*/
	
    // Guide
/*     {
        stateLine   : "", 
        dep1 	  	: 'GUIDE',
        dep2 	  	: 'STYLE',
        dep3 	  	: '',
        dep4 	  	: '',
        url  	  	: '/guide/guide_style.html',
        pubUpdate 	: '2022-0000',
        pubUpdate 	: '2022-0000',
        etc 	  	: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: 'GUIDE',
        dep2 		: 'UI',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/guide/guide_ui.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'ICONS GUIDE',
        dep3 		: 'SPRITE IMAGES',
        dep4 	  	: '',
        url 		: '/guide/guide_icons.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
 /*    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'icon fonts',
        dep4 	  	: '',
        url 		: '/guide/guide_iconfonts.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */
    /* {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'jQuery UI icon',
        dep4 	  	: '',
        url 		: '/guide/guide_jqueryUI_icons.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */

        
	{
        stateLine   : "", 
        dep1 		: 'sample',
        dep2 		: 'sub',
        dep3 		: 'LAYOUT',
        dep4 	  	: '',
        url 		: '/html/sub/sub_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'Popup',
        dep3 		: 'type',
        dep4 	  	: '',
        url 		: '/html/sub/popup_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },


    {
        stateLine   : "", 
        dep1 		: 'etc',
        dep2 		: '서버장애',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_failure_ko.html',
        pubUpdate 	: '2022-0425',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '서비스정기정검',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_maintenance_ko.html',
        pubUpdate 	: '2022-0425',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '접속장애',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_error_ko.html',
        pubUpdate 	: '2022-0425',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '404',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_404_ko.html',
        pubUpdate 	: '2022-0425',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '마감된 LOT 터치 시',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_soldout_ko.html',
        pubUpdate 	: '2022-0425',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '결제실패 시',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page-sv_payfail_ko.html',
        pubUpdate 	: '2022-0809',
        etc 		: '',
    },
  /*   {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '공통 팝업',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/common_popup_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */




/* 	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'page_loading',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/etc/page_loading.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'dm',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/dm/dm.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */



    
/* 
	{
        stateLine   : "ing", 
        dep1 		: '메인/공통',
        dep2 		: '',
        dep3 		: '메인',
        dep4 	  	: '',
        url 		: '/html/main_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
    {
        stateLine   : "ing", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/main_en.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    },
     */
    
    {
        stateLine   : "", 
        dep1 		: 'main',
        dep2 		: 'newsletter',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/main/news_letter-list_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/main/news_letter-view_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '',
    },







    {
        stateLine   : "edit", 
        dep1 		: 'Auction',
        dep2 		: '리스트',
        dep3 		: '온라인 경매중 순차마감전',
        dep4 	  	: '',
        url 		: '/html/auction/online_sequence_deadline_before_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0822], [0812], [0714], [0617], [0613], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '온라인 경매중 순차마감중',
        dep4 	  	: '',
        url 		: '/html/auction/online_sequence_deadline_ing_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0822], [0812], [0714], [0617], [0613], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '온라인 경매마감',
        dep4 	  	: '',
        url 		: '/html/auction/online_sequence_deadline_after_ko.html',
        pubUpdate 	: '2022-0812',
        etc 		: '[0822]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '작품응찰신청(서면)',
        dep4 	  	: '',
        url 		: '/html/auction/online_sequence_deadline_bidding_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0712], [0628](css), [0613], [0526](css), [0523],',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '라이브 경매 전 (응찰신청 전)',
        dep4 	  	: '',
        url 		: '/html/auction/offline_auction_go_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0822], [0812], [0714], [0617], [0613], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '라이브 경매 전 (응찰신청 종료)',
        dep4 	  	: '',
        url 		: '/html/auction/offline_auction_after_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0822], [0812], [0714], [0617], [0613], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '라이브 경매 중 (패들 미신청/응찰신청 후)',
        dep4 	  	: '',
        url 		: '/html/auction/offline_auction_ing_ko.html',
        pubUpdate 	: '2022-0617',
        etc 		: '[0822], [0812], [0714]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '라이브 경매 중 (패들 신청/응찰신청 후)',
        dep4 	  	: '',
        url 		: '/html/auction/offline_auction_before_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0822], [0812], [0714], [0617], [0613], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '안내,패들번호 부여 -popup',
        dep4 	  	: '',
        url 		: '/html/popup/auction-offline_auction_afterPopup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0617], [0617], [0613], [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '상세',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/auction/auctionView_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0728], [0725], [0714], [0712], [0628], [0617], [0613], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '상세 max',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/auction/auctionViewMax_ko.html',
        pubUpdate 	: '2022-0504',
        etc 		: '[0803], [0728], [0725], [0714], [0712], [0628], [0617], [0613], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '상세',
        dep3 		: '라이브 경매 진행 전',
        dep4 	  	: '',
        url 		: '/html/auction/auctionView2_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '[0803], [0728], [0725], [0714], [0712], [0628], [0617]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '상세',
        dep3 		: '라이브 경매종료',
        dep4 	  	: '',
        url 		: '/html/auction/auctionView_after_ko.html',
        pubUpdate 	: '2022-0812',
        etc 		: '[0824]',
    },
    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'print',
        dep4 	  	: '',
        url 		: '/html/auction/auctionView_print_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0718], [0613](css)',
    },


    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'popup',
        dep3 		: '이미지뷰어, 이미지팝업',
        dep4 	  	: '',
        url 		: '/html/popup/auction-viewerPopup_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0725], [0708]',
    },

    
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: 'popup',
        dep3 		: '낙찰수수료, 배송안내, 경매호가표 -라이브/ 온라인/ 홍콩 경매',
        dep4 	  	: '',
        url 		: '/html/popup/deliveryHelpPopup_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0822](css), [0725], [0617], [0613]',
    },
    
    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '응찰하기-online',
        dep3 		: 'online-pop',
        dep4 	  	: '',
        url 		: '/html/popup/biddingOnlinePopup_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0725], [0613], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '응찰중지, 하기-popup',
        dep4 	  	: '',
        url 		: '/html/popup/biddingOnlineBiddingPopup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },

    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '응찰하기-offline-pc',
        dep3 		: 'offline-pop 정회원_로그인후&LOT',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-pc1_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0822](css), [0803](css), [0712](css), [0603], [0516]',
    },



    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 정회원_로그인후&응찰내역',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-pc2_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0803](css), [0712](css), [0603], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 준회원',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-pc3_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0822], [0613], [0603], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 비회원',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-pc4_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0822], [0803](css), [0613]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '응찰하기-offline-mb',
        dep3 		: 'offline-pop 정회원_로그인&LOT',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-mb1_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0822], [0712], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 정회원_로그인후&응찰내역',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-mb2_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0712], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 준회원',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-mb3_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0613], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'offline-pop 비회원',
        dep4 	  	: '',
        url 		: '/html/auction/biddingOffline-mb4_ko.html',
        pubUpdate 	: '2022-0418',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '통화안내 - popup',
        dep4 	  	: '',
        url 		: '/html/popup/biddingOfflinePopup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0613]',
    },


/*     {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '라이브-작품응찰신청(서면)',
        dep4 	  	: '',
        url 		: '/html/auction/auction_proceeding_bidding_ko.html',
        pubUpdate 	: '2022-000',
        etc 		: '',
    }, */

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '온라인-경매번호인증 - popup',
        dep4 	  	: '',
        url 		: '/html/popup/auction_proceeding_biddingPopup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0617], [0613], [0523]',
    },



    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '진행경매',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/auction/auction_proceeding_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0617]',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '예정경매',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/auction/auction_expected_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0617]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'D-Day',
        dep4 	  	: '',
        url 		: '/html/auction/auction_Dday_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0526](css), [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'D-count',
        dep4 	  	: '',
        url 		: '/html/auction/auction_Dcount_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0526](css), [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '경매결과',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/auction/auction_result_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0712], [0617], [0523]',
    },
 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '검색결과없음',
        dep4 	  	: '',
        url 		: '/html/auction/auction_result_empty_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '제로베이스',
        dep3 		: '작가-리스트',
        dep4 	  	: '',
        url 		: '/html/auction/zerobase-list_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '작가-info',
        dep4 	  	: '',
        url 		: '/html/auction/zerobase-info_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0725], [0617], [0613], [0530(css)]',
    },








    {
        stateLine   : "", 
        dep1 		: 'Private Sale',
        dep2 		: '전시',
        dep3 		: 'info',
        dep4 	  	: '',
        url 		: '/html/private_sale/exhibition-info_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0725], [0613], [0510](all)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '전시 1',
        dep4 	  	: '',
        url 		: '/html/private_sale/exhibition-1_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0617], [0530](css), [0523], [0516], [0510](all)',
    },
/*     {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/private_sale/exhibition-list_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/private_sale/exhibition-view_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0728], [0725], [0714], [0628], [0613], [0516], [0510](all)',
    },

  
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '프라이빗',
        dep3 		: 'PS GUIDE',
        dep4 	  	: '',
        url 		: '/html/private_sale/ps_guide_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[07025], [0708], [0516], [0510](all)',
    },

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/private_sale/private_sale-list_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0617], [0613], [0530](css), [0516], [0510](all)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트 데이터없음',
        dep4 	  	: '',
        url 		: '/html/private_sale/private_sale-list_none_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0524], [0510](all)',
    },
    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세1',
        dep4 	  	: '',
        url 		: '/html/private_sale/private_sale-view1_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0728], [0714], [0613], [0516], [0510](all)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세2',
        dep4 	  	: '',
        url 		: '/html/private_sale/private_sale-view2_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0728], [0714], [0516], [0510](all)',
    },





    {
        stateLine   : "", 
        dep1 		: 'Service',
        dep2 		: '아카데미',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/service/academy_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0725], [0718], [0708], [0705](css), [0628](css), [0617], [0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/service/academy-list_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/service/academy-view_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
    /* 
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '신청',
        dep4 	  	: '',
        url 		: '/html/service/academy-apply_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    }, */

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '담보대출',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/service/loan_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0803], [0728], [0725], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '미술품보관',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/service/storage_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '전시장대관',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/service/showroom_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0809], [0725](영문제목수정), [0708], [0705], [0613], [0516]',
    },


    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '아트컨설팅&기업마케팅',
        dep3 		: '소개',
        dep4 	  	: '',
        url 		: '/html/service/marketing_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0809], [0725](영문제목수정), [0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'popup',
        dep4 	  	: '',
        url 		: '/html/popup/marketingPopup_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0516]',
    },
    /* {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'popup(PC)',
        dep4 	  	: '',
        url 		: '/html/popup/marketingPopup_pc_ko.html',
        pubUpdate 	: '',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'popup(Mobile + PC)',
        dep4 	  	: '',
        url 		: '/html/popup/marketingPopup_pc2_ko.html',
        pubUpdate 	: '',
        etc 		: '',
    }, */
    /* 
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '문화예술을 활용한 VIP 고객 마케팅',
        dep4 	  	: '',
        url 		: '/html/service/marketing-list01_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '기업홍보 아트 마케팅',
        dep4 	  	: '',
        url 		: '/html/service/marketing-list02_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '기획경매',
        dep4 	  	: '',
        url 		: '/html/service/marketing-list03_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '기업의 미술품 아트 마케팅',
        dep4 	  	: '',
        url 		: '/html/service/marketing-list04_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '',
    },
 */


  
    {
        stateLine   : "", 
        dep1 		: 'Sell',
        dep2 		: '위탁안내',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/sell/consignment_info_ko.html',
        pubUpdate 	: '2022-0401',
        etc 		: '[0812], [0725](영문제목수정), [0708], [0516], [0510]',
    },






    {
        stateLine   : "", 
        dep1 		: '로그인',
        dep2 		: '로그인',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/login/login_memberlogin_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0516]',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '로그인에러',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/login/login_memberlogin_error_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '아이디찾기',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/login/login_search_id_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0712], [0622]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '비밀번호찾기',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/login/login_search_pw_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0622]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'popup',
        dep3 		: '아이디찾기, 비밀번호찾기, 비밀번호변경알림, 이중접속차단안내',
        dep4 	  	: '',
        url 		: '/html/popup/login_popup_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0728], [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[EDM]',
        dep3 		: '임시 비밀번호 발급 안내',
        dep4 	  	: '',
        url 		: '/html/dm/temporary_password_email_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '',
    },







    {
        stateLine   : "", 
        dep1 		: '회원가입',
        dep2 		: '회원가입',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/member/member_join_1_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0526], [0516]',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '개인회원',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/member/member_join_2_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0809], [0516]',
    }, 
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '기업회원',
        dep3 		: '입력전',
        dep4 	  	: '',
        url 		: '/html/member/member_join_3_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0822], [0812], [0809], [0725], [0516]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '입력후',
        dep4 	  	: '',
        url 		: '/html/member/member_join_4_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0822], [0812], [0809], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'SNS회원',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/member/member_join_5_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0809], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '회원가입완료',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/member/member_join_6_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0622], [0526], [0510](css), [0502]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '팝업',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/popup/member_popup_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0613], [0516]',
    },
  













    {
        stateLine   : "", 
        dep1 		: '결제',
        dep2 		: '정회원 ',
        dep3 		: '결제(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_member_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0614]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_member_banking1_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '[0812], [0614]',
    },/* 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌-사업자)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_member_banking2_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_member_end_1_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_member_end_2_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0825], [0803]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '작품 ',
        dep3 		: '결제(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_work_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0614], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_work_banking1_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '[0812], [0614]',
    },
    /* {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌-사업자)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_work_banking2_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_work_end_1_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_work_end_2_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803], [0516]',
    },
    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '아카데미 ',
        dep3 		: '결제(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_tuition_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_tuition_banking1_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '[0614]',
    },
    /* {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: ' ',
        dep3 		: '결제(가상계좌-사업자)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_tuition_banking2_ko.html',
        pubUpdate 	: '2022-0613',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(신용카드)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_tuition_end_1_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제완료(가상계좌)',
        dep4 	  	: '',
        url 		: '/html/payment/payment_tuition_end_2_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '[0803]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '오프라인결제',
        dep3 		: '작품결제(인보이스)-pop',
        dep4 	  	: '',
        url 		: '/html/payment/payment_live_Popup_ko.html',
        pubUpdate 	: '2022-0411',
        etc 		: '',
    },

    {
        stateLine   : "edit", 
        dep1 		: 'search',
        dep2 		: '',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/search/search_ko.html',
        pubUpdate 	: '2022-0509',
        etc 		: '[0825], [0812], [0809], [0617], [0603](css), [0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '검색결과없음',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/search/search_empty_ko.html',
        pubUpdate 	: '2022-0509',
        etc 		: '[0812]',
    },












    {
        stateLine   : "", 
        dep1 		: 'footer',
        dep2 		: '회사소개',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/company_intro_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0526](css), [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '연혁',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/company_history_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '언론보도',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/footer/board_media_list_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0613], [0516], [0510](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '채용공고',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/footer/board_incruit_list_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0613], [0516], [0510](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트(데이터 없음)',
        dep4 	  	: '',
        url 		: '/html/footer/board_incruit_empty_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0516], [0510](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/footer/board_incruit_view_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0516]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '지원하기',
        dep4 	  	: '',
        url 		: '/html/footer/board_incruit_apply_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0516], [0510](css)',
    },
  
   
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '경매안내',
        dep3 		: '라이브/온라인 경매안내',
        dep4 	  	: '',
        url 		: '/html/footer/info_aution_ko.html',
        pubUpdate 	: '2022-0513',
        etc 		: '[0822], [0809]',
    }, 
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '자동새로고침 해결방법 팝업',
        dep4 	  	: '',
        url 		: '/html/footer/info_aution_popup_ko.html',
        pubUpdate 	: '2022-0513',
        etc 		: '[0603](css)',
    },
  

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '경매약관',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/terms_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '개인정보처리방침',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/privacy_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '[0714], [0712]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '이전버전 (2019.06.01)',
        dep4 	  	: '',
        url 		: '/html/footer/privacy-20190601_ko.html',
        pubUpdate 	: '2022-0712',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '내부관리규정',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/rules_ko.html',
        pubUpdate 	: '2022-0502',
        etc 		: '',
    },
    


    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '위치찾기',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/location_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0708]',
    },


    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '공지사항',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/footer/board_notice_list_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0613], [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/footer/board_notice_view_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'FAQ',
        dep3 		: '',
        dep4 	  	: '',
        url 		: '/html/footer/faq_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0613](css), [0523]',
    },
   /*  {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '1:1문의 ',
        dep3 		: '리스트 1',
        dep4 	  	: '',
        url 		: '/html/footer/inquiry_1_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트 2',
        dep4 	  	: '',
        url 		: '/html/footer/inquiry_2_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },
 */







    {
        stateLine   : "edit", 
        dep1 		: 'Mypage',
        dep2 		: '메인',
        dep3 		: '정회원',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_member2_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0822](css), [0617], [0530](css), [0526], [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '준회원',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_member1_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0617], [0530](css), [0526]',
    },
/*     {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '정회원이력 툴팁1-말풍선',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_tooltip1_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'POPUP',
        dep3 		: '정회원 안내-pop',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_tooltip2_popup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },
    /* {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '정회원결제 약관동의-pop',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_member1_upgradepop_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '정회원 이력-pop',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_recordpopup_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '[0621], [0617], [0613], [0523]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '정회원 이력-pop (데이터 없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_main_recordpopup_empty_ko.html',
        pubUpdate 	: '2022-0516',
        etc 		: '',
    },











 




    
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '라이브경매관리',
        dep3 		: '응찰신청내역',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_live_history1_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0617], [0530](css), [0526]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '온라인패들응찰내역',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_live_history_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0617], [0613], [0530](css), [0526]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'POPUP',
        dep3 		: '응찰내역POPUP',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_live_history-recordpopup_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0617], [0613]',
    },
/*     {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '응찰이력poop (데이터 없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_live_history-recordpopup_empty_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '온라인경매관리',
        dep3 		: '응찰내역',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_online_history_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0617], [0613], [0530](css), [0526]',
    },
/*     {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '응찰내역 검색-pop',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_online_history_searchpopup_ko.html',
        pubUpdate 	: '2022-0000',
        etc 		: '',
    }, */
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '응찰내역(데이터없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_online_history_empty_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '결제/구매내역',
        dep4 	  	: '',
        url 		: '/html/mypage/auction_online_buy_list_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0705](css), [0617], [0613], [0530](css), [0526]',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '관심작품',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/mypage/favorite_ko.html',
        pubUpdate 	: '2022-0526',
        etc 		: '[0822], [0728], [0617], [0614](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트(데이터없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/favorite_empty_ko.html',
        pubUpdate 	: '2022-0725',
        etc 		: '',
    },
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: '아카데미신청내역',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/mypage/academy_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0822](css), [0728](css), [0712], [0708](css), [0705](css), [0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트 (데이터없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/academy_empty_ko.html',
        pubUpdate 	: '2022-0705',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'POPUP',
        dep3 		: '결제완료 팝업',
        dep4 	  	: '',
        url 		: '/html/mypage/academy_paypopup_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0526]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '1:1문의',
        dep3 		: '리스트',
        dep4 	  	: '',
        url 		: '/html/mypage/inquiry_list_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0812], [0705](css), [0613]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '리스트 (데이터없음)',
        dep4 	  	: '',
        url 		: '/html/mypage/inquiry_list_empty_ko.html',
        pubUpdate 	: '2022-0705',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '상세',
        dep4 	  	: '',
        url 		: '/html/mypage/inquiry_view_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0705](css), [0613](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '문의',
        dep4 	  	: '',
        url 		: '/html/mypage/inquiry_write_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0725], [0705]',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '문의 - 파일첨부 후',
        dep4 	  	: '',
        url 		: '/html/mypage/inquiry_write2_ko.html',
        pubUpdate 	: '2022-0628',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '회원정보관리',
        dep3 		: '회원정보수정 - 비밀번호 확인',
        dep4 	  	: '',
        url 		: '/html/mypage/mem_info_pwcheck_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '회원정보수정 - 정보수정(일반회원)',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_memberModify1_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0705](css), [0526](css)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: '회원정보수정 - 정보수정(사업자)',
        dep4 	  	: '',
        url 		: '/html/mypage/mypage_memberModify2_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'POPUP',
        dep3 		: '회원정보수정 - popup - 작가검색/주소검색/회원탈퇴',
        dep4 	  	: '',
        url 		: '/html/popup/mypage_memberModify_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0622]',
    },
    {
        stateLine   : "",
        dep1 		: '',
        dep2 		: '',
        dep3 		: '회원탈퇴',
        dep4 	  	: '',
        url 		: '/html/mypage/mem_resign_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0526](css)',
    },
    {
        stateLine   : "",
        dep1 		: '',
        dep2 		: '',
        dep3 		: '비밀번호변경',
        dep4 	  	: '',
        url 		: '/html/mypage/mem_password_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0526](css)',
    },
    {
        stateLine   : "",
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'SNS연동설정',
        dep4 	  	: '',
        url 		: '/html/mypage/mem_sns_ko.html',
        pubUpdate 	: '2022-0523',
        etc 		: '[0613]',
    },



];




__CONSTANT_RULE = { getIndex: function () { var _idx = ++window['INDEX'] || (window['INDEX'] = 0); return _idx + 1; }, li_option: function ($item) { var _return = ""; /*topLine*/ if ($item.dep1) { _return += ' t-divide'; }; /*compareUpdate*/ if ($item.pubUp && $item.devUp) { if ($item.pubUp > $item.devUp) { _return += ' is-different'; } }; /*isDone*/ if ($item.stateHTML && $item.stateJS) { if ($item.stateHTML && $item.stateJS) { _return += ' is-done'; } }; /* 상태라인 */ if ($item.stateLine) { if ($item.stateLine == "ing") { _return += ' state_ing'; } if ($item.stateLine == "edit") { _return += ' state_edit'; } if ($item.stateLine == "del") { _return += ' state_del'; } }; return _return; }, path: function () { return '..' + this.url; }, getfileName: function ($item) { var aURL = $item.url.split('/'); return aURL[aURL.length - 1]; }, };


var _data = { _temp_dep1: "" }; Vue.component('search-component', { props: ['listItem', 'dep1SearchIndex'], data: function () { return _data }, template: '<cite style="position:absolute; font-size:0; line-height:0">{{ listItem.dep1? _temp_dep1 = listItem.dep1 : _temp_dep1 }}</cite>' }); __GUIDE_LIST = new Vue({ el: '#guide_list', data: { config: __SITENAME, t_head: __CONSTANT_HEAD, t_rule: __CONSTANT_RULE, t_body: __CONSTANT_LIST, }, methods: __CONSTANT_RULE, beforeCreate: function () { $("#guide_list").show() }, });


$(document).ready(function () { /* 배열 변수넣기 */ var _updateArr = []; $("._GUIDE__list__col--update-pub").each(function (index) { _updateArr.push($("._GUIDE__list__col--update-pub").eq(index).text().replace("-", "")); }); /* 배열 최대값 */ var _max = _updateArr.reduce(function (a, b) { return Math.max(a, b); }); /* 최대값 클래스 넣기 */ for (var i in _updateArr) { if (_updateArr[i] == _max) { var _tag = $("._GUIDE__list__col--update-pub").eq(i).closest("._GUIDE__list__item"); var _sch = _tag.find("._GUIDE__list__col--no .sch_state"); _tag.addClass("state_new"); _sch.text(_sch.text() + " state_new"); } }; /* 검색 */ var oItems = $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { $(this).attr("data-search", $(this).text().toLowerCase()); }); var searchFn = function () { var o = $("#list-body"); $("#list-sch_txt").on("keyup", function ($e) { var t = $(this).val().toLowerCase(); o.find("li").hide(), /* o.find(":contains(" + t + ")").closest("li").show(); */ $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { var str = $(this).attr("data-search"); if (str.match(t)) { $(this).closest("li").show(); } }); /* 입력 문자 해쉬 변환 */ if ($e.keyCode === 13) { window.location.hash = ''; var _url = window.location.href; if (_url.indexOf("#") == -1) { window.location.href = _url + "#" + encodeURI(t, "UTF-8"); } else { window.location.href = _url + encodeURI(t, "UTF-8"); } searchFn(); } }); }; $("#list-head").length && searchFn(); if (window.location.hash) { var _hash = decodeURI(window.location.hash, "UTF-8"); $("#list-sch_txt").val(_hash.replace("#", "")); $("#list-sch_txt").trigger("keyup"); }; /* 검색 클릭 */ $(".js-legend_list li").on("click", function ($e) { $e.preventDefault(); var _state_sch = $(this).data("state"); if ($("#list-sch_txt").val()) { $(".js-legend_list li").removeClass("on"); $("#list-sch_txt").val(""); $("#list-sch_txt").trigger("keyup"); } else { $(this).addClass("on"); $("#list-sch_txt").val(_state_sch); $("#list-sch_txt").trigger("keyup"); } }) });