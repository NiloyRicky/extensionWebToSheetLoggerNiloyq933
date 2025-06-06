# extensionWebToSheetLoggerNiloyq933
Web to sheet logger
# Highlight Saver Chrome Extension

DAY-1 Progress

## Description
This Chrome extension allows users to highlight text on any webpage and save it along with metadata such as timestamp,title and page URL. It currently logs this data to the console and will later integrate with Google Sheets.


## Features
- Popup interface with basic controls.
- Content script injected into active webpages.
- Logs "Hello from content script" in the console.
- Context menu option to capture highlighted text, page URL, and timestamp.
- - **Floating "Save" button appears when text is selected.**
- **Captures and logs selected text on button click.**

## DAY-2 Progress

## Description
This Chrome extension allows users to highlight text on any webpage and save it along with metadata such as timestamp, title, and page URL. It currently logs this data to the console and will later integrate with Google Sheets.

## Features
- Popup interface with basic controls.
- Content script injected into active webpages.
- Logs "Hello from content script" in the console.
- **Floating "Save" button appears when text is selected.**
- **Captures and logs selected text on button click.**

## DAY-3 Progress
Features
Captures metadata: Selected text, page title, URL, and timestamp.

Displays confirmation popup after clicking the "Save" button.

Includes "Confirm Save" button to finalize the logging action.

Popup styled with basic CSS for better readability.

Prepares the data for future integration with Google Sheets.


## DAY-4 Progress
Features

Integrated background script to handle saving highlights asynchronously.

Implemented POST request to Google Apps Script Web App for storing data in Google Sheets.

Added proper JSON serialization with JSON.stringify for data transfer.

Handled success and error responses with Promises (.then and .catch).

Ensured asynchronous message handling in background script by returning true.


## DAY-5 Progress
Features

Added custom toast notification system without external libraries.

Separated toast styles into a dedicated CSS file for cleaner structure.

Improved UI/UX with confirmation and error toasts upon saving highlights.

Removed dependency on Toastify.js and handled toast display manually using JS and CSS.

Ensured graceful fallback and toast removal for repeated events.

## DAY-6 Progress

Features

Implemented Duplicate Save Prevention: Introduced a mechanism to prevent saving the same text selection multiple times by normalizing the selected text and comparing it with the last saved entry.

Enhanced Confirmation Prompt: Replaced the basic alert with a confirmation dialog that prompts users with "Are you sure you want to save this selection?" before saving, ensuring intentional user actions.

Optimized Text Normalization: Applied text normalization using text.trim().replace(/\s+/g, " ") to standardize whitespace, ensuring consistent comparison and storage of text selections.

Refined Toast Notifications: Improved the custom toast notification system to provide clear feedback on actions, such as successful saves or duplicate entries, enhancing user experience.

Codebase Cleanup: Removed redundant variables and streamlined event listeners to improve code readability and maintainability.

## DAY-7 Progress
Implemented Duplicate Save Prevention: Introduced a mechanism to prevent saving the same text selection multiple times by normalizing the selected text and comparing it with the last saved entry.

Enhanced the UI by implementing hovering effects and adding confirmation pop-up.

Codebase Cleanup: Removed redundant variables and streamlined event listeners to improve code readability and maintainability.


## Installation
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle top-right).
4. Click **Load unpacked** and select the project folder.
5. The extension icon will appear in the toolbar.

## Usage
1. Click the extension icon to open the popup.
2. Highlight any text on a webpage.
3. Right-click the selection and use the context menu option (if implemented).
4. Check the browser console (`F12` > Console) for logged data.

## Tech Stack
- Chrome Extensions API (Manifest V3)
- HTML, CSS, JavaScript

## Progress
- Day 1: Set up manifest.json, popup UI, and content script.
-- Day 2: Implemented text selection detection and floating save button. Logged selected text  to console.**
- -- Day 3: Collected metadata (title, URL, timestamp) along with selected text. Displayed all in a styled popup with "Confirm Save" button.
- - - -Day 4: Collected metadata (title, URL, timestamp) along with selected text. Store all the data in the google sheet.
----- Day 5: Storing the selected text along with title,url,date into Google Sheets.Toaster messages also added
      ------ Day 6: Enhance user expreience and handle edge cases.
      ------- Day 7: Enhanced UI and user experience
## Notes
This is a Chrome extension and runs locally within the browser. No server or hosting is required at this stage.

---

Feel free to contribute or suggest improvements!

