
import { InvokeFunctionExpr } from '@angular/compiler';
import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive ({
    selector: '[appHoverAffect]'
})

export class HoverAffectDirective {
    @Input() elementType?: string;
    @Input() first?: boolean;
    @Input() last?: boolean;

    originalElementBorder:string;

    constructor(private elm: ElementRef) {
        this.originalElementBorder = this.elm.nativeElement.style.border;
    }

    @HostListener("mouseenter") OnMouseEnter() {
        if(this.elementType == "type") {
            this.elm.nativeElement.style.textDecoration = "underline";
        } else if (this.elementType == "tag" ) {
            this.elm.nativeElement.style.fontWeight = "bold";
        } else if (this.elementType == "card" && (this.first || this.last)) {
            this.elm.nativeElement.style.border = "4px dashed"
        }
    }
    
    @HostListener("mouseleave") onMouseLeave() {
        if(this.elementType == "type") {
            this.elm.nativeElement.style.textDecoration = "initial";
        } else if (this.elementType == "tag") {
            this.elm.nativeElement.style.fontWeight = "normal";
        } else if (this.elementType == "card" && (this.first || this.last)) {
            this.elm.nativeElement.style.border = this.originalElementBorder;
        }
    }
}