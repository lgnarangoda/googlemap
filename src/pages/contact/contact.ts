import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {LatLng,Marker,MarkerOptions} from '@ionic-native/google-maps';
declare var google;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }
  ionViewDidLoad(){

    this.loadMap();
  }

  // loadMap(){
    
  //      let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    
  //      let mapOptions = {
  //        center: latLng,
  //        zoom: 15,
  //        mapTypeId: google.maps.MapTypeId.ROADMAP
  //      }
    
  //      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  //    }


 
  loadMap(){
 


    
  this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      // this.createMarker(latLng,"me").then((marker:Marker)=>{
      //   marker.showInfoWindow();
      // }).catch(err=>{
      //   console.log("marker error");
      // });




      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });  
 
  }

createMarker(latLng: LatLng, title: string){
  let markerOptions: MarkerOptions={
    position: latLng,
    title:title
  };
  return this.map.addListener(markerOptions);
}


  // addMarker(){
    
  //    let marker = new google.maps.Marker({
  //      map: this.map,
  //      animation: google.maps.Animation.DROP,
  //      position: this.map.getCenter()
  //    });
    
  //    let content = "<h4>Information!</h4>";         
    
  //    this.addInfoWindow(marker, content);
    
  //  }

  //  addInfoWindow(marker, content){
    
  //    let infoWindow = new google.maps.InfoWindow({
  //      content: content
  //    });
    
  //    google.maps.event.addListener(marker, 'click', () => {
  //      infoWindow.open(this.map, marker);
  //    });
    
  //  }


}
