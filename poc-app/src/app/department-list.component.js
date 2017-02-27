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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentListComponent = (function () {
    function DepartmentListComponent(router) {
        this.router = router;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "MongoDb" },
            { "id": 3, "name": "JavaScript" },
            { "id": 4, "name": "HTML" }
        ];
    }
    // onSelect() gets triggered on click
    DepartmentListComponent.prototype.OnSelect = function (department) {
        this.router.navigate(['/departments', department.id]);
        //navigate method of router service. Basically contains the info ng2 needs to construct the url and navigate to the corresponding view
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        template: "<h1>Department list</h1>\n  <ul class=\"items\">\n\n  <li (click)=\"OnSelect(department)\" *ngFor=\"let department of departments\" >\n  {{department.id}}{{department.name}}\n  </li>\n  </ul>"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map