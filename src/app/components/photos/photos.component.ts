import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import {Photo} from '../../models/Photo'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:Photo[] = []

  constructor(public photosService:PhotosService) { }

  ngOnInit(){
    this.photosService.getPhotos()
    .subscribe(
      photos => {
        this.photos = photos
        console.log(photos)
      },
      error => console.log(error)
    )
  }

}
