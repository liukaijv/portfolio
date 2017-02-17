(function() {
	var D = KISSY,
	B = D.Event,
	A = D.DOM,
	C = document;
	window.logosIsOpen = false;
	D.use("anim,event",
	function() {
		function G() {
			function J() {
				for (var M = A.query(I), L = 0; L < M.length; L++) {
					var K = M[L];
					if (A.hasClass(K, "selected")) {
						A.removeClass(K, "selected");
						A.removeClass(K, "show");
						A.get(".thumb", K);
						var N = A.get(".zoom", K);
						A.css(N, "opacity", 0);
						K = A.get(".bottomBlock", K);
						A.css(K, "left", H)
					}
				}
			}
			var I = "#J_imglist li",
			H = "-330px";
			B.on(I, "click",
			function() {
				if (!A.hasClass(this, "selected")) {
					J();
					A.get(".thumb", this);
					var K = A.get(".bottomBlock", this);
					A.get(".zoom", this);
					A.css(K, "left", "0px");
					K = D.Anim(A.get(".zoom", this), {
						opacity: 1
					},
					1, "easeNone",
					function() {});
					A.addClass(this, "selected");
					K.run()
				}
			})
		}
		function F() {
			slideDiv = D.get("#J_LogoBarSlide");
			customAnim = {};
			B.on("#J_LogoBar", "mouseenter",
			function() {
				setTimeout(function() {
					A.addClass("#J_LogoBar", "hover");
					customAnim.slideUp && customAnim.slideUp.stop();
					customAnim.slideDown = new D.Anim(slideDiv, {
						height: "48px"
					},
					0.5, "",
					function() {});
					customAnim.slideDown.run()
				},
				200)
			});
			B.on("#J_LogoBar", "mouseleave",
			function() {
				setTimeout(function() {
					customAnim.slideDown && customAnim.slideDown.stop();
					customAnim.slideUp = new D.Anim(slideDiv, {
						height: "0px"
					},
					0.5, "easeNone",
					function() {
						A.removeClass("#J_LogoBar", "hover")
					});
					customAnim.slideUp.run()
				},
				200)
			});
			B.on(".arrow", "click",
			function() {
				if (logosIsOpen) {
					customAnim.slideDown && customAnim.slideDown.stop();
					customAnim.slideUp = new D.Anim(slideDiv, {
						height: "0px"
					},
					0.5, "easeNone",
					function() {
						A.removeClass("#J_LogoBar", "hover")
					});
					customAnim.slideUp.run();
					logosIsOpen = false
				} else {
					A.addClass("#J_LogoBar", "hover");
					customAnim.slideUp && customAnim.slideUp.stop();
					customAnim.slideDown = new D.Anim(slideDiv, {
						height: "48px"
					},
					0.5, "",
					function() {});
					customAnim.slideDown.run();
					logosIsOpen = true
				}
			})
		}
		function E() {
			function H() {
				function K() {
					D.each(I,
					function(N) {
						M(N) && (new D.Anim(N, {
							opacity: "1"
						},
						2)).run()
					})
				}
				function J() {
					D.each(I,
					function(N) {
						M(N) || A.css(N, {
							opacity: "0.0"
						})
					})
				}
				function M(Q) {
					var O,
					N,
					P;
					A.scrollTop(C.body);
					O = document.body.scrollTop ? document.body.scrollTop: document.documentElement.scrollTop;
					viewPortHeight = A.viewportHeight();
					P = O + viewPortHeight;
					N = A.offset(Q).top;
					Q = N + D.one(Q).height();
					return N > O && N < P || Q > O && Q < P ? true: false
				}
				var L = [];
				L = A.query("#J_Collists li");
				var I = D.makeArray(L);
				J(I);
				B.on(window, "scroll",
				function() {
					K()
				})
			}
			window.onload = H;
			document.body.onload = function() {
				function L() {
					Q.each(M,
					function(R) {
						O(R) && (new Q.Anim(R, {
							opacity: "1",
							filter: "alpha(opacity=100)"
						},
						1, "easeOut")).run()
					})
				}
				function I() {
					Q.each(M,
					function(R) {
						O(R) || P.css(R, {
							opacity: "0.0",
							filter: "alpha(opacity=0)"
						})
					})
				}
				function O(S) {
					var U,
					T,
					R;
					P.scrollTop(J.body);
					U = document.body.scrollTop ? document.body.scrollTop: document.documentElement.scrollTop;
					viewPortHeight = P.viewportHeight();
					R = U + viewPortHeight;
					T = P.offset(S).top;
					S = T + Q.one(S).height();
					return T > U && T < R || S > U && S < R ? true: false
				}
				var N = [],
				Q = KISSY,
				P = Q.DOM,
				K = Q.Event,
				J = document;
				N = P.query("#J_Collists li");
				var M = Q.makeArray(N); (new Q.Anim(M[0], {
					opacity: "1",
					filter: "alpha(opacity=100)"
				},
				0.5)).run();
				I(M);
				P = KISSY.DOM;
				K.on(window, "scroll",
				function() {
					L()
				})
			}
		}
		G();
		F();
		E()
	})
})();