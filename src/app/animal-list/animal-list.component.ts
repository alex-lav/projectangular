import {Component} from '@angular/core';
import {Restangular} from 'ng2-restangular';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

declare var angular: any;

@Component({
    selector: 'animal-list',
    styleUrls: ['../app/animal-list/animal-list.style.css'],
    templateUrl: '../app/animal-list/animal-list.template.html',
    inputs: ['animalList']
})
export class AnimalListComponent {

    private animals: any;
    private types: any;
    private subscribers: any;

    public animalList: any;
    public typeList: any;

    public counter: number;

    public animal: Restangular;

    private static hiss(animal: any) {
        let description: String;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et mes écailles sont ' + animal.scale;
        return description;
    }

    private static growl(animal: any) {
        let description: String;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et ma fourrure est ' + animal.fur;
        return description;
    }

    private static tweet(animal: any) {
        let description: String;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et mon plumage est ' + animal.feathers;
        return description;
    }

    constructor(private route: ActivatedRoute, private restangular: Restangular, private router: Router) {
        this.animals = restangular.all('animals');
        this.types = restangular.all('types');
        this.counter = 0;
    }

    ngOnInit() {
        this.subscribers = this.animals.getList().subscribe((animals: any) => {
            this.subscribers = this.types.getList().subscribe((types: any) => {
                this.typeList = types;

                this.animalList = this.animalsArray(animals, types);
            });
        });
    }

    ngOnDestroy() {
        this.subscribers.unsubscribe();
    }

    animalsArray(animalList: any, typesList: any) {
        let array: any;
        array = [];

        angular.forEach(animalList, function (animalValue: any, animalKey: any) {
            angular.forEach(typesList, function (typeValue: any, typeKey: any) {

                if (animalValue.type === typeValue.id) {
                    animalValue.type = typeValue;

                    switch (animalValue.type.id) {
                        case 2: /* Reptile */
                            animalValue.description = AnimalListComponent.hiss(animalValue);
                            break;

                        case 3: /* Mammifère */
                            animalValue.description = AnimalListComponent.growl(animalValue);
                            break;

                        case 4: /* Oiseaux */
                            animalValue.description = AnimalListComponent.tweet(animalValue);
                            break;
                    }

                    array.push(animalValue);
                }
            }, array);
        }, array);

        return array;
    }

    deleteAnimal(id: any) {
        this.restangular.one('animals', id).get().subscribe((res: any) => {
            this.animal = res;

            this.animal.remove().subscribe((animals: any) => {
                this.router.navigate(['animallist']);
            });
        });
    }
}
