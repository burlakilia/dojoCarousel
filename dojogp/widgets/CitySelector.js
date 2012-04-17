/* 
 * Виджет выбора страны и города
 */
define(["dojo/_base/declare",
        "dojo/text!./templates/CitySelector.html",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/form/_FormWidgetMixin",
        "dijit/form/FilteringSelect" ], function(declare, TemplateString, _WidgetBase, _TemplatedMixin, _FormWidgetMixin, FilteringSelect) {

    var _CountrySelectorWidget = declare("dojogp.widgets._CountrySelectorWidget", [FilteringSelect], {
        
        id: "id",
        name: "country",
        searchAttr: "name",
        
        cityWidget: null, // ссылка на виджет выбора города
        
        onChange: function(country) {
            this.inherited(arguments);
            this.cityWidget.query = {"countryId": country};
            this.cityWidget.reset();
        }
        
    });

    var _CitySelectorWidget = declare("dojogp.widgets._CountrySelectorWidget", [FilteringSelect], {
        
        id: "id",
        name: "city",
        searchAttr: "name",
        query: {"countryId": 1},
        baseWidget: null,
        
        onChange: function(city) {
            this.inherited(arguments);
            this.baseWidget.value = city;
        }
    });

    var BaseWidget = declare("dojogp.widgets.CitySelector", [_WidgetBase, _TemplatedMixin], {
        
        templateString: TemplateString,
        
        _countryWidget: null,
        _cityWidget: null,
        
        countryStore: null,
        cityStore: null,
        
        autoComplete: true, 
        value: null,
        
        postCreate: function() {
            this.inherited(arguments);

            
            this._cityWidget = new _CitySelectorWidget({
                store: this.cityStore,
                autoComplete: this.autoComplete,
                baseWidget: this
            }, this.citySelectorHolder);
            
                        
            this._countryWidget = new _CountrySelectorWidget({
                store: this.countryStore,
                autoComplete: this.autoComplete,
                cityWidget: this._cityWidget,
            }, this.countrySelectorHolder);
            
            
            this._countryWidget.startup();
            this._cityWidget.startup();
        }
        
    })    

    return BaseWidget;
});


