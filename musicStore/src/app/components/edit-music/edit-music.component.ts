import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css']
})
export class EditMusicComponent implements OnInit{

  musicForm : FormGroup 

  id:any

  constructor(fb:FormBuilder,private _service:MusicService,private _route:Router,private _ar:ActivatedRoute){

      this.musicForm = fb.group({
          title:['',Validators.required],
              price:[0,[Validators.required,Validators.min(0)]],
              buys:[0,[Validators.required,Validators.min(0)]],
              type:['',Validators.required],
              date:['',[Validators.required]]
      })


  }

  ngOnInit(): void {
    // this.id =+ this._ar.snapshot.paramMap

    this.id =+ this._ar.snapshot.paramMap.get('id')!

    this._service.getProductById(this.id).subscribe({
      next:(res)=>{
        this.musicForm.patchValue(res)
      }
    })
  }

  onUpdate():void{
    this._service.updateById({...this.musicForm.value,id:this.id}).subscribe({
      next:(res)=>{
        console.log("Produt update with id:",this.id,"The updated object is:",this.musicForm.value)
        this._route.navigate([''])
      }
    })
  }


}
