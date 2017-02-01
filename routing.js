"use strict";
var home_1 = require("./pages/home/home");
var home2_1 = require("./pages/home2/home2");
var misDenuncias_1 = require("./pages/misDenuncias/misDenuncias");
var mas_1 = require("./pages/mas/mas");
var profile_1 = require("./pages/mas/profile/profile");
var regulations_1 = require("./pages/mas/regulations/regulations");
exports.routers = [
    { path: "home", component: home_1.HomeComponent },
    { path: "misDenuncias", component: misDenuncias_1.MisDenunciasComponent },
    { path: "home2", component: home2_1.Home2Component },
    { path: "mas", component: mas_1.MasComponent },
    { path: "profile", component: profile_1.ProfileComponent },
    { path: "", component: regulations_1.RegulationsComponent }
];
exports.routerComponents = [
    home_1.HomeComponent,
    misDenuncias_1.MisDenunciasComponent,
    home2_1.Home2Component,
    mas_1.MasComponent,
    profile_1.ProfileComponent,
    regulations_1.RegulationsComponent,
];
//# sourceMappingURL=routing.js.map