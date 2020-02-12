import { Component, OnInit } from "@angular/core";
import { RepoService } from "../../../service/repo.service";

@Component({
  selector: "app-repo",
  templateUrl: "./repo.component.html",
  styleUrls: ["./repo.component.scss"]
})
export class RepoComponent implements OnInit {
  repos: any;
  username: string;
  searching: boolean = false;
  error: string;
  searchResult: boolean;

  constructor(private repoService: RepoService) {}

  userSearch() {
    this.searchResult = false;
    this.searching = true;
    this.error = "";
    this.repos = [];

    this.repoService.updateUsername(this.username);

    this.repoService.getReposInfo().subscribe(
      repos => {
        this.repos = repos;
        this.searching = false;
        this.searchResult = true;
      },
      error => {
        this.error = error;
        this.searching = false;
      }
    );
  }

  ngOnInit() {}
}
