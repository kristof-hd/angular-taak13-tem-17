import { Component, OnInit } from '@angular/core';
import { Persoon } from '../persoon';
import { PersoonService } from '../persoon.service';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersonenComponent implements OnInit {
  personen: Persoon[];
  selectedPersoon: Persoon;
  nieuwePersoon: Persoon = new Persoon();

  constructor(private persoonService: PersoonService) {}

  onSelect(persoon: Persoon): void {
    this.selectedPersoon = persoon;
  }

  ngOnInit(): void {
    this.persoonService.getPersonen().subscribe(personen => this.personen = personen);
  }

  add(): void {
    if (!this.nieuwePersoon.firstName.trim() || !this.nieuwePersoon.surname.trim()
          || isNaN(this.nieuwePersoon.yearOfBirth)) { return; }
    this.persoonService.addPersoon({firstName: this.nieuwePersoon.firstName,
      surname: this.nieuwePersoon.surname, yearOfBirth: this.nieuwePersoon.yearOfBirth} as Persoon)
      .subscribe(persoon => { this.personen.push(persoon); });
  }

  delete(persoon: Persoon): void {
    this.personen = this.personen.filter(p => p !== persoon);
    this.persoonService.deletePersoon(persoon).subscribe();
  }

}
