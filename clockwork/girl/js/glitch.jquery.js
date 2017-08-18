/*!
 * $ Simple glitching plugin
 * Author: Igor Brkic <igor@hyperglitch.com>
 * Version 0.0.1
 * Licensed under the MIT license
 */
(function($){
    $.fn.glitch = function(options) {
        var s = $.extend({
            bg: null,    // background color
            maxint: 20,     // max interval between glitchings
            minint: 2,      // min interval between glitchings
            maxglitch: 5,   // max number of twitches
            hshift: 3,      // max horizontal shift 
            vshift: 3,      // max vertical shift
            direction: 'horizontal' // 'horizontal', 'vertical' or 'random'
        }, options);

        return this.each(function(){
            $t=$(this);
            $t.wrap('<span style="display:inline-block;position:relative">');
            var $s=$t.closest('span');
            var $c=$t.clone();
            var height=$t.height();
            var width=$t.width();

            if(s.bg===null){
                s.bg=$t.css('background-color');
            }

            $c.css({
                position: 'absolute',
                top:0,
                left:0,
                height: height,
                width: width,
                overflow: 'hidden',
                'background-color': s.bg
            });
            $s.append($c);
            var rnd=function(a){return Math.floor(Math.random()*(a+1));}
            var g = function(){
                var i;
                for(i=0;i<rnd(s.maxglitch)+1;i++){
                    setTimeout(function(){
                        var css, dir;
                        if(s.direction=='random') dir=Math.random()<0.5?'horizontal':'vertical';
                        else dir=s.direction;
                        if(dir=='vertical') css={top: rnd(s.vshift+1), width: rnd(Math.floor(width*0.8))+2, height:height};
                        else css={left: rnd(s.hshift+1), height: rnd(Math.floor(height*0.8))+2, width:width};
                        $c.css(css)
                    }, rnd(300));
                }
                setTimeout(function(){$c.css({left: 0, top:0})}, 300);
                setTimeout(g, (rnd((s.maxint-s.minint))+s.minint)*1000);
            }
            setTimeout(g, 3000);
        });
    }
})(jQuery);
