import * as vscode from 'vscode';
import * as path from 'path';
import { Assignment } from './assignment';

export class AssignmentProvider implements vscode.TreeDataProvider<Assignment> {
    constructor(private workspaceRoot?: string) {}

    getTreeItem(element: Assignment): vscode.TreeItem {
        return element;
      }

    getChildren(element?: Assignment): Assignment[] {
        return [new Assignment("example", "2.0", vscode.TreeItemCollapsibleState.None)]
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Assignment | undefined> = new vscode.EventEmitter<Assignment | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Assignment | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }
}