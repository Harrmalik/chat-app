var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var UserInfoBoxComponent = (function () {
    function UserInfoBoxComponent() {
        this.user = {
            displayName: 'Harrmalik',
            userName: 'Malik Harrison',
            avatar: 'http://lorempixel.com/100/100/people/8/',
            posts: [],
            following: 1,
            followers: 0
        };
    }
    UserInfoBoxComponent.prototype.ngOnInit = function () {
    };
    UserInfoBoxComponent = __decorate([
        Component({
            selector: 'user-info-box',
            templateUrl: './user-info-box.component.html',
            styleUrls: ['./user-info-box.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UserInfoBoxComponent);
    return UserInfoBoxComponent;
}());
//# sourceMappingURL=../../../../../src/app/components/user-info-box/user-info-box.component.js.map