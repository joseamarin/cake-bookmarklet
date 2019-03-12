(() => {
  try {
    window.open().document.write(`
    <!doctype html>
    <html>
    <head>
    <style>
      .x-grid3-scroller {
        resize: both;
        overflow: auto;
        border: 4px solid ;
        background: #fff;
        min-height: 100vh;
        min-width: 100%;
      }
      .x-grid3-td-132 {
        padding-bottom: 10px;
      }
      .x-grid3-col-135 {
        /*display: none;*/
        font-size: 9px;
      }
    </style>
    <script>
      setTimeout(() => window.stop(),1000);
      document.querySelector('.x-grid3-cell-inner.x-grid3-col-132')
    </script>
    </head>
    <body>
      ${Array.from(document.querySelectorAll('.x-grid3'))[2].outerHTML}
    </body>
    </html>
      `);
  }
  catch(e) {
    alert('Something went wrong! ' + e);
  }
})();
