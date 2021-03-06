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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var animalApp_component_1 = require('./animalApp.component');
var router_1 = require('@angular/router');
var animal_list_module_1 = require('./animal-list/animal-list.module');
var animal_detail_module_1 = require('./animal-detail/animal-detail.module');
var add_animal_module_1 = require('./add-animal/add-animal.module');
var AnimalAppModule = (function () {
    function AnimalAppModule() {
    }
    AnimalAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                animalApp_component_1.AnimalAppComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                animal_detail_module_1.AnimalDetailModule,
                router_1.RouterModule,
                animal_list_module_1.AnimalListModule,
                add_animal_module_1.AnimalAddModule
            ],
            exports: [animalApp_component_1.AnimalAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimalAppModule);
    return AnimalAppModule;
}());
exports.AnimalAppModule = AnimalAppModule;
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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var animalApp_component_1 = require('./animalApp.component');
var router_1 = require('@angular/router');
var animal_list_module_1 = require('./animal-list/animal-list.module');
var animal_detail_module_1 = require('./animal-detail/animal-detail.module');
var add_animal_module_1 = require('./add-animal/add-animal.module');
var AnimalAppModule = (function () {
    function AnimalAppModule() {
    }
    AnimalAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                animalApp_component_1.AnimalAppComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                animal_detail_module_1.AnimalDetailModule,
                router_1.RouterModule,
                animal_list_module_1.AnimalListModule,
                add_animal_module_1.AnimalAddModule
            ],
            exports: [animalApp_component_1.AnimalAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimalAppModule);
    return AnimalAppModule;
}());
exports.AnimalAppModule = AnimalAppModule;
>>>>>>> e44b705f6d42ecf316185725a5044c0e7a33b214
//# sourceMappingURL=animalApp.module.js.map