(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_ws") {
            windows.split("hori");
            return CTOR_VIMKEY_CONSUME;
        }
        return CTOR_VIMKEY_NOTCONCERN;
    };
})();
