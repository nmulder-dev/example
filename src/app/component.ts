import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        console.log("getProducts invoked");
        return this.model.getProducts();
    }
    
    selectedProduct: string | undefined;

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }

    handleInputEvent(ev: Event) {
        if (ev.target instanceof HTMLInputElement) {
            this.selectedProduct = ev.target.value;
        }
    }
}