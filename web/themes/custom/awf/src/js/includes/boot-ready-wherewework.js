try {
  window.config = {
    path: {
      root: '/',
      base: '/themes/awf/',
      img: {
        base: null,
        '404': null
      }
    }
  };
  window.config.path.img.base = window.config.path.base + 'img/';
  window.config.path.img['404'] = window.config.path.img.base + '404.jpg';
    if (typeof $ == "undefined") var $ = jQuery;
    typeof $.browser == "undefined" || typeof $.browser.msie == "undefined" ? $.browser = {msie: "", version: ""} : "";
    var eOverview, eWhereWeWork, nMaxMastheadWidth = 1600;
    (function () {
        "use strict";
        $(document).ready(function () {
            var browser = navigator.userAgent;
            var browserRegex = /(Android|BlackBerry|IEMobile|Nokia|Opera M(obi|ini))/;
            var isMobile = false;
            var isiOS = false;
            if (browser.match(browserRegex)) isMobile = true;
            var iOSRegex = /(iP(hone|od))/;
            if (browser.match(iOSRegex)) {
                isiOS = true;
                isMobile = true
            }
            if (isMobile) setTimeout(function () {
                window.scrollTo(0, 1)
            }, 0);
            window.isiOS = isiOS;
            window.isMobile = isMobile;
            window.isBadIE = $("html").hasClass("lt-ie9");
            window.orient = getOrientation();



            var fnAddSprite = function (eSlider) {
                eSlider.find("a.flex-prev, a.flex-next").hide();
                eSlider.find("a.flex-prev").append($("<span/>").addClass("flex-prev sprite")).fadeIn(666);
                eSlider.find("a.flex-next").append($("<span/>").addClass("flex-next sprite")).fadeIn(666)
            };

            var winWidth = $("body").width();
            var eNav = $("nav:first");
            new $.nav(eNav, {
                outiseClickElement: "body",
                pushElements: $("section.brown-back:first"),
                bodyClasses: $("body").attr("class"),
                winWidth: winWidth,
                initTopOffset: $(window).scrollTop(),
                onStart: function (slider) {
                    fnAddSprite(slider)
                }
            });
            new $.footer($("footer"));
            eNode = $(".gotmap");
            !eNode || new $.gotmap(eNode, {});
            var aDefaultSliderOpts = {
                animation: "slide",
                slideshow: false,
                minItems: 1,
                smoothHeight: true,
                itemMargin: 1,
                maxItems: window.isMobile ? 1 : 3,
                start: function (slider) {
                    fnAddSprite(slider)
                }
            };
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-13").find(".flexslider");
            window.isMobile || (aSliderOpts.itemWidth = 135);
            window.isMobile || (aSliderOpts.itemMargin = 25);
            aSliderOpts.maxItems = window.isMobile ? 2 : 6;
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-22").find(".flexslider");
            window.isMobile || (aSliderOpts.itemWidth = 135);
            window.isMobile || (aSliderOpts.itemMargin = 25);
            aSliderOpts.start = function (eSlider) {
                fnAddSprite(eSlider);
                new $.boxlink(eSlider.find(".flex-viewport li"), {linkElement: "figure a"})
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-9").find(".flexslider");
            aSliderOpts.itemWidth = null;
            aSliderOpts.itemMargin = 0;
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-12").find(".flexslider");
            window.isMobile || (aSliderOpts.itemWidth = 190);
            window.isMobile || (aSliderOpts.itemMargin = 20);
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#partners").find(".flexslider");
            aSliderOpts.itemWidth = 160;
            aSliderOpts.itemMargin = 0;
            aSliderOpts.controlNav = false;
            aSliderOpts.maxItems = 1;
            aSliderOpts.slideshow = true;
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-19").find(".flexslider");
            if (eNode.find(".slides li").length < 4 && !window.isMobile) {
                aSliderOpts.controlNav = false;
                aSliderOpts.directionNav = false
            }
            aSliderOpts.start = function (eSlider) {
                fnAddSprite(eSlider);
                new $.boxlink(eSlider.find(".flex-viewport li"), {linkElement: "p.bottom a"})
            };
            aSliderOpts.itemMargin = window.isMobile ? 0 : 15;
            aSliderOpts.itemWidth = window.isMobile ? "100%" : 160;
            aSliderOpts.maxItems = window.isMobile ? 1 : 3;
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#module-15").find(".flexslider");
            window.isMobile || (aSliderOpts.itemWidth = 125);
            window.isMobile || (aSliderOpts.itemMargin = 25);
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            var aSliderOpts = aDefaultSliderOpts;
            var eNode = $("#twitter").find(".flexslider");
            aSliderOpts.maxItems = 1;
            aSliderOpts.animation = "fade";
            aSliderOpts.directionNav = false;
            aSliderOpts.start = function (slider) {
                fnAddSprite(slider)
            };
            eNode.flexslider(aSliderOpts);
            aSliderOpts = null;
            eOverview = $("body.projects section:first");
            !eOverview.length || new $.overview(eOverview, {});
            var eNode = $("body.wildlife-conservation.all section:first");
            !eNode.length || new $.overview(eNode, {});
            if ($("body").hasClass("history")) {
                var eNode = $("body.history").find(".twelve.columns .white-back");
                !eNode.length || new $.loadmore(eNode, {moreContent: "ul.big-purple-square > li"})
            }
            if ($("body").hasClass("staff")) {
                var eNode = $("body.staff").find(".twelve.columns .white-back");
                !eNode.length || new $.loadmore(eNode, {moreContent: ".row", showDefault: 3})
            }
            if ($("body").hasClass("technical-partner-newsletters")) {
                var eNode = $("body.technical-partner-newsletters").find(".twelve.columns .white-back");
                !eNode.length || new $.loadmore(eNode, {moreContent: ".row", showDefault: 3})
            }
            if ($("body").hasClass("resources")) {
                var eNode = $("body.resources").find(".wrapper.white-back.padded > .thirteen.columns");
                !eNode.length || new $.loadmore(eNode, {moreContent: "ul.show-more li", showDefault: 0})
            }
            if ($("body").hasClass("member-newsletters")) {
                var eNode = $("body.member-newsletters").find(".lighttan-back .twelve.columns > .wrapper.white-back");
                !eNode.length || new $.loadmore(eNode, {moreContent: ".row", showDefault: 4})
            }
            var eNode = $(".share, .spread");
            !eNode.length || new $.share(eNode, {
                bodyClasses: $("body").attr("class"),
                counterPages: ["node-type-news", "node-type-blog"]
            });
            var eNode = $(".donate-form");
            !eNode.length || new $.donate(eNode, {});
            var eNode = $("#statsbar");
            !eNode.length || new $.statsbar(eNode, {});
            var eNode = $("#module-6");
            !eNode.length || new $.quickfacts(eNode, {});
            var eNode = $("#module-10");
            !eNode.length || new $.gallery(eNode, {
                trigger: ".slides img", fnAddSprite: function (slider) {
                    fnAddSprite(slider)
                }
            });
            eWhereWeWork = $("#module-15");
            !eWhereWeWork.length || new $.wherewework(eWhereWeWork, {});
            var eNode = $("#module-26");
            !eNode.length || new $.weather(eNode, {
                sliderCallback: function (slider) {
                    fnAddSprite(slider)
                }
            });
            var eNode = $("#myawf");
            !eNode.length || new $.myawf(eNode, {bodyClasses: $("body").attr("class")});
            $(".box").hover(function () {
                $(this).addClass("hover")
            }, function () {
                $(this).removeClass("hover")
            });
            $("img[usemap]").rwdImageMaps()
        });

        function getOrientation() {
            var sOrient = $(window).height() > $(window).width() ? "portrait" : "landscape";
            window.isPortrait = sOrient == "portrait";
            return sOrient
        }

        function scrollNavPos() {
            $("nav").nav("updatePos", $(window).scrollTop())
        }

        if ($("body").hasClass("home")) window.addEventListener("touchmove", scrollNavPos, false);
        $(window).scroll(function () {
            scrollNavPos()
        });
        var sOrientation = window.orient;
        $(window).resize(function () {
            var nCurrentWidth = $("body").width();
            $("nav").nav("updateWidth", nCurrentWidth);
            window.orient = getOrientation();
            if (viewportChangeReached() && !_.isUndefined(eWhereWeWork)) eWhereWeWork.wherewework("viewportUpdate")
        });

        function checkOnMasthead(w) {
            var eMasthead = $(".hero"), sMastheadPatternId = "masthead-bg-patch";
            var eMastheadBgPatch = eMasthead.find("#" + sMastheadPatternId);
            if (w >= nMaxMastheadWidth) {
                eMastheadBgPatch.length || eMasthead.append($("<div/>").attr("id", sMastheadPatternId).css("background-image", eMasthead.css("background-image")));
                eMasthead.addClass("max-masthead-width")
            } else {
                eMasthead.removeClass("max-masthead-width");
                eMastheadBgPatch.remove()
            }
        }

        function viewportChangeReached() {
            var w, h, o, pw;
            pw = 1023;
            w = $(window).width();
            h = $(window).height();
            o = sOrientation;
            if (w <= pw) sOrientation = "portrait"; else sOrientation = "landscape";
            window.isPortrait = sOrientation == "portrait";
            return o != sOrientation
        }
    })()
} catch (e) {
    dumpError(e)
}
