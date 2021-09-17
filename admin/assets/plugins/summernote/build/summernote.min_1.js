!function(a){"use strict";var b=navigator.appVersion.indexOf("Mac")>-1,c=navigator.userAgent.indexOf("MSIE")>-1,d=function(){var a=function(a){return function(b){return a===b}},b=function(a,b){return a===b},c=function(){return!1},d=function(a){return function(){return!a.apply(a,arguments)}},e=function(a){return a};return{eq:a,eq2:b,fail:c,not:d,self:e}}(),e=function(){var a=function(a){return a[0]},b=function(a){return a[a.length-1]},c=function(a){return a.slice(0,a.length-1)},e=function(a){return a.slice(1)},f=function(a,b){return b=b||d.self,a.reduce(function(a,c){return a+b(c)},0)},g=function(a){for(var b=[],c=-1,d=a.length;++c<d;)b[c]=a[c];return b},h=function(c,d){if(0===c.length)return[];var f=e(c);return f.reduce(function(a,c){var e=b(a);return d(b(e),c)?e[e.length]=c:a[a.length]=[c],a},[[a(c)]])},i=function(a){for(var b=[],c=0,d=a.length;d>c;c++)a[c]&&b.push(a[c]);return b};return{head:a,last:b,initial:c,tail:e,sum:f,from:g,compact:i,clusterBy:h}}(),f=function(){var b=function(a){return function(b){return b&&b.nodeName===a}},c=function(a){return a&&/^P|^LI|^H[1-7]/.test(a.nodeName)},f=function(a){return a&&/^UL|^OL/.test(a.nodeName)},g=function(b){return b&&a(b).hasClass("note-editable")},h=function(b){return b&&a(b).hasClass("note-control-sizing")},i=function(a,b){for(;a;){if(b(a))return a;a=a.parentNode}return null},j=function(a,b){b=b||d.fail;var c=[];return i(a,function(a){return c.push(a),b(a)}),c},k=function(b,c){for(var d=j(b),e=c;e;e=e.parentNode)if(a.inArray(e,d)>-1)return e;return null},l=function(a,b){var c=[],d=!1,e=!1,f=function(g){if(g){if(g===a&&(d=!0),d&&!e&&c.push(g),g===b)return e=!0,void 0;for(var h=0,i=g.childNodes.length;i>h;h++)f(g.childNodes[h])}};return f(k(a,b)),c},m=function(a,b){b=b||d.fail;for(var c=[];a&&(c.push(a),!b(a));)a=a.previousSibling;return c},n=function(a,b){b=b||d.fail;for(var c=[];a&&(c.push(a),!b(a));)a=a.nextSibling;return c},o=function(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a},p=function(b,c){return a.each(c,function(a,c){b.appendChild(c)}),b},q=b("#text"),r=function(a){return q(a)?a.nodeValue.length:a.childNodes.length},s=function(a){for(var b=0;a=a.previousSibling;)b+=1;return b},t=function(b,c){var f=e.initial(j(c,d.eq(b)));return a.map(f,s).reverse()},u=function(a,b){for(var c=a,d=0,e=b.length;e>d;d++)c=c.childNodes[b[d]];return c},v=function(a,b){if(0===b)return a;if(b>=r(a))return a.nextSibling;if(q(a))return a.splitText(b);var c=a.childNodes[b];return a=o(a.cloneNode(!1),a),p(a,n(c))},w=function(a,b,c){var e=j(b,d.eq(a));return 1===e.length?v(b,c):e.reduce(function(a,d){var e=d.cloneNode(!1);return o(e,d),a===b&&(a=v(a,c)),p(e,n(a)),e})},x=function(a,b){if(a&&a.parentNode){if(a.removeNode)return a.removeNode(b);var c=a.parentNode;if(!b){for(var d=[],e=0,f=a.childNodes.length;f>e;e++)d.push(a.childNodes[e]);for(var e=0,f=d.length;f>e;e++)c.insertBefore(d[e],a)}c.removeChild(a)}};return{isText:q,isPara:c,isList:f,isEditable:g,isControlSizing:h,isAnchor:b("A"),isDiv:b("DIV"),isSpan:b("SPAN"),isB:b("B"),isU:b("U"),isS:b("S"),isI:b("I"),isImg:b("IMG"),ancestor:i,listAncestor:j,listNext:n,listPrev:m,commonAncestor:k,listBetween:l,insertAfter:o,position:s,makeOffsetPath:t,fromOffsetPath:u,split:w,remove:x}}(),g=function(){var b=!!document.createRange,c=function(a,b){var c,d,g=a.parentElement(),h=document.body.createTextRange(),i=e.from(g.childNodes);for(c=0;c<i.length;c++)if(!f.isText(i[c])){if(h.moveToElementText(i[c]),h.compareEndPoints("StartToStart",a)>=0)break;d=i[c]}if(0!=c&&f.isText(i[c-1])){var j=document.body.createTextRange(),k=null;j.moveToElementText(d||g),j.collapse(!d),k=d?d.nextSibling:g.firstChild;var l=a.duplicate();l.setEndPoint("StartToStart",j);for(var m=l.text.replace(/[\r\n]/g,"").length;m>k.nodeValue.length&&k.nextSibling;)m-=k.nodeValue.length,k=k.nextSibling;k.nodeValue,b&&k.nextSibling&&f.isText(k.nextSibling)&&m==k.nodeValue.length&&(m-=k.nodeValue.length,k=k.nextSibling),g=k,c=m}return{cont:g,offset:c}},g=function(a){var b=function(a,c){var g,h;if(f.isText(a)){var i=f.listPrev(a,d.not(f.isText)),j=e.last(i).previousSibling;g=j||a.parentNode,c+=e.sum(e.tail(i),f.length),h=!j}else{if(g=a.childNodes[c]||a,f.isText(g))return b(g,c);c=0,h=!1}return{cont:g,collapseToStart:h,offset:c}},c=document.body.createTextRange(),g=b(a.cont,a.offset);return c.moveToElementText(g.cont),c.collapse(g.collapseToStart),c.moveStart("character",g.offset),c},h=function(c,h,i,j){this.sc=c,this.so=h,this.ec=i,this.eo=j;var k=function(){if(b){var a=document.createRange();return a.setStart(c,h),a.setEnd(i,j),a}var d=g({cont:c,offset:h});return d.setEndPoint("EndToEnd",g({cont:i,offset:j})),d};this.select=function(){var a=k();if(b){var c=document.getSelection();c.rangeCount>0&&c.removeAllRanges(),c.addRange(a)}else a.select()},this.listPara=function(){var b=f.listBetween(c,i),g=e.compact(a.map(b,function(a){return f.ancestor(a,f.isPara)}));return a.map(e.clusterBy(g,d.eq2),e.head)};var l=function(a){return function(){var b=f.ancestor(c,a);return b&&b===f.ancestor(i,a)}};this.isOnEditable=l(f.isEditable),this.isOnList=l(f.isList),this.isOnAnchor=l(f.isAnchor),this.isCollapsed=function(){return c===i&&h===j},this.insertNode=function(a){var c=k();b?c.insertNode(a):c.pasteHTML(a.outerHTML)},this.toString=function(){var a=k();return b?a.toString():a.text},this.bookmark=function(a){return{s:{path:f.makeOffsetPath(a,c),offset:h},e:{path:f.makeOffsetPath(a,i),offset:j}}}};return{create:function(a,d,e,f){if(0===arguments.length)if(b){var g=document.getSelection().getRangeAt(0);a=g.startContainer,d=g.startOffset,e=g.endContainer,f=g.endOffset}else{var i=document.selection.createRange(),j=i.duplicate();j.collapse(!1);var k=i;k.collapse(!0);var l=c(k,!0),m=c(j,!1);a=l.cont,d=l.offset,e=m.cont,f=m.offset}else 2===arguments.length&&(e=a,f=d);return new h(a,d,e,f)},createFromBookmark:function(a,b){var c=f.fromOffsetPath(a,b.s.path),d=b.s.offset,e=f.fromOffsetPath(a,b.e.path),g=b.e.offset;return new h(c,d,e,g)}}}(),h=function(){this.stylePara=function(b,c){var d=b.listPara();a.each(d,function(b,d){a.each(c,function(a,b){d.style[a]=b})})},this.current=function(b,c){var d=a(f.isText(b.sc)?b.sc.parentNode:b.sc),e=d.css(["font-size","text-align","list-style-type","line-height"])||{};if(e["font-size"]=parseInt(e["font-size"]),e["font-bold"]=document.queryCommandState("bold")?"bold":"normal",e["font-italic"]=document.queryCommandState("italic")?"italic":"normal",e["font-underline"]=document.queryCommandState("underline")?"underline":"normal",b.isOnList()){var g=["circle","disc","disc-leading-zero","square"],h=a.inArray(e["list-style-type"],g)>-1;e["list-style"]=h?"unordered":"ordered"}else e["list-style"]="none";var i=f.ancestor(b.sc,f.isPara);if(i&&i.style["line-height"])e["line-height"]=i.style.lineHeight;else{var j=parseInt(e["line-height"])/parseInt(e["font-size"]);e["line-height"]=j.toFixed(1)}return e.image=f.isImg(c)&&c,e.anchor=b.isOnAnchor()&&f.ancestor(b.sc,f.isAnchor),e.aAncestor=f.listAncestor(b.sc,f.isEditable),e}},i=function(){var a=[],b=[],c=function(a){var b=a[0],c=g.create();return{contents:a.html(),bookmark:c.bookmark(b),scrollTop:a.scrollTop()}},d=function(a,b){a.html(b.contents).scrollTop(b.scrollTop),g.createFromBookmark(a[0],b.bookmark).select()};this.undo=function(e){var f=c(e);0!==a.length&&(d(e,a.pop()),b.push(f))},this.redo=function(e){var f=c(e);0!==b.length&&(d(e,b.pop()),a.push(f))},this.recordUndo=function(d){b=[],a.push(c(d))}},j=function(){var b=new h;this.currentStyle=function(a){var c=g.create();return c.isOnEditable()&&b.current(c,a)},this.tab=function(b){d(b);var c=g.create(),e=new Array(b.data("tabsize")+1).join("&nbsp;");c.insertNode(a('<span id="noteTab">'+e+"</span>")[0]);var h=a("#noteTab").removeAttr("id");c=g.create(h[0],1),c.select(),f.remove(h[0])},this.undo=function(a){a.data("NoteHistory").undo(a)},this.redo=function(a){a.data("NoteHistory").redo(a)};for(var d=this.recordUndo=function(a){a.data("NoteHistory").recordUndo(a)},e=["bold","italic","underline","strikethrough","justifyLeft","justifyCenter","justifyRight","justifyFull","insertOrderedList","insertUnorderedList","indent","outdent","formatBlock","removeFormat","backColor","foreColor","insertImage","insertHorizontalRule"],i=0,j=e.length;j>i;i++)this[e[i]]=function(a){return function(b,c){d(b),document.execCommand(a,!1,c)}}(e[i]);this.formatBlock=function(a,b){b=c?"<"+b+">":b,document.execCommand("FormatBlock",!1,b)},this.fontSize=function(a,b){d(a),document.execCommand("fontSize",!1,3);var c=a.find("font[size=3]");c.removeAttr("size").css("font-size",b+"px")},this.lineHeight=function(a,c){d(a),b.stylePara(g.create(),{lineHeight:c})},this.unlink=function(a){var b=g.create();if(b.isOnAnchor()){d(a);var c=f.ancestor(b.sc,f.isAnchor);b=g.create(c,0,c,1),b.select(),document.execCommand("unlink")}},this.setLinkDialog=function(b,e){var h=g.create();if(h.isOnAnchor()){var i=f.ancestor(h.sc,f.isAnchor);h=g.create(i,0,i,1)}e({range:h,text:h.toString(),url:h.isOnAnchor()?f.ancestor(h.sc,f.isAnchor).href:""},function(e){h.select(),d(b);var f=-1!==e.toLowerCase().indexOf("://"),i=f?e:"http://"+e;if(c&&h.isCollapsed()){h.insertNode(a('<A id="linkAnchor">'+e+"</A>")[0]);var j=a("#linkAnchor").removeAttr("id").attr("href",i);h=g.create(j[0],0,j[0],1),h.select()}else document.execCommand("createlink",!1,i)})},this.color=function(a,b){var c=JSON.parse(b);d(a),document.execCommand("foreColor",!1,c.foreColor),document.execCommand("backColor",!1,c.backColor)},this.insertTable=function(b,e){d(b);for(var f,h=e.split("x"),i=h[0],j=h[1],k=[],l=c?"&nbsp;":"<br/>",m=0;i>m;m++)k.push("<td>"+l+"</td>");f=k.join("");for(var n,o=[],p=0;j>p;p++)o.push("<tr>"+f+"</tr>");n=o.join("");var q='<table class="table table-bordered">'+n+"</table>";g.create().insertNode(a(q)[0])},this.float=function(a,b,c){d(a),c.style.cssFloat=b},this.resize=function(a,b,c){d(a),c.style.width=a.width()*b+"px",c.style.height=""},this.resizeTo=function(a,b){var c=a.y/a.x,d=b.data("ratio");b.css({width:d>c?a.x:a.y/d,height:d>c?a.x*d:a.y})}},k=function(){this.update=function(b,c){var d=function(b,c){b.find(".dropdown-menu li a").each(function(){var b=a(this).attr("data-value")==c;this.className=b?"checked":""})},e=b.find(".note-fontsize");e.find(".note-current-fontsize").html(c["font-size"]),d(e,parseFloat(c["font-size"]));var f=b.find(".note-height");d(f,parseFloat(c["line-height"]));var g=function(a,c){var d=b.find(a);d[c()?"addClass":"removeClass"]("active")};g('button[data-event="bold"]',function(){return"bold"===c["font-bold"]}),g('button[data-event="italic"]',function(){return"italic"===c["font-italic"]}),g('button[data-event="underline"]',function(){return"underline"===c["font-underline"]}),g('button[data-event="justifyLeft"]',function(){return"left"===c["text-align"]||"start"===c["text-align"]}),g('button[data-event="justifyCenter"]',function(){return"center"===c["text-align"]}),g('button[data-event="justifyRight"]',function(){return"right"===c["text-align"]}),g('button[data-event="justifyFull"]',function(){return"justify"===c["text-align"]}),g('button[data-event="insertUnorderedList"]',function(){return"unordered"===c["list-style"]}),g('button[data-event="insertOrderedList"]',function(){return"ordered"===c["list-style"]})},this.updateRecentColor=function(b,c,d){var e=a(b).closest(".note-color"),f=e.find(".note-recent-color"),g=JSON.parse(f.attr("data-value"));g[c]=d,f.attr("data-value",JSON.stringify(g));var h="backColor"===c?"background-color":"color";f.find("i").css(h,d)},this.updateFullscreen=function(a,b){var c=a.find('button[data-event="fullscreen"]');c[b?"addClass":"removeClass"]("active")}},l=function(){var b=function(b,c){var d=a(c),e=d.position(),f=d.height();b.css({display:"block",left:e.left,top:e.top+f})};this.update=function(a,c){var d=a.find(".note-link-popover"),e=a.find(".note-image-popover");if(c.anchor){var f=d.find("a");f.attr("href",c.anchor.href).html(c.anchor.href),b(d,c.anchor)}else d.hide();c.image?b(e,c.image):e.hide()},this.hide=function(a){a.children().hide()}},m=function(){this.update=function(b,c){var d=b.find(".note-control-selection");if(c.image){var e=a(c.image),f=e.position(),g={w:e.width(),h:e.height()};d.css({display:"block",left:f.left,top:f.top,width:g.w,height:g.h}).data("target",c.image);var h=g.w+"x"+g.h;d.find(".note-control-selection-info").text(h)}else d.hide()},this.hide=function(a){a.children().hide()}},n=function(){this.showImageDialog=function(b,c,d){var e=b.find(".note-image-dialog"),f=b.find(".note-dropzone"),g=b.find(".note-image-input");e.on("shown.bs.modal",function(){f.on("dragenter dragover dragleave",!1),f.on("drop",function(a){c(a),e.modal("hide")}),g.on("change",function(){d(this.files),a(this).val(""),e.modal("hide")})}).on("hidden.bs.modal",function(){f.off("dragenter dragover dragleave drop"),g.off("change"),e.off("shown.bs.modal hidden.bs.modal")}).modal("show")},this.showLinkDialog=function(a,b,c){var d=a.find(".note-link-dialog"),e=d.find(".note-link-text"),f=d.find(".note-link-url"),g=d.find(".note-link-btn");d.on("shown.bs.modal",function(){e.html(b.text),f.val(b.url).keyup(function(){f.val()?g.removeClass("disabled").attr("disabled",!1):g.addClass("disabled").attr("disabled",!0),b.text||e.html(f.val())}).trigger("focus"),g.click(function(a){d.modal("hide"),c(f.val()),a.preventDefault()})}).on("hidden.bs.modal",function(){f.off("keyup"),g.off("click"),d.off("shown.bs.modal hidden.bs.modal")}).modal("show")},this.showHelpDialog=function(a){a.find(".note-help-dialog").modal("show")}},o=function(){var c=new j,d=new k,e=new l,g=new m,h=new n,i={BACKSPACE:8,TAB:9,ENTER:13,SPACE:32,NUM0:48,NUM1:49,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLACH:220,RIGHTBRACKET:221},o=function(b){var c=a(b).closest(".note-editor");return{editor:function(){return c},toolbar:function(){return c.find(".note-toolbar")},editable:function(){return c.find(".note-editable")},statusbar:function(){return c.find(".note-statusbar")},popover:function(){return c.find(".note-popover")},handle:function(){return c.find(".note-handle")},dialog:function(){return c.find(".note-dialog")}}},p=function(a){var d=b?a.metaKey:a.ctrlKey,e=a.shiftKey,f=a.keyCode,g=d||e||f===i.TAB,j=g?o(a.target):null;if(f===i.TAB&&j.editable().data("tabsize"))c.tab(j.editable());else if(d&&(e&&f===i.Z||f===i.Y))c.redo(j.editable());else if(d&&f===i.Z)c.undo(j.editable());else if(d&&f===i.B)c.bold(j.editable());else if(d&&f===i.I)c.italic(j.editable());else if(d&&f===i.U)c.underline(j.editable());else if(d&&e&&f===i.S)c.strikethrough(j.editable());else if(d&&f===i.BACKSLACH)c.removeFormat(j.editable());else if(d&&f===i.K)c.setLinkDialog(j.editable(),function(a,b){h.showLinkDialog(j.dialog(),a,b)});else if(d&&f===i.SLASH)h.showHelpDialog(j.dialog());else if(d&&e&&f===i.L)c.justifyLeft(j.editable());else if(d&&e&&f===i.E)c.justifyCenter(j.editable());else if(d&&e&&f===i.R)c.justifyRight(j.editable());else if(d&&e&&f===i.J)c.justifyFull(j.editable());else if(d&&e&&f===i.NUM7)c.insertUnorderedList(j.editable());else if(d&&e&&f===i.NUM8)c.insertOrderedList(j.editable());else if(d&&f===i.LEFTBRACKET)c.outdent(j.editable());else if(d&&f===i.RIGHTBRACKET)c.indent(j.editable());else if(d&&f===i.NUM0)c.formatBlock(j.editable(),"P");else if(d&&i.NUM1<=f&&f<=i.NUM6){var k="H"+String.fromCharCode(f);c.formatBlock(j.editable(),k)}else{if(!d||f!==i.ENTER)return(f===i.BACKSPACE||f===i.ENTER||f===i.SPACE)&&c.recordUndo(o(a.target).editable()),void 0;c.insertHorizontalRule(j.editable())}a.preventDefault()},q=function(b,d){b.trigger("focus"),a.each(d,function(a,d){var e=new FileReader;e.onload=function(a){c.insertImage(b,a.target.result)},e.readAsDataURL(d)})},r=function(a){var b=a.originalEvent.dataTransfer;if(b&&b.files){var c=o(a.currentTarget||a.target);q(c.editable(),b.files)}a.stopPropagation(),a.preventDefault()},s=function(a){f.isImg(a.target)&&a.preventDefault()},t=function(a){var b=o(a.currentTarget||a.target),f=c.currentStyle(a.target);f&&(d.update(b.toolbar(),f),e.update(b.popover(),f),g.update(b.handle(),f))},u=function(a){var b=o(a.currentTarget||a.target);e.hide(b.popover()),g.hide(b.handle())},v=function(b){if(f.isControlSizing(b.target)){var d,h=o(b.target),i=h.handle(),j=h.popover(),k=h.editable(),l=h.editor(),m=i.find(".note-control-selection").data("target"),n=a(m),p=n.offset(),q=a(document).scrollTop();l.on("mousemove",function(a){d={x:a.clientX-p.left,y:a.clientY-(p.top-q)},c.resizeTo(d,n),g.update(i,{image:m}),e.update(j,{image:m})}).on("mouseup",function(){l.off("mousemove").off("mouseup")}),n.data("ratio")||n.data("ratio",n.height()/n.width()),c.recordUndo(k),b.stopPropagation(),b.preventDefault()}},w=function(b){var c=a(b.target).closest("[data-event]");c.length>0&&b.preventDefault()},x=function(b){var e=a(b.target).closest("[data-event]");if(e.length>0){var f,g=e.attr("data-event"),i=e.attr("data-value"),j=o(b.target),k=j.dialog(),l=j.editable();if(-1!==a.inArray(g,["resize","float"])){var m=j.handle(),n=m.find(".note-control-selection");f=n.data("target")}if(c[g]&&(l.trigger("focus"),c[g](l,i,f)),-1!==a.inArray(g,["backColor","foreColor"]))d.updateRecentColor(e[0],g,i);else if("showLinkDialog"===g)c.setLinkDialog(l,function(a,b){h.showLinkDialog(k,a,b)});else if("showImageDialog"===g)h.showImageDialog(k,r,function(a){q(l,a)});else if("showHelpDialog"===g)h.showHelpDialog(k);else if("fullscreen"===g){var p=j.editor();p.toggleClass("fullscreen");var s=j.toolbar(),u=function(){var b=a(window).height()-s.outerHeight();l.css("height",b)},v=p.hasClass("fullscreen");v?(l.data("orgHeight",l.css("height")),a(window).resize(u).trigger("resize")):(l.css("height",l.data("orgHeight")),a(window).off("resize")),d.updateFullscreen(s,v)}t(b)}},y=24,z=function(b){var c=a(document),d=o(b.target).editable(),e=d.offset().top-c.scrollTop(),f=function(a){d.height(a.clientY-(e+y))},g=function(){c.unbind("mousemove",f).unbind("mouseup",g)};c.mousemove(f).mouseup(g),b.stopPropagation(),b.preventDefault()},A=18,B=function(b){var c,d=a(b.target.parentNode),e=d.next(),f=d.find(".note-dimension-picker-mousecatcher"),g=d.find(".note-dimension-picker-highlighted"),h=d.find(".note-dimension-picker-unhighlighted");if(void 0===b.offsetX){var i=a(b.target).offset();c={x:b.pageX-i.left,y:b.pageY-i.top}}else c={x:b.offsetX,y:b.offsetY};var j={c:Math.ceil(c.x/A)||1,r:Math.ceil(c.y/A)||1};g.css({width:j.c+"em",height:j.r+"em"}),f.attr("data-value",j.c+"x"+j.r),3<j.c&&j.c<10&&h.css({width:j.c+1+"em"}),3<j.r&&j.r<10&&h.css({height:j.r+1+"em"}),e.html(j.c+" x "+j.r)};this.attach=function(a,b){a.editable.on("keydown",p),a.editable.on("mousedown",s),a.editable.on("keyup mouseup",t),a.editable.on("scroll",u),a.editable.on("dragenter dragover dragleave",!1),a.editable.on("drop",r),a.handle.on("mousedown",v),a.toolbar.on("click",x),a.popover.on("click",x),a.toolbar.on("mousedown",w),a.popover.on("mousedown",w),a.statusbar.on("mousedown",z);var c=a.toolbar,d=c.find(".note-dimension-picker-mousecatcher");d.on("mousemove",B),b.onenter&&a.editable.keypress(function(a){a.keyCode===i.ENTER&&b.onenter(a)}),b.onfocus&&a.editable.focus(b.onfocus),b.onblur&&a.editable.blur(b.onblur),b.onkeyup&&a.editable.keyup(b.onkeyup),b.onkeydown&&a.editable.keydown(b.onkeydown)},this.dettach=function(a){a.editable.off(),a.toolbar.off(),a.handle.off(),a.popover.off()}},p=function(){var c={picture:'<button type="button" class="btn btn-default btn-sm btn-small" title="Picture" data-event="showImageDialog" tabindex="-1"><i class="icon-picture"></i></button>',link:'<button type="button" class="btn btn-default btn-sm btn-small" title="Link" data-event="showLinkDialog" data-shortcut="Ctrl+K" data-mac-shortcut="⌘+K" tabindex="-1"><i class="icon-link"></i></button>',table:'<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="Table" data-toggle="dropdown" tabindex="-1"><i class="icon-table"></i> <span class="caret"></span></button><ul class="dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>',style:'<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="Style" data-toggle="dropdown" tabindex="-1"><i class="icon-magic"></i> <span class="caret"></span></button><ul class="dropdown-menu"><li><a data-event="formatBlock" data-value="p">Normal</a></li><li><a data-event="formatBlock" data-value="blockquote"><blockquote>Quote</blockquote></a></li><li><a data-event="formatBlock" data-value="pre">Code</a></li><li><a data-event="formatBlock" data-value="h1"><h1>Header 1</h1></a></li><li><a data-event="formatBlock" data-value="h2"><h2>Header 2</h2></a></li><li><a data-event="formatBlock" data-value="h3"><h3>Header 3</h3></a></li><li><a data-event="formatBlock" data-value="h4"><h4>Header 4</h4></a></li><li><a data-event="formatBlock" data-value="h5"><h5>Header 5</h5></a></li><li><a data-event="formatBlock" data-value="h6"><h6>Header 6</h6></a></li></ul>',fontsize:'<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="Font Size" tabindex="-1"><span class="note-current-fontsize">11</span> <b class="caret"></b></button><ul class="dropdown-menu"><li><a data-event="fontSize" data-value="8"><i class="icon-ok"></i> 8</a></li><li><a data-event="fontSize" data-value="9"><i class="icon-ok"></i> 9</a></li><li><a data-event="fontSize" data-value="10"><i class="icon-ok"></i> 10</a></li><li><a data-event="fontSize" data-value="11"><i class="icon-ok"></i> 11</a></li><li><a data-event="fontSize" data-value="12"><i class="icon-ok"></i> 12</a></li><li><a data-event="fontSize" data-value="14"><i class="icon-ok"></i> 14</a></li><li><a data-event="fontSize" data-value="18"><i class="icon-ok"></i> 18</a></li><li><a data-event="fontSize" data-value="24"><i class="icon-ok"></i> 24</a></li><li><a data-event="fontSize" data-value="36"><i class="icon-ok"></i> 36</a></li></ul>',color:'<button type="button" class="btn btn-default btn-sm btn-small note-recent-color" title="Recent Color" data-event="color" data-value=\'{"foreColor":"black","backColor":"yellow"}\' tabindex="-1"><i class="icon-font" style="color:black;background-color:yellow;"></i></button><button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="More Color" data-toggle="dropdown" tabindex="-1"><span class="caret"></span></button><ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">BackColor</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">FontColor</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>',bold:'<button type="button" class="btn btn-default btn-sm btn-small" title="Bold" data-shortcut="Ctrl+B" data-mac-shortcut="⌘+B" data-event="bold" tabindex="-1"><i class="icon-bold"></i></button>',italic:'<button type="button" class="btn btn-default btn-sm btn-small" title="Italic" data-shortcut="Ctrl+I" data-mac-shortcut="⌘+I" data-event="italic" tabindex="-1"><i class="icon-italic"></i></button>',underline:'<button type="button" class="btn btn-default btn-sm btn-small" title="Underline" data-shortcut="Ctrl+U" data-mac-shortcut="⌘+U" data-event="underline" tabindex="-1"><i class="icon-underline"></i></button>',clear:'<button type="button" class="btn btn-default btn-sm btn-small" title="Remove Font Style" data-shortcut="Ctrl+\\" data-mac-shortcut="⌘+\\" data-event="removeFormat" tabindex="-1"><i class="icon-eraser"></i></button>',ul:'<button type="button" class="btn btn-default btn-sm btn-small" title="Unordered list" data-shortcut="Ctrl+Shift+8" data-mac-shortcut="⌘+⇧+7" data-event="insertUnorderedList" tabindex="-1"><i class="icon-list-ul"></i></button>',ol:'<button type="button" class="btn btn-default btn-sm btn-small" title="Ordered list" data-shortcut="Ctrl+Shift+7" data-mac-shortcut="⌘+⇧+8" data-event="insertOrderedList" tabindex="-1"><i class="icon-list-ol"></i></button>',paragraph:'<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" title="Paragraph" data-toggle="dropdown" tabindex="-1"><i class="icon-align-left"></i>  <span class="caret"></span></button><ul class="dropdown-menu"><li><div class="note-align btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="Align left" data-shortcut="Ctrl+Shift+L" data-mac-shortcut="⌘+⇧+L" data-event="justifyLeft" tabindex="-1"><i class="icon-align-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Align center" data-shortcut="Ctrl+Shift+E" data-mac-shortcut="⌘+⇧+E" data-event="justifyCenter" tabindex="-1"><i class="icon-align-center"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Align right" data-shortcut="Ctrl+Shift+R" data-mac-shortcut="⌘+⇧+R" data-event="justifyRight" tabindex="-1"><i class="icon-align-right"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Justify full" data-shortcut="Ctrl+Shift+J" data-mac-shortcut="⌘+⇧+J" data-event="justifyFull" tabindex="-1"><i class="icon-align-justify"></i></button></div></li><li><div class="note-list btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="Outdent" data-shortcut="Ctrl+[" data-mac-shortcut="⌘+[" data-event="outdent" tabindex="-1"><i class="icon-indent-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Indent" data-shortcut="Ctrl+]" data-mac-shortcut="⌘+]" data-event="indent" tabindex="-1"><i class="icon-indent-right"></i></button></li></ul>',height:'<button type="button" class="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="Line Height" tabindex="-1"><i class="icon-text-height"></i>&nbsp; <b class="caret"></b></button><ul class="dropdown-menu"><li><a data-event="lineHeight" data-value="1.0"><i class="icon-ok"></i> 1.0</a></li><li><a data-event="lineHeight" data-value="1.2"><i class="icon-ok"></i> 1.2</a></li><li><a data-event="lineHeight" data-value="1.4"><i class="icon-ok"></i> 1.4</a></li><li><a data-event="lineHeight" data-value="1.5"><i class="icon-ok"></i> 1.5</a></li><li><a data-event="lineHeight" data-value="1.6"><i class="icon-ok"></i> 1.6</a></li><li><a data-event="lineHeight" data-value="1.8"><i class="icon-ok"></i> 1.8</a></li><li><a data-event="lineHeight" data-value="2.0"><i class="icon-ok"></i> 2.0</a></li><li><a data-event="lineHeight" data-value="3.0"><i class="icon-ok"></i> 3.0</a></li></ul>',help:'<button type="button" class="btn btn-default btn-sm btn-small" title="Help" data-shortcut="Ctrl+/" data-mac-shortcut="⌘+/" data-event="showHelpDialog" tabindex="-1"><i class="icon-question"></i></button>',fullscreen:'<button type="button" class="btn btn-default btn-sm btn-small" title="Full Screen" data-event="fullscreen" tabindex="-1"><i class="icon-fullscreen"></i></button>'},d='<div class="note-popover"><div class="note-link-popover popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content note-link-content"><a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="Edit" data-event="showLinkDialog" tabindex="-1"><i class="icon-edit"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Unlink" data-event="unlink" tabindex="-1"><i class="icon-unlink"></i></button></div></div></div><div class="note-image-popover popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content note-image-content"><div class="btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="Resize Full" data-event="resize" data-value="1" tabindex="-1"><i class="icon-resize-full"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Resize Half" data-event="resize" data-value="0.5" tabindex="-1">½</button><button type="button" class="btn btn-default btn-sm btn-small" title="Resize Thrid" data-event="resize" data-value="0.33" tabindex="-1">⅓</button><button type="button" class="btn btn-default btn-sm btn-small" title="Resize Quarter" data-event="resize" data-value="0.25" tabindex="-1">¼</button></div><div class="btn-group"><button type="button" class="btn btn-default btn-sm btn-small" title="Float Left" data-event="float" data-value="left" tabindex="-1"><i class="icon-align-left"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Float Right" data-event="float" data-value="right" tabindex="-1"><i class="icon-align-right"></i></button><button type="button" class="btn btn-default btn-sm btn-small" title="Float None" data-event="float" data-value="none" tabindex="-1"><i class="icon-reorder"></i></button></div></div></div></div>',e='<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>',f='<table class="note-shortcut"><thead><tr><th></th><th>Text formatting</th></tr></thead><tbody><tr><td>⌘ + B</td><td>Toggle Bold</td></tr><tr><td>⌘ + I</td><td>Toggle Italic</td></tr><tr><td>⌘ + U</td><td>Toggle Underline</td></tr><tr><td>⌘ + ⇧ + S</td><td>Toggle Strike</td></tr><tr><td>⌘ + \\</td><td>Remove Font Style</td></tr></tr></tbody></table>',g='<table class="note-shortcut"><thead><tr><th></th><th>Action</th></tr></thead><tbody><tr><td>⌘ + Z</td><td>Undo</td></tr><tr><td>⌘ + ⇧ + Z</td><td>Redo</td></tr><tr><td>⌘ + ]</td><td>Indent</td></tr><tr><td>⌘ + [</td><td>Outdent</td></tr><tr><td>⌘ + K</td><td>Insert Link</td></tr><tr><td>⌘ + ENTER</td><td>Insert Horizontal Rule</td></tr></tbody></table>',h='<table class="note-shortcut"><thead><tr><th></th><th>Paragraph formatting</th></tr></thead><tbody><tr><td>⌘ + ⇧ + L</td><td>Align Left</td></tr><tr><td>⌘ + ⇧ + E</td><td>Align Center</td></tr><tr><td>⌘ + ⇧ + R</td><td>Align Right</td></tr><tr><td>⌘ + ⇧ + J</td><td>Justify Full</td></tr><tr><td>⌘ + ⇧ + NUM7</td><td>Ordered List</td></tr><tr><td>⌘ + ⇧ + NUM8</td><td>Unordered List</td></tr></tbody></table>',j='<table class="note-shortcut"><thead><tr><th></th><th>Document Style</th></tr></thead><tbody><tr><td>⌘ + NUM0</td><td>Normal Text</td></tr><tr><td>⌘ + NUM1</td><td>Heading 1</td></tr><tr><td>⌘ + NUM2</td><td>Heading 2</td></tr><tr><td>⌘ + NUM3</td><td>Heading 3</td></tr><tr><td>⌘ + NUM4</td><td>Heading 4</td></tr><tr><td>⌘ + NUM5</td><td>Heading 5</td></tr><tr><td>⌘ + NUM6</td><td>Heading 6</td></tr></tbody></table>',k='<table class="note-shortcut-layout"><tbody><tr><td>'+g+"</td><td>"+f+"</td></tr>"+"<tr><td>"+j+"</td><td>"+h+"</td></tr>"+"</tbody>"+"</table>",l='<div class="note-dialog"><div class="note-image-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" tabindex="-1">×</button><h4>Insert Image</h4></div><div class="modal-body"><div class="row-fluid"><div class="note-dropzone span12">Drag an image here</div><div>or if you prefer...</div><input class="note-image-input" type="file" class="note-link-url" type="text" /></div></div></div></div></div><div class="note-link-dialog modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" tabindex="-1">×</button><h4>Edit Link</h4></div><div class="modal-body"><div class="row-fluid"><div class="form-group"><label>Text to display</label><span class="note-link-text form-control input-xlarge uneditable-input" /></div><div class="form-group"><label>To what URL should this link go?</label><input class="note-link-url form-control span12" type="text" /></div></div></div><div class="modal-footer"><button href="#" class="btn btn-primary note-link-btn disabled" disabled="disabled">Link</button></div></div></div></div><div class="note-help-dialog modal fade" aria-hidden="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="modal-background"><a class="modal-close pull-right" data-dismiss="modal" aria-hidden="true" tabindex="-1">Close</a><div class="title">Keyboard shortcuts</div>'+k+'<p class="text-center"><a href="//hackerwins.github.io/summernote/" target="_blank">Summernote v0.3</a> · <a href="//github.com/HackerWins/summernote" target="_blank">Project</a> · <a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a></p>'+"</div>"+"</div>"+"</div>"+"</div>"+"</div>",m=function(c,d){c.find("button").each(function(c,d){var e=a(d),f=e.attr(b?"data-mac-shortcut":"data-shortcut");
f&&e.attr("title",function(a,b){return b+" ("+f+")"})}).tooltip({container:"body",placement:d||"top"})},n=[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#EFF7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],o=function(b){b.find(".note-color-palette").each(function(){for(var b=a(this),c=b.attr("data-target-event"),d="",e=0,f=n.length;f>e;e++){for(var g=n[e],h="<div>",i=0,j=g.length;j>i;i++){var k=g[i],l=['<button type="button" class="note-color-btn" style="background-color:',k,';" data-event="',c,'" data-value="',k,'" title="',k,'" data-toggle="button" tabindex="-1"></button>'].join("");h+=l}h+="</div>",d+=h}b.html(d)})};this.createLayout=function(b,f,g,h){if(!b.next().hasClass("note-editor")){var j=a('<div class="note-editor"></div>');f>0&&a('<div class="note-statusbar"><div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div></div>').prependTo(j);var k=a('<div class="note-editable" contentEditable="true"></div>').prependTo(j);f&&k.height(f),g&&k.data("tabsize",g),k.html(b.html()),k.data("NoteHistory",new i);for(var n="",p=0,q=h.length;q>p;p++){var r=h[p];n+='<div class="note-'+r[0]+' btn-group">';for(var s=0,t=r[1].length;t>s;s++)n+=c[r[1][s]];n+="</div>"}n='<div class="note-toolbar btn-toolbar">'+n+"</div>";var u=a(n).prependTo(j);o(u),m(u,"bottom");var v=a(d).prependTo(j);m(v),a(e).prependTo(j),a(l).prependTo(j),j.insertAfter(b),b.hide()}};var p=this.layoutInfoFromHolder=function(a){var b=a.next();if(b.hasClass("note-editor"))return{editor:b,toolbar:b.find(".note-toolbar"),editable:b.find(".note-editable"),statusbar:b.find(".note-statusbar"),popover:b.find(".note-popover"),handle:b.find(".note-handle"),dialog:b.find(".note-dialog")}};this.removeLayout=function(a){var b=p(a);b&&(a.html(b.editable.html()),b.editor.remove(),a.show())}},q=new p,r=new o;a.fn.extend({summernote:function(b){if(b=a.extend({toolbar:[["style",["style"]],["font",["bold","italic","underline","clear"]],["fontsize",["fontsize"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["insert",["link","picture"]],["fullscreen",["fullscreen"]],["help",["help"]]]},b),this.each(function(c,d){var e=a(d);q.createLayout(e,b.height,b.tabsize,b.toolbar);var f=q.layoutInfoFromHolder(e);r.attach(f,b)}),this.first()&&b.focus){var c=q.layoutInfoFromHolder(this.first());c.editable.focus()}this.length>0&&b.oninit&&b.oninit()},code:function(b){if(void 0===b){var c=this.first();if(0==c.length)return;var d=q.layoutInfoFromHolder(c),e=!(!d||!d.editable);return e?d.editable.html():c.html()}this.each(function(c,d){var e=q.layoutInfoFromHolder(a(d));e&&e.editable&&e.editable.html(b)})},destroy:function(){this.each(function(b,c){var d=a(c),e=q.layoutInfoFromHolder(d);e&&e.editable&&(r.dettach(e),q.removeLayout(d))})},summernoteInner:function(){return{dom:f,list:e,func:d,range:g}}})}(window.jQuery),"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d});