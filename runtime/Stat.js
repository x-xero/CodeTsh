(function (){
    function Stat (parent, interact) {
        var thiz = $.api.widget.createWidget (parent);
        var MARGIN = 10;

        var CB = {
            OnDraw: function (thiz, canvas) {
                try {
                    p = new Paint();
                    p.style = 0x00;
                    p.color = 0xFF005252;
                    canvas.drawRect(0, 0, thiz.width, thiz.height, p);

                    l = 0;
                    l = thiz.draw_00 (canvas, p, l);
                    l = thiz.draw_01 (canvas, p, l);
                    l = thiz.draw_02 (canvas, p, l);
                    l = thiz.draw_03 (canvas, p, l);

                    r = 0;
                    r = thiz.draw_99 (canvas, p, r);
                    r = thiz.draw_98 (canvas, p, r);
                    r = thiz.draw_97 (canvas, p, r);
                    r = thiz.draw_96 (canvas, p, r);
                }
                catch (e) {
                }
            },
        };

        thiz.setCB (CB);

        thiz.OnClick = function (thiz, argument){
            switch (argument.state) {
                case 0: /* mouse down */
                    break;
                case 1: /* mouse move */
                    break;
                case 2: /* mouse up */
                    break;
                default:
                    break;
            }
        }
        thiz.draw_00 = function (canvas, paint, offset) {
            paint.fontSize = 18;
            paint.fontFamily = set.font.family;

            text = "CodeTor";
            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFF002B2B;
            path = new Path();
            path.moveTo(0.0, 0.0);
            path.lineTo(measure.length + MARGIN * 2, 0.0);
            path.lineTo(measure.length + MARGIN * 2 + thiz.height / 2, thiz.height / 2 - 1);
            path.lineTo(measure.length + MARGIN * 2, thiz.height);
            path.lineTo(0.0, thiz.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            offset = (thiz.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, MARGIN, offset, paint);

            return measure.length + MARGIN * 2 + thiz.height / 2;
        }
        thiz.draw_01 = function (canvas, paint, offset) {
            paint.color = 0xFFF0F0F0;
            var p = FilePath.basename (parent.edit.view.document.path);
            canvas.drawText(p, offset + MARGIN, thiz.height / 2 + 5, paint) ;
            return 0;
        }

        thiz.draw_02 = function (canvas, paint, offset) {
        }

        thiz.draw_03 = function (canvas, paint, offset) {
        }

        thiz.draw_99 = function (canvas, paint, offset) {
            text = "50%  172:  20";
            measure = paint.measureText(text);
            measure.bounds.x = Math.abs(measure.bounds.x);
            measure.bounds.y = Math.abs(measure.bounds.y);
            measure.bounds.w = Math.abs(measure.bounds.w);
            measure.bounds.h = Math.abs(measure.bounds.h);

            paint.color = 0xFFF00000;
            path = new Path();
            path.moveTo(thiz.width, 0.0);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2), 0.0);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2 + thiz.height / 2), thiz.height / 2 - 1);
            path.lineTo(thiz.width - (measure.length + MARGIN * 2), thiz.height);
            path.lineTo(thiz.width, thiz.height);
            path.close();
            canvas.drawPath(path, paint);

            paint.color = 0xFFF0F0F0;
            offset = (thiz.height - measure.bounds.y) / 2 + measure.bounds.y;
            canvas.drawText(text, thiz.width - (measure.length + MARGIN * 2) + MARGIN, offset, paint);
            return 0;
        }
        thiz.draw_98 = function (canvas, paint, offset) {
        }
        thiz.draw_97 = function (canvas, paint, offset) {
        }
        thiz.draw_96 = function (canvas, paint, offset) {
        }
        return thiz;
    };
    return Stat; 
})();