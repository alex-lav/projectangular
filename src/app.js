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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ng2_restangular_1 = require('ng2-restangular');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var animalApp_module_1 = require('./app/animalApp.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.App],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                animalApp_module_1.AnimalAppModule,
                ng2_restangular_1.RestangularModule.forRoot(function (RestangularProvider) {
                    RestangularProvider.setBaseUrl('https://listanimals-4e36.restdb.io/rest/');
                    RestangularProvider.setDefaultRequestParams({
                        apikey: '58d7d3d29b7aa19466091073'
                    });
                    RestangularProvider.setRestangularFields({
                        id: '_id'
                    });
                    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
                        return data;
                    });
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var ng2_restangular_1 = require('ng2-restangular');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var animalApp_module_1 = require('./app/animalApp.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.App],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                animalApp_module_1.AnimalAppModule,
                ng2_restangular_1.RestangularModule.forRoot(function (RestangularProvider) {
                    RestangularProvider.setBaseUrl('https://listanimals-4e36.restdb.io/rest/');
                    RestangularProvider.setDefaultRequestParams({
                        apikey: '58d7d3d29b7aa19466091073'
                    });
                    RestangularProvider.setRestangularFields({
                        id: '_id'
                    });
                    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
                        return data;
                    });
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
>>>>>>> e44b705f6d42ecf316185725a5044c0e7a33b214
//# sourceMappingURL=app.js.map