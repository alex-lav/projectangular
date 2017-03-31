import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Restangular} from 'ng2-restangular';
import 'rxjs/Rx';


@Component({
    selector: 'add-animal',
    templateUrl: '../app/add-animal/add-animal.template.html',
    inputs: ['inputMethod']
})
export class AnimalAddComponent {

    private types: any;
    private subscribers: any;

    public typeList: any;
    public inputMethod: any;

    constructor(public restangular: Restangular, private router: Router) {
        this.types = restangular.all('types');
    }

    ngOnInit() {
        this.subscribers = this.types.getList().subscribe((types: any) => {
            this.typeList = types;
        });
    }

    submitForm(form: any) {
        this.restangular.all('animals').post(form.value);
        this.router.navigate(['animallist']);
    }

    ngOnDestroy() {
        this.subscribers.unsubscribe();
    }

    chargeType($event: any) {
        let typeId = $event.target.value;

        switch (typeId) {
            case '2': /* Reptile */
                this.inputMethod = 2;
                break;

            case '3': /* Mammifère */
                this.inputMethod = 3;
                break;

            case '4': /* Oiseaux */
                this.inputMethod = 4;
                break;
        }
    }

}
