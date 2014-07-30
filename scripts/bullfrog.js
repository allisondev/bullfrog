$(document).ready(function() {
	
	// On page load, gray 'Related Articles' link, and un-gray 'Featured Articles' link
	$('#related-articles').addClass("clicked-gray");
	$('#featured-articles').addClass("unclicked-white");

	// On page load, show 'Related Articles' and hide 'Featured Articles' content
	$('section.content-center').show();
	$('section.content-right').hide();

	$('#related-articles').click(function(){

		// Show Related Articles
		$('#related-articles').addClass("clicked-gray");
		$('#related-articles').removeClass("unclicked-white");		
		$('section.content-center').slideDown(1500);		

		// Hide Featured Articles
		$('#featured-articles').removeClass("clicked-gray");
		$('#featured-articles').addClass("unclicked-white");		
		$('section.content-right').hide();


	});

	$('#featured-articles').click(function(){

		// Show Featured Articles
		$('#featured-articles').addClass("clicked-gray");
		$('#featured-articles').removeClass("unclicked-white");		
		$('section.content-right').slideDown(1500);

		// Hide Related Articles
		$('#related-articles').removeClass("clicked-gray");
		$('#related-articles').addClass("unclicked-white");	
		$('section.content-center').hide();

	});

	// Toggle Content
	function toggleContent(){
		$('section.content-right').toggle();
		$('section.content-center').toggle();
	}

});




