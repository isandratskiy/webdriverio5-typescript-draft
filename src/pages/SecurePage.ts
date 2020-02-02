import { FlashMessageFragment } from "./fragments/FlashMessageFragment";

class SecurePage {

    get flashMessage(): string {
        return new FlashMessageFragment().flashMessage;
    }
}

export default new SecurePage();