"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // routerLink: Angular Directive which specifies the path it should navigate
    // routerLinkActive: Angular Directive which specifies the name of the class which gets applied when the path is followed
    //router-outlet: marks where a router should display a view
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Routing Application</h1>\n  <nav>\n  <a routerLink=\"/departments\" routerLinkActive=\"active\">Departments</a>\n  <a routerLink=\"/employees\" routerLinkActive=\"active\">Employees</a>\n  </nav>\n  <router-outlet></router-outlet>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map