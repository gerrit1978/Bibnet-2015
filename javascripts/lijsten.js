jQuery(document).ready(function($) {

  // Main page sorting
  $('.sortable').sortable();

  // Status
  $('.overview-items .status ul .arrow').click(function(e) {
    var list = $(this).parent();
    if (list.hasClass('open')) {
      list.removeClass('open');
      list.find('li').not('.first').hide();
    } else {
      list.addClass('open');
      list.find('li').show();
    }
  });

});