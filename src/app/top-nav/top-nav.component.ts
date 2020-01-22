import { Component, OnInit } from "@angular/core";
import messages from "../messages";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
  private Messages: any[] = [];
  constructor() {}

  ngOnInit() {
    this.Messages = messages;
  }
}
