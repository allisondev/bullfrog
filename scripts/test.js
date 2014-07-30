$(document).ready(function(){

	//Hide header
	//$('header').hide().fadeIn(2000).fadeOut(2000);

	$('#main-nav').click(function(){
		
		//Show/hide header when main-nav is clicked
		$('header').slideToggle(3000);
		

	});

	// Target only the links in content-center
	$('section.content-center a').click(function(){
		alert('you clicked a link');
	});

	// Target only links in navigation
	// When hovering over these links, console log something
	$('#main-nav a').hover(function(){
		console.log('Hovering over the "' + $(this).text() + '" link in main-nav. ');
	});

	$('#horned-frog').thoughtBubble({
		text: 'I could go for pizza!',
		font: 'avenir'
	});

	// Hide all but the first link in center-content links.
	function hideRestLinks() {
		$('section.content-center ul a').slice(1).hide();
	}

	// Hide all 'Related articles' links, but not 'View All'
	// Then show the first link
	hideRestLinks();

	// When hovering over a 'Related articles' link, show the next link
	$('section.content-center ul a').hover(function(){
		// console.log($(this));
		// console.log($(this).next());
		// console.log($(this).parent().next().text());
		$(this).parent().next().children('a').show();

	});

	// Add a minimize link (after 'View All') in 'Related Articles';
	$('section.content-center').append('<a href="#" id="minimize">Minimize</a>');

	// When clicking minimize, hide all but first link
	$('#minimize').click(function(){
		$('section.content-center').load('test.html');
		//hideRestLinks();
	});

	// Add class - 	For example, add class to an element when user clicked on something
	// 				Then you can use CSS on that class to change how it looks

	// When clicking the new frog, add a new class to the body of the page
	// Then change background to green
	$('#horned-frog').click(function(){
		$('body').toggleClass('froggy');
	});



})