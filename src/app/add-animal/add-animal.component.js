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
var router_1 = require('@angular/router');
var ng2_restangular_1 = require('ng2-restangular');
require('rxjs/Rx');
var AnimalAddComponent = (function () {
    function AnimalAddComponent(restangular, router) {
        this.restangular = restangular;
        this.router = router;
        this.types = restangular.all('types');
    }
    AnimalAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribers = this.types.getList().subscribe(function (types) {
            _this.typeList = types;
        });
    };
    AnimalAddComponent.prototype.submitForm = function (form) {
        this.restangular.all('animals').post(form.value);
        this.router.navigate(['animallist']);
    };
    AnimalAddComponent.prototype.ngOnDestroy = function () {
        this.subscribers.unsubscribe();
    };
    AnimalAddComponent.prototype.chargeType = function ($event) {
        var typeId = $event.target.value;
        switch (typeId) {
            case '2':
                this.inputMethod = 2;
                break;
            case '3':
                this.inputMethod = 3;
                break;
            case '4':
                this.inputMethod = 4;
                break;
        }
    };
    AnimalAddComponent = __decorate([
        core_1.Component({
            selector: 'add-animal',
            templateUrl: '../app/add-animal/add-animal.template.html',
            inputs: ['inputMethod']
        }), 
        __metadata('design:paramtypes', [ng2_restangular_1.Restangular, router_1.Router])
    ], AnimalAddComponent);
    return AnimalAddComponent;
}());
exports.AnimalAddComponent = AnimalAddComponent;
//# sourceMappingURL=add-animal.component.js.map