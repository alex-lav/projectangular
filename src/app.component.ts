import {Component, NgModule} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Restangular} from 'ng2-restangular';


@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
})
export class App {
    constructor(private restangular: Restangular) {
    }

    request() {
        this.restangular.all('animals').getList().subscribe(
            (res: any) => {
                console.log(res);
            },
            (err: any) => {
                console.log(err);
            });
    }
}
