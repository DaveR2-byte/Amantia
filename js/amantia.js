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
		portfolioLightboxOptionsThird = {
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
				$('#thumbGalleryDetailThird').owlCarousel().trigger('refresh.owl.carousel');
				$('#thumbGalleryDetailThird').owlCarousel().trigger('to.owl.carousel', [clickedItem, 0]);

				$('#thumbGalleryThumbsThird').owlCarousel('refresh');

				removeShowThumbsTimeout = setTimeout(function(){
					$('#thumbGalleryThumbsThird').removeClass('show-thumbs');
				}, 3000);

				$(document).on('keydown', function( event ) {
				    if(event.keyCode == 37) {
				        $('#thumbGalleryDetailThird').trigger('prev.owl')
				    }
				    if(event.keyCode == 39) {
				        $('#thumbGalleryDetailThird').trigger('next.owl')
				    }
				});

				
			},
			close: function(){
				clearTimeout(removeShowThumbsTimeout);
				$('#thumbGalleryThumbsThird').addClass('show-thumbs');
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
	if( $('a[href="#thirdSetPhotos"]').length ) {
		$('a[href="#thirdSetPhotos"]').on('click', function(){
			clickedItem = $(this).parent().index();
		});

		$('a[href="#thirdSetPhotos"]').magnificPopup(portfolioLightboxOptionsThird);
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
	if( $('#thirdSetPhotos').get(0) ) {
		var $thumbGalleryDetail = $('#thumbGalleryDetailThird'),
			$thumbGalleryThumbs = $('#thumbGalleryThumbsThird'),
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

}).apply( this, [ jQuery ]);