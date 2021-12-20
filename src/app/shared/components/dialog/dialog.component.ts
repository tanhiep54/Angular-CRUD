import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IListAction } from 'src/app/shared/ultils/layout.const';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor() {}
  @Input()
  public title: string = '';
  @Input()
  public listAction: IListAction[] = [];
  @Output()
  public _onClickCloseDialog: EventEmitter<any> = new EventEmitter();
  public onClickCloseDialog() {
    this._onClickCloseDialog.emit();
  }
  public onClickEmitAction(action: IListAction) {
    console.log(action);

    if (action.action) {
      action.action();
    }
  }

  ngOnInit(): void {}
}
