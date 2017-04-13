import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { Detail } from './detail';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  details: Detail[] = [];
  errorMessage: string;
  constructor(private detailService: DetailService) { }

  ngOnInit() { this.getAllUserDetail(); }

  getDetailForUser(username: string) {
    this.detailService.getDetailByfirstName(username)
      .subscribe(
      details => this.details.push(details),
      error => this.errorMessage = <any>error);
  }

  getAllUserDetail() {
    this.detailService.getAllUserDetails()
      .subscribe(
      details => this.details = details
      , error => this.errorMessage = <any>error
      );
  }
}
