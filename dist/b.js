/*! bjs 2013-10-24 */
!function(a){a.bjs||(a.bjs={}),a.bjs.number={pad:function(a,b,c){return a+="",a.length>=b?a:new Array(b-a.length+1).join(c||"0")+a},round:function(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c},format:function(a,b){var c=b||{},d=a.toString().split(".");return d[0]=d[0].replace(/\B(?=(\d{3})+(?!\d))/g,c.thousand||" "),d[1]&&c.decimals?(d[1]=this.round(parseFloat("0."+d[1]),c.decimals).toString().split(".")[1],d.join(c.decimal||",")):d[0]},random:function(a){return parseInt((Math.random()+"").slice(2,2+a),10)}}}(this),function(a){a.bjs||(a.bjs={}),a.bjs.asyncLoop=function(){function a(a,b,e,f,g){var h,i;!function j(){for(i=0;a()&&d>i;)e(),b(),i+=1;f(),a()?h=setTimeout(j,c):(g(),clearTimeout(h))}()}var b,c=1,d=5;return b=function(b,c,d,e){var f,g,h,i=0,j=[];if("[object Array]"===Object.prototype.toString.call(b))h=b.length,g=function(){c.call(b[i])};else{for(f in b)b.hasOwnProperty(f)&&j.push(f);h=j.length,g=function(){c.call(b[j[i]],j[i])}}a(function(){return h>i},function(){i+=1},g,function(){d&&d(i,h)},function(){e&&e(i,h)})}}()}(this),function(a){a.bjs||(a.bjs={}),a.bjs.device={DESKTOP:"desktop",TABLET:"tablet",PHONE:"phone",_type:"desktop",initialize:function(){this._type=this.getType(!0)},setType:function(){a.getComputedStyle&&(this._type=a.getComputedStyle(document.body,":after").getPropertyValue("content").replace(/\"/g,""))},getType:function(a){return a&&this.setType(),this._type},isType:function(a){return this.get()===a},isTouch:function(){return window.hasOwnProperty&&window.hasOwnProperty("ontouchstart")||window.DocumentTouch&&document instanceof DocumentTouch}}}(this),function(a){a.bjs||(a.bjs={}),a.bjs.dom=function(b){function c(c,f){e="bjsdl_"+a.bjs.string.hash(c),b.getElementById(e)||(d=b.createElement(f),d.src=c,d.id=e,"script"!==f?(d.width="1",d.height="1",d.style.position="absolute",d.style.left="-2000px",d.style.top="-2000px"):d.async=!0,b.body.appendChild(d))}var d,e;return{script:function(a){c(a,"script")},iframe:function(a){c(a,"iframe")},img:function(a){c(a,"img")}}}(document)}(this),function(a){a.bjs||(a.bjs={}),a.bjs.event={getCharCode:function(a){return parseInt("number"==typeof a.which?a.which:a.keyCode,10)},key:{BACKSPACE:8,TAB:9,RETURN:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,HOME:36,END:35,PAGEUP:33,PAGEDOWN:34,INSERT:45}}}(this),function(a){a.bjs||(a.bjs={}),a.bjs.ie=function(){for(var a,b=3,c=document.createElement("div");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",c.getElementsByTagName("i")[0];);return b>4?b:a}(),window.Booli?Booli.ie=bjs.ie:window.Booli={ie:bjs.ie}}(this),function(a){a.bjs||(a.bjs={}),a.bjs.string={ucFirst:function(a){return a+="",a.charAt(0).toUpperCase()+a.substr(1)},random:function(a){var b,c="",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(b=0;a>b;b+=1)c+=d.charAt(Math.floor(Math.random()*d.length));return c},hash:function(a){var b,c,d,e=0;if(0===a.length)return e;for(b=0,c=a.length;c>b;b+=1)d=a.charCodeAt(b),e=(e<<5)-e+d,e|=0;return e}}}(this);