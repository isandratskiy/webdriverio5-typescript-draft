class FileUploadPage {

    get open() {
        return browser.url('/upload');
    }

    get fileUploadInput() {
        return $('#file-upload');
    }

    get submitFileUpload() {
        return $('#file-submit');
    }

    get uploadStatus(): string {
        return $('h3').getText().trim();
    }

    uploadFile(filePath: String) {
        this.fileUploadInput.setValue(filePath);
        this.submitFileUpload.click();
    }

}

export default new FileUploadPage();