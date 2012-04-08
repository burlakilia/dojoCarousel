define(["dojo/_base/declare",
        "dojogp/mvc/_View",
        "dojo/text!./templates/ShortVacancySummary.html",
        "dojo/hash"], 
    function (declare, _View, Template, hash) {

        var Widget = declare("dojogp.views.applicant.search.ShortVacancySummary", [_View], {
            
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
                                 
                    var obj = new Array();
                    obj.push("search");
                    obj.push("vacancy");
                    obj.push(this.model.vacancy._id);
                    
                    hash(obj.join("/"));
                }
                
            }
            
        });
        
        return Widget;
});


