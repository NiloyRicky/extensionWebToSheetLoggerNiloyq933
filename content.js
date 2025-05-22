console.log("Hello from content script");


const showSaveButton = (x, y, text) => {
  // Remove old button if exists
  const oldBtn = document.getElementById("highlight-save-btn");
  if (oldBtn) oldBtn.remove();

  const button = document.createElement("button");
  button.innerText = "Save";
  button.id = "highlight-save-btn";
  button.style.position = "absolute";
  button.style.top = `${y + 10}px`;
  button.style.left = `${x + 10}px`;
  button.style.zIndex = 9999;
  button.style.background = "#1976d2";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.padding = "5px 10px";
  button.style.borderRadius = "4px";
  button.style.cursor = "pointer";

  document.body.appendChild(button);

  button.onclick = () => {
    console.log("Saving text:", text);
    // Later: Send to background or popup to save in Sheet
    button.remove();
  };
};

document.addEventListener("mouseup",(e)=>{
    const selectedText=window.getSelection().toString();
    if(selectedText){
        showSaveButton(e.pageX, e.pageY, selectedText);
        console.log(selectedText);
    }

})