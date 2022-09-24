odoo.define('pos_custom_addons.ClientLine', function (require) {
    'use strict';

    const ClientLine = require('point_of_sale.ClientLine')
    const Registries = require('point_of_sale.Registries');

    const NewClientLine = ClientLine =>
        class extends ClientLine {
            get crdeitLimit() {
                console.log("\n\n --------------- this: ", this)
                return this.props.partner.credit >= this.env.pos.config.credit_limit ? 'red-credit-limit' : '';
            }
        }
    Registries.Component.extend(ClientLine, NewClientLine)
    return NewClientLine
});
