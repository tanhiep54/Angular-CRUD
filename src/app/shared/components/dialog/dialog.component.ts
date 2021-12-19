import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}
}
