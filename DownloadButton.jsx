import React, { useRef } from 'react';

const DownloadButton = ({ children }) => {
  const containerRef = useRef(null);

  const handlePrint = () => {
    const printContents = containerRef.current.innerHTML;
    const printWindow = window.open('', '_blank');
    
    // Build a new HTML document for printing
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Download as Image</title>
          <style>
            /* Add any styles here that should apply to the printed content */
            body, html {
              margin: 0;
              padding: 0;
            }
            .wrapper {
              width: 100%;
              padding: 20px;
              background: white;
              color: black;
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <div class="wrapper">${printContents}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div>
      <div ref={containerRef} style={{ padding: "20px", backgroundColor: "#fff" }}>
        {children}
      </div>
      <button onClick={handlePrint} className="receipt-modal-download-button">
        Download as Image
      </button>
    </div>
  );
};

export default DownloadButton;


#####Original Solution####

import React, { useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const DownloadButton = ({ children }) => {
  const containerRef = useRef(null);

  const handleDownload = () => {
    if (containerRef.current) {
      toPng(containerRef.current)
        .then((dataUrl) => {
          download(dataUrl, 'table-component.png');
        })
        .catch((err) => {
          console.error('Oops, something went wrong!', err);
        });
    }
  };

  return (
    <div>
      <div ref={containerRef}>
        {children}
      </div>
      <button onClick={handleDownload} className="receipt-modal-download-button">
        Download as Image
      </button>
    </div>
  );
};

export default DownloadButton;
