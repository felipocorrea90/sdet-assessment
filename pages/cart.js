class Cart {

    // Elements
    get userMenu() { return $('//a[@title="View my customer account"]') }

    changeCartQty(itemName, qty) {
        const qtyItem = $('//table[@id="cart_summary"]//tr[contains(.,"' + itemName + '")]//input[@class="cart_quantity_input form-control grey"]')
        qtyItem.setValue(qty)
    }

    getUnitPrice(itemName) {
        let unitPrice = $('//table[@id="cart_summary"]//tr[contains(.,"' + itemName + '")]//span[@class="price"]/span[@class="price"]').getText()
        unitPrice = parseInt(unitPrice, 10)
        return unitPrice
    }

    getTotalPrice(itemName) {
        let totalPrice = $('//table[@id="cart_summary"]//tr[contains(.,"' + itemName + '")]//span[@class="price"]/span[@class="price"]').getText()
        totalPrice = parseInt(totalPrice, 10)
        return totalPrice
    }

    getUserMenu() {
        return this.userMenu.getText()
    }
}

export default new Cart()