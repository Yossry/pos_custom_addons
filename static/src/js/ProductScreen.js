odoo.define('pos_custom_addons.ProductScreen', function (require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen')
    const Registries = require('point_of_sale.Registries');

    const NewProductScreen = ProductScreen =>
        class extends ProductScreen {
            async _clickProduct(event) {
                const product = event.detail;
                let list = this.env.pos.users.map(user => {
                    return {
                        id: user.id,
                        label: user.name,
                        isSelected: this.env.pos.user.id == user.id,
                        item: user,
                    }
                })
                console.log('==============', this)
                console.log('==============', list)
                const { confirmed, payload } = await this.showPopup('SelectionPopup',
                    {
                        title: this.env._t('Select Item'),
                        list: list,
                    }
                );

                const { confirmed: confirmed1 } = await this.showPopup('ConfirmPopup', {
                    title: 'Title',
                    body: 'Are you sure this action do?',
                });

                console.log('confirmed:', confirmed)
                console.log('payload:', payload)
                console.log('confirmed1:', confirmed1)
                let res = await super._clickProduct(event);
                
                return res
            }
        }
    Registries.Component.extend(ProductScreen, NewProductScreen)
    return NewProductScreen
});
