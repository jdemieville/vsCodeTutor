import { TreeItem, TreeItemCollapsibleState } from "vscode";

export class Assignment extends TreeItem {
    constructor(
        public readonly label: string,
        private version: string,
        public readonly collapsibleState: TreeItemCollapsibleState
      ) {
        super(label, collapsibleState);
      }

      get tooltip(): string {
        return `${this.label}-${this.version}`;
      }
    
      get description(): string {
        return this.version;
      }
}