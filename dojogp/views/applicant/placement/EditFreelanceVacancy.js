/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(["dojo/_base/declare",
        "dojo/text!./templates/EditFreelanceVacancy.html",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojogp/mvc/_View",
        "dijit/form/Form",
        "dijit/form/ValidationTextBox",
        "dijit/form/FilteringSelect",
        "dijit/form/DateTextBox",
        "dojogp/store/MoneyInput",
        "dojogp/widgets/CitySelector",
        "dijit/Editor",
    "dijit/_editor/plugins/AlwaysShowToolbar"], function(declare, template, _WidgetBase, 
    _TemplatedMixin, _WidgetsInTemplateMixin, _View, 
    Form, ValidationTextBox, FilteringSelect, DateTextBox, MoneyInput, CitySelector, Editor, AlwaysShowToolbar) {
        
   var BaseForm = declare("dojogp.views.applicant.placement.EditFreelanceVacancy", [Form, _TemplatedMixin, _WidgetsInTemplateMixin], {
       
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
                self.positionWidget.query = {"segmentId": segment};
                self.positionWidget.reset();
            }
            
            this.positionWidget.store = this.positionStore;
            this.moneyFromWidget = new MoneyInput({
                            name: "moneyFrom",
                            curencyStore: this.currencyStore
            }, this.moneyFromHolder);
            
            this.moneyFromWidget.startup();
            
            this.positionWidget.store = this.positionStore;
            this.moneyToWidget = new MoneyInput({
                            name: "moneyTo",
                            curencyStore: this.currencyStore
            }, this.moneyToHolder);
            
            this.moneyToWidget.startup();
            
            this.citySelectorWidget = new CitySelector({
                            name: "city",
                            countryStore: this.countryStore,
                            cityStore: this.cityStore
            }, this.citySelectorHolder);
            
            this.citySelectorWidget.startup();
            
            this.responsibilityWidget = new Editor({
                name: 'responsibility',
                height: '',
                style: "width: 400px; height: 150px",
                extraPlugins: [AlwaysShowToolbar]
            }, this.responsibilityHolder);
            this.responsibilityWidget.startup();
            
            this.experienceWidget = new Editor({
                name: 'experience',
                height: '',
                style: "width: 400px; height: 150px",
                extraPlugins: [AlwaysShowToolbar]
            }, this.experienceHolder);
            this.experienceWidget.startup();
            
        }
       
   });
   
   return BaseForm;
   
});

