import { Component, OnInit } from "@angular/core";
import orders from "../orders";

@Component({
  selector: "app-transactions-panel",
  templateUrl: "./transactions-panel.component.html",
  styleUrls: ["./transactions-panel.component.css"]
})
export class TransactionsPanelComponent implements OnInit {
  Orders: any[];
  constructor() {}

  ngOnInit() {
    this.Orders = orders;
  }
}
