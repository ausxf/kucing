

var ab = "1995";
var b = ab.slice(0,1);
var b2 = ab.slice(1,2);
var b3 = ab.slice(2,3);
var b4 = ab.slice(3,4);

var to = +b + +b2;
var too = to.toString();
var tooo = too.slice(0,1);
var toooo = too.slice(1,2);
var t2j = +tooo + +toooo;

var hk = +b3 + +b4;
var hk2 = hk.toString();
var hk3 = hk2.slice(0,1);
var hk4 = hk2.slice(1,2);
var thk5 = +hk3 + +hk4;

var ls = +thk5 + +t2j;
var ls1 = ls.toString();
var ls2 = ls1.slice(0,1);
var ls3 = ls1.slice(1,2);
var total = +ls2 + +ls3;

alert(total);

