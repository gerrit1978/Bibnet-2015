jQuery(document).ready(function($) {

  // Main page sorting
  $('.sortable').sortable();

  // Status
  $('.overview-items .status ul .arrow').click(function(e) {
	$('.overview-items .status ul li').show();
  });

});