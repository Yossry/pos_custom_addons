# -*- coding: utf-8 -*-
import logging
from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError
from odoo.tools import float_is_zero, float_compare
import pytz


from itertools import groupby
_logger = logging.getLogger(__name__)


# class PosSession(models.Model):
#     _inherit = 'pos.session'


# class POSOrder(models.Model):
#     _inherit = 'pos.order'


# class POSOrderLine(models.Model):
#     _inherit = 'pos.order.line'


class PosConfig(models.Model):
    _inherit = 'pos.config'
    _description = 'Pos Config'
    
    credit_limit = fields.Float(default=2000)