//= require_tree .

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('nav a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// http://reactiveraven.github.io/jqBootstrapValidation/
$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

// $(function () { $("#contactForm").validate(); } );

$(document).ready(function() {
  $('#contactForm')
  .on('success.form.bv', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    // https://zapier.com/hooks/catch/o6ufcm/
    $.post("https://zapier.com/hooks/catch/o6ufcm/", $form.serialize(), function(result) {
      // ... Process the result ...
    }, 'json').done(function() {
      $('#contactModal').modal();
      $('#contactForm').data('bootstrapValidator').resetForm();
      $('#contactForm').trigger("reset");
    });
    // Agile CRM - Setting Email of the page visitor
    _agile.set_email($('#email').val());
    // Agile CRM - Create a new contact
    $.post("https://zapier.com/hooks/catch/o952dk/", $form.serialize(), function(result) {
      // ... Process the result ...
    }, 'json');
  })
  .bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    fields: {
      email: {
        validators: {
          notEmpty: {
            message: 'The email address is required and cannot be empty'
          },
          emailAddress: {
            message: 'The email address is not a valid'
          }
        }
      }
    }
  });
});

// http://www.appelsiini.net/projects/lazyload
$(function() {
    $("img.lazy").lazyload();
});
