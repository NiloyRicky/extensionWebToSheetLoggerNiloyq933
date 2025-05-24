console.log("Background")
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveHighlight") {
    fetch("https://script.google.com/macros/s/AKfycbyJ82sf7fQl_2Ssm_22L8tJ1byjqHri7V75iSA1YhsDubqxkDTRixQFUDxFSF3LwU-euA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request.data),
    })
    .then(res => res.text())
    .then(responseText => {
      sendResponse({ status: "success", message: responseText });
    })
    .catch(err => {
      sendResponse({ status: "error", message: err.message });
    });
    
    // Must return true to indicate async response
    return true;
  }
});
