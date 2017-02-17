/**
 * Created by noop on 2015/9/25.
 */

$(function () {

    // placeholder
    if ($.fn.placeholder) {
        $('input,textarea').placeholder();
    }

    $('.close-qrcode').on('click', function () {
        $('.show-qrcode-bg, .show-qrcode-wrapper').fadeOut();
        return false;
    });
    $('.toggle-qrcode').on('click', function () {
        var url = $(this).data('url');
        if (url) {
            $('.show-qrcode-box').find('img').attr('url');
            $('.show-qrcode-bg, .show-qrcode-wrapper').fadeIn();
        }
        return false;
    });


    $(document).on('click', '[data-toggle="dialog"]', function () {
        var me = $(this),
            target = me.data('target'),
            title = me.data('title');
        if (target) {
            layer.open({
                    title: title,
                    type: 1,
                    maxWidth: '1000px',
                    content: $(target),
                    btn: ['确定', '取消']
                }
            )
        }
    });

    $(document).on('click', '[data-toggle="dialog01"]', function () {
        var me = $(this),
            target = me.data('target'),
            title = me.data('title');
        if (target) {
            layer.open({
                    title: title,
                    type: 1,
                    maxWidth: '1000px',
                    content: $(target)
                }
            )
        }
    });

    $(document).on('click', '.checkbox-toggle input', function () {
        var me = $(this),
            flag = me.prop('checked'),
            parent = me.closest('.checkbox-toggle');
        parent[flag ? 'addClass' : 'removeClass']('active');
    });


});
