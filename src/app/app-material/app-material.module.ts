import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatGridListModule,
} from "@angular/material";

@NgModule({
  imports: [CommonModule],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
  ],
  declarations: [],
})
export class AppMaterialModule {}
