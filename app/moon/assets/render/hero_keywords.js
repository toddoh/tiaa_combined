var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"policygroup\" banana-status=\"folded\">\n    <div class=\"policyinfo\">\n        <p class=\"policytitle\"><strong>"
    + this.escapeExpression(((helper = (helper = helpers.policyname || (depth0 != null ? depth0.policyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"policyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n        <div class=\"policykeywords-action-fold\">\n            <p class=\"unfold\">&#xf078;</p>\n            <p class=\"fold\">&#xf077;</p>\n        </div>\n    </div>\n    <div class=\"keywords\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "        <p class=\"keyword\"><strong class=\"bolder\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</strong></p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,this.lambda(depth0, depth0),{"name":"this","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});