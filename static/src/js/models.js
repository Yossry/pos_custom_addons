odoo.define('pos_custom_addons.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');
    var core = require('web.core');
    var _t = core._t;

    models.load_fields('res.partner', ['ref', 'credit', 'debit'])    
    models.load_fields('pos.config', ['credit_limit'])
    models.load_fields('product.product', ['qty_available'])
    
    models.load_domain = function(model_name, domain) {
        var PosModel = models.PosModel.prototype.models;
        for (var i = 0; i < PosModel.length; i++) {
            var model = PosModel[i];
            if (model.model == model_name) {
                model.domain = domain
            }
        }
    };
    
    models.change_load_model = function (model_name, new_model_name) {
    var PosModel = models.PosModel.prototype.models;
    for (var i = 0; i < PosModel.length; i++) {
        var model = PosModel[i];
        if (model.model === model_name) {
            model.model = new_model_name
        }
    }
    };
    models.change_load_model('pos.category', 'product.category')
    
    models.load_domain('product.product', [['qty_available', '>', 0]])
    // var _super_order = models.Order.prototype;
    // models.Order = models.Order.extend({
        
        // });
        
        // var _super_orderline = models.Orderline.prototype;
        // models.Orderline = models.Orderline.extend({
        
    // });
});

