import { Component, OnInit , AfterViewInit, Input} from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-main-img-sider',
  templateUrl: './main-img-sider.component.html',
  styleUrls: ['./main-img-sider.component.css']
})
export class MainImgSiderComponent implements AfterViewInit {


  @Input('images') 
  images = [];

  constructor() { }

  ngAfterViewInit() {

    $('.main-imgs').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-fade',
      // other options
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      callbacks: {
        open: function () {
          $('header').css('z-index', 100);
        },
        close: function () {
          $('header').css('z-index', 1030);
        }
      }
    });

  }


  changeImage(imgToShow) {
      if ($('.main-imgs img:visible').prop('id') != imgToShow) {
        $('.main-imgs img:visible').fadeOut(function () {
          $('#' + imgToShow).fadeIn();
        });
      }
  }
}
