import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public title: string = '';
  public onClickCloseModal() {
    this.activeModal.dismiss();
  }
}
