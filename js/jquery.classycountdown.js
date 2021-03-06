!function(o) {
    o.fn.ClassyCountdown=function(e) {
        function t() {
            c.append('<div class="ClassyCountdown-wrapper"><div class="ClassyCountdown-days"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-hours"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-minutes"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-seconds"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div></div>'),
            c.find(".ClassyCountdown-days input").knob(o.extend( {
                width: "100%", displayInput: !1, readOnly: !0, max: 365
            }
            , h.style.days.gauge)),
            c.find(".ClassyCountdown-hours input").knob(o.extend( {
                width: "100%", displayInput: !1, readOnly: !0, max: 24
            }
            , h.style.hours.gauge)),
            c.find(".ClassyCountdown-minutes input").knob(o.extend( {
                width: "100%", displayInput: !1, readOnly: !0, max: 60
            }
            , h.style.minutes.gauge)),
            c.find(".ClassyCountdown-seconds input").knob(o.extend( {
                width: "100%", displayInput: !1, readOnly: !0, max: 60
            }
            , h.style.seconds.gauge)),
            c.find(".ClassyCountdown-wrapper > div").attr("style", h.style.element),
            c.find(".ClassyCountdown-days .ClassyCountdown-value").attr("style", h.style.days.textCSS),
            c.find(".ClassyCountdown-hours .ClassyCountdown-value").attr("style", h.style.hours.textCSS),
            c.find(".ClassyCountdown-minutes .ClassyCountdown-value").attr("style", h.style.minutes.textCSS),
            c.find(".ClassyCountdown-seconds .ClassyCountdown-value").attr("style", h.style.seconds.textCSS),
            c.find(".ClassyCountdown-value").each(function() {
                o(this).css("margin-top", Math.floor(0-parseInt(o(this).height())/2)+"px")
            }
            ),
            h.labels&&(c.find(".ClassyCountdown-days .ClassyCountdown-value > span").html(h.labelsOptions.lang.days), c.find(".ClassyCountdown-hours .ClassyCountdown-value > span").html(h.labelsOptions.lang.hours), c.find(".ClassyCountdown-minutes .ClassyCountdown-value > span").html(h.labelsOptions.lang.minutes), c.find(".ClassyCountdown-seconds .ClassyCountdown-value > span").html(h.labelsOptions.lang.seconds), c.find(".ClassyCountdown-value > span").attr("style", h.labelsOptions.style)),
            u=h.end-h.now,
            n()
        }
        function n() {
            g=Math.floor(u/86400),
            i=Math.floor(u%86400/3600),
            r=Math.floor(u%86400%3600/60),
            C=Math.floor(u%86400%3600%60%60)
        }
        function s() {
            u--,
            n(),
            0>=u&&(d||(d=!0, h.onEndCallback()), g=0, i=0, r=0, C=0),
            c.find(".ClassyCountdown-days input").val(365-g).trigger("change"),
            c.find(".ClassyCountdown-hours input").val(24-i).trigger("change"),
            c.find(".ClassyCountdown-minutes input").val(60-r).trigger("change"),
            c.find(".ClassyCountdown-seconds input").val(60-C).trigger("change"),
            c.find(".ClassyCountdown-days .ClassyCountdown-value > div").html(g),
            c.find(".ClassyCountdown-hours .ClassyCountdown-value > div").html(i),
            c.find(".ClassyCountdown-minutes .ClassyCountdown-value > div").html(r),
            c.find(".ClassyCountdown-seconds .ClassyCountdown-value > div").html(C)
        }
        function a() {
            c.find(".ClassyCountdown-wrapper > div").each(function() {
                o(this).css("height", o(this).width()+"px")
            }
            ),
            h.style.textResponsive&&(c.find(".ClassyCountdown-value").css("font-size", Math.floor(c.find("> div").eq(0).width()*h.style.textResponsive/10)+"px"), c.find(".ClassyCountdown-value").each(function() {
                o(this).css("margin-top", Math.floor(0-parseInt(o(this).height())/2)+"px")
            }
            )),
            o(window).trigger("resize"),
            o(window).resize(o.throttle(50, l))
        }
        function l() {
            c.find(".ClassyCountdown-wrapper > div").each(function() {
                o(this).css("height", o(this).width()+"px")
            }
            ),
            h.style.textResponsive&&c.find(".ClassyCountdown-value").css("font-size", Math.floor(c.find("> div").eq(0).width()*h.style.textResponsive/10)+"px"),
            c.find(".ClassyCountdown-value").each(function() {
                o(this).css("margin-top", Math.floor(0-parseInt(o(this).height())/2)+"px")
            }
            ),
            c.find(".ClassyCountdown-days input").trigger("change"),
            c.find(".ClassyCountdown-hours input").trigger("change"),
            c.find(".ClassyCountdown-minutes input").trigger("change"),
            c.find(".ClassyCountdown-seconds input").trigger("change")
        }
        function f(o) {
            switch(o) {
                case"flat-colors":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#1abc9c"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#2980b9"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#8e44ad"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#f39c12"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"flat-colors-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#1abc9c"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#2980b9"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#8e44ad"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#f39c12"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"flat-colors-very-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .12, bgColor: "rgba(0,0,0,0.05)", fgColor: "#1abc9c"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .12, bgColor: "rgba(0,0,0,0.05)", fgColor: "#2980b9"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .12, bgColor: "rgba(0,0,0,0.05)", fgColor: "#8e44ad"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .12, bgColor: "rgba(0,0,0,0.05)", fgColor: "#f39c12"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"flat-colors-black":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#1abc9c", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#2980b9", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#8e44ad", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#f39c12", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"black":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .01, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"red":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .05, bgColor: "#07421A", fgColor: "#07421A"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .05, bgColor: "#fcc1c1", fgColor: "#f64747"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .05, bgColor: "#fcc1c1", fgColor: "#f64747"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .05, bgColor: "#fcc1c1", fgColor: "#f64747"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"black-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"black-very-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .17, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .17, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .17, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .17, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"black-black":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(0,0,0,0.05)", fgColor: "#222", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#34495e;"
                        }
                    }
                }
                ;
                case"white":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .03, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                    }
                }
                ;
                case"white-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .06, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .06, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .06, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .06, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                    }
                }
                ;
                case"white-very-wide":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .16, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .16, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .16, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .16, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                    }
                }
                ;
                case"white-black":return {
                    labels:!0,
                    style: {
                        element:"",
                        textResponsive:.5,
                        days: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        hours: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        minutes: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                        ,
                        seconds: {
                            gauge: {
                                thickness: .25, bgColor: "rgba(255,255,255,0.05)", fgColor: "#fff", lineCap: "round"
                            }
                            ,
                            textCSS:"font-family:'Open Sans';font-weight:300;color:#fff;"
                        }
                    }
                }
            }
        }
        var g,
        i,
        r,
        C,
        u,
        c=o(this),
        d=!1,
        h= {
            end:void 0,
            now:o.now(),
            labels:!0,
            labelsOptions: {
                lang: {
                    days:"{{ site.data.messages.locales[site.locale].Days }}",
                    hours:"{{ site.data.messages.locales[site.locale].Hours }}",
                    minutes:"{{ site.data.messages.locales[site.locale].Minutes }}",
                    seconds:"{{ site.data.messages.locales[site.locale].Seconds }}"
                }
                ,
                style:"font-size: 0.5em;"
            }
            ,
            style: {
                element:"",
                labels:!1,
                textResponsive:.5,
                days: {
                    gauge: {
                        thickness: .02, bgColor: "rgba(0, 0, 0, 0)", fgColor: "rgba(0, 0, 0, 1)", lineCap: "butt"
                    }
                    ,
                    textCSS:""
                }
                ,
                hours: {
                    gauge: {
                        thickness: .02, bgColor: "rgba(0, 0, 0, 0)", fgColor: "rgba(0, 0, 0, 1)", lineCap: "butt"
                    }
                    ,
                    textCSS:""
                }
                ,
                minutes: {
                    gauge: {
                        thickness: .02, bgColor: "rgba(0, 0, 0, 0)", fgColor: "rgba(0, 0, 0, 1)", lineCap: "butt"
                    }
                    ,
                    textCSS:""
                }
                ,
                seconds: {
                    gauge: {
                        thickness: .02, bgColor: "rgba(0, 0, 0, 0)", fgColor: "rgba(0, 0, 0, 1)", lineCap: "butt"
                    }
                    ,
                    textCSS:""
                }
            }
            ,
            onEndCallback:function() {}
        }
        ;
        e.theme&&(h=o.extend(!0, h, f(e.theme))),
        h=o.extend(!0, h, e),
        t(),
        s(),
        setInterval(s, 1e3),
        a()
    }
}

(jQuery);
