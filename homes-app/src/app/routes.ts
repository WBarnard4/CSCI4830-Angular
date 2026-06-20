import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { AddHousingComponent } from "./add-housing/add-housing.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page",
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'addHouse',
        component: AddHousingComponent,
        title: 'Add House'
    },
];  

export default routeConfig;