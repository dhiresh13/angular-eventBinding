import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-numeric",
  template: `<div class="flex">
    <input
      [(ngModel)]="text"
      pattern="^[0 - 9]+$"
      (ngModelChange)="onChange($event)"
    />
    <br />
    <button (click)="onClick()">Save</button><br />
    <h1>{{ demo }}</h1>
  </div>`,
  styleUrls: ["./numeric.component.scss"],
})
export class NumericComponent implements OnInit {
  public text = "";
  public demo = "";
  constructor() {}

  ngOnInit() {}

  onChange(value) {
    if (!/^[a-zA-Z][a-zA-Z.\s-]*$/g.test(value)) {
      console.log(value);
      this.text = value;
    }
  }

  onClick() {
    if (!/^[a-zA-Z][a-zA-Z.\s-]*$/g.test(this.text)) {
      this.demo = this.text;
    }
  }
}
