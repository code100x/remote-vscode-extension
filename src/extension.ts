import { WebSocket } from 'ws';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "bolty-listener" is now active!');

	console.log("activate extension");

	//@ts-ignore
	// Add reconnection logic here
	const ws = new WebSocket("ws://localhost:8082");
	
	ws.onerror = (e: any) => {
		console.log("error", e);
	}

	ws.onmessage = (e: any) => {
		console.log("message");
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from bolty-listener!');
		// start a new terminal
		vscode.commands.executeCommand("workbench.action.terminal.new");
		// run npm run build in the terminal
		vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {text: "npm run build"});
		// press enter to execute npm run build
		vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {text: "\r"});
		console.log("message end");

	}

	const disposable = vscode.commands.registerCommand('bolty-listener.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from bolty-listener!');
		// start a new terminal
		vscode.commands.executeCommand("workbench.action.terminal.new");
		// run npm run build in the terminal
		vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {text: "npm run build"});
		// press enter to execute npm run build
		vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {text: "\r"});

	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
