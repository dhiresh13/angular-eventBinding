import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TextComponent } from "./text/text.component";
import { NumericComponent } from "./numeric/numeric.component";
import { InputComponent } from "./input/input.component";

@NgModule({
  declarations: [AppComponent, TextComponent, NumericComponent, InputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
