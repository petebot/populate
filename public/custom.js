$(document).ready(function () {
  $("#CollapsingNavbar2 a.list-group-item").click(function(event) {
    $(".navbar-toggleable-sm").collapse('hide');
  });
  $(".navbar-brand, #contextant-nav li a[href^='#'], #CollapsingNavbar2 a.list-group-item").on('click', function(event) {
    var target;
    target = this.hash;

    event.preventDefault();

    var navOffset;
    navOffset = $('#navbar').height();

    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 300, function() {
      return window.history.pushState(null, null, target);
    });
  });
});
