<<<<<<< HEAD
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
var AnimalDetailComponent = (function () {
    function AnimalDetailComponent(route, restangular, router) {
        this.route = route;
        this.restangular = restangular;
        this.router = router;
        this.types = restangular.all('types');
    }
    AnimalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultRes;
        var theType;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        this.restangular.one('animals', this.id).get().subscribe(function (res) {
            _this.animal = res;
            resultRes = _this.animal.plain();
            _this.inputMethod = resultRes.type;
            _this.subscribers = _this.types.getList().subscribe(function (types) {
                _this.typeList = types;
                theType = _this.findType(resultRes, _this.typeList);
                _this.nameType = theType.name;
            });
        });
    };
    AnimalDetailComponent.prototype.deleteAnimal = function () {
        var _this = this;
        this.animal.remove().subscribe(function (animals) {
            _this.router.navigate(['animallist']);
        });
    };
    AnimalDetailComponent.prototype.editAnimal = function () {
        var _this = this;
        var theType;
        var resultRes;
        if (this.editable) {
            this.animal.put();
            this.subscribers = this.types.getList().subscribe(function (types) {
                resultRes = _this.animal.plain();
                theType = _this.findType(resultRes, _this.typeList);
                _this.nameType = theType.name;
            });
            this.editable = false;
        }
        else {
            this.editable = true;
        }
    };
    AnimalDetailComponent.prototype.ngOnDestroy = function () {
        this.subscribers.unsubscribe();
    };
    AnimalDetailComponent.prototype.chargeType = function ($event) {
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
    AnimalDetailComponent.prototype.findType = function (animal, types) {
        var oneType;
        angular.forEach(types, function (typeValue, typeKey) {
            if (animal.type == typeValue.id) {
                oneType = typeValue;
            }
        });
        return oneType;
    };
    AnimalDetailComponent = __decorate([
        core_1.Component({
            selector: 'animal-detail',
            styleUrls: ['../app/animal-detail/animal-detail.style.css'],
            templateUrl: '../app/animal-detail/animal-detail.template.html',
            inputs: ['animal', 'editable', 'typeList', 'nameType', 'inputMethod']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_restangular_1.Restangular, router_1.Router])
    ], AnimalDetailComponent);
    return AnimalDetailComponent;
}());
exports.AnimalDetailComponent = AnimalDetailComponent;
=======
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
var AnimalDetailComponent = (function () {
    function AnimalDetailComponent(route, restangular, router) {
        this.route = route;
        this.restangular = restangular;
        this.router = router;
        this.types = restangular.all('types');
    }
    AnimalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resultRes;
        var theType;
        this.route.params.forEach(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        this.restangular.one('animals', this.id).get().subscribe(function (res) {
            _this.animal = res;
            resultRes = _this.animal.plain();
            _this.inputMethod = resultRes.type;
            _this.subscribers = _this.types.getList().subscribe(function (types) {
                _this.typeList = types;
                theType = _this.findType(resultRes, _this.typeList);
                _this.nameType = theType.name;
            });
        });
    };
    AnimalDetailComponent.prototype.deleteAnimal = function () {
        var _this = this;
        this.animal.remove().subscribe(function (animals) {
            _this.router.navigate(['animallist']);
        });
    };
    AnimalDetailComponent.prototype.editAnimal = function () {
        var _this = this;
        var theType;
        var resultRes;
        if (this.editable) {
            this.animal.put();
            this.subscribers = this.types.getList().subscribe(function (types) {
                resultRes = _this.animal.plain();
                theType = _this.findType(resultRes, _this.typeList);
                _this.nameType = theType.name;
            });
            this.editable = false;
        }
        else {
            this.editable = true;
        }
    };
    AnimalDetailComponent.prototype.ngOnDestroy = function () {
        this.subscribers.unsubscribe();
    };
    AnimalDetailComponent.prototype.chargeType = function ($event) {
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
    AnimalDetailComponent.prototype.findType = function (animal, types) {
        var oneType;
        angular.forEach(types, function (typeValue, typeKey) {
            if (animal.type == typeValue.id) {
                oneType = typeValue;
            }
        });
        return oneType;
    };
    AnimalDetailComponent = __decorate([
        core_1.Component({
            selector: 'animal-detail',
            styleUrls: ['../app/animal-detail/animal-detail.style.css'],
            templateUrl: '../app/animal-detail/animal-detail.template.html',
            inputs: ['animal', 'editable', 'typeList', 'nameType', 'inputMethod']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_restangular_1.Restangular, router_1.Router])
    ], AnimalDetailComponent);
    return AnimalDetailComponent;
}());
exports.AnimalDetailComponent = AnimalDetailComponent;
>>>>>>> e44b705f6d42ecf316185725a5044c0e7a33b214
//# sourceMappingURL=animal-detail.component.js.map