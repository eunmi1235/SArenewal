var guideList = ['guide_bxslider.html','guide_highlight.html','guide_icons.html','guide_jqgrid.html','guide_jqueryUI_icons.html','guide_layout.html','guide_mCustomScrollbar.html','guide_scroll_top.html','guide_slider.html','guide_style.html','guide_swiper-3.4.1.html','guide_swiper-4.5.0.html','guide_swiper.html','guide_ui.html','path.html'];
if(guideList != undefined){
  $("#select_guid-list").append('<option value="" disabled selected>===== select =====</option>');
  for(var i = 0; i < guideList.length; i++){
    var _item = "<option value="+ guideList[i] +">"+ guideList[i] +"</option>";
    $("#select_guid-list").append(_item);
  }
  $("#select_guid-list").on("change",function(){
    window.open( $(this).val() );
  })
}
