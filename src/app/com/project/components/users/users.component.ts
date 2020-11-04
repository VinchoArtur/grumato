import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UsersEntry} from '../component-models/users-model/user.model';
import {NbDialogService, NbToastrService, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {HttpService} from '../../services/http.service';
import {CreateUserComponent} from '../add-data-modal-window/create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  customColumn = 'Name';
  defaultColumns = ['Command', 'Group', 'Project'];
  allColumns = [this.customColumn, ...this.defaultColumns];


  // users$ = this.store.pipe(select(selectUsers));
  users:UsersEntry[] = [];
  userName:string = '';
  userGroup: string = '';
  userComand: string = '';
  userProject: string = '';


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<UsersEntry>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              // private store: Store<AppState>,
              private toast: NbToastrService,
              private postService: HttpService) {
    // this.users$.subscribe(user => {
    //   this.users = user;
    //   if (this.users.length >0) {
    //     for(let user of this.users){
    //       this.userName = user.name;
    //       this.userGroup = user.Group;
    //       this.userComand = user.Command;
    //       this.userProject = user.Project;
    //     }
    //   }
    //
    // })
  }

  ngOnInit(): void {
  }

  onSave(){
    console.log(this.users);
    this.toast.success("Сохранено", "Сохранение");
    this.postService.postUsers(this.users).subscribe(value => {
      console.log(value);
    });
    // this.store.dispatch(new SaveUsers(this.users));
  }



  onAddWorker() {
    this.dialogService.open(CreateUserComponent).onClose.subscribe(value => {
      let newUser:UsersEntry = {
        name: value.name,
        Command: value.command,
        Group: value.group,
        Project: value.project
      };
      for (let user of this.users) {
        if (user.name == newUser.name) {
          this.toast.danger("Такой пользователь существует", "Внимание");
          return;
        }
      }
      this.users.push(
        {name: value.name, Command: value.command, Group: value.group, Project: value.project}
      );
      console.log(this.users);
      this.cdr.detectChanges();
      this.postService.postUsers(this.users).subscribe(value => {
        console.log(value);
      });
    });
    console.log(this.users)

  }

  onDelete(data: UsersEntry) {
    for (let item = 0; item< this.users.length; item++) {
      if (this.users[item].name == data.name) {
        this.users.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteUser(data).subscribe(value => console.log(value))
  }
}
