import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  public onClickOpenDialog() {
    this.dialogService.addDialog('Thêm người dùng');
  }

  ngOnInit(): void {}
}
