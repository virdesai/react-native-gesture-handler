(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(276)),c={},u={unversionedId:"manual-gestures/step6",id:"version-2.1.1/manual-gestures/step6",isDocsHomePage:!1,title:"step6",description:"`jsx {3-16}",source:"@site/versioned_docs/version-2.1.1/manual-gestures/step6.md",slug:"/manual-gestures/step6",permalink:"/react-native-gesture-handler/docs/manual-gestures/step6",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/manual-gestures/step6.md",version:"2.1.1"},s=[],i={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3-16}","{3-16}":!0}),"const gesture = Gesture.Manual()\n    ...\n    .onTouchesUp((e, manager) => {\n      for (const touch of e.changedTouches) {\n        trackedPointers[touch.id].value = {\n          visible: false,\n          x: touch.x,\n          y: touch.y,\n        };\n      }\n\n      if (e.numberOfTouches === 0) {\n        manager.end();\n      }\n    })\n")))}p.isMDXComponent=!0},276:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,u(u({ref:n},i),{},{components:t})):o.a.createElement(d,u({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);