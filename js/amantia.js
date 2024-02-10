(function( $ ) {

	'use strict';

	/*
	Slider
	*/
	$('#revolutionSlider').revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		responsiveLevels: [1920, 1200, 992, 500],
		gridwidth: [1920, 1200, 992, 500],
		gridheight: 780,
		disableProgressBar: 'on',
		spinner: 'spinner3',
		parallax: {
			type: "mouse",
			origo: "slidercenter",
			speed: 2000,
			levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
		},
		navigation: {
			arrows: {
				style: "hades",
				enable: false,
				hide_onmobile: false,
				hide_onleave: false,
				tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				}
			}
		}
	});

	$('#revolutionSlider2').revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		responsiveLevels: [1920, 1200, 992, 500],
		gridwidth: [1920, 1200, 992, 500],
		gridheight: 575,
		disableProgressBar: 'on',
		spinner: 'spinner3',
		parallax: {
			type: "mouse",
			origo: "slidercenter",
			speed: 2000,
			levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
		},
		navigation: {
			arrows: {
				style: "hades",
				enable: false,
				hide_onmobile: false,
				hide_onleave: false,
				tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 10,
					v_offset: 0
				}
			}
		}
	});

	// Our History Gallery
	var clickedItem,
		removeShowThumbsTimeout,
		portfolioLightboxOptionsMain = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailMain').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailMain').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$('#thumbGalleryThumbsMain').owlCarousel('refresh');

				removeShowThumbsTimeout = setTimeout(function(){
					$('#thumbGalleryThumbsMain').removeClass('show-thumbs');
				}, 3000);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailMain').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailMain').trigger('next.owl')
				    }
				});

				
			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$('#thumbGalleryThumbsMain').addClass('show-thumbs');
				$(document).off('keydown');
			}
			}
		},
		portfolioLightboxOptionsSecond = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailSecond').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailSecond').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$('#thumbGalleryThumbsSecond').owlCarousel('refresh');

				removeShowThumbsTimeout = setTimeout(function(){
					$('#thumbGalleryThumbsSecond').removeClass('show-thumbs');
				}, 3000);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailSecond').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailSecond').trigger('next.owl')
				    }
				});

				
			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$('#thumbGalleryThumbsSecond').addClass('show-thumbs');
				$(document).off('keydown');
			}
			}
		},
		portfolioLightboxOptionsFirstVideo = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailFirstVideo').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailFirstVideo').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailFirstVideo').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailFirstVideo').trigger('next.owl')
				    }
				});

			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$(document).off('keydown');
			}
			}
		},
		portfolioLightboxOptionsSecondVideo = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailSecondVideo').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailSecondVideo').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailSecondVideo').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailSecondVideo').trigger('next.owl')
				    }
				});

			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$(document).off('keydown');
			}
			}
		},
		portfolioLightboxOptionsThirdVideo = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailThirdVideo').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailThirdVideo').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailThirdVideo').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailThirdVideo').trigger('next.owl')
				    }
				});

			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$(document).off('keydown');
			}
			}
		},
		portfolioLightboxOptionsFourthVideo = {
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'hidden',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'wedding-portfolio-gallery',

		callbacks: {
			open: function(){
				$('#thumbGalleryDetailFourthVideo').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailFourthVideo').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailFourthVideo').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailFourthVideo').trigger('next.owl')
				    }
				});

			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$(document).off('keydown');
			}
			}
		}


	var clickedItem = '';
	if( $('a[href="#mainPhotos"]').length ) {
		$('a[href="#mainPhotos"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#mainPhotos"]').magnificPopup(portfolioLightboxOptionsMain);
	}
	if( $('a[href="#secondSetPhotos"]').length ) {
		$('a[href="#secondSetPhotos"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#secondSetPhotos"]').magnificPopup(portfolioLightboxOptionsSecond);
	}
	if( $('a[href="#firstVideo"]').length ) {
		$('a[href="#firstVideo"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#firstVideo"]').magnificPopup(portfolioLightboxOptionsFirstVideo);
	}
	if( $('a[href="#secondVideo"]').length ) {
		$('a[href="#secondVideo"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#secondVideo"]').magnificPopup(portfolioLightboxOptionsSecondVideo);
	}
	if( $('a[href="#thirdVideo"]').length ) {
		$('a[href="#thirdVideo"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#thirdVideo"]').magnificPopup(portfolioLightboxOptionsThirdVideo);
	}
	if( $('a[href="#fourthVideo"]').length ) {
		$('a[href="#fourthVideo"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#fourthVideo"]').magnificPopup(portfolioLightboxOptionsFourthVideo);
	}

	/*
	Thumb Gallery
	*/
	if( $('#mainPhotos').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailMain'),
			$thumbGalleryThumbs = $('#thumbGalleryThumbsMain'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			})
			.on('changed.owl.carousel', function(e) {
				if (!flag) {
					flag = true;
					$thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index-1, duration, true]);

					// add class to active thumb
					$thumbGalleryThumbs.find('.owl-item').removeClass('active-thumb');
					$thumbGalleryThumbs.find('.owl-item:eq('+ e.item.index +')').addClass('active-thumb');

					flag = false;
				}
			});

		$thumbGalleryThumbs
			.owlCarousel({
				margin: 15,
				items: 15,
				nav: false,
				center: false,
				dots: false,
				pagination: false,
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
			})
			.on('click', '.owl-item', function() {
				$thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				// add class to active thumb
				$thumbGalleryThumbs.find('.owl-item').removeClass('active-thumb');
				$(this).addClass('active-thumb');
			});

		// Set first item with active-thumb
		$thumbGalleryThumbs.find('.owl-item:eq(0)').addClass('active-thumb');

	}
	if( $('#secondSetPhotos').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailSecond'),
			$thumbGalleryThumbs = $('#thumbGalleryThumbsSecond'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			})
			.on('changed.owl.carousel', function(e) {
				if (!flag) {
					flag = true;
					$thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index-1, duration, true]);

					// add class to active thumb
					$thumbGalleryThumbs.find('.owl-item').removeClass('active-thumb');
					$thumbGalleryThumbs.find('.owl-item:eq('+ e.item.index +')').addClass('active-thumb');

					flag = false;
				}
			});

		$thumbGalleryThumbs
			.owlCarousel({
				margin: 15,
				items: 15,
				nav: false,
				center: false,
				dots: false,
				pagination: false,
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
			})
			.on('click', '.owl-item', function() {
				$thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);

				// add class to active thumb
				$thumbGalleryThumbs.find('.owl-item').removeClass('active-thumb');
				$(this).addClass('active-thumb');
			});

		// Set first item with active-thumb
		$thumbGalleryThumbs.find('.owl-item:eq(0)').addClass('active-thumb');

	}
	if( $('#firstVideo').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailFirstVideo'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			});

	}
	if( $('#secondVideo').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailSecondVideo'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			});

	}
	if( $('#thirdVideo').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailThirdVideo'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			});

	}
	if( $('#fourthVideo').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailFourthVideo'),
			flag = false,
			duration = 300;

		$thumbGalleryDetail
			.owlCarousel({
				items: 1,
				margin: 10,
				nav: true,
				dots: false,
				loop: false,
				navText: [],
				rtl: (($('html[dir="rtl"]').get(0)) ? true : false),
				onRefreshed: function(e){
					setTimeout(function(){
						$('.mfp-wrap.wedding-portfolio-gallery').css('opacity',1);
					}, 300);
				}
			});

	}
}).apply( this, [ jQuery ]);