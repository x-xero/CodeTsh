(function (){
    function EditView (parent, x, y, w, h) {
        function OnEvt (evt, argument) {
            switch (evt) {
                case "SYS:SIZECHANGE":
                    //try {
                    //    var has = windows.hasViewL (this);
                    //    if (has == true) {
                    //        this.sept.setLocation(0, 0);
                    //        this.sept.setSize (8, this.handle.height);
                    //    }
                    //    else {
                    //        this.sept.setLocation(0, 0);
                    //        this.sept.setSize (0, this.handle.height);
                    //    }
                    //}
                    //catch (e) {
                        this.sept.setLocation(0, 0);
                        this.sept.setSize (0, this.handle.height);
                    //}

                    this.stat.setSize (this.handle.width - this.sept.handle.width, 23);
                    this.stat.setLocation(this.sept.handle.width, this.handle.height - this.stat.handle.height);

                    this.edit.setLocation(this.sept.handle.width, 0);
                    this.edit.setSize(this.handle.width - this.sept.handle.width, this.handle.height - this.stat.handle.height);
                    break;
                default:
                    break;
            }
        }

        function OnDrw (canvas) {
            try {
                var has = windows.hasViewL (this);
                if (has == true) {
                    this.sept.setLocation(0, 0);
                    this.sept.setSize (8, this.handle.height);
                }
                else {
                    this.sept.setLocation(0, 0);
                    this.sept.setSize (0, this.handle.height);
                }
            }
            catch (e) {
            }
        }

        try {
            this.handle = NewWidget(parent, OnEvt.bind(this), OnDrw.bind(this));
            this.parent = parent;
            this.x = 0;
            this.y = 0;
            this.w = parent.width;
            this.h = parent.height;

            this.handle.locX = 0;
            this.handle.loxY = 0;
            this.handle.width  = parent.width;
            this.handle.height = parent.height;

            this.edit = new Edit (this, this);
            this.stat = new Stat (this, this);
            this.sept = new Sept (this, this);
            this.type = "Edit";

            OnEvt.bind(this)("SYS:SIZECHANGE");
            this.setDocument(defaultDoc);
        }
        catch (e) {
            console.log (e + " " + (new Error().stack));
        }
    };

    Inherite(EditView, BaseObj);

    EditView.prototype.setFocus = function () {
        this.edit.setFocus();
    }

    EditView.prototype.setName = function (name) {
        this.edit.setName (name);
    }

    EditView.prototype.setDocument = function (doc) {
        var handle = this.edit.handle;
        if (handle.document.savepoint == false) {
            return -1;
        }

        handle.document = doc;
        handle.setFocus();

        var ext = FilePath.extname(doc.path);
        switch (ext) {
            case ".cpp":
            case ".c":
            case ".h":
                lexerSync (handle, lexer_c);
                break;
            case ".js":
                lexerSync (handle, lexer_javascript);
                break;
            case ".html":
            case ".htm":
                lexerSync (handle, lexer_html);
                break;
            case ".txt":
                lexerSync (handle, lexer_customize);
                break;
            default:
                lexerSync (handle, lexer_default);
                break;
        };
        handle.sync(SCI_GOTOPOS, handle.document.caretP, 0x00);
        handle.sync(SCI_SETCODEPAGE, 0, 0x00);
        handle.ro (true);
    }

    return EditView;
})();
