This repository is about implementing jQuery selectors using compilation selector -> native functions call and caching these functions.


Example 
$("body") selector may be called as $$("body").
In the $$ function it will be compiled into:
function()
{ 
var result=[];
var val1 = document.getElementsByTagName('body');
for(var i1=0; val1.length > i1; i1++ ){
result[result.length]=val1[i1]};
return result;
}
After first compilation function becomes cached and will be called every time for secondary using of the "body" selector.

At current time work only such kind of selectors like:
tagName
.Class
#id  
and their combinations:
some one, another.one children#selector

In this project lexx/bison parser are used.
