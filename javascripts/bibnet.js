jQuery(document).ready(function($) {

  /* Toggle info text */
  $('.toggle-text').click(function(e) {
    $('#info-text').toggle();
  });

  /* Show the main menu */
  $('.sidebar-first .icon').click(function(e) {
    $(this).parent().find('.inner').slideDown();
    e.preventDefault();
    return false;
  });
  
  /* Hide the main menu on close button click */
  $('.sidebar-first .close-menu a').click(function(e) {
    $(this).parent().parent().parent().find('.inner').hide();
    e.preventDefault();
    return false;
  });
  
  /* Hide the main menu on active menu item click */
  $('.sidebar-first a.active').click(function(e) {
    var w = $(window).width();
    if (w < 990) {
	    $('.sidebar-first .inner').hide();
	    e.preventDefault();
	    return false;
	  }
  });
  
  $('body').click(function(e) {
    var w = $(window).width();
    if (w < 990) {
      $('.sidebar-first .inner').hide();
    }
  }).find('.sidebar-first .inner ul').click(function(e) {
    e.stopPropagation();
  });;

  /* Show general preloader when clicking an external link */
  $('a').click(function(e) {
    var href = $(this).attr('href');
    if (href !== undefined && href.search(/#/) === -1 && href.search(/http/) === -1) {
        var dataLoader = $(this).attr('data-loader');
        if (dataLoader === undefined || "true" === dataLoader) {
            $('#preloader-general').show();
        }
    }
  });
	
	$('a.verleng-alles').click(function(e) {
    var list = $(this).parent().find('ul.items');
    list.each(function() {
      console.log($(this).find('li.item').find('.loader').show());
    });
    /* En nog wat andere calls hier uiteraard */
    e.preventDefault();
    return false;
	});
	
	/* Toggle Details betalingen en uitleenhistoriek - DEPRECATED */
/*
	$('a.show-details-betaling').click(function(e) {
	  var details = $(this).parent().find('.details');
    details.toggle();
    if (details.is(':visible')) { 
      $(this).html('Verberg details &uarr;');   
    } else {
      $(this).html('Toon details &darr;');
    }
    e.preventDefault();
    return false;
	});
	$('a.show-details-historiek').click(function(e) {
	  var details = $(this).parent().find('.details');
    details.toggle();
    if (details.is(':visible')) { 
      $(this).html('Verberg uitleenhistoriek &uarr;');   
    } else {
      $(this).html('Toon uitleenhistoriek &darr;');
    }
    e.preventDefault();
    return false;
	});
*/

  /* Toggle E-boeken lijst */
  $('a.show-details-eboeken').click(function(e) {
    var details = $(this).parent().find('.details');
    details.toggle();
    if (details.is(':visible')) {
      $(this).removeClass("collapsed");
      $(this).addClass("expanded");
    } else {
      $(this).removeClass("expanded");
      $(this).addClass("collapsed");
    }
    e.preventDefault();
    return false;
  });
  
  /* Toggle Details Library page */
  $('.collapsible h2.title').click(function(e) {
    $(this).parent().find('.content').toggle();
    $(this).parent().toggleClass('collapsed');
  });

  /* Tooltips */
  $(".tooltipinit").tooltip();


	
});