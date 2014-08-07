var Toast = (function($, undefined) {
  'use strict';

  function setAlert (msg, timing) {
    timing || (timing = 1000);

    appear(msg);
    disappear(timing);
  }

  function appear(msg) {
    $('body').append('<div class="toast"><p>' + msg + '</p></div>');
    var $toast = $('.toast');
    $toast.css({ position: 'fixed', left: '10px', bottom: '-50px', display: 'block' });
    $toast.animate({ bottom: '10px' }, 200);
  }

  function disappear(duration) {
    setTimeout(function() {
      var $toast = $('.toast');
      $toast.animate({ bottom: '-50px' }, 200, function() {
        $toast.remove();
      });
    }, duration);
  }

  return {
    alert: setAlert
  };

})(jQuery);
