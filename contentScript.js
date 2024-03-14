(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value} = obj;

        if (type === "NEW") {
            newPdfLoaded();
        }
    });

    const newPdfLoaded = () => {
            pdfViewer = document.getElementsByTagName('embed')[0]
            if(pdfViewer){
                console.log(pdfViewer)
                pdfViewer.style.filter = 'invert(1)';
            }
    }

    newPdfLoaded();
})();


