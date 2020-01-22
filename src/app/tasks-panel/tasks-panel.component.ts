import { Component, OnInit } from "@angular/core";
import tasks from "../tasks";

@Component({
  selector: "app-tasks-panel",
  templateUrl: "./tasks-panel.component.html",
  styleUrls: ["./tasks-panel.component.css"]
})
export class TasksPanelComponent implements OnInit {
  private Tasks: any[] = [];

  constructor() {}

  ngOnInit() {
    this.Tasks = tasks;
  }
}
