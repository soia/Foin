(function ($) {
  "use strict";

  window.foin = $.extend({}, {

    init: function () {
      foin.initAccordion();
      foin.wowAnimate();
    },

    initAccordion: function () {
      $(function () {
        $(".accordion").accordion({
          collapsible: true,
          heightStyle: "content"
        });

      });

      $(function () {
        let icons = {
          header: "ui-icon-plus",
          activeHeader: "ui-icon-minusthick"
        };
        $(".accordion").accordion({
          icons: icons,
          icons: icons
        });
        $("#toggle").button().on("click", function () {
          if ($(".accordion").accordion("option", "icons")) {
            $(".accordion").accordion("option", "icons", null);
          } else {
            $(".accordion").accordion("option", "icons", icons);
          }
        });
      });
    },

    wowAnimate: function () { 
      new WOW().init();
    }

  });

  $(document).ready(function () {
    foin.init();
  });
})(jQuery);