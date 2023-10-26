define([
    'Magento_Ui/js/grid/listing'
], function (Collection) {
    'use strict';

    return Collection.extend({
        defaults: {
            editorConfig: {
                component: 'Hgati_FastPrice/js/grid/editing/editor'
            }
        }
    });
});