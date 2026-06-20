import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { last } from 'rxjs';
import { db } from 'db';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    // const data = await fetch(this.url);
    const data = await db.locations.toArray();
    return await data ?? [];
  }

  async getHousingLocationById(id:Number) : Promise<HousingLocation | undefined> {
    // const data = await fetch(`${this.url}/${id}`);
    const data = await db.locations.get(id);
    // TODO: Return data at provided id, should be easy, just get(id) or something
    return await data ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  async addNewHouse(
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean,) {

    await db.locations.add({
      name: name,
      city: city,
      state: state,
      photo: photo,
      availableUnits: availableUnits,
      wifi: wifi,
      laundry: laundry,
    });
  }

  async removeHome(id: number) {
    await db.locations.delete(id);
  }
}
