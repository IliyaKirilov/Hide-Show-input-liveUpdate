sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("kpmg.home.Exercise1.controller.ModelView1", {
		onInit: function () {
			var Data = {
				recipient: {
					name: "Iliya"
				}
			};

			var Model = new JSONModel(Data);

			this.getView().setModel(Model);
		},

		onHide: function () {
			var inputec = this.byId("inputche");
			inputec.setVisible(!inputec.getVisible());
		},
		
		
		onShow: function () {
			debugger;
			var inputec = this.byId("inputche");
			inputec.setVisible(!inputec.getVisible());
		}

	});
});