var cache = {};

var $$ = function(selector) {
  if (!cache[selector])
	{	   
	   var res = parser.parse(selector);
	   eval("cache[selector] = "+res);
	}
  return cache[selector]();
}
	