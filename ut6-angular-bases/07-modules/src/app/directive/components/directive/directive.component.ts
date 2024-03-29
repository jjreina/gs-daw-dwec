import { Component } from '@angular/core';

@Component({
  selector: 'app-components-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  public title: string = 'Directive IF Component';
  public title2: string = 'Directive Else Component';
  public directiveIfModern: string = 'Working with @if';
  public showNgIfText: boolean = false;
  public showIfText: boolean = false;

  public loginOld: boolean = false;
  public loginNew: boolean = false;

  public mouseOverParagraphNgIf(): void {
    this.showNgIfText = !this.showNgIfText;
    this.showIfText = false;
  }

  public mouseOverParagraphIf(): void {
    this.showNgIfText = false;
    this.showIfText = !this.showIfText;
  }

  public logInOld(value: string): void {
    this.loginOld = true;
    this.loginNew = false;
  }

  public logInNew(value: string): void {
    this.loginNew = true;
    this.loginOld = false;
  }
}
