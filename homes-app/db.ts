import Dexie, { type EntityTable } from 'dexie';
import { HousingLocation } from 'src/app/housing-location';

// Create database
const db = new Dexie('LocationsDB') as Dexie & {
    locations: EntityTable<HousingLocation, 'id'>;
};

db.version(1).stores({
    locations: '++id'
});

// Populate data on first run
db.on('populate', async () => {
    await db.locations.bulkAdd([
        {
            name: 'Acme Fresh Start Housing',
            city: 'Chicago',
            state: 'IL',
            photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
            availableUnits: 4,
            wifi: true,
            laundry: true
        },
        {
            name: 'A113 Transitional Housing',
            city: 'Santa Monica',
            state: 'CA',
            photo: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
            availableUnits: 0,
            wifi: false,
            laundry: true
        },
        {
            name: 'Warm Beds Housing Support',
            city: 'Juneau',
            state: 'AK',
            photo: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
            availableUnits: 1,
            wifi: false,
            laundry: false
        },
        {
            name: 'Homesteady Housing',
            city: 'Chicago',
            state: 'IL',
            photo: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
            availableUnits: 1,
            wifi: true,
            laundry: false
        },
        {
            name: 'Happy Homes Group',
            city: 'Gary',
            state: 'IN',
            photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
            availableUnits: 1,
            wifi: true,
            laundry: false
        },
        {
            name: 'Hopeful Apartment Group',
            city: 'Oakland',
            state: 'CA',
            photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
            availableUnits: 2,
            wifi: true,
            laundry: true
        },
        {
            name: 'Seriously Safe Towns',
            city: 'Oakland',
            state: 'CA',
            photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
            availableUnits: 5,
            wifi: true,
            laundry: true
        },
        {
            name: 'Hopeful Housing Solutions',
            city: 'Oakland',
            state: 'CA',
            photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
            availableUnits: 2,
            wifi: true,
            laundry: true
        },
        {
            name: 'Seriously Safe Towns',
            city: 'Oakland',
            state: 'CA',
            photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
            availableUnits: 10,
            wifi: false,
            laundry: false
        },
        {
            name: 'Capital Safe Towns',
            city: 'Portland',
            state: 'OR',
            photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
            availableUnits: 6,
            wifi: true,
            laundry: true
        }
    ]);
});

export {db};