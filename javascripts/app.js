!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},i={},s={},n={}.hasOwnProperty,o="components/",r=function(e,t){var i=0;t&&(0===t.indexOf(o)&&(i=o.length),t.indexOf("/",i)>0&&(t=t.substring(i,t.indexOf("/",i))));var n=s[e+"/index.js"]||s[t+"/deps/"+e+"/index.js"];return n?o+n.substring(0,n.length-".js".length):e},a=/^\.\.?(\/|$)/,l=function(e,t){for(var i,s=[],n=(a.test(t)?e+"/"+t:t).split("/"),o=0,r=n.length;r>o;o++)i=n[o],".."===i?s.pop():"."!==i&&""!==i&&s.push(i);return s.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},d=function(t){return function(i){var s=l(c(t),i);return e.require(s,t)}},u=function(e,t){var s={id:e,exports:{}};return i[e]=s,t(s.exports,d(e),s),s.exports},v=function(e,s){var o=l(e,".");if(null==s&&(s="/"),o=r(e,s),n.call(i,o))return i[o].exports;if(n.call(t,o))return u(o,t[o]);var a=l(o,"./index");if(n.call(i,a))return i[a].exports;if(n.call(t,a))return u(a,t[a]);throw new Error('Cannot find module "'+e+'" from "'+s+'"')};v.alias=function(e,t){s[t]=e},v.register=v.define=function(e,i){if("object"==typeof e)for(var s in e)n.call(e,s)&&(t[s]=e[s]);else t[e]=i},v.list=function(){var e=[];for(var i in t)n.call(t,i)&&e.push(i);return e},v.brunch=!0,v._cache=i,e.require=v}}(),require.register("index.static",function(e,t,i){var s=function(e){var t=[];return t.push('<!DOCTYPE html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Secure Cloud Printing and Mobile Printing for Enterprise | Breezy</title><meta name="viewport" content="width=device-width"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.3/css/simple-line-icons.css"><link rel="stylesheet" href="stylesheets/app.css"><link rel="icon" href="images/favicon.png"><script src="javascripts/vendor.js"></script><script src="javascripts/app.js"></script><script>require(\'waypoints\');\nrequire(\'initialize\');\n\n$(document).ready(function(){\n  var wow = new WOW({\n    mobile: false,\n  });\n\n  wow.init();\n});\n</script></head><body><div class="Header"><div class="Header-logo"><a href="/"><img src="images/logo-nav.svg"></a></div><div class="Header-nav"><div class="Header-navItem">Products<div class="Header-links"><a href="/products/secure-mobile-printing-for-enterprise.html" class="Header-link">Secure Mobile Printing for Enterprise</a><a href="/products/mobile-printing-at-partner-locations.html" class="Header-link">On-Location Printing with the Breezy Partner Network</a><a href="/products/email-printing-for-companies.html" class="Header-link">Email Printing</a><a href="/products/secure-mobile-printing-at-home.html" class="Header-link">Home and Personal Mobile Printing</a></div></div><div class="Header-navItem">How it Works<div class="Header-links"><a href="/architecture/secure-cloud-printing-architecture.html" class="Header-link">Architecture</a><a href="/components/apps.html" class="Header-link">Components</a><a href="/security.html" class="Header-link">Security</a></div></div><div class="Header-navItem">Partners<div class="Header-links"><a href="/partners/breezy-emm-partners.html" class="Header-link">Mobile Security - EMM</a><a href="/partners/breezy-for-developers.html" class="Header-link">Developers</a><a href="/partners/breezy-partner-network.html" class="Header-link">Public Printing Locations</a></div></div><div class="Header-navItem">Industries<div class="Header-links"><a href="/industries/finance.html" class="Header-link">Finance</a><a href="/industries/legal.html" class="Header-link">Legal and Professional Services</a><a href="/industries/government.html" class="Header-link">Government</a><a href="/industries/healthcare-and-pharma.html" class="Header-link">Healthcare and Pharma</a><a href="/industries/education.html" class="Header-link">Education</a><a href="/industries/manufacturing.html" class="Header-link">Manufacturing</a></div></div><div class="Header-navItem">Resources<div class="Header-links"><a href="/resources/datasheets.html" class="Header-link">Datasheets</a><a href="/resources/videos.html" class="Header-link">Videos</a><a href="/resources/other-resources.html" class="Header-link">Whitepapers</a><a href="/resources/FAQ.html" class="Header-link">FAQ</a></div></div><div class="Header-navItem">About Us<div class="Header-links"><a href="/about/about-breezy.html" class="Header-link">About Breezy</a><a href="/about/press.html" class="Header-link">Press</a><a href="/about/media-kit.html" class="Header-link">Media Kit</a><a href="{{site.url}}/blog" target="blank" class="Header-link">Blog</a><a href="/about/contact.html" class="Header-link">Contact Us</a></div></div><div class="Header-navItem Header-relative"><a href="http://support.breezy.com/" target="blank"></a>Support</div><div class="Header-navItem"><div class="Header-button"><a href="http://landing.breezy.com/request_a_breezy_demo?ref=navbutton" target="blank"></a>Request a Demo</div></div></div><div class="Header-burger"><div class="Header-burgerLine"></div><div class="Header-burgerLine"></div><div class="Header-burgerLine"></div></div></div><div class="HeaderSection"><div class="HeaderSection-background"></div><div class="container"><div data-wow-delay="0.8s" class="HeaderSection-logo wow fadeIn"></div><div data-wow-delay="1.4s" class="HeaderSection-slogan wow fadeInUp">Reinventing printing<br>for the 21st century</div><div data-wow-delay="2s" class="HeaderSection-buttons wow fadeInUp"><div class="HeaderSection-buttonsItem"><a href="https://itunes.apple.com/us/app/breezy-easy-print-fax-for/id438846342?mt=8" target="_blank"></a><div class="HeaderSection-buttonsIcon"><img src="images/apple.svg"></div><div class="HeaderSection-buttonsText"><div class="HeaderSection-buttonsTextTitle">Download for</div><div class="HeaderSection-buttonsTextSubtitle">Apple iOS</div></div></div><div class="HeaderSection-buttonsItem"><a href="https://play.google.com/store/apps/details?id=com.breezy.android&amp;hl=en" target="_blank"></a><div class="HeaderSection-buttonsIcon"><img src="images/android.svg"></div><div class="HeaderSection-buttonsText"><div class="HeaderSection-buttonsTextTitle">Download for</div><div class="HeaderSection-buttonsTextSubtitle">Android</div></div></div></div></div></div><div class="WhySection"><div class="container"><div class="WhySection-title">WHY BREEZY?</div><div class="WhySection-hr"></div><div class="WhySection-text">With a history of innovation, Breezy is the most sophisticated print platform in the world. Here are a few reasons why.</div><div class="WhySection-list WhySection-left"><div class="WhySection-listItem wow fadeInLeft"><div class="WhySection-listText"><div class="WhySection-listTextTitle">INDUSTRY LEADERSHIP</div><div class="WhySection-listTextDescription">From Gartner to BLI, Breezy has repeatedly earned analyst recognition for innovation.</div></div><div class="WhySection-listImage"><div class="WhySection-icon icon-trophy"></div></div></div><div class="WhySection-listItem wow fadeInLeft"><div class="WhySection-listText"><div class="WhySection-listTextTitle">SECURITY</div><div class="WhySection-listTextDescription">Breezy pioneered on-device encryption and integrates with all leading EMM providers.</div><div class="WhySection-listTextDescription">Robust audit trails and reporting features come standard.</div></div><div class="WhySection-listImage"><div class="WhySection-icon icon-lock"></div></div></div><div class="WhySection-listItem wow fadeInLeft"><div class="WhySection-listText"><div class="WhySection-listTextTitle">FLEXIBILITY</div><div class="WhySection-listTextDescription">Breezy supports every printer ever made, from every vendor under the sun. Mixed fleets are no problem.</div></div><div class="WhySection-listImage"><div class="WhySection-icon icon-printer"></div></div></div></div><div class="WhySection-iphone"><img src="images/iphone.png"><video autoplay loop class="WhySection-gif"><source src="video/iphone-gif.webm" type="video/webm"><source src="video/iphone-gif.mov" type="video/mov"></video></div><div class="WhySection-list WhySection-right"><div class="WhySection-listItem wow fadeInRight"><div class="WhySection-listImage"><div class="WhySection-icon icon-magic-wand"></div></div><div class="WhySection-listText"><div class="WhySection-listTextTitle">BREEZY IS EASY.</div><div class="WhySection-listTextDescription">Over a quarter million people have Breezy accounts, and most have never needed support. Administration is just as easy.</div></div></div><div class="WhySection-listItem wow fadeInRight"><div class="WhySection-listImage"><div class="WhySection-icon icon-energy"></div></div><div class="WhySection-listText"><div class="WhySection-listTextTitle">BREEZY IS FAST!</div><div class="WhySection-listTextDescription">SSO for one-touch setup. Integrated print button for two-tap printing. Fast, accurate rendering.</div><div class="WhySection-listTextDescription">With millions of API requests per week, we handle most in under 30ms.</div></div></div><div class="WhySection-listItem wow fadeInRight"><div class="WhySection-listImage"><div class="WhySection-icon icon-heart"></div></div><div class="WhySection-listText"><div class="WhySection-listTextTitle">BREEZY IS POWERFUL.</div><div class="WhySection-listTextDescription">Native print support for all vendors, customizeable routing for global deployments, and much more.</div></div></div></div></div></div><div class="SolutionsSection"><div class="container"><div class="SolutionsSection-title">BREEZY SOLUTIONS</div><div class="SolutionsSection-hr"></div><div class="SolutionsSection-list"><div class="SolutionsSection-listItem"><div class="SolutionsSection-listIcon icon-printer"></div><div class="SolutionsSection-listTitle">BREEZY FOR ENTERPRISE</div><div class="SolutionsSection-listText">Choose from Cloud, Hybrid or On-Premise options to enable secure mobile printing across your entire organization.</div><div class="SolutionsSection-listButton"><a href="secure-mobile-printing.html"></a>Discover Mobile Printing</div></div><div class="SolutionsSection-listItem"><div class="SolutionsSection-listIcon icon-cloud-upload"></div><div class="SolutionsSection-listTitle">THE UNIVERSAL QUEUE®</div><div class="SolutionsSection-listText">The UQueue is a mobile-first replacement for legacy hardware like badge readers, kiosks and keypads. All the benefits of pull printing / secure release, with none of the headache.</div><div class="SolutionsSection-listButton"><a href="universal-queue.html"></a>Secure Your Printing</div></div><div class="SolutionsSection-listItem"><div class="SolutionsSection-listIcon icon-settings"></div><div class="SolutionsSection-listTitle">THE BREEZY SDK</div><div class="SolutionsSection-listText">Building your own mobile apps? Breezy can help, with a drop-in SDK that lets you add a native "print" button to any app in minutes.</div><div class="SolutionsSection-listButton"><a href="universal-queue.html"></a>Secure Your Printing</div></div><div class="SolutionsSection-listItem"><div class="SolutionsSection-listIcon icon-map"></div><div class="SolutionsSection-listTitle">THE BREEZY PARTNER NETWORK</div><div class="SolutionsSection-listText">Breezy has partnered with FedEx Office and others to create a GPS-powered local printing network with thousands of locations across North America.</div><div class="SolutionsSection-listButton"><a href="breezy-partner-network-map.html"></a>See Printing Locations</div></div><div class="SolutionsSection-listItem"><div class="SolutionsSection-listIcon icon-home"></div><div class="SolutionsSection-listTitle">HOME AND PERSONAL PRINTING</div><div class="SolutionsSection-listText">Breezy\'s unique infrastructure enables mobile printing, print security and an audit trail even when your users are working from home.</div><div class="SolutionsSection-listButton"><a href="mobile-printing-at-home.html"></a>Learn more</div></div></div></div></div><div class="CustomersSection"><div class="container"><div class="CustomersSection-title">THE WORLD\'S BEST COMPANIES CHOOSE BREEZY.</div><div class="CustomersSection-subtitle">Here\'s what a few of them have to say:</div><div class="CustomersSection-slider"><div class="CustomersSection-sliderItem"><div class="CustomersSection-text">Breezy was absolutely critical to our evolution into a mobile-first enterprise.<br>We could not have replaced laptops with tablets without their help.</div><div class="CustomersSection-image"><img src="images/customers/sean-ofarrell.jpg"></div><div class="CustomerSection-name">Sean O\'Farrell, Director, Digital Workplace Services</div><div class="CustomersSection-ocupation">Eli Lilly</div></div><div class="CustomersSection-sliderItem"><div class="CustomersSection-text">Breezy\'s Universal Queue is one of the few game-changing technologies we\'ve had the opportunity to deploy this year. We are delighted with the functionality and the cost savings.</div><div class="CustomersSection-image"><img src="images/customers/brian-kripowicz.jpg"></div><div class="CustomerSection-name">Brian Kripowicz, Sr. Manager, IT Services Group</div><div class="CustomersSection-ocupation">DLA Piper</div></div><div class="CustomersSection-sliderItem"><div class="CustomersSection-text">We have been relying on Breezy\'s email printing capabilities since 2012 and never had a problem. I strongly recommend them to anyone looking for an easy, secure and reliable mobile print solution.</div><div class="CustomersSection-image"><img src="images/customers/phillip-hoare.jpg"></div><div class="CustomerSection-name">Phillip Hoare, CIO</div><div class="CustomersSection-ocupation">Wilson Sonsini Goodrich Nash & Rosenthal</div></div><div class="CustomersSection-sliderItem"><div class="CustomersSection-text">Five stars all around. The product is great and the support is world-class. I can\'t say enough good things about these guys.</div><div class="CustomersSection-image"><img src="images/customers/sal-costanzo.jpg"></div><div class="CustomerSection-name">Sal Costanza, CTO</div><div class="CustomersSection-ocupation">New Albany Floyd County Schools</div></div></div><div class="CustomersSection-button buttonControl wow fadeInUp"><a href="become_a_partner.html"></a>More Customer Stories</div></div></div><div class="PartnersSection"><div class="container"><div class="PartnersSection-title">OUR PARTNERS</div><div class="PartnersSection-hr"></div><div class="PartnersSection-text">Breezy has deep relationships across the EMM industry and has partnered with many others to bring you secure, on-demand printing whenever and wherever you need.</div><div class="PartnersSection-button buttonControl wow fadeInUp"><a href="become_a_partner.html"></a>Become a Breezy Partner</div></div></div><div class="Footer"><div class="container"><div class="Footer-list"><div class="Footer-listItem"><div class="Footer-listTitle">Learn More</div><div class="Footer-listLink"><a href="http://www.breezy.com/security.html">Breezy Security</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/architecture/secure-cloud-printing-architecture.html">Secure Cloud Printing</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/architecture/on-premise-mobile-printing-for-enterprise.html">On-Premise Deployments</a></div><div class="Footer-listLink"><a href="http://landing.breezy.com/Secure_Easy_Printing_with_AirWatch">Secure Printing for AirWatch</a></div><div class="Footer-listLink"><a href="http://landing.breezy.com/Printing_with_Good_Dynamics_Technology">Secure Printing for Good Technology</a></div><div class="Footer-listLink"><a href="http://landing.breezy.com/Printing_with_MobileIron_AppConnect">Secure Printing for MobileIron</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/products/email-printing-for-companies.html">Email Printing</a></div></div><div class="Footer-listItem"><div class="Footer-listTitle">Industries</div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/finance.html">Banking and Finance</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/legal.html">Legal &amp; Professional Services</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/government.html">Government</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/healthcare-and-pharma.html">Healthcare and Pharma</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/education.html">Education</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/industries/manufacturing.html">Manufacturing</a></div></div><div class="Footer-listItem"><div class="Footer-listTitle">Resources</div><div class="Footer-listLink"><a href="http://landing.breezy.com/definitive-guide-to-mobile-printing" target="new">Definitive Guide to Mobile Printing</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/resources/datasheets.html">Datasheets</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/resources/other-resources.html">Whitepapers</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/resources/videos.html">Videos</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/resources/FAQ.html">FAQ</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/partners/breezy-for-developers.html">For Developers</a></div></div><div class="Footer-listItem"><div class="Footer-listTitle">Contact & Info</div><div class="Footer-listLink"><a href="http://www.breezy.com/about/about-breezy.html">About Us</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/blog/">Blog</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/about/press.html">Press</a></div><div class="Footer-listLink"><a href="https://support.breezy.com">Support</a></div><div class="Footer-listLink"><a href="http://www.breezy.com/about/contact.html">Contact Us</a></div></div></div><div class="Footer-hr"></div><div class="Footer-socials"><div class="Footer-social"><a href="https://twitter.com/breezy" target="_blank"><img src="images/socials/twitter.svg"></a></div><div class="Footer-social"><a href="https://www.youtube.com/channel/UCGMsUhpoE049tcayCHWCFEA" target="_blank"><img src="images/socials/youtube.svg"></a></div><div class="Footer-social"><a href="https://www.linkedin.com/company/breezy_com" target="_blank"><img src="images/socials/linkedin.svg"></a></div></div><div class="Footer-logo"><a href="/"><img src="images/logo-big.svg"></a></div><div class="Footer-copyright">&copy; 2015 BreezyPrint Corporation. All rights reserved.<br>Certain aspects of Breezy\'s products protected by US Patent No. 9,019,535 and other pending patents.</div></div></div></body>'),t.join("")};"function"==typeof define&&define.amd?define([],function(){return s}):"object"==typeof i&&i&&i.exports&&(i.exports=s)}),require.register("initialize",function(e,t,i){$(document).ready(function(){var e,t,i;return $(".HeaderSection").vide({mp4:"video/video_bg.mp4",webm:"video/video_bg.webm",ogv:"video/video_bg.ogv",poster:"video/video_bg.jpg"}),$(".CustomersSection-slider").slick({arrows:!1,fade:!0,dots:!1}),i={offset:".WhySection"},t=new Headhesive(".Header",i),e=function(e,t){return $(".Header-"+e).hasClass("Header-"+t)?$(".Header-"+e).removeClass("Header-"+t):void 0},$(".Header-burger").click(function(){return $(".Header-burger").toggleClass("Header-burgerActive"),$(".Header-nav").toggleClass("Header-navActive")}),$(".Header-navItem").click(function(){return e("links","linksActive"),$(this).find(".Header-links").toggleClass("Header-linksActive")})})}),require.register("waypoints",function(e,t,i){var s=[].indexOf||function(e){for(var t=0,i=this.length;i>t;t++)if(t in this&&this[t]===e)return t;return-1},n=[].slice;!function(e,t){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(i){return t(i,e)}):t(e.jQuery,e)}(this,function(e,t){var i,o,r,a,l,c,d,u,v,h,f,p,m,y,g,S;return i=e(t),u=s.call(t,"ontouchstart")>=0,a={horizontal:{},vertical:{}},l=1,d={},c="waypoints-context-id",f="resize.waypoints",p="scroll.waypoints",m=1,y="waypoints-waypoint-ids",g="waypoint",S="waypoints",o=function(){function i(i){var s,n,o,r;s=i[0],s.scrollSuppliers=[{obj:s,x:"scrollLeft",y:"scrollTop"},{obj:s,x:"scrollX",y:"scrollY"},{obj:document.body,x:"scrollLeft",y:"scrollTop"},{obj:document.documentElement,x:"scrollLeft",y:"scrollTop"},{obj:t,x:"pageXOffset",y:"pageYOffset"},{obj:document.body.parentElement||{},x:"scrollLeft",y:"scrollTop"}],s.scrollSupplier=null,s.scrollSupplierGet=function(){var e,t,i,n,o;for(n=s.scrollSuppliers,e=t=0,i=n.length;i>t;e=++t)if(o=n[e],o.obj[o.x]||o.obj[o.y])return s.scrollSupplier=o;return null},(n=s.scrollSupplierGet())?(o=n.obj[n.x],r=n.obj[n.y]):(o=i.scrollLeft(),r=i.scrollTop()),this.$element=i,this.element=i[0],this.didResize=!1,this.didScroll=!1,this.id="context"+l++,this.oldScroll={x:o,y:r},this.waypoints={horizontal:{},vertical:{}},i.data(c,this.id),d[this.id]=this,i.bind(p,function(i){return function(){var s;return i.didScroll||u?void 0:(i.didScroll=!0,s=function(){return i.doScroll(),i.didScroll=!1},t.setTimeout(s,e[S].settings.scrollThrottle))}}(this)),i.bind(f,function(i){return function(){var s;return i.didResize?void 0:(i.didResize=!0,s=function(){return e[S]("refresh"),i.didResize=!1},t.setTimeout(s,e[S].settings.resizeThrottle))}}(this))}return i.prototype.doScroll=function(){var t,i,s,n;return(i=this.element.scrollSupplier)?(s=i.obj[i.x],n=i.obj[i.y]):(i=this.element.scrollSupplierGet())?(s=i.obj[i.x],n=i.obj[i.y]):(s=this.$element.scrollLeft(),n=this.$element.scrollTop()),t={horizontal:{newScroll:s,oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:n,oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!u||t.vertical.oldScroll&&t.vertical.newScroll||e[S]("refresh"),e.each(t,function(t){return function(i,s){var n,o,r;return r=[],o=s.newScroll>s.oldScroll,n=o?s.forward:s.backward,e.each(t.waypoints[i],function(e,t){var i,n;return s.oldScroll<(i=t.offset)&&i<=s.newScroll?r.push(t):s.newScroll<(n=t.offset)&&n<=s.oldScroll?r.push(t):void 0}),r.sort(function(e,t){return e.offset-t.offset}),o||r.reverse(),e.each(r,function(e,t){return t.options.continuous||e===r.length-1?t.trigger([n]):void 0})}}(this)),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},i.prototype.refresh=function(){var t,i,s;return s=e.isWindow(this.element),i=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:s?0:i.left,contextScroll:s?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:s?0:i.top,contextScroll:s?0:this.oldScroll.y,contextDimension:s?e[S]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},e.each(t,function(t){return function(i,s){return e.each(t.waypoints[i],function(t,i){var n,o,r,a,l;return n=i.options.offset,r=i.offset,o=e.isWindow(i.element)?0:i.$element.offset()[s.offsetProp],e.isFunction(n)?n=n.apply(i.element):"string"==typeof n&&(n=parseFloat(n),i.options.offset.indexOf("%")>-1&&(n=Math.ceil(s.contextDimension*n/100))),i.offset=o-s.contextOffset+s.contextScroll-n,i.options.onlyOnScroll&&null!=r||!i.enabled?void 0:null!==r&&r<(a=s.oldScroll)&&a<=i.offset?i.trigger([s.backward]):null!==r&&r>(l=s.oldScroll)&&l>=i.offset?i.trigger([s.forward]):null===r&&s.oldScroll>=i.offset?i.trigger([s.forward]):void 0})}}(this))},i.prototype.checkEmpty=function(){return e.isEmptyObject(this.waypoints.horizontal)&&e.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([f,p].join(" ")),delete d[this.id]):void 0},i}(),r=function(){function t(t,i,s){var n,o;s=e.extend({},e.fn[g].defaults,s),"bottom-in-view"===s.offset&&(s.offset=function(){var t;return t=e[S]("viewportHeight"),e.isWindow(i.element)||(t=i.$element.height()),t-e(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=s.horizontal?"horizontal":"vertical",this.callback=s.handler,this.context=i,this.enabled=s.enabled,this.id="waypoints"+m++,this.offset=null,this.options=s,i.waypoints[this.axis][this.id]=this,a[this.axis][this.id]=this,n=null!=(o=t.data(y))?o:[],n.push(this.id),t.data(y,n)}return t.prototype.trigger=function(e){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,e),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete a[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var i,s;return(s=e(t).data(y))?(i=e.extend({},a.horizontal,a.vertical),e.map(s,function(e){return i[e]})):[]},t}(),h={init:function(t,i){return null==i&&(i={}),null==i.handler&&(i.handler=t),this.each(function(){var t,s,n,a;return t=e(this),n=null!=(a=i.context)?a:e.fn[g].defaults.context,e.isWindow(n)||(n=t.closest(n)),n=e(n),s=d[n.data(c)],s||(s=new o(n)),new r(t,s,i)}),e[S]("refresh"),this},disable:function(){return h._invoke(this,"disable")},enable:function(){return h._invoke(this,"enable")},destroy:function(){return h._invoke(this,"destroy")},prev:function(e,t){return h._traverse.call(this,e,t,function(e,t,i){return t>0?e.push(i[t-1]):void 0})},next:function(e,t){return h._traverse.call(this,e,t,function(e,t,i){return t<i.length-1?e.push(i[t+1]):void 0})},_traverse:function(i,s,n){var o,r;return null==i&&(i="vertical"),null==s&&(s=t),r=v.aggregate(s),o=[],this.each(function(){var t;return t=e.inArray(this,r[i]),n(o,t,r[i])}),this.pushStack(o)},_invoke:function(t,i){return t.each(function(){var t;return t=r.getWaypointsByElement(this),e.each(t,function(e,t){return t[i](),!0})}),this}},e.fn[g]=function(){var t,i;return i=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],h[i]?h[i].apply(this,t):e.isFunction(i)?h.init.apply(this,arguments):e.isPlainObject(i)?h.init.apply(this,[null,i]):i?e.error("The "+i+" method does not exist in jQuery Waypoints."):e.error("jQuery Waypoints needs a callback function or handler option.")},e.fn[g].defaults={context:t,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},v={refresh:function(){return e.each(d,function(e,t){return t.refresh()})},viewportHeight:function(){var e;return null!=(e=t.innerHeight)?e:i.height()},aggregate:function(t){var i,s,n;return i=a,t&&(i=null!=(s=d[e(t).data(c)])?s.waypoints:void 0),i?(n={horizontal:[],vertical:[]},e.each(n,function(t,s){return e.each(i[t],function(e,t){return s.push(t)}),s.sort(function(e,t){return e.offset-t.offset}),n[t]=e.map(s,function(e){return e.element}),n[t]=e.unique(n[t])}),n):[]},above:function(e){return null==e&&(e=t),v._filter(e,"vertical",function(e,t){return t.offset<=e.oldScroll.y})},below:function(e){return null==e&&(e=t),v._filter(e,"vertical",function(e,t){return t.offset>e.oldScroll.y})},left:function(e){return null==e&&(e=t),v._filter(e,"horizontal",function(e,t){return t.offset<=e.oldScroll.x})},right:function(e){return null==e&&(e=t),v._filter(e,"horizontal",function(e,t){return t.offset>e.oldScroll.x})},enable:function(){return v._invoke("enable")},disable:function(){return v._invoke("disable")},destroy:function(){return v._invoke("destroy")},extendFn:function(e,t){return h[e]=t},_invoke:function(t){var i;return i=e.extend({},a.vertical,a.horizontal),e.each(i,function(e,i){return i[t](),!0})},_filter:function(t,i,s){var n,o;return(n=d[e(t).data(c)])?(o=[],e.each(n.waypoints[i],function(e,t){return s(n,t)?o.push(t):void 0}),o.sort(function(e,t){return e.offset-t.offset}),e.map(o,function(e){return e.element})):[]}},e[S]=function(){var e,t;return t=arguments[0],e=2<=arguments.length?n.call(arguments,1):[],v[t]?v[t].apply(null,e):v.aggregate.call(null,t)},e[S].settings={resizeThrottle:100,scrollThrottle:30},i.load(function(){return e[S]("refresh")})})});