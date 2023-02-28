import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

// TEST HTTP REQS

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  createAndStore(name: string, amount: number) {
    const itemData: { name: string; amount: number } = {
      name: name,
      amount: amount,
    };
    this.http
      .post<{ name: string }>(
        'https://ng-project-c984a-default-rtdb.firebaseio.com/items.json',
        itemData,
        { observe: 'response' }
      )
      .subscribe((resData) => {
        console.log(resData);
      });
  }

  fetchItems() {
    // WHEN ITS A FETCH REQ AND I NEED THE RESPONSE
    // im returning here so i can use the result somewhere else
    // subscribe to this wherever i need tha data to be
    return this.http
      .get<{ name: string; amount: number }>(
        'https://ng-project-c984a-default-rtdb.firebaseio.com/items.json'
      )
      .pipe(
        map((resData: any) => {
          const itemsArr = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              itemsArr.push({ ...resData[key], id: key });
            }
          }
          return itemsArr;
        })
      );
  }

  clearItems() {
    // return observable and do not subscribe here
    return this.http
      .delete(
        'https://ng-project-c984a-default-rtdb.firebaseio.com/items.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        // tap allows us to look into the response
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
