// scripts.js

// Gera URL do viewer. Pode trocar o serviço!
function getPdfViewerUrl(pdfPath) {
    // PDF.js (próprio): basta usar <iframe src=...>
    // Exemplo: usando o próprio arquivo no iframe
    return pdfPath;

    // Se quiser usar pdfviewer.io (deixa mais "bonito", modo flipbook, etc):
    // return `https://www.pdfviewer.io/viewer?file=${location.origin}/${pdfPath}`;

    // Ou Google Drive Viewer:
    // return `https://drive.google.com/viewerng/viewer?url=${location.origin}/${pdfPath}`;
}