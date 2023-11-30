
const s = document.getElementById("slides-container")
  , $ = document.querySelector(".slide")
  , re = function() {
    let t = !1;
    return function(o) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (t = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    t
}
  , le = re()
  , T = document.getElementById("slide-arrow-prev")
  , M = document.getElementById("slide-arrow-next");
le || (T?.classList.remove("hidden"),
M?.classList.remove("hidden"));
const w = 200
  , H = 200
  , W = 50;
let d = null
  , f = null
  , h = null;
M?.addEventListener("mousedown", ()=>{
    s && (s.classList.remove("snap-x", "scroll-smooth"),
    d = Date.now(),
    f = setTimeout(()=>{
        h = setInterval(()=>{
            s.scrollLeft += H
        }
        , W)
    }
    , w))
}
);
M?.addEventListener("mouseup", ()=>{
    s && (s.classList.add("snap-x", "scroll-smooth"),
    d && Date.now() - d < w && (s.scrollLeft += 480,
    f && clearTimeout(f)),
    h && clearInterval(h),
    d = null)
}
);
T?.addEventListener("mousedown", ()=>{
    s && (s.classList.remove("snap-x", "scroll-smooth"),
    d = Date.now(),
    f = setTimeout(()=>{
        h = setInterval(()=>{
            s.scrollLeft -= H
        }
        , W)
    }
    , w))
}
);
T?.addEventListener("mouseup", ()=>{
    s && (s.classList.add("snap-x", "scroll-smooth"),
    d && Date.now() - d < w && (s.scrollLeft -= 480,
    f && clearTimeout(f)),
    h && clearInterval(h),
    d = null)
}
);
const ce = document.querySelectorAll(".pagination-bullet");
ce.forEach((t,o)=>{
    t.addEventListener("click", ()=>{
        const n = $?.clientWidth || 480;
        s && (s.scrollLeft = o * n)
    }
    )
}
);
const S = document.querySelectorAll(".indicator-button");
function de() {
    S.forEach((t,o)=>{
        t.setAttribute("aria-label", `Scroll to item #${o + 1}`)
    }
    )
}
function U(t) {
    S.forEach((o,n)=>{
        o.setAttribute("aria-pressed", n === t)
    }
    )
}
S.forEach((t,o)=>{
    t.addEventListener("click", n=>{
        n.preventDefault(),
        n.stopPropagation(),
        U(o);
        const e = $?.clientWidth || 480;
        s && (s.scrollLeft = o * e)
    }
    )
}
);
de();
U(0);
let p = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
};
const X = function(t) {
    const o = t.clientX - p.x
      , n = t.clientY - p.y;
    s && (s.scrollTop = p.top - n,
    s.scrollLeft = p.left - o)
}
  , Y = function() {
    document.removeEventListener("mousemove", X),
    document.removeEventListener("mouseup", Y),
    s && (s.classList.add("snap-x", "scroll-smooth"),
    s.style.cursor = "grab",
    s.style.removeProperty("user-select"))
}
  , ue = function(t) {
    s && (s.classList.remove("snap-x", "scroll-smooth"),
    s.style.cursor = "grabbing",
    s.style.userSelect = "none",
    p = {
        left: s.scrollLeft,
        top: s.scrollTop,
        x: t.clientX,
        y: t.clientY
    },
    document.addEventListener("mousemove", X),
    document.addEventListener("mouseup", Y))
};
s?.addEventListener("mousedown", ue);
function me(t, o) {
    for (var n = 0; n < o.length; n++) {
        var e = o[n];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e)
    }
}
function y(t) {
    return function(o) {
        if (Array.isArray(o))
            return k(o)
    }(t) || function(o) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(o))
            return Array.from(o)
    }(t) || function(o, n) {
        if (o) {
            if (typeof o == "string")
                return k(o, n);
            var e = Object.prototype.toString.call(o).slice(8, -1);
            if (e === "Object" && o.constructor && (e = o.constructor.name),
            e === "Map" || e === "Set")
                return Array.from(o);
            if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return k(o, n)
        }
    }(t) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }()
}
function k(t, o) {
    (o == null || o > t.length) && (o = t.length);
    for (var n = 0, e = new Array(o); n < o; n++)
        e[n] = t[n];
    return e
}
var P, L, u, A, K, C = (P = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
L = function() {
    function t(e) {
        var i = e.targetModal
          , a = e.triggers
          , r = a === void 0 ? [] : a
          , m = e.onShow
          , c = m === void 0 ? function() {}
        : m
          , v = e.onClose
          , g = v === void 0 ? function() {}
        : v
          , I = e.openTrigger
          , Q = I === void 0 ? "data-micromodal-trigger" : I
          , q = e.closeTrigger
          , V = q === void 0 ? "data-micromodal-close" : q
          , O = e.openClass
          , Z = O === void 0 ? "is-open" : O
          , j = e.disableScroll
          , ee = j !== void 0 && j
          , F = e.disableFocus
          , te = F !== void 0 && F
          , N = e.awaitCloseAnimation
          , oe = N !== void 0 && N
          , D = e.awaitOpenAnimation
          , ne = D !== void 0 && D
          , z = e.debugMode
          , ie = z !== void 0 && z;
        (function(se, ae) {
            if (!(se instanceof ae))
                throw new TypeError("Cannot call a class as a function")
        }
        )(this, t),
        this.modal = document.getElementById(i),
        this.config = {
            debugMode: ie,
            disableScroll: ee,
            openTrigger: Q,
            closeTrigger: V,
            openClass: Z,
            onShow: c,
            onClose: g,
            awaitCloseAnimation: oe,
            awaitOpenAnimation: ne,
            disableFocus: te
        },
        r.length > 0 && this.registerTriggers.apply(this, y(r)),
        this.onClick = this.onClick.bind(this),
        this.onKeydown = this.onKeydown.bind(this)
    }
    var o, n;
    return o = t,
    (n = [{
        key: "registerTriggers",
        value: function() {
            for (var e = this, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                a[r] = arguments[r];
            a.filter(Boolean).forEach(function(m) {
                m.addEventListener("click", function(c) {
                    return e.showModal(c)
                })
            })
        }
    }, {
        key: "showModal",
        value: function() {
            var e = this
              , i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (this.activeElement = document.activeElement,
            this.modal.setAttribute("aria-hidden", "false"),
            this.modal.classList.add(this.config.openClass),
            this.scrollBehaviour("disable"),
            this.addEventListeners(),
            this.config.awaitOpenAnimation) {
                var a = function r() {
                    e.modal.removeEventListener("animationend", r, !1),
                    e.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", a, !1)
            } else
                this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, i)
        }
    }, {
        key: "closeModal",
        value: function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null
              , i = this.modal;
            if (this.modal.setAttribute("aria-hidden", "true"),
            this.removeEventListeners(),
            this.scrollBehaviour("enable"),
            this.activeElement && this.activeElement.focus && this.activeElement.focus(),
            this.config.onClose(this.modal, this.activeElement, e),
            this.config.awaitCloseAnimation) {
                var a = this.config.openClass;
                this.modal.addEventListener("animationend", function r() {
                    i.classList.remove(a),
                    i.removeEventListener("animationend", r, !1)
                }, !1)
            } else
                i.classList.remove(this.config.openClass)
        }
    }, {
        key: "closeModalById",
        value: function(e) {
            this.modal = document.getElementById(e),
            this.modal && this.closeModal()
        }
    }, {
        key: "scrollBehaviour",
        value: function(e) {
            if (this.config.disableScroll) {
                var i = document.querySelector("body");
                switch (e) {
                case "enable":
                    Object.assign(i.style, {
                        overflow: ""
                    });
                    break;
                case "disable":
                    Object.assign(i.style, {
                        overflow: "hidden"
                    })
                }
            }
        }
    }, {
        key: "addEventListeners",
        value: function() {
            this.modal.addEventListener("touchstart", this.onClick),
            this.modal.addEventListener("click", this.onClick),
            document.addEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "removeEventListeners",
        value: function() {
            this.modal.removeEventListener("touchstart", this.onClick),
            this.modal.removeEventListener("click", this.onClick),
            document.removeEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "onClick",
        value: function(e) {
            (e.target.hasAttribute(this.config.closeTrigger) || e.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e.preventDefault(),
            e.stopPropagation(),
            this.closeModal(e))
        }
    }, {
        key: "onKeydown",
        value: function(e) {
            e.keyCode === 27 && this.closeModal(e),
            e.keyCode === 9 && this.retainFocus(e)
        }
    }, {
        key: "getFocusableNodes",
        value: function() {
            var e = this.modal.querySelectorAll(P);
            return Array.apply(void 0, y(e))
        }
    }, {
        key: "setFocusToFirstNode",
        value: function() {
            var e = this;
            if (!this.config.disableFocus) {
                var i = this.getFocusableNodes();
                if (i.length !== 0) {
                    var a = i.filter(function(r) {
                        return !r.hasAttribute(e.config.closeTrigger)
                    });
                    a.length > 0 && a[0].focus(),
                    a.length === 0 && i[0].focus()
                }
            }
        }
    }, {
        key: "retainFocus",
        value: function(e) {
            var i = this.getFocusableNodes();
            if (i.length !== 0)
                if (i = i.filter(function(r) {
                    return r.offsetParent !== null
                }),
                this.modal.contains(document.activeElement)) {
                    var a = i.indexOf(document.activeElement);
                    e.shiftKey && a === 0 && (i[i.length - 1].focus(),
                    e.preventDefault()),
                    !e.shiftKey && i.length > 0 && a === i.length - 1 && (i[0].focus(),
                    e.preventDefault())
                } else
                    i[0].focus()
        }
    }]) && me(o.prototype, n),
    t
}(),
u = null,
A = function(t) {
    if (!document.getElementById(t))
        return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(t, '"></div>')),
        !1
}
,
K = function(t, o) {
    if (function(e) {
        e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
    }(t),
    !o)
        return !0;
    for (var n in o)
        A(n);
    return !0
}
,
{
    init: function(t) {
        var o = Object.assign({}, {
            openTrigger: "data-micromodal-trigger"
        }, t)
          , n = y(document.querySelectorAll("[".concat(o.openTrigger, "]")))
          , e = function(r, m) {
            var c = [];
            return r.forEach(function(v) {
                var g = v.attributes[m].value;
                c[g] === void 0 && (c[g] = []),
                c[g].push(v)
            }),
            c
        }(n, o.openTrigger);
        if (o.debugMode !== !0 || K(n, e) !== !1)
            for (var i in e) {
                var a = e[i];
                o.targetModal = i,
                o.triggers = y(a),
                u = new L(o)
            }
    },
    show: function(t, o) {
        var n = o || {};
        n.targetModal = t,
        n.debugMode === !0 && A(t) === !1 || (u && u.removeEventListeners(),
        (u = new L(n)).showModal())
    },
    close: function(t) {
        t ? u.closeModalById(t) : u.closeModal()
    }
});
typeof window < "u" && (window.MicroModal = C);
var fe = !0
  , x = "Invariant failed";
function E(t, o) {
    if (!t) {
        if (fe)
            throw new Error(x);
        var n = typeof o == "function" ? o() : o
          , e = n ? "".concat(x, ": ").concat(n) : x;
        throw new Error(e)
    }
}
const B = "menu-modal"
  , he = document.querySelector("#page-header")
  , _ = document.querySelector(`#${B} ul`)
  , R = document.querySelector("#open-nav-button")
  , G = document.querySelector("#close-nav-button");
E(he, "header should not be null");
E(_, "menu should not be null");
E(R, "openNavButton should not be null");
E(G, "closeNavButton should not be null");
const ve = ()=>{
    C.show(B, {
        disableScroll: !0
    })
}
  , J = ()=>{
    C.close(B)
}
;
R.addEventListener("click", ve);
G.addEventListener("click", J);
_.addEventListener("click", t=>{
    t.target.tagName === "A" && J()
}
);
const b = document.querySelectorAll(".theme-switcher")
  , l = document.querySelectorAll("#menu");
b.forEach(t=>{
    t.addEventListener("click", ()=>{
        console.log("button clicked");
        let o = !1;
        l.forEach(n=>{
            const e = n?.classList.contains("hidden");
            e && (o = e)
        }
        ),
        o ? we() : ye()
    }
    )
}
);
const ge = document.querySelectorAll("#system");
ge.forEach(t=>{
    t.addEventListener("click", ()=>{
        const o = window.matchMedia("(prefers-color-scheme: dark)").matches
          , n = o ? "dark" : "light";
        document.documentElement.dataset.theme = n,
        o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"),
        localStorage.setItem("theme", "system"),
        t.setAttribute("aria-expanded", "false"),
        l.forEach(e=>{
            e?.classList.add("hidden")
        }
        )
    }
    )
}
);
const pe = document.querySelectorAll("#dark");
pe.forEach(t=>{
    t.addEventListener("click", ()=>{
        document.documentElement.classList.add("dark"),
        document.documentElement.dataset.theme = "dark",
        localStorage.setItem("theme", "dark"),
        t.setAttribute("aria-expanded", "false"),
        l.forEach(o=>{
            o?.classList.add("hidden")
        }
        )
    }
    )
}
);
const be = document.querySelectorAll("#light");
be.forEach(t=>{
    t.addEventListener("click", ()=>{
        document.documentElement.classList.remove("dark"),
        document.documentElement.dataset.theme = "light",
        localStorage.setItem("theme", "light"),
        t.setAttribute("aria-expanded", "false"),
        l.forEach(o=>{
            o?.classList.add("hidden")
        }
        )
    }
    )
}
);
const ye = ()=>{
    l.forEach(t=>{
        t?.classList.add("hidden")
    }
    ),
    b.forEach(t=>{
        t.setAttribute("aria-expanded", "false")
    }
    )
}
  , we = ()=>{
    l.forEach(t=>{
        t?.classList.remove("hidden")
    }
    ),
    b.forEach(t=>{
        t.setAttribute("aria-expanded", "true")
    }
    )
}
;
document.addEventListener("click", t=>{
    console.log("menus", l),
    console.log("e.target", t.target);
    let o = !1;
    b.forEach(i=>{
        const a = i.contains(t.target);
        console.log("🚀 ~ file: theme-switcher-copy.astro:148 ~ buttons.forEach ~ isContained:", a),
        a && (o = a)
    }
    );
    let n = !1;
    l.forEach(i=>{
        const a = i.contains(t.target);
        a && (n = a)
    }
    ),
    !o && !n && (l.forEach(i=>{
        i?.classList.add("hidden")
    }
    ),
    b.forEach(i=>{
        i.setAttribute("aria-expanded", "false")
    }
    ))
}
);
