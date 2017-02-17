/**
 * Created by noop on 2015/9/8.
 */
// ������
;
(function ($) {

    var FormPassword = function ($element, options) {
        this.options = $.extend({},
            FormPassword.DEFAULTS, options || {});
        this.element = $element;
        this.input = this.element.next("input").length ? this.element.next("input") : this.element.closest('.input-row').find("input");
        this.init();
    }

    FormPassword.DEFAULTS = {
        "showText": '��',
        "hideText": '�ر�'
    };

    FormPassword.prototype = {

        init: function () {

            var $el = this.element,
                $input = this.input,
                me = this;

            $el.on("click", function (e) {

                e.preventDefault();

                if ($input.length) {
                    var type = $input.attr("type");
                    $input.attr("type", type == "text" ? "password" : "text");
                    $el.html(me.options[type == "text" ? "showText" : "hideText"]);
                }
            });
            $el.html(me.options[$input.is("[type='password']") ? "showText" : "hideText"]);
        }
    }

    //  ���
    $.fn.formPassword = function (settings) {
        return this.each(function () {
            var that = $(this);
            var plugin = that.data('formPassword');
            if (!plugin) {
                plugin = new FormPassword(that, settings);
                that.data('formPassword', plugin);
            }
        });
    }

})(jQuery);

$(function () {
    $('[data-role="password"]').formPassword();
});
