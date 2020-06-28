import { TreeItem, TreeItemCollapsibleState } from "vscode";

export class Assignment {
    constructor(private isProblem: boolean = true) {}

    public getIsProblem(): boolean {
        return this.isProblem
    }

    public getName(): string {
        return "Some name"
    }


}