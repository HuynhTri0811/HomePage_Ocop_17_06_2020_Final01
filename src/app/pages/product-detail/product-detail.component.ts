import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { callServiceHttp } from '../../settings/utils';
import { ResultInfo } from '../../models/data.models';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements AfterViewInit {


  infos: any;

  constructor(private dataService: DataService, private router: ActivatedRoute) { }

  ngOnInit() {
    $("body").removeClass('product-board');
    $("body").removeClass('product-page');

    $("body").addClass('product-page');
    var productId = this.router.snapshot.params.id;

    callServiceHttp(this.dataService.getDetail(productId), (p: ResultInfo) => {
      this.infos = p.reply;
    });


  }

  ngAfterViewInit() {


  }

  showTab(idtab) {
    console.log(idtab);
    $('#' + idtab).tab('show');
  }

}
