import { Component, OnInit } from '@angular/core';
import { Persoon } from '../persoon';
import { PersoonService } from '../persoon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persoon-details',
  templateUrl: './persoon-details.component.html',
  styleUrls: ['./persoon-details.component.css']
})
export class PersoonDetailsComponent implements OnInit {

  persoon: Persoon;

  constructor(private persoonService: PersoonService, private route: ActivatedRoute, 
              private location: Location) {}

  ngOnInit() {
    this.getPersoon();
  }

  getPersoon() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.persoonService.getPersoon(id).subscribe(persoon => this.persoon = persoon);
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.persoonService.updatePersoon(this.persoon).subscribe(() => this.goBack());
  }
}
