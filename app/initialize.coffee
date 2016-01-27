$(document).ready ->

  $('.HeaderSection').vide({
    mp4: 'video/video_bg.mp4',
    webm: 'video/video_bg.webm',
    ogv: 'video/video_bg.ogv',
    poster: 'video/video_bg.jpg'
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

  checkHasWaypoint = (element, has) ->
    if ($(".Header-#{element}").hasClass("Header-#{has}"))
      $(".Header-#{element}").removeClass("Header-#{has}")

  $('.Header-burger').click ->
    $('.Header-burger').toggleClass('Header-burgerActive')
    $('.Header-nav').toggleClass('Header-navActive')

  # getWidth = ->
  #   $(window).width()
  #
  # $(window).on 'resize', ->
  #   checkHasWaypoint('links', 'linksActive')
  #
  #   if (getWidth() <= 830)
  #     $('.Header-navItem').click ->
  #       checkHasWaypoint('links', 'linksActive')
  #       $(this).find('.Header-links').toggleClass('Header-linksActive')


  $('.Header-navItem').click ->
    checkHasWaypoint('links', 'linksActive')
    $(this).find('.Header-links').toggleClass('Header-linksActive')
