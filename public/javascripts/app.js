(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var _cmp = 'components/';
  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf(_cmp) === 0) {
        start = _cmp.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return _cmp + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("index.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><title>Secure Cloud Printing and Mobile Printing for Enterprise | Breezy</title><meta name=\"viewport\" content=\"width=device-width\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.3/css/simple-line-icons.css\"><link rel=\"stylesheet\" href=\"stylesheets/app.css\"><link rel=\"icon\" href=\"images/favicon.png\"><script src=\"javascripts/vendor.js\"></script><script src=\"javascripts/app.js\"></script><script>require('waypoints');\nrequire('initialize');\n\n$(document).ready(function(){\n  var wow = new WOW({\n    mobile: false,\n  });\n\n  wow.init();\n});\n</script></head><body><div class=\"Header\"><div class=\"Header-logo\"><a href=\"/\"><img src=\"images/logo-nav.svg\"></a></div><div class=\"Header-nav\"><div class=\"Header-navItem\">Products<div class=\"Header-links\"><a href=\"/products/secure-mobile-printing-for-enterprise.html\" class=\"Header-link\">Secure Mobile Printing for Enterprise</a><a href=\"/products/mobile-printing-at-partner-locations.html\" class=\"Header-link\">On-Location Printing with the Breezy Partner Network</a><a href=\"/products/email-printing-for-companies.html\" class=\"Header-link\">Email Printing</a><a href=\"/products/secure-mobile-printing-at-home.html\" class=\"Header-link\">Home and Personal Mobile Printing</a></div></div><div class=\"Header-navItem\">How it Works<div class=\"Header-links\"><a href=\"/architecture/secure-cloud-printing-architecture.html\" class=\"Header-link\">Architecture</a><a href=\"/components/apps.html\" class=\"Header-link\">Components</a><a href=\"/security.html\" class=\"Header-link\">Security</a></div></div><div class=\"Header-navItem\">Partners<div class=\"Header-links\"><a href=\"/partners/breezy-emm-partners.html\" class=\"Header-link\">Mobile Security - EMM</a><a href=\"/partners/breezy-for-developers.html\" class=\"Header-link\">Developers</a><a href=\"/partners/breezy-partner-network.html\" class=\"Header-link\">Public Printing Locations</a></div></div><div class=\"Header-navItem\">Industries<div class=\"Header-links\"><a href=\"/industries/finance.html\" class=\"Header-link\">Finance</a><a href=\"/industries/legal.html\" class=\"Header-link\">Legal and Professional Services</a><a href=\"/industries/government.html\" class=\"Header-link\">Government</a><a href=\"/industries/healthcare-and-pharma.html\" class=\"Header-link\">Healthcare and Pharma</a><a href=\"/industries/education.html\" class=\"Header-link\">Education</a><a href=\"/industries/manufacturing.html\" class=\"Header-link\">Manufacturing</a></div></div><div class=\"Header-navItem\">Resources<div class=\"Header-links\"><a href=\"/resources/datasheets.html\" class=\"Header-link\">Datasheets</a><a href=\"/resources/videos.html\" class=\"Header-link\">Videos</a><a href=\"/resources/other-resources.html\" class=\"Header-link\">Whitepapers</a><a href=\"/resources/FAQ.html\" class=\"Header-link\">FAQ</a></div></div><div class=\"Header-navItem\">About Us<div class=\"Header-links\"><a href=\"/about/about-breezy.html\" class=\"Header-link\">About Breezy</a><a href=\"/about/press.html\" class=\"Header-link\">Press</a><a href=\"/about/media-kit.html\" class=\"Header-link\">Media Kit</a><a href=\"{{site.url}}/blog\" target=\"blank\" class=\"Header-link\">Blog</a><a href=\"/about/contact.html\" class=\"Header-link\">Contact Us</a></div></div><div class=\"Header-navItem Header-relative\"><a href=\"http://support.breezy.com/\" target=\"blank\"></a>Support</div><div class=\"Header-navItem\"><div class=\"Header-button\"><a href=\"http://landing.breezy.com/request_a_breezy_demo?ref=navbutton\" target=\"blank\"></a>Request a Demo</div></div></div><div class=\"Header-burger\"><div class=\"Header-burgerLine\"></div><div class=\"Header-burgerLine\"></div><div class=\"Header-burgerLine\"></div></div></div><div class=\"HeaderSection\"><div class=\"HeaderSection-background\"></div><div class=\"container\"><div data-wow-delay=\"0.8s\" class=\"HeaderSection-logo wow fadeIn\"></div><div data-wow-delay=\"1.4s\" class=\"HeaderSection-slogan wow fadeInUp\">Reinventing printing<br>for the 21st century</div><div data-wow-delay=\"2s\" class=\"HeaderSection-buttons wow fadeInUp\"><div class=\"HeaderSection-buttonsItem\"><a href=\"https://itunes.apple.com/us/app/breezy-2/id943573373?mt=8\" target=\"_blank\"></a><div class=\"HeaderSection-buttonsIcon\"><img src=\"images/apple.svg\"></div><div class=\"HeaderSection-buttonsText\"><div class=\"HeaderSection-buttonsTextTitle\">Download for</div><div class=\"HeaderSection-buttonsTextSubtitle\">Apple iOS</div></div></div><div class=\"HeaderSection-buttonsItem\"><a href=\"https://play.google.com/store/apps/details?id=com.breezy.print\" target=\"_blank\"></a><div class=\"HeaderSection-buttonsIcon\"><img src=\"images/android.svg\"></div><div class=\"HeaderSection-buttonsText\"><div class=\"HeaderSection-buttonsTextTitle\">Download for</div><div class=\"HeaderSection-buttonsTextSubtitle\">Android</div></div></div></div></div></div><div class=\"WhySection\"><div class=\"container\"><div class=\"WhySection-title\">WHY BREEZY?</div><div class=\"WhySection-hr\"></div><div class=\"WhySection-text\">With a history of innovation, Breezy is the most sophisticated print platform in the world. Here are a few reasons why.</div><div class=\"WhySection-list WhySection-left\"><div class=\"WhySection-listItem wow fadeInLeft\"><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">INDUSTRY LEADERSHIP</div><div class=\"WhySection-listTextDescription\">From Gartner to BLI, Breezy has repeatedly earned analyst recognition for innovation.</div></div><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-trophy\"></div></div></div><div class=\"WhySection-listItem wow fadeInLeft\"><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">SECURITY</div><div class=\"WhySection-listTextDescription\">Breezy pioneered on-device encryption and integrates with all leading EMM providers.</div><div class=\"WhySection-listTextDescription\">Robust audit trails and reporting features come standard.</div></div><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-lock\"></div></div></div><div class=\"WhySection-listItem wow fadeInLeft\"><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">FLEXIBILITY</div><div class=\"WhySection-listTextDescription\">Breezy supports every printer ever made, from every vendor under the sun. Mixed fleets are no problem.</div></div><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-printer\"></div></div></div></div><div class=\"WhySection-iphone\"><img src=\"images/iphone.png\"><video autoplay loop class=\"WhySection-gif\"><source src=\"video/iphone-gif.webm\" type=\"video/webm\"><source src=\"video/iphone-gif.mov\" type=\"video/mov\"></video></div><div class=\"WhySection-list WhySection-right\"><div class=\"WhySection-listItem wow fadeInRight\"><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-magic-wand\"></div></div><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">BREEZY IS EASY.</div><div class=\"WhySection-listTextDescription\">Over a quarter million people have Breezy accounts, and most have never needed support. Administration is just as easy.</div></div></div><div class=\"WhySection-listItem wow fadeInRight\"><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-energy\"></div></div><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">BREEZY IS FAST!</div><div class=\"WhySection-listTextDescription\">SSO for one-touch setup. Integrated print button for two-tap printing. Fast, accurate rendering.</div><div class=\"WhySection-listTextDescription\">With millions of API requests per week, we handle most in under 30ms.</div></div></div><div class=\"WhySection-listItem wow fadeInRight\"><div class=\"WhySection-listImage\"><div class=\"WhySection-icon icon-heart\"></div></div><div class=\"WhySection-listText\"><div class=\"WhySection-listTextTitle\">BREEZY IS POWERFUL.</div><div class=\"WhySection-listTextDescription\">Native print support for all vendors, customizeable routing for global deployments, and much more.</div></div></div></div></div></div><div class=\"SolutionsSection\"><div class=\"container\"><div class=\"SolutionsSection-title\">BREEZY SOLUTIONS</div><div class=\"SolutionsSection-hr\"></div><div class=\"SolutionsSection-list\"><div class=\"SolutionsSection-listItem\"><div class=\"SolutionsSection-listIcon icon-printer\"></div><div class=\"SolutionsSection-listTitle\">ENTERPRISE MOBILE PRINTING</div><div class=\"SolutionsSection-listText\">Choose from Cloud, Hybrid or On-Premise options to enable secure mobile printing across your entire organization.</div><div class=\"SolutionsSection-listButton\"><a href=\"products/secure-mobile-printing-for-enterprise.html\"></a>Discover Mobile Printing</div></div><div class=\"SolutionsSection-listItem\"><div class=\"SolutionsSection-listIcon icon-cloud-upload\"></div><div class=\"SolutionsSection-listTitle\">DRIVERLESS PRINTING</div><div class=\"SolutionsSection-listText\">Breezy's patented Universal Queue solution offers a complete replacement for legacy printer drivers. Print to any printer, from any device, without installing another driver ever again. </div><div class=\"SolutionsSection-listButton\"><a href=\"http://landing.breezy.com/universal-queue.html\"></a>Secure Your Printing</div></div><div class=\"SolutionsSection-listItem\"><div class=\"SolutionsSection-listIcon icon-settings\"></div><div class=\"SolutionsSection-listTitle\">THE BREEZY SDK</div><div class=\"SolutionsSection-listText\">Building your own mobile apps? Breezy can help, with a drop-in SDK that lets you add a native \"print\" button to any app in minutes.</div><div class=\"SolutionsSection-listButton\"><a href=\"partners/breezy-for-developers.html\"></a>Print from Any App</div></div><div class=\"SolutionsSection-listItem\"><div class=\"SolutionsSection-listIcon icon-map\"></div><div class=\"SolutionsSection-listTitle\">THE BREEZY PARTNER NETWORK</div><div class=\"SolutionsSection-listText\">Breezy has partnered with FedEx Office and others to create a GPS-powered local printing network with thousands of locations across North America.</div><div class=\"SolutionsSection-listButton\"><a href=\"products/mobile-printing-at-partner-locations.html\"></a>See Public Printing Locations</div></div><div class=\"SolutionsSection-listItem\"><div class=\"SolutionsSection-listIcon icon-home\"></div><div class=\"SolutionsSection-listTitle\">HOME AND PERSONAL PRINTING</div><div class=\"SolutionsSection-listText\">Breezy's unique infrastructure enables mobile printing, print security and an audit trail even when your users are working from home.</div><div class=\"SolutionsSection-listButton\"><a href=\"products/secure-mobile-printing-at-home.html\"></a>Learn more</div></div></div></div></div><div class=\"CustomersSection\"><div class=\"container\"><div class=\"CustomersSection-title\">THE WORLD'S BEST COMPANIES CHOOSE BREEZY.</div><div class=\"CustomersSection-subtitle\">From large to small, serious enterprises around the world trust us with their printing. </div><div class=\"CustomersSection-logos\"><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/firstdata.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/ageas.jpg\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/dbs.jpg\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/lilly.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/kp.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/purdue.jpg\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/dlapiper.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/paulweiss.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/wsgr.jpg\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/nemak.png\"></div><div class=\"CustomersSection-logosItem\"><img src=\"images/customers/bluecare.png\"></div></div><div class=\"CustomersSection-button buttonControl wow fadeInUp\"><a href=\"resources/other-resources.html\"></a>More Customer Stories</div></div></div><div class=\"PartnersSection\"><div class=\"container\"><div class=\"PartnersSection-title\">OUR PARTNERS</div><div class=\"PartnersSection-hr\"></div><div class=\"PartnersSection-text\">Breezy has deep relationships across the EMM industry and has partnered with implementation experts around the globe<br>to bring you secure, on-demand printing whenever and wherever you need.</div><div class=\"PartnersSection-image\"><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/citrix.png\"></div><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/good.png\"></div><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/imgres.png\"></div><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/mobileron.png\"></div><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/mobliciti.png\"></div><div class=\"PartnersSection-imageItem\"><img src=\"images/partners/nomasis.png\"></div></div><div class=\"PartnersSection-button buttonControl wow fadeInUp\"><a href=\"partners/breezy-emm-partners.html\"></a>More About Our Partners</div></div></div><div class=\"Footer\"><div class=\"container\"><div class=\"Footer-list\"><div class=\"Footer-listItem\"><div class=\"Footer-listTitle\">Learn More</div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/security.html\">Breezy Security</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/architecture/secure-cloud-printing-architecture.html\">Secure Cloud Printing</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/architecture/on-premise-mobile-printing-for-enterprise.html\">On-Premise Deployments</a></div><div class=\"Footer-listLink\"><a href=\"http://landing.breezy.com/Secure_Easy_Printing_with_AirWatch\">Secure Printing for AirWatch</a></div><div class=\"Footer-listLink\"><a href=\"http://landing.breezy.com/Printing_with_Good_Dynamics_Technology\">Secure Printing for Good Technology</a></div><div class=\"Footer-listLink\"><a href=\"http://landing.breezy.com/Printing_with_MobileIron_AppConnect\">Secure Printing for MobileIron</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/products/email-printing-for-companies.html\">Email Printing</a></div></div><div class=\"Footer-listItem\"><div class=\"Footer-listTitle\">Industries</div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/finance.html\">Banking and Finance</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/legal.html\">Legal &amp; Professional Services</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/government.html\">Government</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/healthcare-and-pharma.html\">Healthcare and Pharma</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/education.html\">Education</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/industries/manufacturing.html\">Manufacturing</a></div></div><div class=\"Footer-listItem\"><div class=\"Footer-listTitle\">Resources</div><div class=\"Footer-listLink\"><a href=\"http://landing.breezy.com/definitive-guide-to-mobile-printing\" target=\"new\">Definitive Guide to Mobile Printing</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/resources/datasheets.html\">Datasheets</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/resources/other-resources.html\">Whitepapers</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/resources/videos.html\">Videos</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/resources/FAQ.html\">FAQ</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/partners/breezy-for-developers.html\">For Developers</a></div></div><div class=\"Footer-listItem\"><div class=\"Footer-listTitle\">Contact & Info</div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/about/about-breezy.html\">About Us</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/blog/\">Blog</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/about/press.html\">Press</a></div><div class=\"Footer-listLink\"><a href=\"https://support.breezy.com\">Support</a></div><div class=\"Footer-listLink\"><a href=\"http://www.breezy.com/about/contact.html\">Contact Us</a></div></div></div><div class=\"Footer-hr\"></div><div class=\"Footer-socials\"><div class=\"Footer-social\"><a href=\"https://twitter.com/breezy\" target=\"_blank\"><img src=\"images/socials/twitter.svg\"></a></div><div class=\"Footer-social\"><a href=\"https://www.youtube.com/channel/UCGMsUhpoE049tcayCHWCFEA\" target=\"_blank\"><img src=\"images/socials/youtube.svg\"></a></div><div class=\"Footer-social\"><a href=\"https://www.linkedin.com/company/breezy_com\" target=\"_blank\"><img src=\"images/socials/linkedin.svg\"></a></div></div><div class=\"Footer-logo\"><a href=\"/\"><img src=\"images/logo-big.svg\"></a></div><div class=\"Footer-copyright\">&copy; 2015 BreezyPrint Corporation. All rights reserved.<br>Certain aspects of Breezy's products protected by US Patent No. 9,019,535 and other pending patents.</div></div></div></body>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("initialize", function(exports, require, module) {
$(document).ready(function() {
  var checkHasWaypoint, header, options;
  $('.HeaderSection').vide({
    mp4: 'video/video_bg.mp4',
    webm: 'video/video_bg.webm',
    ogv: 'video/video_bg.ogv',
    poster: 'video/video_bg.jpg'
  });
  $('.CustomersSection-slider').slick({
    arrows: false,
    fade: true,
    dots: false
  });
  options = {
    offset: '.WhySection'
  };
  header = new Headhesive('.Header', options);
  checkHasWaypoint = function(element, has) {
    if ($(".Header-" + element).hasClass("Header-" + has)) {
      return $(".Header-" + element).removeClass("Header-" + has);
    }
  };
  $('.Header-burger').click(function() {
    $('.Header-burger').toggleClass('Header-burgerActive');
    return $('.Header-nav').toggleClass('Header-navActive');
  });
  return $('.Header-navItem').click(function() {
    checkHasWaypoint('links', 'linksActive');
    return $(this).find('.Header-links').toggleClass('Header-linksActive');
  });
});
});

;require.register("waypoints", function(exports, require, module) {

/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  slice = [].slice;

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define('waypoints', ['jquery'], function($) {
      return factory($, root);
    });
  } else {
    return factory(root.jQuery, root);
  }
})(this, function($, window) {
  var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;
  $w = $(window);
  isTouch = indexOf.call(window, 'ontouchstart') >= 0;
  allWaypoints = {
    horizontal: {},
    vertical: {}
  };
  contextCounter = 1;
  contexts = {};
  contextKey = 'waypoints-context-id';
  resizeEvent = 'resize.waypoints';
  scrollEvent = 'scroll.waypoints';
  waypointCounter = 1;
  waypointKey = 'waypoints-waypoint-ids';
  wp = 'waypoint';
  wps = 'waypoints';
  Context = (function() {
    function Context($element) {
      var element, supplier, x, y;
      element = $element[0];
      element.scrollSuppliers = [
        {
          obj: element,
          x: 'scrollLeft',
          y: 'scrollTop'
        }, {
          obj: element,
          x: 'scrollX',
          y: 'scrollY'
        }, {
          obj: document.body,
          x: 'scrollLeft',
          y: 'scrollTop'
        }, {
          obj: document.documentElement,
          x: 'scrollLeft',
          y: 'scrollTop'
        }, {
          obj: window,
          x: 'pageXOffset',
          y: 'pageYOffset'
        }, {
          obj: document.body.parentElement || {},
          x: 'scrollLeft',
          y: 'scrollTop'
        }
      ];
      element.scrollSupplier = null;
      element.scrollSupplierGet = function() {
        var i, j, len, ref, s;
        ref = element.scrollSuppliers;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          s = ref[i];
          if (s.obj[s.x] || s.obj[s.y]) {
            return (element.scrollSupplier = s);
          }
        }
        return null;
      };
      if (supplier = element.scrollSupplierGet()) {
        x = supplier.obj[supplier.x];
        y = supplier.obj[supplier.y];
      } else {
        x = $element.scrollLeft();
        y = $element.scrollTop();
      }
      this.$element = $element;
      this.element = $element[0];
      this.didResize = false;
      this.didScroll = false;
      this.id = 'context' + contextCounter++;
      this.oldScroll = {
        x: x,
        y: y
      };
      this.waypoints = {
        horizontal: {},
        vertical: {}
      };
      $element.data(contextKey, this.id);
      contexts[this.id] = this;
      $element.bind(scrollEvent, (function(_this) {
        return function() {
          var scrollHandler;
          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        };
      })(this));
      $element.bind(resizeEvent, (function(_this) {
        return function() {
          var resizeHandler;
          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        };
      })(this));
    }

    Context.prototype.doScroll = function() {
      var axes, supplier, x, y;
      if (!(supplier = this.element.scrollSupplier)) {
        if (supplier = this.element.scrollSupplierGet()) {
          x = supplier.obj[supplier.x];
          y = supplier.obj[supplier.y];
        } else {
          x = this.$element.scrollLeft();
          y = this.$element.scrollTop();
        }
      } else {
        x = supplier.obj[supplier.x];
        y = supplier.obj[supplier.y];
      }
      axes = {
        horizontal: {
          newScroll: x,
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left'
        },
        vertical: {
          newScroll: y,
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up'
        }
      };
      if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
        $[wps]('refresh');
      }
      $.each(axes, (function(_this) {
        return function(aKey, axis) {
          var direction, isForward, triggered;
          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var ref, ref1;
            if ((axis.oldScroll < (ref = waypoint.offset) && ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (ref1 = waypoint.offset) && ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        };
      })(this));
      return this.oldScroll = {
        x: axes.horizontal.newScroll,
        y: axes.vertical.newScroll
      };
    };

    Context.prototype.refresh = function() {
      var axes, cOffset, isWin;
      isWin = $.isWindow(this.element);
      cOffset = this.$element.offset();
      this.doScroll();
      axes = {
        horizontal: {
          contextOffset: isWin ? 0 : cOffset.left,
          contextScroll: isWin ? 0 : this.oldScroll.x,
          contextDimension: this.$element.width(),
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left',
          offsetProp: 'left'
        },
        vertical: {
          contextOffset: isWin ? 0 : cOffset.top,
          contextScroll: isWin ? 0 : this.oldScroll.y,
          contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up',
          offsetProp: 'top'
        }
      };
      return $.each(axes, (function(_this) {
        return function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, ref, ref1;
            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (ref = axis.oldScroll) && ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (ref1 = axis.oldScroll) && ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        };
      })(this));
    };

    Context.prototype.checkEmpty = function() {
      if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
        this.$element.unbind([resizeEvent, scrollEvent].join(' '));
        return delete contexts[this.id];
      }
    };

    return Context;

  })();
  Waypoint = (function() {
    function Waypoint($element, context, options) {
      var idList, ref;
      options = $.extend({}, $.fn[wp].defaults, options);
      if (options.offset === 'bottom-in-view') {
        options.offset = function() {
          var contextHeight;
          contextHeight = $[wps]('viewportHeight');
          if (!$.isWindow(context.element)) {
            contextHeight = context.$element.height();
          }
          return contextHeight - $(this).outerHeight();
        };
      }
      this.$element = $element;
      this.element = $element[0];
      this.axis = options.horizontal ? 'horizontal' : 'vertical';
      this.callback = options.handler;
      this.context = context;
      this.enabled = options.enabled;
      this.id = 'waypoints' + waypointCounter++;
      this.offset = null;
      this.options = options;
      context.waypoints[this.axis][this.id] = this;
      allWaypoints[this.axis][this.id] = this;
      idList = (ref = $element.data(waypointKey)) != null ? ref : [];
      idList.push(this.id);
      $element.data(waypointKey, idList);
    }

    Waypoint.prototype.trigger = function(args) {
      if (!this.enabled) {
        return;
      }
      if (this.callback != null) {
        this.callback.apply(this.element, args);
      }
      if (this.options.triggerOnce) {
        return this.destroy();
      }
    };

    Waypoint.prototype.disable = function() {
      return this.enabled = false;
    };

    Waypoint.prototype.enable = function() {
      this.context.refresh();
      return this.enabled = true;
    };

    Waypoint.prototype.destroy = function() {
      delete allWaypoints[this.axis][this.id];
      delete this.context.waypoints[this.axis][this.id];
      return this.context.checkEmpty();
    };

    Waypoint.getWaypointsByElement = function(element) {
      var all, ids;
      ids = $(element).data(waypointKey);
      if (!ids) {
        return [];
      }
      all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
      return $.map(ids, function(id) {
        return all[id];
      });
    };

    return Waypoint;

  })();
  methods = {
    init: function(f, options) {
      if (options == null) {
        options = {};
      }
      if (options.handler == null) {
        options.handler = f;
      }
      this.each(function() {
        var $this, context, contextElement, ref;
        $this = $(this);
        contextElement = (ref = options.context) != null ? ref : $.fn[wp].defaults.context;
        if (!$.isWindow(contextElement)) {
          contextElement = $this.closest(contextElement);
        }
        contextElement = $(contextElement);
        context = contexts[contextElement.data(contextKey)];
        if (!context) {
          context = new Context(contextElement);
        }
        return new Waypoint($this, context, options);
      });
      $[wps]('refresh');
      return this;
    },
    disable: function() {
      return methods._invoke(this, 'disable');
    },
    enable: function() {
      return methods._invoke(this, 'enable');
    },
    destroy: function() {
      return methods._invoke(this, 'destroy');
    },
    prev: function(axis, selector) {
      return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
        if (index > 0) {
          return stack.push(waypoints[index - 1]);
        }
      });
    },
    next: function(axis, selector) {
      return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
        if (index < waypoints.length - 1) {
          return stack.push(waypoints[index + 1]);
        }
      });
    },
    _traverse: function(axis, selector, push) {
      var stack, waypoints;
      if (axis == null) {
        axis = 'vertical';
      }
      if (selector == null) {
        selector = window;
      }
      waypoints = jQMethods.aggregate(selector);
      stack = [];
      this.each(function() {
        var index;
        index = $.inArray(this, waypoints[axis]);
        return push(stack, index, waypoints[axis]);
      });
      return this.pushStack(stack);
    },
    _invoke: function($elements, method) {
      $elements.each(function() {
        var waypoints;
        waypoints = Waypoint.getWaypointsByElement(this);
        return $.each(waypoints, function(i, waypoint) {
          waypoint[method]();
          return true;
        });
      });
      return this;
    }
  };
  $.fn[wp] = function() {
    var args, method;
    method = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (methods[method]) {
      return methods[method].apply(this, args);
    } else if ($.isFunction(method)) {
      return methods.init.apply(this, arguments);
    } else if ($.isPlainObject(method)) {
      return methods.init.apply(this, [null, method]);
    } else if (!method) {
      return $.error("jQuery Waypoints needs a callback function or handler option.");
    } else {
      return $.error("The " + method + " method does not exist in jQuery Waypoints.");
    }
  };
  $.fn[wp].defaults = {
    context: window,
    continuous: true,
    enabled: true,
    horizontal: false,
    offset: 0,
    triggerOnce: false
  };
  jQMethods = {
    refresh: function() {
      return $.each(contexts, function(i, context) {
        return context.refresh();
      });
    },
    viewportHeight: function() {
      var ref;
      return (ref = window.innerHeight) != null ? ref : $w.height();
    },
    aggregate: function(contextSelector) {
      var collection, ref, waypoints;
      collection = allWaypoints;
      if (contextSelector) {
        collection = (ref = contexts[$(contextSelector).data(contextKey)]) != null ? ref.waypoints : void 0;
      }
      if (!collection) {
        return [];
      }
      waypoints = {
        horizontal: [],
        vertical: []
      };
      $.each(waypoints, function(axis, arr) {
        $.each(collection[axis], function(key, waypoint) {
          return arr.push(waypoint);
        });
        arr.sort(function(a, b) {
          return a.offset - b.offset;
        });
        waypoints[axis] = $.map(arr, function(waypoint) {
          return waypoint.element;
        });
        return waypoints[axis] = $.unique(waypoints[axis]);
      });
      return waypoints;
    },
    above: function(contextSelector) {
      if (contextSelector == null) {
        contextSelector = window;
      }
      return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
        return waypoint.offset <= context.oldScroll.y;
      });
    },
    below: function(contextSelector) {
      if (contextSelector == null) {
        contextSelector = window;
      }
      return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
        return waypoint.offset > context.oldScroll.y;
      });
    },
    left: function(contextSelector) {
      if (contextSelector == null) {
        contextSelector = window;
      }
      return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
        return waypoint.offset <= context.oldScroll.x;
      });
    },
    right: function(contextSelector) {
      if (contextSelector == null) {
        contextSelector = window;
      }
      return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
        return waypoint.offset > context.oldScroll.x;
      });
    },
    enable: function() {
      return jQMethods._invoke('enable');
    },
    disable: function() {
      return jQMethods._invoke('disable');
    },
    destroy: function() {
      return jQMethods._invoke('destroy');
    },
    extendFn: function(methodName, f) {
      return methods[methodName] = f;
    },
    _invoke: function(method) {
      var waypoints;
      waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
      return $.each(waypoints, function(key, waypoint) {
        waypoint[method]();
        return true;
      });
    },
    _filter: function(selector, axis, test) {
      var context, waypoints;
      context = contexts[$(selector).data(contextKey)];
      if (!context) {
        return [];
      }
      waypoints = [];
      $.each(context.waypoints[axis], function(i, waypoint) {
        if (test(context, waypoint)) {
          return waypoints.push(waypoint);
        }
      });
      waypoints.sort(function(a, b) {
        return a.offset - b.offset;
      });
      return $.map(waypoints, function(waypoint) {
        return waypoint.element;
      });
    }
  };
  $[wps] = function() {
    var args, method;
    method = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    if (jQMethods[method]) {
      return jQMethods[method].apply(null, args);
    } else {
      return jQMethods.aggregate.call(null, method);
    }
  };
  $[wps].settings = {
    resizeThrottle: 100,
    scrollThrottle: 30
  };
  return $w.load(function() {
    return $[wps]('refresh');
  });
});
});

;
//# sourceMappingURL=app.js.map