import * as swcHelpers from "@swc/helpers";
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.
///<reference path='typescript.ts' />
var TypeScript;
(function(TypeScript1) {
    var prePrintAST = function prePrintAST(ast, parent, walker) {
        var pc = walker.state;
        ast.print(pc);
        pc.increaseIndent();
        return ast;
    };
    var postPrintAST = function postPrintAST(ast, parent, walker) {
        var pc = walker.state;
        pc.decreaseIndent();
        return ast;
    };
    var PrintContext = /*#__PURE__*/ function() {
        "use strict";
        function PrintContext(outfile, parser) {
            swcHelpers.classCallCheck(this, PrintContext);
            this.outfile = outfile;
            this.parser = parser;
            this.builder = "";
            this.indent1 = "  ";
            this.indentStrings = [];
            this.indentAmt = 0;
        }
        swcHelpers.createClass(PrintContext, [
            {
                key: "increaseIndent",
                value: function increaseIndent() {
                    this.indentAmt++;
                }
            },
            {
                key: "decreaseIndent",
                value: function decreaseIndent() {
                    this.indentAmt--;
                }
            },
            {
                key: "startLine",
                value: function startLine() {
                    if (this.builder.length > 0) {
                        CompilerDiagnostics.Alert(this.builder);
                    }
                    var indentString = this.indentStrings[this.indentAmt];
                    if (indentString === undefined) {
                        indentString = "";
                        for(var i = 0; i < this.indentAmt; i++){
                            indentString += this.indent1;
                        }
                        this.indentStrings[this.indentAmt] = indentString;
                    }
                    this.builder += indentString;
                }
            },
            {
                key: "write",
                value: function write(s) {
                    this.builder += s;
                }
            },
            {
                key: "writeLine",
                value: function writeLine(s) {
                    this.builder += s;
                    this.outfile.WriteLine(this.builder);
                    this.builder = "";
                }
            }
        ]);
        return PrintContext;
    }();
    TypeScript1.PrintContext = PrintContext;
    TypeScript1.prePrintAST = prePrintAST;
    TypeScript1.postPrintAST = postPrintAST;
})(TypeScript || (TypeScript = {}));
