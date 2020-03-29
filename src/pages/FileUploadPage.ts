class FileUploadPage {
    get open() {
        return browser.url('/upload');
    }

    private get fileUploadInput() {
        return $('#file-upload');
    }

    private get submitFileUpload() {
        return $('#file-submit');
    }

    get uploadStatus(): string {
        return $('h3').getText().trim();
    }

    uploadFile(filePath: String): void {
        this.fileUploadInput.setValue(filePath);
        this.submitFileUpload.click();
    }
}

export default new FileUploadPage();