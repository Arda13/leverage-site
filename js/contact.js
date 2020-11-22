$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Hatalı bir veri girdiniz");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Lütfen isminizi giriniz",
                    minlength: "İsim hanesi en az 2 karakter olmalı"
                },
                subject: {
                    required: "Lütfen konunuzu belirtiniz",
                    minlength: "Konu hanesi en az 4 karakter olmalı"
                },
                number: {
                    required: "Lütfen numaranızı giriniz",
                    minlength: "Numaranız en az 5 karakter olmalı"
                },
                email: {
                    required: "Lütfen e-mail adresinizi giriniz"
                },
                message: {
                    required: "Lütfen mesajınızı giriniz",
                    minlength: "Mesajınız en az 20 karakter uzunluğunda olmalı."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})