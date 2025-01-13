# SnapInsta New Button Chrome Extension

This is a Chrome extension designed to add a "Download All" button to the SnapInsta website (https://snapinsta.app). The button allows users to download all available images on the page with a single click, making the process of downloading multiple images easier and more efficient.

## Features

- Adds a "Download All" button to the SnapInsta website.
- Allows users to download all images on the page sequentially.
- Uses a clean and intuitive interface that integrates seamlessly with the website.
- Automatically ensures the button is added whenever the page content changes.

## Files

### manifest.json

This file defines the Chrome extension's metadata and configuration:

- `manifest_version`: Specifies the version of the Chrome extension manifest (v3).
- `name`: The name of the extension.
- `version`: The version of the extension.
- `description`: A brief explanation of what the extension does.
- `permissions`: Specifies the permissions required, such as access to the active tab, downloads, and scripting.
- `content_scripts`: Defines the script (`content.js`) that will run on the SnapInsta website.
- `icons`: Specifies the icons used for the extension.

### content.js

This script contains the main logic of the extension:

1. **Download Functionality**:

   - Downloads images sequentially by simulating user clicks.
   - Adds a short delay between downloads to ensure smooth operation.

2. **Button Creation**:

   - Dynamically creates and inserts a "Download All" button in the SnapInsta footer.
   - The button triggers the download of all available images when clicked.

3. **MutationObserver**:
   - Watches for changes in the webpage's content.
   - Ensures the "Download All" button is re-added if the page updates dynamically.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle the switch in the top-right corner).
4. Click on **Load unpacked** and select the folder containing this extension.
5. The extension will be installed, and its icon will appear in the toolbar.

## Usage

1. Navigate to the SnapInsta website (https://snapinsta.app).
2. Wait for the page to load the available images.
3. Click the "Download All" button added by the extension.
4. All images will be downloaded sequentially to your default downloads folder.

## Notes

- The "Download All" button will only appear if there are downloadable images on the page.
- A delay of 1 second is added between downloads to ensure the images are downloaded properly.

## Future Improvements

- Add support for batch renaming of downloaded images.
- Include error handling for failed downloads.
- Add options to customize the delay time between downloads.

## License

This project is licensed under the MIT License.

## Disclaimer

This extension is designed for educational purposes only. Use it responsibly and ensure compliance with SnapInsta's terms of service.
