jQuery.noConflict()(function($) {

    "use strict";

    var $window = window,
        offset = '90%',
        $doc = $(document),
        self = this,
        body = $('body'),
        html = $('html'),
        TweenMax = window.TweenMax,
        TweenLite = window.TweenLite,
        tm_theme = window.tm_theme || {};
        tm_theme.window = $(window);
        tm_theme.document = $(document);
        window.tm_theme = tm_theme;
        tm_theme.window = $(window);
        tm_theme.sameOrigin = true;
    var mobileBreakpoint = 992;
    var DURATION = 300;

    function setOverlay(cb) {
        var overlay = $('<div class="overlay"></div>');
        overlay.on('click', cb);
        return overlay;
    }

    AOS.init({
        duration: 1000
    });


    //Imagel Slider
    tm_theme.image_slider_post_format = function(){
        var testimonila_slider = $('.fl-post-image-slider');
        if(testimonila_slider.length){
            testimonila_slider.each(function() {
                var $this = $(this);
                $this.not('.slick-initialized').slick({
                    dots: false,
                    infinite: false,
                    arrows: true,
                    autoplay:false,
                    autoplaySpeed: 6000,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    prevArrow: $('.post-prev-slider-btn'),
                    nextArrow: $('.post-next-slider-btn'),
                });
            });
        }
    };
    /* 4. Fixed header */
    tm_theme.initHeaderFixed = function() {
        var header = $('.__js_fixed-header');
        var classes = 'header--fixed';
        var headerHeight = header.outerHeight();
        var scroll = $(window).scrollTop();
        var isScroll = false;
        var isAbsoluteHeader = header.hasClass('header--absolute');

        $(window).on('scroll', function() {
            scroll = $(window).scrollTop();

            if (scroll >= headerHeight) {
                isScroll = true;

                headerHeight = isScroll ? header.outerHeight() : null;
                header.addClass(classes);

                var sticky_height = 0;
                var $divWithId = $('#wpadminbar');

                if (!header.hasClass('is-fixed')) {
                    if($divWithId.length){
                        if( $('.tm-mega-menu').css('display')=='none') {
                            if ($(window).width() < 782) {
                                if($(window).width() < 600){
                                    sticky_height = headerHeight;
                                } else {
                                    sticky_height = headerHeight + 46;

                                }
                            } else {

                                    sticky_height = headerHeight + 32;
                            }
                        } else {
                            sticky_height = headerHeight + 32;
                        }
                        header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + sticky_height + 'px)'}).addClass('is-fixed');
                    } else {
                        header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + headerHeight + 'px)'}).addClass('is-fixed');
                    }

                    if (!isAbsoluteHeader) {
                        body.css('padding-top', headerHeight + 'px');
                    }
                }


                if($divWithId.length){
                    if ($('.single-project__stiky .elementor-widget-wrap').length > 0){
                        $('.single-project__stiky .elementor-widget-wrap').css('top',sticky_height + 'px')
                    }
                } else {
                    if ($('.single-project__stiky .elementor-widget-wrap').length > 0){
                        $('.single-project__stiky .elementor-widget-wrap').css('top',headerHeight + 'px')
                    }
                }


            } else {
                isScroll = false;
                header.removeClass(classes + ' is-fixed').removeAttr('style');
                if (!isAbsoluteHeader) {
                    body.css('padding-top', 0);
                }
                if ($('.single-project__stiky .elementor-widget-wrap').length > 0){
                    $('.single-project__stiky .elementor-widget-wrap').css('top',0)
                }
            }
        });


    };


    /* 5. Header search */
    tm_theme.initHeaderSearchForm = function() {
        var search = $('.__js_header-search');
        var toggle = search.find('.header-search__toggle');

        var activeClass = 'header-search--opened';

        toggle.on('click', function() {
            search.toggleClass(activeClass);
        });
    };

    /* 16. Animation of statistics */
    tm_theme.initCounter = function() {
        var statistics = $('.statistics');
        var numbers = $('.__js_number');
        var animationIsDone = false;
        var scroll = $(window).scrollTop() + $(window).height();

        if ($('*').is('.statistics')) {
            var offset = statistics.offset().top;

            if (!animationIsDone && scroll >= offset) {
                animateNumbers();
            }

            $(window).on('scroll', function() {
                scroll = $(window).scrollTop() + $(window).height();

                if (!animationIsDone && scroll >= offset) {
                    animateNumbers();
                }
            });
        }

        function animateNumbers() {
            numbers.each(function() {
                var endValue = parseInt($(this).attr('data-end-value'), 10);

                $(this).easy_number_animate({
                    start_value: 0,
                    end_value: endValue,
                    duration: 2500
                });

            });

            animationIsDone = true;
        }
    };


    /* 6. Project slider */
    tm_theme.initWorksSlider = function(){
        var mySwiper = new Swiper('.__js_slider-single', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.slider__nav-btn--next',
                prevEl: '.slider__nav-btn--prev',
            }
        });

        var thumbsForLatestProjects = new Swiper('.__js_slider-thumbs', {
            slidesPerView: 3,
            loop: false,
            freeMode: true,
            loopedSlides: 3, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 480px
                576: {
                    slidesPerView: 2,
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 3,
                }
            }
        });

        var latestProjectsSlider = new Swiper('.__js_slider-simple', {
            slidesPerView: 1,
            loop: false,
            thumbs: {
                swiper: thumbsForLatestProjects,
            },
            navigation: {
                nextEl: '.slider__nav-btn--next',
                prevEl: '.slider__nav-btn--prev',
            }
        });

        var thHeroSliderThumbs = new Swiper('.__js_th-hero-slider-thumbs', {
            slidesPerView: 'auto',
            loop: false,
            freeMode: true,
            loopedSlides: 3, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var thHeroSliderCurrent = document.querySelector('.__js_th-hero-slider-current');
        var thHeroSliderTotal = document.querySelector('.__js_th-hero-slider-total');
        var thHeroSliderSlidesCount = document.querySelectorAll('.__js_th-hero-slider .th-hero-slider__slide').length;

        var thHeroSlider = new Swiper('.__js_th-hero-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            thumbs: {
                swiper: thHeroSliderThumbs
            },
            navigation: {
                nextEl: '.th-hero-slider__nav-btn--next',
                prevEl: '.th-hero-slider__nav-btn--prev',
            },
            on: {
                init: function () {
                    if (thHeroSliderCurrent && thHeroSliderTotal) {
                        thHeroSliderCurrent.textContent = this.realIndex + 1;
                        thHeroSliderTotal.textContent = thHeroSliderSlidesCount;
                    }
                    console.log(this.slides);
                },
                slideChange: function () {
                    if (thHeroSliderCurrent) {
                        thHeroSliderCurrent.textContent = this.realIndex + 1;
                    }
                }

            },
        });

    };

    /* 8. Project carousel */
    tm_theme.initWorksCarousel = function(){
        var mySwiper = new Swiper('.__js_slider-carousel', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: false,

            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        var modernCarousel = new Swiper('.__js_slider-carousel-double', {
            slidesPerView: 1,
            loop: false,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                },
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

        var thCarouselPrev = document.querySelector('.__js_th-latest-projects__btn--prev');
        var thCarouselNext = document.querySelector('.__js_th-latest-projects__btn--next');

        var thСarousel = new Swiper('.__js_th-latest-projects-carousel', {
            slidesPerView: 1,
            loop: false,
            spaceBetween: -4,
            breakpoints: {
                768: {
                    slidesPerView: 2
                }
            },
        });

        if (thCarouselPrev && thCarouselNext) {
            thCarouselPrev.addEventListener('click', function() {
                thСarousel.slidePrev(DURATION);
            });
            thCarouselNext.addEventListener('click', function() {
                thСarousel.slideNext(DURATION);
            });
        }
    }

    /* 9. Hero slider */
    tm_theme.initHeroSlider = function() {
        var mySwiper = new Swiper('.__js_hero-banner', {
            slidesPerView: 1,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    };



    /* 18. Packery init */
    tm_theme.initPackery = function() {
        $(window).on('load', function(){
            var select = $('.__js_filter-select');
            var filterItem = $('.filter__item');
            var filterItemAll = $('.filter__item[data-filter="*"]');
            var filterActiveClass = 'filter__item--active';

            var grid = $('.__js_works-filter').isotope({
                itemSelector: '.works__item',
                layoutMode: 'packery',
                packery: {
                    gutter: 0
                },
            });

            var grid2 = $('.__js_news-list-filter').isotope({
                itemSelector: '.__js_news-list-item',
                layoutMode: 'packery',
                packery: {
                    gutter: 0
                },
            });

            setTimeout(function () {
                $('.masonry').isotope({
                    itemSelector: '.masonry-item',
                    layoutMode: 'packery'
                });
            }, 100);

            select.on('change', function () {
                var value = select.val();
                var filterValue = value !== '*' ? '.__js_' + value : value;

                if (value !== '*') {
                    var filterValue = '.__js_' + value;
                    filterItem.removeClass(filterActiveClass);
                } else {
                    filterItemAll.addClass(filterActiveClass);
                    var filterValue = value;
                }

                grid.isotope({ filter: filterValue });
            });

            filterItem.on('click', function() {
                var filterValue = $(this).attr('data-filter');

                $(this).addClass(filterActiveClass).siblings().removeClass(filterActiveClass);
                grid.isotope({ filter: filterValue });
                grid2.isotope({ filter: filterValue });

                if ($('.__js_news-list-filter') && $('.__js_news-list-filter').length > 0) {
                    var destination = $('.__js_news-list-filter').offset().top - 200;

                    $('html').animate({ scrollTop: destination }, 1100); //1100 - скорость
                }
            });
        });
    };


    /* 7. Testimonials slider */
    tm_theme.testimonialsSlider = function() {
        var mySwiper = new Swiper('.__js_testimonials-carousel', {
            slidesPerView: 'auto',
            spaceBetween: 60,
            loop: true,
            navigation: {
                nextEl: '.testimonials__nav-btn--next',
                prevEl: '.testimonials__nav-btn--prev',
            },
        });
    };

    tm_theme.testimonialsSliderTwo = function(){
        var sliderSingle2 = new Swiper('.__js_slider-single-2', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            navigation: {
                prevEl: '.works-arrow--prev',
                nextEl: '.works-arrow--next'
            },
            pagination: {
                el: '.slide-counter-2',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        '<span class="' + totalClass + '"></span>';
                }
            }
        });
    };


    tm_theme.initMasonry = function(){
        setTimeout(function () {
            $('.masonry').isotope({
                itemSelector: '.masonry-item',
                layoutMode: 'packery'
            });
        }, 100);
    };


    /* 10. News slider */
    tm_theme.initNewsSLider  =function(){
        var sliderNews = new Swiper('.__js_slider-news', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                prevEl: '.slider__nav-btn--prev',
                nextEl: '.slider__nav-btn--next'
            },
            loop: true,
            speed: 300
        });
    };

    tm_theme.initNewsSLiderTwo = function(){
        var sliderNews2 = new Swiper('.__js_slider-news-2', {
            slidesPerView: 1,
            loop: true,
            speed: 600,
            navigation: {
                prevEl: '.arrow-square--prev',
                nextEl: '.arrow-square--next'
            },
            breakpoints: {
                1560: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 2
                }
            }
        });
    };

    tm_theme.initNewsSLiderThree = function(){
        var sliderNews3 = new Swiper('.__js_slider-news-3', {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 300,
            loop: false,
            navigation: {
                prevEl: '.news-sb-page__related-arrow--prev',
                nextEl: '.news-sb-page__related-arrow--next'
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                768: {
                    slidesPerView: 2
                }
            }
        });
    };


    /* 15. Animation circle diagram */
    tm_theme.initAnimationCircleDiagram = function(){
        var diagrams = document.querySelectorAll('.__js_diagram');
        var specialization = document.querySelector('.specialization');
        var windowHeight = window.innerHeight;
        var animationDone = false;

        if (diagrams && specialization) {
            diagrams.forEach(function(item) {
                var progress = item.querySelector('.diagram__circle--progress');
                var progresslength = Math.round(progress.getTotalLength());
                progress.setAttribute('stroke-dasharray', '0 ' + progresslength);
            });

            window.onscroll = function () {
                var offset = specialization.getBoundingClientRect().top;

                if (offset <= windowHeight && !animationDone) {
                    diagrams.forEach(function(item) {
                        var progress = item.querySelector('.diagram__circle--progress');
                        var progresslength = Math.round(progress.getTotalLength());
                        var percent = item.querySelector('.diagram__percent').textContent;
                        var percentValue = parseFloat(percent, 10);
                        var progressFill = percentValue * progresslength / 100;
                        progress.style.strokeDasharray = progressFill + ' ' + progresslength;
                    });

                    animationDone = true;
                }
            }
        }
    };



    /* 12. Modal window with a form on the contact page */
    tm_theme.initOpenContactsModal = function() {
        var openContactsModalBtn = $('.__js_open-contacts-modal');
        var contactsModal = $('.contacts__modal');
        var closeContactsModalBtn = contactsModal.find('.contacts__modal-close');

        openContactsModalBtn.on('click', function(evt) {
            evt.preventDefault();

            contactsModal.fadeIn(DURATION);
            closeContactsModalBtn.on('click', closeModal);
        });

        function closeModal() {
            contactsModal.fadeOut(DURATION);
        }
    };


    /* 3. Mobile menu */
    tm_theme.initMobileMenu = function() {
        var menuOpenBtn = $('.menu-toggle');
        var menuCloseBtn = $('.menu__close');
        var menu = $('.tm-menu-mobile');

        var dropdownLinks = menu.find('.has-submenu .main-menu-link');

        var ModifierClass = {
            MENU: 'menu--opened',
            TOGGLE: 'menu-toggle--opened'
        };

        menuOpenBtn.on('click', function() {
            var overlay = setOverlay(closeMenu);//
            body.append(overlay);

            menuCloseBtn.on('click', closeMenu);
            menuOpenBtn.addClass(ModifierClass.TOGGLE);
            setTimeout(function() {
                overlay.fadeIn(DURATION);
                $('#wpadminbar').css('position', 'fixed');
                $('body').addClass("fixed-position");

                menu.addClass(ModifierClass.MENU);
            }, DURATION + 50);
        });

        dropdownLinks.on('click', function(evt) {
            evt.preventDefault();
            $(this).next().find('a').on('click', closeMenu);
            $(this).next().slideToggle(DURATION);
        });

        function closeMenu() {
            menuCloseBtn.off('click', closeMenu);
            menu.removeClass(ModifierClass.MENU);
            var overlay = $('.overlay').fadeOut(DURATION);
            $('body').removeClass("fixed-position");

            setTimeout(function() {
                menuOpenBtn.removeClass(ModifierClass.TOGGLE);
                $("#wpadminbar").removeAttr("style");
                overlay.remove();
            }, DURATION + 50);
        }

        $(window).on('resize', function() {
            var windowWidth = $(window).width();

            if (windowWidth >= mobileBreakpoint) {
                closeMenu();
            }
        });
    };
    /* 3. Mobile menu */
    /* 20. Pagepiling */
    tm_theme.initPagepiling = function(){
        initFullPage();

        function initFullPage() {
            if ($('#pagepiling') && $('#pagepiling').length > 0) {
                $('#pagepiling').pagepiling({
                    scrollingSpeed: 280,
                    loopBottom: true,
                    verticalCentered: false,
                    afterLoad: function (anchorLink, index) {
                        var current = $('#pagepiling .elementor-top-section.active');

                        if (current.hasClass('dark')) {
                            setDark();
                        } else {
                            removeDark();
                        }

                        $('.fp-table.active .aos-init').addClass('aos-animate');
                    }
                });
            }
        }

        function setDark() {
            $('.header-3').addClass('header-3--dark');
            $('.footer-3').addClass('footer-3--dark');
            $('#pp-nav').addClass('dark');
        }

        function removeDark() {
            $('.header-3').removeClass('header-3--dark');
            $('.footer-3').removeClass('footer-3--dark');
            $('#pp-nav').removeClass('dark');
        }
    };
    tm_theme.toNextSectionInit = function() {
        var scrollToBtn = $('.__js_to-next-section');

        if(scrollToBtn.length) {
            scrollToBtn.on('click', function(evt) {
                evt.preventDefault();
               // var this_section =  $(this).parent('section.elementor-section');
                //var elementClick = $(this).attr("href");
               // var elementClick = this_section.next('section.elementor-section');
                //var destination = elementClick.offset().top;


             //  $('html').animate({ scrollTop: $(this).parent('section.elementor-section').next('section.elementor-section').offset().top }, 1100); //1100 - скорость
            });
        }

        var to_next_btn = $('#to_next_section');
        to_next_btn.on('click', function(evt) {
            var cls = $(this).closest(".elementor-section").next().offset().top;
            $("html, body").animate({scrollTop: cls}, "slow");
        });



    };

    /* 3.1 Mobile left aside */
    tm_theme.leftMenuInit = function() {
        var toggleBtn = $('.header-toggle');
        var header = $('.header--aside');

        var dropdownLinks = $('.tm-left-menu .has-submenu .main-menu-link');

        toggleBtn.on('click', function() {

            if($(this).hasClass('on')) {
                close();
            } else {
                var overlay = setOverlay(close);
                body.append(overlay);

                $(this).removeClass('off').addClass('on');

                setTimeout(function() {
                    overlay.fadeIn(DURATION);
                    header.addClass('header--opened');
                }, 500);
            }
        });

        dropdownLinks.on('click', function(evt) {
            evt.preventDefault();
            $(this).next().slideToggle(DURATION);
        });

        function close() {
            var overlay = $('.overlay');

            toggleBtn.addClass('off').removeClass('on');

            setTimeout(function() {
                overlay.fadeOut(DURATION);
                header.removeClass('header--opened');

                setTimeout(function() {
                    overlay.remove();
                }, DURATION)


            }, 500);
        }

        $(window).on('resize', function() {
            if ($(window).width() >= 1200) {
                close();
            }
        });
    };

    //If is mobile
    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }

    /* 22. Fixed footer */
    tm_theme.fixedFooter = function() {
       // if(isMobile()){
            $(window).on('load', function() {
                var footer = $('footer:not(.footer--technical):not(.footer-3):not(.wp-block-latest-comments__comment-meta)');
                var footerParent = footer.parent();
                var footerHeight = footer.innerHeight();

                if (footerHeight <= $(window).height()) {
                    var leftValue = footerParent.css('padding-left');
                    footer.css({ 'position': 'fixed', 'left': leftValue, 'right': '0', 'bottom': '0'});
                    html.css('padding-bottom', footerHeight);
                } else {
                    html.css('padding-bottom', '0');
                    footer.removeAttr('style');
                }

                $(window).on('resize', function() {
                    footerHeight = footer.innerHeight();

                    if (footerHeight <= $(window).height()) {
                        leftValue = footerParent.css('padding-left');
                        footer.css({ 'position': 'fixed', 'left': leftValue, 'right': '0', 'bottom': '0'});
                        html.css('padding-bottom', footerHeight);
                    } else {
                        html.css('padding-bottom', '0');
                        footer.removeAttr('style');
                    }
                });
            });
       // }
    };

    tm_theme.initTarif = function(){
        var optionsTariff = {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 1,
            speed: 300,
            loop: false,
            centeredSlides: true,
            centeredSlidesBounds: true,
        };

        var priceList = undefined;
        priceList = new Swiper('.__js_slider-price', optionsTariff);
        if ($('.__js_slider-price').length > 0) {
            $(window).resize(function () {
                initPriceSlider();
            });
        }

        initPriceSlider();

        function initPriceSlider() {
            if (window.matchMedia('(max-width: 1199px)').matches && priceList == undefined) {
                var slider = $('.pricing__slider-container');

                priceList.on('slideChange', function () {
                    priceList.activeIndex === 0 ? slider.addClass('hide-left') : slider.removeClass('hide-left');
                    priceList.activeIndex === priceList.slides.length - 1 ? slider.addClass('hide-right') : slider.removeClass('hide-right');
                });
            } else if (window.matchMedia('(min-width: 1200px)').matches && priceList != undefined) {
                priceList.destroy();
                priceList = undefined;
            }
        }
    };
    /* 17. Modal */
    tm_theme.initFancyBox = function(){
        $(document).ready(function() {
            $(".fancybox").fancybox({
                touch: false
            });

        });
    };


    //Elementor
    if($('html').hasClass('elementor-html')){
        $('#fl-main-holder').removeClass('animsition');
        $('.preloader').css('display', 'none');
    }


    tm_theme.initVenoBoxFunction = function () {
        var venobox = $('.venobox');
        if(venobox.length){
            venobox.each(function() {
                $(this).venobox();
            });
        }
    };
//Image Popups
    tm_theme.initImagePopup = function(){
        $('.fl-gallery-image-popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 500,
            image: {
                markup: '<div class="mfp-figure">'+
                    '<div class="mfp-img"></div>'+
                    '<div class="mfp-bottom-bar">'+
                    '<div class="mfp-title"></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="mfp-close"></div>'+
                    '<div class="mfp-counter"></div>'
            },
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'fl-zoom-in-popup-animation';
                }
            },
            closeOnContentClick: true,
            midClick: true,
            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' +
                    '<svg viewBox="0 0 40 40">'+
                    '<path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path>'+
                    '</svg>'+
                    '</button>', // markup of an arrow button

                tPrev: 'Previous', // title for left button
                tNext: 'Next', // title for right button

                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            }
        });
    };




    tm_theme.initCustomFunction = function(){
        //Fixed Footer
        tm_theme.fixedFooter();
        //Init Left menu
        tm_theme.leftMenuInit();
        //Init Mobile menu
        tm_theme.initMobileMenu();
        // Header One Search
        tm_theme.initHeaderSearchForm();
        // Header Fixed
        tm_theme.initHeaderFixed();
        //Counter
        tm_theme.initCounter();
        //Works slider
        tm_theme.initWorksSlider();
        //Works Carousel
        tm_theme.initWorksCarousel();
        //Hero slider
        tm_theme.initHeroSlider();
        //Packery init
        tm_theme.initPackery();
        //Testimonials Slider
        tm_theme.testimonialsSlider();
        tm_theme.testimonialsSliderTwo();
        //News Slider
        tm_theme.initNewsSLider();
        tm_theme.initNewsSLiderTwo();
        tm_theme.initNewsSLiderThree();
        //Masonry
        tm_theme.initMasonry();
        //Circle Diagram
        tm_theme.initAnimationCircleDiagram();
        //Open Contacts Modal
        tm_theme.initOpenContactsModal();
        //Pageliping
        tm_theme.initPagepiling();
        //To next Section
        tm_theme.toNextSectionInit();
        //Tarif
      //  tm_theme.initTarif();
        //Fancy box
        tm_theme.initFancyBox();
        //Venobox
        tm_theme.initVenoBoxFunction();

        tm_theme.initImagePopup();
        tm_theme.image_slider_post_format();
    };

    tm_theme.initCustomFunction();


      $('.field input').add($('.field textarea')).on('focus', function () {
        if ($(this).parent().hasClass('field--md-small')) {
          $(this).addClass('outer');
        } else {
          $(this).parent().addClass('outer');
        }

        $(this).parent().siblings('.contact_required').addClass('outer_text');
        $(this).parent().siblings('.underline').addClass('focus_underline');
      });

      $('.field input').add($('.field textarea')).on('focusout', function () {
        if ($(this).parent().hasClass('field--md-small')) {
          $(this).removeClass('outer');
        } else {
          $(this).parent().removeClass('outer');
        }

          $(this).parent().siblings('.contact_required').removeClass('outer_text');
          $(this).parent().siblings('.underline').removeClass('focus_underline');

      });
});





