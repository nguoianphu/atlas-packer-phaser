(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{sRS0:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("sX7g"),s=i("CcnG"),o=function(){function t(){this.imgsFiles=[],this.spritePerRow=1,this.nameAtlas=""}return t.prototype.insertNewSprites=function(t){var e;(e=this.imgsFiles).push.apply(e,t)},t.prototype.setImages=function(t,e,i){void 0===e&&(e=1),void 0===i&&(i=""),this.imgsFiles=n.a(t),this.spritePerRow=e,this.nameAtlas=i},t.prototype.deleteOneSprite=function(t){this.setImages(deleteSpriteInArray(t,this.getImages()))},t.prototype.getImages=function(){return this.imgsFiles},t.prototype.getSpritesheetRow=function(){return this.spritePerRow},t.prototype.getNameAtlas=function(){return this.nameAtlas},t.ngInjectableDef=s.S({factory:function(){return new t},token:t,providedIn:"root"}),t}()}}]);