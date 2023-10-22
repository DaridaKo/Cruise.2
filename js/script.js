$(document).ready(function(){
	$('.blog__wrapper').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
  		slidesToScroll: 3,
  		responsive: [
    	{
      	breakpoint: 1280,
      		settings: {
        		slidesToShow: 3,
        		slidesToScroll: 3
      		}
    	},
    	{
     	 breakpoint: 865,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 2
      		}
    	},
    	{
     	 breakpoint: 544,
      	 settings: "unslick" 
    	}
  	]
});
});