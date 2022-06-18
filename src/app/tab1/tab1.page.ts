import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // import angular firebase to make our firebase database
import { AlertController } from '@ionic/angular'; // import alert to use pop-up alert

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  passengerData: any;  // this will save the data's from firebase database
  name: string; // name string , it is string value for name data
  desitination: string; // same as destination it is string value
  date: any; // date is any cause date is followed by number so any value is recomended


  constructor( public store: AngularFirestore, public alertController: AlertController) {} // to use firebase in this tab1 page we have to import then add to constructor, and also alert dialog/pop-up message 
  
  
  ngOnInit(){ // when this page is used this function will initialize/load as whole page, data will appear when this page is loaded/reload
    this.store.collection('passenger').snapshotChanges().subscribe((res) => { // while this page is loaded or use, in this line, we get the all data list from the firebase databse
      this.passengerData = res.map(item => // then the data we collected from the firebase is saved in passsengerData variable 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data()) // the data form firebase is needed to be object to display
      );
      console.log(this.passengerData); // show the passenger data in console 
    })
  }
 info(id: string){ // if clicked the passsenger name this will opened
  this.store.collection('passenger').doc(id).valueChanges().subscribe(async (response) => { // then when clicked, this line will collect the data from firebase by its id of this person 
    let obj = JSON.parse(JSON.stringify(response)); // the data collected from this person, will need to parse or converted to object then stringify to convert into string value
    this.name = obj.name; // the data we collected form this user, then the name of this user will use to display in alert box
    this.desitination = obj.destination; // the data we collected form this user, then the destination data of this user will use to display in alert box
    this.date = obj.date; // the data we collected from this user, then the date (while adding passenger, we get the current time and date) of this user will use to display in alert box
    const alert = await this.alertController.create({ //this is pop-up alert box that will show the the passenger data,
      header: 'Passenger Information', // the header of alert box, the title
      message: 'Name: '+ this.name + '<br><br>' + 'Destination: '+ this.desitination + '<br><br>' + 'Date: ' + this.date, // this is the message of alert box, in this message will show the data of this passenger
      buttons: ['Close'], // close button
    });
    await alert.present();
  });
 

}


}
