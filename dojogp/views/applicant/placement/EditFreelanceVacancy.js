/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(["dojo/_base/declare",
        "dojo/text!./templates/EditFreelanceVacancy.html",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojo/Evented",
        "dijit/_WidgetsInTemplateMixin",
        "dojogp/mvc/_View",
        "dijit/form/Form",
        "dijit/form/ValidationTextBox",
        "dijit/form/FilteringSelect",
        "dijit/form/DateTextBox",
        "dojogp/store/MoneyInput",
        "dojogp/widgets/CitySelector",
        "dijit/Editor",
        "dijit/_editor/plugins/AlwaysShowToolbar", 
        "dijit/form/Button"], function(declare, template, _WidgetBase, 
    _TemplatedMixin, Evented, _WidgetsInTemplateMixin, _View, 
    Form, ValidationTextBox, FilteringSelect, DateTextBox, MoneyInput, CitySelector, Editor, AlwaysShowToolbar, Button) {

   var BaseForm = declare("dojogp.views.applicant.placement.EditFreelanceVacancy", 
   [Form, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
       encType: "multipart/form-data",
       action: "/dojoCarousel",
       method: "POST",
       templateString: template,
       widgetsInTemplate: true,
       
       // STORES
       freelanceWorkTypeStore: null,
       segmentStore: null,
       positionStore: null,
       currencyStore: null,
       countryStore: null,
       cityStore: null,
       
       startup: function() {
            this.inherited(arguments);

            // create advanced widgets
            this.workTypeWidget.store = this.freelanceWorkTypeStore;
            this.segmentWidget.store = this.segmentStore;
            this.segmentWidget.set('value',1); 
            
            var self = this;
            
            this.segmentWidget.onChange = function(segment) {
                if (this.isModelData) {
                    this.isModelData = false
                } else {
                    self.positionWidget.reset();
                }
                self.positionWidget.query = {"segmentId": segment};
            }
            
            this.positionWidget.store = this.positionStore;
            this.moneyFromWidget = new MoneyInput({
                name: "minSalary",
                curencyStore: this.currencyStore
            }, this.moneyFromHolder);
            
            this.moneyFromWidget.startup();
            
            this.positionWidget.store = this.positionStore;
            this.moneyToWidget = new MoneyInput({
                name: "maxSalary",
                curencyStore: this.currencyStore
            }, this.moneyToHolder);
            
            this.moneyToWidget.startup();
            
            this.citySelectorWidget = new CitySelector({
                name: "cityId",
                countryStore: this.countryStore,
                cityStore: this.cityStore
            }, this.citySelectorHolder);
            
            this.citySelectorWidget.startup();
            
            this.responsibilityWidget = new Editor({
                name: 'responsibilities',
                height: '',
                style: "width: 100%; height: 150px",
                extraPlugins: [AlwaysShowToolbar]
            }, this.responsibilityHolder);
            this.responsibilityWidget.startup();
            
            this.experienceWidget = new Editor({
                name: 'experience',
                height: '',
                style: "width: 100%; height: 150px",
                extraPlugins: [AlwaysShowToolbar]
            }, this.experienceHolder);
            this.experienceWidget.startup();
            
            this.submitButton = new Button({
                label: "Сохранить",
                onClick: function() {
                    self.submit(); 
                }
            }, this.submitButtonHolder);
            
            // check and represent model 
            if (this.model != undefined) {
                this._initModel();
            }
        },
        
        /**
         * Метод установки модели
         */
        _initModel: function() {
            var self = this;
            this.segmentWidget.isModelData = true;
            
            dojo.forEach(this.getChildren(), function(widget) {
                if( self.model[widget.name] != undefined) {
                    widget.set('value', self.model[widget.name]);
                }
            });
            
            // устанавливаем даты
            this.dateStartWidget.set("value", new Date(this.model["workingPeriod"]["begin"]));
            this.dateEndWidget.set("value", new Date(this.model["workingPeriod"]["end"]));
        },
        
        submit: function() {
            if (this.validate()) {
                //this.inherited(arguments);
                this.emit("submit", {"data" : this.getValues() });
            } else {
                this.emit("validationError", {});
            }
        }
       
   });
   
   return BaseForm;
   
});

