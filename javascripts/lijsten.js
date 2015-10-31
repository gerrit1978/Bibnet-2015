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
  
  $('.overview-items .status ul li a').click(function(e) {
    $(this).parent().parent().parent().parent().parent().find('.message').html('<strong>Vergeet dit item niet te raten!</strong>');
  });
  
  // Raty
  $('.rating').raty({
    half      : true,
    size      : 24,
    path      : 'javascripts/raty/images',
    score     : function() {
     			  return $(this).attr('data-score');
     			}
  });

  // Raty read only
  $('.rating-read-only').raty({
    half      : true,
    size      : 24,
    readOnly : true,
    path      : 'javascripts/raty/images',
    score     : function() {
     			  return $(this).attr('data-score');
     			}
  });



});