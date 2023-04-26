import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-final-area",
  templateUrl: "./final-area.component.html",
  styleUrls: ["./final-area.component.less"],
})
export class FinalAreaComponent implements OnInit {
  @Input() ratioValueReceived!: number;

  constructor() {}

  ngOnInit() {}
}
