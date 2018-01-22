import { MenuItem } from '../restaurant-detail/menu-item/menu.item.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';


export class ShoppingCartService {
    itens: CartItem[] = [];

    clear() {
        this.itens = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id);
        if (foundItem) { // se ja existir o item no carrinho so adiciona a quantidade
            this.increaseQty(foundItem);
        } else { // se nao existir coloca o item no carrinho
            this.itens.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1); // apartir do indice item remove 1 objeto
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    total(): number {
        return this.itens.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}