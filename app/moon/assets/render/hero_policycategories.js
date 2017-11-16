var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <p class=\"category\"><strong class=\"bolder\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</strong></p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<p><strong class=\"bolder\">주제별로 보기</strong></p>\n<div class=\"categories\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,this.lambda(depth0, depth0),{"name":"this","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});