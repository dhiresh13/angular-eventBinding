import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-numeric",
  template: `<div>
    <input
      [(ngModel)]="text"
      pattern="^[0 - 9]+$"
      (ngModelChange)="onChange($event)"
    />
    <button (click)="onClick()">Save</button>
    <span>{{ demo }}</span>
  </div>`,
  styles: [
    `
      div {
        display: flex;
        justify-content: center;
      }

      button {
        margin-left: 10px;
      }

      span {
        margin-left: 10px;
      }
    `,
  ],
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
