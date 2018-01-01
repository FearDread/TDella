/* TDella order page Module */
$.GUI().create('Order', function ( gui ) {
  var searchVisible, transparent;

  searchVisible = 0;
  transparent = true;

  function _ReadURL (input) {
    var reader = new FileReader();

    if ( input.files && input.files[0] ) {

      reader.onload = function (e) {
        $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      }

      reader.readAsDataURL( input.files[0] );
    }
  }

  function _InitWizard () {

    gui.$('.wizard-card').bootstrapWizard({

      'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function (tab, navigation, index) {
        var $valid = $('.wizard-card form').valid();

        if ( !$valid ) {
          $validator.focusInvalid();
          return false;
        }
      },
      onInit: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
            $width = 100 / $total;

        navigation.find('li').css('width', $width + '%');
      },
      onTabClick: function (tab, navigation, index) {
        var $valid = $('.wizard-card form').valid();

        if ( !$valid ) return false;

        return true;
      },
      onTabShow: function (tab, navigation, index) {
        var $total = navigation.find('li').length,
            $current = index + 1,
            $wizard = navigation.closest('.wizard-card');

        if ( $current >= $total ) {

          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();

        } else {

          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        move_distance = 100 / $total;
        move_distance = move_distance * (index) + move_distance / 2;

        $wizard.find($('.progress-bar')).css({width: move_distance + '%'});
        $wizard.find($('.wizard-card .nav-pills li.active a .icon-circle')).addClass('checked');
      }
    });
  }

  return {
    load: function () {
      gui.log('order load method called');

      _InitWizard();

      gui.$(document).ready(function () {

        $('[rel="tooltip"]').tooltip();

        $("#wizard-picture").change(function(){
            _ReadURL(this);
        });

        $validator = $('.wizard-card form').validate({
          rules: {
            firstname: {
              required: true,
              minlength: 3
            },
            lastname: {
              required: true,
              minlength: 3
            },
            email: {
              required: true
            }
          },
        });
      });

      $('[data-toggle="wizard-radio"]').click(function(){
          wizard = $(this).closest('.wizard-card');
          wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
          $(this).addClass('active');
          $(wizard).find('[type="radio"]').removeAttr('checked');
          $(this).find('[type="radio"]').attr('checked','true');
      });

      $('[data-toggle="wizard-checkbox"]').click(function(){
          if( $(this).hasClass('active')){
              $(this).removeClass('active');
              $(this).find('[type="checkbox"]').removeAttr('checked');
          } else {
              $(this).addClass('active');
              $(this).find('[type="checkbox"]').attr('checked','true');
          }
      });

      $('.set-full-height').css('height', 'auto');
    },
    unload: function () {
      gui.log('order unload method called');
    }
  }
});

$.GUI().start('Order', TDella.globals);
