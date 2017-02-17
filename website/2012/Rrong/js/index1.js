AP.widget.slideshow = new AP.Class({
    setOptions: function(a) {
        return AP.hashExtend({
            actionPanel: D.get("J_banner_action_panel"),
            showActionPanelIndex: false,
            viewpoint: D.get("J_banner_show"),
            bannerContainer: D.query(".banner-img")[0],
            banners: "img",
            fireMethod: "mouseover",
            hasDom: false,
            duartion: 0.5,
            delay: 5000,
            activateTime: 300,
            slideMethod: "horizontal",
            defaultCurBannerIndex: 0,
            autoShow: true
        },
        a || {})
    },
    preloadImage: function(b) {
        var a = new Image();
        a.src = b;
        this._options.bannerContainer.appendChild(a);
        E.on(a, "load", 
        function() {
            this.preloadImageDone(a)
        },
        {},
        this)
    },
    preloadImageDone: function(a) {
        if (a.src == this._images[this._options.defaultCurBannerIndex].banner) {
            if (this._options.slideMethod == "horizontal") {
                this._options.bannerContainer.style.left = -this.bannerWidth * this._options.defaultCurBannerIndex + "px"
            } else {
                if (this._options.slideMethod == "vertical") {
                    this._options.bannerContainer.style.top = -this.bannerHeight * this._options.defaultCurBannerIndex + "px"
                } else {
                    if (this._options.slideMethod == "opacity") {
                        D.setStyle(this.banners[this._options.defaultCurBannerIndex], "zIndex", "1")
                    } else {}
                }
            }
            this.autoSlideShow()
        }
    },
    initialize: function(a, b) {
        this._options = this.setOptions(a);
        this.autoShow = this._options.autoShow;
        this.bannerWidth = this._options.viewpoint.offsetWidth;
        this.bannerHeight = this._options.viewpoint.offsetHeight;
        this.curBannerIndex = this._options.defaultCurBannerIndex;
        if (this._options.hasDom) {
            this.banners = D.query(this._options.banners, this._options.bannerContainer);
            this.autoSlideShow()
        } else {
            this._images = b;
            this._options.defaultCurBannerIndex = this._options.defaultCurBannerIndex > this._images.length - 1 ? 0: this._options.defaultCurBannerIndex;
            this.banners = D.query(this._options.banners, this._options.bannerContainer);
            this.initBannerContainer();
            this._images.forEach(function(c, d) {
                this.preloadImage(c.banner, d)
            },
            this)
        }
        E.on(this._options.actionPanel, "mouseover", this.mouseoverActionPanel, {},
        this);
        E.on(this._options.actionPanel, "mouseout", this.mouseoutActionPanel, {},
        this);
        this.createActionPanelLi()
    },
    initBannerContainer: function() {
        var a = ["opacity", "vertical", "horizontal"];
        if (this._options.slideMethod == "random") {
            this.slideMethod = a[Math.floor(Math.random() * a.length)]
        } else {
            this.slideMethod = this._options.slideMethod
        }
        if (this.slideMethod == "horizontal") {
            this._options.bannerContainer.style.width = this._images.length * this.bannerWidth + "px";
            this._options.bannerContainer.style.height = this.bannerHeight + "px"
        } else {
            if (this.slideMethod == "vertical") {
                this._options.bannerContainer.style.height = this._images.length * this.bannerHeight + "px";
                this._options.bannerContainer.style.width = this.bannerWidth + "px"
            } else {
                if (this.slideMethod == "opacity") {
                    this.banners.forEach(function(b, c) {
                        D.setStyle(b, "position", "absolute");
                        D.setStyle(b, "zIndex", "0")
                    });
                    this.zIndexNum = 1
                }
            }
        }
    },
    createActionPanelLi: function() {
        var c = document.createElement("ul");
        var d = this._images.length;
        for (var b = 0; b < d; b++) {
            var a = document.createElement("li");
			var e=document.createElement("img");
			e.setAttribute("src", this._images[b].icon);
			e.setAttribute("height",95);
			e.setAttribute("width",95);		
			a.appendChild(e);	
            a.title = this._images[b].title;
            if (this._options.showActionPanelIndex) {
                a.innerHTML = b + 1
            }
          if (this._images[b].icon != null) {
                a.style.backgroundImage = "url(" + this._images[b].icon + ")"
		   }
            a.setAttribute("data-index", b);
            c.appendChild(a);
            this.createActionPanelLiExtends(a, b)
        }
        this._options.actionPanel.appendChild(c);
        this.changeActionPanelLiStyle(this._options.defaultCurBannerIndex)
    },
    createActionPanelLiExtends: function(a, b) {
        E.on(a, this._options.fireMethod, 
        function(d) {
            if (this.aniTimer) {
                window.clearTimeout(this.aniTimer)
            }
            var f = parseInt(E.getTarget(d).getAttribute("data-index"));
            var c = this;
            this.aniTimer = window.setTimeout(function() {
                c.slideToBanner(f)
            },
            this._options.activateTime)
        },
        {},
        this);
        if (this._options.fireMethod == "mouseover") {
            E.on(a, "mouseover", 
            function(c) {
                this.autoShow = false
            },
            {},
            this);
            E.on(a, "mouseout", 
            function() {
                this.autoShow = this._options.autoShow;
                this.autoSlideShow()
            },
            {},
            this)
        }
    },
    changeActionPanelLiStyle: function(a) {
        D.query("li", this._options.actionPanel).forEach(function(b, c) {
            if (c == a) {
                D.addClass(b, "current")
            } else {
                D.removeClass(b, "current")
            }
        },
        this)
    },
    autoSlideShow: function() {
        if (!this.autoShow) {
            return false
        }
        if (this.aniTimer) {
            window.clearTimeout(this.aniTimer)
        }
        var a = this;
        this.aniTimer = window.setTimeout(function() {
            a.slideToBanner(a.curBannerIndex + 1)
        },
        this._options.delay)
    },
    mouseoverActionPanel: function() {},
    mouseoutActionPanel: function() {},
    slideToBanner: function(a) {
        a = (a > this._images.length - 1) ? 0: a;
        this.beforeAnimationEvent();
        this.changeActionPanelLiStyle(a);
        this.animation(this._options.bannerContainer, a);
        this.curBannerIndex = a
    },
    animation: function(d, f) {
        if (this.slideMethod == "vertical") {
            var c = new YAHOO.util.Anim(d, {
                top: {
                    to: -f * this.bannerHeight
                }
            },
            this._options.duartion, YAHOO.util.Easing.easeOut)
        } else {
            if (this.slideMethod == "horizontal") {
                if (this.curBannerIndex > f) {
                    formX = -(f + 1) * this.bannerWidth
                } else {
                    formX = -(f - 1) * this.bannerWidth
                }
                var c = new YAHOO.util.Anim(d, {
                    left: {
                        from: formX,
                        to: -f * this.bannerWidth
                    }
                },
                this._options.duartion, YAHOO.util.Easing.easeOut)
            } else {
                if (this.slideMethod == "opacity") {
                    var a = this.banners[f];
                    D.setStyle(a, "opacity", "0");
                    D.setStyle(a, "zIndex", ++this.zIndexNum);
                    var c = new YAHOO.util.Anim(a, {
                        opacity: {
                            to: 1
                        }
                    },
                    this._options.duartion, YAHOO.util.Easing.easeNone)
                } else {}
            }
        }
        c.animate();
        var b = this;
        c.onComplete.subscribe(function() {
            b.afterAnimationEvent()
        },
        b)
    },
    beforeAnimationEvent: function() {},
    afterAnimationEvent: function() {
        this.autoSlideShow();
        this.changeActionPanelLiStyle(this.curBannerIndex)
    }
});
AP.pk.pa.slideshowIndex = AP.widget.slideshow.extend({
    preloadImage: function(b, c) {
        var a = new Image();
        a.src = b;
        this.banners[c].style.backgroundImage = "url(" + a.src + ")";
        E.on(a, "load", 
        function() {
            this.preloadImageDone(a)
        },
        {},
        this)
    },
    createActionPanelLiExtends: function(a, b) {
        var c = document.createElement("div");
        D.addClass(c, this._images[b].dlClass);
        var d = document.createElement("span");
        D.addClass(d, "pointer");
        c.appendChild(d);
        a.appendChild(c);
        E.on(c, this._options.fireMethod, 
        function(g) {
            if (this.aniTimer) {
                window.clearTimeout(this.aniTimer)
            }
            var f = this;
            this.aniTimer = window.setTimeout(function() {
                f.slideToBanner(b)
            },
            this._options.activateTime)
        },
        {},
        this);
        if (this._options.fireMethod == "mouseover") {
            E.on(c, "mouseover", 
            function(f) {
                this.autoShow = false
            },
            {},
            this);
            E.on(c, "mouseout", 
            function() {
                this.autoShow = this._options.autoShow;
                this.autoSlideShow()
            },
            {},
            this)
        }
    }
}); (function() {
    var a = D.query(".pane-title li", D.get("J_pane_tab"));
    var b = D.query(".pane-content", D.get("J_pane_tab"));
    a.forEach(function(c, d) {
        E.on(c, "mouseover", 
        function() {
            a.forEach(function(f) {
                D.removeClass(f, "current")
            });
            b.forEach(function(f) {
                D.addClass(f, "fn-hide")
            });
            D.addClass(c, "current");
            D.removeClass(b[d], "fn-hide")
        })
    })
})();
try {
    var _bodyBgPosTop = 1196 - D.getRegion("J_banner_show").bottom;
    if (AP.fn.browser.msie) {
        _bodyBgPosTop = _bodyBgPosTop + 2
    }
    D.query("body.paHome")[0].style.backgroundPosition = "0 -" + _bodyBgPosTop + "px"
} catch(e) {
    log(e)
}
try {
    if (AlieditControl.installedAliedit) {
        D.addClass("J_aliedit_uninstall", "fn-hide");
        D.removeClass("J_aliedit_install", "fn-hide")
    }
} catch(e) {
    log(e)
} (function() {
    try {
        var b = [];
        function a(d) {
            b.push(d.keyCode);
            if (b.toString().indexOf("220,65,65") >= 0) {
                window.location.href = ""
            }
            if (b.toString().indexOf("220,83,68,77") >= 0) {
                window.location.href = ""
            }
            if (b.toString().indexOf("220,83,75") >= 0) {
                window.location.href = ""
            }
            if (b.toString().indexOf("220,70,75") >= 0) {
                window.location.href = ""
            }
        }
        E.on(window.document, "keydown", a)
    } catch(c) {}
})();