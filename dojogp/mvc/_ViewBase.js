define([ "dojo/_base/declare", "dijit/_Widget" ], function(declare, _Widget) {

	return declare("dojogp.mvc._ViewBase", [ _Widget ], {

		model : null,

		_getModelAttr : function() {
			return this.model;
		},

		_setModelAttr : function(value) {
			this.model = value;
		},

		isValid : function() {
			return true;
		}
	});
});
