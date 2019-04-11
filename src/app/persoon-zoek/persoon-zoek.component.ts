import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Persoon } from '../persoon';
import { PersoonService } from '../persoon.service';

@Component({
  selector: 'app-persoon-zoek',
  templateUrl: './persoon-zoek.component.html',
  styleUrls: ['./persoon-zoek.component.css']
})
export class PersoonZoekComponent implements OnInit {

  personen$: Observable<Persoon[]>;
  private zoekString = new Subject<string>();
  constructor(private persoonService: PersoonService) { }

  zoek(term: string): void {
    this.zoekString.next(term);
  }

  ngOnInit() {
    this.personen$ = this.zoekString.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.persoonService.zoekPersoon(term))
    );
  }

}
