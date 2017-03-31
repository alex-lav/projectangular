import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, BaseRequestOptions, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MockBackend} from '@angular/http/testing';
import {RestangularModule, RestangularHttp, Restangular} from 'ng2-restangular';

import {App} from './app.component';
import {routes} from './app.routes';
import {AnimalAppModule} from './app/animalApp.module';

@NgModule({
    declarations: [App],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        AnimalAppModule,
        RestangularModule.forRoot((RestangularProvider: any) => {
            RestangularProvider.setBaseUrl('https://listanimals-4e36.restdb.io/rest/');
            RestangularProvider.setDefaultRequestParams({
                apikey: '58d7d3d29b7aa19466091073'
            });
            RestangularProvider.setRestangularFields({
                id: '_id'
            });
            RestangularProvider.addResponseInterceptor((data: any, operation: any, what: any, url: any, response: any) => {
                return data;
            });
        }),
    ],
    providers: [],
    bootstrap: [App]
})
export class AppModule {
}




