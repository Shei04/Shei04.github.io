(window._iconfont_svg_string_3644125 =
  '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M616.883 560.058c-1.759 1.758-84.812 111.267-222.931 111.267-153.551 0-278.028-124.479-278.028-278.029 0-153.55 124.479-278.028 278.028-278.028 153.549 0 278.028 124.478 278.028 278.028 0 41.227-8.978 80.356-25.077 115.545 10.229 10.23-3.585-4.228 59.143 58.5 28.854-51.495 45.372-110.812 45.372-174.045 0-197.424-160.042-357.467-357.467-357.467s-357.466 160.042-357.466 357.467c0 197.424 160.042 357.466 357.467 357.466 84.393 0 161.817-29.419 222.967-78.329l316.64 316.64 56.169-56.169-372.845-372.845z"  ></path></symbol><symbol id="icon-wenhao-xianxingyuankuang" viewBox="0 0 1024 1024"><path d="M512 128c212 0 384 172 384 384s-172 384-384 384-384-172-384-384 172-384 384-384m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m11.2-203.2l-5.6 4.8c-3.2 2.4-5.6 8-5.6 12.8v58.4h-64v-58.4c0-24.8 11.2-48 29.6-63.2l5.6-4.8c56-44.8 83.2-68 83.2-108C598.4 358.4 560 320 512 320c-49.6 0-86.4 36.8-86.4 86.4h-64C361.6 322.4 428 256 512 256c83.2 0 150.4 67.2 150.4 150.4 0 72.8-49.6 112.8-107.2 158.4z"  ></path></symbol><symbol id="icon-gerenzhuyeshezhi" viewBox="0 0 1024 1024"><path d="M512 1024c282.309 0 512-229.693 512-512S794.309 0 512 0 0 229.693 0 512s229.691 512 512 512z m0-960c247.044 0 448.002 200.956 448.002 448 0 247.038-200.958 448.002-448.002 448.002S64 759.038 64 512C64 264.956 264.956 64 512 64z m0 135.995c102.048 0 184.801 82.054 184.801 183.303 0 101.218-82.716 183.265-184.801 183.265-102.078 0-184.769-82.053-184.769-183.265 0-101.25 82.723-183.303 184.769-183.303z m0 314.18c72.9 0 132.002-58.62 132.002-130.914 0-72.32-59.101-130.908-132.002-130.908S379.998 310.974 379.998 383.26c0 72.325 59.101 130.914 132.002 130.914z m0 0c145.826 0 264.004 117.217 264.004 261.829h-52.806c0-115.649-94.556-209.441-211.198-209.441s-211.202 93.79-211.202 209.44h-52.8c0-144.61 118.176-261.828 264.002-261.828z m0 0"  ></path></symbol></svg>'),
  (function (n) {
    var e = (e = document.getElementsByTagName('script'))[e.length - 1],
      t = e.getAttribute('data-injectcss'),
      e = e.getAttribute('data-disable-injectsvg');
    if (!e) {
      var o,
        i,
        c,
        s,
        d,
        a = function (e, t) {
          t.parentNode.insertBefore(e, t);
        };
      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (e) {
          console && console.log(e);
        }
      }
      (o = function () {
        var e,
          t = document.createElement('div');
        (t.innerHTML = n._iconfont_svg_string_3644125),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild
              ? a(t, e.firstChild)
              : e.appendChild(t));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o();
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (s = n.document),
            (d = !1),
            r(),
            (s.onreadystatechange = function () {
              'complete' == s.readyState &&
                ((s.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), c());
    }
    function r() {
      try {
        s.documentElement.doScroll('left');
      } catch (e) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
