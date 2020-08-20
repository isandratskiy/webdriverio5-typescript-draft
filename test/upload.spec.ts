import {expect} from 'chai';
import FileUploadPage from 'src/pages/FileUploadPage';
import {path} from 'src/resources';

describe('File upload', () => {
    const filePath = path('hello_world.txt');

    it('is successful', () => {
        FileUploadPage.open;
        FileUploadPage.uploadFile(filePath);
        expect(FileUploadPage.uploadStatus).to.contain('File Uploaded!');
    });
});