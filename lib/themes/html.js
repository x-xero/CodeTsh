function* lexer_html (){
    yield [SCI_SETLEXERLANGUAGE, 0x00, "html"];
    yield* lexer_default();
};

