import { expect } from "chai";
import {path} from "src/resources";
import FileUploadPage from "src/pages/FileUploadPage";

describe('File upload', () => {
	const filePath = path('hello_world.txt');

	it('is successful', () => {
		FileUploadPage.open;
		FileUploadPage.uploadFile(filePath);

		expect(FileUploadPage.uploadStatus).to.contain('File Uploaded!');
	});
});