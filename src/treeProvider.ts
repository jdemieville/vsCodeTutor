import * as vscode from 'vscode';
import * as path from 'path';
import { Assignment } from './assignment';
import { assignmentManager } from './assignmentManager';

import { TutorProblems } from './tutorProblems';

export class AssignmentProvider implements vscode.TreeDataProvider<Assignment> {
    constructor(private workspaceRoot?: string) {}

    getTreeItem(element: Assignment): vscode.TreeItem {
        return {
            label: element.getIsProblem() ? element.getName() : "CS 101",
            collapsibleState: element.getIsProblem() ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Collapsed
        };
    }

    getChildren(element?: Assignment): Promise<Assignment[]> {
        if (!element) {
            vscode.window.showInformationMessage("There was no element passed in");
            return Promise.resolve(assignmentManager.getClassNode())
        } else {
            vscode.window.showInformationMessage("There was an element passed in");
            return new Promise<Assignment[]>((resolve, reject) => {
                resolve(assignmentManager.getAssignmentNode());
              });
        }
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Assignment | undefined> = new vscode.EventEmitter<Assignment | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Assignment | undefined> = this._onDidChangeTreeData.event;

    public async refresh(): Promise<void> {
        await assignmentManager.refresh()
        this._onDidChangeTreeData.fire(undefined);
    }
}