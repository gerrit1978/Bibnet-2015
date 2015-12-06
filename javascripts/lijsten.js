$(document).ready(function() {
  // Main page sorting
  $('.sortable').sortable();

  // Status
  /*
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
  */
  
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

  /**
   * List detail page
   */

  // 1. Iterate over the items for initializing
  $('ul.list-detail li.overview-item').each(function() {
    var currentStatus = $(this).find('input[name=status]').val();

    // Show ratings for items that have status "done"
    if (currentStatus == 'done') {
      $(this).find('.rating-wrapper').show();
    }
    
    // Hide current status link
    $(this).find(".status ul li a").each(function() {
      var target = $(this).attr('data-target');
      if (target == currentStatus) {
        $(this).parent("li").hide();
      }
    });
  });
  

  // 2. Toggle status
  $('a.toggle-status').click(function(e) {
    // get the new status
    var newStatus = $(this).attr('data-target');
  
    // get item delta and id
    var delta = $(this).attr('data-delta');
    var id = "#item-" + delta;
    //var currentStatus = $(id).find('input[name=status]').val();

    // set new status in hidden field
    $(id).find('input[name=status]').val(newStatus);
    
    // set new status in frontend and toggle visibility of rating
    if (newStatus == "todo") {
      var html = "<span>Te lezen</span>";
      $(id).find('.rating-wrapper').hide();
    }
    if (newStatus == "done") {
      var html = "<span>Gelezen</span>";
      $(id).find('.rating-wrapper').show();
      $(id).find('.popup').fadeIn().delay(2000).fadeOut();
      // do Popup here!
    }
    $(id).find('li.current-status').html(html);
    
    // hide current link
    var selectorLinks = id + " .status ul li";
    $(selectorLinks).show();
    $(this).parent().hide();

    /*
     * Erwin, do AJAX call HERE
     */
    e.preventDefault();
  });
  
  // 3. Toggle visibility 
  $('.overview-items .status ul li').click(function(e) {
    var div = $(this).parent().parent();
    var currentHeight = $(div).height();
    if (currentHeight == 35) {
		$(div).height(70).css('border', '1px solid white');
    } else {
      $(div).height(35).css('border', 'none');
    }
    e.preventDefault();
  });
  
  // 4. When the arrow is clicked, toggle height
  $('.overview-items .status ul .arrow').click(function(e) {
    var div = $(this).parent().parent();
    var currentHeight = $(div).height();
    if (currentHeight == 35) {
      $(div).height(70).css('border', '1px solid white');
    } else {
      $(div).height(35).css('border', 'none');
    }
  });

});