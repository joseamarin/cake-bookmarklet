(() => {
  const offerId = document.querySelector('.info').innerText.trim().replace(/ID/g, 'ca').replace(/\r?\n?/g, '');
  const title = `CAKE Creative IDs For Offer ${offerId.replace(/ca/, '')}`;
  const html = document.getElementById(offerId).innerHTML;
  try {
    window.open().document.write(`
<!doctype html>
  <html>
    <head>
    <title>${title}</title>
      <style>
        html {
          font-family: sans-serif;
          background-color: #f9f9f9;
        }
        a {
          color: #016F8E;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .x-grid3-scroller {
          resize: both;
          overflow: auto;
          border: 2px solid #000;
          border-radius: 5px;
          min-height: 100vh;
          min-width: 100%;
        }
        .x-grid3-td-checker, .creative-preview {
          display: none;
        }
        .copyMsg {
          border-radius: 6px;
          z-index: 1;
          color: #fff;
          text-align: center;
          padding: 5px 0;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      ${html}
      <script>
        const scroller = document.querySelector('.x-grid3-scroller');
        document.body.innerHTML = '';
        document.body.innerHTML = scroller.outerHTML;

        const initialClassName = document.getElementsByTagName('td')[1]
          .className.trim().split(' ').pop();

        Array.from(document.querySelectorAll('.' + initialClassName))
          .forEach(i => i.style.display = 'none');

        const initialClassNameNumber = initialClassName.split()[0]
          .split('-', 3).join('-').length + 1;

        const creativeIdClass = Number(initialClassName.split()[0]
          .substring(initialClassNameNumber, initialClassName.split()[0].length)) + 1;

        const creativeIds = Array.from(document.querySelectorAll('.x-grid3-col-' + creativeIdClass));

        creativeIds.forEach(cur => {
          cur.firstChild.onclick = null;
          cur.style.padding = '10px';
          cur.firstChild.addEventListener('mouseenter', e => {
            e.target.style.fontSize = '17px';
          });
          cur.firstChild.addEventListener('mouseleave', e => {
            e.target.style.fontSize = '16px';
          });
          cur.firstChild.addEventListener('click', e => {
            const div = document.createElement('div');
            div.classList.add('copyMsg');
            div.style.position = 'absolute';
            div.innerText = 'COPIED';
            div.style.width = '120px';
            div.style.height = '20px';
            div.style.borderBottom = '1px dotted black';
            div.style.background = 'rgba(1,1,1,0.5)';
            div.style.right = e.clientX  + 'px';
            div.style.left = e.clientX + 'px';
            div.style.top = e.clientY + 'px';
            div.style.bottom = e.clientY + 'px';
            document.body.appendChild(div);
            setTimeout(() => {
              document.body.removeChild(div);
          }, 500);
          });
        });

        const linkOverridesClassNumber = creativeIdClass + 3;

        const linkOverrides = Array.from(document.querySelectorAll('.x-grid3-td-' + linkOverridesClassNumber));

        linkOverrides.forEach(cur => cur.style.display = 'none');

        creativeIds.forEach(cur => cur.addEventListener('click', e => {
          const textarea = document.createElement('textarea');
          textarea.innerText = cur.firstChild.attributes.href.nodeValue.replace(/#/, '').replace(/cr/, '');
          document.getElementsByClassName('x-grid3-scroller')[0].appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
          }
          catch (err) {
            alert('Copy not supported' + err);
          }
          finally {
            document.getElementsByClassName('x-grid3-scroller')[0].removeChild(textarea);
          }
        }));
        window.stop();
      </script>
    </body>
  </html>
      `);
  }
  catch(e) {
    alert('Something went wrong! ' + e);
  }
})();
