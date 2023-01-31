import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';
  test = 'TEST BINDING';

  loadedFeature = 'recipe';

  // moreTests = ['test 1', 'test 2'];
  // UITests = this.moreTests;

  // onTestAdded(newTest: string) {
  //   console.log(newTest);
  //   this.moreTests.push(newTest);
  //   // this.UITests = this.moreTests // UITests is referencing moreTests
  //   this.UITests = [...this.moreTests]; // UITests is copying the value of moreTests
  // }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
