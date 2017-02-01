import { HomeComponent } from "./pages/home/home";
import {Home2Component} from "./pages/home2/home2";
import { MisDenunciasComponent } from "./pages/misDenuncias/misDenuncias";
import {MasComponent} from "./pages/mas/mas";
import {ProfileComponent}from"./pages/mas/profile/profile";
import {RegulationsComponent} from "./pages/mas/regulations/regulations";

export const routers = [
    {path:"home" , component: HomeComponent},
    {path:"misDenuncias", component: MisDenunciasComponent},
    {path:"home2", component: Home2Component},
    {path:"mas", component: MasComponent},
        {path:"profile", component: ProfileComponent},
        {path:"", component: RegulationsComponent}
];

export const routerComponents = [
    HomeComponent,
    MisDenunciasComponent,
    Home2Component,
    MasComponent,
    ProfileComponent,
    RegulationsComponent,
];

