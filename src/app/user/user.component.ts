import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private dialogService: DialogService) {}

  public onClickOpenDeleteDialog() {
    this.dialogService.deleteDialog(
      'Xóa người dùng',
      'Bạn có muốn xóa không !'
    );
  }

  public onClickOpenEditDialog() {
    this.dialogService.editDialog('Sửa người dùng');
  }
}
