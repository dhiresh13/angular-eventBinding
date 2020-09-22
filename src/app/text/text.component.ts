import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text",
  template: `<div class="flex">
    <input [(ngModel)]="text" (ngModelChange)="onChange($event)" type="text" />
    <br />
    <button (click)="onClick()">Save</button><br />
    <h1>{{ demo }}</h1>
  </div>`,
  styleUrls: ["./text.component.scss"],
})
export class TextComponent implements OnInit {
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
