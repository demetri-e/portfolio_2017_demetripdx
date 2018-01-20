
$(document).ready(function(){//Small Nav Toggle Button
   $('.nav-toggle').on('click', function(){
		$('.small-nav').slideToggle();
   });
});

$(document).ready(function(){//Toggle Button Image Animation
	$('.nav-toggle').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function () {//Sidebar 1 toggle
	$('.sidebar-toggle').click(function () {
		$('#sideBar').animate({
			width: 'toggle'
		}, "slow");
		$('#sideBar2').css('display', 'none');
	});
  });

$(document).ready(function () {//Sidebar 2 toggle
	$('.sidebar-toggle2').click(function () {
		$('#sideBar2').animate({
			width: 'toggle'
		}, "slow");
		$('#sideBar').css('display', 'none');
	});
});

	$(".single-item").slick({ //Slick Slider Init
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
    });
    
// Training Panel slide 1 and image toggle
	$(document).ready(function() {
		$( ".school-panel-control" ).on( "click", function() {
			$(this).siblings('.hidden-content').slideToggle();
			$(this).children().toggle();		
		});
	});

//Training Panel slide 2 and image toggle
	$(document).ready(function() {
		$( ".sp-control2" ).on( "click", function() {
			$('.hidden-list').slideToggle();
					
		});
	});
//pie chart loader
	var myVar;
	function loaderFunction() {
		myVar = setTimeout(showPage, 3000);
	}
	function showPage() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("myDiv").style.display = "block";
	}
// Certificate Modal 
	var clicked=false;
	$(".slide-button7").on('click', function(){
		if(clicked)
		{
			clicked=false;
			$(".slide-panel7").css({"left": "101%"});
		}
		else
		{
			clicked=true;
			$(".slide-panel7").css({"left": 0});
		}
	});
