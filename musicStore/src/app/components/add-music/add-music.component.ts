import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Music } from 'src/app/models/music/music.module';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent {

  products :Music[] = []
  musicForm:FormGroup;

  constructor(fb:FormBuilder,private _service:MusicService,private _route:Router){
    this.musicForm = fb.group({
      title:['',Validators.required],
      price:[0,[Validators.required,Validators.min(0)]],
      buys:[0,[Validators.required,Validators.min(0)]],
      type:['',Validators.required],
      date:['',[Validators.required]]
    })
  }


  onAdd():void{
    // if(this.musicForm.valid){
      this._service.addPRoduct(this.musicForm.value).subscribe({
        next:(data)=>{
          console.log("PRODUCT ADDED WITH FOLLOWING DETAILS",data)
          this._route.navigate(['/'])
        }
      })
    // }
  }

}
