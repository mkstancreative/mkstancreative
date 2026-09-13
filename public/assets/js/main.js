/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio HTML5 Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Sticky Header
// Hamburger Menu
// OnePage Active Class
// Portfolio Filter
// Portfolio Gallery Carousel
// Testimonial Carousel
// Nice Select
// ALL Popup
// Preloader
// Services Hover BG
// Portfolio Filter BG Color
// WoW Js
// Contact Form

****************************************************/

/*
 * NOTE: This file no longer self-executes on `document.ready` / `window.load`.
 * The markup is rendered by React, which mounts *after* those events fire, so
 * every selector below used to match zero elements (most visibly, the preloader
 * was never dismissed and the page stayed black). Instead we expose
 * `window.initTheme()`, which <App /> calls once the DOM is committed and laid
 * out. The guard makes it safe to call more than once (e.g. React StrictMode).
 */

(function ($) {
  "use strict";

  var initialized = false;

  window.initTheme = function initTheme() {
    if (initialized) return;
    initialized = true;

    /*------------------------------------------------------
    /  Data js
    /------------------------------------------------------*/
    $("[data-bg-image]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-bg-image") + ")"
      );
    });

    $("[data-bg-color]").each(function () {
      $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*------------------------------------------------------
    /  Sticky Header
    /------------------------------------------------------*/
    var lastScrollTop = 0;
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll > 300) {
        $(".tj-header-area.header-sticky").addClass("sticky");
        $(".tj-header-area.header-sticky").removeClass("sticky-out");
      } else if (scroll < lastScrollTop) {
        if (scroll < 500) {
          $(".tj-header-area.header-sticky").addClass("sticky-out");
          $(".tj-header-area.header-sticky").removeClass("sticky");
        }
      } else {
        $(".tj-header-area.header-sticky").removeClass("sticky");
      }

      lastScrollTop = scroll;
    });

    /*------------------------------------------------------
    /  Hamburger Menu
    /------------------------------------------------------*/
    $(".menu-bar").on("click", function () {
      $(".menu-bar").toggleClass("menu-bar-toggeled");
      $(".header-menu").toggleClass("opened");
      $("body").toggleClass("overflow-hidden");
    });

    $(".header-menu ul li a").on("click", function () {
      $(".menu-bar").removeClass("menu-bar-toggeled");
      $(".header-menu").removeClass("opened");
      $("body").removeClass("overflow-hidden");
    });

    /*------------------------------------------------------
    /  Scroll To Section
    /------------------------------------------------------*/
    // onePageNav only owns the two header menus. Every other in-page link
    // (the hero CTA, the footer nav) fell back to a native anchor jump, which
    // the SmoothScroll library intercepts, so those links often did nothing.
    // Handle them here so all in-page links behave the same way.
    $(document).on("click", 'a[href^="#"]', function (e) {
      var href = $(this).attr("href");
      if (!href || href === "#") return;
      // Leave the header menus to onePageNav.
      if ($(this).closest(".header-menu nav ul").length) return;

      var target;
      try {
        target = $(href);
      } catch (err) {
        return; // not a usable selector
      }
      if (!target.length) return;

      e.preventDefault();
      var top = target.offset().top;
      // Prefer native smooth scrolling, which the browser drives itself;
      // jQuery's animate() runs on rAF and stalls in a throttled tab. Both
      // are no-ops while the page is hidden, so jump straight there instead -
      // there is nobody watching the animation anyway.
      // The theme sets `html { scroll-behavior: smooth }`, so a plain
      // scrollTo() is smooth too - and smooth scrolling is suspended while the
      // page is hidden. Ask for "instant" explicitly in that case, otherwise
      // the link silently does nothing.
      window.scrollTo({
        top: top,
        behavior: document.hidden ? "instant" : "smooth",
      });
    });

    /*------------------------------------------------------
    /  OnePage Active Class
    /------------------------------------------------------*/
    if ($.fn.onePageNav) {
      $(".header-menu nav ul").onePageNav({
        currentClass: "current-menu-ancestor",
        changeHash: false,
        easing: "swing",
      });
    }

    /*------------------------------------------------------
    /  Portfolio Filter
    /------------------------------------------------------*/
    // Handled by the Portfolio React component (CSS Grid + state). Isotope
    // used to run here and had to measure the DOM before React had rendered
    // it, which is what left the grid overlapping on first paint.

    /*------------------------------------------------------
    /  Portfolio Gallery Carousel
    /------------------------------------------------------*/
    initCarousel($(".portfolio_gallery.owl-carousel"), {
      items: 2,
      loop: true,
      lazyLoad: true,
      center: true,
      // autoWidth: true,
      autoplayHoverPause: true,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
          margin: 0,
        },
        // breakpoint from 768 up
        768: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });

    /*------------------------------------------------------
    / Testimonial Carousel
    /------------------------------------------------------*/
    initCarousel($(".testimonial-carousel.owl-carousel"), {
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: false,
      active: true,
      smartSpeed: 1000,
      autoplayTimeout: 7000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    /*------------------------------------------------------
    / Post Gallery Carousel
    /------------------------------------------------------*/
    initCarousel($(".tj-post__gallery.owl-carousel"), {
      items: 1,
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        '<i class="fal fa-arrow-left"></i>',
        '<i class="fal fa-arrow-right"></i>',
      ],
      autoplay: false,
      smartSpeed: 1000,
      autoplayTimeout: 3000,
    });

    /*------------------------------------------------------
    /  Nice Select
    /------------------------------------------------------*/
    if ($.fn.niceSelect) {
      $("select").niceSelect();
    }

    /*------------------------------------------------------
    /  ALL Popup
    /------------------------------------------------------*/
    if ($.fn.lightcase && $(".popup_video").length > 0) {
      $(".popup_video").lightcase({
        transition: "elastic",
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true,
      });
    }

    if ($.fn.magnificPopup) {
      $(".modal-popup").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "popup-mfp",
        callbacks: {
          open: function () {
            // The portfolio galleries live inside `.mfp-hide` containers, so
            // Owl Carousel measured them at zero width on init ("Can not
            // detect viewport width") and they opened collapsed. Re-measure
            // now that the popup is actually laid out.
            var $popup = this.content;
            if (!$popup) return;
            setTimeout(function () {
              $popup.find(".owl-carousel").each(function () {
                var owl = $(this).data("owl.carousel");
                if (owl) {
                  owl.onThrottledResize
                    ? owl.onThrottledResize()
                    : $(this).trigger("refresh.owl.carousel");
                } else {
                  $(this).trigger("refresh.owl.carousel");
                }
              });
            }, 0);
          },
        },
      });
    }

    /*------------------------------------------------------
    /  WoW Js
    /------------------------------------------------------*/
    if (window.WOW) {
      var wow = new WOW({
        boxClass: "wow", // default
        animateClass: "animated", // default
        offset: 100, // default
        mobile: true, // default
        live: true, // default
      });
      wow.init();
    }

    /*------------------------------------------------------
    /  Preloader
    /------------------------------------------------------*/
    revealPage();

    /*------------------------------------------------------
    /  Services Hover BG
    /------------------------------------------------------*/
    service_animation();

    /*------------------------------------------------------
    /  Contact Form
    /------------------------------------------------------*/
    initContactForm();
  };

  /*------------------------------------------------------
  /  Owl Carousel init
  /------------------------------------------------------*/
  // Owl logs "Can not detect viewport width" and renders an empty shell when
  // it is initialised on a container with no children, which is what the
  // placeholder `.portfolio_gallery` divs are. Only initialise real content.
  function initCarousel($el, options) {
    if (!$el.length || !$.fn.owlCarousel) return;
    $el.each(function () {
      if ($(this).children().length === 0) return;
      $(this).owlCarousel(options);
    });
  }

  /*------------------------------------------------------
  /  Preloader animation
  /------------------------------------------------------*/
  function revealPage() {
    var $preloader = $(".preloader");
    if (!$preloader.length) return;

    var svg = document.getElementById("preloaderSvg");
    var svgText = document.querySelector(".hero-section .intro_text svg text");

    function startStrokeAnimation() {
      // `svgText` is optional markup - only animate it when it is present.
      if (svgText) svgText.classList.add("animate-stroke");
    }

    // Without GSAP the timeline can never run, so hide the overlay outright
    // rather than leaving the whole page behind a black screen.
    if (!window.gsap || !svg) {
      $preloader.css({ display: "none", zIndex: -1 });
      startStrokeAnimation();
      return;
    }

    var tl = gsap.timeline({
      onComplete: startStrokeAnimation,
    });
    var curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    var flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: {
        d: curve,
      },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: {
        d: flat,
      },
      ease: "power2.easeOut",
    });
    tl.to(".preloader", {
      y: -1500,
    });
    tl.to(".preloader", {
      zIndex: -1,
      display: "none",
    });

    // Safety net: the preloader sits above everything, so if the timeline is
    // ever interrupted the whole site is unreachable behind a black screen.
    // Force it away if it is somehow still up well after the animation should
    // have finished.
    setTimeout(function () {
      if ($preloader.css("display") !== "none") {
        tl.progress(1);
        $preloader.css({ display: "none", zIndex: -1 });
        startStrokeAnimation();
      }
    }, 8000);
  }

  /*------------------------------------------------------
  /  Services hover background
  /------------------------------------------------------*/
  function service_animation() {
    var active_bg = $(".services-widget .active-bg");
    if (!active_bg.length) return;

    var element = $(".services-widget .current");
    $(".services-widget .service-item").on("mouseenter", function () {
      var e = $(this);
      activeService(active_bg, e);
    });
    $(".services-widget").on("mouseleave", function () {
      element = $(".services-widget .current");
      activeService(active_bg, element);
      element.closest(".service-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);

    $(".services-widget .service-item").on("click", function () {
      $(".services-widget .service-item").removeClass("current");
      $(this).addClass("current");
    });

    // Keep the highlight aligned when the layout reflows.
    $(window).on("resize", function () {
      activeService(active_bg, $(".services-widget .current"));
    });
  }

  function activeService(active_bg, e) {
    if (!e || !e.length) {
      return false;
    }
    var widget = $(".services-widget");
    if (!widget.length) {
      return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = widget.offset().top;
    e.closest(".service-item").removeClass("mleave");
    e.closest(".service-item").siblings().addClass("mleave");
    active_bg.css({
      top: topOff - menuTop + "px",
      height: height + "px",
    });
  }

  /*------------------------------------------------------
  /  Contact form validation + submit
  /------------------------------------------------------*/
  function initContactForm() {
    var $form = $("#contact-form");
    if (!$form.length || !$.fn.validate) return;

    // The endpoint is overridable so the form can point at whatever mail
    // service this site is deployed behind.
    var endpoint =
      $form.attr("action") ||
      window.CONTACT_FORM_ENDPOINT ||
      "/assets/mail/contact-form.php";

    $form.validate({
      rules: {
        conName: "required",
        conEmail: {
          required: true,
          email: true,
        },
      },

      messages: {
        conName: "Enter your name.",
        conEmail: "Enter a valid email.",
      },
      submitHandler: function (form) {
        // start ajax request
        $.ajax({
          type: "POST",
          url: endpoint,
          data: $form.serialize(),
          cache: false,
          success: function (data) {
            if (data == "Y") {
              showModal("#message_sent");
              form.reset();
            } else {
              showModal("#message_fail");
            }
          },
          // Previously a failing request did nothing at all, so the form
          // looked like it had silently succeeded.
          error: function () {
            showModal("#message_fail");
          },
        });
        return false;
      },
    });
  }

  function showModal(selector) {
    var el = document.querySelector(selector);
    if (!el) return;
    if (window.bootstrap && window.bootstrap.Modal) {
      window.bootstrap.Modal.getOrCreateInstance(el).show();
    } else if ($.fn.modal) {
      $(el).modal("show");
    }
  }
})(jQuery);
