! function(a, b, c) {


    u._q.unshift(function() {
        delete D.style
    }), t.testAllProps = p, t.testAllProps = q, u.addTest("preserve3d", q("transformStyle", "preserve-3d"));
    var E = "CSS" in a && "supports" in a.CSS,
        F = "supportsCSS" in a;
    u.addTest("supports", E || F), u.addTest("cssfilters", function() {
        var d = x("div");
        if (d.style.cssText = w.join("filter:blur(2px); "), u.supports) {
            var e = "CSS" in a ? a.CSS.supports("filter", "url()") : a.supportsCSS("filter", "url()");
            return e
        }
        return !!d.style.length && (b.documentMode === c || b.documentMode > 9)
    }), e(), f(r), delete t.addTest, delete t.addAsyncTest;
    for (var G = 0; G < u._q.length; G++) u._q[G]();
    a.Modernizr = u
}(window, document), ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {

    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = ea.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ea.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ea.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb = ea.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }, ea.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
    };
    var Hb, Ib, Jb = /#.*$/,
        Kb = /([?&])_=[^&]*/,
        Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nb = /^(?:GET|HEAD)$/,
        Ob = /^\/\//,
        Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (Tb) {
        Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                o = ea.Deferred(),
                p = ea.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!k)
                                for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
            i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, j.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }), ea.each(["get", "post"], function(a, b) {
        ea[b] = function(a, c, d, e) {
            return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), ea._evalUrl = function(a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ea.fn.extend({
        wrapAll: function(a) {
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(ea.isFunction(a) ? function(b) {
                ea(this).wrapInner(a.call(this, b))
            } : function() {
                var b = ea(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ea.isFunction(a);
            return this.each(function(c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ea.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }, ea.expr.filters.visible = function(a) {
        return !ea.expr.filters.hidden(a)
    };
    var Ub = /%20/g,
        Vb = /\[\]$/,
        Wb = /\r?\n/g,
        Xb = /^(?:submit|button|image|reset|file)$/i,
        Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+")
    }, ea.fn.extend({
        serialize: function() {
            return ea.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
            }).map(function(a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Wb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Wb, "\r\n")
                }
            }).get()
        }
    }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var Zb = 0,
        $b = {},
        _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in $b) $b[a](void 0, !0)
    }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }), ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ea.globalEval(a), a
            }
        }
    }), ea.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ea.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function(d, e) {
                    b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset),
                        b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ac = [],
        bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || ea.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ea.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || oa;
        var d = la.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
    };
    var cc = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && cc) return cc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
    }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ea.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ea.expr.filters.animated = function(a) {
        return ea.grep(ea.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                l = ea(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ea.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                ea.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                return a || dc
            })
        }
    }), ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function(d) {
            return Da(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), ea.each(["top", "left"], function(a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
            return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
        })
    }), ea.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ea.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function(b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ea.fn.size = function() {
        return this.length
    }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea
    });
    var ec = a.jQuery,
        fc = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
    }, typeof b === xa && (a.jQuery = a.$ = ea), ea
}),
    function(a, b) {
        "use strict";
        var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!c.TweenLite) {
            var d, e, f, g, h, i = function(a) {
                    var b, d = a.split("."),
                        e = c;
                    for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                    return e
                },
                j = i("com.greensock"),
                k = 1e-10,
                l = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                m = function() {},
                n = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                o = {},
                p = function(d, e, f, g) {
                    this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                    var h = [];
                    this.check = function(j) {
                        for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                        if (0 === r && f)
                            for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                return n
                            }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                    }, this.check(!0)
                },
                q = a._gsDefine = function(a, b, c, d) {
                    return new p(a, b, c, d)
                },
                r = j._class = function(a, b, c) {
                    return b = b || function() {}, q(a, [], function() {
                        return b
                    }, c), b
                };
            q.globals = c;
            var s = [0, 0, 1, 1],
                t = [],
                u = r("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
                }, !0),
                v = u.map = {},
                w = u.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (f = u.prototype, f._calcEnd = !1, f.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
            v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
            var x = r("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            f = x.prototype, f.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== g || h || g.wake()
            }, f.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, f.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
            };
            var y = a.requestAnimationFrame,
                z = a.cancelAnimationFrame,
                A = Date.now || function() {
                        return (new Date).getTime()
                    },
                B = A();
            for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
            r("Ticker", function(a, b) {
                var c, d, e, f, i, j = this,
                    l = A(),
                    n = b !== !1 && y,
                    o = 500,
                    p = 33,
                    q = "tick",
                    r = function(a) {
                        var b, g, h = A() - B;
                        h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
                    };
                x.call(j), j.time = j.frame = 0, j.tick = function() {
                    r(!0)
                }, j.lagSmoothing = function(a, b) {
                    o = a || 1 / k, p = Math.min(b, o, 0)
                }, j.sleep = function() {
                    null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
                }, j.wake = function() {
                    null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function(a) {
                        return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                    }, j === g && (h = !0), r(2)
                }, j.fps = function(a) {
                    return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
                }, j.useRAF = function(a) {
                    return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
                }, j.fps(a), setTimeout(function() {
                    n && 5 > j.frame && j.useRAF(!1)
                }, 1500)
            }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
            var C = r("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, R) {
                    h || g.wake();
                    var c = this.vars.useFrames ? Q : R;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var D = function() {
                h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
            };
            D(), f.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, f.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, f.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, f.seek = function(a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, f.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, f.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, f.render = function() {}, f.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, f.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, f._enabled = function(a, b) {
                return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, f._kill = function() {
                return this._enabled(!1, !1)
            }, f.kill = function(a, b) {
                return this._kill(a, b), this
            }, f._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, f._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, f._callback = function(a) {
                var b = this.vars;
                b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
            }, f.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, f.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, f.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, f.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, f.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, f.totalTime = function(a, b, c) {
                if (h || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && T())
                }
                return this
            }, f.progress = f.totalProgress = function(a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, f.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, f.endTime = function(a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }, f.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, f.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, f.paused = function(a) {
                if (!arguments.length) return this._paused;
                var b, c, d = this._timeline;
                return a != this._paused && d && (h || a || g.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && this.render(d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, !0, !0)), this._gc && !a && this._enabled(!0, !1), this
            };
            var E = r("core.SimpleTimeline", function(a) {
                C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._recent = a, this._timeline && this._uncache(!0), this
            }, f._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, f.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, f.rawTime = function() {
                return h || g.wake(), this._totalTime
            };
            var F = r("TweenLite", function(b, c, d) {
                    if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                        for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = U(f, this, !1), 1 === i && this._siblings[e].length > 1 && W(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = U(b, this, !1), 1 === i && this._siblings.length > 1 && W(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
                }, !0),
                G = function(b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                H = function(a, b) {
                    var c, d = {};
                    for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.17.0", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = 120, F.lagSmoothing = function(a, b) {
                g.lagSmoothing(a, b)
            }, F.selector = a.$ || a.jQuery || function(b) {
                    var c = a.$ || a.jQuery;
                    return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
                };
            var I = [],
                J = {},
                K = F._internals = {
                    isArray: n,
                    isSelector: G,
                    lazyTweens: I
                },
                L = F._plugins = {},
                M = K.tweenLookup = {},
                N = 0,
                O = K.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                P = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Q = C._rootFramesTimeline = new E,
                R = C._rootTimeline = new E,
                S = 30,
                T = K.lazyRender = function() {
                    var a, b = I.length;
                    for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    I.length = 0
                };
            R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(T, 1), C._updateRoot = F.render = function() {
                var a, b, c;
                if (I.length && T(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && T(), g.frame >= S) {
                    S = g.frame + (parseInt(F.autoSleep, 10) || 120);
                    for (c in M) {
                        for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete M[c]
                    }
                    if (c = R._first, (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || g.sleep()
                    }
                }
            }, g.addEventListener("tick", C._updateRoot);
            var U = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return M[f].tweens
                },
                V = function(a, b, c, d) {
                    var e, f, g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
                },
                W = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, l = b._startTime + k,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || X(b, 0, o), 0 === X(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;)
                        if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                            if (2 !== d && !V(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0)
                        }
                    return g
                },
                X = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
                };
            f._init = function() {
                var a, b, c, d, e, f = this.vars,
                    g = this._overwrittenProps,
                    h = this._duration,
                    i = !!f.immediateRender,
                    j = f.ease;
                if (f.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in f.startAt) e[d] = f.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (f.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (i = !1), c = {};
                        for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = f.onUpdate, this._initted = !0
            }, f._initProps = function(b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                J[b._gsTweenID] && T(), this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: i,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: f,
                            pg: !0,
                            pr: i._priority
                        }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && W(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
            }, f.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var l = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
                }
            }, f._kill = function(a, b, c) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
                var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                if ((n(b) || G(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if ((l || !a) && !V(this, c, b, l)) return !1
                        }
                        for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return i
            }, f.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
            }, f._enabled = function(a, b) {
                if (h || g.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = U(d[c], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, F.to = function(a, b, c) {
                return new F(a, b, c)
            }, F.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
            }, F.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
            }, F.delayedCall = function(a, b, c, d, e) {
                return new F(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, F.set = function(a, b) {
                return new F(a, 0, b)
            }, F.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : F.selector(a) || a;
                var c, d, e, f;
                if ((n(a) || G(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = U(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var Y = r("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = Y.prototype
            }, !0);
            if (f = Y.prototype, Y.version = "1.10.1", Y.API = 2, f._firstPT = null, f._addTween = function(a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - Number(c) : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                        _next: this._firstPT,
                        t: a,
                        p: b,
                        s: c,
                        c: g,
                        f: "function" == typeof a[b],
                        n: e || b,
                        r: f
                    }, h._next && (h._next._prev = h), h) : void 0
                }, f.setRatio = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, f._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, f._roundProps = function(a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, F._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, Y.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === Y.API && (L[(new a[b])._propName] = a[b]);
                    return !0
                }, q.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            Y.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new Y(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, Y.activate([g]), g
                }, d = a._gsQueue) {
                for (e = 0; d.length > e; e++) d[e]();
                for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
        var d = function(a) {
                b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var c, d, e = this.vars;
                for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
            },
            e = 1e-10,
            f = c._internals,
            g = d._internals = {},
            h = f.isSelector,
            i = f.isArray,
            j = f.lazyTweens,
            k = f.lazyRender,
            l = [],
            m = _gsScope._gsDefine.globals,
            n = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            },
            o = g.pauseCallback = function(a, b, c, d) {
                var f, g = a._timeline,
                    h = g._totalTime,
                    i = a._startTime,
                    j = 0 > a._rawPrevTime || 0 === a._rawPrevTime && g._reversed,
                    k = j ? 0 : e,
                    m = j ? e : 0;
                if (b || !this._forcingPlayhead) {
                    for (g.pause(i), f = a._prev; f && f._startTime === i;) f._rawPrevTime = m, f = f._prev;
                    for (f = a._next; f && f._startTime === i;) f._rawPrevTime = k, f = f._next;
                    b && b.apply(d || g.vars.callbackScope || g, c || l), (this._forcingPlayhead || !g._paused) && g.seek(h)
                }
            },
            p = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            q = d.prototype = new b;
        return d.version = "1.17.0", q.constructor = d, q.kill()._gc = q._forcingPlayhead = !1, q.to = function(a, b, d, e) {
            var f = d.repeat && m.TweenMax || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
        }, q.from = function(a, b, d, e) {
            return this.add((d.repeat && m.TweenMax || c).from(a, b, d), e)
        }, q.fromTo = function(a, b, d, e, f) {
            var g = e.repeat && m.TweenMax || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
            var l, m = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), l = 0; a.length > l; l++) e.startAt && (e.startAt = n(e.startAt)), m.to(a[l], b, n(e), l * f);
            return this.add(m, g)
        }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, q.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e)
        }, q.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a),
                h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
            return h.add(g, 0), g
        }, q.add = function(e, f, g, h) {
            var j, k, l, m, n, o;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array || e && e.push && i(e)) {
                    for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                        tweens: m
                    })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = c.delayedCall(0, e)
            }
            if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
            return this
        }, q.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array || b && b.push && i(b)) {
                for (var c = b.length; --c > -1;) this.remove(b[c]);
                return this
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, q._remove = function(a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, q.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, q.insert = q.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d)
        }, q.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, q.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this
        }, q.addPause = function(a, b, d, e) {
            var f = c.delayedCall(0, o, ["{self}", b, d, e], this);
            return f.data = "isPause", this.add(f, a)
        }, q.removeLabel = function(a) {
            return delete this._labels[a], this
        }, q.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, q._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || e.push && i(e)))
                for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
            else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
            }
            return Number(b) + c
        }, q.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, q.stop = function() {
            return this.paused(!0)
        }, q.gotoAndPlay = function(a, b) {
            return this.play(a, b)
        }, q.gotoAndStop = function(a, b) {
            return this.pause(a, b)
        }, q.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d, f, g, h, i, l = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._time,
                n = this._startTime,
                o = this._timeScale,
                p = this._paused;
            if (a >= l) this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = l + 1e-4;
            else if (1e-7 > a)
                if (this._totalTime = this._time = 0, (0 !== m || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                else {
                    if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                        for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                    a = 0, this._initted || (i = !0)
                } else this._totalTime = this._time = this._rawPrevTime = a;
            if (this._time !== m && this._first || c || i) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== m && a > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")), this._time >= m)
                    for (d = this._first; d && (g = d._next, !this._paused || p);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                else
                    for (d = this._last; d && (g = d._prev, !this._paused || p);)(d._active || m >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (n === this._startTime || o !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
            }
        }, q._hasPausedChild = function() {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next
            }
            return !1
        }, q.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f
        }, q.getTweensOf = function(a, b) {
            var d, e, f = this._gc,
                g = [],
                h = 0;
            for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g
        }, q.recent = function() {
            return this._recent
        }, q._contains = function(a) {
            for (var b = a.timeline; b;) {
                if (b === this) return !0;
                b = b.timeline
            }
            return !1
        }, q.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
            if (b)
                for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0)
        }, q._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
            return e
        }, q.clear = function(a) {
            var b = this.getChildren(!1, !0, !0),
                c = b.length;
            for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, q.invalidate = function() {
            for (var b = this._first; b;) b.invalidate(), b = b._next;
            return a.prototype.invalidate.call(this)
        }, q._enabled = function(a, c) {
            if (a === this._gc)
                for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c)
        }, q.totalTime = function() {
            this._forcingPlayhead = !0;
            var b = a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, b
        }, q.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, q.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
        }, q.paused = function(b) {
            if (!b)
                for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
            return a.prototype.paused.apply(this, arguments)
        }, q.usesFrames = function() {
            for (var b = this._timeline; b._timeline;) b = b._timeline;
            return b === a._rootFramesTimeline
        }, q.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = b())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
        var c, d, e, f, g = function() {
                a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
            },
            h = _gsScope._gsDefine.globals,
            i = {},
            j = g.prototype = new a("css");
        j.constructor = g, g.version = "1.17.0", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            u = /(?:\d|\-|\+|=|#|\.)*/g,
            v = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            x = /alpha\(opacity *=.+?\)/i,
            y = /^(rgb|hsl)/,
            z = /([A-Z])/g,
            A = /-([a-z])/gi,
            B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            C = function(a, b) {
                return b.toUpperCase()
            },
            D = /(?:Left|Right|Width)/i,
            E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            G = /,(?=[^\)]*(?:\(|$))/gi,
            H = Math.PI / 180,
            I = 180 / Math.PI,
            J = {},
            K = document,
            L = function(a) {
                return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
            },
            M = L("div"),
            N = L("img"),
            O = g._internals = {
                _specialProps: i
            },
            P = navigator.userAgent,
            Q = function() {
                var a = P.indexOf("Android"),
                    b = L("a");
                return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3), o = m && 6 > Number(P.substr(P.indexOf("Version/") + 8, 1)), n = -1 !== P.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
            }(),
            R = function(a) {
                return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            S = function(a) {
                window.console && void 0
            },
            T = "",
            U = "",
            V = function(a, b) {
                b = b || M;
                var c, d, e = b.style;
                if (void 0 !== e[a]) return a;
                for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                return d >= 0 ? (U = 3 === d ? "ms" : c[d], T = "-" + U.toLowerCase() + "-", U + a) : null
            },
            W = K.defaultView ? K.defaultView.getComputedStyle : function() {},
            X = g.getStyle = function(a, b, c, d, e) {
                var f;
                return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
            },
            Y = O.convertToPixels = function(a, c, d, e, f) {
                if ("px" === e || !e) return d;
                if ("auto" === e || !d) return 0;
                var h, i, j, k = D.test(c),
                    l = a,
                    m = M.style,
                    n = 0 > d;
                if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                else {
                    if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;", "%" !== e && l.appendChild) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                    else {
                        if (l = a.parentNode || K.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                        m[k ? "width" : "height"] = d + e
                    }
                    l.appendChild(M), h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(M), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = 100 * (h / d)), 0 !== h || f || (h = Y(a, c, d, e, !0))
                }
                return n ? -h : h
            },
            Z = O.calculateOffset = function(a, b, c) {
                if ("absolute" !== X(a, "position", c)) return 0;
                var d = "left" === b ? "Left" : "Top",
                    e = X(a, "margin" + d, c);
                return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
            },
            $ = function(a, b) {
                var c, d, e, f = {};
                if (b = b || W(a, null))
                    if (c = b.length)
                        for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || ya === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
                    else
                        for (c in b)(-1 === c.indexOf("Transform") || xa === c) && (f[c] = b[c]);
                else if (b = a.currentStyle || a.style)
                    for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
                return Q || (f.opacity = R(a)), d = Ka(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Aa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
            },
            _ = function(a, b, c, d, e) {
                var f, g, h, i = {},
                    j = a.style;
                for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g), void 0 !== j[g] && (h = new na(j, g, j[g], h)));
                if (d)
                    for (g in d) "className" !== g && (i[g] = d[g]);
                return {
                    difs: i,
                    firstMPT: h
                }
            },
            aa = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ca = function(a, b, c) {
                var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                    e = aa[b],
                    f = e.length;
                for (c = c || W(a, null); --f > -1;) d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
                return d
            },
            da = function(a, b) {
                (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                var c = a.split(" "),
                    d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                    e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), a = d + " " + e + (c.length > 2 ? " " + c[2] : ""), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(t, "")), b.oy = parseFloat(e.replace(t, "")), b.v = a), b || a
            },
            ea = function(a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            },
            fa = function(a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
            },
            ga = function(a, b, c, d) {
                var e, f, g, h, i, j = 1e-6;
                return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), j > h && h > -j && (h = 0), h
            },
            ha = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ia = function(a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
            },
            ja = g.parseColor = function(a) {
                var b, c, d, e, f, g;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ha[a] ? ha[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(q), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ia(e + 1 / 3, b, c), a[1] = ia(e, b, c), a[2] = ia(e - 1 / 3, b, c), a) : (a = a.match(q) || ha.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : ha.black
            },
            ka = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (j in ha) ka += "|" + j + "\\b";
        ka = RegExp(ka + ")", "gi");
        var la = function(a, b, c, d) {
                if (null == a) return function(a) {
                    return a
                };
                var e, f = b ? (a.match(ka) || [""])[0] : "",
                    g = a.split(f).join("").match(s) || [],
                    h = a.substr(0, a.indexOf(g[0])),
                    i = ")" === a.charAt(a.length - 1) ? ")" : "",
                    j = -1 !== a.indexOf(" ") ? " " : ",",
                    k = g.length,
                    l = k > 0 ? g[0].replace(q, "") : "";
                return k ? e = b ? function(a) {
                    var b, m, n, o;
                    if ("number" == typeof a) a += l;
                    else if (d && G.test(a)) {
                        for (o = a.replace(G, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                        return o.join(",")
                    }
                    if (b = (a.match(ka) || [f])[0], m = a.split(b).join("").match(s) || [], n = m.length, k > n--)
                        for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                    return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var b, f, m;
                    if ("number" == typeof a) a += l;
                    else if (d && G.test(a)) {
                        for (f = a.replace(G, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                        return f.join(",")
                    }
                    if (b = a.match(s) || [], m = b.length, k > m--)
                        for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                    return h + b.join(j) + i
                } : function(a) {
                    return a
                }
            },
            ma = function(a) {
                return a = a.split(","),
                    function(b, c, d, e, f, g, h) {
                        var i, j = (c + "").split(" ");
                        for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                        return e.parse(b, h, f, g)
                    }
            },
            na = (O._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = Math.round(b) : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                    for (h = f.firstMPT; h;) {
                        if (c = h.t, c.type) {
                            if (1 === c.type) {
                                for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                c.e = e
                            }
                        } else c.e = c.s + c.xs0;
                        h = h._next
                    }
            }, function(a, b, c, d, e) {
                this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
            }),
            oa = (O._parseToProxy = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l = d,
                    m = {},
                    n = {},
                    o = c._transform,
                    p = J;
                for (c._transform = null, J = b, d = k = c.parse(a, b, d, e), J = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                    if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new na(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                        for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new na(d, i, h, j, d.rxp[i]));
                    d = d._next
                }
                return {
                    proxy: m,
                    end: n,
                    firstMPT: j,
                    pt: k
                }
            }, O.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof oa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
            }),
            pa = function(a, b, c, d, e, f) {
                var g = new oa(a, b, c, d - c, e, -1, f);
                return g.b = c, g.e = g.xs0 = d, g
            },
            qa = g.parseComplex = function(a, b, c, d, e, f, g, h, i, j) {
                c = c || f || "", g = new oa(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d), d += "";
                var l, m, n, o, p, s, t, u, v, w, x, z, A = c.split(", ").join(",").split(" "),
                    B = d.split(", ").join(",").split(" "),
                    C = A.length,
                    D = k !== !1;
                for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G, ", ").split(" "), B = B.join(" ").replace(G, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = j, l = 0; C > l; l++)
                    if (o = A[l], p = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
                    else if (e && ("#" === o.charAt(0) || ha[o] || y.test(o))) z = "," === p.charAt(p.length - 1) ? ")," : ")", o = ja(o), p = ja(p), v = o.length + p.length > 6, v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (Q || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0).appendXtra("", o[1], p[1] - o[1], ",", !0).appendXtra("", o[2], p[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > p.length ? 1 : p[3]) - o, z, !1)));
                    else if (s = o.match(q)) {
                        if (t = p.match(r), !t || t.length !== s.length) return g;
                        for (n = 0, m = 0; s.length > m; m++) x = s[m], w = o.indexOf(x, n), g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m), n = w + x.length;
                        g["xs" + g.l] += o.substr(n)
                    } else g["xs" + g.l] += g.l ? " " + o : o;
                if (-1 !== d.indexOf("=") && g.data) {
                    for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                    g.e = z + g["xs" + l]
                }
                return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
            },
            ra = 9;
        for (j = oa.prototype, j.l = j.pr = 0; --ra > 0;) j["xn" + ra] = 0, j["xs" + ra] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
            var g = this,
                h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new oa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var sa = function(a, b) {
                b = b || {}, this.p = b.prefix ? V(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || la(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
            },
            ta = O._registerComplexSpecialProp = function(a, b, c) {
                "object" != typeof b && (b = {
                    parser: c
                });
                var d, e, f = a.split(","),
                    g = b.defaultValue;
                for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new sa(f[d], b)
            },
            ua = function(a) {
                if (!i[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    ta(a, {
                        parser: function(a, c, d, e, f, g, j) {
                            var k = h.com.greensock.plugins[b];
                            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."), f)
                        }
                    })
                }
            };
        j = sa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"), i = c.replace(G, "|").split("|")) : m && (h = [b], i = [c])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                b = h.join(", "), c = i.join(", ")
            }
            return qa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, j.parse = function(a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function(a, b, c) {
            ta(a, {
                parser: function(a, d, e, f, g, h) {
                    var i = new oa(a, e, 0, 0, g, 2, e, !1, c);
                    return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                },
                priority: c
            })
        }, g.useSVGTransformAttr = m || n;
        var va, wa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            xa = V("transform"),
            ya = T + "transform",
            za = V("transformOrigin"),
            Aa = null !== V("perspective"),
            Ba = O.Transform = function() {
                this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Aa ? g.defaultForce3D || "auto" : !1
            },
            Ca = window.SVGElement,
            Da = function(a, b, c) {
                var d, e = K.createElementNS("http://www.w3.org/2000/svg", a),
                    f = /([a-z])([A-Z])/g;
                for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                return b.appendChild(e), e
            },
            Ea = K.documentElement,
            Fa = function() {
                var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
                return K.createElementNS && !d && (a = Da("svg", Ea), b = Da("rect", a, {
                    width: 100,
                    height: 50,
                    x: 100
                }), c = b.getBoundingClientRect().width, b.style[za] = "50% 50%", b.style[xa] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Aa), Ea.removeChild(a)), d
            }(),
            Ga = function(a, b, c, d, e) {
                var f, h, i, j, k, l, m, n, o, p, q, r, s, t, u = a._gsTransform,
                    v = Ja(a, !0);
                u && (s = u.xOrigin, t = u.yOrigin), (!d || 2 > (f = d.split(" ")).length) && (m = a.getBBox(), b = da(b).split(" "), f = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * m.width : parseFloat(b[0])) + m.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * m.height : parseFloat(b[1])) + m.y]), c.xOrigin = j = parseFloat(f[0]), c.yOrigin = k = parseFloat(f[1]), d && v !== Ia && (l = v[0], m = v[1], n = v[2], o = v[3], p = v[4], q = v[5], r = l * o - m * n, h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r, i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r, j = c.xOrigin = f[0] = h, k = c.yOrigin = f[1] = i), u && (e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (h = j - s, i = k - t, u.xOffset += h * v[0] + i * v[2] - h, u.yOffset += h * v[1] + i * v[3] - i) : u.xOffset = u.yOffset = 0), a.setAttribute("data-svg-origin", f.join(" "))
            },
            Ha = function(a) {
                return !!(Ca && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
            },
            Ia = [1, 0, 0, 1, 0, 0],
            Ja = function(a, b) {
                var c, d, e, f, g, h = a._gsTransform || new Ba,
                    i = 1e5;
                if (xa ? d = X(a, ya, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, (h.svg || a.getBBox && Ha(a)) && (c && -1 !== (a.style[xa] + "").indexOf("matrix") && (d = a.style[xa], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Ia;
                for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ra = e.length; --ra > -1;) f = Number(e[ra]), e[ra] = (g = f - (f |= 0)) ? (0 | g * i + (0 > g ? -.5 : .5)) / i + f : f;
                return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
            },
            Ka = O.getTransform = function(a, c, d, f) {
                if (a._gsTransform && d && !f) return a._gsTransform;
                var h, i, j, k, l, m, n = d ? a._gsTransform || new Ba : new Ba,
                    o = 0 > n.scaleX,
                    p = 2e-5,
                    q = 1e5,
                    r = Aa ? parseFloat(X(a, za, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0,
                    s = parseFloat(g.defaultTransformPerspective) || 0;
                if (n.svg = !(!a.getBBox || !Ha(a)), n.svg && (Ga(a, X(a, za, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")), va = g.useSVGTransformAttr || Fa), h = Ja(a), h !== Ia) {
                    if (16 === h.length) {
                        var t, u, v, w, x, y = h[0],
                            z = h[1],
                            A = h[2],
                            B = h[3],
                            C = h[4],
                            D = h[5],
                            E = h[6],
                            F = h[7],
                            G = h[8],
                            H = h[9],
                            J = h[10],
                            K = h[12],
                            L = h[13],
                            M = h[14],
                            N = h[11],
                            O = Math.atan2(E, J);
                        n.zOrigin && (M = -n.zOrigin, K = G * M - h[12], L = H * M - h[13], M = J * M + n.zOrigin - h[14]), n.rotationX = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = C * w + G * x, u = D * w + H * x, v = E * w + J * x, G = C * -x + G * w, H = D * -x + H * w, J = E * -x + J * w, N = F * -x + N * w, C = t, D = u, E = v), O = Math.atan2(G, J), n.rotationY = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = y * w - G * x, u = z * w - H * x, v = A * w - J * x, H = z * x + H * w, J = A * x + J * w, N = B * x + N * w, y = t, z = u, A = v), O = Math.atan2(z, y), n.rotation = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), y = y * w + C * x, u = z * w + D * x, D = z * -x + D * w, E = A * -x + E * w, z = u), n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0, n.rotationY += 180), n.scaleX = (0 | Math.sqrt(y * y + z * z) * q + .5) / q, n.scaleY = (0 | Math.sqrt(D * D + H * H) * q + .5) / q, n.scaleZ = (0 | Math.sqrt(E * E + J * J) * q + .5) / q, n.skewX = 0, n.perspective = N ? 1 / (0 > N ? -N : N) : 0, n.x = K, n.y = L, n.z = M, n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C), n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
                    } else if (!(Aa && !f && h.length && n.x === h[4] && n.y === h[5] && (n.rotationX || n.rotationY) || void 0 !== n.x && "none" === X(a, "display", c))) {
                        var P = h.length >= 6,
                            Q = P ? h[0] : 1,
                            R = h[1] || 0,
                            S = h[2] || 0,
                            T = P ? h[3] : 1;
                        n.x = h[4] || 0, n.y = h[5] || 0, j = Math.sqrt(Q * Q + R * R), k = Math.sqrt(T * T + S * S), l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0, m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (o ? (j *= -1, m += 0 >= l ? 180 : -180, l += 0 >= l ? 180 : -180) : (k *= -1, m += 0 >= m ? 180 : -180)), n.scaleX = j, n.scaleY = k, n.rotation = l, n.skewX = m, Aa && (n.rotationX = n.rotationY = n.z = 0, n.perspective = s, n.scaleZ = 1), n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S), n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
                    }
                    n.zOrigin = r;
                    for (i in n) p > n[i] && n[i] > -p && (n[i] = 0)
                }
                return d && (a._gsTransform = n, n.svg && (va && a.style[xa] ? b.delayedCall(.001, function() {
                    Oa(a.style, xa)
                }) : !va && a.getAttribute("transform") && b.delayedCall(.001, function() {
                    a.removeAttribute("transform")
                }))), n
            },
            La = function(a) {
                var b, c, d = this.data,
                    e = -d.rotation * H,
                    f = e + d.skewX * H,
                    g = 1e5,
                    h = (0 | Math.cos(e) * d.scaleX * g) / g,
                    i = (0 | Math.sin(e) * d.scaleX * g) / g,
                    j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                    k = (0 | Math.cos(f) * d.scaleY * g) / g,
                    l = this.t.style,
                    m = this.t.currentStyle;
                if (m) {
                    c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                    var n, o, q = this.t.offsetWidth,
                        r = this.t.offsetHeight,
                        s = "absolute" !== m.position,
                        t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                        w = d.x + q * d.xPercent / 100,
                        x = d.y + r * d.yPercent / 100;
                    if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, o = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(F, t) : t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(" && b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                        var y, z, A, B = 8 > p ? 1 : -1;
                        for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), ra = 0; 4 > ra; ra++) z = ba[ra], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > ra ? -d.ieOffsetX : -d.ieOffsetY : 2 > ra ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === ra || 2 === ra ? 1 : B))) + "px"
                    }
                }
            },
            Ma = O.set3DTransformRatio = O.setTransformRatio = function(a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                    A = this.t.style,
                    B = z.rotation,
                    C = z.rotationX,
                    D = z.rotationY,
                    E = z.scaleX,
                    F = z.scaleY,
                    G = z.scaleZ,
                    I = z.x,
                    J = z.y,
                    K = z.z,
                    L = z.svg,
                    M = z.perspective,
                    N = z.force3D;
                if (!((1 !== a && 0 !== a || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || K || M || D || C) || va && L || !Aa) return void(B || z.skewX || L ? (B *= H, x = z.skewX * H, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (b *= s, e *= s)), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, va && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), I += .01 * z.xPercent * p.width, J += .01 * z.yPercent * p.height), p = 1e-6, p > I && I > -p && (I = 0), p > J && J > -p && (J = 0)), u = (0 | b * y) / y + "," + (0 | e * y) / y + "," + (0 | c * y) / y + "," + (0 | f * y) / y + "," + I + "," + J + ")", L && va ? this.t.setAttribute("transform", "matrix(" + u) : A[xa] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[xa] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");
                if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= H, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * H, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan(z.skewX * H), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (b *= s, e *= s))), c = -r, f = q;
                else {
                    if (!(D || C || 1 !== G || M || L)) return void(A[xa] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                    b = f = 1, c = e = 0
                }
                j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * H, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * H, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (I += d * -o, J += g * -o, K += j * -o + o), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > I && I > -p && (I = w), p > J && J > -p && (J = w), p > K && K > -p && (K = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "Matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f),
                    C || D ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")", A[xa] = u
            };
        j = Ba.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ta("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j, k, l, m, n, o, p, q, r, s = a._gsTransform,
                    t = d._transform = Ka(a, e, !0, i.parseTransform),
                    u = a.style,
                    v = 1e-6,
                    w = wa.length,
                    x = i,
                    y = {},
                    z = "transformOrigin";
                if ("string" == typeof x.transform && xa) l = M.style, l[xa] = x.transform, l.display = "block", l.position = "absolute", K.body.appendChild(M), j = Ka(M, null, !1), K.body.removeChild(M), null != x.xPercent && (j.xPercent = fa(x.xPercent, t.xPercent)), null != x.yPercent && (j.yPercent = fa(x.yPercent, t.yPercent));
                else if ("object" == typeof x) {
                    if (j = {
                            scaleX: fa(null != x.scaleX ? x.scaleX : x.scale, t.scaleX),
                            scaleY: fa(null != x.scaleY ? x.scaleY : x.scale, t.scaleY),
                            scaleZ: fa(x.scaleZ, t.scaleZ),
                            x: fa(x.x, t.x),
                            y: fa(x.y, t.y),
                            z: fa(x.z, t.z),
                            xPercent: fa(x.xPercent, t.xPercent),
                            yPercent: fa(x.yPercent, t.yPercent),
                            perspective: fa(x.transformPerspective, t.perspective)
                        }, p = x.directionalRotation, null != p)
                        if ("object" == typeof p)
                            for (l in p) x[l] = p[l];
                        else x.rotation = p;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (j.x = 0, j.xPercent = fa(x.x, t.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (j.y = 0, j.yPercent = fa(x.y, t.yPercent)), j.rotation = ga("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : t.rotation, t.rotation, "rotation", y), Aa && (j.rotationX = ga("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : t.rotationX || 0, t.rotationX, "rotationX", y), j.rotationY = ga("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : t.rotationY || 0, t.rotationY, "rotationY", y)), j.skewX = null == x.skewX ? t.skewX : ga(x.skewX, t.skewX), j.skewY = null == x.skewY ? t.skewY : ga(x.skewY, t.skewY), (k = j.skewY - t.skewY) && (j.skewX += k, j.rotation += k)
                }
                for (Aa && null != x.force3D && (t.force3D = x.force3D, o = !0), t.skewType = x.skewType || t.skewType || g.defaultSkewType, n = t.force3D || t.z || t.rotationX || t.rotationY || j.z || j.rotationX || j.rotationY || j.perspective, n || null == x.scale || (j.scaleZ = 1); --w > -1;) c = wa[w], m = j[c] - t[c], (m > v || -v > m || null != x[c] || null != J[c]) && (o = !0, f = new oa(t, c, t[c], m, f), c in y && (f.e = y[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                return m = x.transformOrigin, t.svg && (m || x.svgOrigin) && (q = t.xOffset, r = t.yOffset, Ga(a, da(m), j, x.svgOrigin, x.smoothOrigin), f = pa(t, "xOrigin", (s ? t : j).xOrigin, j.xOrigin, f, z), f = pa(t, "yOrigin", (s ? t : j).yOrigin, j.yOrigin, f, z), (q !== t.xOffset || r !== t.yOffset) && (f = pa(t, "xOffset", s ? q : t.xOffset, t.xOffset, f, z), f = pa(t, "yOffset", s ? r : t.yOffset, t.yOffset, f, z)), m = va ? null : "0px 0px"), (m || Aa && n && t.zOrigin) && (xa ? (o = !0, c = za, m = (m || X(a, c, e, !1, "50% 50%")) + "", f = new oa(u, c, 0, 0, f, -1, z), f.b = u[c], f.plugin = h, Aa ? (l = t.zOrigin, m = m.split(" "), t.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0, f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px", f = new oa(t, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = t.zOrigin) : f.xs0 = f.e = m) : da(m + "", t)), o && (d._transformType = t.svg && va || !n && 3 !== this._transformType ? 2 : 3), f
            },
            prefix: !0
        }), ta("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), ta("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g) {
                b = this.format(b);
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    y = a.style;
                for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = V(x[i])), l = k = X(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = Y(a, "borderLeft", n, s), v = Y(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = Y(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = qa(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                return g
            },
            prefix: !0,
            formatter: la("0px 0px 0px 0px", !1, !0)
        }), ta("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position",
                    o = e || W(a, null),
                    q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                    r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage").replace(B, ""), m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), N.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                    q = h.join(" ")
                }
                return this.parseComplex(a.style, q, r, f, g)
            },
            formatter: da
        }), ta("backgroundSize", {
            defaultValue: "0 0",
            formatter: da
        }), ta("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), ta("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), ta("transformStyle", {
            prefix: !0
        }), ta("backfaceVisibility", {
            prefix: !0
        }), ta("userSelect", {
            prefix: !0
        }), ta("margin", {
            parser: ma("marginTop,marginRight,marginBottom,marginLeft")
        }), ta("padding", {
            parser: ma("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), ta("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
            }
        }), ta("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), ta("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e
            }
        }), ta("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ka) || ["#000"])[0]
            }
        }), ta("borderWidth", {
            parser: ma("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), ta("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var f = a.style,
                    g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                return new oa(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
            }
        });
        var Na = function(a) {
            var b, c = this.t,
                d = c.filter || X(this.data, "filter") || "",
                e = 0 | this.s + this.c * a;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        };
        ta("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h = parseFloat(X(a, "opacity", e, !1, "1")),
                    i = a.style,
                    j = "autoAlpha" === c;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0), Q ? f = new oa(i, "opacity", h, b - h, f) : (f = new oa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Na), j && (f = new oa(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
            }
        });
        var Oa = function(a, b) {
                b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
            },
            Pa = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.setAttribute("class", 0 === a ? this.b : this.e);
                    for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Oa(c, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        ta("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.getAttribute("class") || "",
                    p = a.style.cssText;
                if (g = f._classNamePT = new oa(a, d, 0, 0, g, 2), g.setRatio = Pa, g.pr = -11, c = !0, g.b = o, k = $(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                    l.setRatio(1)
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = _(a, k, $(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
            }
        });
        var Qa = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, c, d, e, f, g = this.t.style,
                    h = i.transform.parse;
                if ("all" === this.e) g.cssText = "", e = !0;
                else
                    for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? za : i[c].p), Oa(g, c);
                e && (Oa(g, xa), f = this.t._gsTransform, f && (f.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
            }
        };
        for (ta("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new oa(a, d, 0, 0, f, 2), f.setRatio = Qa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
        }), j = "bezier,throwProps,physicsProps,physics2D".split(","), ra = j.length; ra--;) ua(j[ra]);
        j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = W(a, ""), f = this._overwriteProps;
            var j, n, p, q, r, s, t, u, v, x = a.style;
            if (l && "" === x.zIndex && (j = X(a, "zIndex", e), ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)), "string" == typeof b && (q = x.cssText, j = $(a, e), x.cssText = q + ";" + b, j = _(a, j, $(a)).difs, !Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, x.cssText = q), this._firstPT = n = b.className ? i.className.parse(a, b.className, "className", this, null, null, b) : this.parse(a, b, null), this._transformType) {
                for (v = 3 === this._transformType, xa ? m && (l = !0, "" === x.zIndex && (t = X(a, "zIndex", e), ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)), o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1, p = n; p && p._next;) p = p._next;
                u = new oa(a, "transform", 0, 0, null, 2), this._linkCSSP(u, null, p), u.setRatio = xa ? Ma : La, u.data = this._transform || Ka(a, e, !0), u.tween = h, u.pr = -1, f.pop()
            }
            if (c) {
                for (; n;) {
                    for (s = n._next, p = q; p && p.pr > n.pr;) p = p._next;
                    (n._prev = p ? p._prev : r) ? n._prev._next = n: q = n, (n._next = p) ? p._prev = n : r = n, n = s
                }
                this._firstPT = q
            }
            return !0
        }, j.parse = function(a, b, c, f) {
            var g, h, j, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = qa(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e), o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o), "%" === p ? (j /= Y(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p ? j /= Y(a, g, 1, "em") : "px" !== p && (l = Y(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new oa(s, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new oa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = qa(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
            return c
        }, j.setRatio = function(a) {
            var b, c, d, e = this._firstPT,
                f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; e;) {
                        if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                            if (1 === e.type)
                                if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                        else e.t[e.p] = b + e.xs0;
                        e = e._next
                    } else
                    for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
            else
                for (; e;) {
                    if (2 !== e.type)
                        if (e.r && -1 !== e.type)
                            if (b = Math.round(e.s + e.c), e.type) {
                                if (1 === e.type) {
                                    for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                }
                            } else e.t[e.p] = b + e.xs0;
                        else e.t[e.p] = e.e;
                    else e.setRatio(a);
                    e = e._next
                }
        }, j._enableTransforms = function(a) {
            this._transform = this._transform || Ka(this._target, e, !0), this._transformType = this._transform.svg && va || !a && 3 !== this._transformType ? 2 : 3
        };
        var Ra = function() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function(a, b, c) {
            var d = this._firstPT = new oa(a, b, 0, 0, this._firstPT, 2);
            d.e = c, d.setRatio = Ra, d.data = this
        }, j._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, j._kill = function(b) {
            var c, d, e, f = b;
            if (b.autoAlpha || b.alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
        };
        var Sa = function(a, b, c) {
            var d, e, f, g;
            if (a.slice)
                for (e = a.length; --e > -1;) Sa(a[e], b, c);
            else
                for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push($(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Sa(f, b, c)
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h, i = b.to(a, c, d),
                j = [i],
                k = [],
                l = [],
                m = [],
                n = b._internals.reservedProps;
            for (a = i._targets || i.target, Sa(a, k, m), i.render(c, !0, !0), Sa(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                if (f = _(m[e], k[e], l[e]), f.firstMPT) {
                    f = f.difs;
                    for (g in d) n[g] && (f[g] = d[g]);
                    h = {};
                    for (g in f) h[g] = k[e][g];
                    j.push(b.fromTo(m[e], c, h, f))
                }
            return j
        }, a.activate([g]), g
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = document.documentElement,
        b = window,
        c = function(c, d) {
            var e = "x" === d ? "Width" : "Height",
                f = "scroll" + e,
                g = "client" + e,
                h = document.body;
            return c === b || c === a || c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : c[f] - c["offset" + e]
        },
        d = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.5",
            init: function(a, d, e) {
                return this._wdw = a === b, this._target = a, this._tween = e, "object" != typeof d && (d = {
                    y: d
                }), this.vars = d, this._autoKill = d.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != d.x ? (this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != d.y ? (this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(a) {
                this._super.setRatio.call(this, a);
                var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    f = e - this.yPrev,
                    g = d - this.xPrev;
                this._autoKill && (!this.skipX && (g > 7 || -7 > g) && c(this._target, "x") > d && (this.skipX = !0), !this.skipY && (f > 7 || -7 > f) && c(this._target, "y") > e && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        e = d.prototype;
    d.max = c, e.getX = function() {
        return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, e.getY = function() {
        return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, e._kill = function(a) {
        return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() {
        var a;
        $(function() {
            var b, c, d, e, f, g, h, i, j, k, l;
            return b = $("body"), e = $(".heart-btn"), f = $(".nav-heart"), h = $(".video-player"), d = $(".facebook"), g = $(".popup"), c = $(".do-track-event"), j = function() {
                return b.removeClass("hidden")
            }, k = function() {
                return f.toggleClass("invert")
            }, i = function(a) {
                return a.preventDefault(), FB.ui({
                    method: "share",
                    href: "http://www.heartkids.co.nz"
                }),
                    function(a) {
                        return void 0
                    }
            }, l = function() {
                var b, c, d;
                if ("undefined" != typeof ga && null !== ga) return b = $(this), d = b.attr("data-category"), c = b.attr("data-action"), null == c && (c = g.hasClass("visible") ? a(g.attr("data-popup") + " Popup") : b.parents(".footer.share-message").length ? "CTA Section" : -1 !== $.inArray(d, ["Show Warrior", "Show Fighter", "Show Soldier"]) ? "Nav Section" : "Footer"), ga("send", "event", d, c)
            }, setTimeout(function() {
                return j()
            }, 1e3), e.on("mouseenter mouseleave", k), d.on("click", i), c.on("click", l)
        }), a = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }
    }.call(this),
    function() {
        $(function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m;
            return d = $(window), a = $(".do-show-copy"), c = $(".do-show-prev"), b = $(".do-show-next"), e = 0, g = 2, h = void 0, m = d.width(), i = function() {
                var a, b;
                if (!Modernizr.touchevents) return b = $(this).addClass("expanded"), a = b.find(".facts-copy"), TweenLite.to(b, .6, {
                    y: "0%"
                }), TweenLite.to(a, .6, {
                    opacity: 1,
                    y: "0%"
                })
            }, f = function() {
                var a, b;
                if (!Modernizr.touchevents) return b = $(this).removeClass("expanded"), a = b.find(".facts-copy"), TweenLite.to(b, .6, {
                    y: "25%"
                }), TweenLite.to(a, .6, {
                    opacity: 0,
                    y: "-100%"
                })
            }, k = function(a) {
                return a.preventDefault(), h = e - 1, 0 > h && (h = g), l(1)
            }, j = function(a) {
                return a.preventDefault(), h = e + 1, h > g && (h = 0), l(-1)
            }, l = function(a) {
                var b, c;
                return b = $(".facts-pane[data-index='" + e + "']"), c = $(".facts-pane[data-index='" + h + "']"), TweenLite.to(b, .6, {
                    x: -m * a
                }), TweenLite.fromTo(c, .6, {
                    x: m * a
                }, {
                    x: 0,
                    opacity: 1
                }), e = h
            }, a.on("mouseenter", i), a.on("mouseleave", f), c.on("click", k), b.on("click", j)
        })
    }.call(this),
    function() {
        $(function() {
            var a, b;
            if (!Modernizr.preserve3d) return b = $(window), a = $(".section"), a.each(function() {
                return $(this).css("height", b.height())
            })
        })
    }.call(this),
    function() {
        $(function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
            return c = $(".header"), g = $(".menu"), k = $(".popup"), i = k.find('.popup-content[data-popup="nav"]'), j = i.find(".kid-item-wrapper"), p = k.find('.popup-content[data-popup="video"]'), d = $(".nav-logo, .nav-burger-wrap"), a = k.find('.popup-content[data-popup="about"]'), b = a.find(".popup-tile"), f = $("#shape-hk-logo .path-letter"), m = $(".do-show-menu"), e = $(".do-hide-menu"), n = $(".do-show-nav-mobile"), l = $(".do-show-about-mobile"), o = $(".do-show-video-mobile"), h = $(".do-menu-back"), q = null, x = {
                menu: new TimelineLite,
                nav: new TimelineLite,
                about: new TimelineLite,
                video: new TimelineLite
            }, u = function(a) {
                return a.preventDefault(), x.menu.reversed() ? x.menu.play() : x.menu.set(d, {
                    className: "+= hidden"
                }).set(e, {
                    className: "-=hidden"
                }).to(g, .5, {
                    x: "0%"
                })
            }, r = function(a) {
                return a.preventDefault(), x.menu.reverse()
            }, v = function(a) {
                return a.preventDefault(), q = "nav", x.nav.reversed() ? x.nav.play() : x.nav.set(c, {
                    zIndex: 21
                }).set(k, {
                    className: "+= visible"
                }).set(h, {
                    className: "-= hidden"
                }).set(e, {
                    className: "+=hidden"
                }).set(p, {
                    display: "none"
                }).set([j, i], {
                    opacity: 1
                }).fromTo(i, .5, {
                    x: "100%"
                }, {
                    x: "0%"
                })
            }, t = function(d) {
                return d.preventDefault(), q = "about", x.about.reversed() ? x.about.play() : x.about.set(c, {
                    zIndex: 21
                }).set(k, {
                    className: "+= visible about"
                }).set(b, {
                    x: 0,
                    opacity: 1
                }).set(h, {
                    className: "-= hidden"
                }).set(e, {
                    className: "+=hidden"
                }).set(a, {
                    opacity: 1,
                    zIndex: 11
                }).fromTo(a, .5, {
                    x: "100%"
                }, {
                    x: "0%"
                })
            }, w = function(a) {
                return a.preventDefault(), q = "video", App.playVideo(), x.video.reversed() ? x.video.play() : x.video.set(c, {
                    zIndex: 21
                }).set(k, {
                    className: "+= visible video"
                }).set(h, {
                    className: "-= hidden"
                }).set(e, {
                    className: "+=hidden"
                }).to(p, .5, {
                    opacity: 1,
                    zIndex: 11
                })
            }, s = function(a) {
                return a.preventDefault(), "nav" === q ? x.nav.reverse() : "video" === q ? (App.stopVideo(), x.video.reverse()) : x.about.reverse(), q = null
            }, m.on("click", u), e.on("click", r), n.on("click", v), l.on("click", t), o.on("click", w), h.on("click", s)
        })
    }.call(this),
    function() {
        $(function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
            return e = $(window), a = $("html"), f = $(".wrapper"), d = $(".perspective-wrapper"), c = $(".section.home, .section.intro"), b = $(".kid-item"), q = e.innerHeight(), r = e.innerWidth(), g = q / 2, h = r / 2, l = 8, k = 5, p = 0, o = function() {
                return q = e.innerHeight(), r = e.innerWidth(), g = q / 2, h = r / 2, i()
            }, n = function(a) {
                return Modernizr.preserve3d && !Modernizr.touchevents ? window.requestAnimationFrame(function() {
                    return m(a, d)
                }) : void 0
            }, j = function(a) {
                var b;
                return Modernizr.preserve3d && !Modernizr.touchevents ? (b = $(this).find(".kid-item-inner"), window.requestAnimationFrame(function() {
                    return m(a, b)
                })) : void 0
            }, i = function() {
                return e.width() < 768 && (p = 70), d.css({
                    "max-height": 2 * (q - p)
                }), c.css({
                    height: q - p
                })
            }, m = function(a, b) {
                var c, d;
                return d = (-a.pageX + h) / h * l, c = (a.pageY - g) / g * k, d > l ? d = l : -l > d && (d = -l), c > k ? c = k : -k > c && (c = -k), TweenLite.to(b, .8, {
                    rotationX: c,
                    rotationY: d,
                    ease: Power1.easeOut
                })
            }, i(), e.on("resize", o), f.on("mousemove", n), b.on("mousemove", j)
        })
    }.call(this),
    function() {
        $(function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            return l = $(window), m = $(".wrapper"), b = $(".header"), c = $(".popup"), e = c.find(".popup-header"), d = c.find(".popup-footer"), k = $(".popup-tile-social"), f = $(".do-show-about"), g = $(".do-show-help"), j = $(".do-show-video"), h = $(".do-show-nav"), a = $(".do-close-popup"), i = $(".do-show-social"), n = null, q = !1, v = {
                about: new TimelineLite,
                help: new TimelineLite,
                video: new TimelineLite,
                "video-about": new TimelineLite,
                nav: new TimelineLite
            }, r = function(a) {
                var b, f, g;
                return a.preventDefault(), q ? void 0 : (null != n && "nav" === n && p(), q = !0, n = "about", c.addClass("visible").attr("data-popup", "about"), v.about.reversed() ? v.about.play() : (b = c.find('.popup-content[data-popup="about"]'), f = b.find(".popup-tile.left"), g = b.find(".popup-tile.right"), v.about.set(b, {
                    opacity: 1,
                    zIndex: 11
                }).to(f, .5, {
                    x: 0,
                    opacity: 1
                }).to(g, .5, {
                    x: 0,
                    opacity: 1,
                    delay: "-.5"
                }).to(e, .4, {
                    y: "0%"
                }).to(d, .4, {
                    y: "0%",
                    delay: "-.4",
                    onComplete: function() {
                        return q = !1
                    }
                })))
            }, s = function(a) {
                var b, d, f, g;
                return a.preventDefault(), q ? void 0 : (null != n && "nav" === n && p(), q = !0, n = "help", c.addClass("visible").attr("data-popup", "help"), v.help.reversed() ? v.help.play() : (d = c.find('.popup-content[data-popup="help"]'), f = d.find(".popup-tile.left"), b = d.find(".popup-tile.center"), g = d.find(".popup-tile.right"), v.help.set(d, {
                    opacity: 1,
                    zIndex: 11
                }).to(f, .5, {
                    x: 0,
                    opacity: 1
                }).to(b, .5, {
                    x: 0,
                    opacity: 1,
                    delay: "-.25"
                }).to(g, .5, {
                    x: 0,
                    opacity: 1,
                    delay: "-.25"
                }).to(e, .4, {
                    y: "0%",
                    onComplete: function() {
                        return q = !1
                    }
                })))
            }, u = function(a) {
                var b;
                return a.preventDefault(), q ? void 0 : (q = !0, c.addClass("visible").attr("data-popup", "video"), n = null != n && "about" === n ? "video-about" : "video", App.playVideo(), v[n].reversed() ? v[n].play() : (b = c.find('.popup-content[data-popup="video"]'), "video-about" === n ? v[n].to(b, .5, {
                    opacity: 1,
                    zIndex: 11,
                    onComplete: function() {
                        return q = !1
                    }
                }) : v[n].to(b, .5, {
                    opacity: 1,
                    zIndex: 11
                }).to(e, .5, {
                    y: "0%"
                }).to(d, .5, {
                    y: "0%",
                    delay: "-.5",
                    onComplete: function() {
                        return q = !1
                    }
                })))
            }, t = function(a) {
                var d, e;
                return a.preventDefault(), null != n && "nav" === n ? void o() : q ? void 0 : (q = !0, n = "nav", c.addClass("visible").attr("data-popup", "nav"), v[n].reversed() ? v[n].play() : (d = c.find('.popup-content[data-popup="nav"]'), e = $(".kid-item-wrapper"), v.nav.set(b, {
                    zIndex: 21
                }).to(d, .5, {
                    opacity: 1,
                    zIndex: 11
                }).staggerTo(e, .8, {
                    opacity: 1,
                    delay: "-.5",
                    onComplete: function() {
                        return q = !1
                    }
                }, .35, "-=.35")), c.on("click", function(a) {
                    return $(a.target).parents(".popup-tile-content").length ? void 0 : (a.preventDefault(), o())
                }))
            }, p = function() {
                var a, d, e;
                if (!q) return q = !0, a = c.find('.popup-content[data-popup="nav"]'), d = a.find(".kid-item-wrapper"), e = new TimelineLite, e.to(a, .6, {
                    opacity: 0,
                    zIndex: 10
                }).to(d, .6, {
                    opacity: 0,
                    delay: "-.6"
                }).set(b, {
                    zIndex: 20,
                    onComplete: function() {
                        return q = !1
                    }
                })
            }, o = function(a) {
                var b;
                if (null == a && (a = null), null != a && a.preventDefault(), !q) {
                    if (q = !0, "help" === n) b = 1900;
                    else if ("video" === n) App.stopVideo(), b = 750;
                    else {
                        if ("video-about" === n) return q = !1, App.stopVideo(), v[n].reverse(), c.attr("data-popup", "about"), void(n = "about");
                        "nav" === n ? (q = !1, b = 600, p()) : b = 900
                    }
                    return "nav" !== n && v[n].reverse(), n = null, setTimeout(function() {
                        return c.removeClass("visible").attr("data-popup", ""), q = !1, k.hasClass("visible") ? k.removeClass("visible") : void 0
                    }, b)
                }
            }, w = function(a) {
                return null == a && (a = null), null != a && a.preventDefault(), k.toggleClass("visible")
            }, f.on("click", r), g.on("click", s), j.on("click", u), h.on("click", t), a.on("click", o), i.on("click", w)
        })
    }.call(this),
    function() {
        var a, b, c;
        $(function() {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
            return j = $(window), k = $(".wrapper"), h = $(".nav-bar"), f = $(".footer-wrapper"), e = $(".error-page-wrap"), c = $(".perspective-layer.background"), g = $(".perspective-layer.foreground"), d = $(".perspective-layer.distortion"), i = $(".do-scroll"), r = j.height(), x = 0, l = 0, q = 6, w = 50, v = function() {
                return r = j.height(), e.css({
                    "min-height": r
                })
            }, u = function(a) {
                return i.removeClass("active"), $(i[a]).addClass("active")
            }, o = function(c) {
                var d;
                if (Modernizr.preserve3d) return d = k.scrollTop(), Modernizr.touchevents || (m(d), t(d)), n(d), s(d), 1.2 * d > j.height() * q && d > x ? (a(), setTimeout(function() {
                    return b()
                }, 500)) : b(), x = d
            }, m = function(a) {
                return TweenLite.to(c, 0, {
                    y: .8 * a,
                    z: -800,
                    scale: 1.8,
                    opacity: 1 - 2e-4 * a
                }), TweenLite.to(g, 0, {
                    y: .8 * a,
                    z: -400,
                    scale: 1.3,
                    opacity: 1 - 2e-4 * a
                }), TweenLite.to(d, 0, {
                    y: .8 * a,
                    z: 5,
                    opacity: 1 - 2e-4 * a
                }), a >= r ? TweenLite.set(d, {
                    z: 500
                }) : TweenLite.set(d, {
                    z: 5
                })
            }, t = function(a) {
                return a > 1 ? h.addClass("scrolled") : h.removeClass("scrolled")
            }, n = function(a) {
                return a > 0 && .5 * r > a ? u(0) : a >= .5 * r && 1.5 * r > a ? u(1) : a >= 1.5 * r && 2.5 * r > a ? u(2) : a >= 2.5 * r && 3.5 * r > a ? u(3) : a >= 3.5 * r && 4.5 * r > a ? u(4) : a >= 4.5 * r && 5.5 * r > a && (u(5), "undefined" != typeof ga && null !== ga) ? ga("send", "event", "Scroll End") : void 0
            }, s = function(a) {
                return a >= 3 * r && 4 * r + w > a ? f.addClass("small") : f.removeClass("small")
            }, p = function(a) {
                var b;
                return a.preventDefault(), b = $(this).attr("data-section"), TweenLite.to(k, 1.1, {
                    scrollTo: {
                        y: r * b
                    },
                    ease: Power2.easeOut
                })
            }, j.on("resize", v), j.trigger("resize", v), i.on("click", p), k.on("scroll", o), k.trigger("scroll", o)
        }), c = function(a) {
            return a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1
        }, a = function() {
            return window.addEventListener && window.addEventListener("DOMMouseScroll", c, !1), window.onwheel = c, window.onmousewheel = document.onmousewheel = c, window.ontouchmove = c
        }, b = function() {
            return window.removeEventListener && window.removeEventListener("DOMMouseScroll", c, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null
        }
    }.call(this),
    function() {
        $(function() {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            return b = $(".tile-footer, .share-message"), e = b.find(".footer-social"), a = b.find(".footer-social.facebook"), f = b.find(".footer-social.twitter"), c = b.find(".footer-social.instagram"), d = b.find(".footer-copy"), h = "#2b4aa9", l = "#54abef", i = "#09406d", k = function() {
                return TweenLite.to(b, .4, {
                    yPercent: 100
                }), setTimeout(function() {
                    return b.hasClass("rollover") ? b.removeClass("rollover") : b.addClass("rollover"), TweenLite.to(b, .4, {
                        yPercent: 0
                    })
                }, 400)
            }, g = function() {
                return Modernizr.touchevents || "video" === b.parents(".popup").attr("data-popup") ? void 0 : (TweenLite.to(d, .2, {
                    display: "none"
                }), TweenLite.to(e, .6, {
                    width: "" + 100 / 3 + "%",
                    paddingLeft: 0,
                    delay: .2
                }), TweenLite.to(a, .6, {
                    backgroundColor: h,
                    delay: .2
                }), TweenLite.to(f, .6, {
                    backgroundColor: l,
                    delay: .2
                }), TweenLite.to(c, .6, {
                    backgroundColor: i,
                    delay: .2
                }))
            }, j = function() {
                return Modernizr.touchevents || "video" === b.parents(".popup").attr("data-popup") ? void 0 : (TweenLite.to(d, .2, {
                    display: "inline-block"
                }), TweenLite.to(e, .6, {
                    width: 25,
                    backgroundColor: "none"
                }), TweenLite.to(f, .6, {
                    width: 45,
                    paddingLeft: 20
                }))
            }, b.on("mouseenter", g), b.on("mouseleave", j)
        })
    }.call(this);