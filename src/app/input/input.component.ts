import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input",
  template: `<div>
    <input
      [(ngModel)]="text"
      [disabled]="demo.length > 0"
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
export class InputComponent implements OnInit {
  public text = "";
  public demo = "";
  constructor() {}

  ngOnInit() {}
  onChange(value) {
    this.text = value;
  }

  onClick() {
    this.demo = this.text;
  }
}
