$('.overlabel').each(function () {
    var $this = $(this);
    var field = $this.find('[type=text], [type=file], [type=email], [type=password], textarea');
    var span = $(this).find('> span');
    var onBlur = function () {
        if ($.trim(field.val()) == '') {
            field.val('');
            span.fadeIn(100);
        } else {
            if (field.prop('type') == 'file') {
                span.text(field.val());
            } else {
                span.fadeTo(100, 0);
            }
        }
    };
    field.focus(function () {
        span.fadeOut(100);
    }).blur(onBlur);
    onBlur();
});