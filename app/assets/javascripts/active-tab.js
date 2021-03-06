$(window).on('turbolinks:load', function() {
  if (document.URL.match(/users/)) { 
    let tabs = $(".mypage-tabs").find("li");
    let links = tabs.find("a")
    let contents = $(".mypage-tab-container").find("tab-content").find("ul");

    let tabs_goods = $(".mypage-tab-goods").find("li");
    let links_goods = tabs_goods.find("a")
    let contents_goods = $(".mypage-tab-container__goods").find("tab-content").find("ul");

    let tab_content = $('.tab-content').find('ul');
    let tab_content_goods = $('.tab-content_goods').find('ul');

    // タブの操作(お知らせとやる事リスト)
    tabs.click(function(){
      tab_content.removeClass('show');
      const index = $(this).index();
      $('.tab-pane').eq(index).addClass('show');
    });

    // タブの操作(取引中と過去の取引)
    tabs_goods.click(function(){
      tab_content_goods.removeClass('show');
      const index = $(this).index();
      $('.tab-pane_goods').eq(index).addClass('show');
    }); 


    function tabSwitch() {

      const index = tabs.index(this);
      
      tabs.removeClass("active").eq(index).addClass("active");
      links.removeClass("active")
      contents.removeClass("active").eq(index).addClass("active");
    };

    function tabSwitch_goods() {

      const index = tabs_goods.index(this);
      
      tabs_goods.removeClass("active").eq(index).addClass("active");
      links_goods.removeClass("active")
      contents_goods.removeClass("active").eq(index).addClass("active");
    };

    tabs.click(tabSwitch);

    tabs_goods.click(tabSwitch_goods);

  };
});