(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['hero_keywords'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"policygroup\" banana-status=\"folded\">\n    <div class=\"policyinfo\">\n        <p class=\"policytitle\"><strong>"
    + container.escapeExpression(((helper = (helper = helpers.policyname || (depth0 != null ? depth0.policyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"policyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n        <div class=\"policykeywords-action-fold\">\n            <p class=\"unfold\">&#xf078;</p>\n            <p class=\"fold\">&#xf077;</p>\n        </div>\n    </div>\n    <div class=\"keywords\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"keyword\"><strong class=\"bolder\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</strong></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['hero_policycategories'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <p class=\"category\"><strong class=\"bolder\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</strong></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p><strong class=\"bolder\">주제별로 보기</strong></p>\n<div class=\"categories\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['hero_policylist'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"policy-container\">\n        <p class=\"policyname\"><strong class=\"bolder\">"
    + container.escapeExpression(((helper = (helper = helpers.policyname || (depth0 != null ? depth0.policyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"policyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.strategies : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"policy-strategycontainer\" banana-status=\"unfolded\">\n            <div class=\"substrategyinfo\">\n                <p class=\"substrategyname\"><strong class=\"bolder\">"
    + container.escapeExpression(((helper = (helper = helpers.strategyname || (depth0 != null ? depth0.strategyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"strategyname","hash":{},"data":data}) : helper)))
    + "</strong></p>\n                <div class=\"substrategy-action-fold\">\n                    <p class=\"unfold\">&#xf078;</p>\n                    <p class=\"fold\">&#xf077;</p>\n                </div>\n            </div>\n            <div class=\"strategy\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.task : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function", buffer = 
  "                <div class=\"task\" banana-taskdata=\""
    + alias3((helpers.toJSON || (depth0 && depth0.toJSON) || alias2).call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"toJSON","hash":{},"data":data}))
    + "\" banana-taskcategory=\""
    + alias3((helpers.toJSON || (depth0 && depth0.toJSON) || alias2).call(alias1,(depth0 != null ? depth0.category : depth0),{"name":"toJSON","hash":{},"data":data}))
    + "\">\n                    <div class=\"taskinfo\">\n                        <p class=\"taskname\"><strong class=\"bolder\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></p>\n                        <div class=\"departmentinfo\">\n";
  stack1 = ((helper = (helper = helpers.department || (depth0 != null ? depth0.department : depth0)) != null ? helper : alias2),(options={"name":"department","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias4 ? helper.call(alias1,options) : helper));
  if (!helpers.department) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </div>\n                    </div>\n\n                    <div class=\"taskstatus\" banana-taskstatus=\""
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"taskstatusbar\"></div>\n                        <p>"
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "%</p>\n                    </div>\n\n                    <ul class=\"descriptions\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                            <p class=\"departmentname\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <li class=\"description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.statuslink : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <p class=\"descriptiontext\" banana-taskdesc=\""
    + alias4(((helper = (helper = helpers.statusdesc || (depth0 != null ? depth0.statusdesc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statusdesc","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n                            <p class=\"descriptionstatus bolder\" banana-taskcode=\""
    + alias4(((helper = (helper = helpers.statuscode || (depth0 != null ? depth0.statuscode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"statuscode","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</p>\n                        </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                            <div class=\"description-action-link\" banana-link=\""
    + container.escapeExpression(((helper = (helper = helpers.statuslink || (depth0 != null ? depth0.statuslink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"statuslink","hash":{},"data":data}) : helper)))
    + "\">\n                                <p>&#xf0a9;</p>\n                            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"policylist-action-fold\" banana-status=\"unfolded\">\n    <span class=\"bolder\">모든 과제/전략 한눈에 보기</span>\n</div>\n<div class=\"policylist-categories\">\n    \n</div>\n\n<div id=\"policygroup\">\n"
    + ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(depth0, depth0),{"name":"this","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();