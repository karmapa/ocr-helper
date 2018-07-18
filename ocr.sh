#!/bin/bash
cd "$(dirname "$0")"
node makeImageList.js
tesseract savedlist OCR-result -c include_page_breaks=1 -c page_separator="<pb>" -l bod