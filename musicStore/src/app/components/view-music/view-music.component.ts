import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from 'src/app/models/music/music.module';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-view-music',
  templateUrl: './view-music.component.html',
  styleUrls: ['./view-music.component.css']
})
export class ViewMusicComponent implements OnInit {

  musicArray: Music[] = []
  fr:Music[] =[]
  term:any 
  sortBy:any = "title"
  filterBy:any = "All"

  isAscending:boolean = true


  constructor(private _service:MusicService,private _router:Router ){

  }


  ngOnInit(): void {
    this._service.getProducts().subscribe({
      next:(res)=>{
        this.musicArray = res
        this.fr = [...this.musicArray]
        console.log(res)
        // this.sortProduct()
      }
    })
  }


  onDelete(id:number):void{
    this._service.deleteById(id).subscribe(()=>{
      this.fr = this.musicArray.filter(m=> m.id != id)
    })
  }

  onUpdate(id:number):void{
    this._router.navigate([`edit-music/${id}`])
  }

  onView(id:number):void{
    this._router.navigate([`view-music/${id}`])
  }


  // Searching

  search():void{
    if(this.term){
      this.fr = this.musicArray.filter((p)=>{
        return p.title.toLowerCase().includes(this.term) || p.type.toLowerCase().includes(this.term) //|| p.date.toLocaleDateString() > this.term.toLocaleDateString()
      })
    }else{
      this.fr = [...this.musicArray]
    }
  }

  //
  toggle():void{
    console.log(this.isAscending)
    this.isAscending = !this.isAscending 
    this.sortProduct()
  }
  //

  sortProduct():void{
    if((this.sortBy="type" )||  ( this.sortBy="title")){
      this.fr.sort((a:any,b:any)=>{
        if(this.isAscending){
          console.log("a----",a)
          console.log("b----",b)
          return a[this.sortBy].localeCompare(b[this.sortBy]);
        }else{
          console.log("a----",a)
          console.log("b----",b)
          return b[this.sortBy].localeCompare(a[this.sortBy]);
        }
      })
    } else{
      this.fr.sort((a:any,b:any)=>{
        if(this.isAscending) return a[this.sortBy] < b[this.sortBy]?-1:1;
        else {
          console.log("a----",a)
          console.log("b----",b)
          return b[this.sortBy] > a[this.sortBy]?1:-1;
        }
      })
    }
    


  }


  filterProducts():void{
    if(this.filterBy ==="title" ){
      this.fr = this.musicArray.filter((p)=> p.title === "title")
      
    }
  }

}
