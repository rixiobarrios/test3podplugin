sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("sap.custom.plugin.testplugins.test3podplugin.test3podplugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});