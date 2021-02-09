import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Employees} from '../component-models/users-model/user.model';
import {NbDialogService, NbToastrService, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {HttpService} from '../../services/http.service';

import {select, Store} from '@ngrx/store';
import {AppGrumatoState} from '../../store/app-grumato.state';
// import {DataState} from '../components-state/data.state';
// import {selectUsers} from '../components-state/data.selector';
import {UserCardsWindowComponent} from '../modals/user-cards-window/user-cards-window.component';
import {CreateUserComponent} from '../add-data-modal-window/create-user/create-user.component';
import {SaveUsers} from '../components-store/components.action';



export class BaseResponse {
  status: string;
  code: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  customColumn = 'Name';
  defaultColumns = ['Command', 'Group', 'Project'];


  users: Employees[] = [];
  surname: string = '';
  name: string = '';
  patronymic: string = '';
  phoneNumber: string = '';
  direction: string = '';


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Employees>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              private store: Store<AppGrumatoState>,
              private toast: NbToastrService,
              private postService: HttpService) {
  }

  ngOnInit(): void {
    this.postService.getUsers().subscribe(value => {
      let parse = JSON.parse((value as BaseResponse).status);
      parse.map(testParse => {
        let parse1 = JSON.parse(testParse) as Employees;
        let employeeCode = parse1.employeeCode;
        this.users.push({
          employeeCode: employeeCode,
          surname: parse1.surname,
          phoneNumber: parse1.phoneNumber,
          patronymic: parse1.patronymic,
          direction: parse1.direction,
          name: parse1.name
        })
      })
    });
  }

  onAddWorker() {
    let newUser: Employees;
    this.dialogService.open(CreateUserComponent).onClose.subscribe(value => {
      if (value) {
        newUser = {
          surname: value.surname,
          name: value.name,
          patronymic: value.patronymic,
          phoneNumber: value.phoneNumber,
          direction: value.direction,
          // role: value.role
        };
        for (let user of this.users) {
          if (user.name == newUser.name) {
            // ToDo change to filter in backend part
            this.toast.danger('Такой пользователь существует', 'Внимание');
            return;
          }
        }
        this.users.push(
          {
            employeeCode: value.employeeCode,
            surname: value.surname,
            name: value.name,
            patronymic: value.patronymic,
            phoneNumber: value.phoneNumber,
            direction: value.direction,
          }
        );
        this.cdr.detectChanges();
        this.postService.postUsers(newUser).subscribe(value => console.log(value));
        this.store.dispatch(new SaveUsers(newUser));
      }
    });
  }

  showWorkerInformation(currentUser: Employees) {
    let newUser: Employees;
    this.dialogService.open(UserCardsWindowComponent, {
      context: {
        user: currentUser
      }
    }).onClose.subscribe(value => {
      if (value) {
        newUser = {
          employeeCode: value.user.employeeCode,
          surname: value.user.surname,
          name: value.user.name,
          patronymic: value.user.patronymic,
          phoneNumber: value.user.phoneNumber,
          direction: value.user.direction,
        };
        this.postService.postUsers(newUser).subscribe(value => console.log(value));
      }
    });
  }

  // refactorWorker() {
  //   let newUser: Employees;
  //   this.dialogService.open(CreateUserComponent).onClose.subscribe(value => {
  //     if (value) {
  //       newUser = {
  //         surname: value.surname,
  //         name: value.name,
  //         patronymic: value.patronymic,
  //         phoneNumber: value.phoneNumber,
  //         direction: value.direction,
  //         // role: value.role
  //       };
  //     }
  //   });
  // }

  onDelete(data: Employees) {
    for (let item = 0; item < this.users.length; item++) {
      if (this.users[item].name == data.name) {
        this.users.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteUser(data).subscribe(value => console.log(value));
  }
}

