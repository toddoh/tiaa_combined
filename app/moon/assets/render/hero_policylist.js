var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"policy-container\">\n        <p class=\"policyname\"><strong class=\"bolder\">"
    + this.escapeExpression(((helper = (helper = helpers.policyname || (depth0 != null ? depth0.policyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"policyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.strategies : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"policy-strategycontainer\" banana-status=\"unfolded\">\n            <div class=\"substrategyinfo\">\n                <p class=\"substrategyname\"><strong class=\"bolder\">"
    + this.escapeExpression(((helper = (helper = helpers.strategyname || (depth0 != null ? depth0.strategyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"strategyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n                <div class=\"substrategy-action-fold\">\n                    <p class=\"unfold\">&#xf078;</p>\n                    <p class=\"fold\">&#xf077;</p>\n                </div>\n            </div>\n            <div class=\"strategy\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.task : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function", buffer = 
  "                <div class=\"task\" banana-taskdata=\""
    + alias2((helpers.toJSON || (depth0 && depth0.toJSON) || alias1).call(depth0,(depth0 != null ? depth0.keywords : depth0),{"name":"toJSON","hash":{},"data":data}))
    + "\" banana-taskcategory=\""
    + alias2((helpers.toJSON || (depth0 && depth0.toJSON) || alias1).call(depth0,(depth0 != null ? depth0.category : depth0),{"name":"toJSON","hash":{},"data":data}))
    + "\">\n                    <div class=\"taskinfo\">\n                        <p class=\"taskname\"><strong class=\"bolder\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></p>\n                        <div class=\"departmentinfo\">\n";
  stack1 = ((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias1),(options={"name":"department","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias3 ? helper.call(depth0,options) : helper));
  if (!helpers.department) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </div>\n                    </div>\n\n                    <div class=\"taskstatus\" banana-taskstatus=\""
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"taskstatusbar\"></div>\n                        <p>"
    + alias2(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "%</p>\n                    </div>\n\n                    <ul class=\"descriptions\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "                            <p class=\"departmentname\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li class=\"description\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.statuslink : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            <p class=\"descriptiontext\" banana-taskdesc=\""
    + alias3(((helper = (helper = helpers.statusdesc || (depth0 != null ? depth0.statusdesc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"statusdesc","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                            <p class=\"descriptionstatus bolder\" banana-taskcode=\""
    + alias3(((helper = (helper = helpers.statuscode || (depth0 != null ? depth0.statuscode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"statuscode","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</p>\n                        </li>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <div class=\"description-action-link\" banana-link=\""
    + this.escapeExpression(((helper = (helper = helpers.statuslink || (depth0 != null ? depth0.statuslink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"statuslink","hash":{},"data":data}) : helper)))
    + "\">\n                                <p>&#xf0a9;</p>\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"policylist-action-fold\" banana-status=\"unfolded\">\n    <span class=\"bolder\">모든 과제/전략 한눈에 보기</span>\n</div>\n<div class=\"policylist-categories\">\n    \n</div>\n\n<div id=\"policygroup\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,this.lambda(depth0, depth0),{"name":"this","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});