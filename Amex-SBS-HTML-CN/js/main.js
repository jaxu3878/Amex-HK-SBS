// reload while resize window
var curWidth = window.innerWidth;

$(window).resize(function() {
  if(window.innerWidth != curWidth){
    location.reload();
  }
});

(function($) {
        /* modal 
    =================================
    ================================= */
    var modalHeight = $(document).innerHeight() + 600,
        $modal = $('.form-wrapper'),
        $ctaBtn = $('.ctaBtn, #hero'),
        $ctaClose = $('.form-close'),
        $body = $('body'),
        $loader = $('.loader'),
        modalOpentl = new TimelineMax(),
        modalClosetl = new TimelineMax()
    
    
    // JavaScript for label effects only
	$(window).load(function(){
		$(".formCol input").val("");
		
		$(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})
	});
    
    $ctaBtn.on('click', function(e){
        if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
        
        modalOpentl
            .fromTo($modal, 0.6, {x: '100%', display: 'block', ease:Power2.easeInOut}, {x: '0%', ease:Power2.easeInOut})
            .to($("html, body"), 0.4, {scrollTo:{y:0}, ease:Power2.easeInOut}, '-=0.6')
        ;
        
        $modal.css('height', modalHeight) + 500;
    });
    
    $ctaClose.on('click', function(){
        modalClosetl
            .to($modal, 0.8, {x: '100%', delay: 0.2, display: 'none', ease:Power2.easeInOut})
        
        $modal.css('height', '100%');
        
    });
    
    /* GreenSock Animation
    =================================
    ================================= */
    var icons = $('.icon'),
        blurElement = {a:0},
        tlValue = new TimelineMax({delay: 0.3});
    
    function valueAniamtion(){
        tlValue
            .staggerFromTo(icons, 0.4, {x: -60, autoAlpha: 0, delay: 0.3}, {x: 0, autoAlpha: 1, ease:Back.easeInOut}, 0.2)
            .to(icons, 1, {a:0, onUpdate:applyBlur}, '0.3')
        ;
    }
    valueAniamtion();
	
    function applyBlur() {
        TweenLite.
            set(['.icon'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});  
    };
    
    
    /* ScrollMagic Animation
    =================================
    ================================= */
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    
    // Fade-in CTA button
    var ctaScene = new ScrollMagic.Scene({
        triggerElement: '.welcome-heading', // trigger position
        triggerHook: 0.65
		//duration: '0%'
    })
    .setClassToggle('#ctaBar', 'fade-in') // add class to ctaBar
    /*.addIndicators({
        name: 'cta',
        colorTrigger: '#ff0000',
        indent: 200,
        colorStart: '#800000'
    })*/
    .addTo(controller);
    
    // video 
    var videoTl = new TimelineMax(),
        videoTrigger = $('.testimonial-trigger')
	videoTl
		.from('.testimonial-video', 0.6, {autoAlpha: 0, x: '-50', ease:Power2.easeInOut}, 0.6)
        .from('.testimonial-content', 0.8, {autoAlpha: 0, x: '50', ease:Power2.easeInOut}, '+=0.02')
        .fromTo(videoTrigger, 1.2, {css:{opacity: 0, scale:1.6}, ease:Power2.easeInOut}, {css:{opacity: 1, scale:1}, ease: Elastic.easeOut.config(1, 0.5)}, '-=0.02')
    ;
    
    var videoScene = new ScrollMagic.Scene({
        triggerElement: '#testimonial',
        reverse: false,
        triggerHook: 0.8
		//duration: '100%'
    })
    /*.addIndicators({
        name: 'video',
        colorTrigger: '#03ff03',
        indent: 200,
        colorStart: '#036203'
    })*/
    .setTween(videoTl)
    .addTo(controller);
    

    
    /* slick Slider
    =================================
    ================================= */
    function slider() {
        
        $(".value-icons").slick({
            autoplay: true,
            infinite: true, 
            autoplaySpeed: 1000,
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
              breakpoint: 768
              , settings: {
                  slidesToShow: 2
                  , slidesToScroll: 2
                  , autoplaySpeed: 3000
              }
            }
            , {
              breakpoint: 480
              , settings: {
                  slidesToShow: 1
                  , slidesToScroll: 1
                  , autoplaySpeed: 3000
              }
            }],
        });

        // resources
        $(".resources-articles").slick({
            autoplay: true,
            infinite: true, 
            autoplaySpeed: 1000,
            dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 768
              , settings: {
                  slidesToShow: 2
                  , slidesToScroll: 2
                  , autoplaySpeed: 3000
              }
            }
            , {
              breakpoint: 480
              , settings: {
                  slidesToShow: 1
                  , slidesToScroll: 1
                  , autoplaySpeed: 3000
              }
            }],
        });

        // custom arrows
        $('.value-prev').click(function(){
            $('.slider').slick('slickPrev');
        })

        $('.value-next').click(function(){
            $('.slider').slick('slickNext');
        })
        $('.resources-next').click(function(){
            $('.slider').slick('slickNext');
        })
        $('.resources-next').click(function(){
            $('.slider').slick('slickNext');
        })
    }
    slider();
    
    
})(jQuery);