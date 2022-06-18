import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.page.html',
  styleUrls: ['./add-passenger.page.scss'],
})
export class AddPassengerPage implements OnInit {
  name: string;
  from: any;
  to: any;

  constructor(
    public store: AngularFirestore,
    public toastController: ToastController,
    public router: Router
    ) { }

  ngOnInit() {
  }
  save(){
    let place = (this.from + ' to ' + this.to);
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.store.collection('passenger').add({name : this.name, destination: place , date: date });
    this.message('Added');
    this.router.navigate(['/tabs/tab1']);
   console.log(place);
   console.log(date);
  }
  async message(data: any) {
    let toast = this.toastController.create({
      message: data,
      duration: 3000,
      position: 'bottom'
    });
    (await toast).present();
  }

}
