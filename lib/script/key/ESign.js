(function (){
    return function (editor, cmd, shift, alt, ctrl){
        if (cmd == "ESign") {
            Indent(editor, "", 0, 100);
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
