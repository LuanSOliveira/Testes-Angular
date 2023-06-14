import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScroll();
  }

  scrollToTop():void{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  showScroll():boolean{
    if(window.scrollY > 300){
      return true
    }
    else{
      return false
    }
  }

}
