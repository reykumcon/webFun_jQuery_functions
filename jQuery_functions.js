$(document).ready(function() {
    
    $('#addRemoveClass #add').click(function() {
        $('#addRemoveClass p').addClass('blue');
    })

    $('#addRemoveClass #remove').click(function() {
        $('#addRemoveClass p').removeClass('blue');
    })

    $('#toggling #slideToggle').click(function() {
        $('#toggling p').slideToggle('fast');
    })

    $('#toggling #toggle').click(function() {
        $('#toggling p').toggle('slow');
    })

    $('#appendPrepend .before').click(function() {
        $('#appendPrepend #main').prepend('The start: ');
    })
    
    $('#appendPrepend .after').click(function() {
        $('#appendPrepend #main').append(': the end');
    })

    $('#beforeAfter .before').click(function() {
        $('#beforeAfter #main').prepend('<p>The start</p>');
    })
    
    $('#beforeAfter .after').click(function() {
        $('#beforeAfter #main').append('<p>The end </p>');
    })

    $('#fadeInOut #fadeIn').click(function() {
        $('#fadeInOut p').fadeIn('slow');
    })

    $('#fadeInOut #fadeOut').click(function() {
        $('#fadeInOut p').fadeOut('fast');
    })

    $('#hideShow #hide').click(function() {
        $('#hideShow p').hide('fast');
    })

    $('#hideShow #show').click(function() {
        $('#hideShow p').show('slow');
    })

    $('#slideUpDown #slideUp').click(function() {
        $('#slideUpDown p').slideUp('fast');
    })

    $('#slideUpDown #slideDown').click(function() {
        $('#slideUpDown p').slideDown('slow');
    })
    
    $('#htmlFunction #withParam').click(function() {
        $('#htmlFunction p').html('The content of the element has changed');
    })

    $('#htmlFunction #withoutParam').click(function() {
        alert($('#htmlFunction p').html());
    })

    $('#attrFunction #attrWithoutParam').click(function() {
        alert($('#attrFunction p').attr('id'));
    })

    $('#attrFunction #attrWithParam').click(function() {
        $('#attrFunction p').attr('id','idNew_Paragraph');
    })

    $('#textFunction #textWithParam').click(function() {
        $('#textFunction p').text('The new paragraph is set');
    })

    $('#textFunction #textWithoutParam').click(function() {
        alert($('#textFunction p').text());
    })

    $('#valFunction #valWithParam').click(function() {
        $('#valFunction input').val('Reymerson');
    })

    $('#valFunction #valWithoutParam').click(function() {
        alert($('#valFunction input').val());
    })
})