import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RepoService {
  private username: string;

  constructor(private http: HttpClient) {
    this.username = "marikakobylarz";
  }

  getReposInfo() {
    console.log(this.username);
    return this.http
      .get("https://api.github.com/users/" + this.username.trim() + "/repos")
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }

  updateUsername(username: string) {
    this.username = username;
  }
}
