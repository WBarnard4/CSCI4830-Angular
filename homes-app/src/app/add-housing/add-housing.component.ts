import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-add-housing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <section class="listing-apply">
          <h2 class="section-heading">Input New House Information</h2>
          <form [formGroup]="addForm" (submit)="submitApplication()">
            <label for="name">House Name</label>
            <input id="name" type="text" formControlName="name">

            <label for="city">City</label>
            <input id="city" type="text" formControlName="city">

            <label for="state">State</label>
            <input id="steate" type="text" formControlName="state">
            
            <label for="photo">Photo</label>
            <input id="photo" type="text" formControlName="photo">

            <label for="availableUnits">Available Units</label>
            <input id="availableUnits" type="number" formControlName="availableUnits">

            <label for="wifi">WiFi</label>
            <input id="wifi" type="checkbox" formControlName="wifi">

            <label for="laundry">Laundry</label>
            <input id="laundry" type="checkbox" formControlName="laundry">

            
            <button type="submit" class="primary">Add House</button>
          </form>
        </section>
    </article>
  `,
  styleUrls: ['./add-housing.component.css']
})
export class AddHousingComponent {
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  addForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    photo: new FormControl(''),
    availableUnits: new FormControl(0),
    wifi: new FormControl(false),
    laundry: new FormControl(false),
  });

  submitApplication() {
    this.housingService.addNewHouse(
       this.addForm.value.name ?? "",
       this.addForm.value.city ?? "",
       this.addForm.value.state ?? "",
       this.addForm.value.photo ?? "",
       this.addForm.value.availableUnits ?? 0,
       this.addForm.value.wifi ?? false,
       this.addForm.value.laundry ?? false,
    );
  }
}
