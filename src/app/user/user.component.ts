import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Recived changes from DB', changes);
        this.allUsers = changes;
        console.log(this.allUsers);
      });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  // deleteUser(index) {
  //   this.firestore
  //   .collection('users', allUsers[index].)
  // }
}
