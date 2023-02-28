import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  test = 'TEST BINDING';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  // moreTests = ['test 1', 'test 2'];
  // UITests = this.moreTests;

  // onTestAdded(newTest: string) {
  //   console.log(newTest);
  //   this.moreTests.push(newTest);
  //   // this.UITests = this.moreTests // UITests is referencing moreTests
  //   this.UITests = [...this.moreTests]; // UITests is copying the value of moreTests
  // }
}
