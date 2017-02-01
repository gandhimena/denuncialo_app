// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routers, routerComponents } from "./routing";


@NgModule({
    declarations: [AppComponent, ...routerComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routers)
    ],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);