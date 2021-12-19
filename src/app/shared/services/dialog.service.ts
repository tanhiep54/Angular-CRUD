import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDialogComponent } from 'src/app/shared/components/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from 'src/app/shared/components/edit-dialog/edit-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private modalService: NgbModal) {}

  private dialogCommon(component: any, size: string = 'lg') {
    const modalRef = this.modalService.open(component, { size });
    return modalRef;
  }
  public addDialog(title: string) {
    const modalRef = this.dialogCommon(AddDialogComponent);
    modalRef.componentInstance.title = title;
    return modalRef;
  }
  public editDialog(title: string) {
    const modalRef = this.dialogCommon(EditDialogComponent);
    modalRef.componentInstance.title = title;
    return modalRef;
  }
  public deleteDialog(title: string) {
    const modalRef = this.dialogCommon(DeleteDialogComponent);
    modalRef.componentInstance.title = title;
    return modalRef;
  }
}
