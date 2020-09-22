import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input",
  template: `<div class="flex">
    <input
      [(ngModel)]="text"
      [disabled]="demo.length > 0"
      (ngModelChange)="onChange($event)"
    />
    <br />
    <button (click)="onClick()">Save</button><br />
    <h1>{{ demo }}</h1>
  </div>`,
  styleUrls: ["./input.component.scss"],
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
