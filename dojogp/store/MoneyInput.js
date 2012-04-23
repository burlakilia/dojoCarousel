define(["dojo/_base/declare",
        "dojo/text!./templates/MoneyInput.html",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dijit/form/NumberTextBox", 
        "dijit/form/FilteringSelect"], function(declare, Template, _WidgetBase, 
    _TemplatedMixin, _WidgetsInTemplateMixin, NumberTextBox, FilteringSelect) {

        
        var MoneyInput = new declare("dojogp.store.MoneyInput", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            
            templateString: Template,
            moneyWidget: null,
            
            curencyStore: null,
            value: null,
            curency: null,
            
            postCreate: function() {
                this.inherited(arguments);
                
                var self = this;
                
                this.curencyWidget = new FilteringSelect({
                    name: 'curency', 
                    required: true, 
                    searchAttr:'shortName', 
                    store: this.curencyStore,
                    style:'width: 50px',
                    onChange: function(cur) {
                        self.curency = cur;
                    }
                }, this.curencyHolder) 
 
                this.moneyWidget.onChange = function(val) {
                    self.value = val;
                };
                
                this.curencyWidget.startup();
            },
            
            set: function(attr, value) {
                if (attr == 'value') {
                    this.curencyWidget.set('value', value.currencyId);
                    this.moneyWidget.set('value', value.amount);
                }

                this.inherited(arguments);
            }
            
        });
        
        return MoneyInput;
})