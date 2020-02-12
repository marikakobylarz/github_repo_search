import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RepoService } from "../service/repo.service";
import { AppComponent } from "./app.component";
import { RepoComponent } from "./components/repo/repo.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SortRepoPipe } from "./sort-repo.pipe";

import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, RepoComponent, SortRepoPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
