(this["webpackJsonpmy-first-project"]=this["webpackJsonpmy-first-project"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(2),a=n.n(i),c=(n(12),n(3)),l=n(4),s=n(6),u=n(5),m=(n(13),n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).updateTime=function(){o.setState({currentTime:(new Date).toLocaleString()})},o.state={currentTime:(new Date).toLocaleString()},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.timerId=setInterval(this.updateTime,1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),this.state.title!=t.title}},{key:"render",value:function(){var e=this.state.currentTime;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",null,e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("getDerivedStateFromProps"),e.title!=t.title?{title:e.title}:null}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.93136b1c.chunk.js.map