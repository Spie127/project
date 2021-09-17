/*
 * File:        ColVis.min.js
 * Version:     1.0.8
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * 
 * Copyright 2010-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD (3 point) style license, as supplied with this software.
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(d){ColVis=function(a,b){(!this.CLASS||"ColVis"!=this.CLASS)&&alert("Warning: ColVis must be initialised with the keyword 'new'");"undefined"==typeof b&&(b={});this.s={dt:null,oInit:b,fnStateChange:null,activate:"click",sAlign:"left",buttonText:"Show / hide columns",hidden:!0,aiExclude:[],abOriginal:[],bShowAll:!1,sShowAll:"Show All",bRestore:!1,sRestore:"Restore original",iOverlayFade:500,fnLabel:null,sSize:"auto",bCssPosition:!1};this.dom={wrapper:null,button:null,collection:null,background:null,
catcher:null,buttons:[],restore:null};ColVis.aInstances.push(this);this.s.dt=a;this._fnConstruct();return this};ColVis.prototype={fnRebuild:function(){for(var a=this.dom.buttons.length-1;0<=a;a--)null!==this.dom.buttons[a]&&this.dom.collection.removeChild(this.dom.buttons[a]);this.dom.buttons.splice(0,this.dom.buttons.length);this.dom.restore&&this.dom.restore.parentNode(this.dom.restore);this._fnAddButtons();this._fnDrawCallback()},_fnConstruct:function(){this._fnApplyCustomisation();var a=this,
b,c;this.dom.wrapper=document.createElement("div");this.dom.wrapper.className="ColVis TableTools";this.dom.button=this._fnDomBaseButton(this.s.buttonText);this.dom.button.className+=" ColVis_MasterButton";this.dom.wrapper.appendChild(this.dom.button);this.dom.catcher=this._fnDomCatcher();this.dom.collection=this._fnDomCollection();this.dom.background=this._fnDomBackground();this._fnAddButtons();b=0;for(c=this.s.dt.aoColumns.length;b<c;b++)this.s.abOriginal.push(this.s.dt.aoColumns[b].bVisible);this.s.dt.aoDrawCallback.push({fn:function(){a._fnDrawCallback.call(a)},
sName:"ColVis"});d(this.s.dt.oInstance).bind("column-reorder",function(d,g,f){b=0;for(c=a.s.aiExclude.length;b<c;b++)a.s.aiExclude[b]=f.aiInvertMapping[a.s.aiExclude[b]];d=a.s.abOriginal.splice(f.iFrom,1)[0];a.s.abOriginal.splice(f.iTo,0,d);a.fnRebuild()})},_fnApplyCustomisation:function(){var a=this.s.oInit;"undefined"!=typeof a.activate&&(this.s.activate=a.activate);"undefined"!=typeof a.buttonText&&(this.s.buttonText=a.buttonText);"undefined"!=typeof a.aiExclude&&(this.s.aiExclude=a.aiExclude);
"undefined"!=typeof a.bRestore&&(this.s.bRestore=a.bRestore);"undefined"!=typeof a.sRestore&&(this.s.sRestore=a.sRestore);"undefined"!=typeof a.bShowAll&&(this.s.bShowAll=a.bShowAll);"undefined"!=typeof a.sShowAll&&(this.s.sShowAll=a.sShowAll);"undefined"!=typeof a.sAlign&&(this.s.sAlign=a.sAlign);"undefined"!=typeof a.fnStateChange&&(this.s.fnStateChange=a.fnStateChange);"undefined"!=typeof a.iOverlayFade&&(this.s.iOverlayFade=a.iOverlayFade);"undefined"!=typeof a.fnLabel&&(this.s.fnLabel=a.fnLabel);
"undefined"!=typeof a.sSize&&(this.s.sSize=a.sSize);"undefined"!=typeof a.bCssPosition&&(this.s.bCssPosition=a.bCssPosition)},_fnDrawCallback:function(){for(var a=this.s.dt.aoColumns,b=0,c=a.length;b<c;b++)null!==this.dom.buttons[b]&&(a[b].bVisible?d("input",this.dom.buttons[b]).attr("checked","checked"):d("input",this.dom.buttons[b]).removeAttr("checked"))},_fnAddButtons:function(){for(var a,b=","+this.s.aiExclude.join(",")+",",c=0,d=this.s.dt.aoColumns.length;c<d;c++)-1==b.indexOf(","+c+",")?(a=
this._fnDomColumnButton(c),this.dom.buttons.push(a),this.dom.collection.appendChild(a)):this.dom.buttons.push(null);this.s.bRestore&&(a=this._fnDomRestoreButton(),a.className+=" ColVis_Restore",this.dom.buttons.push(a),this.dom.collection.appendChild(a));this.s.bShowAll&&(a=this._fnDomShowAllButton(),a.className+=" ColVis_ShowAll",this.dom.buttons.push(a),this.dom.collection.appendChild(a))},_fnDomRestoreButton:function(){var a=this,b=document.createElement("button"),c=document.createElement("span");
b.className=!this.s.dt.bJUI?"ColVis_Button TableTools_Button":"ColVis_Button TableTools_Button ui-button ui-state-default";b.appendChild(c);d(c).html('<span class="ColVis_title">'+this.s.sRestore+"</span>");d(b).click(function(){for(var b=0,c=a.s.abOriginal.length;b<c;b++)a.s.dt.oInstance.fnSetColumnVis(b,a.s.abOriginal[b],!1);a._fnAdjustOpenRows();a.s.dt.oInstance.fnAdjustColumnSizing(!1);a.s.dt.oInstance.fnDraw(!1)});return b},_fnDomShowAllButton:function(){var a=this,b=document.createElement("button"),
c=document.createElement("span");b.className=!this.s.dt.bJUI?"ColVis_Button TableTools_Button":"ColVis_Button TableTools_Button ui-button ui-state-default";b.appendChild(c);d(c).html('<span class="ColVis_title">'+this.s.sShowAll+"</span>");d(b).click(function(){for(var b=0,c=a.s.abOriginal.length;b<c;b++)-1===a.s.aiExclude.indexOf(b)&&a.s.dt.oInstance.fnSetColumnVis(b,!0,!1);a._fnAdjustOpenRows();a.s.dt.oInstance.fnAdjustColumnSizing(!1);a.s.dt.oInstance.fnDraw(!1)});return b},_fnDomColumnButton:function(a){var b=
this,c=this.s.dt.aoColumns[a],e=document.createElement("button"),g=document.createElement("span"),f=this.s.dt;e.className=!f.bJUI?"ColVis_Button TableTools_Button":"ColVis_Button TableTools_Button ui-button ui-state-default";e.appendChild(g);c=null===this.s.fnLabel?c.sTitle:this.s.fnLabel(a,c.sTitle,c.nTh);d(g).html('<span class="ColVis_radio"><input type="checkbox"/></span><span class="ColVis_title">'+c+"</span>");d(e).click(function(c){var e=!d("input",this).is(":checked");"input"==c.target.nodeName.toLowerCase()&&
(e=d("input",this).is(":checked"));c=d.fn.dataTableExt.iApiIndex;d.fn.dataTableExt.iApiIndex=b._fnDataTablesApiIndex.call(b);f.oFeatures.bServerSide&&(""!==f.oScroll.sX||""!==f.oScroll.sY)?(b.s.dt.oInstance.fnSetColumnVis(a,e,!1),b.s.dt.oInstance.fnAdjustColumnSizing(!1),b.s.dt.oInstance.oApi._fnScrollDraw(b.s.dt),b._fnDrawCallback()):b.s.dt.oInstance.fnSetColumnVis(a,e);d.fn.dataTableExt.iApiIndex=c;null!==b.s.fnStateChange&&b.s.fnStateChange.call(b,a,e)});return e},_fnDataTablesApiIndex:function(){for(var a=
0,b=this.s.dt.oInstance.length;a<b;a++)if(this.s.dt.oInstance[a]==this.s.dt.nTable)return a;return 0},_fnDomBaseButton:function(a){var b=this,c=document.createElement("button"),e=document.createElement("span"),g="mouseover"==this.s.activate?"mouseover":"click";c.className=!this.s.dt.bJUI?"ColVis_Button TableTools_Button":"ColVis_Button TableTools_Button ui-button ui-state-default";c.appendChild(e);e.innerHTML=a;d(c).bind(g,function(a){b._fnCollectionShow();a.preventDefault()});return c},_fnDomCollection:function(){var a=
document.createElement("div");a.style.display="none";a.className=!this.s.dt.bJUI?"ColVis_collection TableTools_collection":"ColVis_collection TableTools_collection ui-buttonset ui-buttonset-multi";this.s.bCssPosition||(a.style.position="absolute");d(a).css("opacity",0);return a},_fnDomCatcher:function(){var a=this,b=document.createElement("div");b.className="ColVis_catcher TableTools_catcher";d(b).click(function(){a._fnCollectionHide.call(a,null,null)});return b},_fnDomBackground:function(){var a=
this,b=document.createElement("div");b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.className="ColVis_collectionBackground TableTools_collectionBackground";d(b).css("opacity",0);d(b).click(function(){a._fnCollectionHide.call(a,null,null)});"mouseover"==this.s.activate&&d(b).mouseover(function(){a.s.overcollection=!1;a._fnCollectionHide.call(a,null,null)});return b},_fnCollectionShow:function(){var a=this,b,c;b=d(this.dom.button).offset();var e=this.dom.collection,g=this.dom.background,
f=parseInt(b.left,10),h=parseInt(b.top+d(this.dom.button).outerHeight(),10);this.s.bCssPosition||(e.style.top=h+"px",e.style.left=f+"px");e.style.display="block";d(e).css("opacity",0);c=d(window).height();var i=d(document).height(),j=d(window).width(),h=d(document).width();g.style.height=(c>i?c:i)+"px";g.style.width=(j<h?j:h)+"px";c=this.dom.catcher.style;c.height=d(this.dom.button).outerHeight()+"px";c.width=d(this.dom.button).outerWidth()+"px";c.top=b.top+"px";c.left=f+"px";document.body.appendChild(g);
document.body.appendChild(e);document.body.appendChild(this.dom.catcher);if("auto"==this.s.sSize){i=[];this.dom.collection.style.width="auto";b=0;for(c=this.dom.buttons.length;b<c;b++)null!==this.dom.buttons[b]&&(this.dom.buttons[b].style.width="auto",i.push(d(this.dom.buttons[b]).outerWidth()));iMax=Math.max.apply(window,i);b=0;for(c=this.dom.buttons.length;b<c;b++)null!==this.dom.buttons[b]&&(this.dom.buttons[b].style.width=iMax+"px");this.dom.collection.style.width=iMax+"px"}this.s.bCssPosition||
(e.style.left="left"==this.s.sAlign?f+"px":f-d(e).outerWidth()+d(this.dom.button).outerWidth()+"px",b=d(e).outerWidth(),d(e).outerHeight(),f+b>h&&(e.style.left=h-b+"px"));setTimeout(function(){d(e).animate({opacity:1},a.s.iOverlayFade);d(g).animate({opacity:0.1},a.s.iOverlayFade,"linear",function(){jQuery.browser.msie&&jQuery.browser.version=="6.0"&&a._fnDrawCallback()})},10);this.s.hidden=!1},_fnCollectionHide:function(){var a=this;!this.s.hidden&&null!==this.dom.collection&&(this.s.hidden=!0,d(this.dom.collection).animate({opacity:0},
a.s.iOverlayFade,function(){this.style.display="none"}),d(this.dom.background).animate({opacity:0},a.s.iOverlayFade,function(){document.body.removeChild(a.dom.background);document.body.removeChild(a.dom.catcher)}))},_fnAdjustOpenRows:function(){for(var a=this.s.dt.aoOpenRows,b=this.s.dt.oApi._fnVisbleColumns(this.s.dt),c=0,d=a.length;c<d;c++)a[c].nTr.getElementsByTagName("td")[0].colSpan=b}};ColVis.fnRebuild=function(a){var b=null;"undefined"!=typeof a&&(b=a.fnSettings().nTable);for(var c=0,d=ColVis.aInstances.length;c<
d;c++)("undefined"==typeof a||b==ColVis.aInstances[c].s.dt.nTable)&&ColVis.aInstances[c].fnRebuild()};ColVis.aInstances=[];ColVis.prototype.CLASS="ColVis";ColVis.VERSION="1.0.8";ColVis.prototype.VERSION=ColVis.VERSION;"function"==typeof d.fn.dataTable&&"function"==typeof d.fn.dataTableExt.fnVersionCheck&&d.fn.dataTableExt.fnVersionCheck("1.7.0")?d.fn.dataTableExt.aoFeatures.push({fnInit:function(a){return(new ColVis(a,"undefined"==typeof a.oInit.oColVis?{}:a.oInit.oColVis)).dom.wrapper},cFeature:"C",
sFeature:"ColVis"}):alert("Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download")})(jQuery);
