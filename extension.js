const vscode = require('vscode');
const flip = require('flip');
const zalgo = require('zalgolize');

function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.flipIt', function () {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
    
        let selection = editor.selection;
        let textToFlip = editor.document.getText(selection.isEmpty ? undefined : selection);
        if( !textToFlip) {
            return;
        }

        let flipped = flip(textToFlip);
        vscode.workspace.openTextDocument({
            content: flipped
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });

    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.zalgoIt', function () {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
    
        let selection = editor.selection;
        let textToZalgo = editor.document.getText(selection.isEmpty ? undefined : selection);
        if( !textToZalgo) {
            return;
        }

        let zalgoed = zalgo(textToZalgo);
        vscode.workspace.openTextDocument({
            content: zalgoed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
    context.subscriptions.push(disposable);

}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;