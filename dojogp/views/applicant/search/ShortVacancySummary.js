define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dojogp/mvc/_View",
        "dojo/text!./templates/ShortVacancySummary.html"], 
    function (declare, _WidgetBase, _Templated, _View, Template) {

        var Widget = declare("dojogp.views.applicant.search.ShortVacancySummary", [_WidgetBase, _Templated, _View], {
            
            model: null, 
            
            logo: null,
            name: null,
            salary: null,

            templateString: Template,
            
            postCreate: function () {
                this.inherited(arguments);
                var model = this.model;
                var salary = "";
                var self = this;
                
                if(model != undefined && typeof model == "object" && model.vacancy.name != undefined) {
                    this.name.innerHTML = model.vacancy.name;
                    
                    if (model.vacancy.minSalary != undefined && model.vacancy.minSalary.amount != undefined) {
                        salary += "от " + model.vacancy.minSalary.amount + " " + model.vacancy.minSalary.currency.shortName;
                    }
                    
                    if (model.vacancy.maxSalary != undefined && model.vacancy.maxSalary.amount != undefined) {
                        salary += " до " + model.vacancy.maxSalary.amount + " " + model.vacancy.maxSalary.currency.shortName;
                    }
                    
                    
                    if (model.vacancy.company != undefined &&  model.vacancy.company.resources != undefined && 
                            model.vacancy.company.resources.smallLogo != undefined) {
                        this.logo.src = model.vacancy.company.resources.smallLogo;
                    }
                    
                    this.salary.innerHTML = salary;
                    
                } else {
                    console.error ("ShortVacancySummary: неправильный формат объекта модели!");
                }
            },
            
            _click: function() {
                if (this.model != undefined && this.model.vacancy._id != undefined) {
                    window.location = "#search/vacancy/" + this.model.vacancy._id;
                }
                
            }
            
        });
        
        return Widget;
});


