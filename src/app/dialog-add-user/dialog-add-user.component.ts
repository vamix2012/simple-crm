import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  
  birthDate: Date;
  user: User = new User();
  loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('Adding user finished'+ result);
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
