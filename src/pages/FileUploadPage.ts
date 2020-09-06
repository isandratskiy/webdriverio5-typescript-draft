import {Page} from 'src/pages/Page';

class FileUploadPage extends Page {

    open() {
        return super.open('/upload');
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

    uploadFile(filePath: string): void {
        this.fileUploadInput.setValue(filePath);
        this.submitFileUpload.click();
    }
}

export default new FileUploadPage();
