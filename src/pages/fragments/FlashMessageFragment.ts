export class FlashMessageFragment {

    get flashMessage(): string {
        return $('#flash-messages').getText();
    }
}

export default new FlashMessageFragment();``