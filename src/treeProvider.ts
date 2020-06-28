import * as vscode from 'vscode';
import * as path from 'path';
import { Assignment } from './assignment';
import { TutorProblems } from './tutorProblems';

export class AssignmentProvider implements vscode.TreeDataProvider<Assignment> {
    constructor(private workspaceRoot?: string) {}

    getTreeItem(element: Assignment): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Assignment): Promise<Assignment[]> {
        if (element) {
            vscode.window.showInformationMessage("There was an element passed in");
            return Promise.resolve([])
        } else {
            vscode.window.showInformationMessage("There was no element passed in");
            return Promise.resolve([new Assignment("Example", "other example", vscode.TreeItemCollapsibleState.Collapsed)])
        }

    }

    private _onDidChangeTreeData: vscode.EventEmitter<Assignment | undefined> = new vscode.EventEmitter<Assignment | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Assignment | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire(undefined);
    }
}