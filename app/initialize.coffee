$(document).ready ->
    $('.HeaderSection').vide('video/video_bg.mp4')

    $('#myBlock').vide({
      mp4: 'video_bg.mp4',
      webm: 'video_bg.webm',
      ogv: 'video_bg.ogv',
      poster: 'video_bg.jpg'
    });

    $('.CustomersSection-slider').slick({
      arrows: false,
      fade: true,
      dots: false,
    })

    options = {
      offset: '.WhySection',
    }

    header = new Headhesive('.Header', options);

    checkHasWaypoint = ->
      if ($('.Header-navItem').hasClass('Header-waypoint'))
        $('.Header-navItem').removeClass('Header-waypoint')

    scrollToSection = (scroll) ->
      $("html, body").animate({ scrollTop: $(".#{scroll}").offset().top }, 1000)

    $('.WhySection').waypoint ->
      checkHasWaypoint()
      $('.headhesive .Header-WhySection').addClass('Header-waypoint')

    $('.SolutionsSection').waypoint ->
      checkHasWaypoint()
      $('.headhesive .Header-SolutionsSection').addClass('Header-waypoint')

    $('.CustomersSection').waypoint ->
      checkHasWaypoint()
      $('.headhesive .Header-CustomersSection').addClass('Header-waypoint')

    $('.PartnersSection').waypoint ->
      checkHasWaypoint()
      $('.headhesive .Header-PartnersSection').addClass('Header-waypoint')


    $('.Header-navItemButton').click ->
      $('body').addClass('body-fixed')


    $('.Header-burger').click ->
      $('.Header-burger').toggleClass('Header-burgerActive')
      $('.Header-nav').toggleClass('Header-navActive')

    $('.Header-WhySection').click ->
      scrollToSection('WhySection')

    $('.Header-SolutionsSection').click ->
      scrollToSection('SolutionsSection')

    $('.Header-CustomersSection').click ->
      scrollToSection('CustomersSection')

    $('.Header-PartnersSection').click ->
      scrollToSection('PartnersSection')



    $('.Header-navItem').click ->
      if ($('.Header-links').hasClass('Header-linksActive'))
        $('.Header-links').removeClass('Header-linksActive')
      $(this).find('.Header-links').toggleClass('Header-linksActive')
