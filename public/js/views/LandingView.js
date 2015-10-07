define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!tpl/home.html',
  'hb_help_core'
], function($, _, Backbone, Handlebars, landingHB){

  var LandingView = Backbone.View.extend({
    el: "#main-content",

    events: {
      "click #intro-read-more": "intro_read_more",
      "click #subscribe-newsletter": "subscribe_newsletter",
      "click #explore-capital": "explore_capital",
      "click #explore-transport": "explore_transport",
      "click #explore-country": "explore_country",
      "click #explore-wild": "explore_wild",
      "click #book-trip-now": "book_trip_now"
    },

    book_trip_now: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Book_Trip_Now',
        eventAction: 'click',
        eventLabel: 'Exploration'
      });

      swal({   
        title: "Qapla' (Success)",   
        text: "tlhIngan maH! (We are Klingons!)",   
        imageUrl: "img/klingon.png" 
      });
    },

    explore_wild: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Explore_Wild',
        eventAction: 'click',
        eventLabel: 'Exploration'
      });

      swal({   
        title: "Look but don't touch",   
        text: "You about to learn about our wildlife; Be safe or you won't have a chance to be sorry.",   
        timer: 3000,   
        type: "info",
        showConfirmButton: false 
      });
    },

    explore_country: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Explore_Country',
        eventAction: 'click',
        eventLabel: 'Exploration'
      });

      swal({   
        title: "Our Prestine Places",   
        text: "You about to learn about our safe prestine country living",   
        timer: 3000,   
        type: "info",
        showConfirmButton: false 
      });
    },

    explore_transport: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Explore_Transport',
        eventAction: 'click',
        eventLabel: 'Exploration'
      });

      swal({   
        title: "Our Transportation",   
        text: "You about to learn about how to get around our city in civilian transports",   
        timer: 3000,   
        type: "info",
        showConfirmButton: false 
      });
    },

    explore_capital: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Explore_Capital',
        eventAction: 'click',
        eventLabel: 'Exploration'
      });

      swal({   
        title: "Our Stronghold",   
        text: "You about to learn about our capital city that is the epi-center of Klingon strength",   
        timer: 3000,   
        type: "info",
        showConfirmButton: false 
      });
    },

    subscribe_newsletter: function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Subscribe_Newsletter',
        eventAction: 'click',
        eventLabel: 'Interest'
      });

      swal({   
        title: "Enter Email Address",   
        text: "We sincerely appreciate your interest in our world!",   
        type: "input",   
        showCancelButton: true,   
        closeOnConfirm: false,   
        animation: "slide-from-top",   
        inputPlaceholder: "Write something" 
      }, function(inputValue){   
        if (inputValue === false) return false;      
        if (inputValue === "") {     
          swal.showInputError("You need to write something!");     
          return false   
        }      
        swal({
          title: "Heghlu'meH QaQ jajvam!", 
          text: "You will receive our multi-daily newsletters at " 
          + inputValue, 
          type: "success",
          timer: 3000,
          showConfirmButton: false
        }); 
      });
    },

    intro_read_more: function() {
      swal({
        title: "tlhIngan maH!", 
        text: "We appreciate your interest!", 
        type: "info",
        timer: 3000,
        showConfirmButton: false
      }); 

      ga('send', {
        hitType: 'event',
        eventCategory: 'Intro_Read_More',
        eventAction: 'click',
        eventLabel: 'Article'
      });

    },

    render: function(){

      var template = Handlebars.compile(landingHB)
        , that = this;
        
      $(this.el).html(template({}));

    },

    initialize: function() {
    }
  });

  return LandingView;
});
