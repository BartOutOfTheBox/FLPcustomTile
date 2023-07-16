sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.danone.bookshopvieworderstile.controller.App", {
        onInit() {
        },

        async onPress() {
          let oCrossAppNavigator = await sap.ushell.Container.getServiceAsync("CrossApplicationNavigation");
          oCrossAppNavigator.toExternal({
            target: {
              semanticObject: "Orders",
              action: "Display"
            },
            params: {}
          });
        }
      });
    }
  );
  