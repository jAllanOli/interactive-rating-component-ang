import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  ratioPage: boolean = true;

  ratioValueDefinedOnFather: number;

  constructor() {}

  onEvent(value: number) {
    this.ratioValueDefinedOnFather = value;
    this.ratioPage = !this.ratioPage;
  }
}
