import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Restangular} from 'ng2-restangular';
import 'rxjs/Rx';

declare var angular: any;

@Component({
    selector: 'animal-detail',
    styleUrls: ['../app/animal-detail/animal-detail.style.css'],
    templateUrl: '../app/animal-detail/animal-detail.template.html',
    inputs: ['animal', 'editable', 'typeList', 'nameType', 'inputMethod']
})

export class AnimalDetailComponent {

    private types: any;
    private id: number;
    private subscribers: any;

    public animal: Restangular;
    public editable: boolean;
    public typeList: Restangular;
    public nameType: String;
    public inputMethod: any;

    constructor(private route: ActivatedRoute, private restangular: Restangular, private router: Router) {
        this.types = restangular.all('types');
    }

    ngOnInit() {
        let resultRes: any;
        let theType: any;

        this.route.params.forEach((params: Params) => {
            this.id = params['id'];
            console.log(this.id);
        });

        this.restangular.one('animals', this.id).get().subscribe((res: any) => {
            this.animal = res;
            resultRes = this.animal.plain();
            this.inputMethod = resultRes.type;

            this.subscribers = this.types.getList().subscribe((types: any) => {
                this.typeList = types;

                theType = this.findType(resultRes, this.typeList);
                this.nameType = theType.name;
            });
        });
    }

    deleteAnimal() {
        this.animal.remove().subscribe((animals: any) => {
            this.router.navigate(['animallist']);
        });
    }

    editAnimal() {
        let theType: any;
        let resultRes: any;

        if (this.editable) {
            this.animal.put();

            this.subscribers = this.types.getList().subscribe((types: any) => {
                resultRes = this.animal.plain();

                theType = this.findType(resultRes, this.typeList);
                this.nameType = theType.name;
            });

            this.editable = false;
        } else {
            this.editable = true;
        }
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

    findType(animal: any, types: any) {
        let oneType: Object;

        angular.forEach(types, function (typeValue: any, typeKey: any) {

            if (animal.type == typeValue.id) {
                oneType = typeValue;
            }
        });

        return oneType;
    }

}
