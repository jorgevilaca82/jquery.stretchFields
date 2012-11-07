
(function ($) {
  $.fn.stretch = function (options) {
    var elements = this;
    var spacing = 0;
    var css_props = [
      "padding-right",     "padding-left",
      "margin-right",      "margin-left",
      "border-left-width", "border-right-width"
    ];
    
    elements.each(function () {
      $this = $(this);
      $(css_props).each(function (index, value) {
        $this.css(value, function (index, value) {
          spacing += parseInt(value, 10);
        });
      });

      $this.css("width", $this.parent().width() - spacing );
      spacing = 0;
    });

    if (options !== undefined) {
      if (options.responsive) {
        $(window).resize(function () {
          elements.stretch();
        });
      }
    }
    
    return this;
  };

}(jQuery));



// Exemplo de uso
$(document).ready(function () {
  $('.stretch').stretch({
    responsive : true
  });
});