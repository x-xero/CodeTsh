(function namespace_none () {
    var widget = {};
    widget = new Window(null, {"OnDraw":function(thiz, canvas){
        p = new Paint();
        p.color = 0xFFE0E0E0;
        canvas.drawRect (0, 0, thiz.width, thiz.height, p);

        p.color = 0xFF00E000;
        path = new Path();
        path.moveTo(0.0,  0.0);
        path.lineTo(0.0,  80.0);
        path.lineTo(20.0, 100.0);
        path.lineTo(40.0, 80.0);
        path.lineTo(40.0, 0.0);
        path.close();
        canvas.drawPath(path, p);
    },"OnEvent":function(thiz, event, argument){
        switch (event) {
            case "SYS:SIZECHANGE":
                thiz.OnSizeChange(thiz);
                break;
            default:
                break;
        }
        return false;
    }});

    set.window = widget;
    windows = new Windows (widget);
    widget.OnSizeChange = function (thiz) {
        windows.resize (thiz);
    }

    widget.run(function(){});
})();

