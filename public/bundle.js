(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var food = {};

var cellutil = require("./util");
var aux = require("../helpers");

food.tick = function(cell, neighborhood, messages, time) {

  if (cell.age > 20 && aux.rand(18) === 1) {
    return [2, 2]; // Reproduce
  }

  return cellutil.randDir();
};

module.exports = food;

},{"../helpers":6,"./util":4}],2:[function(require,module,exports){
var protoai = {};

var cellutil = require("./util");
var aux = require("../helpers");

protoai.tick = function(cell, neighborhood, messages, time) {

  if (cell.age > 20 && aux.rand(25) === 1) {
    return [2, 2]; // Reproduce
  }

  return cellutil.randDir();
};

module.exports = protoai;

},{"../helpers":6,"./util":4}],3:[function(require,module,exports){
var protoai = {};

var cellutil = require("./util");

protoai.tick = function(cell, neighborhood, messages, time) {
  return cellutil.randDir();
};

module.exports = protoai;

},{"./util":4}],4:[function(require,module,exports){
var cellutil = {};

var aux = require("../helpers");

cellutil.randDir = function() {
  var move = [0, 0];
  var i = aux.rand(2);
  move[i] = aux.rand(3)-1; 
  return move;
};

module.exports = cellutil;

},{"../helpers":6}],5:[function(require,module,exports){
/** @jsx React.DOM */

var runner = require("./runner");
var render = require("./render");

var Left = React.createClass({displayName: 'Left',
  getInitialState: function() {
    return ({
      population: 0
    });
  },
  updatePopulation: function(data) {
    this.setState({
      population: data.population
    });
  },
  componentWillMount: function() {
  },
  componentDidMount: function() {
    var self = this;
    runner.on("end tick", function(data) {
      self.updatePopulation(data);
    });
  },
  setZoom: function(direction) {
    direction === "out" ? render.zoomOut() : render.zoomIn();
  },
  render: function() {
    return (
      React.DOM.div( {id:"left"}, 
        React.DOM.div( {className:"mfb"}, 
          React.DOM.div( {className:"mfb"}, React.DOM.h1(null, "Welcome to Vida!")),
          React.DOM.p( {className:"mfb"}, "Vida is a platform for building and playing with cell AIs written in JavaScript."),
          React.DOM.p( {className:"mfb small"}, "To move, drag the screen around. Try introducing a few new AIs. If you're really adventurous, try the tutorial. As always, contact Jeff with any concerns.")
        ),

        React.DOM.div( {className:"mfb"}, 
          React.DOM.div( 
            {className:"butn",
            onClick:this.setZoom.bind(null, "out")}
            , "Zoom Out"),
          React.DOM.div( 
            {className:"butn",
            onClick:this.setZoom.bind(null, "in")}
            , "Zoom In"),
          React.DOM.div( 
            {className:"butn",
            onClick:runner.toggleStartStop}
            , "Start/Stop")
        ),

        React.DOM.h2( {className:"mfb"}, "Statistics"),
        React.DOM.p( {className:"mfb"}, "Population: ", React.DOM.span(null, this.state.population)),

        React.DOM.h2( {className:"mfb"}, "Introduce AIs"),

        React.DOM.div( 
          {onClick:runner.introduce,
          className:"butn"}
          , "Rando")

      )
    );
  }
});

React.renderComponent(
  Left(null ),
  document.getElementById('controls')
);

},{"./render":9,"./runner":10}],6:[function(require,module,exports){
var aux = {};

aux.rand = function(num) {
  return Math.floor(Math.random()*num);
};

module.exports = aux;

},{}],7:[function(require,module,exports){
var mapSize = document.getElementById("grid").width;
var blockSize = 4;

// Game params
var config = {
  mapSize: mapSize/blockSize, 
  blockSize: blockSize,
  speed: 50 
};

var runner = (require("./runner")).init(config);

window.React = require("./react");

require("./controls.jsx");

},{"./controls.jsx":5,"./react":8,"./runner":10}],8:[function(require,module,exports){
(function (global){/**
 * React v0.8.0
 *
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.React=e():"undefined"!=typeof global?global.React=e():"undefined"!=typeof self&&(self.React=e())}(function(){return function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return r(n?n:e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t){function n(e){var t=o(e);if(!t)throw new Error(r('Tried to get element with id of "%s" but it is not present on the page.',e));return t}var o=e("./ge"),r=e("./ex");t.exports=n},{"./ex":85,"./ge":89}],2:[function(e,t){"use strict";var n={fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,zIndex:!0,zoom:!0},o={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},r={isUnitlessNumber:n,shorthandPropertyExpansions:o};t.exports=r},{}],3:[function(e,t){"use strict";var n=e("./CSSProperty"),o=e("./dangerousStyleValue"),r=e("./escapeTextForBrowser"),i=e("./hyphenate"),a=e("./memoizeStringOnly"),s=a(function(e){return r(i(e))}),u={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if(a)r[i]=a;else{var s=n.shorthandPropertyExpansions[i];if(s)for(var u in s)r[u]="";else r[i]=""}}}};t.exports=u},{"./CSSProperty":2,"./dangerousStyleValue":82,"./escapeTextForBrowser":84,"./hyphenate":97,"./memoizeStringOnly":106}],4:[function(e,t){"use strict";var n={},o={putListener:function(e,t,o){var r=n[t]||(n[t]={});r[e]=o},getListener:function(e,t){var o=n[t];return o&&o[e]},deleteListener:function(e,t){var o=n[t];o&&delete o[e]},deleteAllListeners:function(e){for(var t in n)delete n[t][e]},__purge:function(){n={}}};t.exports=o},{}],5:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=E.getPooled(x.change,_,e);C.accumulateTwoPhaseDispatches(t),g.enqueueEvents(t),g.processEventQueue()}function r(e,t){N=e,_=t,N.attachEvent("onchange",o)}function i(){N&&(N.detachEvent("onchange",o),N=null,_=null)}function a(e,t,n){return e===b.topChange?n:void 0}function s(e,t,n){e===b.topFocus?(i(),r(t,n)):e===b.topBlur&&i()}function u(e,t){N=e,_=t,I=e.value,T=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(N,"value",S),N.attachEvent("onpropertychange",l)}function c(){N&&(delete N.value,N.detachEvent("onpropertychange",l),N=null,_=null,I=null,T=null)}function l(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==I&&(I=t,o(e))}}function p(e,t,n){return e===b.topInput?n:void 0}function d(e,t,n){e===b.topFocus?(c(),u(t,n)):e===b.topBlur&&c()}function f(e){return e!==b.topSelectionChange&&e!==b.topKeyUp&&e!==b.topKeyDown||!N||N.value===I?void 0:(I=N.value,_)}function h(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function m(e,t,n){return e===b.topClick?n:void 0}var v=e("./EventConstants"),g=e("./EventPluginHub"),C=e("./EventPropagators"),y=e("./ExecutionEnvironment"),E=e("./SyntheticEvent"),M=e("./isEventSupported"),R=e("./isTextInputElement"),D=e("./keyOf"),b=v.topLevelTypes,x={change:{phasedRegistrationNames:{bubbled:D({onChange:null}),captured:D({onChangeCapture:null})}}},N=null,_=null,I=null,T=null,P=!1;y.canUseDOM&&(P=M("change")&&(!("documentMode"in document)||document.documentMode>8));var O=!1;y.canUseDOM&&(O=M("input")&&(!("documentMode"in document)||document.documentMode>9));var S={get:function(){return T.get.call(this)},set:function(e){I=""+e,T.set.call(this,e)}},w={eventTypes:x,extractEvents:function(e,t,o,r){var i,u;if(n(t)?P?i=a:u=s:R(t)?O?i=p:(i=f,u=d):h(t)&&(i=m),i){var c=i(e,t,o);if(c){var l=E.getPooled(x.change,c,r);return C.accumulateTwoPhaseDispatches(l),l}}u&&u(e,t,o)}};t.exports=w},{"./EventConstants":14,"./EventPluginHub":16,"./EventPropagators":19,"./ExecutionEnvironment":20,"./SyntheticEvent":66,"./isEventSupported":99,"./isTextInputElement":101,"./keyOf":105}],6:[function(e,t){"use strict";function n(e){switch(e){case v.topCompositionStart:return C.compositionStart;case v.topCompositionEnd:return C.compositionEnd;case v.topCompositionUpdate:return C.compositionUpdate}}function o(e,t){return e===v.topKeyDown&&t.keyCode===h}function r(e,t){switch(e){case v.topKeyUp:return-1!==f.indexOf(t.keyCode);case v.topKeyDown:return t.keyCode!==h;case v.topKeyPress:case v.topMouseDown:case v.topBlur:return!0;default:return!1}}function i(e){this.root=e,this.startSelection=c.getSelection(e),this.startValue=this.getText()}var a=e("./EventConstants"),s=e("./EventPropagators"),u=e("./ExecutionEnvironment"),c=e("./ReactInputSelection"),l=e("./SyntheticCompositionEvent"),p=e("./getTextContentAccessor"),d=e("./keyOf"),f=[9,13,27,32],h=229,m=u.canUseDOM&&"CompositionEvent"in window,v=a.topLevelTypes,g=null,C={compositionEnd:{phasedRegistrationNames:{bubbled:d({onCompositionEnd:null}),captured:d({onCompositionEndCapture:null})}},compositionStart:{phasedRegistrationNames:{bubbled:d({onCompositionStart:null}),captured:d({onCompositionStartCapture:null})}},compositionUpdate:{phasedRegistrationNames:{bubbled:d({onCompositionUpdate:null}),captured:d({onCompositionUpdateCapture:null})}}};i.prototype.getText=function(){return this.root.value||this.root[p()]},i.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,n=this.startValue.length-this.startSelection.end;return e.substr(t,e.length-n-t)};var y={eventTypes:C,extractEvents:function(e,t,a,u){var c,p;if(m?c=n(e):g?r(e,u)&&(c=C.compositionEnd,p=g.getData(),g=null):o(e,u)&&(c=C.start,g=new i(t)),c){var d=l.getPooled(c,a,u);return p&&(d.data=p),s.accumulateTwoPhaseDispatches(d),d}}};t.exports=y},{"./EventConstants":14,"./EventPropagators":19,"./ExecutionEnvironment":20,"./ReactInputSelection":47,"./SyntheticCompositionEvent":65,"./getTextContentAccessor":95,"./keyOf":105}],7:[function(e,t){"use strict";function n(e,t,n){var o=e.childNodes;o[n]!==t&&(t.parentNode===e&&e.removeChild(t),n>=o.length?e.appendChild(t):e.insertBefore(t,o[n]))}var o=e("./Danger"),r=e("./ReactMultiChildUpdateTypes"),i=e("./getTextContentAccessor"),a=i()||"NA",s={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,processUpdates:function(e,t){for(var i,s=null,u=null,c=0;i=e[c];c++)if(i.type===r.MOVE_EXISTING||i.type===r.REMOVE_NODE){var l=i.fromIndex,p=i.parentNode.childNodes[l],d=i.parentID;s=s||{},s[d]=s[d]||[],s[d][l]=p,u=u||[],u.push(p)}var f=o.dangerouslyRenderMarkup(t);if(u)for(var h=0;h<u.length;h++)u[h].parentNode.removeChild(u[h]);for(var m=0;i=e[m];m++)switch(i.type){case r.INSERT_MARKUP:n(i.parentNode,f[i.markupIndex],i.toIndex);break;case r.MOVE_EXISTING:n(i.parentNode,s[i.parentID][i.fromIndex],i.toIndex);break;case r.TEXT_CONTENT:i.parentNode[a]=i.textContent;break;case r.REMOVE_NODE:}}};t.exports=s},{"./Danger":10,"./ReactMultiChildUpdateTypes":53,"./getTextContentAccessor":95}],8:[function(e,t){"use strict";var n=e("./invariant"),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:16,injectDOMPropertyConfig:function(e){var t=e.Properties||{},r=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&i._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var u in t){n(!i.isStandardName[u]),i.isStandardName[u]=!0;var c=u.toLowerCase();i.getPossibleStandardName[c]=u;var l=r[u];l&&(i.getPossibleStandardName[l]=u),i.getAttributeName[u]=l||c,i.getPropertyName[u]=a[u]||u;var p=s[u];p&&(i.getMutationMethod[u]=p);var d=t[u];i.mustUseAttribute[u]=d&o.MUST_USE_ATTRIBUTE,i.mustUseProperty[u]=d&o.MUST_USE_PROPERTY,i.hasSideEffects[u]=d&o.HAS_SIDE_EFFECTS,i.hasBooleanValue[u]=d&o.HAS_BOOLEAN_VALUE,i.hasPositiveNumericValue[u]=d&o.HAS_POSITIVE_NUMERIC_VALUE,n(!i.mustUseAttribute[u]||!i.mustUseProperty[u]),n(i.mustUseProperty[u]||!i.hasSideEffects[u]),n(!i.hasBooleanValue[u]||!i.hasPositiveNumericValue[u])}}},r={},i={isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasPositiveNumericValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){return i._isCustomAttributeFunctions.some(function(t){return t.call(null,e)})},getDefaultValueForProperty:function(e,t){var n,o=r[e];return o||(r[e]=o={}),t in o||(n=document.createElement(e),o[t]=n[t]),o[t]},injection:o};t.exports=i},{"./invariant":98}],9:[function(e,t){"use strict";function n(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasPositiveNumericValue[e]&&(isNaN(t)||1>t)}var o=e("./DOMProperty"),r=e("./escapeTextForBrowser"),i=e("./memoizeStringOnly"),a=i(function(e){return r(e)+'="'}),s={createMarkupForProperty:function(e,t){if(o.isStandardName[e]){if(n(e,t))return"";var i=o.getAttributeName[e];return a(i)+r(t)+'"'}return o.isCustomAttribute(e)?null==t?"":a(e)+r(t)+'"':null},setValueForProperty:function(e,t,r){if(o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,r);else if(n(t,r))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+r);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&e[a]===r||(e[a]=r)}}else o.isCustomAttribute(t)&&(null==r?e.removeAttribute(o.getAttributeName[t]):e.setAttribute(t,""+r))},deleteValueForProperty:function(e,t){if(o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,t);o.hasSideEffects[t]&&e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=s},{"./DOMProperty":8,"./escapeTextForBrowser":84,"./memoizeStringOnly":106}],10:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var o=e("./ExecutionEnvironment"),r=e("./createNodesFromMarkup"),i=e("./emptyFunction"),a=e("./getMarkupWrap"),s=e("./invariant"),u=e("./mutateHTMLNodeWithMarkup"),c=/^(<[^ \/>]+)/,l="data-danger-index",p={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,u={},p=0;p<e.length;p++)s(e[p]),t=n(e[p]),t=a(t)?t:"*",u[t]=u[t]||[],u[t][p]=e[p];var d=[],f=0;for(t in u)if(u.hasOwnProperty(t)){var h=u[t];for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];h[m]=v.replace(c,"$1 "+l+'="'+m+'" ')}var g=r(h.join(""),i);for(p=0;p<g.length;++p){var C=g[p];C.hasAttribute&&C.hasAttribute(l)&&(m=+C.getAttribute(l),C.removeAttribute(l),s(!d.hasOwnProperty(m)),d[m]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){if(s(o.canUseDOM),s(t),"html"===e.tagName.toLowerCase())return u(e,t),void 0;var n=r(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{"./ExecutionEnvironment":20,"./createNodesFromMarkup":80,"./emptyFunction":83,"./getMarkupWrap":92,"./invariant":98,"./mutateHTMLNodeWithMarkup":111}],11:[function(e,t){"use strict";var n=e("./DOMProperty"),o=n.injection.MUST_USE_ATTRIBUTE,r=n.injection.MUST_USE_PROPERTY,i=n.injection.HAS_BOOLEAN_VALUE,a=n.injection.HAS_SIDE_EFFECTS,s=n.injection.HAS_POSITIVE_NUMERIC_VALUE,u={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,accessKey:null,action:null,allowFullScreen:o|i,allowTransparency:o,alt:null,async:i,autoComplete:null,autoFocus:i,autoPlay:i,cellPadding:null,cellSpacing:null,charSet:o,checked:r|i,className:r,cols:o|s,colSpan:null,content:null,contentEditable:null,contextMenu:o,controls:r|i,data:null,dateTime:o,defer:i,dir:null,disabled:o|i,draggable:null,encType:null,form:o,frameBorder:o,height:o,hidden:o|i,href:null,htmlFor:null,httpEquiv:null,icon:null,id:r,label:null,lang:null,list:null,loop:r|i,max:null,maxLength:o,method:null,min:null,multiple:r|i,name:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:r|i,rel:null,required:i,role:o,rows:o|s,rowSpan:null,scrollLeft:r,scrollTop:r,selected:r|i,size:o|s,spellCheck:null,src:null,step:null,style:null,tabIndex:null,target:null,title:null,type:null,value:r|a,width:o,wmode:o,autoCapitalize:null,autoCorrect:null,cx:o,cy:o,d:o,fill:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,offset:o,points:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeLinecap:o,strokeWidth:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{className:"class",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",htmlFor:"for",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeLinecap:"stroke-linecap",strokeWidth:"stroke-width",viewBox:"viewBox"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",radioGroup:"radiogroup",spellCheck:"spellcheck"},DOMMutationMethods:{className:function(e,t){e.className=t||""}}};t.exports=u},{"./DOMProperty":8}],12:[function(e,t){"use strict";var n=e("./keyOf"),o=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({CompositionEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=o},{"./keyOf":105}],13:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./EventPropagators"),r=e("./SyntheticMouseEvent"),i=e("./ReactMount"),a=e("./keyOf"),s=n.topLevelTypes,u=i.getFirstReactDOM,c={mouseEnter:{registrationName:a({onMouseEnter:null})},mouseLeave:{registrationName:a({onMouseLeave:null})}},l=[null,null],p={eventTypes:c,extractEvents:function(e,t,n,a){if(e===s.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var p,d;if(e===s.topMouseOut?(p=t,d=u(a.relatedTarget||a.toElement)||window):(p=window,d=t),p===d)return null;var f=p?i.getID(p):"",h=d?i.getID(d):"",m=r.getPooled(c.mouseLeave,f,a),v=r.getPooled(c.mouseEnter,h,a);return o.accumulateEnterLeaveDispatches(m,v,f,h),l[0]=m,l[1]=v,l}};t.exports=p},{"./EventConstants":14,"./EventPropagators":19,"./ReactMount":50,"./SyntheticMouseEvent":69,"./keyOf":105}],14:[function(e,t){"use strict";var n=e("./keyMirror"),o=n({bubbled:null,captured:null}),r=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:r,PropagationPhases:o};t.exports=i},{"./keyMirror":104}],15:[function(e,t){var n={listen:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},capture:function(e,t,n){e.addEventListener&&e.addEventListener(t,n,!0)}};t.exports=n},{}],16:[function(e,t){"use strict";var n=e("./CallbackRegistry"),o=e("./EventPluginRegistry"),r=e("./EventPluginUtils"),i=e("./EventPropagators"),a=e("./ExecutionEnvironment"),s=e("./accumulate"),u=e("./forEachAccumulated"),c=e("./invariant"),l=null,p=function(e){if(e){var t=r.executeDispatch,n=o.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),r.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},d={injection:{injectInstanceHandle:i.injection.injectInstanceHandle,injectEventPluginOrder:o.injectEventPluginOrder,injectEventPluginsByName:o.injectEventPluginsByName},registrationNames:o.registrationNames,putListener:n.putListener,getListener:n.getListener,deleteListener:n.deleteListener,deleteAllListeners:n.deleteAllListeners,extractEvents:function(e,t,n,r){for(var i,a=o.plugins,u=0,c=a.length;c>u;u++){var l=a[u];if(l){var p=l.extractEvents(e,t,n,r);p&&(i=s(i,p))}}return i},enqueueEvents:function(e){e&&(l=s(l,e))},processEventQueue:function(){var e=l;l=null,u(e,p),c(!l)}};a.canUseDOM&&(window.EventPluginHub=d),t.exports=d},{"./CallbackRegistry":4,"./EventPluginRegistry":17,"./EventPluginUtils":18,"./EventPropagators":19,"./ExecutionEnvironment":20,"./accumulate":75,"./forEachAccumulated":88,"./invariant":98}],17:[function(e,t){"use strict";function n(){if(a)for(var e in s){var t=s[e],n=a.indexOf(e);if(i(n>-1),!u.plugins[n]){i(t.extractEvents),u.plugins[n]=t;var r=t.eventTypes;for(var c in r)i(o(r[c],t))}}}function o(e,t){var n=e.phasedRegistrationNames;if(n){for(var o in n)if(n.hasOwnProperty(o)){var i=n[o];r(i,t)}return!0}return e.registrationName?(r(e.registrationName,t),!0):!1}function r(e,t){i(!u.registrationNames[e]),u.registrationNames[e]=t}var i=e("./invariant"),a=null,s={},u={plugins:[],registrationNames:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var o in e)if(e.hasOwnProperty(o)){var r=e[o];s[o]!==r&&(i(!s[o]),s[o]=r,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNames[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var o=u.registrationNames[t.phasedRegistrationNames[n]];if(o)return o}return null},_resetEventPlugins:function(){a=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];u.plugins.length=0;var t=u.registrationNames;for(var n in t)t.hasOwnProperty(n)&&delete t[n]}};t.exports=u},{"./invariant":98}],18:[function(e,t){"use strict";function n(e){return e===f.topMouseUp||e===f.topTouchEnd||e===f.topTouchCancel}function o(e){return e===f.topMouseMove||e===f.topTouchMove}function r(e){return e===f.topMouseDown||e===f.topTouchStart}function i(e,t){var n=e._dispatchListeners,o=e._dispatchIDs;if(Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)t(e,n[r],o[r]);else n&&t(e,n,o)}function a(e,t,n){t(e,n)}function s(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var o=0;o<t.length&&!e.isPropagationStopped();o++)if(t[o](e,n[o]))return n[o]}else if(t&&t(e,n))return n;return null}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;d(!Array.isArray(t));var o=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,o}function l(e){return!!e._dispatchListeners}var p=e("./EventConstants"),d=e("./invariant"),f=p.topLevelTypes,h={isEndish:n,isMoveish:o,isStartish:r,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:u,executeDirectDispatch:c,hasDispatches:l,executeDispatch:a};t.exports=h},{"./EventConstants":14,"./invariant":98}],19:[function(e,t){"use strict";function n(e,t,n){var o=t.dispatchConfig.phasedRegistrationNames[n];return h(e,o)}function o(e,t,o){var r=t?m.bubbled:m.captured,i=n(e,o,r);i&&(o._dispatchListeners=d(o._dispatchListeners,i),o._dispatchIDs=d(o._dispatchIDs,e))}function r(e){e&&e.dispatchConfig.phasedRegistrationNames&&v.InstanceHandle.traverseTwoPhase(e.dispatchMarker,o,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,r=h(e,o);r&&(n._dispatchListeners=d(n._dispatchListeners,r),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function s(e){f(e,r)}function u(e,t,n,o){v.InstanceHandle.traverseEnterLeave(n,o,i,e,t)}function c(e){f(e,a)}var l=e("./CallbackRegistry"),p=e("./EventConstants"),d=e("./accumulate"),f=e("./forEachAccumulated"),h=l.getListener,m=p.PropagationPhases,v={InstanceHandle:null,injectInstanceHandle:function(e){v.InstanceHandle=e},validate:function(){var e=!v.InstanceHandle||!v.InstanceHandle.traverseTwoPhase||!v.InstanceHandle.traverseEnterLeave;if(e)throw new Error("InstanceHandle not injected before use!")}},g={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:u,injection:v};t.exports=g},{"./CallbackRegistry":4,"./EventConstants":14,"./accumulate":75,"./forEachAccumulated":88}],20:[function(e,t){"use strict";var n="undefined"!=typeof window,o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,isInWorker:!n};t.exports=o},{}],21:[function(e,t){"use strict";var n=e("./invariant"),o={_assertLink:function(){n(null==this.props.value&&null==this.props.onChange)},getValue:function(){return this.props.valueLink?(this._assertLink(),this.props.valueLink.value):this.props.value},getOnChange:function(){return this.props.valueLink?(this._assertLink(),this._handleLinkedValueChange):this.props.onChange},_handleLinkedValueChange:function(e){this.props.valueLink.requestChange(e.target.value)}};t.exports=o},{"./invariant":98}],22:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./emptyFunction"),r=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===r.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=i},{"./EventConstants":14,"./emptyFunction":83}],23:[function(e,t){"use strict";var n=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},r=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},i=function(e,t,n,o,r){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,o,r),a}return new i(e,t,n,o,r)},a=function(e){var t=this;e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},s=10,u=n,c=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||u,n.poolSize||(n.poolSize=s),n.release=a,n},l={addPoolingTo:c,oneArgumentPooler:n,twoArgumentPooler:o,threeArgumentPooler:r,fiveArgumentPooler:i};t.exports=l},{}],24:[function(e,t){"use strict";var n=e("./ReactComponent"),o=e("./ReactCompositeComponent"),r=e("./ReactCurrentOwner"),i=e("./ReactDOM"),a=e("./ReactDOMComponent"),s=e("./ReactDefaultInjection"),u=e("./ReactInstanceHandles"),c=e("./ReactMount"),l=e("./ReactMultiChild"),p=e("./ReactPerf"),d=e("./ReactPropTypes"),f=e("./ReactServerRendering"),h=e("./ReactTextComponent");s.inject();var m={DOM:i,PropTypes:d,initializeTouchEvents:function(e){c.useTouchEvents=e},createClass:o.createClass,constructAndRenderComponent:c.constructAndRenderComponent,constructAndRenderComponentByID:c.constructAndRenderComponentByID,renderComponent:p.measure("React","renderComponent",c.renderComponent),renderComponentToString:f.renderComponentToString,unmountComponentAtNode:c.unmountComponentAtNode,unmountAndReleaseReactRootNode:c.unmountAndReleaseReactRootNode,isValidClass:o.isValidClass,isValidComponent:n.isValidComponent,__internals:{Component:n,CurrentOwner:r,DOMComponent:a,InstanceHandles:u,Mount:c,MultiChild:l,TextComponent:h}};m.version="0.8.0",t.exports=m},{"./ReactComponent":25,"./ReactCompositeComponent":28,"./ReactCurrentOwner":29,"./ReactDOM":30,"./ReactDOMComponent":32,"./ReactDefaultInjection":41,"./ReactInstanceHandles":48,"./ReactMount":50,"./ReactMultiChild":52,"./ReactPerf":55,"./ReactPropTypes":57,"./ReactServerRendering":59,"./ReactTextComponent":60}],25:[function(e,t){"use strict";var n=e("./ReactComponentEnvironment"),o=e("./ReactCurrentOwner"),r=e("./ReactOwner"),i=e("./ReactUpdates"),a=e("./invariant"),s=e("./keyMirror"),u=e("./merge"),c=s({MOUNTED:null,UNMOUNTED:null}),l={isValidComponent:function(e){return!(!e||"function"!=typeof e.mountComponentIntoNode||"function"!=typeof e.receiveComponent)},getKey:function(e,t){return e&&e.props&&null!=e.props.key?"{"+e.props.key+"}":"["+t+"]"},LifeCycle:c,DOMIDOperations:n.DOMIDOperations,unmountIDFromEnvironment:n.unmountIDFromEnvironment,mountImageIntoNode:n.mountImageIntoNode,ReactReconcileTransaction:n.ReactReconcileTransaction,Mixin:u(n.Mixin,{isMounted:function(){return this._lifeCycleState===c.MOUNTED},setProps:function(e,t){this.replaceProps(u(this._pendingProps||this.props,e),t)},replaceProps:function(e,t){a(!this.props.__owner__),a(this.isMounted()),this._pendingProps=e,i.enqueueUpdate(this,t)},construct:function(e,t){this.props=e||{},this.props.__owner__=o.current,this._lifeCycleState=c.UNMOUNTED,this._pendingProps=null,this._pendingCallbacks=null;var n=arguments.length-1;if(1===n)this.props.children=t;else if(n>1){for(var r=Array(n),i=0;n>i;i++)r[i]=arguments[i+1];this.props.children=r}},mountComponent:function(e,t,n){a(!this.isMounted());var o=this.props;null!=o.ref&&r.addComponentAsRefTo(this,o.ref,o.__owner__),this._rootNodeID=e,this._lifeCycleState=c.MOUNTED,this._mountDepth=n},unmountComponent:function(){a(this.isMounted());var e=this.props;null!=e.ref&&r.removeComponentAsRefFrom(this,e.ref,e.__owner__),l.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=c.UNMOUNTED},receiveComponent:function(e,t){a(this.isMounted()),this._pendingProps=e.props,this._performUpdateIfNecessary(t)},performUpdateIfNecessary:function(){var e=l.ReactReconcileTransaction.getPooled();e.perform(this._performUpdateIfNecessary,this,e),l.ReactReconcileTransaction.release(e)},_performUpdateIfNecessary:function(e){if(null!=this._pendingProps){var t=this.props;this.props=this._pendingProps,this._pendingProps=null,this.updateComponent(e,t)}},updateComponent:function(e,t){var n=this.props;(n.__owner__!==t.__owner__||n.ref!==t.ref)&&(null!=t.ref&&r.removeComponentAsRefFrom(this,t.ref,t.__owner__),null!=n.ref&&r.addComponentAsRefTo(this,n.ref,n.__owner__))},mountComponentIntoNode:function(e,t,n){var o=l.ReactReconcileTransaction.getPooled();o.perform(this._mountComponentIntoNode,this,e,t,o,n),l.ReactReconcileTransaction.release(o)},_mountComponentIntoNode:function(e,t,n,o){var r=this.mountComponent(e,n,0);l.mountImageIntoNode(r,t,o)},isOwnedBy:function(e){return this.props.__owner__===e},getSiblingByRef:function(e){var t=this.props.__owner__;return t&&t.refs?t.refs[e]:null}})};t.exports=l},{"./ReactComponentEnvironment":27,"./ReactCurrentOwner":29,"./ReactOwner":54,"./ReactUpdates":61,"./invariant":98,"./keyMirror":104,"./merge":107}],26:[function(e,t){"use strict";var n=e("./ReactDOMIDOperations"),o=e("./ReactMarkupChecksum"),r=e("./ReactMount"),i=e("./ReactReconcileTransaction"),a=e("./getReactRootElementInContainer"),s=e("./invariant"),u=e("./mutateHTMLNodeWithMarkup"),c=1,l=9,p={Mixin:{getDOMNode:function(){return s(this.isMounted()),r.getNode(this._rootNodeID)}},ReactReconcileTransaction:i,DOMIDOperations:n,unmountIDFromEnvironment:function(e){r.purgeID(e)},mountImageIntoNode:function(e,t,n){if(s(t&&(t.nodeType===c||t.nodeType===l&&r.allowFullPageRender)),!n||!o.canReuseMarkup(e,a(t))){if(t.nodeType===l)return u(t.documentElement,e),void 0;var i=t.parentNode;if(i){var p=t.nextSibling;i.removeChild(t),t.innerHTML=e,p?i.insertBefore(t,p):i.appendChild(t)}else t.innerHTML=e}}};t.exports=p},{"./ReactDOMIDOperations":34,"./ReactMarkupChecksum":49,"./ReactMount":50,"./ReactReconcileTransaction":58,"./getReactRootElementInContainer":94,"./invariant":98,"./mutateHTMLNodeWithMarkup":111}],27:[function(e,t){var n=e("./ReactComponentBrowserEnvironment"),o=n;t.exports=o},{"./ReactComponentBrowserEnvironment":26}],28:[function(e,t){"use strict";function n(e,t){var n=M[t];b.hasOwnProperty(t)&&m(n===E.OVERRIDE_BASE),e.hasOwnProperty(t)&&m(n===E.DEFINE_MANY||n===E.DEFINE_MANY_MERGED)}function o(e){var t=e._compositeLifeCycleState;m(e.isMounted()||t===D.MOUNTING),m(t!==D.RECEIVING_STATE),m(t!==D.UNMOUNTING)}function r(e,t){var o=e.prototype;for(var r in t){var i=t[r];if(t.hasOwnProperty(r)&&i)if(n(o,r),R.hasOwnProperty(r))R[r](e,i);else{var u=r in M,c=r in o,l=i.__reactDontBind,p="function"==typeof i,d=p&&!u&&!c&&!l;d?(o.__reactAutoBindMap||(o.__reactAutoBindMap={}),o.__reactAutoBindMap[r]=i,o[r]=i):o[r]=c?M[r]===E.DEFINE_MANY_MERGED?a(o[r],i):s(o[r],i):i}}}function i(e,t){return m(e&&t&&"object"==typeof e&&"object"==typeof t),y(t,function(t,n){m(void 0===e[n]),e[n]=t}),e}function a(e,t){return function(){return i(e.apply(this,arguments),t.apply(this,arguments))}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var u=e("./ReactComponent"),c=e("./ReactCurrentOwner"),l=e("./ReactErrorUtils"),p=e("./ReactOwner"),d=e("./ReactPerf"),f=e("./ReactPropTransferer"),h=e("./ReactUpdates"),m=e("./invariant"),v=e("./keyMirror"),g=e("./merge"),C=e("./mixInto"),y=e("./objMap"),E=v({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),M={mixins:E.DEFINE_MANY,propTypes:E.DEFINE_ONCE,getDefaultProps:E.DEFINE_MANY_MERGED,getInitialState:E.DEFINE_MANY_MERGED,render:E.DEFINE_ONCE,componentWillMount:E.DEFINE_MANY,componentDidMount:E.DEFINE_MANY,componentWillReceiveProps:E.DEFINE_MANY,shouldComponentUpdate:E.DEFINE_ONCE,componentWillUpdate:E.DEFINE_MANY,componentDidUpdate:E.DEFINE_MANY,componentWillUnmount:E.DEFINE_MANY,updateComponent:E.OVERRIDE_BASE},R={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},propTypes:function(e,t){e.propTypes=t}},D=v({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null,RECEIVING_STATE:null}),b={construct:function(){u.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this._compositeLifeCycleState=null},isMounted:function(){return u.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==D.MOUNTING},mountComponent:d.measure("ReactCompositeComponent","mountComponent",function(e,t,n){u.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=D.MOUNTING,this._defaultProps=this.getDefaultProps?this.getDefaultProps():null,this._processProps(this.props),this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.state=this.getInitialState?this.getInitialState():null,this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=this._renderValidatedComponent(),this._compositeLifeCycleState=null;var o=this._renderedComponent.mountComponent(e,t,n+1);return this.componentDidMount&&t.getReactMountReady().enqueue(this,this.componentDidMount),o}),unmountComponent:function(){this._compositeLifeCycleState=D.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._defaultProps=null,u.Mixin.unmountComponent.call(this),this._renderedComponent.unmountComponent(),this._renderedComponent=null,this.refs&&(this.refs=null)},setState:function(e,t){this.replaceState(g(this._pendingState||this.state,e),t)},replaceState:function(e,t){o(this),this._pendingState=e,h.enqueueUpdate(this,t)},_processProps:function(e){var t,n=this._defaultProps;for(t in n)t in e||(e[t]=n[t]);var o=this.constructor.propTypes;if(o){var r=this.constructor.displayName;for(t in o){var i=o[t];i&&i(e,t,r)}}},performUpdateIfNecessary:function(){var e=this._compositeLifeCycleState;e!==D.MOUNTING&&e!==D.RECEIVING_PROPS&&u.Mixin.performUpdateIfNecessary.call(this)
},_performUpdateIfNecessary:function(e){if(null!=this._pendingProps||null!=this._pendingState||this._pendingForceUpdate){var t=this.props;null!=this._pendingProps&&(t=this._pendingProps,this._processProps(t),this._pendingProps=null,this._compositeLifeCycleState=D.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(t,e)),this._compositeLifeCycleState=D.RECEIVING_STATE;var n=this._pendingState||this.state;this._pendingState=null,this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(t,n)?(this._pendingForceUpdate=!1,this._performComponentUpdate(t,n,e)):(this.props=t,this.state=n),this._compositeLifeCycleState=null}},_performComponentUpdate:function(e,t,n){var o=this.props,r=this.state;this.componentWillUpdate&&this.componentWillUpdate(e,t,n),this.props=e,this.state=t,this.updateComponent(n,o,r),this.componentDidUpdate&&n.getReactMountReady().enqueue(this,this.componentDidUpdate.bind(this,o,r))},updateComponent:d.measure("ReactCompositeComponent","updateComponent",function(e,t){u.Mixin.updateComponent.call(this,e,t);var n=this._renderedComponent,o=this._renderValidatedComponent();if(n.constructor===o.constructor)n.receiveComponent(o,e);else{var r=this._rootNodeID,i=n._rootNodeID;n.unmountComponent(),this._renderedComponent=o;var a=o.mountComponent(r,e,this._mountDepth+1);u.DOMIDOperations.dangerouslyReplaceNodeWithMarkupByID(i,a)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState;m(this.isMounted()||t===D.MOUNTING),m(t!==D.RECEIVING_STATE&&t!==D.UNMOUNTING),this._pendingForceUpdate=!0,h.enqueueUpdate(this,e)},_renderValidatedComponent:function(){var e;c.current=this;try{e=this.render()}catch(t){throw t}finally{c.current=null}return m(u.isValidComponent(e)),e},_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e];this[e]=this._bindAutoBindMethod(l.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=function(){return e.apply(t,arguments)};return n}},x=function(){};C(x,u.Mixin),C(x,p.Mixin),C(x,f.Mixin),C(x,b);var N={LifeCycle:D,Base:x,createClass:function(e){var t=function(){};t.prototype=new x,t.prototype.constructor=t,r(t,e),m(t.prototype.render);for(var n in M)t.prototype[n]||(t.prototype[n]=null);var o=function(){var e=new t;return e.construct.apply(e,arguments),e};return o.componentConstructor=t,o.originalSpec=e,o},isValidClass:function(e){return e instanceof Function&&"componentConstructor"in e&&e.componentConstructor instanceof Function}};t.exports=N},{"./ReactComponent":25,"./ReactCurrentOwner":29,"./ReactErrorUtils":43,"./ReactOwner":54,"./ReactPerf":55,"./ReactPropTransferer":56,"./ReactUpdates":61,"./invariant":98,"./keyMirror":104,"./merge":107,"./mixInto":110,"./objMap":112}],29:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],30:[function(e,t){"use strict";function n(e,t){var n=function(){};n.prototype=new o(e,t),n.prototype.constructor=n,n.displayName=e;var r=function(){var e=new n;return e.construct.apply(e,arguments),e};return r.componentConstructor=n,r}var o=e("./ReactDOMComponent"),r=e("./mergeInto"),i=e("./objMapKeyVal"),a=i({a:!1,abbr:!1,address:!1,area:!1,article:!1,aside:!1,audio:!1,b:!1,base:!1,bdi:!1,bdo:!1,big:!1,blockquote:!1,body:!1,br:!0,button:!1,canvas:!1,caption:!1,cite:!1,code:!1,col:!0,colgroup:!1,data:!1,datalist:!1,dd:!1,del:!1,details:!1,dfn:!1,div:!1,dl:!1,dt:!1,em:!1,embed:!0,fieldset:!1,figcaption:!1,figure:!1,footer:!1,form:!1,h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,head:!1,header:!1,hr:!0,html:!1,i:!1,iframe:!1,img:!0,input:!0,ins:!1,kbd:!1,keygen:!0,label:!1,legend:!1,li:!1,link:!1,main:!1,map:!1,mark:!1,menu:!1,menuitem:!1,meta:!0,meter:!1,nav:!1,noscript:!1,object:!1,ol:!1,optgroup:!1,option:!1,output:!1,p:!1,param:!0,pre:!1,progress:!1,q:!1,rp:!1,rt:!1,ruby:!1,s:!1,samp:!1,script:!1,section:!1,select:!1,small:!1,source:!1,span:!1,strong:!1,style:!1,sub:!1,summary:!1,sup:!1,table:!1,tbody:!1,td:!1,textarea:!1,tfoot:!1,th:!1,thead:!1,time:!1,title:!1,tr:!1,track:!0,u:!1,ul:!1,"var":!1,video:!1,wbr:!1,circle:!1,g:!1,line:!1,path:!1,polyline:!1,rect:!1,svg:!1,text:!1},n),s={injectComponentClasses:function(e){r(a,e)}};a.injection=s,t.exports=a},{"./ReactDOMComponent":32,"./mergeInto":109,"./objMapKeyVal":113}],31:[function(e,t){"use strict";var n=e("./ReactCompositeComponent"),o=e("./ReactDOM"),r=e("./keyMirror"),i=o.button,a=r({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),s=n.createClass({render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&a[t]||(e[t]=this.props[t]);return i(e,this.props.children)}});t.exports=s},{"./ReactCompositeComponent":28,"./ReactDOM":30,"./keyMirror":104}],32:[function(e,t){"use strict";function n(e){e&&(f(null==e.children||null==e.dangerouslySetInnerHTML),f(null==e.style||"object"==typeof e.style))}function o(e,t){this._tagOpen="<"+e,this._tagClose=t?"":"</"+e+">",this.tagName=e.toUpperCase()}var r=e("./CSSPropertyOperations"),i=e("./DOMProperty"),a=e("./DOMPropertyOperations"),s=e("./ReactComponent"),u=e("./ReactEventEmitter"),c=e("./ReactMultiChild"),l=e("./ReactMount"),p=e("./ReactPerf"),d=e("./escapeTextForBrowser"),f=e("./invariant"),h=e("./keyOf"),m=e("./merge"),v=e("./mixInto"),g=u.putListener,C=u.deleteListener,y=u.registrationNames,E={string:!0,number:!0},M=h({style:null});o.Mixin={mountComponent:p.measure("ReactDOMComponent","mountComponent",function(e,t,o){return s.Mixin.mountComponent.call(this,e,t,o),n(this.props),this._createOpenTagMarkup()+this._createContentMarkup(t)+this._tagClose}),_createOpenTagMarkup:function(){var e=this.props,t=this._tagOpen;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];if(null!=o)if(y[n])g(this._rootNodeID,n,o);else{n===M&&(o&&(o=e.style=m(e.style)),o=r.createMarkupForStyles(o));var i=a.createMarkupForProperty(n,o);i&&(t+=" "+i)}}var s=d(this._rootNodeID);return t+" "+l.ATTR_NAME+'="'+s+'">'},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML;if(null!=t){if(null!=t.__html)return t.__html}else{var n=E[typeof this.props.children]?this.props.children:null,o=null!=n?null:this.props.children;if(null!=n)return d(n);if(null!=o){var r=this.mountChildren(o,e);return r.join("")}}return""},receiveComponent:function(e,t){n(e.props),s.Mixin.receiveComponent.call(this,e,t)},updateComponent:p.measure("ReactDOMComponent","updateComponent",function(e,t){s.Mixin.updateComponent.call(this,e,t),this._updateDOMProperties(t),this._updateDOMChildren(t,e)}),_updateDOMProperties:function(e){var t,n,o,r=this.props;for(t in e)if(!r.hasOwnProperty(t)&&e.hasOwnProperty(t))if(t===M){var a=e[t];for(n in a)a.hasOwnProperty(n)&&(o=o||{},o[n]="")}else y[t]?C(this._rootNodeID,t):(i.isStandardName[t]||i.isCustomAttribute(t))&&s.DOMIDOperations.deletePropertyByID(this._rootNodeID,t);for(t in r){var u=r[t],c=e[t];if(r.hasOwnProperty(t)&&u!==c)if(t===M)if(u&&(u=r.style=m(u)),c){for(n in c)c.hasOwnProperty(n)&&!u.hasOwnProperty(n)&&(o=o||{},o[n]="");for(n in u)u.hasOwnProperty(n)&&c[n]!==u[n]&&(o=o||{},o[n]=u[n])}else o=u;else y[t]?g(this._rootNodeID,t,u):(i.isStandardName[t]||i.isCustomAttribute(t))&&s.DOMIDOperations.updatePropertyByID(this._rootNodeID,t,u)}o&&s.DOMIDOperations.updateStylesByID(this._rootNodeID,o)},_updateDOMChildren:function(e,t){var n=this.props,o=E[typeof e.children]?e.children:null,r=E[typeof n.children]?n.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,u=null!=o?null:e.children,c=null!=r?null:n.children,l=null!=o||null!=i,p=null!=r||null!=a;null!=u&&null==c?this.updateChildren(null,t):l&&!p&&this.updateTextContent(""),null!=r?o!==r&&this.updateTextContent(""+r):null!=a?i!==a&&s.DOMIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=c&&this.updateChildren(c,t)},unmountComponent:function(){u.deleteAllListeners(this._rootNodeID),s.Mixin.unmountComponent.call(this),this.unmountChildren()}},v(o,s.Mixin),v(o,o.Mixin),v(o,c.Mixin),t.exports=o},{"./CSSPropertyOperations":3,"./DOMProperty":8,"./DOMPropertyOperations":9,"./ReactComponent":25,"./ReactEventEmitter":44,"./ReactMount":50,"./ReactMultiChild":52,"./ReactPerf":55,"./escapeTextForBrowser":84,"./invariant":98,"./keyOf":105,"./merge":107,"./mixInto":110}],33:[function(e,t){"use strict";var n=e("./ReactCompositeComponent"),o=e("./ReactDOM"),r=e("./ReactEventEmitter"),i=e("./EventConstants"),a=o.form,s=n.createClass({render:function(){return this.transferPropsTo(a(null,this.props.children))},componentDidMount:function(e){r.trapBubbledEvent(i.topLevelTypes.topSubmit,"submit",e)}});t.exports=s},{"./EventConstants":14,"./ReactCompositeComponent":28,"./ReactDOM":30,"./ReactEventEmitter":44}],34:[function(e,t){"use strict";var n=e("./CSSPropertyOperations"),o=e("./DOMChildrenOperations"),r=e("./DOMPropertyOperations"),i=e("./ReactMount"),a=e("./getTextContentAccessor"),s=e("./invariant"),u={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c=a()||"NA",l=/^ /,p={updatePropertyByID:function(e,t,n){var o=i.getNode(e);s(!u.hasOwnProperty(t)),null!=n?r.setValueForProperty(o,t,n):r.deleteValueForProperty(o,t)},deletePropertyByID:function(e,t,n){var o=i.getNode(e);s(!u.hasOwnProperty(t)),r.deleteValueForProperty(o,t,n)},updateStylesByID:function(e,t){var o=i.getNode(e);n.setValueForStyles(o,t)},updateInnerHTMLByID:function(e,t){var n=i.getNode(e);n.innerHTML=t.replace(l,"&nbsp;")},updateTextContentByID:function(e,t){var n=i.getNode(e);n[c]=t},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=i.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID);o.processUpdates(e,t)}};t.exports=p},{"./CSSPropertyOperations":3,"./DOMChildrenOperations":7,"./DOMPropertyOperations":9,"./ReactMount":50,"./getTextContentAccessor":95,"./invariant":98}],35:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),o=e("./LinkedValueMixin"),r=e("./ReactCompositeComponent"),i=e("./ReactDOM"),a=e("./ReactMount"),s=e("./invariant"),u=e("./merge"),c=i.input,l={},p=r.createClass({mixins:[o],getInitialState:function(){var e=this.props.defaultValue;return{checked:this.props.defaultChecked||!1,value:null!=e?e:null}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=u(this.props);e.defaultChecked=null,e.defaultValue=null,e.checked=null!=this.props.checked?this.props.checked:this.state.checked;var t=this.getValue();return e.value=null!=t?t:this.state.value,e.onChange=this._handleChange,c(e,this.props.children)},componentDidMount:function(e){var t=a.getID(e);l[t]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=a.getID(e);delete l[t]},componentDidUpdate:function(e,t,o){null!=this.props.checked&&n.setValueForProperty(o,"checked",this.props.checked||!1);var r=this.getValue();null!=r&&n.setValueForProperty(o,"value",""+r)},_handleChange:function(e){var t,n=this.getOnChange();n&&(this._isChanging=!0,t=n(e),this._isChanging=!1),this.setState({checked:e.target.checked,value:e.target.value});var o=this.props.name;if("radio"===this.props.type&&null!=o)for(var r=this.getDOMNode(),i=document.getElementsByName(o),u=0,c=i.length;c>u;u++){var p=i[u];if(p!==r&&"INPUT"===p.nodeName&&"radio"===p.type&&p.form===r.form){var d=a.getID(p);s(d);var f=l[d];s(f),f.setState({checked:!1})}}return t}});t.exports=p},{"./DOMPropertyOperations":9,"./LinkedValueMixin":21,"./ReactCompositeComponent":28,"./ReactDOM":30,"./ReactMount":50,"./invariant":98,"./merge":107}],36:[function(e,t){"use strict";var n=e("./ReactCompositeComponent"),o=e("./ReactDOM"),r=o.option,i=n.createClass({componentWillMount:function(){null!=this.props.selected},render:function(){return r(this.props,this.props.children)}});t.exports=i},{"./ReactCompositeComponent":28,"./ReactDOM":30}],37:[function(e,t){"use strict";function n(e,t){null!=e[t]&&(e.multiple?s(Array.isArray(e[t])):s(!Array.isArray(e[t])))}function o(){for(var e=this.getValue(),t=null!=e?e:this.state.value,n=this.getDOMNode().options,o=""+t,r=0,i=n.length;i>r;r++){var a=this.props.multiple?o.indexOf(n[r].value)>=0:a=n[r].value===o;a!==n[r].selected&&(n[r].selected=a)}}var r=e("./LinkedValueMixin"),i=e("./ReactCompositeComponent"),a=e("./ReactDOM"),s=e("./invariant"),u=e("./merge"),c=a.select,l=i.createClass({mixins:[r],propTypes:{defaultValue:n,value:n},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=u(this.props);return e.onChange=this._handleChange,e.value=null,c(e,this.props.children)},componentDidMount:o,componentDidUpdate:o,_handleChange:function(e){var t,n=this.getOnChange();n&&(this._isChanging=!0,t=n(e),this._isChanging=!1);var o;if(this.props.multiple){o=[];for(var r=e.target.options,i=0,a=r.length;a>i;i++)r[i].selected&&o.push(r[i].value)}else o=e.target.value;return this.setState({value:o}),t}});t.exports=l},{"./LinkedValueMixin":21,"./ReactCompositeComponent":28,"./ReactDOM":30,"./invariant":98,"./merge":107}],38:[function(e,t){"use strict";function n(e){var t=document.selection,n=t.createRange(),o=n.text.length,r=n.duplicate();r.moveToElementText(e),r.setEndPoint("EndToStart",n);var i=r.text.length,a=i+o;return{start:i,end:a}}function o(e){var t=window.getSelection();if(0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,r=t.focusNode,i=t.focusOffset,a=t.getRangeAt(0),s=a.toString().length,u=a.cloneRange();u.selectNodeContents(e),u.setEnd(a.startContainer,a.startOffset);var c=u.toString().length,l=c+s,p=document.createRange();p.setStart(n,o),p.setEnd(r,i);var d=p.collapsed;return p.detach(),{start:d?l:c,end:d?c:l}}function r(e,t){var n,o,r=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,o=n):t.start>t.end?(n=t.end,o=t.start):(n=t.start,o=t.end),r.moveToElementText(e),r.moveStart("character",n),r.setEndPoint("EndToStart",r),r.moveEnd("character",o-n),r.select()}function i(e,t){var n=window.getSelection(),o=e[s()].length,r=Math.min(t.start,o),i="undefined"==typeof t.end?r:Math.min(t.end,o);if(!n.extend&&r>i){var u=i;i=r,r=u}var c=a(e,r),l=a(e,i);if(c&&l){var p=document.createRange();p.setStart(c.node,c.offset),n.removeAllRanges(),r>i?(n.addRange(p),n.extend(l.node,l.offset)):(p.setEnd(l.node,l.offset),n.addRange(p)),p.detach()}}var a=e("./getNodeForCharacterOffset"),s=e("./getTextContentAccessor"),u={getOffsets:function(e){var t=document.selection?n:o;return t(e)},setOffsets:function(e,t){var n=document.selection?r:i;n(e,t)}};t.exports=u},{"./getNodeForCharacterOffset":93,"./getTextContentAccessor":95}],39:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),o=e("./LinkedValueMixin"),r=e("./ReactCompositeComponent"),i=e("./ReactDOM"),a=e("./invariant"),s=e("./merge"),u=i.textarea,c=r.createClass({mixins:[o],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(a(null==e),Array.isArray(t)&&(a(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=this.getValue();return{initialValue:""+(null!=n?n:e),value:e}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=s(this.props),t=this.getValue();return a(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null!=t?t:this.state.value,e.onChange=this._handleChange,u(e,this.state.initialValue)},componentDidUpdate:function(e,t,o){var r=this.getValue();null!=r&&n.setValueForProperty(o,"value",""+r)},_handleChange:function(e){var t,n=this.getOnChange();return n&&(this._isChanging=!0,t=n(e),this._isChanging=!1),this.setState({value:e.target.value}),t}});t.exports=c},{"./DOMPropertyOperations":9,"./LinkedValueMixin":21,"./ReactCompositeComponent":28,"./ReactDOM":30,"./invariant":98,"./merge":107}],40:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var o=e("./ReactUpdates"),r=e("./Transaction"),i=e("./emptyFunction"),a=e("./mixInto"),s={initialize:i,close:function(){p.isBatchingUpdates=!1}},u={initialize:i,close:o.flushBatchedUpdates.bind(o)},c=[u,s];a(n,r.Mixin),a(n,{getTransactionWrappers:function(){return c}});var l=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t){var n=p.isBatchingUpdates;p.isBatchingUpdates=!0,n?e(t):l.perform(e,null,t)}};t.exports=p},{"./ReactUpdates":61,"./Transaction":73,"./emptyFunction":83,"./mixInto":110}],41:[function(e,t){"use strict";function n(){l.TopLevelCallbackCreator=p,C.injection.injectEventPluginOrder(v),C.injection.injectInstanceHandle(E),C.injection.injectEventPluginsByName({SimpleEventPlugin:R,EnterLeaveEventPlugin:g,ChangeEventPlugin:h,CompositionEventPlugin:m,MobileSafariClickEventPlugin:y,SelectEventPlugin:M}),o.injection.injectComponentClasses({button:r,form:i,input:a,option:s,select:u,textarea:c}),f.injection.injectDOMPropertyConfig(d),b.injection.injectBatchingStrategy(D)}var o=e("./ReactDOM"),r=e("./ReactDOMButton"),i=e("./ReactDOMForm"),a=e("./ReactDOMInput"),s=e("./ReactDOMOption"),u=e("./ReactDOMSelect"),c=e("./ReactDOMTextarea"),l=e("./ReactEventEmitter"),p=e("./ReactEventTopLevelCallback"),d=(e("./ReactPerf"),e("./DefaultDOMPropertyConfig")),f=e("./DOMProperty"),h=e("./ChangeEventPlugin"),m=e("./CompositionEventPlugin"),v=e("./DefaultEventPluginOrder"),g=e("./EnterLeaveEventPlugin"),C=e("./EventPluginHub"),y=e("./MobileSafariClickEventPlugin"),E=e("./ReactInstanceHandles"),M=e("./SelectEventPlugin"),R=e("./SimpleEventPlugin"),D=e("./ReactDefaultBatchingStrategy"),b=e("./ReactUpdates");t.exports={inject:n}},{"./ChangeEventPlugin":5,"./CompositionEventPlugin":6,"./DOMProperty":8,"./DefaultDOMPropertyConfig":11,"./DefaultEventPluginOrder":12,"./EnterLeaveEventPlugin":13,"./EventPluginHub":16,"./MobileSafariClickEventPlugin":22,"./ReactDOM":30,"./ReactDOMButton":31,"./ReactDOMForm":33,"./ReactDOMInput":35,"./ReactDOMOption":36,"./ReactDOMSelect":37,"./ReactDOMTextarea":39,"./ReactDefaultBatchingStrategy":40,"./ReactDefaultPerf":42,"./ReactEventEmitter":44,"./ReactEventTopLevelCallback":46,"./ReactInstanceHandles":48,"./ReactPerf":55,"./ReactUpdates":61,"./SelectEventPlugin":62,"./SimpleEventPlugin":63}],42:[function(e,t){"use strict";var n=(e("./performanceNow"),{});t.exports=n},{"./performanceNow":114}],43:[function(e,t){var n={guard:function(e,t){return e}};t.exports=n},{}],44:[function(e,t){"use strict";function n(e,t,n){a.listen(n,t,h.TopLevelCallbackCreator.createTopLevelCallback(e))}function o(e,t,n){a.capture(n,t,h.TopLevelCallbackCreator.createTopLevelCallback(e))}function r(){var e=l.refreshScrollValues;a.listen(window,"scroll",e),a.listen(window,"resize",e)}var i=e("./EventConstants"),a=e("./EventListener"),s=e("./EventPluginHub"),u=e("./ExecutionEnvironment"),c=e("./ReactEventEmitterMixin"),l=e("./ViewportMetrics"),p=e("./invariant"),d=e("./isEventSupported"),f=e("./merge"),h=f(c,{TopLevelCallbackCreator:null,ensureListening:function(e,t){p(u.canUseDOM),p(h.TopLevelCallbackCreator),c.ensureListening.call(h,{touchNotMouse:e,contentDocument:t})},setEnabled:function(e){p(u.canUseDOM),h.TopLevelCallbackCreator&&h.TopLevelCallbackCreator.setEnabled(e)},isEnabled:function(){return!(!h.TopLevelCallbackCreator||!h.TopLevelCallbackCreator.isEnabled())},listenAtTopLevel:function(e,t){p(!t._isListening);var a=i.topLevelTypes,s=t;r(),n(a.topMouseOver,"mouseover",s),n(a.topMouseDown,"mousedown",s),n(a.topMouseUp,"mouseup",s),n(a.topMouseMove,"mousemove",s),n(a.topMouseOut,"mouseout",s),n(a.topClick,"click",s),n(a.topDoubleClick,"dblclick",s),n(a.topContextMenu,"contextmenu",s),e&&(n(a.topTouchStart,"touchstart",s),n(a.topTouchEnd,"touchend",s),n(a.topTouchMove,"touchmove",s),n(a.topTouchCancel,"touchcancel",s)),n(a.topKeyUp,"keyup",s),n(a.topKeyPress,"keypress",s),n(a.topKeyDown,"keydown",s),n(a.topInput,"input",s),n(a.topChange,"change",s),n(a.topSelectionChange,"selectionchange",s),n(a.topCompositionEnd,"compositionend",s),n(a.topCompositionStart,"compositionstart",s),n(a.topCompositionUpdate,"compositionupdate",s),d("drag")&&(n(a.topDrag,"drag",s),n(a.topDragEnd,"dragend",s),n(a.topDragEnter,"dragenter",s),n(a.topDragExit,"dragexit",s),n(a.topDragLeave,"dragleave",s),n(a.topDragOver,"dragover",s),n(a.topDragStart,"dragstart",s),n(a.topDrop,"drop",s)),d("wheel")?n(a.topWheel,"wheel",s):d("mousewheel")?n(a.topWheel,"mousewheel",s):n(a.topWheel,"DOMMouseScroll",s),d("scroll",!0)?o(a.topScroll,"scroll",s):n(a.topScroll,"scroll",window),d("focus",!0)?(o(a.topFocus,"focus",s),o(a.topBlur,"blur",s)):d("focusin")&&(n(a.topFocus,"focusin",s),n(a.topBlur,"focusout",s)),d("copy")&&(n(a.topCopy,"copy",s),n(a.topCut,"cut",s),n(a.topPaste,"paste",s))},registrationNames:s.registrationNames,putListener:s.putListener,getListener:s.getListener,deleteListener:s.deleteListener,deleteAllListeners:s.deleteAllListeners,trapBubbledEvent:n,trapCapturedEvent:o});t.exports=h},{"./EventConstants":14,"./EventListener":15,"./EventPluginHub":16,"./ExecutionEnvironment":20,"./ReactEventEmitterMixin":45,"./ViewportMetrics":74,"./invariant":98,"./isEventSupported":99,"./merge":107}],45:[function(e,t){"use strict";function n(e){o.enqueueEvents(e),o.processEventQueue()}var o=e("./EventPluginHub"),r=e("./ReactUpdates"),i={_isListening:!1,ensureListening:function(e){e.contentDocument._reactIsListening||(this.listenAtTopLevel(e.touchNotMouse,e.contentDocument),e.contentDocument._reactIsListening=!0)},handleTopLevel:function(e,t,i,a){var s=o.extractEvents(e,t,i,a);r.batchedUpdates(n,s)}};t.exports=i},{"./EventPluginHub":16,"./ReactUpdates":61}],46:[function(e,t){"use strict";var n=e("./ReactEventEmitter"),o=e("./ReactMount"),r=e("./getEventTarget"),i=!0,a={setEnabled:function(e){i=!!e},isEnabled:function(){return i},createTopLevelCallback:function(e){return function(t){if(i){t.srcElement&&t.srcElement!==t.target&&(t.target=t.srcElement);var a=o.getFirstReactDOM(r(t))||window,s=o.getID(a)||"";n.handleTopLevel(e,a,s,t)}}}};t.exports=a},{"./ReactEventEmitter":44,"./ReactMount":50,"./getEventTarget":91}],47:[function(e,t){"use strict";function n(e){return r(document.documentElement,e)}var o=e("./ReactDOMSelection"),r=e("./containsNode"),i=e("./getActiveElement"),a={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=i();return{focusedElem:e,selectionRange:a.hasSelectionCapabilities(e)?a.getSelection(e):null}},restoreSelection:function(e){var t=i(),o=e.focusedElem,r=e.selectionRange;t!==o&&n(o)&&(a.hasSelectionCapabilities(o)&&a.setSelection(o,r),o.focus())},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=a},{"./ReactDOMSelection":38,"./containsNode":77,"./getActiveElement":90}],48:[function(e,t){"use strict";function n(e){return p+"r["+e.toString(36)+"]"}function o(e,t){return e.charAt(t)===p||t===e.length}function r(e){return""===e||e.charAt(0)===p&&e.charAt(e.length-1)!==p}function i(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(p)):""}function s(e,t){if(l(r(e)&&r(t)),l(i(e,t)),e===t)return e;for(var n=e.length+d,a=n;a<t.length&&!o(t,a);a++);return t.substr(0,a)}function u(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,i);return l(r(s)),s}function c(e,t,n,o,r,u){e=e||"",t=t||"",l(e!==t);var c=i(t,e);l(c||i(e,t));for(var p=0,d=c?a:s,h=e;r&&h===e||u&&h===t||n(h,c,o),h!==t;h=d(h,t))l(p++<f)}var l=e("./invariant"),p=".",d=p.length,f=100,h=9999999,m={createReactRootID:function(){return n(Math.ceil(Math.random()*h))},createReactID:function(e,t){return e+p+t},getReactRootIDFromNodeID:function(e){var t=/\.r\[[^\]]+\]/.exec(e);return t&&t[0]},traverseEnterLeave:function(e,t,n,o,r){var i=u(e,t);i!==e&&c(e,i,n,o,!1,!0),i!==t&&c(i,t,n,r,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},_getFirstCommonAncestorID:u,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:p};t.exports=m},{"./invariant":98}],49:[function(e,t){"use strict";var n=e("./adler32"),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var r=t.getAttribute(o.CHECKSUM_ATTR_NAME);r=r&&parseInt(r,10);var i=n(e);return i===r}};t.exports=o},{"./adler32":76}],50:[function(e,t){"use strict";function n(e){var t=f(e);return t&&R.getID(t)}function o(e){var t=r(e);if(t)if(g.hasOwnProperty(t)){var n=g[t];n!==e&&(h(!s(n,t)),g[t]=e)}else g[t]=e;return t}function r(e){return e&&e.getAttribute&&e.getAttribute(v)||""}function i(e,t){var n=r(e);n!==t&&delete g[n],e.setAttribute(v,t),g[t]=e}function a(e){return g.hasOwnProperty(e)&&s(g[e],e)||(g[e]=R.findReactNodeByID(e)),g[e]}function s(e,t){if(e){h(r(e)===t);var n=R.findReactContainerForID(t);if(n&&d(n,e))return!0}return!1}function u(e){delete g[e]}var c=e("./ReactEventEmitter"),l=e("./ReactInstanceHandles"),p=e("./$"),d=e("./containsNode"),f=e("./getReactRootElementInContainer"),h=e("./invariant"),m=l.SEPARATOR,v="data-reactid",g={},C=1,y=9,E={},M={},R={allowFullPageRender:!1,totalInstantiationTime:0,totalInjectionTime:0,useTouchEvents:!1,_instancesByReactRootID:E,scrollMonitor:function(e,t){t()},prepareEnvironmentForDOM:function(e){h(e&&(e.nodeType===C||e.nodeType===y));var t=e.nodeType===C?e.ownerDocument:e;c.ensureListening(R.useTouchEvents,t)},_updateRootComponent:function(e,t,n,o){var r=t.props;return R.scrollMonitor(n,function(){e.replaceProps(r,o)}),e},_registerComponent:function(e,t){R.prepareEnvironmentForDOM(t);var n=R.registerContainer(t);return E[n]=e,n},_renderNewRootComponent:function(e,t,n){var o=R._registerComponent(e,t);return e.mountComponentIntoNode(o,t,n),e},renderComponent:function(e,t,o){var r=E[n(t)];if(r){if(r.constructor===e.constructor)return R._updateRootComponent(r,e,t,o);R.unmountComponentAtNode(t)}var i=f(t),a=i&&R.isRenderedByReact(i),s=a&&!r,u=R._renderNewRootComponent(e,t,s);return o&&o(),u},constructAndRenderComponent:function(e,t,n){return R.renderComponent(e(t),n)},constructAndRenderComponentByID:function(e,t,n){return R.constructAndRenderComponent(e,t,p(n))},registerContainer:function(e){var t=n(e);return t&&(t=l.getReactRootIDFromNodeID(t)),t||(t=l.createReactRootID()),M[t]=e,t},unmountComponentAtNode:function(e){var t=n(e),o=E[t];return o?(R.unmountComponentFromNode(o,e),delete E[t],delete M[t],!0):!1},unmountAndReleaseReactRootNode:function(){return R.unmountComponentAtNode.apply(this,arguments)},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===y&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=l.getReactRootIDFromNodeID(e),n=M[t];return n},findReactNodeByID:function(e){var t=R.findReactContainerForID(e);return R.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=R.getID(e);return t?t.charAt(0)===m:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(R.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){for(var n=[e.firstChild],o=0;o<n.length;)for(var r=n[o++];r;){var i=R.getID(r);if(i){if(t===i)return r;if(l.isAncestorIDOf(i,t)){n.length=o=0,n.push(r.firstChild);break}n.push(r.firstChild)}else n.push(r.firstChild);r=r.nextSibling}h(!1)},ATTR_NAME:v,getReactRootID:n,getID:o,setID:i,getNode:a,purgeID:u,injection:{}};t.exports=R},{"./$":1,"./ReactEventEmitter":44,"./ReactInstanceHandles":48,"./containsNode":77,"./getReactRootElementInContainer":94,"./invariant":98}],51:[function(e,t){"use strict";function n(e){this._queue=e||null}var o=e("./PooledClass"),r=e("./mixInto");r(n,{enqueue:function(e,t){this._queue=this._queue||[],this._queue.push({component:e,callback:t})},notifyAll:function(){var e=this._queue;if(e){this._queue=null;for(var t=0,n=e.length;n>t;t++){var o=e[t].component,r=e[t].callback;r.call(o,o.getDOMNode())}e.length=0}},reset:function(){this._queue=null},destructor:function(){this.reset()}}),o.addPoolingTo(n),t.exports=n},{"./PooledClass":23,"./mixInto":110}],52:[function(e,t){"use strict";function n(e,t){return e&&t&&e.constructor===t.constructor}function o(e,t,n){f.push({parentID:e,parentNode:null,type:l.INSERT_MARKUP,markupIndex:h.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){f.push({parentID:e,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){f.push({parentID:e,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){f.push({parentID:e,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function s(){f.length&&(c.DOMIDOperations.dangerouslyProcessChildrenUpdates(f,h),u())}function u(){f.length=0,h.length=0}var c=e("./ReactComponent"),l=e("./ReactMultiChildUpdateTypes"),p=e("./flattenChildren"),d=0,f=[],h=[],m={Mixin:{mountChildren:function(e,t){var n=p(e),o=[],r=0;this._renderedChildren=n;for(var i in n){var a=n[i];if(n.hasOwnProperty(i)&&a){var s=this._rootNodeID+"."+i,u=a.mountComponent(s,t,this._mountDepth+1);a._mountImage=u,a._mountIndex=r,o.push(u),r++}}return o},updateTextContent:function(e){d++;try{var t=this._renderedChildren;for(var n in t)t.hasOwnProperty(n)&&t[n]&&this._unmountChildByName(t[n],n);this.setTextContent(e)}catch(o){throw d--,d||u(),o}d--,d||s()},updateChildren:function(e,t){d++;try{this._updateChildren(e,t)}catch(n){throw d--,d||u(),n}d--,d||s()},_updateChildren:function(e,t){var o=p(e),r=this._renderedChildren;if(o||r){var i,a=0,s=0;for(i in o)if(o.hasOwnProperty(i)){var u=r&&r[i],c=o[i];n(u,c)?(this.moveChild(u,s,a),a=Math.max(u._mountIndex,a),u.receiveComponent(c,t),u._mountIndex=s):(u&&(a=Math.max(u._mountIndex,a),this._unmountChildByName(u,i)),c&&this._mountChildByNameAtIndex(c,i,s,t)),c&&s++}for(i in r)!r.hasOwnProperty(i)||!r[i]||o&&o[i]||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n&&n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e){o(this._rootNodeID,e._mountImage,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,o){var r=this._rootNodeID+"."+t,i=e.mountComponent(r,o,this._mountDepth+1);e._mountImage=i,e._mountIndex=n,this.createChild(e),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){c.isValidComponent(e)&&(this.removeChild(e),e._mountImage=null,e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t])}}};t.exports=m},{"./ReactComponent":25,"./ReactMultiChildUpdateTypes":53,"./flattenChildren":87}],53:[function(e,t){var n=e("./keyMirror"),o=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});
t.exports=o},{"./keyMirror":104}],54:[function(e,t){"use strict";var n=e("./invariant"),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,r){n(o.isValidOwner(r)),r.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,r){n(o.isValidOwner(r)),r.refs[t]===e&&r.detachRef(t)},Mixin:{attachRef:function(e,t){n(t.isOwnedBy(this));var o=this.refs||(this.refs={});o[e]=t},detachRef:function(e){delete this.refs[e]}}};t.exports=o},{"./invariant":98}],55:[function(e,t){"use strict";function n(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:n,measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{"./ExecutionEnvironment":20}],56:[function(e,t){"use strict";function n(e){return function(t,n,o){t[n]=t.hasOwnProperty(n)?e(t[n],o):o}}var o=e("./emptyFunction"),r=e("./invariant"),i=e("./joinClasses"),a=e("./merge"),s={children:o,className:n(i),ref:o,style:n(a)},u={TransferStrategies:s,Mixin:{transferPropsTo:function(e){r(e.props.__owner__===this);var t={};for(var n in e.props)e.props.hasOwnProperty(n)&&(t[n]=e.props[n]);for(var o in this.props)if(this.props.hasOwnProperty(o)){var i=s[o];i?i(t,o,this.props[o]):t.hasOwnProperty(o)||(t[o]=this.props[o])}return e.props=t,e}}};t.exports=u},{"./emptyFunction":83,"./invariant":98,"./joinClasses":103,"./merge":107}],57:[function(e,t){"use strict";function n(e){function t(t,n,o){var r=typeof t;"object"===r&&Array.isArray(t)&&(r="array"),s(r===e)}return i(t)}function o(e){function t(e,t,o){s(n[e])}var n=a(e);return i(t)}function r(e){function t(t,n,o){s(t instanceof e)}return i(t)}function i(e){function t(n){function o(t,o,r){var i=t[o];null!=i?e(i,o,r||c):s(!n)}return n||(o.isRequired=t(!0)),o}return t(!1)}var a=e("./createObjectFrom"),s=e("./invariant"),u={array:n("array"),bool:n("boolean"),func:n("function"),number:n("number"),object:n("object"),string:n("string"),oneOf:o,instanceOf:r},c="<<anonymous>>";t.exports=u},{"./createObjectFrom":81,"./invariant":98}],58:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.reactMountReady=s.getPooled(null)}var o=e("./ExecutionEnvironment"),r=e("./PooledClass"),i=e("./ReactEventEmitter"),a=e("./ReactInputSelection"),s=e("./ReactMountReady"),u=e("./Transaction"),c=e("./mixInto"),l={initialize:a.getSelectionInformation,close:a.restoreSelection},p={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f=[l,p,d],h={getTransactionWrappers:function(){return o.canUseDOM?f:[]},getReactMountReady:function(){return this.reactMountReady},destructor:function(){s.release(this.reactMountReady),this.reactMountReady=null}};c(n,u.Mixin),c(n,h),r.addPoolingTo(n),t.exports=n},{"./ExecutionEnvironment":20,"./PooledClass":23,"./ReactEventEmitter":44,"./ReactInputSelection":47,"./ReactMountReady":51,"./Transaction":73,"./mixInto":110}],59:[function(e,t){"use strict";function n(e,t){s(o.isValidComponent(e)),s("function"==typeof t);var n=r.createReactRootID(),u=a.getPooled();u.reinitializeTransaction();try{u.perform(function(){var o=e.mountComponent(n,u,0);o=i.addChecksumToMarkup(o),t(o)},null)}finally{a.release(u)}}var o=e("./ReactComponent"),r=e("./ReactInstanceHandles"),i=e("./ReactMarkupChecksum"),a=e("./ReactReconcileTransaction"),s=e("./invariant");t.exports={renderComponentToString:n}},{"./ReactComponent":25,"./ReactInstanceHandles":48,"./ReactMarkupChecksum":49,"./ReactReconcileTransaction":58,"./invariant":98}],60:[function(e,t){"use strict";var n=e("./ReactComponent"),o=e("./ReactMount"),r=e("./escapeTextForBrowser"),i=e("./mixInto"),a=function(e){this.construct({text:e})};i(a,n.Mixin),i(a,{mountComponent:function(e,t,i){return n.Mixin.mountComponent.call(this,e,t,i),"<span "+o.ATTR_NAME+'="'+r(e)+'">'+r(this.props.text)+"</span>"},receiveComponent:function(e){var t=e.props;t.text!==this.props.text&&(this.props.text=t.text,n.DOMIDOperations.updateTextContentByID(this._rootNodeID,t.text))}}),t.exports=a},{"./ReactComponent":25,"./ReactMount":50,"./escapeTextForBrowser":84,"./mixInto":110}],61:[function(e,t){"use strict";function n(){c(p)}function o(e,t){n(),p.batchedUpdates(e,t)}function r(e,t){return e._mountDepth-t._mountDepth}function i(){l.sort(r);for(var e=0;e<l.length;e++){var t=l[e];if(t.isMounted()){var n=t._pendingCallbacks;if(t._pendingCallbacks=null,t.performUpdateIfNecessary(),n)for(var o=0;o<n.length;o++)n[o].call(t)}}}function a(){l.length=0}function s(){try{i()}catch(e){throw e}finally{a()}}function u(e,t){return c(!t||"function"==typeof t),n(),p.isBatchingUpdates?(l.push(e),t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]),void 0):(e.performUpdateIfNecessary(),t&&t(),void 0)}var c=e("./invariant"),l=[],p=null,d={injectBatchingStrategy:function(e){c(e),c("function"==typeof e.batchedUpdates),c("boolean"==typeof e.isBatchingUpdates),p=e}},f={batchedUpdates:o,enqueueUpdate:u,flushBatchedUpdates:s,injection:d};t.exports=f},{"./invariant":98}],62:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&c.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(document.selection){var t=document.selection.createRange();return{parentElement:t.parentElement(),text:t.text,top:t.boundingTop,left:t.boundingLeft}}var n=window.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function o(e){if(!R&&C==p()){var t=n(C);if(!M||!h(M,t)){M=t;var o=l.getPooled(v.select,y,e);return o.type="select",o.target=C,s.accumulateTwoPhaseDispatches(o),o}}}function r(){if(E){var e=o(E);E=null,e&&(a.enqueueEvents(e),a.processEventQueue())}}var i=e("./EventConstants"),a=e("./EventPluginHub"),s=e("./EventPropagators"),u=e("./ExecutionEnvironment"),c=e("./ReactInputSelection"),l=e("./SyntheticEvent"),p=e("./getActiveElement"),d=e("./isTextInputElement"),f=e("./keyOf"),h=e("./shallowEqual"),m=i.topLevelTypes,v={select:{phasedRegistrationNames:{bubbled:f({onSelect:null}),captured:f({onSelectCapture:null})}}},g=!1;u.canUseDOM&&(g="onselectionchange"in document);var C=null,y=null,E=null,M=null,R=!1,D={eventTypes:v,extractEvents:function(e,t,n,i){switch(e){case m.topFocus:(d(t)||"true"===t.contentEditable)&&(C=t,y=n,M=null);break;case m.topBlur:C=null,y=null,M=null;break;case m.topMouseDown:R=!0;break;case m.topContextMenu:case m.topMouseUp:return R=!1,o(i);case m.topSelectionChange:return o(i);case m.topKeyDown:g||(E=i,setTimeout(r,0))}}};t.exports=D},{"./EventConstants":14,"./EventPluginHub":16,"./EventPropagators":19,"./ExecutionEnvironment":20,"./ReactInputSelection":47,"./SyntheticEvent":66,"./getActiveElement":90,"./isTextInputElement":101,"./keyOf":105,"./shallowEqual":115}],63:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./EventPropagators"),r=e("./SyntheticClipboardEvent"),i=e("./SyntheticEvent"),a=e("./SyntheticFocusEvent"),s=e("./SyntheticKeyboardEvent"),u=e("./SyntheticMouseEvent"),c=e("./SyntheticTouchEvent"),l=e("./SyntheticUIEvent"),p=e("./SyntheticWheelEvent"),d=e("./invariant"),f=e("./keyOf"),h=n.topLevelTypes,m={blur:{phasedRegistrationNames:{bubbled:f({onBlur:!0}),captured:f({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:f({onClick:!0}),captured:f({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:f({onContextMenu:!0}),captured:f({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:f({onCopy:!0}),captured:f({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:f({onCut:!0}),captured:f({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:f({onDoubleClick:!0}),captured:f({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:f({onDrag:!0}),captured:f({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:f({onDragEnd:!0}),captured:f({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:f({onDragEnter:!0}),captured:f({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:f({onDragExit:!0}),captured:f({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:f({onDragLeave:!0}),captured:f({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:f({onDragOver:!0}),captured:f({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:f({onDragStart:!0}),captured:f({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:f({onDrop:!0}),captured:f({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:f({onFocus:!0}),captured:f({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:f({onInput:!0}),captured:f({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:f({onKeyDown:!0}),captured:f({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:f({onKeyPress:!0}),captured:f({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:f({onKeyUp:!0}),captured:f({onKeyUpCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:f({onMouseDown:!0}),captured:f({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:f({onMouseMove:!0}),captured:f({onMouseMoveCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:f({onMouseUp:!0}),captured:f({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:f({onPaste:!0}),captured:f({onPasteCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:f({onScroll:!0}),captured:f({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:f({onSubmit:!0}),captured:f({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:f({onTouchCancel:!0}),captured:f({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:f({onTouchEnd:!0}),captured:f({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:f({onTouchMove:!0}),captured:f({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:f({onTouchStart:!0}),captured:f({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:f({onWheel:!0}),captured:f({onWheelCapture:!0})}}},v={topBlur:m.blur,topClick:m.click,topContextMenu:m.contextMenu,topCopy:m.copy,topCut:m.cut,topDoubleClick:m.doubleClick,topDrag:m.drag,topDragEnd:m.dragEnd,topDragEnter:m.dragEnter,topDragExit:m.dragExit,topDragLeave:m.dragLeave,topDragOver:m.dragOver,topDragStart:m.dragStart,topDrop:m.drop,topFocus:m.focus,topInput:m.input,topKeyDown:m.keyDown,topKeyPress:m.keyPress,topKeyUp:m.keyUp,topMouseDown:m.mouseDown,topMouseMove:m.mouseMove,topMouseUp:m.mouseUp,topPaste:m.paste,topScroll:m.scroll,topSubmit:m.submit,topTouchCancel:m.touchCancel,topTouchEnd:m.touchEnd,topTouchMove:m.touchMove,topTouchStart:m.touchStart,topWheel:m.wheel},g={eventTypes:m,executeDispatch:function(e,t,n){var o=t(e,n);o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,f){var m=v[e];if(!m)return null;var g;switch(e){case h.topInput:case h.topSubmit:g=i;break;case h.topKeyDown:case h.topKeyPress:case h.topKeyUp:g=s;break;case h.topBlur:case h.topFocus:g=a;break;case h.topClick:if(2===f.button)return null;case h.topContextMenu:case h.topDoubleClick:case h.topDrag:case h.topDragEnd:case h.topDragEnter:case h.topDragExit:case h.topDragLeave:case h.topDragOver:case h.topDragStart:case h.topDrop:case h.topMouseDown:case h.topMouseMove:case h.topMouseUp:g=u;break;case h.topTouchCancel:case h.topTouchEnd:case h.topTouchMove:case h.topTouchStart:g=c;break;case h.topScroll:g=l;break;case h.topWheel:g=p;break;case h.topCopy:case h.topCut:case h.topPaste:g=r}d(g);var C=g.getPooled(m,n,f);return o.accumulateTwoPhaseDispatches(C),C}};t.exports=g},{"./EventConstants":14,"./EventPropagators":19,"./SyntheticClipboardEvent":64,"./SyntheticEvent":66,"./SyntheticFocusEvent":67,"./SyntheticKeyboardEvent":68,"./SyntheticMouseEvent":69,"./SyntheticTouchEvent":70,"./SyntheticUIEvent":71,"./SyntheticWheelEvent":72,"./invariant":98,"./keyOf":105}],64:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={clipboardData:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":66}],65:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={data:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":66}],66:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];this[i]=a?a(n):n[i]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=s?r.thatReturnsTrue:r.thatReturnsFalse,this.isPropagationStopped=r.thatReturnsFalse}var o=e("./PooledClass"),r=e("./emptyFunction"),i=e("./getEventTarget"),a=e("./merge"),s=e("./mergeInto"),u={type:null,target:i,currentTarget:null,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};s(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=r.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=r.thatReturnsTrue},persist:function(){this.isPersistent=r.thatReturnsTrue},isPersistent:r.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=u,n.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);s(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=a(n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(n,o.threeArgumentPooler),t.exports=n},{"./PooledClass":23,"./emptyFunction":83,"./getEventTarget":91,"./merge":107,"./mergeInto":109}],67:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r={relatedTarget:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticUIEvent":71}],68:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r={"char":null,key:null,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,charCode:null,keyCode:null,which:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticUIEvent":71}],69:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r=e("./ViewportMetrics"),i={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+r.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+r.currentScrollTop}};o.augmentClass(n,i),t.exports=n},{"./SyntheticUIEvent":71,"./ViewportMetrics":74}],70:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticUIEvent":71}],71:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={view:null,detail:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":66}],72:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticMouseEvent"),r={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?-e.deltaY:"wheelDeltaY"in e?e.wheelDeltaY:"wheelDelta"in e?e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticMouseEvent":69}],73:[function(e,t){"use strict";var n=e("./invariant"),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this.timingMetrics||(this.timingMetrics={}),this.timingMetrics.methodInvocationTime=0,this.timingMetrics.wrapperInitTimes?this.timingMetrics.wrapperInitTimes.length=0:this.timingMetrics.wrapperInitTimes=[],this.timingMetrics.wrapperCloseTimes?this.timingMetrics.wrapperCloseTimes.length=0:this.timingMetrics.wrapperCloseTimes=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,o,r,i,a,s,u){n(!this.isInTransaction());var c,l=Date.now(),p=null;try{this.initializeAll(),c=e.call(t,o,r,i,a,s,u)}catch(d){p=d}finally{var f=Date.now();this.methodInvocationTime+=f-l;try{this.closeAll()}catch(h){p=p||h}}if(p)throw p;return c},initializeAll:function(){this._isInTransaction=!0;for(var e=this.transactionWrappers,t=this.timingMetrics.wrapperInitTimes,n=null,o=0;o<e.length;o++){var i=Date.now(),a=e[o];try{this.wrapperInitData[o]=a.initialize?a.initialize.call(this):null}catch(s){n=n||s,this.wrapperInitData[o]=r.OBSERVED_ERROR}finally{var u=t[o],c=Date.now();t[o]=(u||0)+(c-i)}}if(n)throw n},closeAll:function(){n(this.isInTransaction());for(var e=this.transactionWrappers,t=this.timingMetrics.wrapperCloseTimes,o=null,i=0;i<e.length;i++){var a=e[i],s=Date.now(),u=this.wrapperInitData[i];try{u!==r.OBSERVED_ERROR&&a.close&&a.close.call(this,u)}catch(c){o=o||c}finally{var l=Date.now(),p=t[i];t[i]=(p||0)+(l-s)}}if(this.wrapperInitData.length=0,this._isInTransaction=!1,o)throw o}},r={Mixin:o,OBSERVED_ERROR:{}};t.exports=r},{"./invariant":98}],74:[function(e,t){"use strict";var n=e("./getUnboundedScrollPosition"),o={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var e=n(window);o.currentScrollLeft=e.x,o.currentScrollTop=e.y}};t.exports=o},{"./getUnboundedScrollPosition":96}],75:[function(e,t){"use strict";function n(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n?e.concat(t):r?[e].concat(t):[e,t]}var o=e("./invariant");t.exports=n},{"./invariant":98}],76:[function(e,t){"use strict";function n(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=n},{}],77:[function(e,t){function n(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e("./isTextNode");t.exports=n},{"./isTextNode":102}],78:[function(e,t){function n(e,t,n,o,r,i,a){e=e||{};for(var s,u=[t,n,o,r,i],c=0;u[c];){s=u[c++];for(var l in s)e[l]=s[l];s.hasOwnProperty&&s.hasOwnProperty("toString")&&"undefined"!=typeof s.toString&&e.toString!==s.toString&&(e.toString=s.toString)}return e}t.exports=n},{}],79:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){if(!n(e))return[e];if(e.item){for(var t=e.length,o=new Array(t);t--;)o[t]=e[t];return o}return Array.prototype.slice.call(e)}t.exports=o},{}],80:[function(e,t){function n(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var o=u;s(!!u);var r=n(e),c=r&&a(r);if(c){o.innerHTML=c[1]+e+c[2];for(var l=c[0];l--;)o=o.lastChild}else o.innerHTML=e;var p=o.getElementsByTagName("script");p.length&&(s(t),i(p).forEach(t));for(var d=i(o.childNodes);o.lastChild;)o.removeChild(o.lastChild);return d}var r=e("./ExecutionEnvironment"),i=e("./createArrayFrom"),a=e("./getMarkupWrap"),s=e("./invariant"),u=r.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{"./ExecutionEnvironment":20,"./createArrayFrom":79,"./getMarkupWrap":92,"./invariant":98}],81:[function(e,t){function n(e,t){var n={},o=Array.isArray(t);"undefined"==typeof t&&(t=!0);for(var r=e.length;r--;)n[e[r]]=o?t[r]:t;return n}t.exports=n},{}],82:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.isUnitlessNumber[e]?""+t:t+"px"}var o=e("./CSSProperty");t.exports=n},{"./CSSProperty":2}],83:[function(e,t){function n(e){return function(){return e}}function o(){}var r=e("./copyProperties");r(o,{thatReturns:n,thatReturnsFalse:n(!1),thatReturnsTrue:n(!0),thatReturnsNull:n(null),thatReturnsThis:function(){return this},thatReturnsArgument:function(e){return e}}),t.exports=o},{"./copyProperties":78}],84:[function(e,t){"use strict";function n(e){return r[e]}function o(e){return(""+e).replace(i,n)}var r={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},i=/[&><"'\/]/g;t.exports=o},{}],85:[function(e,t){var n=function(e){var t=Array.prototype.slice.call(arguments).map(function(e){return String(e)}),o=e.split("%s").length-1;return o!==t.length-1?n("ex args number mismatch: %s",JSON.stringify(t)):n._prefix+JSON.stringify(t)+n._suffix};n._prefix="<![EX[",n._suffix="]]>",t.exports=n},{}],86:[function(e,t){"use strict";function n(e,t,n){for(var o=e.attributes,r=o.length,i=[],a=0;r>a;a++){var s=o.item(a);t.call(n,s)&&i.push(s)}return i}t.exports=n},{}],87:[function(e,t){"use strict";function n(e,t,n){var o=e;r(!o.hasOwnProperty(n)),o[n]=t}function o(e){if(null==e)return e;var t={};return i(e,n,t),t}var r=e("./invariant"),i=e("./traverseAllChildren");t.exports=o},{"./invariant":98,"./traverseAllChildren":116}],88:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],89:[function(e,t){function n(e,t,n){return"string"!=typeof e?e:t?o(e,t,n):document.getElementById(e)}function o(e,t,n){var i,a,s;if(r(t)==e)return t;if(t.getElementsByTagName){for(a=t.getElementsByTagName(n||"*"),s=0;s<a.length;s++)if(r(a[s])==e)return a[s]}else for(a=t.childNodes,s=0;s<a.length;s++)if(i=o(e,a[s]))return i;return null}function r(e){var t=e.getAttributeNode&&e.getAttributeNode("id");return t?t.value:null}t.exports=n},{}],90:[function(e,t){function n(){try{return document.activeElement}catch(e){return null}}t.exports=n},{}],91:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],92:[function(e,t){function n(e){return r(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var o=e("./ExecutionEnvironment"),r=e("./invariant"),i=o.canUseDOM?document.createElement("div"):null,a={circle:!0,g:!0,line:!0,path:!0,polyline:!0,rect:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],u=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],l=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:c,th:c,circle:l,g:l,line:l,path:l,polyline:l,rect:l,text:l};t.exports=n},{"./ExecutionEnvironment":20,"./invariant":98}],93:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function r(e,t){for(var r=n(e),i=0,a=0;r;){if(3==r.nodeType){if(a=i+r.textContent.length,t>=i&&a>=t)return{node:r,offset:t-i};i=a}r=n(o(r))}}t.exports=r},{}],94:[function(e,t){"use strict";function n(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=n},{}],95:[function(e,t){"use strict";function n(){return!r&&o.canUseDOM&&(r="innerText"in document.createElement("div")?"innerText":"textContent"),r}var o=e("./ExecutionEnvironment"),r=null;t.exports=n},{"./ExecutionEnvironment":20}],96:[function(e,t){"use strict";function n(e){return e===window?{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],97:[function(e,t){function n(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=n},{}],98:[function(e,t){function n(e){if(!e)throw new Error("Invariant Violation")}t.exports=n},{}],99:[function(e,t){"use strict";function n(e,t){if(!o||t&&!o.addEventListener)return!1;var n=document.createElement("div"),i="on"+e,a=i in n;return a||(n.setAttribute(i,"return;"),a="function"==typeof n[i],"undefined"!=typeof n[i]&&(n[i]=void 0),n.removeAttribute(i)),!a&&r&&"wheel"===e&&(a=document.implementation.hasFeature("Events.wheel","3.0")),n=null,a}var o,r,i=e("./ExecutionEnvironment");i.canUseDOM&&(o=document.createElement("div"),r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{"./ExecutionEnvironment":20}],100:[function(e,t){function n(e){return!(!e||!("undefined"!=typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],101:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],102:[function(e,t){function n(e){return o(e)&&3==e.nodeType}var o=e("./isNode");t.exports=n},{"./isNode":100}],103:[function(e,t){"use strict";function n(e){e||(e="");var t,n=arguments.length;if(n>1)for(var o=1;n>o;o++)t=arguments[o],t&&(e+=" "+t);return e}t.exports=n},{}],104:[function(e,t){"use strict";var n=e("./invariant"),o=function(e){var t,o={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(o[t]=t);return o};t.exports=o},{"./invariant":98}],105:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],106:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e.call(this,n)}}t.exports=n},{}],107:[function(e,t){"use strict";var n=e("./mergeInto"),o=function(e,t){var o={};return n(o,e),n(o,t),o};t.exports=o},{"./mergeInto":109}],108:[function(e,t){"use strict";var n=e("./invariant"),o=e("./keyMirror"),r=36,i=function(e){return"object"!=typeof e||null===e},a={MAX_MERGE_DEPTH:r,isTerminal:i,normalizeMergeArg:function(e){return void 0===e||null===e?{}:e},checkMergeArrayArgs:function(e,t){n(Array.isArray(e)&&Array.isArray(t))},checkMergeObjectArgs:function(e,t){a.checkMergeObjectArg(e),a.checkMergeObjectArg(t)},checkMergeObjectArg:function(e){n(!i(e)&&!Array.isArray(e))},checkMergeLevel:function(e){n(r>e)},checkArrayStrategy:function(e){n(void 0===e||e in a.ArrayStrategies)},ArrayStrategies:o({Clobber:!0,IndexByIndex:!0})};t.exports=a},{"./invariant":98,"./keyMirror":104}],109:[function(e,t){"use strict";function n(e,t){if(r(e),null!=t){r(t);for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}}var o=e("./mergeHelpers"),r=o.checkMergeObjectArg;t.exports=n},{"./mergeHelpers":108}],110:[function(e,t){"use strict";var n=function(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e.prototype[n]=t[n])};t.exports=n},{}],111:[function(e,t){"use strict";function n(e,t){i("html"===e.tagName.toLowerCase()),t=t.trim(),i(0===t.toLowerCase().indexOf("<html"));var n=t.indexOf(">")+1,a=t.lastIndexOf("<"),s=t.substring(0,n),u=t.substring(n,a),c=s.indexOf(" ")>-1,l=null;if(c){l=o(s.replace("html ","span ")+"</span>")[0];var p=r(l,function(t){return e.getAttributeNS(t.namespaceURI,t.name)!==t.value});p.forEach(function(t){e.setAttributeNS(t.namespaceURI,t.name,t.value)})}var d=r(e,function(e){return!(l&&l.hasAttributeNS(e.namespaceURI,e.name))});d.forEach(function(t){e.removeAttributeNS(t.namespaceURI,t.name)}),e.innerHTML=u}var o=e("./createNodesFromMarkup"),r=e("./filterAttributes"),i=e("./invariant");t.exports=n},{"./createNodesFromMarkup":80,"./filterAttributes":86,"./invariant":98}],112:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o=0,r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.call(n,e[i],i,o++));return r}t.exports=n},{}],113:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o=0,r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.call(n,i,e[i],o++));return r}t.exports=n},{}],114:[function(e,t){"use strict";var n=e("./ExecutionEnvironment"),o=null;n.canUseDOM&&(o=window.performance||window.webkitPerformance),o&&o.now||(o=Date);var r=o.now.bind(o);t.exports=r},{"./ExecutionEnvironment":20}],115:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],116:[function(e,t){"use strict";function n(e,t,n){null!==e&&void 0!==e&&a(e,"",0,t,n)}var o=e("./ReactComponent"),r=e("./ReactTextComponent"),i=e("./invariant"),a=function(e,t,n,s,u){var c=0;if(Array.isArray(e))for(var l=0;l<e.length;l++){var p=e[l],d=t+o.getKey(p,l),f=n+c;c+=a(p,d,f,s,u)}else{var h=typeof e,m=""===t,v=m?o.getKey(e,0):t;if(null===e||void 0===e||"boolean"===h)s(u,null,v,n),c=1;else if(e.mountComponentIntoNode)s(u,e,v,n),c=1;else if("object"===h){i(!e||1!==e.nodeType);for(var g in e)e.hasOwnProperty(g)&&(c+=a(e[g],t+"{"+g+"}",n+c,s,u))}else if("string"===h){var C=new r(e);s(u,C,v,n),c+=1}else if("number"===h){var y=new r(""+e);s(u,y,v,n),c+=1}}return c};t.exports=n},{"./ReactComponent":25,"./ReactTextComponent":60,"./invariant":98}]},{},[24])(24)});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
/* 
# Vida Renderer

## Coordinate System
- Origin is the center (think cartesian plane, not GUI programming)

*/

var render = {};

var canvas;
var ctx;
var setup = false;
render.offsetX = 0;
render.offsetY = 0;
render.zoom = 2;

render.zoomOut = function() {
  render.setZoom(render.zoom + 0.5);
};

render.zoomIn = function() {
  if (render.zoom <= 1) return;
  render.setZoom(render.zoom - 0.5);
};

render.setZoom = function(zoom) {
  var prevZoom = render.zoom;
  render.zoom = zoom;
  // TODO: This still zooms in around the origin
  render.offsetX = (render.offsetX / prevZoom) * render.zoom;
  render.offsetY = (render.offsetY / prevZoom) * render.zoom;
  render.resetCanvasAspect();
};

render.centerCells = function() {
  // Go through all cells, compute average origin
  // Go to that origin
};

render.init = function(config) {

  setup = true;

  var gridID = "grid";
  var blockSize = config.blockSize;
  canvas = document.getElementById(gridID);
  // TODO: Make this respect previous offsets
  // (currently it puts you back at (0, 0)
  render.offsetX = (window.innerWidth/2)*render.zoom;
  render.offsetY = (window.innerHeight/2)*render.zoom;

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  }
  else {
    alert("Please switch to a browser that supports canvas.");
  }

  render.resetCanvasAspect();

      // Keep canvas's aspect ratio the same
  window.onresize = function(e) {
    render.resetCanvasAspect();
  };

  var enteredX = null;
  var enteredY = null;
  var ofsX = null;
  var ofsY = null;

  canvas.addEventListener("mousedown", function(e) { 
    enteredX = (e.x - canvas.offsetLeft) * render.zoom;
    enteredY = (e.y - canvas.offsetTop) * render.zoom;
    ofsX = render.offsetX;
    ofsY = render.offsetY;
  });


  canvas.addEventListener("mouseup", function(e) {
    enteredX = null;
    enteredY = null;
    ofsX = null;
    ofsY = null;
  });

  canvas.addEventListener("mouseout", function(e) {
    enteredX = null;
    enteredY = null;
    ofsX = null;
    ofsY = null;
  });

  canvas.addEventListener("mousemove", function(e) {
    if (!enteredX || !enteredY) return; 

    var ex = (e.x - canvas.offsetLeft) * render.zoom;
    var ey = (e.y - canvas.offsetTop) * render.zoom;

    render.offsetX = (ex - enteredX) + ofsX;
    render.offsetY = (ey - enteredY) + ofsY;
  });

  window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           function(callback) {
             window.setTimeout(callback, 1000 / 60);
           };
  })();


  // usage:
  // instead of setInterval(render, 16) ....

  (function animloop(){
    requestAnimFrame(animloop);
    render.draw();
  })();

};

render.resetCanvasAspect = function() {
  canvas.width = window.innerWidth*render.zoom;
  canvas.height = window.innerHeight*render.zoom;
};

render.cachedCells;
render.cachedBlockSize;

render.setVars = function(game, config) {
  game = game || {};
  config = config || {};

  var cells = game.cells || render.cachedCells || [];
  var blockSize = config.blockSize || render.cachedBlockSize || 2;

  render.cachedCells = cells;
  render.cachedBlockSize = blockSize;
};

// Takes a game state from runner.js and draws that on a canvas 
render.draw = function(game, config) {

  if (!setup) render.init(config);

  game = game || {};
  config = config || {};

  var cells = game.cells || render.cachedCells || [];
  var blockSize = config.blockSize || render.cachedBlockSize || 2;

  render.cachedCells = cells;
  render.cachedBlockSize = blockSize;

  // Clear grid
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  cells.forEach(function(cell) {
    if (cell.type === "food") {
      ctx.fillStyle = "green";
    }
    else {
      if (cell.age < 20) {
        var lum = 80 - cell.age*2; 
      }
      else {
        var lum = 40; 
      }
      ctx.fillStyle = "hsl("+cell.color+", 50%, "+lum+"%)";
    }

    // Now instead of just going from the origin, we have to convert
    //   our cells' central origin coords to the canvas's top left coords
    // I feel like we just have to add half the canvas size
    ctx.fillRect(
      (cell.x*blockSize)+render.offsetX, 
      (cell.y*blockSize)+render.offsetY, 
      blockSize, 
      blockSize);
  });

};

module.exports = render;

},{}],10:[function(require,module,exports){
// Vida Runner
var runner = {};

// Dependencies
var render = require("./render"),
    aux = require("./helpers");

var ais = {
  "protoai": require("./cells/protoai"),
  "food": require("./cells/food"),
  "rando": require("./cells/rando") 
};

var game = {
  cells: [],
  time: 0
};
var config = {};
var _interval;

// TEST
// The slowest function by far is cellExists(),
// because it does an O(n) traversal at least once
// per tick. Testing to see if I can speed it up by
// using an adjacency list.
var adjacency = {};

_addAdj = function(x, y) {
  if (!(x in adjacency)) adjacency[x] = [];
  if (adjacency[x].indexOf(y) < 0) {
    adjacency[x].push(y);
  }
};

_removeAdj = function(x, y) {
  if (x in adjacency && adjacency[x].length) {
    var i = adjacency[x].indexOf(y);
    if (i != -1) adjacency[x].splice(i, 1);
  }
};

_existsAdj = function(x, y) {
  return x in adjacency && adjacency[x].indexOf(y) != -1;
};


runner.init = function(userConfig) {
  config = runner.defaultConfig(userConfig);

  runner.generateCells();

  // Hack to wait for DOM to load
  window.setTimeout(function() {
    render.setVars(game, config);
    render.init(config);
  }, 75);

  runner.start();
};

runner.toggleStartStop = function() {
  _interval ? runner.stop() : runner.start();
};

runner.start = function() {
  _interval = window.setInterval(function() {
    runner.tickAllCells();
  }, config.speed);
};

runner.stop = function() {
  _interval = window.clearInterval(_interval);
};

// Returns a clean slate of cells
runner.generateCells = function() {
  var num = 50;
  for (var i=0; i<num; i++) {
    runner.createCell({
      x: aux.rand(num*4)-num*2, 
      y: aux.rand(num*4)-num*2,
      ai: "protoai"
    });
  }
};

runner.createCell = function(options) {
  if (isNaN(options.x)) return; 
  if (isNaN(options.y)) return; 
  if (!ais[options.ai]) return;
  game.cells.push({
    x: options.x,
    y: options.y,
    age: 0,
    ai: options.ai,
    type: options.type || "cell",
    color: !isNaN(options.color) ? options.color+10 : 0 
  });
  _addAdj(options.x, options.y);
};

runner.defaultConfig = function(userConfig) {
  var mapSize = userConfig.mapSize || 100;
  return ({
    mapSize: mapSize,
    startingNum: mapSize / 2,
    blockSize: userConfig.blockSize || 2,
    speed: userConfig.speed || 100,
    maxTurn: Math.pow(mapSize, 2)
  });
};


// Right now this introduces a bunch of randos
// around a random spawn near the origin
runner.introduce = function() {
  var num = 20;
  var origin = 500;
  var xOff = aux.rand(origin) - origin/2;
  var yOff = aux.rand(origin) - origin/2;
  for (var i=0; i<num; i++) {
    runner.createCell({
      x: aux.rand(num*4)-num*2 + xOff, 
      y: aux.rand(num*4)-num*2 + yOff,
      ai: "protoai"
    });
  }
};
runner.tickAllCells = function() {

  game.time += 1;

  // For each cell
  game.cells.forEach(function(cell) {

    // See if there are any messages
    cell.age += 1;

    // Cells die of old age
    if (cell.age > 30) {
      var death = aux.rand(100 - cell.age);
      if (death < 2) {
        runner.removeCell(cell);
      }
    }

    // Cells die of overcrowding
    var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    var atari = dirs.some(function(d) {
      return runner.vacant(cell.x+d[0], cell.y+d[1]);
    });
    if (!atari) {
      runner.removeCell(cell);
    }

    // Get its desired move
    // TODO: Pass in neighborhood
    // TODO: Pass in messages
    var neighborhood = {}; 
    var messages = []; 
    var move = ais[cell.ai].tick(cell, neighborhood, messages, game.time);

    // Cell wants to reproduce
    // TEMPORARILY CAP CELL GROWTH
    if (move[0] === 2 && move[1] === 2) { // && game.cells.length < 1000) { Danger zone
      if (runner.vacant(cell.x+1, cell.y)) {

        // TODO: Introduce genetic mutation here
        // TODO: Make reproduction take a lot of x-resources-- energy 
        runner.createCell({
          x: cell.x+1, 
          y: cell.y,
          ai: cell.ai,
          type: cell.type,
          color: cell.color
        });

        //cell.age = 60;
      
      }
    }
    else {

      if (!runner.validMove(move)) return;

      var desiredX = cell.x + move[0];
      var desiredY = cell.y + move[1];

      // TODO: If valid
      if (!runner.cellExists(desiredX, desiredY)) {
        runner.move(cell, desiredX, desiredY);
      }
    }
    
  });

  render.setVars(game, config);

  runner.emit("end tick", {
    population: game.cells.length
  });
};

runner.population = function() {
  return game.cells.length;
};

var _callbacks = {};
runner.emit = function(action, data) {
  if (action in _callbacks) {
    _callbacks[action].forEach(function(callback) {
      callback.call(null, data);
    });
  } 
};
runner.on = function(action, callback) {
  if (action in _callbacks) {
    _callbacks[action].push(callback);
  }
  else {
    _callbacks[action] = [callback];
  }
};

runner.move = function(cell, x, y) {
  _removeAdj(cell.x, cell.y);
  _addAdj(x, y);
  cell.x = x;
  cell.y = y;
};

runner.removeCell = function(cell) {
  _removeAdj(cell.x, cell.y);
  var i = game.cells.indexOf(cell);
  if (i != -1) game.cells.splice(i, 1);
};

runner.cellExists = function(x, y) {
  return _existsAdj(x, y);
  /*
  return game.cells.some(function(c) {
    return c.x == x && c.y == y;
  });
  */
};

runner.vacant = function(x, y) {
  // TODO: Add outOfBounds()
  return !runner.cellExists(x, y); 
};

runner.validMove = function(move) {
  return (
    move
    && move.length == 2
    && (move[0] === 0 || move[1] === 0)
  );
};

module.exports = runner;

},{"./cells/food":1,"./cells/protoai":2,"./cells/rando":3,"./helpers":6,"./render":9}]},{},[7])