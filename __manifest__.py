# -*- coding: utf-8 -*-
{
    'name': 'Pos Custom Addons',
    'version': '15.0.0.1',
    'author': 'Sonod',
    'company': "Sonod ERP & IT Solutions",
    'website': 'https://www.sonod.tech',
    'license': 'LGPL-3',
    #'category': ['HR','Accounting','POS','Health','Report','Stock','Project','Web','Manufacturing','Other',],
    'category': 'POS',
    'summary': "Pos Custom Addons ",
    'description': "Pos Custom Addons ",
    'depends': ['point_of_sale'],
    'data': [
        'views/views.xml',
    ],
    "assets": {
        "point_of_sale.assets": [
            "/pos_custom_addons/static/src/js/*",
            "/pos_custom_addons/static/src/css/*",
        ],
        'web.assets_qweb': [
            '/pos_custom_addons/static/src/xml/*',
        ],
    },
    'installable': True,
    'auto_install': False,
}
