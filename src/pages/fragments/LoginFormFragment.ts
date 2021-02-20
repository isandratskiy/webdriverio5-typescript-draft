import allure from '@wdio/allure-reporter'

export class LoginFormFragment {
  private containerLocator: string

  constructor(containerLocator: string) {
    this.containerLocator = containerLocator
  }

  private get container() {
    return $(this.containerLocator)
  }

  private get username() {
    return this.container.$('#username')
  }

  private get password() {
    return this.container.$('#password')
  }

  private get submit() {
    return this.container.$('button.radius')
  }

  loginWith(username: string, password: string) {
    allure.addStep(`Login as: ${username} with password: ${password}`)
    this.username.setValue(username)
    this.password.setValue(password)
    this.submit.click()
    allure.endStep()
  }
}
