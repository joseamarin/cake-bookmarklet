(() => {
  const offerId = document.querySelector('.info').innerText.trim().replace(/ID/g, 'ca').replace(/\r?\n?/g, '');
  const html = document.getElementById(offerId).innerHTML;
  try {
    window.open().document.write(`
    <!doctype html>
    <html>
    <head>
    <style>
      .x-grid3-td-132 {
        padding-bottom: 10px;
      }
      .x-grid3-scroller {
        resize: both;
        overflow: auto;
        border: 4px solid black;
        min-height: 100vh;
        min-width: 100%;
      }
      .x-grid3-cell-inner.x-grid3-col-132 {
      }
      .x-grid3-col-133, .x-grid3-td-134 {
        /*type and status columns e.g. link/email hidden/active*/
        display: none;
      }
      .x-grid3-col-135 {
        /*url preview text*/
        display: none;
      }
      .x-grid3-td-checker, .creative-preview {
        display: none;
      }
      .x-grid3-col-131 {
        display: none;
      }
    </style>
    <script>
      setTimeout(() => window.stop(), 10);
      setTimeout(() => {
        const scroller = document.querySelector('.x-grid3-scroller');
        document.body.innerHTML = scroller.outerHTML;
        const creativeIds = Array.from(document.querySelectorAll('.x-grid3-col-132'));
        creativeIds.forEach(cur => cur.firstChild.onclick = null);
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
      }, 11);
    </script>
    </head>
    <body>
      ${html}
    </body>
    </html>
      `);
  }
  catch(e) {
    alert('Something went wrong! ' + e);
  }
})();
