(function (){
    return function(editor, cmd, shift, alt, ctrl){
        if (cmd == "C_ws") {
            windows.vsplit(set.window);
        }
        return true;
    };
})();
