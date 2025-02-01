import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Music } from 'src/app/models/music/music.module';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent  implements OnInit{
  
  p:any
  id:any

  constructor(private _service:MusicService,private _ar:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    console.log(this.id)
    console.log("route:",this._ar)
    this.id =+ this._ar.snapshot.paramMap.get('id')!
    

    this._service.getProductById(this.id).subscribe({
      next:(res)=>{
        this.p = res
      }
    })
  }

  // onview():void{

  // }

}
