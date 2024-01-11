MQKEY=Key='LZGGEeDJpGuR3xMRu4tAA04MSyIhAMJP';
MQCONFIGNUMBER=1;
if(window.MQPROTOCOL===undefined){ MQPROTOCOL=window.location.protocol==='https:'?'https://':'http://'; }
MQPLATFORMSERVER=MQPROTOCOL+"www.mapquestapi.com";
MQSTATICSERVER="https://www.mapquestapi.com/staticmap/";
MQTRAFFSERVER=TRAFFSERVER="https://www.mapquestapi.com/traffic/";
MQROUTEURL="https://www.mapquestapi.com/directions/";
MQGEOCODEURL="https://www.mapquestapi.com/geocoding/";
MQNOMINATIMURL=MQPROTOCOL+"open.mapquestapi.com/";
MQSEARCHURL="https://www.mapquestapi.com/search/";
MQLONGURL=MQPLATFORMSERVER;
MQSMSURL=MQPLATFORMSERVER;
MQTOOLKIT_VERSION="v2.2".replace(/^v/, '');
MQCDN=MQIMAGEPATH="https://api-s.mqcdn.com/"+"sdk/leaflet/v2.2/";
MQCDNCOMMON="https://api-s.mqcdn.com/";
MQICONSERVER=ICONSERVER=MQPROTOCOL+'icons.mqcdn.com';
MQICONCDN=MQPROTOCOL+'api.mqcdn.com';
LOGSERVER=MQTILELOGGER="https://www.mapquestapi.com";
MQLOGURL="https://www.mapquestapi.com/logger/v1";
COVSERVER=MQCOPYRIGHT="https://tileproxy.cloud.mapquest.com";
MQCOPYRIGHT_PATH="/attribution";
MBMAP="https://api.mapbox.com/styles/v1/mapquest/ck62b47z90j2j1iqglrzyrhtg/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBHYB="https://api.mapbox.com/styles/v1/mapquest/ck62b7u670gx81irs634q9hzs/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBSAT="https://api.mapbox.com/v4/mapbox.satellite/{$z}/{$x}/{$y}.{$ext}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBLIGHT="https://api.mapbox.com/styles/v1/mapquest/ckkeddq7i15pm17s3pep989dh/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBDARK="https://api.mapbox.com/styles/v1/mapquest/ckkej9ldx1b6w17p65rdjywia/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBMAP_OPEN="https://api.mapbox.com/styles/v1/mapquest/ck62awhdx0g1g1iqqv9u80q6i/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBHYB_OPEN="https://api.mapbox.com/styles/v1/mapquest/ck62b31dq0ivo1jnvdc2kk3qa/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBLIGHT_OPEN="https://api.mapbox.com/styles/v1/mapquest/ckkg14kqu09ta17pfip0rqjdf/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBDARK_OPEN="https://api.mapbox.com/styles/v1/mapquest/ckkg136rm09ob17lpoae7m0zg/tiles/256/{$z}/{$x}/{$y}?access_token=pk.eyJ1IjoibWFwcXVlc3QiLCJhIjoiY2Q2N2RlMmNhY2NiZTRkMzlmZjJmZDk0NWU0ZGJlNTMifQ.mPRiEubbajc6a5y9ISgydg";
MBEXT="png";
MBTILEHI="4";
MBTILELO="1";
MBCOPYRIGHT="https://tileproxy.cloud.mapquest.com";
MBCOPYRIGHT_PATH="/attribution";
function $pv() {};  function $a() {};

/**
 * MapQuest tiled map toolkit.
 * Copyright 2014, MapQuest Inc.  All Rights Reserved.
 * Copying, reverse engineering, or modification is strictly prohibited.
 * v2.2
 */
var MQ={};MQ.Control={};MQ.control={};MQ.Util={};MQ.TileLayer=L.TileLayer.extend({_config:{},options:{key:null,mapType:"map",ext:"png",attribution:"",maxZoom:20,maxNativeZoom:20},initialize:function(C){L.setOptions(this,C);MQ.mapConfig.setAPIKey(this.options);var D=this;MQ.mapConfig.ready(function(){var A=D.options.mapType;D.options.mapType=null;D.setMapType(A)})},setMapType:function(D){if(D!=this.options.mapType){this.options.mapType=D;var C=MQ.mapConfig.getConfig(D);if(C){this._url=C.url;this._openUrl=C.openUrl;L.setOptions(this,C);this.redraw()}this.fire("maptypechange",{layer:this})}},setUrl:function(C,D){},onAdd:function(B){L.TileLayer.prototype.onAdd.call(this,B);if(!B.mapquest){B.mapquest={};B.mapquest.layers=[this];B.mapquest.logo=(new MQ.Control.Logo()).addTo(B);if(B.attributionControl){B.attributionControl.setPrefix("")}this._resetStats(true);this._resetStats(false);B.mapquest.lastScale=MQ.mapConfig.getScale(this._map.getZoom());B.mapquest.attributionControl=MQ.control.attribution().addTo(B)}else{B.mapquest.layers.push(this)}this._setBaseLayer(B)},onRemove:function(D){if(D.mapquest.layers.length==1){D.removeControl(D.mapquest.logo);D.removeControl(D.mapquest.attributionControl);D.mapquest.layers=[];this._setBaseLayer(D);delete D.mapquest}else{for(var C=0;C<D.mapquest.layers.length;C++){if(D.mapquest.layers[C]==this){D.mapquest.layers.splice(C,1);break}}this._setBaseLayer(D)}L.TileLayer.prototype.onRemove.call(this,D)},_setBaseLayer:function(F){if(F.mapquest){var E=null;var G=F.mapquest.layers;for(var H=0;H<G.length;H++){E=G[H];if(G[H].options.mapType=="hyb"){break}}if(F.mapquest.baseLayer!=E){if(F.mapquest.baseLayer){F.off("viewreset",F.mapquest.baseLayer._onViewReset,F.mapquest.baseLayer);L.DomEvent.off(window,"unload",F.mapquest.baseLayer._onMapDestroy,F.mapquest.baseLayer);F.mapquest.baseLayer._sendTransactions()}if(E){F.on("viewreset",E._onViewReset,E);L.DomEvent.on(window,"unload",E._onMapDestroy,E)}F.mapquest.baseLayer=E;if(E&&F.mapquest.attributionControl){F.mapquest.attributionControl.mapTypeChanged();E._resetTransactionPosition()}F.fire("mqbaselayerchange")}}},_onMapDestroy:function(){if(this._sendTransactions()){var B=new Date().getTime()+250;while(new Date().getTime()<B){}}},getTileUrl:function(F){var E=new Boundary(boundaryDefinition);if(this._url){if(this._adjustTilePoint){this._adjustTilePoint(F)}var D=this._openUrl;if(MQCONFIGNUMBER!==4&&E.contains(F.z,F.x,F.y)){D=this._url}return L.Util.template(D,L.extend({s:this._getSubdomain(F),z:this._getZoomForUrl(),x:F.x,y:F.y},this.options))}else{return MQ.mapConfig.getConfig("imagePath")+"loading-tile-gears.jpg"}},_sendTransactions:function(){var C=false;if(!this._map||!this._map.mapquest){return C}var D=this._map.mapquest;if((D.mapaccum1>0)||(D.mapaccum2>0)){this._loadTransactionImage(this._map,"m",D.mapaccum1,D.mapaccum2,D.lastScale);C=true}if((D.sataccum1>0)||(D.sataccum2>0)){this._loadTransactionImage(this._map,"a",D.sataccum1,D.sataccum2,D.lastScale);C=true}if((D.hybaccum1>0)||(D.hybaccum2>0)){this._loadTransactionImage(this._map,"h",D.hybaccum1,D.hybaccum2,D.lastScale);C=true}this._resetStats(true);return C},_loadTransactionImage:function(N,S,Q,R,K){Q=parseInt(Q*1000000)/1000000;R=parseInt(R*1000000)/1000000;var M=this._map.getCenter();var P=this._map.getSize();var T="L_"+L.version+"_"+MQ.mapConfig.getConfig("version")+"_"+(MQ.mapConfig.getConfig("configNumber")=="4"?"OSM":"MQ");var O="?transaction=log&t="+S+"&c="+Q+"&c2="+R+"&s="+K+"&lat="+M.lat+"&lng="+M.lng+"&key="+this.options.key+"&width="+P.x+"&height="+P.y+"&rand="+Math.floor(Math.random()*99991)+"&v="+T+"&r=";var U=new Image();U.onload=U.onerror=function(){delete U};MQ.mapConfig.ready(function(){U.src=MQ.mapConfig.getConfig("logServer")+O})},_resetStats:function(E){var D=this._getFlags();var F=this._map.mapquest;if(E){F.mapaccum1=0;F.sataccum1=0;F.hybaccum1=0;F.mapaccum2=0;F.sataccum2=0;F.hybaccum2=0}else{if(D.map){F.mapaccum1+=1;F.mapaccum2+=1}if(D.sat){F.sataccum1+=1;F.sataccum2+=1}if(D.hyb){F.hybaccum1+=1;F.hybaccum2+=1}}F.diffaccum=0;F.tileOffsetX=0;F.tileOffsetY=0},_getFlags:function(){var C={map:false,sat:false,hyb:false};if(this._map&&this._map.mapquest){for(var D=0;D<this._map.mapquest.layers.length;D++){C[this._map.mapquest.layers[D].options.mapType]=true}}return C},_resetTransactionPosition:function(){if(!this._map||!this._map.mapquest){return }this._sendTransactions();var B=this._map.mapquest;B.tileOffsetX=0;B.tileOffsetY=0;B.lastTileCoords=null;B.lastScale=MQ.mapConfig.getScale(this._map.getZoom());B.mapaccum1=0;B.sataccum1=0;B.hybaccum1=0;B.mapaccum2=0;B.sataccum2=0;B.hybaccum2=0;B.diffaccum=0},_onViewReset:function(O){if(!this._map){return }var Q=this._map.mapquest;var S=this._calculateTileCoords();var K,N,U,T,M,R;var P=0;if(Q.lastTileCoords){N=Q.lastTileCoords.nw.x-S.nw.x;U=this._positiveOrZero(S.se.x-Q.lastTileCoords.se.x);T=S.nw.y-Q.lastTileCoords.nw.y;M=this._positiveOrZero(Q.lastTileCoords.se.y-S.se.y);Q.tileOffsetX+=N;Q.tileOffsetY+=T;N=this._positiveOrZero(N);T=this._positiveOrZero(T);P+=(N+U)*S.rowcount;P+=(T+M)*S.colcount;if(P>0){R=P/(S.rowcount*S.colcount*9);K=this._getFlags(this._map);if(K.map){Q.mapaccum1+=R}if(K.sat){Q.sataccum1+=R}if(K.hyb){Q.hybaccum1+=R}if(Math.abs(Q.tileOffsetX)>4||Math.abs(Q.tileOffsetY)>4){this._sendTransactions()}}}Q.lastTileCoords=S},_calculateTileCoords:function(){var E=this.options.tileSize;var F=this._map.getPixelBounds();var D=F.getSize();return{nw:new L.Point(Math.floor(F.min.x/E),Math.floor(F.min.y/E)),se:new L.Point(Math.floor(F.max.x/E),Math.floor(F.max.y/E)),colcount:Math.floor(D.x/E)+1,rowcount:Math.floor(D.y/E)+1}},_positiveOrZero:function(B){return B<0?0:B}});function _tile2long(C,D){C=C+0.5;return(C/Math.pow(2,D)*360-180)}function _tile2lat(E,D){E=E+0.5;var F=Math.PI-2*Math.PI*E/Math.pow(2,D);return(180/Math.PI*Math.atan(0.5*(Math.exp(F)-Math.exp(-F))))}function Boundary(F){var G=[];for(var H=0;H<F.features.length;H++){var E=F.features[H].geometry.coordinates[0];G.push(new GeoPolygon(E,F.features[H].properties))}this.polies=G}Boundary.prototype={contains:function(J,H,I){if(J<=5){return false}var K=_tile2long(H,J);var N=_tile2lat(I,J);var O=false;for(var M=0;M<this.polies.length;M++){if(this.polies[M].contains(K,N,J)){O=true;break}}return O},containsLngLat:function(H,J,G){if(H<=5){return false}var F=false;for(var I=0;I<this.polies.length;I++){if(this.polies[I].contains(J,G,H)){F=true;break}}return F}};function GeoPolygon(D,C){this.latLngArray=D;this.minZoom=C.minZoom||1}GeoPolygon.prototype={contains:function(N,I,K){if(K<this.minZoom){return false}var H=this.latLngArray.length;var M,O=H-1;var J=false;for(M=0;M<H;M++){if((this.latLngArray[M][1]<I&&this.latLngArray[O][1]>=I||this.latLngArray[O][1]<I&&this.latLngArray[M][1]>=I)&&(this.latLngArray[M][0]<=N||this.latLngArray[O][0]<=N)){if(this.latLngArray[M][0]+(I-this.latLngArray[M][1])/(this.latLngArray[O][1]-this.latLngArray[M][1])*(this.latLngArray[O][0]-this.latLngArray[M][0])<N){J=!J}}O=M}return J}};var boundaryDefinition={type:"FeatureCollection",features:[{type:"Feature",properties:{name:"Canada, USA, Mexico"},geometry:{type:"Polygon",coordinates:[[[-92.83172607421875,14.514462263731682],[-92.230224609375,14.509144353358417],[-92.06268310546874,15.074775626862015],[-92.21649169921875,15.249739618721511],[-91.72760009765624,16.069568237896014],[-90.4449462890625,16.074846693720446],[-90.45318603515625,16.425547506916736],[-91.42547607421875,17.24574420800713],[-90.98876953125,17.248367290475684],[-90.98876953125,17.816685878972844],[-89.15267944335938,17.816685878972844],[-89.14306640625,17.96305758238804],[-88.79837036132812,17.961751226842342],[-88.505859375,18.460070752671413],[-88.45367431640624,18.536908560288477],[-88.11721801757812,18.521283325496288],[-86.99523925781249,18.5186789808691],[-86.41845703124999,21.28937435586041],[-87.38525390624999,22.39071391683855],[-88.13232421875,24.00632619875113],[-91.669921875,27.994401411046148],[-84.44091796875,27.547241546253293],[-83.69384765625,26.58852714730864],[-82.77099609375,25.799891182088334],[-80.9033203125,25.859223554761407],[-79.541015625,25.958044673317843],[-79.62890625,27.761329874505233],[-49.74609374999999,46.6795944656402],[-59.0625,59.5343180010956],[-60.46875,71.07405646336098],[-60.732421875,74.35482803013984],[-171.5625,74.4021625984244],[-174.375,44.08758502824518],[-163.740234375,14.859850400601049],[-92.83172607421875,14.514462263731682]]]}},{type:"Feature",properties:{name:"Puerto Rico",minZoom:9},geometry:{type:"Polygon",coordinates:[[[-67.620849609375,17.392579271057766],[-67.620849609375,19.08288436934017],[-65.56640625,19.08288436934017],[-65.56640625,17.392579271057766],[-67.620849609375,17.392579271057766]]]}},{type:"Feature",properties:{name:"South Florida",minZoom:7},geometry:{type:"Polygon",coordinates:[[[-83.155517578125,24.196868919249656],[-83.155517578125,25.958044673317843],[-79.530029296875,25.958044673317843],[-79.530029296875,24.196868919249656],[-83.155517578125,24.196868919249656]]]}}]};MQ.tileLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}return new MQ.TileLayer(B)};MQ.mapLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}B.mapType="map";return new MQ.TileLayer(B)};MQ.satelliteLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}B.mapType="sat";return new MQ.TileLayer(B)};MQ.hybridLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}B.mapType="hyb";return new MQ.TileLayer(B)};MQ.lightLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}B.mapType="light";return new MQ.TileLayer(B)};MQ.darkLayer=function(B){if(B==null){B={}}if(!B.key&&MQKEY){B.key=MQKEY}B.mapType="dark";return new MQ.TileLayer(B)};MQ.Util=L.Class.extend({indexOf:function(I,H,G){if(!Array.prototype.indexOf){for(var J=(G||0),F=I.length;J<F;J++){if(I[J]===H){return J}}return -1}return I.indexOf(H)},escapable:/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap:null,indent:null,meta:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},quote:function(B){this.escapable.lastIndex=0;return this.escapable.test(B)?'"'+B.replace(this.escapable,function(D){var A=this.meta[D];return typeof A==="string"?A:"\\u"+("0000"+D.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+B+'"'},str:function(P,S){var K,M,O,N,R=this.gap,J,Q=S[P];switch(typeof Q){case"string":return this.quote(Q);case"number":return isFinite(Q)?String(Q):"null";case"boolean":case"null":return String(Q);case"object":if(!Q){return"null"}this.gap+=this.indent;J=[];if((Object.prototype.toString.apply(Q)==="[object Array]")||(typeof (Q)=="object"&&typeof (Q.length)=="number"&&(Q.length===0||typeof ((Q[0]))!="undefined"))){N=Q.length;for(K=0;K<N;K+=1){J[K]=this.str(K,Q)||"null"}O=J.length===0?"[]":this.gap?"[\n"+this.gap+J.join(",\n"+this.gap)+"\n"+R+"]":"["+J.join(",")+"]";this.gap=R;return O}for(M in Q){if(Object.hasOwnProperty.call(Q,M)){O=this.str(M,Q);if(O){J.push(this.quote(M)+(this.gap?": ":":")+O)}}}O=J.length===0?"{}":this.gap?"{\n"+this.gap+J.join(",\n"+this.gap)+"\n"+R+"}":"{"+J.join(",")+"}";this.gap=R;return O}},stringifyJSON:function(B){if(window.JSON&&window.JSON.stringify){return window.JSON.stringify(B)}return this.str("",{"":B})},toQueryString:function(F){var H=[],G={},E;for(E in F){if(!G[E]){H.push(encodeURIComponent(E)+"="+encodeURIComponent(String(F[E])))}}return H.join("&")},xhr:function(){function C(B){try{return new ActiveXObject(B)}catch(A){return undefined}}if(window.XMLHttpRequest){return new window.XMLHttpRequest()}if(window.ActiveXObject){var D=C("Msxml2.XMLHTTP.6.0")||C("Msxml2.XMLHTTP.3.0")||C("Msxml2.XMLHTTP")||C("Microsoft.XMLHTTP");if(D){return D}}throw new Error("Current browser configuration does not support XMLHttpRequest")},parseJSON:function(C){try{if(window.JSON&&window.JSON.parse){return window.JSON.parse(C)}return MQA._jsEval("("+C+")")}catch(D){return undefined}},doXhr:function(N,M,R){if(!M){M={}}var O=this.xhr(),Q,P,K=M.verb||"GET",J=(typeof M.async!="undefined")?M.async:true;setup=M.setup;O.open(K,N,J);if(setup){setup(O)}if((K=="GET")&&(L.Browser.ie)){O.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT")}var S=function(){O.onreadystatechange=function(){};var B,C;try{B=O.status}catch(D){}C=O;O=null;if(P){clearTimeout(P)}if(B>=200&&B<=299){R(C,false)}else{var E;try{E=C.responseText}catch(A){}R(C,{reason:"HTTP error",statusCode:B,responseText:E})}};O.onreadystatechange=function(){if(Q){return }if(O.readyState==4){S()}};if(M.timeout){P=setTimeout(function(){if(Q){return }Q=true;O.onreadystatechange=function(){};O.abort();R(O,{reason:"Request timed out"});O=null},M.timeout)}if(M.formUrlEncoded){O.setRequestHeader("Content-type","application/x-www-form-urlencoded");O.setRequestHeader("Content-length",M.postData.length);O.setRequestHeader("Connection","close")}O.send(M.postData||null);if(!J&&(MQA.browser.name=="firefox")&&O){S()}return function(){if(O){Q=true;O.onreadystatechange=function(){};O.abort();O=null;if(P){clearTimeout(P)}}}},doGetJSON:function(D,F,E){return this.doXhr(D,F,function(B,A){if(A){E(false,A)}else{var C=MQ.util.parseJSON(B.responseText);if(!C){E(false,{reason:"Parse Error",responseText:B.responseText})}else{E(C,null,B.responseText)}}})},doPostJSON:function(E,F,H,G){H=L.Util.extend(H,{verb:"POST",setup$After:function(A){A.setRequestHeader("Content-Type","application/json; charset=UTF-8")},postData:this.stringifyJSON(F)});return MQ.util.doGetJSON(E,H,G)},_jsonpCounter:0,_jsonpHead:null,doJSONP:function(N,K,O){var S=(N||"").indexOf("?")===-1?"?":"&",P;var R=(K.callback||"callback");var Q=R+"_json"+(++this._jsonpCounter);N+="&"+R+"="+encodeURIComponent(Q);window[Q]=function(B){O(B);try{delete window[Q]}catch(A){}window[Q]=null};var M=document.createElement("script");M.src=N;M.type="text/javascript";M.async=true;M.onerror=function(A){O(false,{url:N,event:A})};var J=false;M.onload=M.onreadystatechange=function(){if(!J&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){J=true;M.onload=M.onreadystatechange=null;if(M&&M.parentNode){M.parentNode.removeChild(M)}}};if(!this._jsonpHead){this._jsonpHead=document.getElementsByTagName("head")[0]}this._jsonpHead.appendChild(M)},doJSONV:function(E,H,F){var G=document.createElement("script");G.src=E;G.type="text/javascript";if(MQA.browser.name=="msie"){G.onreadystatechange=function(){F()}}else{G.onload=function(){F()}}document.body.appendChild(G);return function(){}},__IOCacheBustValue:0,cacheBust:function(){return(new Date().getTime()+","+(++this.__IOCacheBustValue))},loadCSS:function(F){var G=document.createElement("style"),H=document.getElementsByTagName("head")[0];if(!H){return }if(L.Browser.ie&&!(window.XDomainRequest&&window.msPerformance)){G.setAttribute("type","text/css");if(G.styleSheet){G.styleSheet.cssText=F}}else{try{G.appendChild(document.createTextNode(F))}catch(E){G.setAttribute("type","text/css");if(G.styleSheet){G.styleSheet.cssText=F}}}if(H.firstChild){H.insertBefore(G,H.firstChild)}else{H.appendChild(G)}}});MQ.util=new MQ.Util();MQ.MapConfig=L.Class.extend({includes:L.Mixin.Events,_hasLoaded:0,sslMode:false,_config:{smallMap:400,version:"1.0",hd:L.Browser.retina?"@2x":""},initialize:function(B){L.setOptions(this,B);this.sslMode=("https:"==document.location.protocol)},load:function(){this._hasLoaded=1;this._parseHardCoded()},ready:function(B){if(this._hasLoaded==2){B.call(null,this)}else{this.on("load",B);if(!this._hasLoaded){this.load()}}},_parseHardCoded:function(){this._config.configNumber=MQCONFIGNUMBER;this._config.logServer=MQLOGURL+"/transaction";this._config.geocodeAPI=MQGEOCODEURL+"v1/";this._config.trafficAPI=MQTRAFFSERVER+"v2/";this._config.directionsAPI=MQROUTEURL+"v2/";this._config.cdn=MQCDN;this._config.trafficImagePath=MQCDNCOMMON+"mqtraffic/";this._config.imagePath=MQIMAGEPATH+"images/";this._config.iconPath=MQICONSERVER;this._config.iconCDN=MQICONCDN;this._config.map={url:this._leafletURL(MBMAP),openUrl:this._leafletURL(MBMAP_OPEN),ext:MBEXT,subdomains:this._mapBoxSubDomains(MBTILELO,MBTILEHI)};this._config.hyb={url:this._leafletURL(MBHYB),openUrl:this._leafletURL(MBHYB_OPEN),ext:MBEXT,subdomains:this._mapBoxSubDomains(MBTILELO,MBTILEHI)};this._config.sat={url:this._leafletURL(MBSAT),openUrl:this._leafletURL(MBSAT),ext:MBEXT,subdomains:this._mapBoxSubDomains(MBTILELO,MBTILEHI)};this._config.light={url:this._leafletURL(MBLIGHT),openUrl:this._leafletURL(MBLIGHT_OPEN),ext:MBEXT,subdomains:this._mapBoxSubDomains(MBTILELO,MBTILEHI)};this._config.dark={url:this._leafletURL(MBDARK),openUrl:this._leafletURL(MBDARK_OPEN),ext:MBEXT,subdomains:this._mapBoxSubDomains(MBTILELO,MBTILEHI)};this._config.copyrightServer=MBCOPYRIGHT+MBCOPYRIGHT_PATH;this._hasLoaded=2;this.fire("load",this)},_leafletURL:function(B){if(B){B=B.replace(/\{\$/g,"{");B=B.replace("{hostrange}","{s}");if(/\.\{ext\}/.test(B)){B=B.replace(".{ext}",this._config.hd+".{ext}")}else{B=B.replace("{y}","{y}"+this._config.hd)}}return B},_mapBoxSubDomains:function(I,F){var J=["a","b","c","d"];var G=[];for(var H=I;H<=F;H++){G.push(J[H-1])}return G},_mapquestSubdomains:function(H,E){var F=[];for(var G=H;G<=E;G++){F.push(G)}return F},getConfig:function(B){return this._config[B]},setConfig:function(C,D){this._config[C]=D},setAPIKey:function(B){if(B.key){this.setConfig("key",B.key)}else{B.key=this.getConfig("key")}},getScale:function(D){if(this._resolutions==null){var C=156543.0339;this._resolutions=[];while(C>0.1){this._resolutions.push(C);C*=0.5}}return Math.floor(this._resolutions[D]*39.3700787*72)}});MQ.mapConfig=new MQ.MapConfig();MQ.util.loadCSS(".leaflet-bottom.leaflet-right .mq-attribution-control{background:#eaeaea;bottom:-2px;color:#777777;height:13px;margin:0;padding:0px 5px;text-align:right;text-transform:uppercase;font-weight:normal;font-family:sans-serif;font-size:9px;white-space:nowrap;margin-bottom:2px;letter-spacing:.5px;} .leaflet-bottom.leaflet-right .mq-attribution-control a{color:inherit;font-weight:700;text-decoration:underline;}");MQ.Control.Attribution=L.Control.extend({map:null,_currentMapType:"map",_currentZoom:0,_currentBounds:null,_lastQuery:null,_entityMap:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},options:{position:"bottomright"},initialize:function(B){L.setOptions(this,B)},onAdd:function(B){this.map=B;this._container=L.DomUtil.create("div","mq-attribution-control");this.list=[];this.invalidateAttribution();B.on("zoomend",this.invalidateCoverage,this);B.on("moveend",this.invalidateCoverage,this);return this._container},onRemove:function(B){B.off("zoomend",this.invalidateCoverage,this);B.off("moveend",this.invalidateCoverage,this)},escapeHtml:function(B){return String(B).replace(/[&<>"'\/]/g,function(A){return _entityMap[A]})},replaceHtml:function(D){var C=MQ.mapConfig.getConfig("imagePath");return D.replace(/\%TK\%/g,C)},set:function(H,M){var G,I=this.list,K,J=false;if(!M){for(G=0;G<I.length;G++){K=I[G];if(K&&K[0]==H){I[G]=null;this.invalidateAttribution();return }}}else{I.push([H,M]);this.invalidateAttribution()}},invalidateAttribution:function(){if(this._refreshAttributionKey){return }var B=this;this._refreshAttributionKey=setTimeout(function(){B.refreshAttribution()},0)},refreshAttribution:function(){this._refreshAttributionKey=null;var Q,O=[],X,T=this.list,R,V=new Date().getFullYear(),P=["&copy;"+V+"&nbsp;MapQuest"],U=null,S,W,Y={},N=window.location.hostname.match(/.ca$/)?"http://info.mapquest.com/mapquest-terms-of-use-ca-en/":"http://hello.mapquest.com/terms-of-use";for(X=0;X<T.length;X++){R=T[X];if(R){O.push(R)}}O.sort(COPYRIGHT_SORT);this.list=O;for(X=0;X<O.length;X++){Q=O[X][0];R=O[X][1];if(R!=undefined&&(R.text!=""||R.html!="")&&X==0){P.push(",&nbsp;")}if(!R||Y[Q]){continue}Y[Q]=true;if(X>0){P.push(",&nbsp;")}if(R.html){switch(R.text_short){case"MB":P.push('<a href="http://hello.mapquest.com/attributions-mapbox">&copy; Mapbox</a>');break;case"OSM":P.push('<a href="http://www.openstreetmap.org/about">'+R.html+"</a>");break;default:P.push(this.replaceHtml(R.html))}}else{if(R.text){P.push(this.escapeHtml(R.text))}}}termsHTML='<a id="terms" class="termsLink" target="_blank" href="'+N+'">Terms</a>';if(this.map&&this.map.getSize().x>MQ.mapConfig.getConfig("smallMap")){P.push(" | "+termsHTML)}else{P=[termsHTML]}W=P.join("");if(W!=this._curHtml){this._container.innerHTML=W;this._curHtml=W}},mapTypeChanged:function(){if(this.map.mapquest&&this.map.mapquest.baseLayer){this._currentMapType=this.map.mapquest.baseLayer.options.mapType}this.invalidateCoverage()},invalidateCoverage:function(){if(this._refreshCoverageKey!=null){window.clearTimeout(this._refreshCoverageKey)}var B=this;this._refreshCoverageKey=setTimeout(function(){B.refreshCoverage()},0)},refreshCoverage:function(){this._currentBounds=this.map.getBounds();this._currentZoom=this.map.getZoom();if(this.map.mapquest&&this.map.mapquest.baseLayer){this._currentMapType=this.map.mapquest.baseLayer.options.mapType}var J=(this._currentBounds._northEast.lat+this._currentBounds._southWest.lat)/2;var M=(this._currentBounds._northEast.lng+this._currentBounds._southWest.lng)/2;var I={html_short:"",html:"&copy; Mapbox",text_short:"MB",text:"Mapbox",id:"mb"};var G={html_short:"",html:"&copy; TomTom",text_short:"TT",text:"TomTom",id:"tt"};var K={html_short:"",html:"&copy; OpenStreetMap",text_short:"OSM",text:"OpenStreetMap",id:"osm"};var H=new Boundary(boundaryDefinition);this.list=[];if(this._currentMapType!=="sat"){if(MQCONFIGNUMBER!==4&&H.containsLngLat(this._currentZoom,M,J)){this.set("tt",G)}else{this.set("osm",K)}}this.set("mb",I)},_getTrimmedBounds:function(){if(this._currentBounds){var D=this._currentBounds.getNorthEast();var C=this._currentBounds.getSouthWest();if(C.lng>0&&D.lng<0){if((C.lng+D.lng)>0){C.lng-=360}else{D.lng+=360}}return C.lng.toFixed(2)+","+C.lat.toFixed(2)+","+D.lng.toFixed(2)+","+D.lat.toFixed(2)}else{return""}}});var GROUP_SORT={"":1,"Map Data":2,Imagery:3};function COPYRIGHT_SORT(P,I){var M=P[1],N=I[1],J=M.group,K=N.group,O=String(M.html||M.text||""),Q=String(N.html||N.text||"");J=String(GROUP_SORT[J]||J);K=String(GROUP_SORT[K]||K);if(J==K){if(O==Q){return 0}else{if(O<Q){return -1}else{return 1}}}else{if(J<K){return -1}else{return 1}}}MQ.control.attribution=function(B){return new MQ.Control.Attribution(B)};MQ.util.loadCSS(".mq-logo-control{margin-left: 2px !important;margin-bottom: 5px !important;}.mq-logo-control img{ position: relative;}");MQ.Control.Logo=L.Control.extend({options:{position:"bottomleft"},initialize:function(B){L.setOptions(this,B)},onAdd:function(B){this._container=L.DomUtil.create("div","mq-logo-control");L.DomEvent.disableClickPropagation(this._container);this._container.innerHTML='<img src="'+MQ.mapConfig.getConfig("imagePath")+'questy_sm.png" width="100" height="20"/>';return this._container}});MQ.control.logo=function(B){return new MQ.Control.Logo(B)};