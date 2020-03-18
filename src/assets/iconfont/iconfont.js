!(function(l) {
  var e,
    d =
      '<svg><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M931.148 451.25L591.505 97.654c-21.106-21.953-49.313-34.034-79.551-34.034-30.235 0-58.448 12.081-79.554 34.034L92.76 451.25c-35.049 36.498-30.536 68.044-24.742 81.222 4.13 9.35 18.07 35.05 58.231 35.05h49.78v272.016c0 61.756 44.342 119.906 107.357 119.906h144.587v-287.87c0-30.866-4.675-48.062 26.848-48.062h114.268c31.52 0 26.845 17.196 26.845 48.061v287.872h144.588c63.013 0 107.358-58.15 107.358-119.906V567.523h49.782c40.16 0 54.1-25.7 58.229-35.05 5.793-13.18 10.306-44.726-24.743-81.224z m-33.486 60.28h-105.77v328.007c0 30.865-19.877 63.917-51.37 63.917h-88.6V671.572c0-61.761-19.79-104.05-82.832-104.05H454.821c-63.045 0-82.836 42.289-82.836 104.05v231.883h-88.599c-31.495 0-51.37-33.052-51.37-63.917V511.529H126.25c-0.984 0-1.888-3.852-2.708-3.907 1.94-3.388 5.276-11.975 10.825-17.743l339.671-353.35c10.142-10.578 24.467-17.057 38.353-16.924 13.888-0.133 27.342 6.346 37.483 16.923L889.54 489.88c5.549 5.768 8.885 14.355 10.825 17.743-0.818 0.055-1.72 3.907-2.704 3.907z" fill="" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[
      e.length - 1
    ].getAttribute('data-injectcss');
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e();
        };
        document.addEventListener('DOMContentLoaded', t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (c = l.document),
        (i = !1),
        (d = function() {
          try {
            c.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          n();
        })(),
        (c.onreadystatechange = function() {
          'complete' == c.readyState && ((c.onreadystatechange = null), n());
        }));
    function n() {
      i || ((i = !0), o());
    }
    var o, c, i, d;
  })(function() {
    var e, t, n, o, c, i;
    ((e = document.createElement('div')).innerHTML = d),
      (d = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (n = t),
        (o = document.body).firstChild
          ? ((c = n), (i = o.firstChild).parentNode.insertBefore(c, i))
          : o.appendChild(n));
  });
})(window);
