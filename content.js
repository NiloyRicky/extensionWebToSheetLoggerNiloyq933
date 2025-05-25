console.log("Hello from content script");


const showToast = (message) => {
  // Remove existing toast if any
  const oldToast = document.getElementById("custom-toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.id = "custom-toast";
  toast.textContent = message;
  
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
};








let lastText="";
const showSaveButton = (x, y, text) => {
  // Remove old button if exists
  const oldBtn = document.getElementById("highlight-save-btn");
  if (oldBtn) oldBtn.remove();

  const button = document.createElement("button");
  button.innerText = "Save";
  button.id = "highlight-save-btn";
  button.style.position = "absolute"; //position the button relative to the entire page
  button.style.top = `${y + 10}px`;
  button.style.left = `${x + 10}px`;
 

  document.body.appendChild(button);

  button.onclick = () => {
    //console.log("Saving text:", text);
    // Later: Send to background or popup to save in Sheet
    button.remove();
     showMetadataPopup(text);
     lastText="";
  };
};


// Show metadata in a popup with confirm button
const showMetadataPopup = (text) => {
  const title = document.title;
  const url = window.location.href;
  const timestamp = new Date().toISOString();

  // Remove old popup if exists
  const oldPopup = document.getElementById("highlight-popup");
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement("div");
  popup.id = "highlight-popup";
  

  popup.innerHTML = `
    <strong>Selected Text:</strong><br>${text}<br><br>
    <strong>Title:</strong> ${title}<br>
    <strong>URL:</strong> ${url}<br>
    <strong>Time:</strong> ${timestamp}<br><br>
    <button id="confirm-save" >Confirm Save</button>`
  document.body.appendChild(popup);

  document.getElementById("confirm-save").onclick = () => {
    console.log("Saving to Sheet:", {
      text,
      title,
      url,
      timestamp,
    });


const dataToSave = {
    text,
    title: document.title,
    url: window.location.href,
    timestamp: new Date().toISOString(),
  };

  // Send message to background script
  chrome.runtime.sendMessage({ action: "saveHighlight", data: dataToSave }, (response) => {
    if (response && response.status === "success") {

showToast("✅ Success: Saved to Google Sheet!");


      console.log("✅ Saved to Google Sheet:", response.message);
    } else {


      
showToast("❌ can't saved to Google Sheet!");


      
      console.error("❌ Error saving to Google Sheet");
    }
  });







    popup.remove();
    

    // Later: send data to background script or Google Sheet
  };
};








document.addEventListener("mouseup",(e)=>{
    const selectedText=window.getSelection().toString();
    if(selectedText && selectedText !==lastText){
lastText=selectedText
        showSaveButton(e.pageX, e.pageY, selectedText);

        console.log(selectedText);
    }

})
