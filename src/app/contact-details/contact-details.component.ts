import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

}
