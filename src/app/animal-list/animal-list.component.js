"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_restangular_1 = require('ng2-restangular');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var AnimalListComponent = (function () {
    function AnimalListComponent(route, restangular, router) {
        this.route = route;
        this.restangular = restangular;
        this.router = router;
        this.animals = restangular.all('animals');
        this.types = restangular.all('types');
        this.counter = 0;
    }
    AnimalListComponent.hiss = function (animal) {
        var description;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et mes écailles sont ' + animal.scale;
        return description;
    };
    AnimalListComponent.growl = function (animal) {
        var description;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et ma fourrure est ' + animal.fur;
        return description;
    };
    AnimalListComponent.tweet = function (animal) {
        var description;
        description = 'Je suis un(e) ' + animal.name.toLowerCase() + ' et mon plumage est ' + animal.feathers;
        return description;
    };
    AnimalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers = this.animals.getList().subscribe(function (animals) {
            _this.subscribers = _this.types.getList().subscribe(function (types) {
                _this.typeList = types;
                _this.animalList = _this.animalsArray(animals, types);
            });
        });
    };
    AnimalListComponent.prototype.ngOnDestroy = function () {
        this.subscribers.unsubscribe();
    };
    AnimalListComponent.prototype.animalsArray = function (animalList, typesList) {
        var array;
        array = [];
        angular.forEach(animalList, function (animalValue, animalKey) {
            angular.forEach(typesList, function (typeValue, typeKey) {
                if (animalValue.type === typeValue.id) {
                    animalValue.type = typeValue;
                    switch (animalValue.type.id) {
                        case 2:
                            animalValue.description = AnimalListComponent.hiss(animalValue);
                            break;
                        case 3:
                            animalValue.description = AnimalListComponent.growl(animalValue);
                            break;
                        case 4:
                            animalValue.description = AnimalListComponent.tweet(animalValue);
                            break;
                    }
                    array.push(animalValue);
                }
            }, array);
        }, array);
        return array;
    };
    AnimalListComponent.prototype.deleteAnimal = function (id) {
        var _this = this;
        this.restangular.one('animals', id).get().subscribe(function (res) {
            _this.animal = res;
            _this.animal.remove().subscribe(function (animals) {
                _this.router.navigate(['animallist']);
            });
        });
    };
    AnimalListComponent = __decorate([
        core_1.Component({
            selector: 'animal-list',
            styleUrls: ['../app/animal-list/animal-list.style.css'],
            templateUrl: '../app/animal-list/animal-list.template.html',
            inputs: ['animalList']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_restangular_1.Restangular, router_1.Router])
    ], AnimalListComponent);
    return AnimalListComponent;
}());
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map