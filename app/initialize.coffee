$(document).ready ->
    $('.HeaderSection').vide('video/video_bg.mp4')

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
        $(this).toggleClass('Header-burgerActive')
        $('.Header-nav').toggleClass('Header-navActive')

    $('.Header-WhySection').click ->
        scrollToSection('WhySection')

    $('.Header-SolutionsSection').click ->
        scrollToSection('SolutionsSection')

    $('.Header-CustomersSection').click ->
        scrollToSection('CustomersSection')

    $('.Header-PartnersSection').click ->
        scrollToSection('PartnersSection')
