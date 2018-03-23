import { Component,ElementRef,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_canvas') mapElement: ElementRef;
  map: GoogleMap;
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }
 ionViewDidLoad() {
    this.loadMap();
   }

   loadMap() {
    
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: 43.0741904,
              lng: -89.3809802
            },
            zoom: 18,
            tilt: 30
          }
        };



        this.geolocation.getCurrentPosition().then((position) => {
          
               let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          
               let mapOptions = {
                 center: latLng,
                 zoom: 15,
                 mapTypeId: google.maps.MapTypeId.ROADMAP
               }
          
               this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          
             }, (err) => {
               console.log(err);
             });








        // this.map = GoogleMaps.create('map_canvas', mapOptions);
        
        //     // Wait the MAP_READY before using any methods.
        //     this.map.one(GoogleMapsEvent.MAP_READY)
        //       .then(() => {
        //         console.log('Map is ready!');
        
        //         // Now you can use all methods safely.
        //         this.map.addMarker({
        //             title: 'Ionic',
        //             icon: 'blue',
        //             animation: 'DROP',
        //             position: {
        //               lat: 43.0741904,
        //               lng: -89.3809802
        //             }
        //           })
        //           .then(marker => {
        //             marker.on(GoogleMapsEvent.MARKER_CLICK)
        //               .subscribe(() => {
        //                 alert('clicked');
        //               });
        //           });
        
        //       });
          }
}
