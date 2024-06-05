import "magnific-popup"


jQuery(document).ready(function ($) {

  // MAP ITEM ON CLICK EVENT HANDLERS
  $('.compass a').on('click', function () {
    event.preventDefault();
    console.log('Compass clicked');

    $.magnificPopup.open({
      items: {
        src: '#popup-compass'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.gas-sign a').on('click', function () {
    event.preventDefault();
    console.log('Gas Sign clicked');
  });

  $('.heart a').on('click', function () {
    event.preventDefault();
    console.log('Heart clicked');
  });

  $('.la a').on('click', function () {
    event.preventDefault();
    console.log('LA clicked');
  });

  $('.logo-fh a').on('click', function () {
    event.preventDefault();
    console.log('Logo FH clicked');
  });

  $('.paper-tigers a').on('click', function () {
    event.preventDefault();
    console.log('Paper Tigers clicked');

    $.magnificPopup.open({
      items: {
        src: '#popup-paper-tigers'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.pre-order-moth a').on('click', function () {
    event.preventDefault();
    console.log('Pre-order Moth clicked');

    $.magnificPopup.open({
      items: {
        src: '#popup-preorder'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.rental a').on('click', function () {
    event.preventDefault();

    $.magnificPopup.open({
      items: {
        src: '#popup-rental'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.socials a').on('click', function () {
    event.preventDefault();
    console.log('Socials clicked');

    $.magnificPopup.open({
      items: {
        src: '#popup-socials'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.sweet-like-dive-bar').on('click', function () {
    console.log('Sweet Like Dive Bar clicked');

    $.magnificPopup.open({
      items: {
        src: '#popup-sweet-like'
      },
      type: 'inline',
      fixedContentPos: true
    })
  });

  $('.title').on('click', function () {
    event.preventDefault();
    console.log('Title clicked');
  });


});