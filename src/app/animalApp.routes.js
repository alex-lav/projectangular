"use strict";
var animalApp_component_1 = require('./animalApp.component');
var animal_list_component_1 = require('./animal-list/animal-list.component');
var animal_detail_component_1 = require('./animal-detail/animal-detail.component');
var add_animal_component_1 = require('./add-animal/add-animal.component');
exports.animalAppRoutes = [
    {
        path: '',
        component: animalApp_component_1.AnimalAppComponent,
        children: [
            { path: 'animallist', component: animal_list_component_1.AnimalListComponent },
            { path: 'animaldetail/:id', component: animal_detail_component_1.AnimalDetailComponent },
            { path: 'addanimal', component: add_animal_component_1.AnimalAddComponent },
            { path: '', redirectTo: '/animallist', pathMatch: "full" }
        ]
    },
];
//# sourceMappingURL=animalApp.routes.js.map