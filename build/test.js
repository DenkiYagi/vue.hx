// Generated by Haxe 3.4.7
(function () { "use strict";
var Test = function() { };
Test.main = function() {
	var vue = new Vue({ render : function(createElement) {
		return createElement(vuehx__$Component_Component_$Impl_$.fromVueHxComponent(page_Sample));
	}});
	vue.$mount("#app");
};
var vuehx_IVueComponent = function() { };
var page_Sample = function() { };
page_Sample.__interfaces__ = [vuehx_IVueComponent];
var vuehx__$Component_Component_$Impl_$ = {};
vuehx__$Component_Component_$Impl_$._new = function(x) {
	var this1 = x;
	return this1;
};
vuehx__$Component_Component_$Impl_$.fromVueHxComponent = function(x) {
	var this1 = x.options;
	return this1;
};
var vuehx__$PropType_PropType_$Impl_$ = {};
vuehx__$PropType_PropType_$Impl_$.get_String = function() {
	return String;
};
vuehx__$PropType_PropType_$Impl_$.get_Number = function() {
	return Number;
};
vuehx__$PropType_PropType_$Impl_$.get_Boolean = function() {
	return Boolean;
};
vuehx__$PropType_PropType_$Impl_$.get_Function = function() {
	return Function;
};
vuehx__$PropType_PropType_$Impl_$.get_Object = function() {
	return Object;
};
vuehx__$PropType_PropType_$Impl_$.get_Array = function() {
	return Array;
};
vuehx__$PropType_PropType_$Impl_$.get_Symbol = function() {
	return Symbol;
};
page_Sample.options = { beforeCreate : function() {
}, render : Function('with(this){return _c(\'div\',[_v(\"sample\")])}'), staticRenderFns : []};
Test.main();
})();