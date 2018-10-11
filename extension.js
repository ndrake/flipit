const vscode = require('vscode');
const flip = require('flip');
const zalgo = require('zalgolize');
const bubbles = require('lunicode-bubbles');
const mirror = require('lunicode-mirror');
const wonky = require('lunicode-bent');
const tinyCaps = require('lunicode-tiny');

/** 
 * Get text to transform. Returns current selection or all editor contents
 */
function getText() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    let selection = editor.selection;
    return editor.document.getText(selection.isEmpty ? undefined : selection);
}

function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.flipIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = flip(text);
        vscode.workspace.openTextDocument({
            content: transformed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });

    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.zalgoIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = zalgo(text);
        vscode.workspace.openTextDocument({
            content: transformed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.bubbleIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = bubbles.encode(text);
        vscode.workspace.openTextDocument({
            content: transformed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.mirrorIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = mirror.encode(text);
        vscode.workspace.openTextDocument({
            content: transformed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.wonkIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = wonky.encode(text);
        vscode.workspace.openTextDocument({
            content: transformed
        }).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('extension.tinyCapsIt', function () {

        let text = getText();
        if (!text) {
            return;
        }

        let transformed = tinyCaps.encode(text);
        vscode.workspace.openTextDocument({
            content: transformed
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