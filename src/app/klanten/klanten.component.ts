import { Component, OnInit } from '@angular/core';
import { Persoon } from '../persoon';
import { PersoonService } from '../persoon.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.css']
})
export class KlantenComponent implements OnInit {

  personen: Persoon[] = [];

  constructor(private persoonService: PersoonService) { }

  ngOnInit() {
    this.persoonService.getKlanten().subscribe(klanten => this.personen = klanten);
  }

}
