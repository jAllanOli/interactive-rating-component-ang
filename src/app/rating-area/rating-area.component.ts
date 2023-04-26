import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-rating-area",
  templateUrl: "./rating-area.component.html",
  styleUrls: ["./rating-area.component.less"],
})
export class RatingAreaComponent implements OnInit {
  ratioOptions: number[] = [1, 2, 3, 4, 5];

  ratioValue: number;

  @Output() ratioEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  setRatioValue(ratio: number) {
    this.ratioValue = ratio;
  }

  onSubmit() {
    this.ratioEvent.emit(this.ratioValue);
  }
}
