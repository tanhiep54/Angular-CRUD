import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  public title: string = '';
  public onClickCloseModal() {
    this.activeModal.dismiss();
  }

  ngOnInit(): void {}
}
