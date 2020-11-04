import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  name: string;
  command: string;
  group: string;
  project: string;

  constructor(protected ref: NbDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
    this.name = '';
    this.command = '';
    this.group = '';
    this.project = '';
  }
  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close({
      name: this.name,
      command: this.command,
      group: this.group,
      project: this.project
    })
  }
}
