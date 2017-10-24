
    (function($) {
        $.fn.extend({
            vague: function(options) {
                var defaults = {
                    size: 150,
                    blur: 20
                }
                var options = $.extend(defaults, options);
                var a = $(this);
                return this.each(function() {
                    a.load(function() {
                        var src = a.attr('src');
                        var html = '<div class="cover"><img src="' + src + '" class="blur" /></div>';
                        a.wrapAll('<div class="extra-wrapper"></div>');
                        var width = a.width();
                        var height = a.height();
                        $('.extra-wrapper').css({
                            "position": "relative",
                            "width": width,
                            "height": height,
                            "overflow": "hidden"
                        });
                        a.after(html);

                        $('.cover').css({
                            "position": "absolute",
                            "width": options.size,
                            "height": options.size,
                            "overflow": "hidden",
                            "border-radius": "50%",
                            "border": "1px solid rgba(0,0,0,0.6)",
                            "z-index": 999
                        });
                        $('.blur').css({
                            "position": "absolute",
                            "-webkit-filter": "blur(0px)",
                            "-moz-filter": " blur(0px)",
                            "filter": "blur(0px)",
                            "filter": "progid:DXImageTransform.Microsoft.Blur(PixelRadius=" + options.blur + ", MakeShadow=false)",
                            "-moz-transform": "scale(1.1,1.1)",
                            "-webkit-transform": "scale(1.1,1.1)",
                            "-o-transform": "scale(1.1,1.1)",
                            "transform": "scale(1.1,1.1)"
                        });

                        a.css({
                            "-webkit-filter": "blur(" + options.blur + "px)",
                            "-moz-filter": "blur(" + options.blur + "px)",
                            "filter": "blur(" + options.blur + "px)",
                            "filter": "progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false)",
                            "-moz-transform": "scale(1.1,1.1)",
                            "-webkit-transform": "scale(1.1,1.1)",
                            "-o-transform": "scale(1.1,1.1)",
                            "transform": "scale(1.1,1.1)"
                        });
                        var b = a.offset();
                        var s = b.left;
                        var c = b.top;
                        $(document).mousemove(function(e) {
                            var x = e.pageX - s;
                            var y = e.pageY - c;
                            $('.cover').css({
                                left: x - options.size / 2,
                                top: y - options.size / 2
                            });
                            $('.blur').css({
                                left: -(x - options.size / 2),
                                top: -(y - options.size / 2)
                            });
                        });
                        $('.extra-wrapper').hover(function() {
                            $("body").css("cursor", "none")
                        }, function() {
                            $("body").css("cursor", "default")
                        })
                    })
                })
            }
        });
    })(jQuery);