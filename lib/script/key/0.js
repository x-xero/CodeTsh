(function (){
    return function (editor, ctrl, shift, k) {
        if (cmd == '0') {
            var p = editor.sync(SCI_GETCURRENTPOS, 0x00, 0x00);
            var l = editor.sync(SCI_LINEFROMPOSITION, p, 0x00);
            var d = editor.document;
            var s = d.lineStart(l);
            editor.sync(SCI_GOTOPOS, s, 0x00);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    }
})();
