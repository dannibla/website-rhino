/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


'use strict';

var requestAnimFrame, cancelAnimFrame, parsePositiveInt;

/**
 * Vivus
 * Beta version
 *
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 *
 * This in more than just inspired from codrops
 * At that point, it's a pure fork.
 */

/**
 * Class constructor
 * option structure
 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
 *   duration: <int> (in frames)
 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
 *   delay: <int> (delay between the drawing of first and last path)
 *   dashGap <integer> whitespace extra margin between dashes
 *   pathTimingFunction <function> timing animation function for each path element of the SVG
 *   animTimingFunction <function> timing animation function for the complete SVG
 *   forceRender <boolean> force the browser to re-render all updated path items
 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
 *
 * The attribute 'type' is by default on 'delayed'.
 *  - 'delayed'
 *    all paths are draw at the same time but with a
 *    little delay between them before start
 *  - 'sync'
 *    all path are start and finish at the same time
 *  - 'oneByOne'
 *    only one path is draw at the time
 *    the end of the first one will trigger the draw
 *    of the next one
 *
 * All these values can be overwritten individually
 * for each path item in the SVG
 * The value of frames will always take the advantage of
 * the duration value.
 * If you fail somewhere, an error will be thrown.
 * Good luck.
 *
 * @constructor
 * @this {Vivus}
 * @param {DOM|String}   element  Dom element of the SVG or id of it
 * @param {Object}       options  Options about the animation
 * @param {Function}     callback Callback for the end of the animation
 */
function Vivus (element, options, callback) {

  // Setup
  this.isReady = false;
  this.setElement(element, options);
  this.setOptions(options);
  this.setCallback(callback);

  if (this.isReady) {
    this.init();
  }
}

/**
 * Timing functions
 **************************************
 *
 * Default functions to help developers.
 * It always take a number as parameter (between 0 to 1) then
 * return a number (between 0 and 1)
 */
Vivus.LINEAR          = function (x) {return x;};
Vivus.EASE            = function (x) {return -Math.cos(x * Math.PI) / 2 + 0.5;};
Vivus.EASE_OUT        = function (x) {return 1 - Math.pow(1-x, 3);};
Vivus.EASE_IN         = function (x) {return Math.pow(x, 3);};
Vivus.EASE_OUT_BOUNCE = function (x) {
  var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
    rate = Math.pow(base,1.5),
    rateR = Math.pow(1 - x, 2),
    progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
  return (1- rateR) + (progress * rateR);
};


/**
 * Setters
 **************************************
 */

/**
 * Check and set the element in the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param {DOM|String}   element  SVG Dom element or id of it
 */
Vivus.prototype.setElement = function (element, options) {
  // Basic check
  if (typeof element === 'undefined') {
    throw new Error('Vivus [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  this.parentEl = element;

  // Create the object element if the property `file` exists in the options object
  if (options && options.file) {
    var objElm = document.createElement('object');
    objElm.setAttribute('type', 'image/svg+xml');
    objElm.setAttribute('data', options.file);
    objElm.setAttribute('built-by-vivus', 'true');
    element.appendChild(objElm);
    element = objElm;
  }

  switch (element.constructor) {
  case window.SVGSVGElement:
  case window.SVGElement:
    this.el = element;
    this.isReady = true;
    break;

  case window.HTMLObjectElement:
    // If we have to wait for it
    var onLoad, self;

    self = this;
    onLoad = function (e) {
      if (self.isReady) {
        return;
      }
      self.el = element.contentDocument && element.contentDocument.querySelector('svg');
      if (!self.el && e) {
        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
      }
      else if (self.el) {
        if (element.getAttribute('built-by-vivus')) {
          self.parentEl.insertBefore(self.el, element);
          self.parentEl.removeChild(element);
          self.el.setAttribute('width', '100%');
          self.el.setAttribute('height', '100%');
        }
        self.isReady = true;
        self.init();
        return true;
      }
    };

    if (!onLoad()) {
      element.addEventListener('load', onLoad);
    }
    break;

  default:
    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
  }
};

/**
 * Set up user option to the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {object} options Object from the constructor
 */
Vivus.prototype.setOptions = function (options) {
  var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
  var allowedStarts =  ['inViewport', 'manual', 'autostart'];

  // Basic check
  if (options !== undefined && options.constructor !== Object) {
    throw new Error('Vivus [constructor]: "options" parameter must be an object');
  }
  else {
    options = options || {};
  }

  // Set the animation type
  if (options.type && allowedTypes.indexOf(options.type) === -1) {
    throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
  }
  else {
    this.type = options.type || allowedTypes[0];
  }

  // Set the start type
  if (options.start && allowedStarts.indexOf(options.start) === -1) {
    throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
  }
  else {
    this.start = options.start || allowedStarts[0];
  }

  this.isIE         = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1 );
  this.duration     = parsePositiveInt(options.duration, 120);
  this.delay        = parsePositiveInt(options.delay, null);
  this.dashGap      = parsePositiveInt(options.dashGap, 1);
  this.forceRender  = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
  this.reverseStack = !!options.reverseStack;
  this.selfDestroy  = !!options.selfDestroy;
  this.onReady      = options.onReady;
  this.map          = [];
  this.frameLength  = this.currentFrame = this.delayUnit = this.speed = this.handle = null;

  this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;

  this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
  this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

  if (this.delay >= this.duration) {
    throw new Error('Vivus [constructor]: delay must be shorter than duration');
  }
};

/**
 * Set up callback to the instance
 * The method will not return enything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {Function} callback Callback for the animation end
 */
Vivus.prototype.setCallback = function (callback) {
  // Basic check
  if (!!callback && callback.constructor !== Function) {
    throw new Error('Vivus [constructor]: "callback" parameter must be a function');
  }
  this.callback = callback || function () {};
};


/**
 * Core
 **************************************
 */

/**
 * Map the svg, path by path.
 * The method return nothing, it just fill the
 * `map` array. Each item in this array represent
 * a path element from the SVG, with informations for
 * the animation.
 *
 * ```
 * [
 *   {
 *     el: <DOMobj> the path element
 *     length: <number> length of the path line
 *     startAt: <number> time start of the path animation (in frames)
 *     duration: <number> path animation duration (in frames)
 *   },
 *   ...
 * ]
 * ```
 *
 */
Vivus.prototype.mapping = function () {
  var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
  timePoint = totalLength = lengthMeter = 0;
  paths = this.el.querySelectorAll('path');

  for (i = 0; i < paths.length; i++) {
    path = paths[i];
    if (this.isInvisible(path)) {
      continue;
    }
    pathObj = {
      el: path,
      length: Math.ceil(path.getTotalLength())
    };
    // Test if the path length is correct
    if (isNaN(pathObj.length)) {
      if (window.console && console.warn) {
        console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
      }
      continue;
    }
    this.map.push(pathObj);
    path.style.strokeDasharray  = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
    path.style.strokeDashoffset = pathObj.length + this.dashGap;
    pathObj.length += this.dashGap;
    totalLength += pathObj.length;

    this.renderPath(i);
  }

  totalLength = totalLength === 0 ? 1 : totalLength;
  this.delay = this.delay === null ? this.duration / 3 : this.delay;
  this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);

  // Reverse stack if asked
  if (this.reverseStack) {
    this.map.reverse();
  }

  for (i = 0; i < this.map.length; i++) {
    pathObj = this.map[i];

    switch (this.type) {
    case 'delayed':
      pathObj.startAt = this.delayUnit * i;
      pathObj.duration = this.duration - this.delay;
      break;

    case 'oneByOne':
      pathObj.startAt = lengthMeter / totalLength * this.duration;
      pathObj.duration = pathObj.length / totalLength * this.duration;
      break;

    case 'sync':
    case 'async':
    case 'nsync':
      pathObj.startAt = 0;
      pathObj.duration = this.duration;
      break;

    case 'scenario-sync':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;

    case 'scenario':
      path = pathObj.el;
      pAttrs = this.parseAttr(path);
      pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
      pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
      this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
      break;
    }
    lengthMeter += pathObj.length;
    this.frameLength = this.frameLength || this.duration;
  }
};

/**
 * Interval method to draw the SVG from current
 * position of the animation. It update the value of
 * `currentFrame` and re-trace the SVG.
 *
 * It use this.handle to store the requestAnimationFrame
 * and clear it one the animation is stopped. So this
 * attribute can be used to know if the animation is
 * playing.
 *
 * Once the animation at the end, this method will
 * trigger the Vivus callback.
 *
 */
Vivus.prototype.drawer = function () {
  var self = this;
  this.currentFrame += this.speed;

  if (this.currentFrame <= 0) {
    this.stop();
    this.reset();
  } else if (this.currentFrame >= this.frameLength) {
    this.stop();
    this.currentFrame = this.frameLength;
    this.trace();
    if (this.selfDestroy) {
      this.destroy();
    }
  } else {
    this.trace();
    this.handle = requestAnimFrame(function () {
      self.drawer();
    });
    return;
  }

  this.callback(this);
  if (this.instanceCallback) {
    this.instanceCallback(this);
    this.instanceCallback = null;
  }
};

/**
 * Draw the SVG at the current instant from the
 * `currentFrame` value. Here is where most of the magic is.
 * The trick is to use the `strokeDashoffset` style property.
 *
 * For optimisation reasons, a new property called `progress`
 * is added in each item of `map`. This one contain the current
 * progress of the path element. Only if the new value is different
 * the new value will be applied to the DOM element. This
 * method save a lot of resources to re-render the SVG. And could
 * be improved if the animation couldn't be played forward.
 *
 */
Vivus.prototype.trace = function () {
  var i, progress, path, currentFrame;
  currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    progress = (currentFrame - path.startAt) / path.duration;
    progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
    if (path.progress !== progress) {
      path.progress = progress;
      path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
      this.renderPath(i);
    }
  }
};

/**
 * Method forcing the browser to re-render a path element
 * from it's index in the map. Depending on the `forceRender`
 * value.
 * The trick is to replace the path element by it's clone.
 * This practice is not recommended because it's asking more
 * ressources, too much DOM manupulation..
 * but it's the only way to let the magic happen on IE.
 * By default, this fallback is only applied on IE.
 *
 * @param  {Number} index Path index
 */
Vivus.prototype.renderPath = function (index) {
  if (this.forceRender && this.map && this.map[index]) {
    var pathObj = this.map[index],
        newPath = pathObj.el.cloneNode(true);
    pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
    pathObj.el = newPath;
  }
};

/**
 * When the SVG object is loaded and ready,
 * this method will continue the initialisation.
 *
 * This this mainly due to the case of passing an
 * object tag in the constructor. It will wait
 * the end of the loading to initialise.
 *
 */
Vivus.prototype.init = function () {
  // Set object variables
  this.frameLength = 0;
  this.currentFrame = 0;
  this.map = [];

  // Start
  new Pathformer(this.el);
  this.mapping();
  this.starter();

  if (this.onReady) {
    this.onReady(this);
  }
};

/**
 * Trigger to start of the animation.
 * Depending on the `start` value, a different script
 * will be applied.
 *
 * If the `start` value is not valid, an error will be thrown.
 * Even if technically, this is impossible.
 *
 */
Vivus.prototype.starter = function () {
  switch (this.start) {
  case 'manual':
    return;

  case 'autostart':
    this.play();
    break;

  case 'inViewport':
    var self = this,
    listener = function () {
      if (self.isInViewport(self.parentEl, 1)) {
        self.play();
        window.removeEventListener('scroll', listener);
      }
    };
    window.addEventListener('scroll', listener);
    listener();
    break;
  }
};


/**
 * Controls
 **************************************
 */

/**
 * Get the current status of the animation between
 * three different states: 'start', 'progress', 'end'.
 * @return {string} Instance status
 */
Vivus.prototype.getStatus = function () {
  return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
};

/**
 * Reset the instance to the initial state : undraw
 * Be careful, it just reset the animation, if you're
 * playing the animation, this won't stop it. But just
 * make it start from start.
 *
 */
Vivus.prototype.reset = function () {
  return this.setFrameProgress(0);
};

/**
 * Set the instance to the final state : drawn
 * Be careful, it just set the animation, if you're
 * playing the animation on rewind, this won't stop it.
 * But just make it start from the end.
 *
 */
Vivus.prototype.finish = function () {
  return this.setFrameProgress(1);
};

/**
 * Set the level of progress of the drawing.
 *
 * @param {number} progress Level of progress to set
 */
Vivus.prototype.setFrameProgress = function (progress) {
  progress = Math.min(1, Math.max(0, progress));
  this.currentFrame = Math.round(this.frameLength * progress);
  this.trace();
  return this;
};

/**
 * Play the animation at the desired speed.
 * Speed must be a valid number (no zero).
 * By default, the speed value is 1.
 * But a negative value is accepted to go forward.
 *
 * And works with float too.
 * But don't forget we are in JavaScript, se be nice
 * with him and give him a 1/2^x value.
 *
 * @param  {number} speed Animation speed [optional]
 */
Vivus.prototype.play = function (speed, callback) {
  this.instanceCallback = null;

  if (speed && typeof speed === 'function') {
    this.instanceCallback = speed; // first parameter is actually the callback function
    speed = null;
  }
  else if (speed && typeof speed !== 'number') {
    throw new Error('Vivus [play]: invalid speed');
  }
  // if the first parameter wasn't the callback, check if the seconds was
  if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
    this.instanceCallback = callback;
  }


  this.speed = speed || 1;
  if (!this.handle) {
    this.drawer();
  }
  return this;
};

/**
 * Stop the current animation, if on progress.
 * Should not trigger any error.
 *
 */
Vivus.prototype.stop = function () {
  if (this.handle) {
    cancelAnimFrame(this.handle);
    this.handle = null;
  }
  return this;
};

/**
 * Destroy the instance.
 * Remove all bad styling attributes on all
 * path tags
 *
 */
Vivus.prototype.destroy = function () {
  this.stop();
  var i, path;
  for (i = 0; i < this.map.length; i++) {
    path = this.map[i];
    path.el.style.strokeDashoffset = null;
    path.el.style.strokeDasharray = null;
    this.renderPath(i);
  }
};


/**
 * Utils methods
 * include methods from Codrops
 **************************************
 */

/**
 * Method to best guess if a path should added into
 * the animation or not.
 *
 * 1. Use the `data-vivus-ignore` attribute if set
 * 2. Check if the instance must ignore invisible paths
 * 3. Check if the path is visible
 *
 * For now the visibility checking is unstable.
 * It will be used for a beta phase.
 *
 * Other improvments are planned. Like detecting
 * is the path got a stroke or a valid opacity.
 */
Vivus.prototype.isInvisible = function (el) {
  var rect,
    ignoreAttr = el.getAttribute('data-ignore');

  if (ignoreAttr !== null) {
    return ignoreAttr !== 'false';
  }

  if (this.ignoreInvisible) {
    rect = el.getBoundingClientRect();
    return !rect.width && !rect.height;
  }
  else {
    return false;
  }
};

/**
 * Parse attributes of a DOM element to
 * get an object of {attributeName => attributeValue}
 *
 * @param  {object} element DOM element to parse
 * @return {object}         Object of attributes
 */
Vivus.prototype.parseAttr = function (element) {
  var attr, output = {};
  if (element && element.attributes) {
    for (var i = 0; i < element.attributes.length; i++) {
      attr = element.attributes[i];
      output[attr.name] = attr.value;
    }
  }
  return output;
};

/**
 * Reply if an element is in the page viewport
 *
 * @param  {object} el Element to observe
 * @param  {number} h  Percentage of height
 * @return {boolean}
 */
Vivus.prototype.isInViewport = function (el, h) {
  var scrolled   = this.scrollY(),
    viewed       = scrolled + this.getViewportH(),
    elBCR        = el.getBoundingClientRect(),
    elHeight     = elBCR.height,
    elTop        = scrolled + elBCR.top,
    elBottom     = elTop + elHeight;

  // if 0, the element is considered in the viewport as soon as it enters.
  // if 1, the element is considered in the viewport only when it's fully inside
  // value in percentage (1 >= h >= 0)
  h = h || 0;

  return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
};

/**
 * Alias for document element
 *
 * @type {DOMelement}
 */
Vivus.prototype.docElem = window.document.documentElement;

/**
 * Get the viewport height in pixels
 *
 * @return {integer} Viewport height
 */
Vivus.prototype.getViewportH = function () {
  var client = this.docElem.clientHeight,
    inner = window.innerHeight;

  if (client < inner) {
    return inner;
  }
  else {
    return client;
  }
};

/**
 * Get the page Y offset
 *
 * @return {integer} Page Y offset
 */
Vivus.prototype.scrollY = function () {
  return window.pageYOffset || this.docElem.scrollTop;
};

/**
 * Alias for `requestAnimationFrame` or
 * `setTimeout` function for deprecated browsers.
 *
 */
requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(/* function */ callback){
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();

/**
 * Alias for `cancelAnimationFrame` or
 * `cancelTimeout` function for deprecated browsers.
 *
 */
cancelAnimFrame = (function () {
  return (
    window.cancelAnimationFrame       ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame    ||
    window.oCancelAnimationFrame      ||
    window.msCancelAnimationFrame     ||
    function(id){
      return window.clearTimeout(id);
    }
  );
})();

/**
 * Parse string to integer.
 * If the number is not positive or null
 * the method will return the default value
 * or 0 if undefined
 *
 * @param {string} value String to parse
 * @param {*} defaultValue Value to return if the result parsed is invalid
 * @return {number}
 *
 */
parsePositiveInt = function (value, defaultValue) {
  var output = parseInt(value, 10);
  return (output >= 0) ? output : defaultValue;
};





$(function() {
    ParallaxScroll.init();
});

var ParallaxScroll = {
    /* PUBLIC VARIABLES */
    showLogs: false,
    round: 1000,

    /* PUBLIC FUNCTIONS */
    init: function() {
        this._log("init");
        if (this._inited) {
            this._log("Already Inited");
            this._inited = true;
            return;
        }
        this._requestAnimationFrame = (function(){
          return  window.requestAnimationFrame       || 
                  window.webkitRequestAnimationFrame || 
                  window.mozRequestAnimationFrame    || 
                  window.oRequestAnimationFrame      || 
                  window.msRequestAnimationFrame     || 
                  function(/* function */ callback, /* DOMElement */ element){
                      window.setTimeout(callback, 1000 / 60);
                  };
        })();
        this._onScroll(true);
    },

    /* PRIVATE VARIABLES */
    _inited: false,
    _properties: ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'],
    _requestAnimationFrame:null,

    /* PRIVATE FUNCTIONS */
    _log: function(message) {
        if (this.showLogs) console.log("Parallax Scroll / " + message);
    },
    _onScroll: function(noSmooth) {
        var scroll = $(document).scrollTop();
        var windowHeight = $(window).height();
        this._log("onScroll " + scroll);
        $("[data-parallax]").each($.proxy(function(index, el) {
            var $el = $(el);
            var properties = [];
            var applyProperties = false;
            var style = $el.data("style");
            if (style == undefined) {
                style = $el.attr("style") || "";
                $el.data("style", style);
            }
            var datas = [$el.data("parallax")];
            var iData;
            for(iData = 2; ; iData++) {
                if($el.data("parallax"+iData)) {
                    datas.push($el.data("parallax-"+iData));
                }
                else {
                    break;
                }
            }
            var datasLength = datas.length;
            for(iData = 0; iData < datasLength; iData ++) {
                var data = datas[iData];
                var scrollFrom = data["from-scroll"];
                if (scrollFrom == undefined) scrollFrom = Math.max(0, $(el).offset().top - windowHeight);
                scrollFrom = scrollFrom | 0;
                var scrollDistance = data["distance"];
                var scrollTo = data["to-scroll"];
                if (scrollDistance == undefined && scrollTo == undefined) scrollDistance = windowHeight;
                scrollDistance = Math.max(scrollDistance | 0, 1);
                var easing = data["easing"];
                var easingReturn = data["easing-return"];
                if (easing == undefined || !$.easing|| !$.easing[easing]) easing = null;
                if (easingReturn == undefined || !$.easing|| !$.easing[easingReturn]) easingReturn = easing;
                if (easing) {
                    var totalTime = data["duration"];
                    if (totalTime == undefined) totalTime = scrollDistance;
                    totalTime = Math.max(totalTime | 0, 1);
                    var totalTimeReturn = data["duration-return"];
                    if (totalTimeReturn == undefined) totalTimeReturn = totalTime;
                    scrollDistance = 1;
                    var currentTime = $el.data("current-time");
                    if(currentTime == undefined) currentTime = 0;
                }
                if (scrollTo == undefined) scrollTo = scrollFrom + scrollDistance;
                scrollTo = scrollTo | 0;
                var smoothness = data["smoothness"];
                if (smoothness == undefined) smoothness = 30;
                smoothness = smoothness | 0;
                if (noSmooth || smoothness == 0) smoothness = 1;
                smoothness = smoothness | 0;
                var scrollCurrent = scroll;
                scrollCurrent = Math.max(scrollCurrent, scrollFrom);
                scrollCurrent = Math.min(scrollCurrent, scrollTo);
                if(easing) {
                    if($el.data("sens") == undefined) $el.data("sens", "back");
                    if(scrollCurrent>scrollFrom) {
                        if($el.data("sens") == "back") {
                            currentTime = 1;
                            $el.data("sens", "go");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(scrollCurrent<scrollTo) {
                        if($el.data("sens") == "go") {
                            currentTime = 1;
                            $el.data("sens", "back");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(noSmooth) currentTime = totalTime;
                    $el.data("current-time", currentTime);
                }
                this._properties.map($.proxy(function(prop) {
                    var defaultProp = 0;
                    var to = data[prop];
                    if (to == undefined) return;
                    if(prop=="scale" || prop=="scaleX" || prop=="scaleY" || prop=="scaleZ" ) {
                        defaultProp = 1;
                    }
                    else {
                        to = to | 0;
                    }
                    var prev = $el.data("_" + prop);
                    if (prev == undefined) prev = defaultProp;
                    var next = ((to-defaultProp) * ((scrollCurrent - scrollFrom) / (scrollTo - scrollFrom))) + defaultProp;
                    var val = prev + (next - prev) / smoothness;
                    if(easing && currentTime>0 && currentTime<=totalTime) {
                        var from = defaultProp;
                        if($el.data("sens") == "back") {
                            from = to;
                            to = -to;
                            easing = easingReturn;
                            totalTime = totalTimeReturn;
                        }
                        val = $.easing[easing](null, currentTime, from, to, totalTime);
                    }
                    val = Math.ceil(val * this.round) / this.round;
                    if(val==prev&&next==to) val = to;
                    if(!properties[prop]) properties[prop] = 0;
                    properties[prop] += val;
                    if (prev != properties[prop]) {
                        $el.data("_" + prop, properties[prop]);
                        applyProperties = true;
                    }
                }, this));
            }
            if (applyProperties) {
                if (properties["z"] != undefined) {
                    var perspective = data["perspective"];
                    if (perspective == undefined) perspective = 800;
                    var $parent = $el.parent();
                    if(!$parent.data("style")) $parent.data("style", $parent.attr("style") || "");
                    $parent.attr("style", "perspective:" + perspective + "px; -webkit-perspective:" + perspective + "px; "+ $parent.data("style"));
                }
                if(properties["scaleX"] == undefined) properties["scaleX"] = 1;
                if(properties["scaleY"] == undefined) properties["scaleY"] = 1;
                if(properties["scaleZ"] == undefined) properties["scaleZ"] = 1;
                if (properties["scale"] != undefined) {
                    properties["scaleX"] *= properties["scale"];
                    properties["scaleY"] *= properties["scale"];
                    properties["scaleZ"] *= properties["scale"];
                }
                var translate3d = "translate3d(" + (properties["x"] ? properties["x"] : 0) + "px, " + (properties["y"] ? properties["y"] : 0) + "px, " + (properties["z"] ? properties["z"] : 0) + "px)";
                var rotate3d = "rotateX(" + (properties["rotateX"] ? properties["rotateX"] : 0) + "deg) rotateY(" + (properties["rotateY"] ? properties["rotateY"] : 0) + "deg) rotateZ(" + (properties["rotateZ"] ? properties["rotateZ"] : 0) + "deg)";
                var scale3d = "scaleX(" + properties["scaleX"] + ") scaleY(" + properties["scaleY"] + ") scaleZ(" + properties["scaleZ"] + ")";
                var cssTransform = translate3d + " " + rotate3d + " " + scale3d + ";";
                this._log(cssTransform);
                $el.attr("style", "transform:" + cssTransform + " -webkit-transform:" + cssTransform + " " + style);
            }
        }, this));
        if(window.requestAnimationFrame) {
            window.requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
        else {
            this._requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
    }
};











'use strict';

/**
 * Pathformer
 * Beta version
 *
 * Take any SVG version 1.1 and transform
 * child elements to 'path' elements
 *
 * This code is purely forked from
 * https://github.com/Waest/SVGPathConverter
 */

/**
 * Class constructor
 *
 * @param {DOM|String} element Dom element of the SVG or id of it
 */
function Pathformer(element) {
  // Test params
  if (typeof element === 'undefined') {
    throw new Error('Pathformer [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
    this.el = element;
  } else {
    throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
  }

  // Start
  this.scan(element);
}

/**
 * List of tags which can be transformed
 * to path elements
 *
 * @type {Array}
 */
Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];

/**
 * List of attribute names which contain
 * data. This array list them to check if
 * they contain bad values, like percentage.
 *
 * @type {Array}
 */
Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];

/**
 * Finds the elements compatible for transform
 * and apply the liked method
 *
 * @param  {object} options Object from the constructor
 */
Pathformer.prototype.scan = function (svg) {
  var fn, element, pathData, pathDom,
      elements = svg.querySelectorAll(this.TYPES.join(','));

  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    fn = this[element.tagName.toLowerCase() + 'ToPath'];
    pathData = fn(this.parseAttr(element.attributes));
    pathDom = this.pathMaker(element, pathData);
    element.parentNode.replaceChild(pathDom, element);
  }
};


/**
 * Read `line` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Line element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.lineToPath = function (element) {
  var newElement = {},
      x1 = element.x1 || 0,
      y1 = element.y1 || 0,
      x2 = element.x2 || 0,
      y2 = element.y2 || 0;

  newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
  return newElement;
};

/**
 * Read `rect` element to extract and transform
 * data, to make it ready for a `path` object.
 * The radius-border is not taken in charge yet.
 * (your help is more than welcomed)
 *
 * @param  {DOMelement} element Rect element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.rectToPath = function (element) {
  var newElement = {},
      x      = parseFloat(element.x)      || 0,
      y      = parseFloat(element.y)      || 0,
      width  = parseFloat(element.width)  || 0,
      height = parseFloat(element.height) || 0;

  newElement.d  = 'M' + x + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + y + ' ';
  newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
  newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
  return newElement;
};

/**
 * Read `polyline` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Polyline element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polylineToPath = function (element) {
  var newElement = {},
      points = element.points.trim().split(' '),
      i, path;

  // Reformatting if points are defined without commas
  if (element.points.indexOf(',') === -1) {
    var formattedPoints = [];
    for (i = 0; i < points.length; i+=2) {
      formattedPoints.push(points[i] + ',' + points[i+1]);
    }
    points = formattedPoints;
  }

  // Generate the path.d value
  path = 'M' + points[0];
  for(i = 1; i < points.length; i++) {
    if (points[i].indexOf(',') !== -1) {
      path += 'L' + points[i];
    }
  }
  newElement.d = path;
  return newElement;
};

/**
 * Read `polygon` element to extract and transform
 * data, to make it ready for a `path` object.
 * This method rely on polylineToPath, because the
 * logic is similar. The path created is just closed,
 * so it needs an 'Z' at the end.
 *
 * @param  {DOMelement} element Polygon element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.polygonToPath = function (element) {
  var newElement = Pathformer.prototype.polylineToPath(element);

  newElement.d += 'Z';
  return newElement;
};

/**
 * Read `ellipse` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element ellipse element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.ellipseToPath = function (element) {
  var newElement = {},
      rx = parseFloat(element.rx) || 0,
      ry = parseFloat(element.ry) || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - rx,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(rx),
      endY = cy;

  newElement.d = 'M' + startX + ',' + startY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY +
                 'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Read `circle` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Circle element to transform
 * @return {object}             Data for a `path` element
 */
Pathformer.prototype.circleToPath = function (element) {
  var newElement = {},
      r  = parseFloat(element.r)  || 0,
      cx = parseFloat(element.cx) || 0,
      cy = parseFloat(element.cy) || 0,
      startX = cx - r,
      startY = cy,
      endX = parseFloat(cx) + parseFloat(r),
      endY = cy;
      
  newElement.d =  'M' + startX + ',' + startY +
                  'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY +
                  'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
  return newElement;
};

/**
 * Create `path` elements form original element
 * and prepared objects
 *
 * @param  {DOMelement} element  Original element to transform
 * @param  {object} pathData     Path data (from `toPath` methods)
 * @return {DOMelement}          Path element
 */
Pathformer.prototype.pathMaker = function (element, pathData) {
  var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg','path');
  for(i = 0; i < element.attributes.length; i++) {
    attr = element.attributes[i];
    if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
      pathTag.setAttribute(attr.name, attr.value);
    }
  }
  for(i in pathData) {
    pathTag.setAttribute(i, pathData[i]);
  }
  return pathTag;
};

/**
 * Parse attributes of a DOM element to
 * get an object of attribute => value
 *
 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
 * @return {object}                  Object of attributes
 */
Pathformer.prototype.parseAttr = function (element) {
  var attr, output = {};
  for (var i = 0; i < element.length; i++) {
    attr = element[i];
    // Check if no data attribute contains '%', or the transformation is impossible
    if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
      throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
    }
    output[attr.name] = attr.value;
  }
  return output;
};








!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return M={width:n,height:n}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=c(t).replace(o," ");g(t,i)}}function p(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&u(t,o)&&d(t,o)}),e.forEach(function(e){u(t,e)||p(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function C(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=n(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:p,removeClass:d,hasClass:u,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),j=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,p=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=F[e.left]),"auto"===i&&(i=H[e.top]),{left:o,top:i}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),i=o[0],n=o[1];return{top:i,left:n}},q=R,I=function(t){function e(t){var o=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(i,t);var n=this.options,s=n.element,a=n.target,f=n.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),p(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&p(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;n&&(r=15);var s=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;s<408&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return a(t.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=C(V(this.attachment),{width:n,height:r}),u=C(V(o),d),c=C(this.offset,{width:n,height:r}),g=C(this.targetOffset,d);p=w(p,c),u=w(u,g);for(var m=h.left+u.left-p.left,v=h.top+u.top-p.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-n.width+r.right,o.bottom=A.body.scrollHeight-o.top-n.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[i]&&!y(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==i&&k(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var n in l){var v=l[n],b=this.element.style[n];b!==v&&(m=!0,g[n]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,u=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},n),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);"target"!==d&&"both"!==d||(o<b[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=p,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-p)>=b[1]&&(o-=s-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=p,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-p)<=b[3]&&(o+=s-p,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),"target"!==h&&"both"!==h||(i<b[0]&&"left"===v.left&&(i+=u,v.left="right"),i+f>b[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===h&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=u,v.left="right",i+=f,y.left="left"):"left"===y.left&&(i+=u,v.left="right",i-=f,y.left="right"):i+f>b[2]&&"right"===v.left?"left"===y.left?(i-=u,v.left="left",i-=f,y.left="right"):"right"===y.left&&(i-=u,v.left="left",i+=f,y.left="left"):"center"===v.left&&(i+f>b[2]&&"left"===y.left?(i-=f,y.left="right"):i<b[0]&&"right"===y.left&&(i+=f,y.left="left"))),"element"!==d&&"both"!==d||(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),"element"!==h&&"both"!==h||(i<b[0]&&("right"===y.left?(i+=f,y.left="left"):"center"===y.left&&(i+=f/2,y.left="left")),i+f>b[2]&&("left"===y.left?(i-=f,y.left="right"):"center"===y.left&&(i-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),i<b[0]&&(l.indexOf("left")>=0?(i=b[0],w.push("left")):C.push("left")),i+f>b[2]&&(l.indexOf("right")>=0?(i=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===n.top&&v.left===n.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:i}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return a(e.element)}),r=n.height,s=n.width,f=this.getTargetBounds(),l=o+r,h=i+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],u=[],c=["left","top","right","bottom"];return p.push(this.getClass("abutted")),c.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&u.push(this.getClass("abutted")),d.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,u,p),m(e.element,u,p)}),!0}});var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=z(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),$});

/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");+function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),+function(){function t(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(t){return(t[0]||t).nodeType}function i(){return{bindType:a.end,delegateType:a.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}}function o(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in h)if(void 0!==t.style[e])return{end:h[e]};return!1}function r(e){var n=this,i=!1;return t(this).one(c.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||c.triggerTransitionEnd(n)},e),this}function s(){a=o(),t.fn.emulateTransitionEnd=r,c.supportsTransitionEnd()&&(t.event.special[c.TRANSITION_END]=i())}var a=!1,l=1e6,h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do t+=~~(Math.random()*l);while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href")||"",e=/^#[a-z]/i.test(e)?e:null),e},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(a.end)},supportsTransitionEnd:function(){return Boolean(a)},typeCheckConfig:function(t,i,o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r],a=i[r],l=a&&n(a)?"element":e(a);if(!new RegExp(s).test(l))throw new Error(t.toUpperCase()+": "+('Option "'+r+'" provided type "'+l+'" ')+('but expected type "'+s+'".'))}}};return s(),c}(jQuery),s=(function(t){var e="alert",i="4.0.0-alpha.6",s="bs.alert",a="."+s,l=".data-api",h=t.fn[e],c=150,u={DISMISS:'[data-dismiss="alert"]'},d={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+l},f={ALERT:"alert",FADE:"fade",SHOW:"show"},_=function(){function e(t){n(this,e),this._element=t}return e.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t),n=this._triggerCloseEvent(e);n.isDefaultPrevented()||this._removeElement(e)},e.prototype.dispose=function(){t.removeData(this._element,s),this._element=null},e.prototype._getRootElement=function(e){var n=r.getSelectorFromElement(e),i=!1;return n&&(i=t(n)[0]),i||(i=t(e).closest("."+f.ALERT)[0]),i},e.prototype._triggerCloseEvent=function(e){var n=t.Event(d.CLOSE);return t(e).trigger(n),n},e.prototype._removeElement=function(e){var n=this;return t(e).removeClass(f.SHOW),r.supportsTransitionEnd()&&t(e).hasClass(f.FADE)?void t(e).one(r.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(c):void this._destroyElement(e)},e.prototype._destroyElement=function(e){t(e).detach().trigger(d.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data(s);o||(o=new e(this),i.data(s,o)),"close"===n&&o[n](this)})},e._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(d.CLICK_DATA_API,u.DISMISS,_._handleDismiss(new _)),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=h,_._jQueryInterface},_}(jQuery),function(t){var e="button",i="4.0.0-alpha.6",r="bs.button",s="."+r,a=".data-api",l=t.fn[e],h={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},c={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},u={CLICK_DATA_API:"click"+s+a,FOCUS_BLUR_DATA_API:"focus"+s+a+" "+("blur"+s+a)},d=function(){function e(t){n(this,e),this._element=t}return e.prototype.toggle=function(){var e=!0,n=t(this._element).closest(c.DATA_TOGGLE)[0];if(n){var i=t(this._element).find(c.INPUT)[0];if(i){if("radio"===i.type)if(i.checked&&t(this._element).hasClass(h.ACTIVE))e=!1;else{var o=t(n).find(c.ACTIVE)[0];o&&t(o).removeClass(h.ACTIVE)}e&&(i.checked=!t(this._element).hasClass(h.ACTIVE),t(i).trigger("change")),i.focus()}}this._element.setAttribute("aria-pressed",!t(this._element).hasClass(h.ACTIVE)),e&&t(this._element).toggleClass(h.ACTIVE)},e.prototype.dispose=function(){t.removeData(this._element,r),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(r);i||(i=new e(this),t(this).data(r,i)),"toggle"===n&&i[n]()})},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(u.CLICK_DATA_API,c.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var n=e.target;t(n).hasClass(h.BUTTON)||(n=t(n).closest(c.BUTTON)),d._jQueryInterface.call(t(n),"toggle")}).on(u.FOCUS_BLUR_DATA_API,c.DATA_TOGGLE_CARROT,function(e){var n=t(e.target).closest(c.BUTTON)[0];t(n).toggleClass(h.FOCUS,/^focus(in)?$/.test(e.type))}),t.fn[e]=d._jQueryInterface,t.fn[e].Constructor=d,t.fn[e].noConflict=function(){return t.fn[e]=l,d._jQueryInterface},d}(jQuery),function(t){var e="carousel",s="4.0.0-alpha.6",a="bs.carousel",l="."+a,h=".data-api",c=t.fn[e],u=600,d=37,f=39,_={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},g={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},p={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},m={SLIDE:"slide"+l,SLID:"slid"+l,KEYDOWN:"keydown"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l,LOAD_DATA_API:"load"+l+h,CLICK_DATA_API:"click"+l+h},E={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},v={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},T=function(){function h(e,i){n(this,h),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(i),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(v.INDICATORS)[0],this._addEventListeners()}return h.prototype.next=function(){if(this._isSliding)throw new Error("Carousel is sliding");this._slide(p.NEXT)},h.prototype.nextWhenVisible=function(){document.hidden||this.next()},h.prototype.prev=function(){if(this._isSliding)throw new Error("Carousel is sliding");this._slide(p.PREVIOUS)},h.prototype.pause=function(e){e||(this._isPaused=!0),t(this._element).find(v.NEXT_PREV)[0]&&r.supportsTransitionEnd()&&(r.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},h.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},h.prototype.to=function(e){var n=this;this._activeElement=t(this._element).find(v.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0)){if(this._isSliding)return void t(this._element).one(m.SLID,function(){return n.to(e)});if(i===e)return this.pause(),void this.cycle();var o=e>i?p.NEXT:p.PREVIOUS;this._slide(o,this._items[e])}},h.prototype.dispose=function(){t(this._element).off(l),t.removeData(this._element,a),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},h.prototype._getConfig=function(n){return n=t.extend({},_,n),r.typeCheckConfig(e,n,g),n},h.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(m.KEYDOWN,function(t){return e._keydown(t)}),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||t(this._element).on(m.MOUSEENTER,function(t){return e.pause(t)}).on(m.MOUSELEAVE,function(t){return e.cycle(t)})},h.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case d:t.preventDefault(),this.prev();break;case f:t.preventDefault(),this.next();break;default:return}},h.prototype._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(v.ITEM)),this._items.indexOf(e)},h.prototype._getItemByDirection=function(t,e){var n=t===p.NEXT,i=t===p.PREVIOUS,o=this._getItemIndex(e),r=this._items.length-1,s=i&&0===o||n&&o===r;if(s&&!this._config.wrap)return e;var a=t===p.PREVIOUS?-1:1,l=(o+a)%this._items.length;return l===-1?this._items[this._items.length-1]:this._items[l]},h.prototype._triggerSlideEvent=function(e,n){var i=t.Event(m.SLIDE,{relatedTarget:e,direction:n});return t(this._element).trigger(i),i},h.prototype._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(E.ACTIVE)}},h.prototype._slide=function(e,n){var i=this,o=t(this._element).find(v.ACTIVE_ITEM)[0],s=n||o&&this._getItemByDirection(e,o),a=Boolean(this._interval),l=void 0,h=void 0,c=void 0;if(e===p.NEXT?(l=E.LEFT,h=E.NEXT,c=p.LEFT):(l=E.RIGHT,h=E.PREV,c=p.RIGHT),s&&t(s).hasClass(E.ACTIVE))return void(this._isSliding=!1);var d=this._triggerSlideEvent(s,c);if(!d.isDefaultPrevented()&&o&&s){this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s);var f=t.Event(m.SLID,{relatedTarget:s,direction:c});r.supportsTransitionEnd()&&t(this._element).hasClass(E.SLIDE)?(t(s).addClass(h),r.reflow(s),t(o).addClass(l),t(s).addClass(l),t(o).one(r.TRANSITION_END,function(){t(s).removeClass(l+" "+h).addClass(E.ACTIVE),t(o).removeClass(E.ACTIVE+" "+h+" "+l),i._isSliding=!1,setTimeout(function(){return t(i._element).trigger(f)},0)}).emulateTransitionEnd(u)):(t(o).removeClass(E.ACTIVE),t(s).addClass(E.ACTIVE),this._isSliding=!1,t(this._element).trigger(f)),a&&this.cycle()}},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o=t.extend({},_,t(this).data());"object"===("undefined"==typeof e?"undefined":i(e))&&t.extend(o,e);var r="string"==typeof e?e:o.slide;if(n||(n=new h(this,o),t(this).data(a,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if(void 0===n[r])throw new Error('No method named "'+r+'"');n[r]()}else o.interval&&(n.pause(),n.cycle())})},h._dataApiClickHandler=function(e){var n=r.getSelectorFromElement(this);if(n){var i=t(n)[0];if(i&&t(i).hasClass(E.CAROUSEL)){var o=t.extend({},t(i).data(),t(this).data()),s=this.getAttribute("data-slide-to");s&&(o.interval=!1),h._jQueryInterface.call(t(i),o),s&&t(i).data(a).to(s),e.preventDefault()}}},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return _}}]),h}();return t(document).on(m.CLICK_DATA_API,v.DATA_SLIDE,T._dataApiClickHandler),t(window).on(m.LOAD_DATA_API,function(){t(v.DATA_RIDE).each(function(){var e=t(this);T._jQueryInterface.call(e,e.data())})}),t.fn[e]=T._jQueryInterface,t.fn[e].Constructor=T,t.fn[e].noConflict=function(){return t.fn[e]=c,T._jQueryInterface},T}(jQuery),function(t){var e="collapse",s="4.0.0-alpha.6",a="bs.collapse",l="."+a,h=".data-api",c=t.fn[e],u=600,d={toggle:!0,parent:""},f={toggle:"boolean",parent:"string"},_={SHOW:"show"+l,SHOWN:"shown"+l,HIDE:"hide"+l,HIDDEN:"hidden"+l,CLICK_DATA_API:"click"+l+h},g={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},m={ACTIVES:".card > .show, .card > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},E=function(){function l(e,i){n(this,l),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(i),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],'+('[data-toggle="collapse"][data-target="#'+e.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return l.prototype.toggle=function(){t(this._element).hasClass(g.SHOW)?this.hide():this.show()},l.prototype.show=function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(!t(this._element).hasClass(g.SHOW)){var n=void 0,i=void 0;if(this._parent&&(n=t.makeArray(t(this._parent).find(m.ACTIVES)),n.length||(n=null)),!(n&&(i=t(n).data(a),i&&i._isTransitioning))){var o=t.Event(_.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(l._jQueryInterface.call(t(n),"hide"),i||t(n).data(a,null));var s=this._getDimension();t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING),this._element.style[s]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var h=function(){t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW),e._element.style[s]="",e.setTransitioning(!1),t(e._element).trigger(_.SHOWN)};if(!r.supportsTransitionEnd())return void h();var c=s[0].toUpperCase()+s.slice(1),d="scroll"+c;t(this._element).one(r.TRANSITION_END,h).emulateTransitionEnd(u),this._element.style[s]=this._element[d]+"px"}}}},l.prototype.hide=function(){var e=this;if(this._isTransitioning)throw new Error("Collapse is transitioning");if(t(this._element).hasClass(g.SHOW)){var n=t.Event(_.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension(),o=i===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[i]=this._element[o]+"px",r.reflow(this._element),t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var s=function(){e.setTransitioning(!1),t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN)};return this._element.style[i]="",r.supportsTransitionEnd()?void t(this._element).one(r.TRANSITION_END,s).emulateTransitionEnd(u):void s()}}},l.prototype.setTransitioning=function(t){this._isTransitioning=t},l.prototype.dispose=function(){t.removeData(this._element,a),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},l.prototype._getConfig=function(n){return n=t.extend({},d,n),n.toggle=Boolean(n.toggle),r.typeCheckConfig(e,n,f),n},l.prototype._getDimension=function(){var e=t(this._element).hasClass(p.WIDTH);return e?p.WIDTH:p.HEIGHT},l.prototype._getParent=function(){var e=this,n=t(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(l._getTargetFromElement(n),[n])}),n},l.prototype._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(g.SHOW);e.setAttribute("aria-expanded",i),n.length&&t(n).toggleClass(g.COLLAPSED,!i).attr("aria-expanded",i)}},l._getTargetFromElement=function(e){var n=r.getSelectorFromElement(e);return n?t(n)[0]:null},l._jQueryInterface=function(e){return this.each(function(){var n=t(this),o=n.data(a),r=t.extend({},d,n.data(),"object"===("undefined"==typeof e?"undefined":i(e))&&e);if(!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new l(this,r),n.data(a,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e]()}})},o(l,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return d}}]),l}();return t(document).on(_.CLICK_DATA_API,m.DATA_TOGGLE,function(e){e.preventDefault();var n=E._getTargetFromElement(this),i=t(n).data(a),o=i?"toggle":t(this).data();E._jQueryInterface.call(t(n),o)}),t.fn[e]=E._jQueryInterface,t.fn[e].Constructor=E,t.fn[e].noConflict=function(){return t.fn[e]=c,E._jQueryInterface},E}(jQuery),function(t){var e="dropdown",i="4.0.0-alpha.6",s="bs.dropdown",a="."+s,l=".data-api",h=t.fn[e],c=27,u=38,d=40,f=3,_={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+l,FOCUSIN_DATA_API:"focusin"+a+l,KEYDOWN_DATA_API:"keydown"+a+l},g={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",SHOW:"show"},p={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},m=function(){function e(t){n(this,e),this._element=t,this._addEventListeners()}return e.prototype.toggle=function(){if(this.disabled||t(this).hasClass(g.DISABLED))return!1;var n=e._getParentFromElement(this),i=t(n).hasClass(g.SHOW);if(e._clearMenus(),i)return!1;if("ontouchstart"in document.documentElement&&!t(n).closest(p.NAVBAR_NAV).length){var o=document.createElement("div");o.className=g.BACKDROP,t(o).insertBefore(this),t(o).on("click",e._clearMenus)}var r={relatedTarget:this},s=t.Event(_.SHOW,r);return t(n).trigger(s),!s.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded",!0),t(n).toggleClass(g.SHOW),t(n).trigger(t.Event(_.SHOWN,r)),!1)},e.prototype.dispose=function(){t.removeData(this._element,s),t(this._element).off(a),this._element=null},e.prototype._addEventListeners=function(){t(this._element).on(_.CLICK,this.toggle)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(s);if(i||(i=new e(this),t(this).data(s,i)),"string"==typeof n){if(void 0===i[n])throw new Error('No method named "'+n+'"');i[n].call(this)}})},e._clearMenus=function(n){if(!n||n.which!==f){var i=t(p.BACKDROP)[0];i&&i.parentNode.removeChild(i);for(var o=t.makeArray(t(p.DATA_TOGGLE)),r=0;r<o.length;r++){var s=e._getParentFromElement(o[r]),a={relatedTarget:o[r]};if(t(s).hasClass(g.SHOW)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"focusin"===n.type)&&t.contains(s,n.target))){var l=t.Event(_.HIDE,a);t(s).trigger(l),l.isDefaultPrevented()||(o[r].setAttribute("aria-expanded","false"),t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN,a)))}}}},e._getParentFromElement=function(e){var n=void 0,i=r.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},e._dataApiKeydownHandler=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(g.DISABLED))){var i=e._getParentFromElement(this),o=t(i).hasClass(g.SHOW);if(!o&&n.which!==c||o&&n.which===c){if(n.which===c){var r=t(i).find(p.DATA_TOGGLE)[0];t(r).trigger("focus")}return void t(this).trigger("click")}var s=t(i).find(p.VISIBLE_ITEMS).get();if(s.length){var a=s.indexOf(n.target);n.which===u&&a>0&&a--,n.which===d&&a<s.length-1&&a++,a<0&&(a=0),s[a].focus()}}},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(_.KEYDOWN_DATA_API,p.DATA_TOGGLE,m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API,p.ROLE_MENU,m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API,p.ROLE_LISTBOX,m._dataApiKeydownHandler).on(_.CLICK_DATA_API+" "+_.FOCUSIN_DATA_API,m._clearMenus).on(_.CLICK_DATA_API,p.DATA_TOGGLE,m.prototype.toggle).on(_.CLICK_DATA_API,p.FORM_CHILD,function(t){t.stopPropagation()}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=h,m._jQueryInterface},m}(jQuery),function(t){var e="modal",s="4.0.0-alpha.6",a="bs.modal",l="."+a,h=".data-api",c=t.fn[e],u=300,d=150,f=27,_={backdrop:!0,keyboard:!0,focus:!0,show:!0},g={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,FOCUSIN:"focusin"+l,RESIZE:"resize"+l,CLICK_DISMISS:"click.dismiss"+l,KEYDOWN_DISMISS:"keydown.dismiss"+l,MOUSEUP_DISMISS:"mouseup.dismiss"+l,MOUSEDOWN_DISMISS:"mousedown.dismiss"+l,CLICK_DATA_API:"click"+l+h},m={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},E={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"},v=function(){function h(e,i){n(this,h),this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(E.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return h.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},h.prototype.show=function(e){var n=this;if(this._isTransitioning)throw new Error("Modal is transitioning");r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE)&&(this._isTransitioning=!0);var i=t.Event(p.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),t(document.body).addClass(m.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(p.CLICK_DISMISS,E.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){t(n._element).one(p.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))},h.prototype.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isTransitioning)throw new Error("Modal is transitioning");var i=r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE);i&&(this._isTransitioning=!0);var o=t.Event(p.HIDE);t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),t(document).off(p.FOCUSIN),t(this._element).removeClass(m.SHOW),t(this._element).off(p.CLICK_DISMISS),t(this._dialog).off(p.MOUSEDOWN_DISMISS),i?t(this._element).one(r.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(u):this._hideModal())},h.prototype.dispose=function(){t.removeData(this._element,a),t(window,document,this._element,this._backdrop).off(l),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null},h.prototype._getConfig=function(n){return n=t.extend({},_,n),r.typeCheckConfig(e,n,g),n},h.prototype._showElement=function(e){var n=this,i=r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&r.reflow(this._element),t(this._element).addClass(m.SHOW),this._config.focus&&this._enforceFocus();var o=t.Event(p.SHOWN,{relatedTarget:e}),s=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(o)};i?t(this._dialog).one(r.TRANSITION_END,s).emulateTransitionEnd(u):s()},h.prototype._enforceFocus=function(){var e=this;t(document).off(p.FOCUSIN).on(p.FOCUSIN,function(n){document===n.target||e._element===n.target||t(e._element).has(n.target).length||e._element.focus()})},h.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(p.KEYDOWN_DISMISS,function(t){t.which===f&&e.hide()}):this._isShown||t(this._element).off(p.KEYDOWN_DISMISS)},h.prototype._setResizeEvent=function(){var e=this;this._isShown?t(window).on(p.RESIZE,function(t){return e._handleUpdate(t)}):t(window).off(p.RESIZE)},h.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(m.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(p.HIDDEN)})},h.prototype._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},h.prototype._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(m.FADE)?m.FADE:"";if(this._isShown&&this._config.backdrop){var o=r.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=m.BACKDROP,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(p.CLICK_DISMISS,function(t){return n._ignoreBackdropClick?void(n._ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide()))}),o&&r.reflow(this._backdrop),t(this._backdrop).addClass(m.SHOW),!e)return;if(!o)return void e();t(this._backdrop).one(r.TRANSITION_END,e).emulateTransitionEnd(d)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(m.SHOW);var s=function(){n._removeBackdrop(),e&&e()};r.supportsTransitionEnd()&&t(this._element).hasClass(m.FADE)?t(this._backdrop).one(r.TRANSITION_END,s).emulateTransitionEnd(d):s()}else e&&e()},h.prototype._handleUpdate=function(){this._adjustDialog()},h.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},h.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},h.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},h.prototype._setScrollbar=function(){var e=parseInt(t(E.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=e+this._scrollbarWidth+"px")},h.prototype._resetScrollbar=function(){document.body.style.paddingRight=this._originalBodyPadding},h.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=m.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},h._jQueryInterface=function(e,n){return this.each(function(){var o=t(this).data(a),r=t.extend({},h.Default,t(this).data(),"object"===("undefined"==typeof e?"undefined":i(e))&&e);if(o||(o=new h(this,r),t(this).data(a,o)),"string"==typeof e){if(void 0===o[e])throw new Error('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return _}}]),h}();return t(document).on(p.CLICK_DATA_API,E.DATA_TOGGLE,function(e){var n=this,i=void 0,o=r.getSelectorFromElement(this);o&&(i=t(o)[0]);var s=t(i).data(a)?"toggle":t.extend({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(p.SHOW,function(e){e.isDefaultPrevented()||l.one(p.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});v._jQueryInterface.call(t(i),s,this)}),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=c,v._jQueryInterface},v}(jQuery),function(t){var e="scrollspy",s="4.0.0-alpha.6",a="bs.scrollspy",l="."+a,h=".data-api",c=t.fn[e],u={offset:10,method:"auto",target:""},d={offset:"number",method:"string",target:"(string|element)"},f={ACTIVATE:"activate"+l,SCROLL:"scroll"+l,LOAD_DATA_API:"load"+l+h},_={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},g={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},m=function(){function h(e,i){var o=this;n(this,h),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(i),this._selector=this._config.target+" "+g.NAV_LINKS+","+(this._config.target+" "+g.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(f.SCROLL,function(t){return o._process(t)}),this.refresh(),this._process()}return h.prototype.refresh=function(){var e=this,n=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,i="auto"===this._config.method?n:this._config.method,o=i===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var s=t.makeArray(t(this._selector));s.map(function(e){var n=void 0,s=r.getSelectorFromElement(e);return s&&(n=t(s)[0]),n&&(n.offsetWidth||n.offsetHeight)?[t(n)[i]().top+o,s]:null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},h.prototype.dispose=function(){t.removeData(this._element,a),t(this._scrollElement).off(l),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h.prototype._getConfig=function(n){if(n=t.extend({},u,n),"string"!=typeof n.target){var i=t(n.target).attr("id");i||(i=r.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return r.typeCheckConfig(e,n,d),n},h.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},h.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.offsetHeight},h.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];return void(this._activeTarget!==i&&this._activate(i))}if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){var r=this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1]);r&&this._activate(this._targets[o])}},h.prototype._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+(t+'[href="'+e+'"]')});var i=t(n.join(","));i.hasClass(_.DROPDOWN_ITEM)?(i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE),i.addClass(_.ACTIVE)):i.parents(g.LI).find("> "+g.NAV_LINKS).addClass(_.ACTIVE),t(this._scrollElement).trigger(f.ACTIVATE,{relatedTarget:e})},h.prototype._clear=function(){t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE)},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o="object"===("undefined"==typeof e?"undefined":i(e))&&e;
if(n||(n=new h(this,o),t(this).data(a,n)),"string"==typeof e){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return u}}]),h}();return t(window).on(f.LOAD_DATA_API,function(){for(var e=t.makeArray(t(g.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);m._jQueryInterface.call(i,i.data())}}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=c,m._jQueryInterface},m}(jQuery),function(t){var e="tab",i="4.0.0-alpha.6",s="bs.tab",a="."+s,l=".data-api",h=t.fn[e],c=150,u={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK_DATA_API:"click"+a+l},d={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},f={A:"a",LI:"li",DROPDOWN:".dropdown",LIST:"ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},_=function(){function e(t){n(this,e),this._element=t}return e.prototype.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(d.ACTIVE)||t(this._element).hasClass(d.DISABLED))){var n=void 0,i=void 0,o=t(this._element).closest(f.LIST)[0],s=r.getSelectorFromElement(this._element);o&&(i=t.makeArray(t(o).find(f.ACTIVE)),i=i[i.length-1]);var a=t.Event(u.HIDE,{relatedTarget:this._element}),l=t.Event(u.SHOW,{relatedTarget:i});if(i&&t(i).trigger(a),t(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=t(s)[0]),this._activate(this._element,o);var h=function(){var n=t.Event(u.HIDDEN,{relatedTarget:e._element}),o=t.Event(u.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},e.prototype.dispose=function(){t.removeClass(this._element,s),this._element=null},e.prototype._activate=function(e,n,i){var o=this,s=t(n).find(f.ACTIVE_CHILD)[0],a=i&&r.supportsTransitionEnd()&&(s&&t(s).hasClass(d.FADE)||Boolean(t(n).find(f.FADE_CHILD)[0])),l=function(){return o._transitionComplete(e,s,a,i)};s&&a?t(s).one(r.TRANSITION_END,l).emulateTransitionEnd(c):l(),s&&t(s).removeClass(d.SHOW)},e.prototype._transitionComplete=function(e,n,i,o){if(n){t(n).removeClass(d.ACTIVE);var s=t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];s&&t(s).removeClass(d.ACTIVE),n.setAttribute("aria-expanded",!1)}if(t(e).addClass(d.ACTIVE),e.setAttribute("aria-expanded",!0),i?(r.reflow(e),t(e).addClass(d.SHOW)):t(e).removeClass(d.FADE),e.parentNode&&t(e.parentNode).hasClass(d.DROPDOWN_MENU)){var a=t(e).closest(f.DROPDOWN)[0];a&&t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE),e.setAttribute("aria-expanded",!0)}o&&o()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),o=i.data(s);if(o||(o=new e(this),i.data(s,o)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n]()}})},o(e,null,[{key:"VERSION",get:function(){return i}}]),e}();return t(document).on(u.CLICK_DATA_API,f.DATA_TOGGLE,function(e){e.preventDefault(),_._jQueryInterface.call(t(this),"show")}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=h,_._jQueryInterface},_}(jQuery),function(t){if("undefined"==typeof Tether)throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e="tooltip",s="4.0.0-alpha.6",a="bs.tooltip",l="."+a,h=t.fn[e],c=150,u="bs-tether",d={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[],container:!1},f={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array",container:"(string|element|boolean)"},_={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},g={SHOW:"show",OUT:"out"},p={HIDE:"hide"+l,HIDDEN:"hidden"+l,SHOW:"show"+l,SHOWN:"shown"+l,INSERTED:"inserted"+l,CLICK:"click"+l,FOCUSIN:"focusin"+l,FOCUSOUT:"focusout"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l},m={FADE:"fade",SHOW:"show"},E={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},v={element:!1,enabled:!1},T={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},I=function(){function h(t,e){n(this,h),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._isTransitioning=!1,this._tether=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return h.prototype.enable=function(){this._isEnabled=!0},h.prototype.disable=function(){this._isEnabled=!1},h.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},h.prototype.toggle=function(e){if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(m.SHOW))return void this._leave(null,this);this._enter(null,this)}},h.prototype.dispose=function(){clearTimeout(this._timeout),this.cleanupTether(),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null},h.prototype.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){if(this._isTransitioning)throw new Error("Tooltip is transitioning");t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var o=this.getTipElement(),s=r.getUID(this.constructor.NAME);o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&t(o).addClass(m.FADE);var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,l=this._getAttachment(a),c=this.config.container===!1?document.body:t(this.config.container);t(o).data(this.constructor.DATA_KEY,this).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:l,element:o,target:this.element,classes:v,classPrefix:u,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),r.reflow(o),this._tether.position(),t(o).addClass(m.SHOW);var d=function(){var n=e._hoverState;e._hoverState=null,e._isTransitioning=!1,t(e.element).trigger(e.constructor.Event.SHOWN),n===g.OUT&&e._leave(null,e)};if(r.supportsTransitionEnd()&&t(this.tip).hasClass(m.FADE))return this._isTransitioning=!0,void t(this.tip).one(r.TRANSITION_END,d).emulateTransitionEnd(h._TRANSITION_DURATION);d()}},h.prototype.hide=function(e){var n=this,i=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE);if(this._isTransitioning)throw new Error("Tooltip is transitioning");var s=function(){n._hoverState!==g.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),n._isTransitioning=!1,n.cleanupTether(),e&&e()};t(this.element).trigger(o),o.isDefaultPrevented()||(t(i).removeClass(m.SHOW),this._activeTrigger[T.CLICK]=!1,this._activeTrigger[T.FOCUS]=!1,this._activeTrigger[T.HOVER]=!1,r.supportsTransitionEnd()&&t(this.tip).hasClass(m.FADE)?(this._isTransitioning=!0,t(i).one(r.TRANSITION_END,s).emulateTransitionEnd(c)):s(),this._hoverState="")},h.prototype.isWithContent=function(){return Boolean(this.getTitle())},h.prototype.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0]},h.prototype.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(E.TOOLTIP_INNER),this.getTitle()),e.removeClass(m.FADE+" "+m.SHOW),this.cleanupTether()},h.prototype.setElementContent=function(e,n){var o=this.config.html;"object"===("undefined"==typeof n?"undefined":i(n))&&(n.nodeType||n.jquery)?o?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[o?"html":"text"](n)},h.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},h.prototype.cleanupTether=function(){this._tether&&this._tether.destroy()},h.prototype._getAttachment=function(t){return _[t.toUpperCase()]},h.prototype._setListeners=function(){var e=this,n=this.config.trigger.split(" ");n.forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==T.MANUAL){var i=n===T.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,o=n===T.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(o,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=t.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},h.prototype._fixTitle=function(){var t=i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},h.prototype._enter=function(e,n){var i=this.constructor.DATA_KEY;return n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T.FOCUS:T.HOVER]=!0),t(n.getTipElement()).hasClass(m.SHOW)||n._hoverState===g.SHOW?void(n._hoverState=g.SHOW):(clearTimeout(n._timeout),n._hoverState=g.SHOW,n.config.delay&&n.config.delay.show?void(n._timeout=setTimeout(function(){n._hoverState===g.SHOW&&n.show()},n.config.delay.show)):void n.show())},h.prototype._leave=function(e,n){var i=this.constructor.DATA_KEY;if(n=n||t(e.currentTarget).data(i),n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T.FOCUS:T.HOVER]=!1),!n._isWithActiveTrigger())return clearTimeout(n._timeout),n._hoverState=g.OUT,n.config.delay&&n.config.delay.hide?void(n._timeout=setTimeout(function(){n._hoverState===g.OUT&&n.hide()},n.config.delay.hide)):void n.hide()},h.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},h.prototype._getConfig=function(n){return n=t.extend({},this.constructor.Default,t(this.element).data(),n),n.delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),r.typeCheckConfig(e,n,this.constructor.DefaultType),n},h.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},h._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(a),o="object"===("undefined"==typeof e?"undefined":i(e))&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new h(this,o),t(this).data(a,n)),"string"==typeof e)){if(void 0===n[e])throw new Error('No method named "'+e+'"');n[e]()}})},o(h,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return d}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return a}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return l}},{key:"DefaultType",get:function(){return f}}]),h}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=h,I._jQueryInterface},I}(jQuery));(function(r){var a="popover",l="4.0.0-alpha.6",h="bs.popover",c="."+h,u=r.fn[a],d=r.extend({},s.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),f=r.extend({},s.DefaultType,{content:"(string|element|function)"}),_={FADE:"fade",SHOW:"show"},g={TITLE:".popover-title",CONTENT:".popover-content"},p={HIDE:"hide"+c,HIDDEN:"hidden"+c,SHOW:"show"+c,SHOWN:"shown"+c,INSERTED:"inserted"+c,CLICK:"click"+c,FOCUSIN:"focusin"+c,FOCUSOUT:"focusout"+c,MOUSEENTER:"mouseenter"+c,MOUSELEAVE:"mouseleave"+c},m=function(s){function u(){return n(this,u),t(this,s.apply(this,arguments))}return e(u,s),u.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},u.prototype.getTipElement=function(){return this.tip=this.tip||r(this.config.template)[0]},u.prototype.setContent=function(){var t=r(this.getTipElement());this.setElementContent(t.find(g.TITLE),this.getTitle()),this.setElementContent(t.find(g.CONTENT),this._getContent()),t.removeClass(_.FADE+" "+_.SHOW),this.cleanupTether()},u.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},u._jQueryInterface=function(t){return this.each(function(){var e=r(this).data(h),n="object"===("undefined"==typeof t?"undefined":i(t))?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new u(this,n),r(this).data(h,e)),"string"==typeof t)){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},o(u,null,[{key:"VERSION",get:function(){return l}},{key:"Default",get:function(){return d}},{key:"NAME",get:function(){return a}},{key:"DATA_KEY",get:function(){return h}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return c}},{key:"DefaultType",get:function(){return f}}]),u}(s);return r.fn[a]=m._jQueryInterface,r.fn[a].Constructor=m,r.fn[a].noConflict=function(){return r.fn[a]=u,m._jQueryInterface},m})(jQuery)}();



/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});




/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-setclasses !*/
!function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,i,f,r;for(var c in t)if(t.hasOwnProperty(c)){if(n=[],e=t[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)f=n[i],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),l.push((a?"":"no-")+r.join("-"))}}function i(n){var e=r.className,s=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),c?r.className.baseVal=e:r.className=e)}var t=[],f={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){t.push({name:n,fn:e,options:s})},addAsyncTest:function(n){t.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var l=[],r=e.documentElement,c="svg"===r.nodeName.toLowerCase();a(),i(l),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);



/*!
 * fullPage 2.9.5
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Creating some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: $.fn.fp_scrolloverflow ? $.fn.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');

                if(value){
                    setMouseWheelScrolling(true);
                    addTouchHandler();
                }else{
                    setMouseWheelScrolling(false);
                    removeTouchHandler();
                }
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating global var

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
            }
        }

        if($(this).length){
            //public functions
            FP.version = '2.9.5';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared ={
                afterRenderActions: afterRenderActions
            };

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                .on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter touchstart', options.normalScrollElements, function () {
                    setAllowScrolling(false);
                });

                $document.on('mouseleave touchend', options.normalScrollElements, function(){
                    setAllowScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function(){
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

             //styling the sections / slides / menu
            $(SECTION_SEL).each(function(index){
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function(index) {
                $(this).css('width', slideWidth + '%');

                if(options.verticalCentered){
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL);

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(section.hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + ($(SECTION_NAV_SEL).height()/2) + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            container.find('iframe[src*="youtube.com/embed/"]').each(function(){
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            lazyLoad(section);
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection()){
                $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            }

            $.isFunction( options.afterRender ) && options.afterRender.call(container);
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var destinationSection = getSectionByAnchor(getAnchorsURL().section);

            return !destinationSection.length || destinationSection.length && destinationSection.index() === startingSection.index();
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if(activeSlide.length){
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL).outerHeight() <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL));
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if(movement == 'up'){
                return bottom >= ($window.scrollTop() + $window.height());
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL));
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable.length > 0 ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event){
            var e = event.originalEvent;
            if(options.autoScrolling && isReallyTouch(e)){
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'left'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'left'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(element.outerHeight() > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            //sections will temporally have another position in the DOM
            //updating this values in case we need them
            v.leavingSection = v.activeSection.index(SECTION_SEL) + 1;
            v.sectionIndex = v.element.index(SECTION_SEL);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element
                .attr(attribute, element.data(attribute))
                .removeAttr('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;

            panel.find('img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]').each(function(){
                element = $(this);

                $.each(['src', 'srcset'], function(index, type){
                    var attribute = element.attr('data-' + type);
                    if(typeof attribute !== 'undefined' && attribute){
                        setSrc(element, type);
                    }
                });

                if(element.is('source')){
                    var typeToPlay = element.closest('video').length ? 'video' : 'audio';
                    element.closest(typeToPlay).get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            panel.find('video, audio').each(function(){
                var element = $(this).get(0);

                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if( slide.length ) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slideAnchor ))  {
                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            //getting the anchor link in the URL and deleting the `#`
            var hash = window.location.hash;
            var anchorsParts =  hash.replace('#', '').split('/');

            //using / for visual reasons and not as a section/slide separator #2803
            var isFunkyAnchor = hash.indexOf('#/') > -1;

            return {
                section: isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]),
                slide: isFunkyAnchor ? decodeURIComponent(anchorsParts[2]) : decodeURIComponent(anchorsParts[1])
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.which) < 0){
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor:  getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!element.hasClass(TABLE)){
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            if(!sectionAnchor) return [];

            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( sectionAnchor -1);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //do nothing if there's no section with the given anchor name
            if(!section.length) return;

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if(typeof anchor === 'undefined'){
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container
                .off('mousedown', mouseDownHandler)
                .off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove).on(events.touchmove, preventBouncing);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart).on(events.touchstart, touchStartHandler)
                    .off(events.touchmove).on(events.touchmove, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart)
                    .off(events.touchmove);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                container.css('top', -roundedTop);
            }
            else{
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                $.each(Object.keys(isScrollAllowed[type]), function(index, key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click touchstart', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click touchstart', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                setSrc($(this), 'src');
            });

            container.find('img[data-srcset]').each(function(){
                setSrc($(this), 'srcset');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                if(options.scrollOverflowHandler){
                    options.scrollOverflowHandler.remove($(this));
                }
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //removing the applied transition from the fullpage wrapper
            container.css({
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function(index, value){
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            if($('html').hasClass(ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && !options.scrollOverflowHandler){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            $.each(extensions, function(index, extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function() {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function() {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }

    }; //end of $.fn.fullpage
});


/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};


!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(t):(t.lottie=e(t),t.bodymovin=t.lottie)}(window||{},function(window){"use strict";function ProjectInterface(){return{}}function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,i,r){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=r<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,i,r){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=r<0?-1:1}function BMSegmentStartEvent(t,e,i){this.type=t,this.firstFrame=e,this.totalFrames=i}function BMDestroyEvent(t,e){this.type=t,this.target=e}function randomString(t,e){void 0===e&&(e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var i,r="";for(i=t;i>0;--i)r+=e[Math.round(Math.random()*(e.length-1))];return r}function HSVtoRGB(t,e,i){var r,s,a,n,o,h,l,p;switch(n=Math.floor(6*t),o=6*t-n,h=i*(1-e),l=i*(1-o*e),p=i*(1-(1-o)*e),n%6){case 0:r=i,s=p,a=h;break;case 1:r=l,s=i,a=h;break;case 2:r=h,s=i,a=p;break;case 3:r=h,s=l,a=i;break;case 4:r=p,s=h,a=i;break;case 5:r=i,s=h,a=l}return[r,s,a]}function RGBtoHSV(t,e,i){var r,s=Math.max(t,e,i),a=Math.min(t,e,i),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:r=0;break;case t:r=e-i+n*(e<i?6:0),r/=6*n;break;case e:r=i-t+2*n,r/=6*n;break;case i:r=t-e+4*n,r/=6*n}return[r,o,h]}function addSaturationToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),HSVtoRGB(i[0],i[1],i[2])}function addBrightnessToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),HSVtoRGB(i[0],i[1],i[2])}function addHueToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),HSVtoRGB(i[0],i[1],i[2])}function BaseEvent(){}function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function addDynamicProperty(t){this.dynamicProperties.indexOf(t)===-1&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this))}function extendPrototype(t,e){var i,r,s=t.length;for(i=0;i<s;i+=1){r=t[i].prototype;for(var a in r)r.hasOwnProperty(a)&&(e.prototype[a]=r[a])}}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){function t(t,e,i,r,s,a){var n=t*r+e*s+i*a-s*r-a*t-i*e;return n>-.001&&n<.001}function e(e,i,r,s,a,n,o,h,l){if(0===r&&0===n&&0===l)return t(e,i,s,a,o,h);var p,m=Math.sqrt(Math.pow(s-e,2)+Math.pow(a-i,2)+Math.pow(n-r,2)),f=Math.sqrt(Math.pow(o-e,2)+Math.pow(h-i,2)+Math.pow(l-r,2)),c=Math.sqrt(Math.pow(o-s,2)+Math.pow(h-a,2)+Math.pow(l-n,2));return p=m>f?m>c?m-f-c:c-f-m:c>f?c-f-m:f-m-c,p>-1e-4&&p<1e-4}function i(t){var e,i=segments_length_pool.newElement(),r=t.c,s=t.v,a=t.o,n=t.i,o=t._length,l=i.lengths,p=0;for(e=0;e<o-1;e+=1)l[e]=h(s[e],s[e+1],a[e],n[e+1]),p+=l[e].addedLength;return r&&(l[e]=h(s[e],s[0],a[e],n[0]),p+=l[e].addedLength),i.totalLength=p,i}function r(t){this.segmentLength=0,this.points=new Array(t)}function s(t,e){this.partialLength=t,this.point=e}function a(t,e){var i=e.percents,r=e.lengths,s=i.length,a=bm_floor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===r[a])return i[a];for(var h=r[a]>n?-1:1,l=!0;l;)if(r[a]<=n&&r[a+1]>n?(o=(n-r[a])/(r[a+1]-r[a]),l=!1):a+=h,a<0||a>=s-1){if(a===s-1)return i[a];l=!1}return i[a]+(i[a+1]-i[a])*o}function n(t,e,i,r,s,n){var o=a(s,n),h=1-o,l=Math.round(1e3*(h*h*h*t[0]+(o*h*h+h*o*h+h*h*o)*i[0]+(o*o*h+h*o*o+o*h*o)*r[0]+o*o*o*e[0]))/1e3,p=Math.round(1e3*(h*h*h*t[1]+(o*h*h+h*o*h+h*h*o)*i[1]+(o*o*h+h*o*o+o*h*o)*r[1]+o*o*o*e[1]))/1e3;return[l,p]}function o(t,e,i,r,s,n,o){s=s<0?0:s>1?1:s;var h=a(s,o);n=n>1?1:n;var l,m=a(n,o),f=t.length,c=1-h,d=1-m,u=c*c*c,y=h*c*c*3,g=h*h*c*3,v=h*h*h,b=c*c*d,E=h*c*d+c*h*d+c*c*m,x=h*h*d+c*h*m+h*c*m,S=h*h*m,P=c*d*d,_=h*d*d+c*m*d+c*d*m,C=h*m*d+c*m*m+h*d*m,A=h*m*m,k=d*d*d,M=m*d*d+d*m*d+d*d*m,T=m*m*d+d*m*m+m*d*m,D=m*m*m;for(l=0;l<f;l+=1)p[4*l]=Math.round(1e3*(u*t[l]+y*i[l]+g*r[l]+v*e[l]))/1e3,p[4*l+1]=Math.round(1e3*(b*t[l]+E*i[l]+x*r[l]+S*e[l]))/1e3,p[4*l+2]=Math.round(1e3*(P*t[l]+_*i[l]+C*r[l]+A*e[l]))/1e3,p[4*l+3]=Math.round(1e3*(k*t[l]+M*i[l]+T*r[l]+D*e[l]))/1e3;return p}var h=(Math,function(){return function(t,e,i,r){var s,a,n,o,h,l,p=defaultCurveSegments,m=0,f=[],c=[],d=bezier_length_pool.newElement();for(n=i.length,s=0;s<p;s+=1){for(h=s/(p-1),l=0,a=0;a<n;a+=1)o=bm_pow(1-h,3)*t[a]+3*bm_pow(1-h,2)*h*i[a]+3*(1-h)*bm_pow(h,2)*r[a]+bm_pow(h,3)*e[a],f[a]=o,null!==c[a]&&(l+=bm_pow(f[a]-c[a],2)),c[a]=f[a];l&&(l=bm_sqrt(l),m+=l),d.percents[s]=h,d.lengths[s]=m}return d.addedLength=m,d}}()),l=function(){var e={};return function(i){var a=i.s,n=i.e,o=i.to,h=i.ti,l=(a[0]+"_"+a[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]+"_"+h[0]+"_"+h[1]).replace(/\./g,"p");if(e[l])return void(i.bezierData=e[l]);var p,m,f,c,d,u,y,g=defaultCurveSegments,v=0,b=null;2===a.length&&(a[0]!=n[0]||a[1]!=n[1])&&t(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&t(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])&&(g=2);var E=new r(g);for(f=o.length,p=0;p<g;p+=1){for(y=createSizedArray(f),d=p/(g-1),u=0,m=0;m<f;m+=1)c=bm_pow(1-d,3)*a[m]+3*bm_pow(1-d,2)*d*(a[m]+o[m])+3*(1-d)*bm_pow(d,2)*(n[m]+h[m])+bm_pow(d,3)*n[m],y[m]=c,null!==b&&(u+=bm_pow(y[m]-b[m],2));u=bm_sqrt(u),v+=u,E.points[p]=new s(u,y),b=y}E.segmentLength=v,i.bezierData=E,e[l]=E}}(),p=createTypedArray("float32",8);return{getSegmentsLength:i,getNewSegment:o,getPointInSegment:n,buildBezierData:l,pointOnLine2D:t,pointOnLine3D:e}}function dataFunctionManager(){function t(s,a,o){var h,l,p,m,f,c,d,u,y=s.length;for(m=0;m<y;m+=1)if(h=s[m],"ks"in h&&!h.completed){if(h.completed=!0,h.tt&&(s[m-1].td=h.tt),l=[],p=-1,h.hasMask){var g=h.masksProperties;for(c=g.length,f=0;f<c;f+=1)if(g[f].pt.k.i)r(g[f].pt.k);else for(u=g[f].pt.k.length,d=0;d<u;d+=1)g[f].pt.k[d].s&&r(g[f].pt.k[d].s[0]),g[f].pt.k[d].e&&r(g[f].pt.k[d].e[0])}0===h.ty?(h.layers=e(h.refId,a),t(h.layers,a,o)):4===h.ty?i(h.shapes):5==h.ty&&n(h,o)}}function e(t,e){for(var i=0,r=e.length;i<r;){if(e[i].id===t)return e[i].layers.__used?JSON.parse(JSON.stringify(e[i].layers)):(e[i].layers.__used=!0,e[i].layers);i+=1}}function i(t){var e,s,a,n=t.length,o=!1;for(e=n-1;e>=0;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)r(t[e].ks.k);else for(a=t[e].ks.k.length,s=0;s<a;s+=1)t[e].ks.k[s].s&&r(t[e].ks.k[s].s[0]),t[e].ks.k[s].e&&r(t[e].ks.k[s].e[0]);o=!0}else"gr"==t[e].ty&&i(t[e].it)}function r(t){var e,i=t.i.length;for(e=0;e<i;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function s(t,e){var i=e?e.split("."):[100,100,100];return t[0]>i[0]||!(i[0]>t[0])&&(t[1]>i[1]||!(i[1]>t[1])&&(t[2]>i[2]||!(i[2]>t[2])&&void 0))}function a(e,i){e.__complete||(l(e),o(e),h(e),p(e),t(e.layers,e.assets,i),e.__complete=!0)}function n(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var o=function(){function t(t){var e=t.t.d;t.t.d={k:[{s:e,t:0}]}}function e(e){var i,r=e.length;for(i=0;i<r;i+=1)5===e[i].ty&&t(e[i])}var i=[4,4,14];return function(t){if(s(i,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),h=function(){var t=[4,7,99];return function(e){if(e.chars&&!s(t,e.v)){var i,a,n,o,h,l=e.chars.length;for(i=0;i<l;i+=1)if(e.chars[i].data&&e.chars[i].data.shapes)for(h=e.chars[i].data.shapes[0].it,n=h.length,a=0;a<n;a+=1)o=h[a].ks.k,o.__converted||(r(h[a].ks.k),o.__converted=!0)}}}(),l=function(){function t(e){var i,r,s,a=e.length;for(i=0;i<a;i+=1)if("gr"===e[i].ty)t(e[i].it);else if("fl"===e[i].ty||"st"===e[i].ty)if(e[i].c.k&&e[i].c.k[0].i)for(s=e[i].c.k.length,r=0;r<s;r+=1)e[i].c.k[r].s&&(e[i].c.k[r].s[0]/=255,e[i].c.k[r].s[1]/=255,e[i].c.k[r].s[2]/=255,e[i].c.k[r].s[3]/=255),e[i].c.k[r].e&&(e[i].c.k[r].e[0]/=255,e[i].c.k[r].e[1]/=255,e[i].c.k[r].e[2]/=255,e[i].c.k[r].e[3]/=255);else e[i].c.k[0]/=255,e[i].c.k[1]/=255,e[i].c.k[2]/=255,e[i].c.k[3]/=255}function e(e){var i,r=e.length;for(i=0;i<r;i+=1)4===e[i].ty&&t(e[i].shapes)}var i=[4,1,9];return function(t){if(s(i,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),p=function(){function t(e){var i,r,s,a=e.length,n=!1;for(i=a-1;i>=0;i-=1)if("sh"==e[i].ty){if(e[i].ks.k.i)e[i].ks.k.c=e[i].closed;else for(s=e[i].ks.k.length,r=0;r<s;r+=1)e[i].ks.k[r].s&&(e[i].ks.k[r].s[0].c=e[i].closed),e[i].ks.k[r].e&&(e[i].ks.k[r].e[0].c=e[i].closed);n=!0}else"gr"==e[i].ty&&t(e[i].it)}function e(e){var i,r,s,a,n,o,h=e.length;for(r=0;r<h;r+=1){if(i=e[r],i.hasMask){var l=i.masksProperties;for(a=l.length,s=0;s<a;s+=1)if(l[s].pt.k.i)l[s].pt.k.c=l[s].cl;else for(o=l[s].pt.k.length,n=0;n<o;n+=1)l[s].pt.k[n].s&&(l[s].pt.k[n].s[0].c=l[s].cl),l[s].pt.k[n].e&&(l[s].pt.k[n].e[0].c=l[s].cl)}4===i.ty&&t(i.shapes)}}var i=[4,4,18];return function(t){if(s(i,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;r<a;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),m={};return m.completeData=a,m}function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,i){this.elem=t,this.container=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=i,this._mdf=!1,this.k=!1,this.dynamicProperties=[],this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1);var r,s,a=e.length||0;for(r=0;r<a;r+=1)s=PropertyFactory.getProp(t,e[r].v,0,0,this),this.k=!!s.k||this.k,this.dataProps[r]={n:e[r].n,p:s};this.k||this.getValue(!0)}function GradientProperty(t,e){this.container=t,this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.data=e,this.k=this.prop.k,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this._mdf=!1,this.getValue(!0)}function TextAnimatorProperty(t,e,i){this._mdf=!1,this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this.dynamicProperties=[],this._textData=t,this._renderType=e,this._elem=i,this.container=i,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1}function TextAnimatorDataProperty(t,e,i){var r={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,i):r,rx:a.rx?s(t,a.rx,0,degToRads,i):r,ry:a.ry?s(t,a.ry,0,degToRads,i):r,sk:a.sk?s(t,a.sk,0,degToRads,i):r,sa:a.sa?s(t,a.sa,0,degToRads,i):r,s:a.s?s(t,a.s,1,.01,i):r,a:a.a?s(t,a.a,1,0,i):r,o:a.o?s(t,a.o,0,.01,i):r,p:a.p?s(t,a.p,1,0,i):r,sw:a.sw?s(t,a.sw,0,0,i):r,sc:a.sc?s(t,a.sc,1,0,i):r,fc:a.fc?s(t,a.fc,1,0,i):r,fh:a.fh?s(t,a.fh,0,0,i):r,fs:a.fs?s(t,a.fs,0,.01,i):r,fb:a.fb?s(t,a.fb,0,.01,i):r,t:a.t?s(t,a.t,0,0,i):r},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,i),this.s.t=e.s.t}function LetterProps(t,e,i,r,s,a){this.o=t,this.sw=e,this.sc=i,this.fc=r,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!r,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!0,this.data=e,this.elem=t,this.keysIndex=-1,this.canResize=!1,this.minimumFontSize=1,this.currentData={ascent:0,boxWidth:[0,0],f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:[0,0],fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,__complete:!1,finalSize:0,finalText:[],finalLineHeight:0},this.searchProperty()?t.addDynamicProperty(this):this.getValue(!0)}function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var i=createNS("g");this.svgElement.appendChild(i),this.layerElement=i;var r=createNS("defs");this.svgElement.appendChild(r),this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!e||e.hideOnTransparent!==!1,viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||""},this.globalData={_mdf:!1,frameNum:-1,defs:r,frameId:0,compSize:{w:0,h:0},renderConfig:this.renderConfig,fontManager:new FontManager},this.elements=[],this.pendingElements=[],this.destroyed=!1}function MaskElement(t,e,i){this.data=t,this.element=e,this.globalData=i,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null,this._isFirstFrame=!0;var r,s=this.globalData.defs,a=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(a),this.solidPath="";var n,o,h,l,p,m,f,c=this.masksProperties,d=0,u=[],y=randomString(10),g="clipPath",v="clip-path";for(r=0;r<a;r++)if(("a"!==c[r].mode&&"n"!==c[r].mode||c[r].inv||100!==c[r].o.k)&&(g="mask",v="mask"),"s"!=c[r].mode&&"i"!=c[r].mode||0!==d?l=null:(l=createNS("rect"),l.setAttribute("fill","#ffffff"),l.setAttribute("width",this.element.comp.data.w),l.setAttribute("height",this.element.comp.data.h),u.push(l)),n=createNS("path"),"n"!=c[r].mode){d+=1,n.setAttribute("fill","s"===c[r].mode?"#000000":"#ffffff"),n.setAttribute("clip-rule","nonzero");var b;if(0!==c[r].x.k?(g="mask",v="mask",f=PropertyFactory.getProp(this.element,c[r].x,0,null,this.element),b="fi_"+randomString(10),p=createNS("filter"),p.setAttribute("id",b),m=createNS("feMorphology"),m.setAttribute("operator","dilate"),m.setAttribute("in","SourceGraphic"),m.setAttribute("radius","0"),p.appendChild(m),s.appendChild(p),n.setAttribute("stroke","s"===c[r].mode?"#000000":"#ffffff")):(m=null,f=null),this.storedData[r]={elem:n,x:f,expan:m,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[r].mode){h=u.length;var E=createNS("g");for(o=0;o<h;o+=1)E.appendChild(u[o]);var x=createNS("mask");x.setAttribute("mask-type","alpha"),x.setAttribute("id",y+"_"+d),x.appendChild(n),s.appendChild(x),E.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(n);c[r].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[r]={elem:n,lastPath:"",op:PropertyFactory.getProp(this.element,c[r].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[r],3),invRect:l},this.viewData[r].prop.k||this.drawPath(c[r],this.viewData[r].prop.v,this.viewData[r])}else this.viewData[r]={op:PropertyFactory.getProp(this.element,c[r].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[r],3),elem:n},s.appendChild(n);for(this.maskElement=createNS(g),a=u.length,r=0;r<a;r+=1)this.maskElement.appendChild(u[r]);d>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),s.appendChild(this.maskElement))}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!1,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,i){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=i,this.lvl=e}function SVGTransformData(t,e){this.transform={mProps:t,op:e},this.elements=[]}function SVGStrokeStyleData(t,e,i){this.o=PropertyFactory.getProp(t,e.o,0,.01,t),this.w=PropertyFactory.getProp(t,e.w,0,null,t),this.d=new DashProperty(t,e.d||{},"svg",t),this.c=PropertyFactory.getProp(t,e.c,1,255,t),this.style=i}function SVGFillStyleData(t,e,i){this.o=PropertyFactory.getProp(t,e.o,0,.01,t),this.c=PropertyFactory.getProp(t,e.c,1,255,t),this.style=i}function SVGGradientFillStyleData(t,e,i){this.initGradientData(t,e,i)}function SVGGradientStrokeStyleData(t,e,i){this.w=PropertyFactory.getProp(t,e.w,0,null,t),this.d=new DashProperty(t,e.d||{},"svg",t),this.initGradientData(t,e,i)}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function BaseElement(){}function NullElement(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initFrame(),this.initTransform(t,e,i),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i)}function ISolidElement(t,e,i){this.initElement(t,e,i)}function SVGCompElement(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextElement(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}function SVGShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.initElement(t,e,i),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var i=createNS("feColorMatrix");if(i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","linearRGB"),i.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),i.setAttribute("result","f1"),t.appendChild(i),i=createNS("feColorMatrix"),i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),i.setAttribute("result","f2"),t.appendChild(i),this.matrixFilter=i,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var r=createNS("feMerge");t.appendChild(r);var s;s=createNS("feMergeNode"),s.setAttribute("in","SourceGraphic"),r.appendChild(s),s=createNS("feMergeNode"),s.setAttribute("in","f2"),r.appendChild(s)}}function SVGFillFilter(t,e){this.filterManager=e;var i=createNS("feColorMatrix");i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(i),this.matrixFilter=i}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var i=createNS("feColorMatrix");i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","linearRGB"),i.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),i.setAttribute("result","f1"),t.appendChild(i);var r=createNS("feComponentTransfer");r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),this.matrixFilter=r;var s=createNS("feFuncR");s.setAttribute("type","table"),r.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),r.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),r.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var i=this.filterManager.effectElements,r=createNS("feComponentTransfer");(i[10].p.k||0!==i[10].p.v||i[11].p.k||1!==i[11].p.v||i[12].p.k||1!==i[12].p.v||i[13].p.k||0!==i[13].p.v||i[14].p.k||1!==i[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",r)),(i[17].p.k||0!==i[17].p.v||i[18].p.k||1!==i[18].p.v||i[19].p.k||1!==i[19].p.v||i[20].p.k||0!==i[20].p.v||i[21].p.k||1!==i[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",r)),(i[24].p.k||0!==i[24].p.v||i[25].p.k||1!==i[25].p.v||i[26].p.k||1!==i[26].p.v||i[27].p.k||0!==i[27].p.v||i[28].p.k||1!==i[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",r)),(i[31].p.k||0!==i[31].p.v||i[32].p.k||1!==i[32].p.v||i[33].p.k||1!==i[33].p.v||i[34].p.k||0!==i[34].p.v||i[35].p.k||1!==i[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",r)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),r=createNS("feComponentTransfer")),(i[3].p.k||0!==i[3].p.v||i[4].p.k||1!==i[4].p.v||i[5].p.k||1!==i[5].p.v||i[6].p.k||0!==i[6].p.v||i[7].p.k||1!==i[7].p.v)&&(r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),this.feFuncRComposed=this.createFeFunc("feFuncR",r),this.feFuncGComposed=this.createFeFunc("feFuncG",r),this.feFuncBComposed=this.createFeFunc("feFuncB",r))}function SVGDropShadowEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var i=createNS("feGaussianBlur");i.setAttribute("in","SourceAlpha"),i.setAttribute("result","drop_shadow_1"),i.setAttribute("stdDeviation","0"),this.feGaussianBlur=i,t.appendChild(i);var r=createNS("feOffset");r.setAttribute("dx","25"),r.setAttribute("dy","0"),r.setAttribute("in","drop_shadow_1"),r.setAttribute("result","drop_shadow_2"),this.feOffset=r,t.appendChild(r);var s=createNS("feFlood");s.setAttribute("flood-color","#00ff00"),s.setAttribute("flood-opacity","1"),s.setAttribute("result","drop_shadow_3"),this.feFlood=s,t.appendChild(s);var a=createNS("feComposite");a.setAttribute("in","drop_shadow_3"),a.setAttribute("in2","drop_shadow_2"),a.setAttribute("operator","in"),a.setAttribute("result","drop_shadow_4"),t.appendChild(a);var n=createNS("feMerge");t.appendChild(n);var o;o=createNS("feMergeNode"),n.appendChild(o),o=createNS("feMergeNode"),o.setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=n,this.originalNodeAdded=!1,n.appendChild(o)}function SVGMatte3Effect(t,e,i){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=i,i.matteElement=createNS("g"),i.matteElement.appendChild(i.layerElement),i.matteElement.appendChild(i.transformedElement),i.baseElement=i.matteElement}function SVGEffects(t){var e,i=t.data.ef?t.data.ef.length:0,r=randomString(10),s=filtersFactory.createFilter(r),a=0;this.filters=[];var n;for(e=0;e<i;e+=1)n=null,20===t.data.ef[e].ty?(a+=1,n=new SVGTintFilter(s,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(a+=1,n=new SVGFillFilter(s,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?n=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(a+=1,n=new SVGTritoneFilter(s,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(a+=1,n=new SVGProLevelsFilter(s,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(a+=1,n=new SVGDropShadowEffect(s,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty&&(n=new SVGMatte3Effect(s,t.effectsManager.effectElements[e],t)),n&&this.filters.push(n);a&&(t.globalData.defs.appendChild(s),t.layerElement.setAttribute("filter","url("+locationHref+"#"+r+")"))}function EffectsManager(){}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",className:e&&e.className||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig};this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:e&&e.className||"",hideOnTransparent:!e||e.hideOnTransparent!==!1},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0}function CVContextData(){this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1;var t,e=15;for(this.savedOp=createTypedArray("float32",e),t=0;t<e;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=e}function CVBaseElement(){}function CVImageElement(t,e,i){this.failed=!1,this.img=new Image,this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i),this.globalData.addPendingElement()}function CVCompElement(t,e,i){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function CVMaskElement(t,e){this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i,r=this.masksProperties.length,s=!1;for(i=0;i<r;i++)"n"!==this.masksProperties[i].mode&&(s=!0),this.viewData[i]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);this.hasMasks=s}function CVShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.initElement(t,e,i)}function CVSolidElement(t,e,i){this.initElement(t,e,i)}function CVTextElement(t,e,i){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,i)}function CVEffects(){}function HBaseElement(t,e,i){}function HSolidElement(t,e,i){this.initElement(t,e,i)}function HCompElement(t,e,i){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function HShapeElement(t,e,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.shapesContainer=createNS("g"),this.initElement(t,e,i),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,i)}function HImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i)}function HCameraElement(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initHierarchy();var r=PropertyFactory.getProp;if(this.pe=r(this,t.pe,0,0,this),t.ks.p.s?(this.px=r(this,t.ks.p.x,1,0,this),this.py=r(this,t.ks.p.y,1,0,this),this.pz=r(this,t.ks.p.z,1,0,this)):this.p=r(this,t.ks.p,1,0,this),t.ks.a&&(this.a=r(this,t.ks.a,1,0,this)),t.ks.or.k.length&&t.ks.or.k[0].to){var s,a=t.ks.or.k.length;for(s=0;s<a;s+=1)t.ks.or.k[s].to=null,t.ks.or.k[s].ti=null}this.or=r(this,t.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=r(this,t.ks.rx,0,degToRads,this),this.ry=r(this,t.ks.ry,0,degToRads,this),this.rz=r(this,t.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0}function HEffects(){}function SliderEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function AngleEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function ColorEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}function PointEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}function LayerIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function MaskIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function CheckboxEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}function NoValueEffect(){this.p={}}function EffectsManager(t,e){var i=t.ef||[];this.effectElements=[];var r,s,a=i.length;for(r=0;r<a;r++)s=new GroupEffect(i[r],e),this.effectElements.push(s)}function GroupEffect(t,e){this.container=e,this.dynamicProperties=[],this.init(t,e)}function setLocationHref(t){locationHref=t}function play(t){animationManager.play(t)}function pause(t){animationManager.pause(t)}function togglePause(t){animationManager.togglePause(t)}function setSpeed(t,e){animationManager.setSpeed(t,e)}function setDirection(t,e){animationManager.setDirection(t,e)}function stop(t){animationManager.stop(t)}function searchAnimations(){standalone===!0?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function registerAnimation(t){return animationManager.registerAnimation(t)}function resize(){animationManager.resize()}function goToAndStop(t,e,i){animationManager.goToAndStop(t,e,i)}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return standalone===!0&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function destroy(t){return animationManager.destroy(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(!(defaultCurveSegments>=50))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),i=0;i<e.length;i++){var r=e[i].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}}var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};!function(){var t,e=Object.getOwnPropertyNames(Math),i=e.length;for(t=0;t<i;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){var e=typeof t;if("object"===e&&t.length){var i,r=createSizedArray(t.length),s=t.length;for(i=0;i<s;i+=1)r[i]=Math.abs(t[i]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;roundValues(!1);var rgbToHex=function(){var t,e,i=[];for(t=0;t<256;t+=1)e=t.toString(16),i[t]=1==e.length?"0"+e:e;return function(t,e,r){return t<0&&(t=0),e<0&&(e=0),r<0&&(r=0),"#"+i[t]+i[e]+i[r]}}();BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var i=this._cbs[t].length,r=0;r<i;r++)this._cbs[t][r](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var i=0,r=this._cbs[t].length;i<r;)this._cbs[t][i]===e&&(this._cbs[t].splice(i,1),i-=1,r-=1),i+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray=function(){function t(t,e){var i,r=0,s=[];switch(t){case"int16":case"uint8c":i=1;break;default:i=1.1}for(r=0;r<e;r+=1)s.push(i);return s}function e(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?e:t;
}(),Matrix=function(){function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=k(t),i=M(t);return this._t(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1)}function i(t){if(0===t)return this;var e=k(t),i=M(t);return this._t(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1)}function r(t){if(0===t)return this;var e=k(t),i=M(t);return this._t(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1)}function s(t){if(0===t)return this;var e=k(t),i=M(t);return this._t(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1)}function a(t,e){return this._t(1,e,t,1,0,0)}function n(t,e){return this.shear(T(t),T(e))}function o(t,e){var i=k(e),r=M(e);return this._t(i,r,0,0,-r,i,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,T(t),1,0,0,0,0,1,0,0,0,0,1)._t(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1)}function h(t,e,i){return i=isNaN(i)?1:i,1==t&&1==e&&1==i?this:this._t(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1)}function l(t,e,i,r,s,a,n,o,h,l,p,m,f,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=i,this.props[3]=r,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,this.props[12]=f,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function p(t,e,i){return i=i||0,0!==t||0!==e||0!==i?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,i,1):this}function m(t,e,i,r,s,a,n,o,h,l,p,m,f,c,d,u){var y=this.props;if(1===t&&0===e&&0===i&&0===r&&0===s&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return y[12]=y[12]*t+y[15]*f,y[13]=y[13]*a+y[15]*c,y[14]=y[14]*p+y[15]*d,y[15]=y[15]*u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],E=y[3],x=y[4],S=y[5],P=y[6],_=y[7],C=y[8],A=y[9],k=y[10],M=y[11],T=y[12],D=y[13],F=y[14],w=y[15];return y[0]=g*t+v*s+b*h+E*f,y[1]=g*e+v*a+b*l+E*c,y[2]=g*i+v*n+b*p+E*d,y[3]=g*r+v*o+b*m+E*u,y[4]=x*t+S*s+P*h+_*f,y[5]=x*e+S*a+P*l+_*c,y[6]=x*i+S*n+P*p+_*d,y[7]=x*r+S*o+P*m+_*u,y[8]=C*t+A*s+k*h+M*f,y[9]=C*e+A*a+k*l+M*c,y[10]=C*i+A*n+k*p+M*d,y[11]=C*r+A*o+k*m+M*u,y[12]=T*t+D*s+F*h+w*f,y[13]=T*e+D*a+F*l+w*c,y[14]=T*i+D*n+F*p+w*d,y[15]=T*r+D*o+F*m+w*u,this._identityCalculated=!1,this}function f(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function c(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function d(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function u(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function y(t,e,i){return{x:t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]}}function g(t,e,i){return t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12]}function v(t,e,i){return t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13]}function b(t,e,i){return t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]}function E(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],i=this.props[5]/e,r=-this.props[1]/e,s=-this.props[4]/e,a=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*i+t[1]*s+n,t[0]*r+t[1]*a+o,0]}function x(t){var e,i=t.length,r=[];for(e=0;e<i;e+=1)r[e]=E(t[e]);return r}function S(t,e,i){var r=createTypedArray("float32",6);if(this.isIdentity())r[0]=t[0],r[1]=t[1],r[2]=e[0],r[3]=e[1],r[4]=i[0],r[5]=i[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],l=this.props[13];r[0]=t[0]*s+t[1]*n+h,r[1]=t[0]*a+t[1]*o+l,r[2]=e[0]*s+e[1]*n+h,r[3]=e[0]*a+e[1]*o+l,r[4]=i[0]*s+i[1]*n+h,r[5]=i[0]*a+i[1]*o+l}return r}function P(t,e,i){var r;return r=this.isIdentity()?[t,e,i]:[t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]]}function _(t,e){return this.isIdentity()?t+","+e:t*this.props[0]+e*this.props[4]+this.props[12]+","+(t*this.props[1]+e*this.props[5]+this.props[13])}function C(){for(var t=0,e=this.props,i="matrix3d(",r=1e4;t<16;)i+=D(e[t]*r)/r,i+=15===t?")":",",t+=1;return i}function A(){var t=1e4,e=this.props;return"matrix("+D(e[0]*t)/t+","+D(e[1]*t)/t+","+D(e[4]*t)/t+","+D(e[5]*t)/t+","+D(e[12]*t)/t+","+D(e[13]*t)/t+")"}var k=Math.cos,M=Math.sin,T=Math.tan,D=Math.round;return function(){this.reset=t,this.rotate=e,this.rotateX=i,this.rotateY=r,this.rotateZ=s,this.skew=n,this.skewFromAxis=o,this.shear=a,this.scale=h,this.setTransform=l,this.translate=p,this.transform=m,this.applyToPoint=y,this.applyToX=g,this.applyToY=v,this.applyToZ=b,this.applyToPointArray=P,this.applyToTriplePoints=S,this.applyToPointStringified=_,this.toCSS=C,this.to2dCSS=A,this.clone=d,this.cloneFromProps=u,this.equals=c,this.inversePoints=x,this.inversePoint=E,this._t=this.transform,this.isIdentity=f,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(t,e){function i(i,l,p){var c=[];l=l===!0?{entropy:!0}:l||{};var v=n(a(l.entropy?[i,h(t)]:null===i?o():i,3),c),b=new r(c),E=function(){for(var t=b.g(f),e=u,i=0;t<y;)t=(t+i)*m,e*=m,i=b.g(1);for(;t>=g;)t/=2,e/=2,i>>>=1;return(t+i)/e};return E.int32=function(){return 0|b.g(4)},E.quick=function(){return b.g(4)/4294967296},E["double"]=E,n(h(b.S),t),(l.pass||p||function(t,i,r,a){return a&&(a.S&&s(a,b),t.state=function(){return s(b,{})}),r?(e[d]=t,i):t})(E,v,"global"in l?l.global:this==e,l.state)}function r(t){var e,i=t.length,r=this,s=0,a=r.i=r.j=0,n=r.S=[];for(i||(t=[i++]);s<m;)n[s]=s++;for(s=0;s<m;s++)n[s]=n[a=v&a+t[s%i]+(e=n[s])],n[a]=e;r.g=function(t){for(var e,i=0,s=r.i,a=r.j,n=r.S;t--;)e=n[s=v&s+1],i=i*m+n[v&(n[s]=n[a=v&a+e])+(n[a]=e)];return r.i=s,r.j=a,i}}function s(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function a(t,e){var i,r=[],s=typeof t;if(e&&"object"==s)for(i in t)try{r.push(a(t[i],e-1))}catch(n){}return r.length?r:"string"==s?t:t+"\0"}function n(t,e){for(var i,r=t+"",s=0;s<r.length;)e[v&s]=v&(i^=19*e[v&s])+r.charCodeAt(s++);return h(e)}function o(){try{if(l)return h(l.randomBytes(m));var e=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(e),h(e)}catch(i){var r=p.navigator,s=r&&r.plugins;return[+new Date,p,s,p.screen,h(t)]}}function h(t){return String.fromCharCode.apply(0,t)}var l,p=this,m=256,f=6,c=52,d="random",u=e.pow(m,f),y=e.pow(2,c),g=2*y,v=m-1;e["seed"+d]=i,n(e.random(),t)}([],BMMath);var BezierFactory=function(){function t(t,e,i,r,s){var a=s||("bez_"+t+"_"+e+"_"+i+"_"+r).replace(/\./g,"p");if(p[a])return p[a];var n=new h([t,e,i,r]);return p[a]=n,n}function e(t,e){return 1-3*e+3*t}function i(t,e){return 3*e-6*t}function r(t){return 3*t}function s(t,s,a){return((e(s,a)*t+i(s,a))*t+r(s))*t}function a(t,s,a){return 3*e(s,a)*t*t+2*i(s,a)*t+r(s)}function n(t,e,i,r,a){var n,o,h=0;do o=e+(i-e)/2,n=s(o,r,a)-t,n>0?i=o:e=o;while(Math.abs(n)>c&&++h<d);return o}function o(t,e,i,r){for(var n=0;n<m;++n){var o=a(e,i,r);if(0===o)return e;var h=s(e,i,r)-t;e-=h/o}return e}function h(t){this._p=t,this._mSampleValues=g?new Float32Array(u):new Array(u),this._precomputed=!1,this.get=this.get.bind(this)}var l={};l.getBezierEasing=t;var p={},m=4,f=.001,c=1e-7,d=10,u=11,y=1/(u-1),g="function"==typeof Float32Array;return h.prototype={get:function(t){var e=this._p[0],i=this._p[1],r=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),e===i&&r===a?t:0===t?0:1===t?1:s(this._getTForX(t),i,a)},_precompute:function(){var t=this._p[0],e=this._p[1],i=this._p[2],r=this._p[3];this._precomputed=!0,t===e&&i===r||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],i=0;i<u;++i)this._mSampleValues[i]=s(i*y,t,e)},_getTForX:function(t){for(var e=this._p[0],i=this._p[2],r=this._mSampleValues,s=0,h=1,l=u-1;h!==l&&r[h]<=t;++h)s+=y;--h;var p=(t-r[h])/(r[h+1]-r[h]),m=s+p*y,c=a(m,e,i);return c>=f?o(t,m,e,i):0===c?m:n(t,s,s+y,e,i)}},l}();!function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var r=(new Date).getTime(),s=Math.max(0,16-(r-t)),a=setTimeout(function(){e(r+s)},s);return t=r+s,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction(),dataManager=dataFunctionManager(),FontManager=function(){function t(t,e){var i=createTag("span");i.style.fontFamily=e;var r=createTag("span");r.innerHTML="giItT1WQy@!-/#",i.style.position="absolute",i.style.left="-10000px",i.style.top="-10000px",i.style.fontSize="300px",i.style.fontVariant="normal",i.style.fontStyle="normal",i.style.fontWeight="normal",i.style.letterSpacing="0",i.appendChild(r),document.body.appendChild(i);var s=r.offsetWidth;return r.style.fontFamily=t+", "+e,{node:r,w:s,parent:i}}function e(){var t,i,r,s=this.fonts.length,a=s;for(t=0;t<s;t+=1)if(this.fonts[t].loaded)a-=1;else if("t"===this.fonts[t].fOrigin||2===this.fonts[t].origin){if(window.Typekit&&window.Typekit.load&&0===this.typekitLoaded){this.typekitLoaded=1;try{window.Typekit.load({async:!0,active:function(){this.typekitLoaded=2}.bind(this)})}catch(n){}}2===this.typekitLoaded&&(this.fonts[t].loaded=!0)}else"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(i=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,i.offsetWidth!==r?(a-=1,this.fonts[t].loaded=!0):(i=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,i.offsetWidth!==r&&(a-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==a&&Date.now()-this.initTime<l?setTimeout(e.bind(this),20):setTimeout(function(){this.loaded=!0}.bind(this),0)}function i(t,e){var i=createNS("text");i.style.fontSize="100px",i.style.fontFamily=e.fFamily,i.textContent="1",e.fClass?(i.style.fontFamily="inherit",i.className=e.fClass):i.style.fontFamily=e.fFamily,t.appendChild(i);var r=createTag("canvas").getContext("2d");return r.font="100px "+e.fFamily,r}function r(r,s){if(!r)return void(this.loaded=!0);if(this.chars)return this.loaded=!0,void(this.fonts=r.list);var a,n=r.list,o=n.length;for(a=0;a<o;a+=1){if(n[a].loaded=!1,n[a].monoCase=t(n[a].fFamily,"monospace"),n[a].sansCase=t(n[a].fFamily,"sans-serif"),n[a].fPath){if("p"===n[a].fOrigin||3===n[a].origin){var h=createTag("style");h.type="text/css",h.innerHTML="@font-face {font-family: "+n[a].fFamily+"; font-style: normal; src: url('"+n[a].fPath+"');}",s.appendChild(h)}else if("g"===n[a].fOrigin||1===n[a].origin){var l=createTag("link");l.type="text/css",l.rel="stylesheet",l.href=n[a].fPath,s.appendChild(l)}else if("t"===n[a].fOrigin||2===n[a].origin){var p=createTag("script");p.setAttribute("src",n[a].fPath),s.appendChild(p)}}else n[a].loaded=!0;n[a].helper=i(s,n[a]),this.fonts.push(n[a])}setTimeout(function(){e.bind(this)()}.bind(this),100)}function s(t){if(t){this.chars||(this.chars=[]);var e,i,r,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(i=0,r=!1;i<a;)this.chars[i].style===t[e].style&&this.chars[i].fFamily===t[e].fFamily&&this.chars[i].ch===t[e].ch&&(r=!0),i+=1;r||(this.chars.push(t[e]),a+=1)}}}function a(t,e,i){for(var r=0,s=this.chars.length;r<s;){if(this.chars[r].ch===t&&this.chars[r].style===e&&this.chars[r].fFamily===i)return this.chars[r];r+=1}return console&&console.warn&&console.warn("Missing character from exported characters list: ",t,e,i),p}function n(t,e,i){var r=this.getFontByName(e),s=r.helper;return s.measureText(t).width*i/100}function o(t){for(var e=0,i=this.fonts.length;e<i;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return"sans-serif"}function h(){return m}var l=5e3,p={w:0,size:0,shapes:[]},m=[];m=m.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var f=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.loaded=!1,this.initTime=Date.now()};return f.getCombinedCharacterCodes=h,f.prototype.addChars=s,f.prototype.addFonts=r,f.prototype.getCharData=a,f.prototype.getFontByName=o,f.prototype.measureText=n,f}(),PropertyFactory=function(){function t(t,s){var a,n=this.offsetTime;"multidimensional"===this.propType&&(a=createTypedArray("float32",this.pv.length));for(var o,h,l=s.lastIndex,p=l,m=this.keyframes.length-1,f=!0;f;){if(o=this.keyframes[p],h=this.keyframes[p+1],p==m-1&&t>=h.t-n){o.h&&(o=h),l=0;break}if(h.t-n>t){l=p;break}p<m-1?p+=1:(l=0,f=!1)}var c,d,u,y,g,v;if(o.to){o.bezierData||bez.buildBezierData(o);var b=o.bezierData;if(t>=h.t-n||t<o.t-n){var E=t>=h.t-n?b.points.length-1:0;for(d=b.points[E].point.length,c=0;c<d;c+=1)a[c]=b.points[E].point[c];s._lastBezierData=null}else{o.__fnct?v=o.__fnct:(v=BezierFactory.getBezierEasing(o.o.x,o.o.y,o.i.x,o.i.y,o.n).get,o.__fnct=v),u=v((t-(o.t-n))/(h.t-n-(o.t-n)));var x,S=b.segmentLength*u,P=s.lastFrame<t&&s._lastBezierData===b?s._lastAddedLength:0;for(g=s.lastFrame<t&&s._lastBezierData===b?s._lastPoint:0,f=!0,y=b.points.length;f;){if(P+=b.points[g].partialLength,0===S||0===u||g==b.points.length-1){for(d=b.points[g].point.length,c=0;c<d;c+=1)a[c]=b.points[g].point[c];break}if(S>=P&&S<P+b.points[g+1].partialLength){for(x=(S-P)/b.points[g+1].partialLength,d=b.points[g].point.length,c=0;c<d;c+=1)a[c]=b.points[g].point[c]+(b.points[g+1].point[c]-b.points[g].point[c])*x;break}g<y-1?g+=1:f=!1}s._lastPoint=g,s._lastAddedLength=P-b.points[g].partialLength,s._lastBezierData=b}}else{var _,C,A,k,M;if(m=o.s.length,this.sh&&1!==o.h)if(t>=h.t-n)a[0]=o.e[0],a[1]=o.e[1],a[2]=o.e[2];else if(t<=o.t-n)a[0]=o.s[0],a[1]=o.s[1],a[2]=o.s[2];else{var T=r(o.s),D=r(o.e),F=(t-(o.t-n))/(h.t-n-(o.t-n));i(a,e(T,D,F))}else for(p=0;p<m;p+=1)1!==o.h&&(t>=h.t-n?u=1:t<o.t-n?u=0:(o.o.x.constructor===Array?(o.__fnct||(o.__fnct=[]),o.__fnct[p]?v=o.__fnct[p]:(_=o.o.x[p]||o.o.x[0],C=o.o.y[p]||o.o.y[0],A=o.i.x[p]||o.i.x[0],k=o.i.y[p]||o.i.y[0],v=BezierFactory.getBezierEasing(_,C,A,k).get,o.__fnct[p]=v)):o.__fnct?v=o.__fnct:(_=o.o.x,C=o.o.y,A=o.i.x,k=o.i.y,v=BezierFactory.getBezierEasing(_,C,A,k).get,o.__fnct=v),u=v((t-(o.t-n))/(h.t-n-(o.t-n))))),M=1===o.h?o.s[p]:o.s[p]+(o.e[p]-o.s[p])*u,1===m?a=M:a[p]=M}return s.lastIndex=l,a}function e(t,e,i){var r,s,a,n,o,h=[],l=t[0],p=t[1],m=t[2],f=t[3],c=e[0],d=e[1],u=e[2],y=e[3];return s=l*c+p*d+m*u+f*y,s<0&&(s=-s,c=-c,d=-d,u=-u,y=-y),1-s>1e-6?(r=Math.acos(s),a=Math.sin(r),n=Math.sin((1-i)*r)/a,o=Math.sin(i*r)/a):(n=1-i,o=i),h[0]=n*l+o*c,h[1]=n*p+o*d,h[2]=n*m+o*u,h[3]=n*f+o*y,h}function i(t,e){var i=e[0],r=e[1],s=e[2],a=e[3],n=Math.atan2(2*r*a-2*i*s,1-2*r*r-2*s*s),o=Math.asin(2*i*r+2*s*a),h=Math.atan2(2*i*a-2*r*s,1-2*i*i-2*s*s);t[0]=n/degToRads,t[1]=o/degToRads,t[2]=h/degToRads}function r(t){var e=t[0]*degToRads,i=t[1]*degToRads,r=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(i/2),n=Math.cos(r/2),o=Math.sin(e/2),h=Math.sin(i/2),l=Math.sin(r/2),p=s*a*n-o*h*l,m=o*h*n+s*a*l,f=o*a*n+s*h*l,c=s*h*n-o*a*l;return[m,f,c,p]}function s(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==c&&(this._caching.lastFrame>=i&&t>=i||this._caching.lastFrame<e&&t<e))){this._caching.lastIndex=this._caching.lastFrame<t?this._caching.lastIndex:0;var r=this.interpolateValue(t,this._caching);this.pv=r}return this._caching.lastFrame=t,this.pv}function a(t){var e;if("unidimensional"===this.propType)e=t*this.mult,Math.abs(this.v-e)>1e-5&&(this.v=e,this._mdf=!0);else for(var i=0,r=this.v.length;i<r;)e=t[i]*this.mult,Math.abs(this.v[i]-e)>1e-5&&(this.v[i]=e,this._mdf=!0),i+=1}function n(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length){if(this.lock)return void this.setVValue(this.pv);this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,e,i,r){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=r,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.addEffect=o}function l(t,e,i,r){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=r,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var s,h=e.k.length;this.v=createTypedArray("float32",h),this.pv=createTypedArray("float32",h);createTypedArray("float32",h);for(this.vel=createTypedArray("float32",h),s=0;s<h;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=n,this.setVValue=a,this.addEffect=o}function p(e,i,r,h){this.propType="unidimensional",this.keyframes=i.k,this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:c,lastIndex:0,value:0},this.k=!0,this.kf=!0,this.data=i,this.mult=r||1,this.elem=e,this.container=h,this.comp=e.comp,this.v=c,this.pv=c,this._isFirstFrame=!0,this.getValue=n,this.setVValue=a,this.interpolateValue=t,this.effectsSequence=[s.bind(this)],this.addEffect=o}function m(e,i,r,h){this.propType="multidimensional";var l,p,m,f,d,u=i.k.length;for(l=0;l<u-1;l+=1)i.k[l].to&&i.k[l].s&&i.k[l].e&&(p=i.k[l].s,m=i.k[l].e,f=i.k[l].to,d=i.k[l].ti,(2===p.length&&(p[0]!==m[0]||p[1]!==m[1])&&bez.pointOnLine2D(p[0],p[1],m[0],m[1],p[0]+f[0],p[1]+f[1])&&bez.pointOnLine2D(p[0],p[1],m[0],m[1],m[0]+d[0],m[1]+d[1])||3===p.length&&(p[0]!==m[0]||p[1]!==m[1]||p[2]!==m[2])&&bez.pointOnLine3D(p[0],p[1],p[2],m[0],m[1],m[2],p[0]+f[0],p[1]+f[1],p[2]+f[2])&&bez.pointOnLine3D(p[0],p[1],p[2],m[0],m[1],m[2],m[0]+d[0],m[1]+d[1],m[2]+d[2]))&&(i.k[l].to=null,i.k[l].ti=null),p[0]===m[0]&&p[1]===m[1]&&0===f[0]&&0===f[1]&&0===d[0]&&0===d[1]&&(2===p.length||p[2]===m[2]&&0===f[2]&&0===d[2])&&(i.k[l].to=null,i.k[l].ti=null));this.effectsSequence=[s.bind(this)],this.keyframes=i.k,this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=e,this.container=h,this.comp=e.comp,this.getValue=n,this.setVValue=a,this.interpolateValue=t,this.frameId=-1;var y=i.k[0].s.length;for(this.v=createTypedArray("float32",y),this.pv=createTypedArray("float32",y),l=0;l<y;l+=1)this.v[l]=c,this.pv[l]=c;this._caching={lastFrame:c,lastIndex:0,value:createTypedArray("float32",y)},this.addEffect=o}function f(t,e,i,r,s){var a;if(0===e.a)a=0===i?new h(t,e,r,s):new l(t,e,r,s);else if(1===e.a)a=0===i?new p(t,e,r,s):new m(t,e,r,s);else if(e.k.length)if("number"==typeof e.k[0])a=new l(t,e,r,s);else switch(i){case 0:a=new p(t,e,r,s);break;case 1:a=new m(t,e,r,s)}else a=new h(t,e,r,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}var c=initialDefaultFrame,d={getProp:f};return d}(),TransformPropertyFactory=function(){function t(){var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)}function e(t){this.searchDynamicProperties(),this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function i(t){if(this.elem.globalData.frameId!==this.frameId){if(this._mdf=!1,this.searchDynamicProperties(),this._mdf||t){if(this.v.reset(),this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented&&this.p.keyframes&&this.p.getValueAtTime){var e,i;this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(e=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/this.elem.globalData.frameRate,0),i=this.p.getValueAtTime(this.p.keyframes[0].t/this.elem.globalData.frameRate,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(e=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/this.elem.globalData.frameRate,0),i=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.01)/this.elem.globalData.frameRate,0)):(e=this.p.pv,i=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/this.elem.globalData.frameRate,this.p.offsetTime)),this.v.rotate(-Math.atan2(e[1]-i[1],e[0]-i[0]))}this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function r(){this.inverted=!0,this.iv=new Matrix,this.k||(this.data.p.s?this.iv.translate(this.px.v,this.py.v,-this.pz.v):this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]),this.r?this.iv.rotate(-this.r.v):this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.s&&this.iv.scale(this.s.v[0],this.s.v[1],1),this.a&&this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]))}function s(){}function a(t,e,i){if(this.elem=t,this.frameId=-1,this.propType="transform",this.container=i||t,this.dynamicProperties=[],this._mdf=!1,this.data=e,this.v=new Matrix,e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p,1,0,this),e.r)this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this);else if(e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var r,s=e.or.k.length;for(r=0;r<s;r+=1)e.or.k[r].to=e.or.k[r].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),e.a&&(this.a=PropertyFactory.getProp(t,e.a,1,0,this)),e.s&&(this.s=PropertyFactory.getProp(t,e.s,1,.01,this)),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this.dynamicProperties.length||this.getValue(!0)}function n(t,e,i){return new a(t,e,i)}return a.prototype={applyToMatrix:e,searchDynamicProperties:t,getValue:i,setInverted:r,autoOrient:s,addDynamicProperty:addDynamicProperty},{getTransformProperty:n}}();ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var i=0;i<e;)this.v[i]=point_pool.newElement(),this.o[i]=point_pool.newElement(),this.i[i]=point_pool.newElement(),i+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,i,r,s){var a;switch(this._length=Math.max(this._length,r+1),this._length>=this._maxLength&&this.doubleArrayLength(),i){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[r]||a[r]&&!s)&&(a[r]=point_pool.newElement()),a[r][0]=t,a[r][1]=e},ShapePath.prototype.setTripleAt=function(t,e,i,r,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(i,r,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,i=this.o,r=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],r[0][0],r[0][1],i[0][0],i[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],r[n][0],r[n][1],i[n][0],i[n][1],a,!1),n-=1;return t};var ShapePropertyFactory=function(){function t(t,e,i){var r,s,a,n,o,h,l,p,m,f=i.lastIndex;if(t<this.keyframes[0].t-this.offsetTime)r=this.keyframes[0].s[0],a=!0,f=0;else if(t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime)r=1===this.keyframes[this.keyframes.length-2].h?this.keyframes[this.keyframes.length-1].s[0]:this.keyframes[this.keyframes.length-2].e[0],a=!0;else{for(var c,d,u=f,y=this.keyframes.length-1,g=!0;g&&(c=this.keyframes[u],d=this.keyframes[u+1],!(d.t-this.offsetTime>t));)u<y-1?u+=1:g=!1;if(a=1===c.h,f=u,!a){if(t>=d.t-this.offsetTime)p=1;else if(t<c.t-this.offsetTime)p=0;else{var v;c.__fnct?v=c.__fnct:(v=BezierFactory.getBezierEasing(c.o.x,c.o.y,c.i.x,c.i.y).get,c.__fnct=v),p=v((t-(c.t-this.offsetTime))/(d.t-this.offsetTime-(c.t-this.offsetTime)))}s=c.e[0]}r=c.s[0]}for(h=e._length,l=r.i[0].length,i.lastIndex=f,n=0;n<h;n+=1)for(o=0;o<l;o+=1)m=a?r.i[n][o]:r.i[n][o]+(s.i[n][o]-r.i[n][o])*p,e.i[n][o]=m,m=a?r.o[n][o]:r.o[n][o]+(s.o[n][o]-r.o[n][o])*p,e.o[n][o]=m,m=a?r.v[n][o]:r.v[n][o]+(s.v[n][o]-r.v[n][o])*p,e.v[n][o]=m}function e(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,r=this._caching.lastFrame;return r!==f&&(r<e&&t<e||r>i&&t>i)||(this._caching.lastIndex=r<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}function i(){return this.v}function r(){this.paths=this.localShapeCollection}function s(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var i,r=t._length;for(i=0;i<r;i+=1)if(t.v[i][0]!==e.v[i][0]||t.v[i][1]!==e.v[i][1]||t.o[i][0]!==e.o[i][0]||t.o[i][1]!==e.o[i][1]||t.i[i][0]!==e.i[i][0]||t.i[i][1]!==e.i[i][1])return!1;return!0}function a(){if(!this.lock&&this.elem.globalData.frameId!==this.frameId){this.lock=!0,this.frameId=this.elem.globalData.frameId,this._mdf=!1;var t,e=this.kf?this.pv:this.data.k,i=this.effectsSequence.length;for(t=0;t<i;t+=1)e=this.effectsSequence[t](e);s(this.v,e)||(this.v=shape_pool.clone(e),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection),this.lock=!1}}function n(t,e,s){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var a=3===s?e.pt.k:e.ks.k;this.v=shape_pool.clone(a),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=r,this.effectsSequence=[i.bind(this)]}function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function h(t,i,s){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===s?i.pt.k:i.ks.k,this.k=!0,this.kf=!0;var a=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,a),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=f,this.reset=r,this._caching={lastFrame:f,lastIndex:0},this.effectsSequence=[e.bind(this)]}function l(t,e,i){var r;if(3===i||4===i){var s=3===i?e.pt:e.ks,a=s.k;r=1===s.a||a.length?new h(t,e,i):new n(t,e,i)}else 5===i?r=new u(t,e):6===i?r=new c(t,e):7===i&&(r=new d(t,e));return r.k&&t.addDynamicProperty(r),r}function p(){return n}function m(){return h}var f=-999999;n.prototype.interpolateShape=t,n.prototype.getValue=a,n.prototype.getValue=a,n.prototype.addEffect=o,h.prototype.getValue=a,h.prototype.interpolateShape=t,h.prototype.addEffect=o;var c=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.dynamicProperties=[],this.elem=t,this.container=t,this.comp=t.comp,this.frameId=-1,this._mdf=!1,this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:this.convertEllToPath()}var e=roundCorner;return t.prototype={reset:r,getValue:function(t){var e,i=this.dynamicProperties.length;if(this.elem.globalData.frameId!==this.frameId){for(this._mdf=!1,this.frameId=this.elem.globalData.frameId,e=0;e<i;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e]._mdf&&(this._mdf=!0);this._mdf&&this.convertEllToPath()}},addDynamicProperty:addDynamicProperty,convertEllToPath:function(){var t=this.p.v[0],i=this.p.v[1],r=this.s.v[0]/2,s=this.s.v[1]/2,a=3!==this.d,n=this.v;n.v[0][0]=t,n.v[0][1]=i-s,n.v[1][0]=a?t+r:t-r,n.v[1][1]=i,n.v[2][0]=t,n.v[2][1]=i+s,n.v[3][0]=a?t-r:t+r,n.v[3][1]=i,n.i[0][0]=a?t-r*e:t+r*e,n.i[0][1]=i-s,n.i[1][0]=a?t+r:t-r,n.i[1][1]=i-s*e,n.i[2][0]=a?t+r*e:t-r*e,n.i[2][1]=i+s,n.i[3][0]=a?t-r:t+r,n.i[3][1]=i+s*e,n.o[0][0]=a?t+r*e:t-r*e,n.o[0][1]=i-s,n.o[1][0]=a?t+r:t-r,n.o[1][1]=i+s*e,n.o[2][0]=a?t-r*e:t+r*e,n.o[2][1]=i+s,n.o[3][0]=a?t-r:t+r,n.o[3][1]=i-s*e}},t}(),d=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.container=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.dynamicProperties=[],this._mdf=!1,1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:this.convertToPath()}return t.prototype={addDynamicProperty:addDynamicProperty,reset:r,getValue:function(){if(this.elem.globalData.frameId!==this.frameId){this._mdf=!1,this.frameId=this.elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0);this._mdf&&this.convertToPath()}},convertStarToPath:function(){var t,e,i,r,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*s),f=2*Math.PI*h/(2*s),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<s;t+=1){e=n?o:h,i=n?l:p,r=n?m:f;var u=e*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*r*i*d,y-v*r*i*d,u+g*r*i*d,y+v*r*i*d,t,!0),n=!n,c+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),i=2*Math.PI/e,r=this.or.v,s=this.os.v,a=2*Math.PI*r/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){
var h=r*Math.cos(n),l=r*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*s*o,l-m*a*s*o,h+p*a*s*o,l+m*a*s*o,t,!0),n+=i*o}this.paths.length=0,this.paths[0]=this.v}},t}(),u=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.container=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.dynamicProperties=[],this._mdf=!1,this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:this.convertRectToPath()}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],i=this.s.v[0]/2,r=this.s.v[1]/2,s=bm_min(i,r,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+i,e-r+s,t+i,e-r+s,t+i,e-r+a,0,!0),this.v.setTripleAt(t+i,e+r-s,t+i,e+r-a,t+i,e+r-s,1,!0),0!==s?(this.v.setTripleAt(t+i-s,e+r,t+i-s,e+r,t+i-a,e+r,2,!0),this.v.setTripleAt(t-i+s,e+r,t-i+a,e+r,t-i+s,e+r,3,!0),this.v.setTripleAt(t-i,e+r-s,t-i,e+r-s,t-i,e+r-a,4,!0),this.v.setTripleAt(t-i,e-r+s,t-i,e-r+a,t-i,e-r+s,5,!0),this.v.setTripleAt(t-i+s,e-r,t-i+s,e-r,t-i+a,e-r,6,!0),this.v.setTripleAt(t+i-s,e-r,t+i-a,e-r,t+i-s,e-r,7,!0)):(this.v.setTripleAt(t-i,e+r,t-i+a,e+r,t-i,e+r,2),this.v.setTripleAt(t-i,e-r,t-i,e-r+a,t-i,e-r,3))):(this.v.setTripleAt(t+i,e-r+s,t+i,e-r+a,t+i,e-r+s,0,!0),0!==s?(this.v.setTripleAt(t+i-s,e-r,t+i-s,e-r,t+i-a,e-r,1,!0),this.v.setTripleAt(t-i+s,e-r,t-i+a,e-r,t-i+s,e-r,2,!0),this.v.setTripleAt(t-i,e-r+s,t-i,e-r+s,t-i,e-r+a,3,!0),this.v.setTripleAt(t-i,e+r-s,t-i,e+r-a,t-i,e+r-s,4,!0),this.v.setTripleAt(t-i+s,e+r,t-i+s,e+r,t-i+a,e+r,5,!0),this.v.setTripleAt(t+i-s,e+r,t+i-a,e+r,t+i-s,e+r,6,!0),this.v.setTripleAt(t+i,e+r-s,t+i,e+r-s,t+i,e+r-a,7,!0)):(this.v.setTripleAt(t-i,e-r,t-i+a,e-r,t-i,e-r,1,!0),this.v.setTripleAt(t-i,e+r,t-i,e+r-a,t-i,e+r,2,!0),this.v.setTripleAt(t+i,e+r,t+i-a,e+r,t+i,e+r,3,!0)))},getValue:function(t){if(this.elem.globalData.frameId!==this.frameId){this._mdf=!1,this.frameId=this.elem.globalData.frameId;var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e]._mdf&&(this._mdf=!0);this._mdf&&this.convertRectToPath()}},addDynamicProperty:addDynamicProperty,reset:r},t}(),y={};return y.getShapeProp=l,y.getConstructorFunction=p,y.getKeyframedConstructorFunction=m,y}(),ShapeModifiers=function(){function t(t,e){r[t]||(r[t]=e)}function e(t,e,i){return new r[t](e,i)}var i={},r={};return i.registerModifier=t,i.getModifier=e,i}();ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){var e={shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e)}},ShapeModifier.prototype.init=function(t,e){this.dynamicProperties=[],this.shapes=[],this.elem=t,this.container=t,this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this._mdf=!1,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){if(this.elem.globalData.frameId!==this.frameId){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0);this.frameId=this.elem.globalData.frameId}},ShapeModifier.prototype.addDynamicProperty=addDynamicProperty,extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,i,r,s){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1)if(o=a[n],o.e*s<r||o.s*s>r+i);else{var p,m;p=o.s*s<=r?0:(o.s*s-r)/i,m=o.e*s>=r+i?1:(o.e*s-r)/i,h.push([p,m])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,i=t.length;for(e=0;e<i;e+=1)segments_length_pool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,i;if(this._mdf||t){var r=this.o.v%360/360;if(r<0&&(r+=1),e=this.s.v+r,i=this.e.v+r,e>i){var s=e;e=i,i=s}this.sValue=e,this.eValue=i}else e=this.sValue,i=this.eValue;var a,n,o,h,l,p,m,f=this.shapes.length,c=0;if(i===e)for(n=0;n<f;n+=1)this.shapes[n].localShapeCollection.releaseShapes(),this.shapes[n].shape._mdf=!0,this.shapes[n].shape.paths=this.shapes[n].localShapeCollection;else if(1===i&&0===e||0===i&&1===e){if(this._mdf)for(n=0;n<f;n+=1)this.shapes[n].shape._mdf=!0}else{var d,u,y=[];for(n=0;n<f;n+=1)if(d=this.shapes[n],d.shape._mdf||this._mdf||t||2===this.m){if(a=d.shape.paths,h=a._length,m=0,!d.shape._mdf&&d.pathsData.length)m=d.totalShapeLength;else{for(l=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)p=bez.getSegmentsLength(a.shapes[o]),l.push(p),m+=p.totalLength;d.totalShapeLength=m,d.pathsData=l}c+=m,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=i,E=0;for(n=f-1;n>=0;n-=1)if(d=this.shapes[n],d.shape._mdf){for(u=d.localShapeCollection,u.releaseShapes(),2===this.m&&f>1?(g=this.calculateShapeEdges(e,i,d.totalShapeLength,E,c),E+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):v>=1?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var x=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(d.shape.v.c){var S=x.pop();this.addPaths(x,u),x=this.addShapes(d,y[1],S)}else this.addPaths(x,u),x=this.addShapes(d,y[1]);this.addPaths(x,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var i,r=t.length;for(i=0;i<r;i+=1)e.addShape(t[i])},TrimModifier.prototype.addSegment=function(t,e,i,r,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(i[0],i[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(r[0],r[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,i,r){e.setXYAt(t[1],t[5],"o",i),e.setXYAt(t[2],t[6],"i",i+1),r&&e.setXYAt(t[0],t[4],"v",i),e.setXYAt(t[3],t[7],"v",i+1)},TrimModifier.prototype.addShapes=function(t,e,i){var r,s,a,n,o,h,l,p,m=t.pathsData,f=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(i?(o=i._length,p=i._length):(i=shape_pool.newElement(),o=0,p=0),u.push(i),r=0;r<c;r+=1){for(h=m[r].lengths,i.c=f[r].c,a=f[r].c?h.length:h.length+1,s=1;s<a;s+=1)if(n=h[s-1],d+n.addedLength<e.s)d+=n.addedLength,i.c=!1;else{if(d>e.e){i.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[r].v[s-1],f[r].o[s-1],f[r].i[s],f[r].v[s],i,o,y),y=!1):(l=bez.getNewSegment(f[r].v[s-1],f[r].v[s],f[r].o[s-1],f[r].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(l,i,o,y),y=!1,i.c=!1),d+=n.addedLength,o+=1}if(f[r].c){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[r].v[s-1],f[r].o[s-1],f[r].i[0],f[r].v[0],i,o,y),y=!1):(l=bez.getNewSegment(f[r].v[s-1],f[r].v[0],f[r].o[s-1],f[r].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(l,i,o,y),y=!1,i.c=!1)}else i.c=!1;d+=n.addedLength,o+=1}if(i._length&&(i.setXYAt(i.v[p][0],i.v[p][1],"i",p),i.setXYAt(i.v[i._length-1][0],i.v[i._length-1][1],"o",i._length-1)),d>e.e)break;r<c-1&&(i=shape_pool.newElement(),y=!0,u.push(i),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this)},RoundCornersModifier.prototype.processPath=function(t,e){var i=shape_pool.newElement();i.c=t.c;var r,s,a,n,o,h,l,p,m,f,c,d,u,y=t._length,g=0;for(r=0;r<y;r+=1)s=t.v[r],n=t.o[r],a=t.i[r],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=d=s[0]+(o[0]-s[0])*l,m=u=s[1]-(s[1]-o[1])*l,f=p-(p-s[0])*roundCorner,c=m-(m-s[1])*roundCorner,i.setTripleAt(p,m,f,c,d,u,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=f=s[0]+(o[0]-s[0])*l,m=c=s[1]+(o[1]-s[1])*l,d=p-(p-s[0])*roundCorner,u=m-(m-s[1])*roundCorner,i.setTripleAt(p,m,f,c,d,u,g),g+=1):(i.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g),g+=1):(i.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(t){var e,i,r,s,a=this.shapes.length,n=this.rd.v;if(0!==n){var o,h,l;for(i=0;i<a;i+=1){if(o=this.shapes[i],h=o.shape.paths,l=o.localShapeCollection,o.shape._mdf||this._mdf||t)for(l.releaseShapes(),o.shape._mdf=!0,e=o.shape.paths.shapes,s=o.shape.paths._length,r=0;r<s;r+=1)l.addShape(this.processPath(e[r],n));o.shape.paths=o.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,i,r,s,a){var n=a?-1:1,o=r.s.v[0]+(1-r.s.v[0])*(1-s),h=r.s.v[1]+(1-r.s.v[1])*(1-s);t.translate(r.p.v[0]*n*s,r.p.v[1]*n*s,r.p.v[2]),e.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),e.rotate(-r.r.v*n*s),e.translate(r.a.v[0],r.a.v[1],r.a.v[2]),i.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),i.scale(a?1/o:o,a?1/h:h),i.translate(r.a.v[0],r.a.v[1],r.a.v[2])},RepeaterModifier.prototype.init=function(t,e,i,r){this.elem=t,this.container=t,this.arr=e,this.pos=i,this.elemsData=r,this._currentCopies=0,this._elements=[],this._groups=[],this.dynamicProperties=[],this.frameId=-1,this.initModifierProperties(t,e[i]);for(var s=0;i>0;)i-=1,this._elements.unshift(e[i]),s+=1;this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,i=t.length;for(e=0;e<i;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=(t.length,JSON.parse(JSON.stringify(t)));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var i,r=t.length;for(i=0;i<r;i+=1)t[i]._render=e,"gr"===t[i].ty&&this.changeGroupRender(t[i].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,i,r,s,a;if(this._mdf||t){var n=Math.ceil(this.c.v);if(this._groups.length<n){for(;this._groups.length<n;){var o={it:this.cloneElements(this._elements),ty:"gr"};o.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:0,ix:6,k:0},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,o),this._groups.splice(0,0,o),this._currentCopies+=1}this.elem.reloadShapes()}a=0;var h;for(r=0;r<=this._groups.length-1;r+=1)h=a<n,this._groups[r]._render=h,this.changeGroupRender(this._groups[r].it,h),a+=1;this._currentCopies=n;var l=this.o.v,p=l%1,m=l>0?Math.floor(l):Math.ceil(l),f=(this.tr.v.props,this.pMatrix.props),c=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var u=0;if(l>0){for(;u<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),u+=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,p,!1),u+=p)}else if(l<0){for(;u>m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),u-=1;p&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-p,!0),u-=p)}r=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;for(var y,g;a;){if(e=this.elemsData[r].it,i=e[e.length-1].transform.mProps.v.props,g=i.length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,0!==u){for((0!==r&&1===s||r!==this._currentCopies-1&&s===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),y=0;y<g;y+=1)i[y]=this.matrix.props[y];this.matrix.reset()}else for(this.matrix.reset(),y=0;y<g;y+=1)i[y]=this.matrix.props[y];u+=1,a-=1,r+=s}}else for(a=this._currentCopies,r=0,s=1;a;)e=this.elemsData[r].it,i=e[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,r+=s},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0},DashProperty.prototype.addDynamicProperty=addDynamicProperty,DashProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId||t){var e=0,i=this.dataProps.length;for(this._mdf=t,this.frameId=this.elem.globalData.frameId;e<i;)this.dataProps[e].p.getValue(),this.dataProps[e].p._mdf&&(this._mdf=!0),e+=1;if(this._mdf)for("svg"===this.renderer&&(this.dashStr=""),e=0;e<i;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},GradientProperty.prototype.addDynamicProperty=function(t){this.container.addDynamicProperty(this)},GradientProperty.prototype.comparePoints=function(t,e){for(var i,r=0,s=this.o.length/2;r<s;){if(i=Math.abs(t[4*r]-t[4*e+2*r]),i>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,i,r,s=4*this.data.p;for(e=0;e<s;e+=1)i=e%4===0?100:255,r=Math.round(this.prop.v[e]*i),this.c[e]!==r&&(this.c[e]=r,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)i=e%2===0?100:1,r=e%2===0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==r&&(this.o[e-4*this.data.p]=r,this._omdf=!t);this._mdf=!t}};var ImagePreloader=function(){function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function e(t){var e="";if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e}function i(e){var i=createTag("img");i.addEventListener("load",t.bind(this),!1),i.addEventListener("error",t.bind(this),!1),i.src=e}function r(t,r){this.imagesLoadedCb=r,this.totalAssets=t.length;var s;for(s=0;s<this.totalAssets;s+=1)t[s].layers||(i.bind(this)(e.bind(this)(t[s])),this.totalImages+=1)}function s(t){this.path=t||""}function a(t){this.assetsPath=t||""}function n(){this.imagesLoadedCb=null}return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=s,this.destroy=n,this.assetsPath="",this.path="",this.totalAssets=0,this.totalImages=0,this.loadedAssets=0,this.imagesLoadedCb=null}}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){function t(t){var e=createNS("filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e}function e(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}var i={};return i.createFilter=t,i.createAlphaToLuminanceFilter=e,i}();TextAnimatorProperty.prototype.addDynamicProperty=addDynamicProperty,TextAnimatorProperty.prototype.searchProperties=function(){var t,e,i=this._textData.a.length,r=PropertyFactory.getProp;for(t=0;t<i;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={f:r(this._elem,this._textData.p.f,0,0,this),l:r(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=r(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var i,r,s,a,n,o,h,l,p,m,f,c,d,u,y,g,v,b,E,x=this._moreOptions.alignment.v,S=this._animatorsData,P=this._textData,_=this.mHelper,C=this._renderType,A=this.renderedLetters.length,k=(this.data,t.l);if(this._hasMaskedPath){if(E=this._pathData.m,!this._pathData.n||this._pathData._mdf){var M=E.v;this._pathData.r&&(M=M.reverse()),n={tLength:0,segments:[]},a=M._length-1;var T;for(g=0,s=0;s<a;s+=1)T={s:M.v[s],e:M.v[s+1],to:[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],ti:[M.i[s+1][0]-M.v[s+1][0],M.i[s+1][1]-M.v[s+1][1]]},bez.buildBezierData(T),n.tLength+=T.bezierData.segmentLength,n.segments.push(T),g+=T.bezierData.segmentLength;s=a,E.v.c&&(T={s:M.v[s],e:M.v[0],to:[M.o[s][0]-M.v[s][0],M.o[s][1]-M.v[s][1]],ti:[M.i[0][0]-M.v[0][0],M.i[0][1]-M.v[0][1]]},bez.buildBezierData(T),n.tLength+=T.bezierData.segmentLength,n.segments.push(T),g+=T.bezierData.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,f=0,m=1,l=0,p=!0,u=n.segments,o<0&&E.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),f=u.length-1,d=u[f].bezierData.points,m=d.length-1;o<0;)o+=d[m].partialLength,m-=1,m<0&&(f-=1,d=u[f].bezierData.points,m=d.length-1);d=u[f].bezierData.points,c=d[m-1],h=d[m],y=h.partialLength}a=k.length,i=0,r=0;var D,F,w,I,V,R=1.2*t.finalSize*.714,B=!0;I=S.length;var L,G,z,N,O,H,j,W,q,Y,X,J,Z,K=-1,U=o,Q=f,$=m,tt=-1,et=0,it="",rt=this.defaultPropsArray;if(2===t.j||1===t.j){var st=0,at=0,nt=2===t.j?-.5:-1,ot=0,ht=!0;for(s=0;s<a;s+=1)if(k[s].n){for(st&&(st+=at);ot<s;)k[ot].animatorJustifyOffset=st,ot+=1;st=0,ht=!0}else{for(w=0;w<I;w+=1)D=S[w].a,D.t.propType&&(ht&&2===t.j&&(at+=D.t.v*nt),F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),st+=L.length?D.t.v*L[0]*nt:D.t.v*L*nt);ht=!1}for(st&&(st+=at);ot<s;)k[ot].animatorJustifyOffset=st,ot+=1}for(s=0;s<a;s+=1){if(_.reset(),O=1,k[s].n)i=0,r+=t.yOffset,r+=B?1:0,o=U,B=!1,et=0,this._hasMaskedPath&&(f=Q,m=$,d=u[f].bezierData.points,c=d[m-1],h=d[m],y=h.partialLength,l=0),Z=Y=J=it="",rt=this.defaultPropsArray;else{if(this._hasMaskedPath){if(tt!==k[s].line){switch(t.j){case 1:o+=g-t.lineWidths[k[s].line];break;case 2:o+=(g-t.lineWidths[k[s].line])/2}tt=k[s].line}K!==k[s].ind&&(k[K]&&(o+=k[K].extra),o+=k[s].an/2,K=k[s].ind),o+=x[0]*k[s].an/200;var lt=0;for(w=0;w<I;w+=1)D=S[w].a,D.p.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),lt+=L.length?D.p.v[0]*L[0]:D.p.v[0]*L),D.a.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),lt+=L.length?D.a.v[0]*L[0]:D.a.v[0]*L);for(p=!0;p;)l+y>=o+lt||!d?(v=(o+lt-l)/h.partialLength,z=c.point[0]+(h.point[0]-c.point[0])*v,N=c.point[1]+(h.point[1]-c.point[1])*v,_.translate(-x[0]*k[s].an/200,-(x[1]*R/100)),p=!1):d&&(l+=h.partialLength,m+=1,m>=d.length&&(m=0,f+=1,u[f]?d=u[f].bezierData.points:E.v.c?(m=0,f=0,d=u[f].bezierData.points):(l-=h.partialLength,d=null)),d&&(c=h,h=d[m],y=h.partialLength));G=k[s].an/2-k[s].add,_.translate(-G,0,0)}else G=k[s].an/2-k[s].add,_.translate(-G,0,0),_.translate(-x[0]*k[s].an/200,-x[1]*R/100,0);for(et+=k[s].l/2,w=0;w<I;w+=1)D=S[w].a,D.t.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),0===i&&0===t.j||(this._hasMaskedPath?o+=L.length?D.t.v*L[0]:D.t.v*L:i+=L.length?D.t.v*L[0]:D.t.v*L));for(et+=k[s].l/2,t.strokeWidthAnim&&(j=t.sw||0),t.strokeColorAnim&&(H=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(W=[t.fc[0],t.fc[1],t.fc[2]]),w=0;w<I;w+=1)D=S[w].a,D.a.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),L.length?_.translate(-D.a.v[0]*L[0],-D.a.v[1]*L[1],D.a.v[2]*L[2]):_.translate(-D.a.v[0]*L,-D.a.v[1]*L,D.a.v[2]*L));for(w=0;w<I;w+=1)D=S[w].a,D.s.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),L.length?_.scale(1+(D.s.v[0]-1)*L[0],1+(D.s.v[1]-1)*L[1],1):_.scale(1+(D.s.v[0]-1)*L,1+(D.s.v[1]-1)*L,1));for(w=0;w<I;w+=1){if(D=S[w].a,F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),D.sk.propType&&(L.length?_.skewFromAxis(-D.sk.v*L[0],D.sa.v*L[1]):_.skewFromAxis(-D.sk.v*L,D.sa.v*L)),D.r.propType&&(L.length?_.rotateZ(-D.r.v*L[2]):_.rotateZ(-D.r.v*L)),D.ry.propType&&(L.length?_.rotateY(D.ry.v*L[1]):_.rotateY(D.ry.v*L)),D.rx.propType&&(L.length?_.rotateX(D.rx.v*L[0]):_.rotateX(D.rx.v*L)),D.o.propType&&(O+=L.length?(D.o.v*L[0]-O)*L[0]:(D.o.v*L-O)*L),t.strokeWidthAnim&&D.sw.propType&&(j+=L.length?D.sw.v*L[0]:D.sw.v*L),t.strokeColorAnim&&D.sc.propType)for(q=0;q<3;q+=1)L.length?H[q]=H[q]+(D.sc.v[q]-H[q])*L[0]:H[q]=H[q]+(D.sc.v[q]-H[q])*L;if(t.fillColorAnim&&t.fc){if(D.fc.propType)for(q=0;q<3;q+=1)L.length?W[q]=W[q]+(D.fc.v[q]-W[q])*L[0]:W[q]=W[q]+(D.fc.v[q]-W[q])*L;D.fh.propType&&(W=L.length?addHueToRGB(W,D.fh.v*L[0]):addHueToRGB(W,D.fh.v*L)),D.fs.propType&&(W=L.length?addSaturationToRGB(W,D.fs.v*L[0]):addSaturationToRGB(W,D.fs.v*L)),D.fb.propType&&(W=L.length?addBrightnessToRGB(W,D.fb.v*L[0]):addBrightnessToRGB(W,D.fb.v*L))}}for(w=0;w<I;w+=1)D=S[w].a,D.p.propType&&(F=S[w].s,L=F.getMult(k[s].anIndexes[w],P.a[w].s.totalChars),this._hasMaskedPath?L.length?_.translate(0,D.p.v[1]*L[0],-D.p.v[2]*L[1]):_.translate(0,D.p.v[1]*L,-D.p.v[2]*L):L.length?_.translate(D.p.v[0]*L[0],D.p.v[1]*L[1],-D.p.v[2]*L[2]):_.translate(D.p.v[0]*L,D.p.v[1]*L,-D.p.v[2]*L));if(t.strokeWidthAnim&&(Y=j<0?0:j),t.strokeColorAnim&&(X="rgb("+Math.round(255*H[0])+","+Math.round(255*H[1])+","+Math.round(255*H[2])+")"),t.fillColorAnim&&t.fc&&(J="rgb("+Math.round(255*W[0])+","+Math.round(255*W[1])+","+Math.round(255*W[2])+")"),this._hasMaskedPath){if(_.translate(0,-t.ls),_.translate(0,x[1]*R/100+r,0),P.p.p){b=(h.point[1]-c.point[1])/(h.point[0]-c.point[0]);var pt=180*Math.atan(b)/Math.PI;h.point[0]<c.point[0]&&(pt+=180),_.rotate(-pt*Math.PI/180)}_.translate(z,N,0),o-=x[0]*k[s].an/200,k[s+1]&&K!==k[s+1].ind&&(o+=k[s].an/2,o+=t.tr/1e3*t.finalSize)}else{switch(_.translate(i,r,0),t.ps&&_.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:_.translate(k[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[k[s].line]),0,0);break;case 2:_.translate(k[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[k[s].line])/2,0,0)}_.translate(0,-t.ls),_.translate(G,0,0),_.translate(x[0]*k[s].an/200,x[1]*R/100,0),i+=k[s].l+t.tr/1e3*t.finalSize}"html"===C?it=_.toCSS():"svg"===C?it=_.to2dCSS():rt=[_.props[0],_.props[1],_.props[2],_.props[3],_.props[4],_.props[5],_.props[6],_.props[7],_.props[8],_.props[9],_.props[10],_.props[11],_.props[12],_.props[13],_.props[14],_.props[15]],Z=O}A<=s?(V=new LetterProps(Z,Y,X,J,it,rt),this.renderedLetters.push(V),A+=1,this.lettersChangedFlag=!0):(V=this.renderedLetters[s],this.lettersChangedFlag=V.update(Z,Y,X,J,it,rt)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){if(this._elem.globalData.frameId!==this._frameId){this._frameId=this._elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(this._mdf=!1,t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this._mdf=this.dynamicProperties[t]._mdf||this._mdf}},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],LetterProps.prototype.update=function(t,e,i,r,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this._mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this._mdf.sw=!0,n=!0),this.sc!==i&&(this.sc=i,this._mdf.sc=!0,n=!0),this.fc!==r&&(this.fc=r,this._mdf.fc=!0,n=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this._mdf.p=!0,n=!0),n},TextProperty.prototype.setCurrentData=function(t){var e=this.currentData;e.ascent=t.ascent,e.boxWidth=t.boxWidth?t.boxWidth:e.boxWidth,e.f=t.f,e.fStyle=t.fStyle,e.fWeight=t.fWeight,e.fc=t.fc,e.j=t.j,e.justifyOffset=t.justifyOffset,e.l=t.l,e.lh=t.lh,e.lineWidths=t.lineWidths,e.ls=t.ls,e.of=t.of,e.s=t.s,e.sc=t.sc,e.sw=t.sw,e.sz=t.sz,e.ps=t.ps,e.t=t.t,e.tr=t.tr,e.fillColorAnim=t.fillColorAnim||e.fillColorAnim,e.strokeColorAnim=t.strokeColorAnim||e.strokeColorAnim,e.strokeWidthAnim=t.strokeWidthAnim||e.strokeWidthAnim,e.yOffset=t.yOffset,e.finalSize=t.finalSize,e.finalLineHeight=t.finalLineHeight,e.finalText=t.finalText,e.__complete=!1},TextProperty.prototype.searchProperty=function(){return this.kf=this.data.d.k.length>1,this.kf},TextProperty.prototype.getValue=function(t){this._mdf=!1;var e=this.elem.globalData.frameId;if(e!==this._frameId&&this.kf||this._isFirstFrame||t){for(var i,r=this.data.d.k,s=this.elem.comp.renderedFrame,a=0,n=r.length;a<=n-1&&(i=r[a].s,!(a===n-1||r[a+1].t>s));)a+=1;this.keysIndex!==a&&(i.__complete||this.completeTextData(i),this.setCurrentData(i),this._mdf=!this._isFirstFrame,this.pv=this.v=this.currentData.t,this.keysIndex=a),this._frameId=e}},TextProperty.prototype.buildFinalText=function(t){for(var e=FontManager.getCombinedCharacterCodes(),i=[],r=0,s=t.length;r<s;)e.indexOf(t.charCodeAt(r))!==-1?i[i.length-1]+=t.charAt(r):i.push(t.charAt(r)),r+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,i,r,s,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],m=0,f=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,x=b.fStyle?b.fStyle.split(" "):[],S="normal",P="normal";i=x.length;var _;for(e=0;e<i;e+=1)switch(_=x[e].toLowerCase()){case"italic":P="italic";break;case"bold":S="700";break;case"black":S="900";break;case"medium":S="500";break;case"regular":case"normal":S="400";break;case"light":case"thin":S="200"}t.fWeight=b.fWeight||S,t.fStyle=P,i=t.t.length,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),t.finalLineHeight=t.lh;var C=t.tr/1e3*t.finalSize;if(t.sz)for(var A,k,M=!0,T=t.sz[0],D=t.sz[1];M;){k=this.buildFinalText(t.t),A=0,g=0,i=k.length,C=t.tr/1e3*t.finalSize;var F=-1;for(e=0;e<i;e+=1)r=!1," "===k[e]?F=e:13===k[e].charCodeAt(0)&&(g=0,r=!0,A+=t.finalLineHeight||1.2*t.finalSize),h.chars?(o=h.getCharData(k[e],b.fStyle,b.fFamily),E=r?0:o.w*t.finalSize/100):E=h.measureText(k[e],t.f,t.finalSize),g+E>T&&" "!==k[e]?(F===-1?i+=1:e=F,A+=t.finalLineHeight||1.2*t.finalSize,k.splice(e,F===e?1:0,"\r"),F=-1,g=0):(g+=E,g+=C);A+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&D<A?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=k,i=t.finalText.length,M=!1)}g=-C,E=0;var w,I=0;for(e=0;e<i;e+=1)if(r=!1,w=t.finalText[e]," "===w?s="\xa0":13===w.charCodeAt(0)?(I=0,y.push(g),v=g>v?g:v,g=-2*C,s="",r=!0,u+=1):s=t.finalText[e],h.chars?(o=h.getCharData(w,b.fStyle,h.getFontByName(t.f).fFamily),E=r?0:o.w*t.finalSize/100):E=h.measureText(s,t.f,t.finalSize)," "===w?I+=E+C:(g+=E+C+I,I=0),p.push({l:E,an:E,add:c,n:r,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==f){if(c+=E,""===s||"\xa0"===s||e===i-1){for(""!==s&&"\xa0"!==s||(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;m+=1,c=0}}else if(3==f){if(c+=E,""===s||e===i-1){for(""===s&&(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;c=0,m+=1}}else p[m].ind=m,p[m].extra=0,m+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var V,R,B=l.a;n=B.length;var L,G,z=[];for(a=0;a<n;a+=1){for(V=B[a],V.a.sc&&(t.strokeColorAnim=!0),V.a.sw&&(t.strokeWidthAnim=!0),(V.a.fc||V.a.fh||V.a.fs||V.a.fb)&&(t.fillColorAnim=!0),G=0,L=V.s.b,e=0;e<i;e+=1)R=p[e],R.anIndexes[a]=G,(1==L&&""!==R.val||2==L&&""!==R.val&&"\xa0"!==R.val||3==L&&(R.n||"\xa0"==R.val||e==i-1)||4==L&&(R.n||e==i-1))&&(1===V.s.rn&&z.push(G),G+=1);l.a[a].s.totalChars=G;var N,O=-1;if(1===V.s.rn)for(e=0;e<i;e+=1)R=p[e],O!=R.anIndexes[a]&&(O=R.anIndexes[a],N=z.splice(Math.floor(Math.random()*z.length),1)[0]),R.anIndexes[a]=N}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var i=this.data.d.k[e].s;for(var r in t)i[r]=t[r];this.recalculate(e)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=-1,this._isFirstFrame=!0,this.getValue(!0)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex)};var TextSelectorProp=function(){function t(t,e){this._mdf=!1,this.k=!1,this.data=e,this.dynamicProperties=[],this.elem=t,this.container=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),"e"in e?this.e=PropertyFactory.getProp(t,e.e,0,0,this):this.e={v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}function e(e,i,r){return new t(e,i,r)}var i=Math.max,r=Math.min,s=Math.floor;return t.prototype={addDynamicProperty:addDynamicProperty,getMult:function(t){var e=BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,a=0,n=this.finalS,o=this.finalE,h=this.data.sh;if(2==h)a=o===n?t>=o?1:0:i(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(3==h)a=o===n?t>=o?0:1:1-i(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(4==h)o===n?a=0:(a=i(0,r(.5/(o-n)+(t-n)/(o-n),1)),a<.5?a*=2:a=1-2*(a-.5)),a=e(a);else if(5==h){if(o===n)a=0;else{var l=o-n;t=r(i(0,t+.5-n),o-n);var p=-l/2+t,m=l/2;a=Math.sqrt(1-p*p/(m*m))}a=e(a)}else 6==h?(o===n?a=0:(t=r(i(0,t+.5-n),o-n),a=(1+Math.cos(Math.PI+2*Math.PI*t/(o-n)))/2),a=e(a)):(t>=s(n)&&(a=t-n<0?1-(n-t):i(0,r(o-t,1))),a=e(a));return a*this.a.v},getValue:function(t){if(this._mdf=t||!1,this.dynamicProperties.length){var e,i=this.dynamicProperties.length;for(e=0;e<i;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0);
}var r=this.data.totalChars||this.elem.textProperty.currentData.l.length||0;t&&2===this.data.r&&(this.e.v=r);var s=2===this.data.r?1:100/r,a=this.o.v/s,n=this.s.v/s+a,o=this.e.v/s+a;if(n>o){var h=n;n=o,o=h}this.finalS=n,this.finalE=o}},{getTextSelectorProp:e}}(),pool_factory=function(){return function(t,e,i,r){function s(){var t;return n?(n-=1,t=h[n]):t=e(),t}function a(t){n===o&&(h=pooling["double"](h),o=2*o),i&&i(t),h[n]=t,n+=1}var n=0,o=t,h=createSizedArray(o),l={newElement:s,release:a};return l}}(),pooling=function(){function t(t){return t.concat(createSizedArray(t.length))}return{"double":t}}(),point_pool=function(){function t(){return createTypedArray("float32",2)}return pool_factory(8,t)}(),shape_pool=function(){function t(){return new ShapePath}function e(t){var e,i=t._length;for(e=0;e<i;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1}function i(t){var e,i=r.newElement(),s=void 0===t._length?t.v.length:t._length;i.setLength(s),i.c=t.c;for(e=0;e<s;e+=1)i.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return i}var r=pool_factory(4,t,e);return r.clone=i,r}(),shapeCollection_pool=function(){function t(){var t;return r?(r-=1,t=a[r]):t=new ShapeCollection,t}function e(t){var e,i=t._length;for(e=0;e<i;e+=1)shape_pool.release(t.shapes[e]);t._length=0,r===s&&(a=pooling["double"](a),s=2*s),a[r]=t,r+=1}var i={newShapeCollection:t,release:e},r=0,s=4,a=createSizedArray(s);return i}(),segments_length_pool=function(){function t(){return{lengths:[],totalLength:0}}function e(t){var e,i=t.lengths.length;for(e=0;e<i;e+=1)bezier_length_pool.release(t.lengths[e]);t.lengths.length=0}return pool_factory(8,t,e)}(),bezier_length_pool=function(){function t(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}}return pool_factory(8,t)}();BaseRenderer.prototype.checkLayers=function(t){var e,i,r=this.layers.length;for(this.completeLayers=!0,e=r-1;e>=0;e--)this.elements[e]||(i=this.layers[e],i.ip-i.st<=t-this.layers[e].st&&i.op-i.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t)}return this.createNull(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,i,r=t.length,s=this.layers.length;for(e=0;e<r;e+=1)for(i=0;i<s;){if(this.layers[i].id==t[e].id){this.layers[i]=t[e];break}i+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,i){for(var r=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(r[a]&&r[a]!==!0?(i.push(r[a]),r[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,i):t.setHierarchy(i)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,i=t.length;for(e=0;e<i;e+=1)if(t[e].xt){var r=this.createComp(t[e]);r.initExpressions(),this.globalData.projectInterface.registerComposition(r)}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%"),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.nm=t.nm,this.globalData.compSize.w=t.w,this.globalData.compSize.h=t.h,this.globalData.frameRate=t.fr,this.data=t;var i=createNS("clipPath"),r=createNS("rect");r.setAttribute("width",t.w),r.setAttribute("height",t.h),r.setAttribute("x",0),r.setAttribute("y",0);var s="animationMask_"+randomString(10);i.setAttribute("id",s),i.appendChild(r),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+s+")"),e.appendChild(i),this.layers=t.layers,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var i=this.createItem(this.layers[t]);e[t]=i,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(i),i.initExpressions()),this.appendElementInPos(i,t),this.layers[t].tt&&(this.elements[t-1]&&this.elements[t-1]!==!0?i.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(i)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,i=this.elements.length;e<i;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=i-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<i;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){for(var r,s=0;s<e;)this.elements[s]&&this.elements[s]!==!0&&this.elements[s].getBaseElement()&&(r=this.elements[s].getBaseElement()),s+=1;r?this.layerElement.insertBefore(i,r):this.layerElement.appendChild(i)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,i=this.masksProperties.length;for(e=0;e<i;e++)if((this.viewData[e].prop._mdf||this._isFirstFrame)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||this._isFirstFrame)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||this._isFirstFrame)&&(this.viewData[e].invRect.setAttribute("x",-t.props[12]),this.viewData[e].invRect.setAttribute("y",-t.props[13])),this.storedData[e].x&&(this.storedData[e].x._mdf||this._isFirstFrame))){var r=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),r.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}this._isFirstFrame=!1},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,i){var r,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,r=1;r<s;r+=1)a+=" C"+e.o[r-1][0]+","+e.o[r-1][1]+" "+e.i[r][0]+","+e.i[r][1]+" "+e.v[r][0]+","+e.v[r][1];if(e.c&&s>1&&(a+=" C"+e.o[r-1][0]+","+e.o[r-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),i.lastPath!==a){var n="";i.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),i.elem.setAttribute("d",n)),i.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var i,r=this.dynamicProperties.length;for(i=0;i<r;i+=1)(e||this._isParent&&"transform"===this.dynamicProperties[i].propType)&&(this.dynamicProperties[i].getValue(),this.dynamicProperties[i]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){this.dynamicProperties.indexOf(t)===-1&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),11!==this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,i=0,r=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;i<r;){if(this.hierarchy[i].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}i+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),i=0;i<r;i+=1)t=this.hierarchy[i].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var i=!0,r=this.comp;i;)r.finalTransform?(r.data.hasMask&&e.splice(0,0,r.finalTransform),r=r.comp):i=!1;var s,a,n=e.length;for(s=0;s<n;s+=1)a=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){this.maskManager.renderFrame(this.finalTransform.mat),this.renderableEffectsManager.renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},function(){var t={initElement:function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.addMasks(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var t=this.baseElement||this.layerElement;t.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var t=this.baseElement||this.layerElement;t.style.display="block"}this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};extendPrototype([RenderableElement,createProxyFunction(t)],RenderableDOMElement)}(),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGGradientFillStyleData.prototype.initGradientData=function(t,e,i){this.o=PropertyFactory.getProp(t,e.o,0,.01,t),this.s=PropertyFactory.getProp(t,e.s,1,null,t),this.e=PropertyFactory.getProp(t,e.e,1,null,t),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,t),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,t),this.g=new GradientProperty(t,e.g,t),this.style=i,this.stops=[],this.setGradientData(i.pElem,e),this.setGradientOpacity(e,i)},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var i="gr_"+randomString(10),r=createNS(1===e.t?"linearGradient":"radialGradient");r.setAttribute("id",i),r.setAttribute("spreadMethod","pad"),r.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),r.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url(#"+i+")"),this.gf=r,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var i,r,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o="op_"+randomString(10),h="mk_"+randomString(10);a.setAttribute("id",h);var l=createNS(1===t.t?"linearGradient":"radialGradient");l.setAttribute("id",o),l.setAttribute("spreadMethod","pad"),l.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var p=this.stops;for(r=4*t.g.p;r<s;r+=2)i=createNS("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),l.appendChild(i),p.push(i);n.setAttribute("gf"===t.ty?"fill":"stroke","url(#"+o+")"),this.of=l,this.ms=a,this.ost=p,this.maskId=h,e.msElem=n}},SVGGradientStrokeStyleData.prototype.initGradientData=SVGGradientFillStyleData.prototype.initGradientData,SVGGradientStrokeStyleData.prototype.setGradientData=SVGGradientFillStyleData.prototype.setGradientData,SVGGradientStrokeStyleData.prototype.setGradientOpacity=SVGGradientFillStyleData.prototype.setGradientOpacity,BaseElement.prototype.checkMasks=function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},BaseElement.prototype.initExpressions=function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},BaseElement.prototype.blendModeEnums={1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},BaseElement.prototype.getBlendMode=function(){return this.blendModeEnums[this.data.bm]||""},BaseElement.prototype.setBlendMode=function(){var t=this.getBlendMode(),e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},BaseElement.prototype.initBaseData=function(t,e,i){this.globalData=e,this.comp=i,this.data=t,this.layerId="ly_"+randomString(10),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},BaseElement.prototype.getType=function(){return this.type},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,i,r=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),r=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=randomString(10),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),i=createNS("g"),i.appendChild(this.layerElement),r=i,s.appendChild(i),i.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=randomString(10),e=filtersFactory.createFilter(t);var o=createNS("feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),e.appendChild(o),this.globalData.defs.appendChild(e);var h=createNS("rect");h.setAttribute("width",this.comp.data.w),h.setAttribute("height",this.comp.data.h),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("fill","#ffffff"),h.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(h),n.appendChild(this.layerElement),r=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),i=createNS("g"),n.appendChild(h),i.appendChild(this.layerElement),r=i,n.appendChild(i)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),r=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var l=createNS("clipPath"),p=createNS("path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m="cp_"+randomString(8);if(l.setAttribute("id",m),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var f=createNS("g");f.setAttribute("clip-path","url("+locationHref+"#"+m+")"),f.appendChild(this.layerElement),this.transformedElement=f,r?r.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+m+")")}0!==this.data.bm&&this.setBlendMode(),this.renderableEffectsManager=new SVGEffects(this)},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},addMasks:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,i=this.shapeModifiers.length;for(e=0;e<i;e+=1)this.shapeModifiers[e].addShape(t)},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].reset();for(e=this.shapeModifiers.length,t=e-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this._isFirstFrame)}},lcEnum:{1:"butt",2:"round",3:"square"},ljEnum:{1:"miter",2:"round",3:"butt"},searchProcessedElement:function(t){for(var e=0,i=this.processedElements.length;e<i;){if(this.processedElements[e].elem===t)return this.processedElements[e].pos;e+=1}return 0},addProcessedElement:function(t,e){for(var i=this.processedElements.length,r=!1;i;)if(i-=1,this.processedElements[i].elem===t){this.processedElements[i].pos=e,r=!0;break}r||this.processedElements.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)},buildShapeString:function(t,e,i,r){var s,a="";for(s=1;s<e;s+=1)1===s&&(a+=" M"+r.applyToPointStringified(t.v[0][0],t.v[0][1])),a+=" C"+r.applyToPointStringified(t.o[s-1][0],t.o[s-1][1])+" "+r.applyToPointStringified(t.i[s][0],t.i[s][1])+" "+r.applyToPointStringified(t.v[s][0],t.v[s][1]);return 1===e&&(a+=" M"+r.applyToPointStringified(t.v[0][0],t.v[0][1])),i&&e&&(a+=" C"+r.applyToPointStringified(t.o[s-1][0],t.o[s-1][1])+" "+r.applyToPointStringified(t.i[0][0],t.i[0][1])+" "+r.applyToPointStringified(t.v[0][0],t.v[0][1]),a+="z"),a}},ITextElement.prototype.initElement=function(t,e,i){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,i),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.initTransform(t,e,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.addMasks(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1)},ITextElement.prototype.createPathShape=function(t,e){var i,r,s=e.length,a="";for(i=0;i<s;i+=1)r=e[i].ks.k,a+=this.buildShapeString(r,r.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e),this.buildNewText(),this.renderInnerContent()},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t),this.buildNewText(),this.renderInnerContent()},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t),this.buildNewText(),this.renderInnerContent()},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,i,r,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[i])/2,0,0)}e.translate(r,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.buildShapeString=IShapeElement.prototype.buildShapeString,ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,i){this.initFrame(),this.initBaseData(t,e,i),this.initTransform(t,e,i),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.addMasks(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var i,r=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),i=0;i<r;i+=1)(this.completeLayers||this.elements[i])&&(this.elements[i].prepareFrame(this.renderedFrame-this.layers[i].st),this.elements[i]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio","xMidYMid slice"),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement),SVGTextElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextElement.prototype.buildTextContents=function(t){for(var e=0,i=t.length,r=[],s="";e<i;)t[e]===String.fromCharCode(13)?(r.push(s),s=""):s+=t[e],e+=1;return r.push(s),r},SVGTextElement.prototype.buildNewText=function(){var t,e,i=this.textProperty.currentData;this.renderedLetters=createSizedArray(i?i.l.length:0),i.fc?this.layerElement.setAttribute("fill",this.buildColor(i.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),i.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(i.sc)),this.layerElement.setAttribute("stroke-width",i.sw)),this.layerElement.setAttribute("font-size",i.finalSize);var r=this.globalData.fontManager.getFontByName(i.f);if(r.fClass)this.layerElement.setAttribute("class",r.fClass);else{this.layerElement.setAttribute("font-family",r.fFamily);var s=i.fWeight,a=i.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}var n=i.l||[],o=this.globalData.fontManager.chars;if(e=n.length){var h,l,p=this.mHelper,m="",f=this.data.singleShape,c=0,d=0,u=!0,y=i.tr/1e3*i.finalSize;if(!f||o||i.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)o&&f&&0!==t||(h=b>t?this.textSpans[t]:createNS(o?"path":"text"),b<=t&&(h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=h,this.layerElement.appendChild(h)),h.style.display="inherit"),p.reset(),p.scale(i.finalSize/100,i.finalSize/100),f&&(n[t].n&&(c=-y,d+=i.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(i,p,n[t].line,c,d),c+=n[t].l||0,c+=y),o?(v=this.globalData.fontManager.getCharData(i.finalText[t],r.fStyle,this.globalData.fontManager.getFontByName(i.f).fFamily),g=v&&v.data||{},l=g.shapes?g.shapes[0].it:[],f?m+=this.createPathShape(p,l):h.setAttribute("d",this.createPathShape(p,l))):(f&&h.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),h.textContent=n[t].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&h.setAttribute("d",m)}else{var E=this.textContainer,x="start";switch(i.j){case 1:x="end";break;case 2:x="middle"}E.setAttribute("text-anchor",x),E.setAttribute("letter-spacing",y);var S=this.buildTextContents(i.finalText);for(e=S.length,d=i.ps?i.ps[1]+i.ascent:0,t=0;t<e;t+=1)h=this.textSpans[t]||createNS("tspan"),h.textContent=S[t],h.setAttribute("x",0),h.setAttribute("y",d),h.style.display="inherit",E.appendChild(h),this.textSpans[t]=h,d+=i.finalLineHeight;this.layerElement.appendChild(E)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0}},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,i=this.textAnimator.renderedLetters,r=this.textProperty.currentData.l;e=r.length;var s,a;for(t=0;t<e;t+=1)r[t].n||(s=i[t],a=this.textSpans[t],s._mdf.m&&a.setAttribute("transform",s.m),s._mdf.o&&a.setAttribute("opacity",s.o),s._mdf.sw&&a.setAttribute("stroke-width",s.sw),s._mdf.sc&&a.setAttribute("stroke",s.sc),s._mdf.fc&&a.setAttribute("fill",s.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,
SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0)},SVGShapeElement.prototype.createStyleElement=function(t,e){var i,r=new SVGStyleData(t,e),s=r.pElem;if("st"===t.ty)i=new SVGStrokeStyleData(this,t,r);else if("fl"===t.ty)i=new SVGFillStyleData(this,t,r);else if("gf"===t.ty||"gs"===t.ty){var a="gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData;i=new a(this,t,r),this.globalData.defs.appendChild(i.gf),i.maskId&&(this.globalData.defs.appendChild(i.ms),this.globalData.defs.appendChild(i.of),s.setAttribute("mask","url(#"+i.maskId+")"))}return"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),s.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),this.stylesList.push(r),i},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),e},SVGShapeElement.prototype.createTransformElement=function(t){return new SVGTransformData(TransformPropertyFactory.getTransformProperty(this,t,this),PropertyFactory.getProp(this,t.o,0,.01,this))},SVGShapeElement.prototype.createShapeElement=function(t,e,i){var r=4;"rc"===t.ty?r=5:"el"===t.ty?r=6:"sr"===t.ty&&(r=7);var s=ShapePropertyFactory.getShapeProp(this,t,r,this),a=new SVGShapeData(e,i,s);return this.shapes.push(a.sh),this.addShapeToModifiers(a),a},SVGShapeElement.prototype.setElementStyles=function(t){var e,i=t.styles,r=this.stylesList.length;for(e=0;e<r;e+=1)this.stylesList[e].closed||i.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,i,r,s,a,n){var o,h,l,p,m,f,c=[].concat(a),d=t.length-1,u=[],y=[];for(o=d;o>=0;o-=1){if(f=this.searchProcessedElement(t[o]),f?e[o]=i[f-1]:t[o]._render=n,"fl"==t[o].ty||"st"==t[o].ty||"gf"==t[o].ty||"gs"==t[o].ty)f?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&r.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"==t[o].ty){if(f)for(l=e[o].it.length,h=0;h<l;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,c,n),t[o]._render&&r.appendChild(e[o].gr)}else"tr"==t[o].ty?(f||(e[o]=this.createTransformElement(t[o])),p=e[o].transform,c.push(p)):"sh"==t[o].ty||"rc"==t[o].ty||"el"==t[o].ty||"sr"==t[o].ty?(f||(e[o]=this.createShapeElement(t[o],c,s)),this.setElementStyles(e[o])):"tm"==t[o].ty||"rd"==t[o].ty||"ms"==t[o].ty?(f?(m=e[o],m.closed=!1):(m=ShapeModifiers.getModifier(t[o].ty),m.init(this,t[o]),e[o]=m,this.shapeModifiers.push(m)),y.push(m)):"rp"==t[o].ty&&(f?(m=e[o],m.closed=!0):(m=ShapeModifiers.getModifier(t[o].ty),e[o]=m,m.init(this,t,o,e),this.shapeModifiers.push(m),n=!1),y.push(m));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(this.shapesData,this.itemsData,this.layerElement),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(t,e,i){var r,s,a=t.length-1;for(r=0;r<=a;r+=1)s=t[r].ty,"tr"==s?((this._isFirstFrame||e[r].transform.op._mdf)&&i.setAttribute("opacity",e[r].transform.op.v),(this._isFirstFrame||e[r].transform.mProps._mdf)&&i.setAttribute("transform",e[r].transform.mProps.v.to2dCSS())):!t[r]._render||"sh"!=s&&"el"!=s&&"rc"!=s&&"sr"!=s?"fl"==s?this.renderFill(t[r],e[r]):"gf"==s?this.renderGradient(t[r],e[r]):"gs"==s?(this.renderGradient(t[r],e[r]),this.renderStroke(t[r],e[r])):"st"==s?this.renderStroke(t[r],e[r]):"gr"==s&&this.renderShape(t[r].it,e[r].it,e[r].gr):this.renderPath(e[r])},SVGShapeElement.prototype.renderPath=function(t){var e,i,r,s,a,n,o,h,l,p,m,f=t.styles.length,c=t.lvl;for(n=0;n<f;n+=1){if(s=t.sh._mdf||this._isFirstFrame,t.styles[n].lvl<c)for(h=this.mHelper.reset(),p=c-t.styles[n].lvl,m=t.transformers.length-1;p>0;)s=t.transformers[m].mProps._mdf||s,l=t.transformers[m].mProps.v.props,h.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15]),p--,m--;else h=this.identityMatrix;if(o=t.sh.paths,i=o._length,s){for(r="",e=0;e<i;e+=1)a=o.shapes[e],a&&a._length&&(r+=this.buildShapeString(a,a._length,a.c,h));t.caches[n]=r}else r=t.caches[n];t.styles[n].d+=r,t.styles[n]._mdf=s||t.styles[n]._mdf}},SVGShapeElement.prototype.renderFill=function(t,e){var i=e.style;(e.c._mdf||this._isFirstFrame)&&i.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||this._isFirstFrame)&&i.pElem.setAttribute("fill-opacity",e.o.v)},SVGShapeElement.prototype.renderGradient=function(t,e){var i=e.gf,r=e.g._hasOpacity,s=e.s.v,a=e.e.v;if(e.o._mdf||this._isFirstFrame){var n="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(n,e.o.v)}if(e.s._mdf||this._isFirstFrame){var o=1===t.t?"x1":"cx",h="x1"===o?"y1":"cy";i.setAttribute(o,s[0]),i.setAttribute(h,s[1]),r&&!e.g._collapsable&&(e.of.setAttribute(o,s[0]),e.of.setAttribute(h,s[1]))}var l,p,m,f;if(e.g._cmdf||this._isFirstFrame){l=e.cst;var c=e.g.c;for(m=l.length,p=0;p<m;p+=1)f=l[p],f.setAttribute("offset",c[4*p]+"%"),f.setAttribute("stop-color","rgb("+c[4*p+1]+","+c[4*p+2]+","+c[4*p+3]+")")}if(r&&(e.g._omdf||this._isFirstFrame)){var d=e.g.o;for(l=e.g._collapsable?e.cst:e.ost,m=l.length,p=0;p<m;p+=1)f=l[p],e.g._collapsable||f.setAttribute("offset",d[2*p]+"%"),f.setAttribute("stop-opacity",d[2*p+1])}if(1===t.t)(e.e._mdf||this._isFirstFrame)&&(i.setAttribute("x2",a[0]),i.setAttribute("y2",a[1]),r&&!e.g._collapsable&&(e.of.setAttribute("x2",a[0]),e.of.setAttribute("y2",a[1])));else{var u;if((e.s._mdf||e.e._mdf||this._isFirstFrame)&&(u=Math.sqrt(Math.pow(s[0]-a[0],2)+Math.pow(s[1]-a[1],2)),i.setAttribute("r",u),r&&!e.g._collapsable&&e.of.setAttribute("r",u)),e.e._mdf||e.h._mdf||e.a._mdf||this._isFirstFrame){u||(u=Math.sqrt(Math.pow(s[0]-a[0],2)+Math.pow(s[1]-a[1],2)));var y=Math.atan2(a[1]-s[1],a[0]-s[0]),g=e.h.v>=1?.99:e.h.v<=-1?-.99:e.h.v,v=u*g,b=Math.cos(y+e.a.v)*v+s[0],E=Math.sin(y+e.a.v)*v+s[1];i.setAttribute("fx",b),i.setAttribute("fy",E),r&&!e.g._collapsable&&(e.of.setAttribute("fx",b),e.of.setAttribute("fy",E))}}},SVGShapeElement.prototype.renderStroke=function(t,e){var i=e.style,r=e.d;r&&(r._mdf||this._isFirstFrame)&&r.dashStr&&(i.pElem.setAttribute("stroke-dasharray",r.dashStr),i.pElem.setAttribute("stroke-dashoffset",r.dashoffset[0])),e.c&&(e.c._mdf||this._isFirstFrame)&&i.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||this._isFirstFrame)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||this._isFirstFrame)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapeData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",i[0]-e[0]+" 0 0 0 "+e[0]+" "+(i[1]-e[1])+" 0 0 0 "+e[1]+" "+(i[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,i=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,i,r,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(r=this.elem.maskManager.masksProperties.length,i=0):(i=this.filterManager.effectElements[0].p.v-1,r=i+1),e=createNS("g"),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1),i;i<r;i+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:i});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n="stms_"+randomString(10);a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");o.setAttribute("mask","url("+locationHref+"#"+n+")"),s[0]&&o.appendChild(s[0]),this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,i,r,s=this.paths.length;for(e=0;e<s;e+=1)if(this.paths[e].m!==-1&&(i=this.elem.maskManager.viewData[this.paths[e].m],r=this.paths[e].p,(t||this.filterManager._mdf||i.prop._mdf)&&r.setAttribute("d",i.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||i.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=r.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;r.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,i=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v,s=r[0]+" "+i[0]+" "+e[0],a=r[1]+" "+i[1]+" "+e[1],n=r[2]+" "+i[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var i=createNS(t);return i.setAttribute("type","table"),e.appendChild(i),i},SVGProLevelsFilter.prototype.getTableValue=function(t,e,i,r,s){for(var a,n,o=0,h=256,l=Math.min(t,e),p=Math.max(t,e),m=Array.call(null,{length:h}),f=0,c=s-r,d=e-t;o<=256;)a=o/256,n=a<=l?d<0?s:r:a>=p?d<0?r:s:r+c*Math.pow((a-t)/d,1/i),m[f++]=n,o+=256/(h-1);return m.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,i=this.filterManager.effectElements;this.feFuncRComposed&&(t||i[3].p._mdf||i[4].p._mdf||i[5].p._mdf||i[6].p._mdf||i[7].p._mdf)&&(e=this.getTableValue(i[3].p.v,i[4].p.v,i[5].p.v,i[6].p.v,i[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||i[10].p._mdf||i[11].p._mdf||i[12].p._mdf||i[13].p._mdf||i[14].p._mdf)&&(e=this.getTableValue(i[10].p.v,i[11].p.v,i[12].p.v,i[13].p.v,i[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||i[17].p._mdf||i[18].p._mdf||i[19].p._mdf||i[20].p._mdf||i[21].p._mdf)&&(e=this.getTableValue(i[17].p.v,i[18].p.v,i[19].p.v,i[20].p.v,i[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||i[24].p._mdf||i[25].p._mdf||i[26].p._mdf||i[27].p._mdf||i[28].p._mdf)&&(e=this.getTableValue(i[24].p.v,i[25].p.v,i[26].p.v,i[27].p.v,i[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||i[31].p._mdf||i[32].p._mdf||i[33].p._mdf||i[34].p._mdf||i[35].p._mdf)&&(e=this.getTableValue(i[31].p.v,i[32].p.v,i[33].p.v,i[34].p.v,i[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var i=this.filterManager.effectElements[3].p.v,r=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=i*Math.cos(r),a=i*Math.sin(r);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[],_svgMatteMaskCounter=0;SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,i=_svgMatteSymbols.length;e<i;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var i=t.layerElement.parentNode;if(i){for(var r=i.children,s=0,a=r.length;s<a&&r[s]!==t.layerElement;)s+=1;var n;s<=a-2&&(n=r[s+1]);var o=createNS("use");o.setAttribute("href","#"+e),n?i.insertBefore(o,n):i.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var i="matte_"+randomString(5)+"_"+_svgMatteMaskCounter++,r=createNS("mask");r.setAttribute("id",e.layerId),r.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(r);var a=createNS("symbol");a.setAttribute("id",i),this.replaceInParent(e,i),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+i),r.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=0,i=this.elem.comp.elements.length;e<i;)this.elem.comp.elements[e].data.ind===t&&this.setElementAsMask(this.elem,this.elem.comp.elements[e]),e+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,i=this.filters.length;for(e=0;e<i;e+=1)this.filters[e].renderFrame(t)};var animationManager=function(){function t(t){for(var e=0,i=t.target;e<S;)E[e].animation===i&&(E.splice(e,1),e-=1,S-=1,i.isPaused||r()),e+=1}function e(t,e){if(!t)return null;for(var i=0;i<S;){if(E[i].elem==t&&null!==E[i].elem)return E[i].animation;i+=1}var r=new AnimationItem;return s(r,t),r.setData(t,e),r}function i(){_+=1,v()}function r(){_-=1,0===_&&(P=!0)}function s(e,s){e.addEventListener("destroy",t),e.addEventListener("_active",i),e.addEventListener("_idle",r),E.push({elem:s,animation:e}),S+=1}function a(t){var e=new AnimationItem;return s(e,null),e.setParams(t),e}function n(t,e){var i;for(i=0;i<S;i+=1)E[i].animation.setSpeed(t,e)}function o(t,e){var i;for(i=0;i<S;i+=1)E[i].animation.setDirection(t,e)}function h(t){var e;for(e=0;e<S;e+=1)E[e].animation.play(t)}function l(t){var e,i=t-x;for(e=0;e<S;e+=1)E[e].animation.advanceTime(i);x=t,P?C=!0:window.requestAnimationFrame(l)}function p(t){x=t,window.requestAnimationFrame(l)}function m(t){var e;for(e=0;e<S;e+=1)E[e].animation.pause(t)}function f(t,e,i){var r;for(r=0;r<S;r+=1)E[r].animation.goToAndStop(t,e,i)}function c(t){var e;for(e=0;e<S;e+=1)E[e].animation.stop(t)}function d(t){var e;for(e=0;e<S;e+=1)E[e].animation.togglePause(t)}function u(t){var e;for(e=S-1;e>=0;e-=1)E[e].animation.destroy(t)}function y(t,i,r){var s,a=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),n=a.length;for(s=0;s<n;s+=1)r&&a[s].setAttribute("data-bm-type",r),e(a[s],t);if(i&&0===n){r||(r="svg");var o=document.getElementsByTagName("body")[0];o.innerHTML="";var h=createTag("div");h.style.width="100%",h.style.height="100%",h.setAttribute("data-bm-type",r),o.appendChild(h),e(h,t)}}function g(){var t;for(t=0;t<S;t+=1)E[t].animation.resize()}function v(){P&&(P=!1,C&&(window.requestAnimationFrame(p),C=!1))}var b={},E=[],x=0,S=0,P=!0,_=0,C=!0;return b.registerAnimation=e,b.loadAnimation=a,b.setSpeed=n,b.setDirection=o,b.play=h,b.pause=m,b.stop=c,b.togglePause=d,b.searchAnimations=y,b.resize=g,b.goToAndStop=f,b.destroy=u,b}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.pendingElements=0,this.playCount=0,this.animationData={},this.layers=[],this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=randomString(10),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this.projectInterface=ProjectInterface()};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){var e=this;t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var i=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(i){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}if(this.renderer.setProjectInterface(this.projectInterface),this.animType=i,""===t.loop||null===t.loop||(t.loop===!1?this.loop=!1:t.loop===!0?this.loop=!0:this.loop=parseInt(t.loop)),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!t.hasOwnProperty("autoloadSegments")||t.autoloadSegments,t.animationData)e.configAnimation(t.animationData);else if(t.path){"json"!=t.path.substr(-4)&&("/"!=t.path.substr(-1,1)&&(t.path+="/"),t.path+="data.json");var r=new XMLHttpRequest;t.path.lastIndexOf("\\")!=-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.assetsPath=t.assetsPath,this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),r.open("GET",t.path,!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status)e.configAnimation(JSON.parse(r.responseText));else try{var t=JSON.parse(r.responseText);e.configAnimation(t)}catch(i){}}}},AnimationItem.prototype.setData=function(t,e){var i={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},r=t.attributes;i.path=r.getNamedItem("data-animation-path")?r.getNamedItem("data-animation-path").value:r.getNamedItem("data-bm-path")?r.getNamedItem("data-bm-path").value:r.getNamedItem("bm-path")?r.getNamedItem("bm-path").value:"",i.animType=r.getNamedItem("data-anim-type")?r.getNamedItem("data-anim-type").value:r.getNamedItem("data-bm-type")?r.getNamedItem("data-bm-type").value:r.getNamedItem("bm-type")?r.getNamedItem("bm-type").value:r.getNamedItem("data-bm-renderer")?r.getNamedItem("data-bm-renderer").value:r.getNamedItem("bm-renderer")?r.getNamedItem("bm-renderer").value:"canvas";var s=r.getNamedItem("data-anim-loop")?r.getNamedItem("data-anim-loop").value:r.getNamedItem("data-bm-loop")?r.getNamedItem("data-bm-loop").value:r.getNamedItem("bm-loop")?r.getNamedItem("bm-loop").value:"";""===s||("false"===s?i.loop=!1:"true"===s?i.loop=!0:i.loop=parseInt(s));var a=r.getNamedItem("data-anim-autoplay")?r.getNamedItem("data-anim-autoplay").value:r.getNamedItem("data-bm-autoplay")?r.getNamedItem("data-bm-autoplay").value:!r.getNamedItem("bm-autoplay")||r.getNamedItem("bm-autoplay").value;i.autoplay="false"!==a,i.name=r.getNamedItem("data-name")?r.getNamedItem("data-name").value:r.getNamedItem("data-bm-name")?r.getNamedItem("data-bm-name").value:r.getNamedItem("bm-name")?r.getNamedItem("bm-name").value:"";var n=r.getNamedItem("data-anim-prerender")?r.getNamedItem("data-anim-prerender").value:r.getNamedItem("data-bm-prerender")?r.getNamedItem("data-bm-prerender").value:r.getNamedItem("bm-prerender")?r.getNamedItem("bm-prerender").value:"";"false"===n&&(i.prerender=!1),this.setParams(i)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip),this.animationData.tf=this.totalFrames);var e,i,r=this.animationData.layers,s=r.length,a=t.layers,n=a.length;for(i=0;i<n;i+=1)for(e=0;e<s;){if(r[e].id==a[i].id){r[e]=a[i];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.renderFrame(-1),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.animationData.tf);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var i=new XMLHttpRequest,r=this,s=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,i.open("GET",s,!0),i.send(),i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status)r.includeLayers(JSON.parse(i.responseText));else try{var t=JSON.parse(i.responseText);r.includeLayers(t)}catch(e){}}},AnimationItem.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.animationData.tf),this.loadNextSegment()},AnimationItem.prototype.configAnimation=function(t){var e=this;this.renderer&&this.renderer.destroyed||(this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.animationData.tf=this.totalFrames,this.renderer.configAnimation(t),t.assets||(t.assets=[]),t.comps&&(t.assets=t.assets.concat(t.comps),t.comps=null),this.renderer.searchExtraCompositions(t.assets),this.layers=this.animationData.layers,this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.trigger("config_ready"),this.imagePreloader=new ImagePreloader,this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(t.assets,function(t){t||e.trigger("loaded_images")}),this.loadSegments(),this.updaFrameModifier(),this.renderer.globalData.fontManager?this.waitForFontsLoaded():(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()))},AnimationItem.prototype.waitForFontsLoaded=function(){function t(){this.renderer.globalData.fontManager.loaded?(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()):setTimeout(t.bind(this),20)}return function(){t.bind(this)()}}(),AnimationItem.prototype.addPendingElement=function(){this.pendingElements+=1},AnimationItem.prototype.elementLoaded=function(){this.pendingElements--,this.checkLoaded()},AnimationItem.prototype.checkLoaded=function(){0===this.pendingElements&&(expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.isLoaded=!0,this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){this.isLoaded!==!1&&this.renderer.renderFrame(this.currentFrame+this.firstFrame)},AnimationItem.prototype.play=function(t){t&&this.name!=t||this.isPaused===!0&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.playCount=0,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.goToAndStop=function(t,e,i){i&&this.name!=i||(e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,i){this.goToAndStop(t,e,i),this.play()},AnimationItem.prototype.advanceTime=function(t){if(this.isPaused!==!0&&this.isLoaded!==!1){var e=this.currentRawFrame+t*this.frameModifier,i=!1;e>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e%this.totalFrames)||(i=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&this.loop!==!0?(i=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e),i&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.timeCompleted=this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.timeCompleted=this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var i=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?i=t:this.currentRawFrame+this.firstFrame>e&&(i=e-t)),this.firstFrame=t,this.timeCompleted=this.totalFrames=e-t,i!==-1&&this.goToAndStop(i,!0)},AnimationItem.prototype.playSegments=function(t,e){if("object"==typeof t[0]){var i,r=t.length;for(i=0;i<r;i+=1)this.segments.push(t[i])}else this.segments.push(t);e&&this.checkSegments(0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.remove=function(t){t&&this.name!=t||this.renderer.destroy()},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||this.renderer&&this.renderer.destroyed||(this.renderer.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(this.assetsPath){var i=t.p;i.indexOf("images/")!==-1&&(i=i.split("/")[1]),e=this.assetsPath+i}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,i=this.assets.length;e<i;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getAssets=function(){return this.assets},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},extendPrototype([BaseRenderer],CanvasRenderer),CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this.globalData,this)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this.globalData,this)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this.globalData,this)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this.globalData,this)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this.globalData,this)},CanvasRenderer.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRenderer.prototype.ctxTransform=function(t){
if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13]){if(!this.renderConfig.clearCanvas)return void this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13]);this.transformMat.cloneFromProps(t);var e=this.contextData.cTr.props;this.transformMat.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var i=this.contextData.cTr.props;this.canvasContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13])}},CanvasRenderer.prototype.ctxOpacity=function(t){return this.renderConfig.clearCanvas?(this.contextData.cO*=t<0?0:t,void(this.canvasContext.globalAlpha=this.contextData.cO)):void(this.canvasContext.globalAlpha*=t<0?0:t)},CanvasRenderer.prototype.reset=function(){return this.renderConfig.clearCanvas?void this.contextData.reset():void this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.save();t&&this.canvasContext.save();var e=this.contextData.cTr.props;this.contextData._length<=this.contextData.cArrPos&&this.contextData.duplicate();var i,r=this.contextData.saved[this.contextData.cArrPos];for(i=0;i<16;i+=1)r[i]=e[i];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1},CanvasRenderer.prototype.restore=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.restore();t&&(this.canvasContext.restore(),this.globalData.blendMode="source-over"),this.contextData.cArrPos-=1;var e,i=this.contextData.saved[this.contextData.cArrPos],r=this.contextData.cTr.props;for(e=0;e<16;e+=1)r[e]=i[e];this.canvasContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13]),i=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=i,this.canvasContext.globalAlpha=i},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=createTag("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className)):this.canvasContext=this.renderConfig.context,this.data=t,this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.totalFrames=Math.floor(t.tf),this.globalData.compWidth=t.w,this.globalData.compHeight=t.h,this.globalData.frameRate=t.fr,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.layers=t.layers,this.transformCanvas={w:t.w,h:t.h,sx:0,sy:0,tx:0,ty:0},this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,document.body),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.addPendingElement=this.animationItem.addPendingElement.bind(this.animationItem),this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(t.layers.length),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){this.reset();var t,e;this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr);var i,r;if(this.renderConfig.preserveAspectRatio.indexOf("meet")!==-1||this.renderConfig.preserveAspectRatio.indexOf("slice")!==-1){var s=this.renderConfig.preserveAspectRatio.split(" "),a=s[1]||"meet",n=s[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);i=t/e,r=this.transformCanvas.w/this.transformCanvas.h,r>i&&"meet"===a||r<i&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),"xMid"===o&&(r<i&&"meet"===a||r>i&&"slice"===a)?this.transformCanvas.tx=(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(r<i&&"meet"===a||r>i&&"slice"===a)?this.transformCanvas.tx=(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:this.transformCanvas.tx=0,"YMid"===h&&(r>i&&"meet"===a||r<i&&"slice"===a)?this.transformCanvas.ty=(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(r>i&&"meet"===a||r<i&&"slice"===a)?this.transformCanvas.ty=(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:this.transformCanvas.ty=0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip()},CanvasRenderer.prototype.destroy=function(){this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML="");var t,e=this.layers?this.layers.length:0;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t){if(!(this.renderedFrame==t&&this.renderConfig.clearCanvas===!0||this.destroyed||t===-1)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!1,this.globalData.projectInterface.currentFrame=t;var e,i=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=0;e<i;e++)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf){for(this.renderConfig.clearCanvas===!0?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),e=i-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.renderConfig.clearCanvas!==!0&&this.restore()}}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var i=this.createItem(this.layers[t],this,this.globalData);e[t]=i,i.initExpressions()}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([BaseRenderer],HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var i=t.getBaseElement();if(i){var r=this.layers[e];if(r.ddd&&this.supports3d)this.addTo3dContainer(i,e);else{for(var s,a,n,o=0;o<e;)this.elements[o]&&this.elements[o]!==!0&&this.elements[o].getBaseElement&&(a=this.elements[o],n=this.layers[o].ddd?this.getThreeDContainerByPos(o):a.getBaseElement(),s=n||s),o+=1;s?r.ddd&&this.supports3d||this.layerElement.insertBefore(i,s):r.ddd&&this.supports3d||this.layerElement.appendChild(i)}}},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.globalData,this):new SVGShapeElement(t,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.globalData,this):new SVGTextElement(t,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.globalData,this):new IImageElement(t,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.globalData,this):new SVGCompElement(t,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.globalData,this):new ISolidElement(t,this.globalData,this)},HybridRenderer.prototype.createNull=SVGRenderer.prototype.createNull,HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,i=this.threeDElements.length;e<i;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}},HybridRenderer.prototype.createThreeDContainer=function(t){var e=createTag("div");styleDiv(e),e.style.width=this.globalData.compSize.w+"px",e.style.height=this.globalData.compSize.h+"px",e.style.transformOrigin=e.style.mozTransformOrigin=e.style.webkitTransformOrigin="50% 50%";var i=createTag("div");styleDiv(i),i.style.transform=i.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",e.appendChild(i),this.resizerElem.appendChild(e);var r={container:i,perspectiveElem:e,startPos:t,endPos:t};return this.threeDElements.push(r),r},HybridRenderer.prototype.build3dContainers=function(){var t,e,i=this.layers.length;for(t=0;t<i;t+=1)this.layers[t].ddd&&3!==this.layers[t].ty?(e||(e=this.createThreeDContainer(t)),e.endPos=Math.max(e.endPos,t)):e=null},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var i=0,r=this.threeDElements.length;i<r;){if(e<=this.threeDElements[i].endPos){for(var s,a=this.threeDElements[i].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(s=this.elements[a].getBaseElement()),a+=1;s?this.threeDElements[i].container.insertBefore(t,s):this.threeDElements[i].container.appendChild(t);break}i+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=createTag("div"),i=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",this.resizerElem=e,styleDiv(e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",this.renderConfig.className&&e.setAttribute("class",this.renderConfig.className),i.appendChild(e),e.style.overflow="hidden";var r=createNS("svg");r.setAttribute("width","1"),r.setAttribute("height","1"),styleDiv(r),this.resizerElem.appendChild(r);var s=createNS("defs");r.appendChild(s),this.globalData.defs=s,this.data=t,this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.frameRate=t.fr,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,r),this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,i,r,s=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=s/a,o=this.globalData.compSize.w/this.globalData.compSize.h;o>n?(t=s/this.globalData.compSize.w,e=s/this.globalData.compSize.w,i=0,r=(a-this.globalData.compSize.h*(s/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,i=(s-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,r=0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+i+","+r+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,i=this.globalData.compSize.h,r=this.threeDElements.length;for(t=0;t<r;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(i,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,i=t.length,r=createTag("div");for(e=0;e<i;e+=1)if(t[e].xt){var s=this.createComp(t[e],r,this.globalData.comp,null);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},CVContextData.prototype.duplicate=function(){var t=2*this._length,e=this.savedOp;this.savedOp=createTypedArray("float32",t),this.savedOp.set(e);var i=0;for(i=this._length;i<t;i+=1)this.saved[i]=createTypedArray("float32",16);this._length=t},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){this.canvasContext=this.globalData.canvasContext,this.renderableEffectsManager=new CVEffects(this)},createContent:function(){},setBlendMode:function(){var t=this.globalData;if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e=this.getBlendMode();t.canvasContext.globalCompositeOperation=e}},addMasks:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},renderFrame:function(){this.hidden||(this.renderTransform(),this.renderRenderable(),this.setBlendMode(),this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.imageLoaded=function(){if(this.globalData.elementLoaded(),this.assetData.w!==this.img.width||this.assetData.h!==this.img.height){var t=createTag("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,i,r=t.getContext("2d"),s=this.img.width,a=this.img.height,n=s/a,o=this.assetData.w/this.assetData.h;n>o?(i=a,e=i*o):(e=s,i=e/o),r.drawImage(this.img,(s-e)/2,(a-i)/2,e,i,0,0,this.assetData.w,this.assetData.h),this.img=t}},CVImageElement.prototype.imageFailed=function(){this.failed=!0,this.globalData.elementLoaded()},CVImageElement.prototype.createContent=function(){var t=this.img;t.addEventListener("load",this.imageLoaded.bind(this),!1),t.addEventListener("error",this.imageFailed.bind(this),!1);var e=this.globalData.getAssetsPath(this.assetData);t.src=e},CVImageElement.prototype.renderInnerContent=function(t){this.failed||this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([CanvasRenderer,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},CVCompElement.prototype.destroy=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.layers=null,this.elements=null},CVMaskElement.prototype.renderFrame=function(t){if(this.hasMasks){var e,i,r,s,a=this.element.canvasContext,n=this.masksProperties.length;for(a.beginPath(),e=0;e<n;e++)if("n"!==this.masksProperties[e].mode){this.masksProperties[e].inv&&(a.moveTo(0,0),a.lineTo(this.element.globalData.compWidth,0),a.lineTo(this.element.globalData.compWidth,this.element.globalData.compHeight),a.lineTo(0,this.element.globalData.compHeight),a.lineTo(0,0)),s=this.viewData[e].v,i=t.applyToPointArray(s.v[0][0],s.v[0][1],0),a.moveTo(i[0],i[1]);var o,h=s._length;for(o=1;o<h;o++)r=t.applyToTriplePoints(s.o[o-1],s.i[o],s.v[o]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=t.applyToTriplePoints(s.o[o-1],s.i[0],s.v[0]),a.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),a.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,mat:new Matrix,_matMdf:!1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0)},CVShapeElement.prototype.createStyleElement=function(t){var e={data:t,type:t.ty,elements:[]},i={};if("fl"!=t.ty&&"st"!=t.ty||(i.c=PropertyFactory.getProp(this,t.c,1,255,this),i.c.k||(e.co="rgb("+bm_floor(i.c.v[0])+","+bm_floor(i.c.v[1])+","+bm_floor(i.c.v[2])+")")),i.o=PropertyFactory.getProp(this,t.o,0,.01,this),"st"==t.ty){if(e.lc=this.lcEnum[t.lc]||"round",e.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(e.ml=t.ml),i.w=PropertyFactory.getProp(this,t.w,0,null,this),i.w.k||(e.wi=i.w.v),t.d){var r=new DashProperty(this,t.d,"canvas");i.d=r,i.d.k||(e.da=i.d.dashArray,e["do"]=i.d.dashoffset[0])}}else e.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(e),i.style=e,i},CVShapeElement.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]};return e},CVShapeElement.prototype.createTransformElement=function(t){var e={transform:{mat:new Matrix,opacity:1,_matMdf:!1,_opMdf:!1,op:PropertyFactory.getProp(this,t.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,t,this)},elements:[]};return e},CVShapeElement.prototype.createShapeElement=function(t){var e={nodes:[],trNodes:[],tr:[0,0,0,0,0,0]},i=4;"rc"==t.ty?i=5:"el"==t.ty?i=6:"sr"==t.ty&&(i=7),e.sh=ShapePropertyFactory.getShapeProp(this,t,i,this),this.shapes.push(e.sh),this.addShapeToModifiers(e);var r,s=this.stylesList.length,a=!1,n=!1;for(r=0;r<s;r+=1)this.stylesList[r].closed||(this.stylesList[r].elements.push(e),"st"===this.stylesList[r].type?a=!0:n=!0);return e.st=a,e.fl=n,e},CVShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},CVShapeElement.prototype.searchShapes=function(t,e,i,r){var s,a,n,o,h,l=t.length-1,p=[],m=[];for(s=l;s>=0;s-=1){if(o=this.searchProcessedElement(t[s]),o?e[s]=i[o-1]:t[s]._render=r,"fl"==t[s].ty||"st"==t[s].ty)o?e[s].style.closed=!1:e[s]=this.createStyleElement(t[s]),p.push(e[s].style);else if("gr"==t[s].ty){if(o)for(n=e[s].it.length,a=0;a<n;a+=1)e[s].prevViewData[a]=e[s].it[a];else e[s]=this.createGroupElement(t[s]);this.searchShapes(t[s].it,e[s].it,e[s].prevViewData,r)}else"tr"==t[s].ty?o||(e[s]=this.createTransformElement(t[s])):"sh"==t[s].ty||"rc"==t[s].ty||"el"==t[s].ty||"sr"==t[s].ty?o||(e[s]=this.createShapeElement(t[s])):"tm"==t[s].ty||"rd"==t[s].ty?(o?(h=e[s],h.closed=!1):(h=ShapeModifiers.getModifier(t[s].ty),h.init(this,t[s]),e[s]=h,this.shapeModifiers.push(h)),m.push(h)):"rp"==t[s].ty&&(o?(h=e[s],h.closed=!0):(h=ShapeModifiers.getModifier(t[s].ty),e[s]=h,h.init(this,t,s,e),this.shapeModifiers.push(h),r=!1),m.push(h));this.addProcessedElement(t[s],s+1)}for(l=p.length,s=0;s<l;s+=1)p[s].closed=!0;for(l=m.length,s=0;s<l;s+=1)m[s].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.mat.reset(),this.transformHelper.opacity=1,this.transformHelper._matMdf=!1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(t,e){var i,r;(t._opMdf||e.op._mdf||this._isFirstFrame)&&(e.opacity=t.opacity,e.opacity*=e.op.v,e._opMdf=!0),(t._matMdf||e.mProps._mdf||this._isFirstFrame)&&(r=e.mat,r.cloneFromProps(e.mProps.v.props),e._matMdf=!0,i=t.mat.props,r.transform(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9],i[10],i[11],i[12],i[13],i[14],i[15]))},CVShapeElement.prototype.drawLayer=function(){var t,e,i,r,s,a,n,o,h,l=this.stylesList.length,p=this.globalData.renderer,m=this.globalData.canvasContext;for(t=0;t<l;t+=1)if(h=this.stylesList[t],o=h.type,("st"!==o||0!==h.wi)&&h.data._render&&0!==h.coOp){for(p.save(),a=h.elements,"st"===o?(m.strokeStyle=h.co,m.lineWidth=h.wi,m.lineCap=h.lc,m.lineJoin=h.lj,m.miterLimit=h.ml||0):m.fillStyle=h.co,p.ctxOpacity(h.coOp),"st"!==o&&m.beginPath(),i=a.length,e=0;e<i;e+=1){for("st"===o&&(m.beginPath(),h.da?(m.setLineDash(h.da),m.lineDashOffset=h["do"],this.globalData.isDashed=!0):this.globalData.isDashed&&(m.setLineDash(this.dashResetter),this.globalData.isDashed=!1)),n=a[e].trNodes,s=n.length,r=0;r<s;r+=1)"m"==n[r].t?m.moveTo(n[r].p[0],n[r].p[1]):"c"==n[r].t?m.bezierCurveTo(n[r].pts[0],n[r].pts[1],n[r].pts[2],n[r].pts[3],n[r].pts[4],n[r].pts[5]):m.closePath();"st"===o&&m.stroke()}"st"!==o&&m.fill(h.r),p.restore()}},CVShapeElement.prototype.renderShape=function(t,e,i,r){var s,a,n=e.length-1;for(a=t,s=n;s>=0;s-=1)"tr"==e[s].ty?(a=i[s].transform,this.renderShapeTransform(t,a)):"sh"==e[s].ty||"el"==e[s].ty||"rc"==e[s].ty||"sr"==e[s].ty?this.renderPath(e[s],i[s],a):"fl"==e[s].ty?this.renderFill(e[s],i[s],a):"st"==e[s].ty?this.renderStroke(e[s],i[s],a):"gr"==e[s].ty?this.renderShape(a,e[s].it,i[s].it):"tm"==e[s].ty;r&&this.drawLayer()},CVShapeElement.prototype.renderPath=function(t,e,i){var r,s,a,n,o=i._matMdf||e.sh._mdf||this._isFirstFrame;if(o){var h=e.sh.paths,l=i.mat;n=t._render===!1?0:h._length;var p=e.trNodes;for(p.length=0,a=0;a<n;a+=1){var m=h.shapes[a];if(m&&m.v){for(r=m._length,s=1;s<r;s+=1)1==s&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),p.push({t:"c",pts:l.applyToTriplePoints(m.o[s-1],m.i[s],m.v[s])});1==r&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),m.c&&r&&(p.push({t:"c",pts:l.applyToTriplePoints(m.o[s-1],m.i[0],m.v[0])}),p.push({t:"z"})),e.lStr=p}}if(e.st)for(s=0;s<16;s+=1)e.tr[s]=i.mat.props[s];e.trNodes=p}},CVShapeElement.prototype.renderFill=function(t,e,i){var r=e.style;(e.c._mdf||this._isFirstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||i._opMdf||this._isFirstFrame)&&(r.coOp=e.o.v*i.opacity)},CVShapeElement.prototype.renderStroke=function(t,e,i){var r=e.style,s=e.d;s&&(s._mdf||this._isFirstFrame)&&(r.da=s.dashArray,r["do"]=s.dashoffset[0]),(e.c._mdf||this._isFirstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||i._opMdf||this._isFirstFrame)&&(r.coOp=e.o.v*i.opacity),(e.w._mdf||this._isFirstFrame)&&(r.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var t=this.canvasContext;t.fillStyle=this.data.sc,t.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var i=!1;t.sc&&(i=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var r,s,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=i,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,s=t.finalText.length;var h,l,p,m,f,c,d,u,y,g,v=this.data.singleShape,b=t.tr/1e3*t.finalSize,E=0,x=0,S=!0,P=0;for(r=0;r<s;r+=1){for(h=this.globalData.fontManager.getCharData(t.finalText[r],a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily),l=h&&h.data||{},o.reset(),v&&n[r].n&&(E=-b,x+=t.yOffset,x+=S?1:0,S=!1),f=l.shapes?l.shapes[0].it:[],d=f.length,o.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,o,n[r].line,E,x),y=createSizedArray(d),c=0;c<d;c+=1){for(m=f[c].ks.k.i.length,u=f[c].ks.k,g=[],p=1;p<m;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[c]=g}v&&(E+=n[r].l,E+=b),this.textSpans[P]?this.textSpans[P].elem=y:this.textSpans[P]={elem:y},P+=1}},CVTextElement.prototype.renderInnerContent=function(){var t=this.canvasContext;this.finalTransform.mat.props;t.font=this.values.fValue,t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var e,i,r,s,a,n,o=this.textAnimator.renderedLetters,h=this.textProperty.currentData.l;i=h.length;var l,p,m,f=null,c=null,d=null;for(e=0;e<i;e+=1)if(!h[e].n){if(l=o[e],l&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(l.p),this.globalData.renderer.ctxOpacity(l.o)),this.fill){for(l&&l.fc?f!==l.fc&&(f=l.fc,t.fillStyle=l.fc):f!==this.values.fill&&(f=this.values.fill,t.fillStyle=this.values.fill),p=this.textSpans[e].elem,s=p.length,this.globalData.canvasContext.beginPath(),r=0;r<s;r+=1)for(m=p[r],n=m.length,this.globalData.canvasContext.moveTo(m[0],m[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(m[a],m[a+1],m[a+2],m[a+3],m[a+4],m[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(l&&l.sw?d!==l.sw&&(d=l.sw,t.lineWidth=l.sw):d!==this.values.sWidth&&(d=this.values.sWidth,t.lineWidth=this.values.sWidth),l&&l.sc?c!==l.sc&&(c=l.sc,t.strokeStyle=l.sc):c!==this.values.stroke&&(c=this.values.stroke,t.strokeStyle=this.values.stroke),p=this.textSpans[e].elem,s=p.length,this.globalData.canvasContext.beginPath(),r=0;r<s;r+=1)for(m=p[r],n=m.length,this.globalData.canvasContext.moveTo(m[0],m[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(m[a],m[a+1],m[a+2],m[a+3],m[a+4],m[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}l&&this.globalData.renderer.restore()}},CVEffects.prototype.renderFrame=function(){},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects(this),this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=this.finalTransform.mat.toCSS()),this.finalTransform._opMdf&&(this.transformedElement.style.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},addMasks:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var t;this.data.hasMask?(t=createNS("rect"),t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):(t=createTag("div"),t.style.width=this.data.sw+"px",t.style.height=this.data.sh+"px",t.style.backgroundColor=this.data.sc),this.layerElement.appendChild(t)},extendPrototype([HybridRenderer,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(t,e){
for(var i,r=0;r<e;)this.elements[r]&&this.elements[r].getBaseElement&&(i=this.elements[r].getBaseElement()),r+=1;i?this.layerElement.insertBefore(t,i):this.layerElement.appendChild(t)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var t;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),t=this.svgElement;else{t=createNS("svg");var e=this.comp.data?this.comp.data:this.globalData.compSize;t.setAttribute("width",e.w),t.setAttribute("height",e.h),t.appendChild(this.shapesContainer),this.layerElement.appendChild(t)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.shapeCont=t},HShapeElement.prototype.getTransformedPoint=function(t,e){var i,r=t.length;for(i=0;i<r;i+=1)e=t[i].mProps.v.applyToPointArray(e[0],e[1],0);return e},HShapeElement.prototype.calculateShapeBoundingBox=function(t,e){var i,r,s,a,n,o=t.sh.v,h=t.transformers,l=o._length;if(!(l<=1)){for(i=0;i<l-1;i+=1)r=this.getTransformedPoint(h,o.v[i]),s=this.getTransformedPoint(h,o.o[i]),a=this.getTransformedPoint(h,o.i[i+1]),n=this.getTransformedPoint(h,o.v[i+1]),this.checkBounds(r,s,a,n,e);o.c&&(r=this.getTransformedPoint(h,o.v[i]),s=this.getTransformedPoint(h,o.o[i]),a=this.getTransformedPoint(h,o.i[0]),n=this.getTransformedPoint(h,o.v[0]),this.checkBounds(r,s,a,n,e))}},HShapeElement.prototype.checkBounds=function(t,e,i,r,s){this.getBoundsOfCurve(t,e,i,r);var a=this.shapeBoundingBox;s.x=bm_min(a.left,s.x),s.xMax=bm_max(a.right,s.xMax),s.y=bm_min(a.top,s.y),s.yMax=bm_max(a.bottom,s.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(t,e,i,r){for(var s,a,n,o,h,l,p,m=[[t[0],r[0]],[t[1],r[1]]],f=0;f<2;++f)if(a=6*t[f]-12*e[f]+6*i[f],s=-3*t[f]+9*e[f]-9*i[f]+3*r[f],n=3*e[f]-3*t[f],a=0|a,s=0|s,n=0|n,0!==s)h=a*a-4*n*s,h<0||(l=(-a+bm_sqrt(h))/(2*s),0<l&&l<1&&m[f].push(this.calculateF(l,t,e,i,r,f)),p=(-a-bm_sqrt(h))/(2*s),0<p&&p<1&&m[f].push(this.calculateF(p,t,e,i,r,f)));else{if(0===a)continue;o=-n/a,0<o&&o<1&&m[f].push(this.calculateF(o,t,e,i,r,f))}this.shapeBoundingBox.left=bm_min.apply(null,m[0]),this.shapeBoundingBox.top=bm_min.apply(null,m[1]),this.shapeBoundingBox.right=bm_max.apply(null,m[0]),this.shapeBoundingBox.bottom=bm_max.apply(null,m[1])},HShapeElement.prototype.calculateF=function(t,e,i,r,s,a){return bm_pow(1-t,3)*e[a]+3*bm_pow(1-t,2)*t*i[a]+3*(1-t)*bm_pow(t,2)*r[a]+bm_pow(t,3)*s[a]},HShapeElement.prototype.calculateBoundingBox=function(t,e){var i,r=t.length;for(i=0;i<r;i+=1)t[i]&&t[i].sh?this.calculateShapeBoundingBox(t[i],e):t[i]&&t[i].it&&this.calculateBoundingBox(t[i].it,e)},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var t=this.tempBoundingBox,e=999999;t.x=e,t.xMax=-e,t.y=e,t.yMax=-e,this.calculateBoundingBox(this.itemsData,t),t.width=t.xMax<t.x?0:t.xMax-t.x,t.height=t.yMax<t.y?0:t.yMax-t.y;var i=!1;this.currentBBox.w!==t.width&&(this.currentBBox.w=t.width,this.shapeCont.setAttribute("width",t.width),i=!0),this.currentBBox.h!==t.height&&(this.currentBBox.h=t.height,this.shapeCont.setAttribute("height",t.height),i=!0),(i||this.currentBBox.x!==t.x||this.currentBBox.y!==t.y)&&(this.currentBBox.w=t.width,this.currentBBox.h=t.height,this.currentBBox.x=t.x,this.currentBBox.y=t.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var t=createNS("g");this.maskedElement.appendChild(t),this.innerElem=t}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(this.textProperty.currentData.l?this.textProperty.currentData.l.length:0);var e=this.innerElem.style;e.color=e.fill=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)",t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var i=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.finalSize+"px",e.lineHeight=t.finalSize+"px",i.fClass)this.innerElem.className=i.fClass;else{e.fontFamily=i.fFamily;var r=t.fWeight,s=t.fStyle;e.fontStyle=s,e.fontWeight=r}var a,n,o=t.l;n=o.length;var h,l,p,m,f=this.mHelper,c="",d=0;for(a=0;a<n;a+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?h=this.textPaths[d]:(h=createNS("path"),h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?(l=this.textSpans[d],p=l.children[0]):(l=createTag("div"),p=createNS("svg"),p.appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[d]?this.textPaths[d]:createNS("text"):this.textSpans[d]?(l=this.textSpans[d],h=this.textPaths[d]):(l=createTag("span"),styleDiv(l),h=createTag("span"),styleDiv(h),l.appendChild(h)),this.globalData.fontManager.chars){var u,y=this.globalData.fontManager.getCharData(t.finalText[a],i.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(u=y?y.data:null,f.reset(),u&&u.shapes&&(m=u.shapes[0].it,f.scale(t.finalSize/100,t.finalSize/100),c=this.createPathShape(f,m),h.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(h);else if(this.innerElem.appendChild(l),u&&u.shapes){document.body.appendChild(p);var g=p.getBBox();p.setAttribute("width",g.width+2),p.setAttribute("height",g.height+2),p.setAttribute("viewBox",g.x-1+" "+(g.y-1)+" "+(g.width+2)+" "+(g.height+2)),p.style.transform=p.style.webkitTransform="translate("+(g.x-1)+"px,"+(g.y-1)+"px)",o[a].yOffset=g.y-1,l.appendChild(p)}else p.setAttribute("width",1),p.setAttribute("height",1)}else h.textContent=o[a].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(h):(this.innerElem.appendChild(l),h.style.transform=h.style.webkitTransform="translate3d(0,"+-t.finalSize/1.2+"px,0)");this.isMasked?this.textSpans[d]=h:this.textSpans[d]=l,this.textSpans[d].style.display="block",this.textPaths[d]=h,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.renderInnerContent=function(){if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform._matMdf&&(this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var t,e,i=0,r=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var a,n,o;for(t=0;t<e;t+=1)s[t].n?i+=1:(n=this.textSpans[t],o=this.textPaths[t],a=r[i],i+=1,a._mdf.m&&(this.isMasked?n.setAttribute("transform",a.m):n.style.transform=n.style.webkitTransform=a.m),n.style.opacity=a.o,a.sw&&a._mdf.sw&&o.setAttribute("stroke-width",a.sw),a.sc&&a._mdf.sc&&o.setAttribute("stroke",a.sc),a.fc&&a._mdf.fc&&(o.setAttribute("fill",a.fc),o.style.color=a.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var h=this.innerElem.getBBox();this.currentBBox.w!==h.width&&(this.currentBBox.w=h.width,this.svgElement.setAttribute("width",h.width)),this.currentBBox.h!==h.height&&(this.currentBBox.h=h.height,this.svgElement.setAttribute("height",h.height));var l=1;this.currentBBox.w===h.width+2*l&&this.currentBBox.h===h.height+2*l&&this.currentBBox.x===h.x-l&&this.currentBBox.y===h.y-l||(this.currentBBox.w=h.width+2*l,this.currentBBox.h=h.height+2*l,this.currentBBox.x=h.x-l,this.currentBBox.y=h.y-l,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.svgElement.style.transform=this.svgElement.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(e),e.src=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln)},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var t,e,i=this.comp.threeDElements.length;for(t=0;t<i;t+=1)e=this.comp.threeDElements[t],e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,i=this._isFirstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)i=this.hierarchy[t].finalTransform.mProp._mdf||i;if(i||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy){for(e=this.hierarchy.length-1,t=e;t>=0;t-=1){var r=this.hierarchy[t].finalTransform.mProp;this.mat.translate(-r.p.v[0],-r.p.v[1],r.p.v[2]),this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),this.mat.scale(1/r.s.v[0],1/r.s.v[1],1/r.s.v[2]),this.mat.translate(r.a.v[0],r.a.v[1],r.a.v[2])}}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]],a=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),n=[s[0]/a,s[1]/a,s[2]/a],o=Math.sqrt(n[2]*n[2]+n[0]*n[0]),h=Math.atan2(n[1],o),l=Math.atan2(n[0],-n[2]);this.mat.rotateY(l).rotateX(-h)}if(this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v),!this._prevMat.equals(this.mat)&&this.comp.threeDElements){e=this.comp.threeDElements.length;var p;for(t=0;t<e;t+=1)p=this.comp.threeDElements[t],p.container.style.transform=p.container.style.webkitTransform=this.mat.toCSS();this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.initExpressions=function(){},HCameraElement.prototype.getBaseElement=function(){return null},HEffects.prototype.renderFrame=function(){};var Expressions=function(){function t(t){t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer)}var e={};return e.initExpressions=t,e}();expressionsPlugin=Expressions;var ExpressionManager=function(){function duplicatePropertyValue(t,e){if(e=e||1,"number"==typeof t||t instanceof Number)return t*e;if(t.i)return shape_pool.clone(t);var i,r=createTypedArray("float32",t.length),s=t.length;for(i=0;i<s;i+=1)r[i]=t[i]*e;return r}function isTypeOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if(isTypeOfArray(t)){var i,r=t.length,s=[];for(i=0;i<r;i+=1)s[i]=-t[i];return s}}function sum(t,e){var i=typeof t,r=typeof e;if("string"===i||"string"===r)return t+e;if(("number"===i||"boolean"===i||"string"===i||t instanceof Number)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t+e;if(isTypeOfArray(t)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t=t.slice(0),t[0]=t[0]+e,t;if(("number"===i||"boolean"===i||"string"===i||t instanceof Number)&&isTypeOfArray(e))return e=e.slice(0),e[0]=t+e[0],e;if(isTypeOfArray(t)&&isTypeOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function sub(t,e){var i=typeof t,r=typeof e;if(("number"===i||"boolean"===i||"string"===i||t instanceof Number)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return"string"===i&&(t=parseInt(t)),"string"===r&&(e=parseInt(e)),t-e;if(isTypeOfArray(t)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t=t.slice(0),t[0]=t[0]-e,t;if(("number"===i||"boolean"===i||"string"===i||t instanceof Number)&&isTypeOfArray(e))return e=e.slice(0),e[0]=t-e[0],e;if(isTypeOfArray(t)&&isTypeOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)"number"==typeof t[s]||t[s]instanceof Number?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var i,r=typeof t,s=typeof e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return t*e;var a,n;if(isTypeOfArray(t)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number)){for(n=t.length,i=createTypedArray("float32",n),a=0;a<n;a+=1)i[a]=t[a]*e;return i}if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&isTypeOfArray(e)){for(n=e.length,i=createTypedArray("float32",n),a=0;a<n;a+=1)i[a]=t*e[a];return i}return 0}function div(t,e){var i,r=typeof t,s=typeof e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return t/e;var a,n;if(isTypeOfArray(t)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number)){for(n=t.length,i=createTypedArray("float32",n),a=0;a<n;a+=1)i[a]=t[a]/e;return i}if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&isTypeOfArray(e)){for(n=e.length,i=createTypedArray("float32",n),a=0;a<n;a+=1)i[a]=t/e[a];return i}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}function clamp(t,e,i){if(e>i){var r=i;i=e,e=r}return Math.min(Math.max(t,e),i)}function radiansToDegrees(t){return t/degToRads}function degreesToRadians(t){return t*degToRads}function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var i,r=Math.min(t.length,e.length),s=0;for(i=0;i<r;i+=1)s+=Math.pow(e[i]-t[i],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,i,r=t[0],s=t[1],a=t[2],n=Math.max(r,s,a),o=Math.min(r,s,a),h=(n+o)/2;if(n==o)e=i=0;else{var l=n-o;switch(i=h>.5?l/(2-n-o):l/(n+o),n){case r:e=(s-a)/l+(s<a?6:0);break;case s:e=(a-r)/l+2;break;case a:e=(r-s)/l+4}e/=6}return[e,i,h,t[3]]}function hue2rgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function hslToRgb(t){var e,i,r,s=t[0],a=t[1],n=t[2];if(0===a)e=i=r=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),i=hue2rgb(h,o,s),r=hue2rgb(h,o,s-1/3)}return[e,i,r,t[3]]}function linear(t,e,i,r,s){if(void 0===r||void 0===s)return linear(t,0,1,e,i);if(t<=e)return r;if(t>=i)return s;var a=i===e?0:(t-e)/(i-e);if(!r.length)return r+(s-r)*a;var n,o=r.length,h=createTypedArray("float32",o);for(n=0;n<o;n+=1)h[n]=r[n]+(s[n]-r[n])*a;return h}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var i,r=e.length;t||(t=createTypedArray("float32",r));var s=createTypedArray("float32",r),a=BMMath.random();for(i=0;i<r;i+=1)s[i]=t[i]+a*(e[i]-t[i]);return s}void 0===t&&(t=0);var n=BMMath.random();return t+n*(e-t)}function createPath(t,e,i,r){var s,a=t.length,n=shape_pool.newElement();n.setPathData(!!r,a);var o,h,l=[0,0];for(s=0;s<a;s+=1)o=e?e[s]:l,h=i?i[s]:l,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}function lookAt(t,e){var i=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.atan2(i[0],Math.sqrt(i[1]*i[1]+i[2]*i[2]))/degToRads,s=-Math.atan2(i[1],i[2])/degToRads;return[s,r,0]}function easeOut(t,e,i,r,s){return void 0===r?(r=e,s=i):t=(t-e)/(i-e),-(s-r)*t*(t-2)+r}function easeIn(t,e,i,r,s){return void 0===r?(r=e,s=i):t=(t-e)/(i-e),(s-r)*t*t+r}function nearestKey(t){var e,i,r,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(i=-1,t*=elem.comp.globalData.frameRate,t<data.k[0].t)i=1,r=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){i=e+1,r=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(i=e+2,r=data.k[e+1].t):(i=e+1,r=data.k[e].t);break}}i===-1&&(i=e+1,r=data.k[e].t)}else i=0,r=0;var a={};return a.index=i,a.time=r/elem.comp.globalData.frameRate,a}function key(t){var e,i,r;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate};var s;for(s=t!==data.k.length-1||data.k[t].h?data.k[t].s:data.k[t-1].e,r=s.length,i=0;i<r;i+=1)e[i]=s[i];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),anchorPoint=transform.anchorPoint),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!(!elem.hierarchy||!elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=shape_pool.clone(scoped_bm_rt.v)),scoped_bm_rt)}var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=val.indexOf("random")!==-1,elemType=elem.data.ty,transform,content,effect,thisProperty=property;elem.comp.frameDuration=1/elem.comp.globalData.frameRate;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,loopIn,loop_in,loopOut,loop_out,toWorld,fromWorld,fromComp,fromCompToSurface,anchorPoint,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,wiggle=function(t,e){var i,r,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s);t=5;var n=Math.floor(time*t);for(i=0,r=0;i<n;){for(r=0;r<s;r+=1)a[r]+=-e+2*e*BMMath.random();i+=1}var o=time*t,h=o-Math.floor(o),l=createTypedArray("float32",s);if(s>1){for(r=0;r<s;r+=1)l[r]=this.pv[r]+a[r]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,textIndex,textTotal,selectorValue,index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random());return executeExpression}var ob={},Math=BMMath,window=null,document=null,add=sum,radians_to_degrees=radiansToDegrees,degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];return ob.initiateExpression=initiateExpression,ob}();!function(){function t(){return this.pv}function e(t,e,i){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var r=this.comp.renderedFrame,s=this.keyframes,a=s[s.length-1].t;if(r<=a)return this.pv;var n,o;i?(n=e?Math.abs(a-elem.comp.globalData.frameRate*e):Math.max(0,a-this.elem.data.ip),o=a-n):((!e||e>s.length-1)&&(e=s.length-1),o=s[s.length-1-e].t,n=a-o);var h,l,p;if("pingpong"===t){var m=Math.floor((r-o)/n);if(m%2!==0)return this.getValueAtTime((n-(r-o)%n+o)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(o/this.comp.globalData.frameRate,0),c=this.getValueAtTime(a/this.comp.globalData.frameRate,0),d=this.getValueAtTime(((r-o)%n+o)/this.comp.globalData.frameRate,0),u=Math.floor((r-o)/n);if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;h<l;h+=1)p[h]=(c[h]-f[h])*u+d[h];return p}return(c-f)*u+d}if("continue"===t){var y=this.getValueAtTime(a/this.comp.globalData.frameRate,0),g=this.getValueAtTime((a-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;h<l;h+=1)p[h]=y[h]+(y[h]-g[h])*((r-a)/this.comp.globalData.frameRate)/5e-4;return p}return y+(y-g)*((r-a)/.001)}}return this.getValueAtTime(((r-o)%n+o)/this.comp.globalData.frameRate,0)}function i(t,e,i){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var r=this.comp.renderedFrame,s=this.keyframes,a=s[0].t;if(r>=a)return this.pv;var n,o;i?(n=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-a),o=a+n):((!e||e>s.length-1)&&(e=s.length-1),o=s[e].t,n=o-a);var h,l,p;if("pingpong"===t){var m=Math.floor((a-r)/n);if(m%2===0)return this.getValueAtTime(((a-r)%n+a)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(a/this.comp.globalData.frameRate,0),c=this.getValueAtTime(o/this.comp.globalData.frameRate,0),d=this.getValueAtTime((n-(a-r)%n+a)/this.comp.globalData.frameRate,0),u=Math.floor((a-r)/n)+1;if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;h<l;h+=1)p[h]=d[h]-(c[h]-f[h])*u;return p}return d-(c-f)*u}if("continue"===t){var y=this.getValueAtTime(a/this.comp.globalData.frameRate,0),g=this.getValueAtTime((a+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;h<l;h+=1)p[h]=y[h]+(y[h]-g[h])*(a-r)/.001;return p}return y+(y-g)*(a-r)/.001}}return this.getValueAtTime((n-(a-r)%n+a)/this.comp.globalData.frameRate,0)}function r(t){return t!==this._cachingAtTime.lastFrame&&(t*=this.elem.globalData.frameRate,t-=this.offsetTime,this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value}function s(t){if(void 0!==this.vel)return this.vel;var e,i=-.01,r=this.getValueAtTime(t),s=this.getValueAtTime(t+i);if(r.length){e=createTypedArray("float32",r.length);var a;for(a=0;a<r.length;a+=1)e[a]=(s[a]-r[a])/i}else e=(s-r)/i;return e}function a(t){this.propertyGroup=t}function n(t,e,i){e.x&&(i.k=!0,i.x=!0,i.initiateExpression=ExpressionManager.initiateExpression,i.effectsSequence.push(i.initiateExpression(t,e,i).bind(i)))}function o(t){console.warn("Transform at time not supported")}function h(t){}function l(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shape_pool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastTime=t,t*=this.elem.globalData.frameRate,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue}function p(){}var m=function(){function e(t,e){return this.textIndex=t+1,this.textTotal=e,this.getValue(),this.v}return function(i,o){this.pv=1,this.comp=i.comp,this.elem=i,this.mult=.01,this.propType="textSelector",this.textTotal=o.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],n.bind(this)(i,o,this),this.getMult=e,this.getVelocityAtTime=s,this.kf?this.getValueAtTime=r.bind(this):this.getValueAtTime=t.bind(this),this.setGroupProperty=a}}(),f=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,i){var r=f(t,e,i);return r.dynamicProperties.length?r.getValueAtTime=o.bind(r):r.getValueAtTime=h.bind(r),r.setGroupProperty=a,r};var c=PropertyFactory.getProp;PropertyFactory.getProp=function(o,h,l,p,m){var f=c(o,h,l,p,m);f.kf?f.getValueAtTime=r.bind(f):f.getValueAtTime=t.bind(f),f.setGroupProperty=a,f.loopOut=e,f.loopIn=i,f.getVelocityAtTime=s,f.numKeys=1===h.a?h.k.length:0,f.propertyIndex=h.ix;var d=0;return 0!==l&&(d=createTypedArray("float32",1===h.a?h.k[0].s.length:h.k.length)),f._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:d},n(o,h,f),f.k&&m.addDynamicProperty(f),f};var d=ShapePropertyFactory.getConstructorFunction(),u=ShapePropertyFactory.getKeyframedConstructorFunction();p.prototype={vertices:function(t,e){var i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0));var r,s=i._length,a=i[t],n=i.v,o=createSizedArray(s);for(r=0;r<s;r+=1)"i"===t||"o"===t?o[r]=[a[r][0]-n[r][0],a[r][1]-n[r][1]]:o[r]=[a[r][0],a[r][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var i=this.v;void 0!==e&&(i=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(i));for(var r,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){var p=o,m=i.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength;r=bez.getPointInSegment(i.v[p],i.v[m],i.o[p],i.i[m],f,a[o]);break}l+=a[o].addedLength,o+=1}return r||(r=i.c?[i.v[0][0],i.v[0][1]]:[i.v[i._length-1][0],i.v[i._length-1][1]]),r},vectorOnPath:function(t,e,i){t=1==t?this.v.c?0:.999:t;var r=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-r[0],n=s[1]-r[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),h="tangent"===i?[a/o,n/o]:[-n/o,a/o];return h},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:a,getValueAtTime:t},extendPrototype([p],d),extendPrototype([p],u),u.prototype.getValueAtTime=l,u.prototype.initiateExpression=ExpressionManager.initiateExpression;var y=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,i,r,s){var a=y(t,e,i,r,s);return a.propertyIndex=e.ix,a.lock=!1,3===i?n(t,e.pt,a):4===i&&n(t,e.ks,a),a.k&&t.addDynamicProperty(a),a};var g=TextSelectorProp.getTextSelectorProp;TextSelectorProp.getTextSelectorProp=function(t,e,i){return 1===e.t?new m(t,e,i):g(t,e,i)}}(),function(){function t(){return!!this.data.d.x&&(this.comp=this.elem.comp,this.getValue&&(this.getPreValue=this.getValue),this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.getValue=this.getExpressionValue,!0)}TextProperty.prototype.searchProperty=function(){return this.kf=this.searchExpressions()||this.data.d.k.length>1,this.kf},TextProperty.prototype.getExpressionValue=function(t){this.calculateExpression(),this._mdf&&(this.currentData.t=this.v.toString(),this.completeTextData(this.currentData))},TextProperty.prototype.searchExpressions=t}();var ShapeExpressionInterface=function(){function t(t,e,n){var c,d=[],u=t?t.length:0;for(c=0;c<u;c+=1)"gr"==t[c].ty?d.push(i(t[c],e[c],n)):"fl"==t[c].ty?d.push(r(t[c],e[c],n)):"st"==t[c].ty?d.push(s(t[c],e[c],n)):"tm"==t[c].ty?d.push(a(t[c],e[c],n)):"tr"==t[c].ty||("el"==t[c].ty?d.push(o(t[c],e[c],n)):"sr"==t[c].ty?d.push(h(t[c],e[c],n)):"sh"==t[c].ty?d.push(f(t[c],e[c],n)):"rc"==t[c].ty?d.push(l(t[c],e[c],n)):"rd"==t[c].ty?d.push(p(t[c],e[c],n)):"rp"==t[c].ty&&d.push(m(t[c],e[c],n)));return d}function e(e,i,r){var s,a=function(t){for(var e=0,i=s.length;e<i;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}if("number"==typeof t)return s[t-1]};return a.propertyGroup=function(t){return 1===t?a:r(t-1)},s=t(e.it,i.it,a.propertyGroup),a.numProperties=s.length,a.propertyIndex=e.cix,a._name=e.nm,a}function i(t,i,r){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;default:return s.transform}};s.propertyGroup=function(t){return 1===t?s:r(t-1)};var a=e(t,i,s.propertyGroup),o=n(t.it[t.it.length-1],i.it[i.it.length-1],s.propertyGroup);return s.content=a,s.transform=o,Object.defineProperty(s,"_name",{get:function(){return t.nm}}),s.numProperties=t.np,s.propertyIndex=t.ix,s.nm=t.nm,s.mn=t.mn,s}function r(t,e,i){function r(t){return"Color"===t||"color"===t?r.color:"Opacity"===t||"opacity"===t?r.opacity:void 0}return Object.defineProperties(r,{color:{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}},opacity:{get:function(){return ExpressionValue(e.o,100)}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(i),e.o.setGroupProperty(i),r}function s(t,e,i){function r(t){return 1===t?ob:i(t-1)}function s(t){return 1===t?l:r(t-1)}function a(i){Object.defineProperty(l,t.d[i].nm,{get:function(){return ExpressionValue(e.d.dataProps[i].p)}})}function n(t){return"Color"===t||"color"===t?n.color:"Opacity"===t||"opacity"===t?n.opacity:"Stroke Width"===t||"stroke width"===t?n.strokeWidth:void 0}var o,h=t.d?t.d.length:0,l={};for(o=0;o<h;o+=1)a(o),e.d.dataProps[o].p.setGroupProperty(s);return Object.defineProperties(n,{color:{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}},opacity:{get:function(){return ExpressionValue(e.o,100)}},strokeWidth:{get:function(){return ExpressionValue(e.w)}},dash:{get:function(){return l}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),e.w.setGroupProperty(r),n}function a(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return e===t.e.ix||"End"===e||"end"===e?s.end:e===t.s.ix?s.start:e===t.o.ix?s.offset:void 0}return s.propertyIndex=t.ix,
e.s.setGroupProperty(r),e.e.setGroupProperty(r),e.o.setGroupProperty(r),s.propertyIndex=t.ix,Object.defineProperties(s,{start:{get:function(){return ExpressionValue(e.s,1/e.s.mult)}},end:{get:function(){return ExpressionValue(e.e,1/e.e.mult)}},offset:{get:function(){return ExpressionValue(e.o)}},_name:{value:t.nm}}),s.mn=t.mn,s}function n(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return t.a.ix===e||"Anchor Point"===e?s.anchorPoint:t.o.ix===e||"Opacity"===e?s.opacity:t.p.ix===e||"Position"===e?s.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?s.rotation:t.s.ix===e||"Scale"===e?s.scale:t.sk&&t.sk.ix===e||"Skew"===e?s.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?s.skewAxis:void 0}return e.transform.mProps.o.setGroupProperty(r),e.transform.mProps.p.setGroupProperty(r),e.transform.mProps.a.setGroupProperty(r),e.transform.mProps.s.setGroupProperty(r),e.transform.mProps.r.setGroupProperty(r),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(r),e.transform.mProps.sa.setGroupProperty(r)),e.transform.op.setGroupProperty(r),Object.defineProperties(s,{opacity:{get:function(){return ExpressionValue(e.transform.mProps.o,1/e.transform.mProps.o.mult)}},position:{get:function(){return ExpressionValue(e.transform.mProps.p)}},anchorPoint:{get:function(){return ExpressionValue(e.transform.mProps.a)}},scale:{get:function(){return ExpressionValue(e.transform.mProps.s,1/e.transform.mProps.s.mult)}},rotation:{get:function(){return ExpressionValue(e.transform.mProps.r,1/e.transform.mProps.r.mult)}},skew:{get:function(){return ExpressionValue(e.transform.mProps.sk)}},skewAxis:{get:function(){return ExpressionValue(e.transform.mProps.sa)}},_name:{value:t.nm}}),s.ty="tr",s.mn=t.mn,s}function o(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return t.p.ix===e?s.position:t.s.ix===e?s.size:void 0}s.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(r),a.p.setGroupProperty(r),Object.defineProperties(s,{size:{get:function(){return ExpressionValue(a.s)}},position:{get:function(){return ExpressionValue(a.p)}},_name:{value:t.nm}}),s.mn=t.mn,s}function h(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return t.p.ix===e?s.position:t.r.ix===e?s.rotation:t.pt.ix===e?s.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?s.outerRadius:t.os.ix===e?s.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?s.innerRoundness:void 0:s.innerRadius}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return s.propertyIndex=t.ix,a.or.setGroupProperty(r),a.os.setGroupProperty(r),a.pt.setGroupProperty(r),a.p.setGroupProperty(r),a.r.setGroupProperty(r),t.ir&&(a.ir.setGroupProperty(r),a.is.setGroupProperty(r)),Object.defineProperties(s,{position:{get:function(){return ExpressionValue(a.p)}},rotation:{get:function(){return ExpressionValue(a.r,1/a.r.mult)}},points:{get:function(){return ExpressionValue(a.pt)}},outerRadius:{get:function(){return ExpressionValue(a.or)}},outerRoundness:{get:function(){return ExpressionValue(a.os)}},innerRadius:{get:function(){return a.ir?ExpressionValue(a.ir):0}},innerRoundness:{get:function(){return a.is?ExpressionValue(a.is,1/a.is.mult):0}},_name:{value:t.nm}}),s.mn=t.mn,s}function l(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return t.p.ix===e?s.position:t.r.ix===e?s.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?s.size:void 0}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return s.propertyIndex=t.ix,a.p.setGroupProperty(r),a.s.setGroupProperty(r),a.r.setGroupProperty(r),Object.defineProperties(s,{position:{get:function(){return ExpressionValue(a.p)}},roundness:{get:function(){return ExpressionValue(a.r)}},size:{get:function(){return ExpressionValue(a.s)}},_name:{value:t.nm}}),s.mn=t.mn,s}function p(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){if(t.r.ix===e||"Round Corners 1"===e)return s.radius}var a=e;return s.propertyIndex=t.ix,a.rd.setGroupProperty(r),Object.defineProperties(s,{radius:{get:function(){return ExpressionValue(a.rd)}},_name:{value:t.nm}}),s.mn=t.mn,s}function m(t,e,i){function r(t){return 1==t?s:i(--t)}function s(e){return t.c.ix===e||"Copies"===e?s.copies:t.o.ix===e||"Offset"===e?s.offset:void 0}var a=e;return s.propertyIndex=t.ix,a.c.setGroupProperty(r),a.o.setGroupProperty(r),Object.defineProperties(s,{copies:{get:function(){return ExpressionValue(a.c)}},offset:{get:function(){return ExpressionValue(a.o)}},_name:{value:t.nm}}),s.mn=t.mn,s}function f(t,e,i){function r(t){return 1==t?s:i(--t)}function s(t){if("Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t)return s.path}var a=e.sh;return a.setGroupProperty(r),Object.defineProperties(s,{path:{get:function(){return a.k&&a.getValue(),a}},shape:{get:function(){return a.k&&a.getValue(),a}},_name:{value:t.nm},ix:{value:t.ix},mn:{value:t.mn}}),s}return function(e,i,r){function s(t){if("number"==typeof t)return a[t-1];for(var e=0,i=a.length;e<i;){if(a[e]._name===t)return a[e];e+=1}}var a;return s.propertyGroup=r,a=t(e,i,s),s}}(),TextExpressionInterface=function(){return function(t){function e(){}var i,r;return Object.defineProperty(e,"sourceText",{get:function(){var e=t.textProperty.currentData.t;return t.textProperty.currentData.t!==i&&(t.textProperty.currentData.t=i,r=new String(e),r.value=e?e:new String(e)),r}}),e}}(),LayerExpressionInterface=function(){function t(t,e){var i=new Matrix;i.reset();var r;if(r=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,r.applyToMatrix(i),this._elem.hierarchy&&this._elem.hierarchy.length){var s,a=this._elem.hierarchy.length;for(s=0;s<a;s+=1)this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);return i.applyToPointArray(t[0],t[1],t[2]||0)}return i.applyToPointArray(t[0],t[1],t[2]||0)}function e(t,e){var i=new Matrix;i.reset();var r;if(r=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,r.applyToMatrix(i),this._elem.hierarchy&&this._elem.hierarchy.length){var s,a=this._elem.hierarchy.length;for(s=0;s<a;s+=1)this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);return i.inversePoint(t)}return i.inversePoint(t)}function i(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var i,r=this._elem.hierarchy.length;for(i=0;i<r;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}return function(r){function s(t){n.mask=new MaskManagerInterface(t,r)}function a(t){n.effect=t}function n(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return n.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return o;case 4:case"ADBE Effect Parade":return n.effect}}var o;n.toWorld=t,n.fromWorld=e,n.toComp=t,n.fromComp=i,n.sourceRectAtTime=r.sourceRectAtTime.bind(r),n._elem=r,o=TransformExpressionInterface(r.finalTransform.mProp);var h=getDescriptor(o,"anchorPoint");return Object.defineProperties(n,{hasParent:{get:function(){return r.hierarchy.length}},parent:{get:function(){return r.hierarchy[0].layerInterface}},rotation:getDescriptor(o,"rotation"),scale:getDescriptor(o,"scale"),position:getDescriptor(o,"position"),opacity:getDescriptor(o,"opacity"),anchorPoint:h,anchor_point:h,transform:{get:function(){return o}},active:{get:function(){return r.isInRange}}}),n.startTime=r.data.st,n.index=r.data.ind,n.source=r.data.refId,n.height=0===r.data.ty?r.data.h:100,n.width=0===r.data.ty?r.data.w:100,n.registerMaskInterface=s,n.registerEffectsInterface=a,n}}(),CompExpressionInterface=function(){return function(t){function e(e){for(var i=0,r=t.layers.length;i<r;){if(t.layers[i].nm===e||t.layers[i].ind===e)return t.elements[i].layerInterface;i+=1}return{active:!1}}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.globalData.compSize.h,e.width=t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e}}(),TransformExpressionInterface=function(){return function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}return Object.defineProperty(e,"rotation",{get:function(){return t.r?ExpressionValue(t.r,1/degToRads):ExpressionValue(t.rz,1/degToRads)}}),Object.defineProperty(e,"xRotation",{get:function(){return ExpressionValue(t.rx,1/degToRads)}}),Object.defineProperty(e,"yRotation",{get:function(){return ExpressionValue(t.ry,1/degToRads)}}),Object.defineProperty(e,"scale",{get:function(){return ExpressionValue(t.s,100)}}),Object.defineProperty(e,"position",{get:function(){return t.p?ExpressionValue(t.p):[t.px.v,t.py.v,t.pz?t.pz.v:0]}}),Object.defineProperty(e,"xPosition",{get:function(){return ExpressionValue(t.px)}}),Object.defineProperty(e,"yPosition",{get:function(){return ExpressionValue(t.py)}}),Object.defineProperty(e,"zPosition",{get:function(){return ExpressionValue(t.pz)}}),Object.defineProperty(e,"anchorPoint",{get:function(){return ExpressionValue(t.a)}}),Object.defineProperty(e,"opacity",{get:function(){return ExpressionValue(t.o,100)}}),Object.defineProperty(e,"skew",{get:function(){return ExpressionValue(t.sk)}}),Object.defineProperty(e,"skewAxis",{get:function(){return ExpressionValue(t.sa)}}),Object.defineProperty(e,"orientation",{get:function(){return ExpressionValue(t.or)}}),e}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,i=this.compositions.length;e<i;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].prepareFrame(this.compositions[e].data.xt?this.currentFrame:this.compositions[e].renderedFrame),this.compositions[e].compInterface;e+=1}}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){function t(t,i){if(t.effectsManager){var r,s=[],a=t.data.ef,n=t.effectsManager.effectElements.length;for(r=0;r<n;r+=1)s.push(e(a[r],t.effectsManager.effectElements[r],i,t));return function(e){for(var i=t.data.ef,r=0,a=i.length;r<a;){if(e===i[r].nm||e===i[r].mn||e===i[r].ix)return s[r];r+=1}}}}function e(t,r,s,a){function n(t){return 1===t?p:s(t-1)}var o,h=[],l=t.ef.length;for(o=0;o<l;o+=1)5===t.ef[o].ty?h.push(e(t.ef[o],r.effectElements[o],r.effectElements[o].propertyGroup,a)):h.push(i(r.effectElements[o],t.ef[o].ty,a,n));var p=function(e){for(var i=t.ef,r=0,s=i.length;r<s;){if(e===i[r].nm||e===i[r].mn||e===i[r].ix)return 5===i[r].ty?h[r]:h[r]();r+=1}return h[0]()};return p.propertyGroup=n,"ADBE Color Control"===t.mn&&Object.defineProperty(p,"color",{get:function(){return h[0]()}}),Object.defineProperty(p,"numProperties",{get:function(){return t.np}}),p.active=0!==t.en,p}function i(t,e,i,r){function s(){return 10===e?i.comp.compInterface(t.p.v):ExpressionValue(t.p)}return t.p.setGroupProperty&&t.p.setGroupProperty(r),s}var r={createEffectsInterface:t};return r}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}});var e=function(e,i){var r,s=createSizedArray(e.viewData.length),a=e.viewData.length;for(r=0;r<a;r+=1)s[r]=new t(e.viewData[r],e.masksProperties[r]);var n=function(t){for(r=0;r<a;){if(e.masksProperties[r].nm===t)return s[r];r+=1}};return n};return e}(),ExpressionValue=function(){return function(t,e,i){e=e||1;var r;t.k&&t.getValue();var s,a,n,o;if(i){if("color"===i){for(a=4,r=createTypedArray("float32",a),n=createTypedArray("float32",a),s=0;s<a;s+=1)r[s]=n[s]=s<3?t.v[s]*e:1;r.value=n}}else if("unidimensional"===t.propType)o=t.v*e,r=new Number(o),r.value=o;else{for(a=t.pv.length,r=createTypedArray("float32",a),n=createTypedArray("float32",a),s=0;s<a;s+=1)r[s]=n[s]=t.v[s]*e;r.value=n}return r.numKeys=t.keyframes?t.keyframes.length:0,r.key=function(e){return r.numKeys?t.keyframes[e-1].t:0},r.valueAtTime=t.getValueAtTime,r.propertyGroup=t.propertyGroup,r}}();GroupEffect.prototype.getValue=function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},GroupEffect.prototype.addDynamicProperty=addDynamicProperty,GroupEffect.prototype.init=function(t,e){this.data=t,this._mdf=!1,this.effectElements=[];var i,r,s=this.data.ef.length,a=this.data.ef;for(i=0;i<s;i+=1){switch(r=null,a[i].ty){case 0:r=new SliderEffect(a[i],e,this);break;case 1:r=new AngleEffect(a[i],e,this);break;case 2:r=new ColorEffect(a[i],e,this);break;case 3:r=new PointEffect(a[i],e,this);break;case 4:case 7:r=new CheckboxEffect(a[i],e,this);break;case 10:r=new LayerIndexEffect(a[i],e,this);break;case 11:r=new MaskIndexEffect(a[i],e,this);break;case 5:r=new EffectsManager(a[i],e,this);break;default:r=new NoValueEffect(a[i],e,this)}r&&this.effectElements.push(r)}};var lottiejs={};lottiejs.play=play,lottiejs.pause=pause,lottiejs.setLocationHref=setLocationHref,lottiejs.togglePause=togglePause,lottiejs.setSpeed=setSpeed,lottiejs.setDirection=setDirection,lottiejs.stop=stop,lottiejs.searchAnimations=searchAnimations,lottiejs.registerAnimation=registerAnimation,lottiejs.loadAnimation=loadAnimation,lottiejs.setSubframeRendering=setSubframeRendering,lottiejs.resize=resize,lottiejs.goToAndStop=goToAndStop,lottiejs.destroy=destroy,lottiejs.setQuality=setQuality,lottiejs.inBrowser=inBrowser,lottiejs.installPlugin=installPlugin,lottiejs.__getFactory=getFactory,lottiejs.version="5.1.9";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return lottiejs});


(function ($) {
	$.fn.floatingWhatsApp = function (options) {
		var settings = $.extend({
			phone: '',
			message: '',
			size: '72px',
			backgroundColor: '#25D366',
			position: 'left',
			popupMessage: '',
			showPopup: false,
			showOnIE: true,
			autoOpenTimeout: 0,
			headerColor: '#128C7E',
			headerTitle: 'WhatsApp Chat',
			zIndex: 0,
			buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>',
		}, options);

		var isMobile = mobilecheck();

		//set the .floating-wpp default class
		this.addClass('floating-wpp');

		//#region jQuery Elements
		var $button = $(document.createElement('div'));
		var $buttonImageContainer = $(document.createElement('div'));
		var $popup = $(document.createElement('div'));
		var $header = $(document.createElement('div'));
		var $popupMessage = $(document.createElement('div'));
		var $btnSend = $(document.createElement('div'));
		var $inputMessage = $(document.createElement('div'));
		//#endregion

		//#region Main Button
		$buttonImageContainer.addClass('floating-wpp-button-image');

		$button.addClass('floating-wpp-button')
			.append($(settings.buttonImage))
			.css({
				'width': settings.size,
				'height': settings.size,
				'background-color': settings.backgroundColor
			});

		if (!isInternetExplorer() || settings.showOnIE) {
			$button.append($buttonImageContainer).appendTo(this);
		}

		$button.on('click', function () {
			if (isMobile && settings.showPopup) {
				openPopup();
			} else {
				sendWhatsappMessage();
			}
		});
		//#endregion

		//#region Fake Chat Pop-up
		if (settings.showPopup) {
			var $textarea = $(document.createElement('textarea'));
			var $closeBtn = $(document.createElement('strong'));
			var $sendIcon = $('<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 18" width="20" height="18"><defs><clipPath id="_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><rect width="20" height="18"/></clipPath></defs><g clip-path="url(#_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G)"><path d=" M 0 0 L 0 7.813 L 16 9 L 0 10.188 L 0 18 L 20 9 L 0 0 Z " fill="rgb(46,46,46)"/></g></svg>')

			$popup.addClass('floating-wpp-popup');
			$header.addClass('floating-wpp-head');
			$popupMessage.addClass('floating-wpp-message');
			$inputMessage.addClass('floating-wpp-input-message');
			$btnSend.addClass('floating-wpp-btn-send');

			$popupMessage.text(settings.popupMessage);
			$textarea.val(settings.message);

			if (!settings.popupMessage) {
				$popupMessage.hide();
			}

			$header.append('<span>' + settings.headerTitle + '</span>', $closeBtn)
				.css('background-color', settings.headerColor);

			$btnSend.append($sendIcon);
			$inputMessage.append($textarea, $btnSend);

			$closeBtn.addClass('close').html('×');

			$popup.append(
					$header,
					$popupMessage,
					$inputMessage)
				.appendTo(this);

			$popupMessage.click(function () {
				//sendWhatsappMessage();
			});

			$closeBtn.click(function () {
				//popup.removeClass('active');
			});

			$header.click(function () {
				$popup.removeClass('active');
			});

			$textarea.keypress(function (event) {
				settings.message = $(this).val();

				if (event.keyCode == 13 && !event.shiftKey && !isMobile) {
					event.preventDefault();
					$btnSend.click();
				}
			});

			$btnSend.click(function () {
				settings.message = $textarea.val();
				sendWhatsappMessage();
			});

			this.mouseenter(function () {
				openPopup();
			});

			if (settings.autoOpenTimeout > 0) {
				setTimeout(function () {
					openPopup();
				}, settings.autoOpenTimeout);
			}

			function openPopup() {
				if (!$popup.hasClass('active')) {
					$popup.addClass('active');
					$textarea.focus();
				}
			}
		}

		if (settings.zIndex) {
			$(this).css('z-index', settings.zIndex);
		}

		if (settings.position === 'right') {
			this.css({
				left: 'auto',
				right: '15px'
			});
			$popup.css('right', '0');
		}
		//#endregion

		function sendWhatsappMessage() {
			var apilink = 'http://';

			apilink += isMobile ? 'api' : 'web';
			apilink += '.whatsapp.com/send?phone=' + settings.phone + '&text=' + encodeURI(settings.message);

			window.open(apilink);
		}
	}

	function isInternetExplorer() {
		var userAgent = window.navigator.userAgent;
		return userAgent.indexOf("MSIE") >= 0 || userAgent.match(/Trident.*rv\:11\./);
	}

	function mobilecheck() {
		var check = false;
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}
}(jQuery));

$(window).ready(function() {

  $(".preloaderWindow .logo").addClass("show");
  $(".preloaderWindow .line").addClass("show");
  $(".preloaderWindow .text").addClass("show");
  $("#baby").loop = true;
  $("#caricature").loop = true;
  
  $(window).on('load', function() {

    $(".preloaderWindow .logo").removeClass("show");
    $(".preloaderWindow .line").removeClass("show");
    $(".preloaderWindow .text").removeClass("show");
    $(".preloaderWindow").addClass("hide");

  });

  $(window).resize();


  // var path = document.querySelector('.numberPlus');
  // alert(path.getTotalLength());


  $('#fullpage').fullpage({
    autoScrolling: false,
    fitToSection: false,
    menu: '#menu',
    anchors: ['homePage', 'whyPage', 'clientsPage', 'websitesPage', 'ourService', 'whoPage', 'contactPage'],
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == 'down') {
        $('.hamburger').addClass("active");
      } else if (index == 2 && direction == 'up') {
        $('.hamburger').removeClass("active");
      }
    }
  });
  var body = $("html, body");

  $('.scrollDown a').click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  $('.scrollUp a, .buttonHome a, .logo a').click(function() {
    body.animate({
      scrollTop: $(".rhino").offset().top
    }, 800);
    return false;
  });

  rhinoSlider = $('.rhinoSlider').slick();

  $('.goToPrev').click(function() {
    $('.rhinoSlider .slick-prev').click();
  });

  $('.goToNext').click(function() {
    $('.rhinoSlider .slick-next').click();
  });

  $('.goTo3Slide').click(function() {
    rhinoSlider.slick('slickGoTo', 2);
  });

  var quoteSlider = $('.quoteSlider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

  // mobile menu

  $(".hamburger").click(function() {
    $(".menuMobilePopup").show(0);
    $(".menuMobilePopup").animate({
      "opacity": 1
    }, 0);
    $(".menuMobilePopupWindow").delay(0).addClass("show");
  });

  $(".menuMobilePopup a").click(function() {
    $(".menuMobilePopupWindow").removeClass("show");
    $(".menuMobilePopup").delay(200).animate({
      "opacity": 0
    }, 200);
    $(".menuMobilePopup").delay(200).hide(0);
  });

  // quote slider

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.quoteSlider').slick('slickGoTo', slideno - 1);
  });



	particlesJS("particles-js", {
	  particles: {
		number: {
		  value: 800,
		  density: {
			enable: true,
			value_area: 10000
		  }
		},
		color: {
		  value: ["#fbc96b", "#e0a028", "#c78e23", "#ae7d1f", "#fcd996"]
		},
		shape: {
		  type: ["circle"],
		  stroke: {
			width: 0,
			color: "#fff"
		  },
		  polygon: {
			nb_sides: 15
		  },
		  image: {
			src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
			width: 100,
			height: 100
		  }
		},
		opacity: {
		  value: 0.4,
		  random: false,
		  anim: {
			enable: false,
			speed: 0.5,
			opacity_min: 0,
			sync: false
		  }
		},
		size: {
		  value: 8,
		  random: true,
		  anim: {
			enable: false,
			speed: 10,
			size_min: 10,
			sync: false
		  }
		},
		line_linked: {
		  enable: true,
		  distance: 150,
		  color: "#8C6A3A",
		  opacity: 0.5,
		  width: 1
		},
		move: {
		  enable: true,
		  speed: 5,
		  direction: "none",
		  random: false,
		  straight: false,
		  out_mode: "bounce",
		  bounce: false,
		  attract: {
			enable: false,
			rotateX: 600,
			rotateY: 1200
		  }
		}
	  },
	  interactivity: {
		detect_on: "canvas",
		events: {
		  onhover: {
			enable: true,
			mode: "grab"
		  },
		  onclick: {
			enable: true,
			mode: "push"
		  },
		  resize: true
		},
		modes: {
		  grab: {
			distance: 140,
			line_linked: {
			  opacity: 1
			}
		  },
		  bubble: {
			distance: 400,
			size: 40,
			duration: 2,
			opacity: 8,
			speed: 3
		  },
		  repulse: {
			distance: 200,
			duration: 0.4
		  },
		  push: {
			particles_nb: 4
		  },
		  remove: {
			particles_nb: 2
		  }
		}
	  },
	  retina_detect: true
	});



});

/* ---- particles.js config ---- */


