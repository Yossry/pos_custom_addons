odoo.define('pos_custom_addons.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');
    var core = require('web.core');
    var _t = core._t;

    models.load_fields('res.partner', ['ref', 'credit', 'debit'])    
    models.load_fields('pos.config', ['credit_limit'])    

    // var _super_order = models.Order.prototype;
    // models.Order = models.Order.extend({
        
    // });

    // var _super_orderline = models.Orderline.prototype;
    // models.Orderline = models.Orderline.extend({
        
    // });
});

