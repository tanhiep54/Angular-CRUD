import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IListAction, ETypeClass } from 'src/app/shared/ultils/layout.const';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(private activeModal: NgbActiveModal) {}

  public title: string = '';
  public textContent: string = '';
  public onClickCloseModal = () => {
    this.activeModal.dismiss();
  };
  public onClickDeleteUser = () => {
    this.activeModal.dismiss();
  };
  public listAction: IListAction[] = [
    {
      textBtn: 'ĐÓNG',
      classBtn: ETypeClass.LIGHT,
      action: this.onClickCloseModal,
    },
    {
      textBtn: 'XÓA',
      classBtn: ETypeClass.DANGER,
      action: this.onClickDeleteUser,
    },
  ];

  ngOnInit(): void {}
}
