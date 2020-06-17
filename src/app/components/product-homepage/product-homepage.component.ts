import { Component, OnInit , Input } from '@angular/core';
import { product } from '../../models/product';
declare var $: any;

@Component({
  selector: 'app-product-homepage',
  templateUrl: './product-homepage.component.html',
  styleUrls: ['./product-homepage.component.css']
})
export class ProductHomepageComponent implements OnInit {

  @Input() product : product;
  @Input() index : number;
  constructor() {
   }

  ngOnInit() {
    
  }

  change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    //str = str.trim();

    str = str.split(' ').join('-');

    return str;
  }
  expendClick(rootId, expendId) {
    var check = $('#' + expendId).is(':visible');
    console.log(check);
    if (check) {
      $('#' + rootId).html('+').removeClass('expanded');
    } else {
      $('#' + rootId).text('–').addClass('expanded');
    }
    $('#' + expendId).toggle();

    $('#product-board').masonry();
  }

}
