import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {

    constructor(element: ElementRef, @Attribute("pa-attr") bgClass: string) {
        element.nativeElement.classList.add(bgClass || "table-success", "fw-bold");
    }
}