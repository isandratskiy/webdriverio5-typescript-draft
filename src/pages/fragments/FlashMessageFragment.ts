export class FlashMessageFragment {
  get flashMessage(): string {
    return $('#flash-messages').getText().trim()
  }
}

export default new FlashMessageFragment()
