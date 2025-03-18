export interface Park {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  attractions: Attraction[];
}

export interface Attraction {
  name: string;
  type: 'restaurant' | 'museum' | 'shopping' | 'entertainment';
  coordinates: [number, number];
  description: string;
}

export const parks: Park[] = [
  {
    id: 'cerro-volador',
    name: 'Cerro El Volador',
    coordinates: [-75.5833, 6.2606],
    description: 'The largest urban park in Medellín, offering panoramic city views, hiking trails, and archaeological sites. A protected natural and cultural heritage site.',
    attractions: [
      {
        name: 'Mirador El Volador',
        type: 'entertainment',
        coordinates: [-75.5828, 6.2612],
        description: 'Scenic viewpoint offering 360-degree views of Medellín'
      },
      {
        name: 'Archaeological Site',
        type: 'museum',
        coordinates: [-75.5835, 6.2608],
        description: 'Pre-Hispanic archaeological remains and cultural heritage site'
      }
    ]
  },
  {
    id: 'parque-arvi',
    name: 'Parque Arví',
    coordinates: [-75.5006, 6.2847],
    description: 'A vast ecological park accessible by cable car, offering hiking trails, bike rentals, and outdoor activities.',
    attractions: [
      {
        name: 'Cable Car Station',
        type: 'entertainment',
        coordinates: [-75.5006, 6.2847],
        description: 'Scenic cable car ride connecting to the city'
      },
      {
        name: 'Mercado Arví',
        type: 'shopping',
        coordinates: [-75.4989, 6.2842],
        description: 'Local market with fresh produce and crafts'
      }
    ]
  },
  {
    id: 'parque-norte',
    name: 'Parque Norte',
    coordinates: [-75.5697, 6.2728],
    description: 'Large amusement park with rides, attractions, and green spaces. Adjacent to the Universidad de Antioquia.',
    attractions: [
      {
        name: 'Amusement Rides',
        type: 'entertainment',
        coordinates: [-75.5697, 6.2728],
        description: 'Various rides and attractions for all ages'
      },
      {
        name: 'Planetario de Medellín',
        type: 'museum',
        coordinates: [-75.5686, 6.2721],
        description: 'Modern planetarium offering astronomical shows and exhibits'
      }
    ]
  },
  {
    id: 'jardin-botanico',
    name: 'Jardín Botánico',
    coordinates: [-75.5636, 6.2707],
    description: 'Beautiful botanical garden featuring native Colombian flora and the iconic Orchideorama.',
    attractions: [
      {
        name: 'Restaurante In Situ',
        type: 'restaurant',
        coordinates: [-75.5634, 6.2705],
        description: 'Elegant restaurant within the gardens'
      },
      {
        name: 'Parque Explora',
        type: 'museum',
        coordinates: [-75.5657, 6.2702],
        description: 'Interactive science museum and aquarium'
      }
    ]
  },
  {
    id: 'cerro-nutibara',
    name: 'Cerro Nutibara',
    coordinates: [-75.5786, 6.2447],
    description: 'Historic hill park featuring Pueblito Paisa (a replica of a traditional Antioquian town) and spectacular city views.',
    attractions: [
      {
        name: 'Pueblito Paisa',
        type: 'entertainment',
        coordinates: [-75.5786, 6.2447],
        description: 'Traditional Antioquian village recreation with restaurants and craft shops'
      },
      {
        name: 'Mirador de Nutibara',
        type: 'entertainment',
        coordinates: [-75.5788, 6.2445],
        description: 'Observation point with panoramic views of the city'
      }
    ]
  },
  {
    id: 'parque-lleras',
    name: 'Parque Lleras',
    coordinates: [-75.5721, 6.2089],
    description: 'Popular park in El Poblado, surrounded by restaurants, bars, and nightlife.',
    attractions: [
      {
        name: 'Pergamino Café',
        type: 'restaurant',
        coordinates: [-75.5728, 6.2092],
        description: 'Popular specialty coffee shop'
      },
      {
        name: 'Charlee Lifestyle',
        type: 'entertainment',
        coordinates: [-75.5718, 6.2087],
        description: 'Upscale rooftop bar and hotel'
      }
    ]
  },
  {
    id: 'parque-linear-presidenta',
    name: 'Parque Linear La Presidenta',
    coordinates: [-75.5766, 6.2103],
    description: 'Linear park along La Presidenta stream, offering walking trails, exercise stations, and green spaces in El Poblado.',
    attractions: [
      {
        name: 'Mercado del Río',
        type: 'restaurant',
        coordinates: [-75.5775, 6.2107],
        description: 'Gourmet food market with multiple restaurants'
      },
      {
        name: 'Fitness Stations',
        type: 'entertainment',
        coordinates: [-75.5760, 6.2101],
        description: 'Outdoor exercise equipment and walking trails'
      }
    ]
  },
  {
    id: 'parque-frontera',
    name: 'Parque Ambiental La Frontera',
    coordinates: [-75.5491, 6.2306],
    description: 'An ecological park in the southeast of Medellín, featuring hiking trails, native forest, and stunning valley views. Important for environmental conservation.',
    attractions: [
      {
        name: 'Mirador La Frontera',
        type: 'entertainment',
        coordinates: [-75.5489, 6.2308],
        description: 'Viewpoint overlooking the Aburrá Valley and eastern mountains'
      },
      {
        name: 'Sendero Ecológico',
        type: 'entertainment',
        coordinates: [-75.5493, 6.2304],
        description: 'Nature trail through native forest with educational stations'
      }
    ]
  },
  {
    id: 'cerro-pan-azucar',
    name: 'Cerro Pan de Azúcar',
    coordinates: [-75.5452, 6.2890],
    description: 'Iconic hill and ecological park offering panoramic views, hiking trails, and important ecological conservation area.',
    attractions: [
      {
        name: 'Mirador Pan de Azúcar',
        type: 'entertainment',
        coordinates: [-75.5450, 6.2892],
        description: 'Summit viewpoint with spectacular city views'
      },
      {
        name: 'Estación Metrocable',
        type: 'entertainment',
        coordinates: [-75.5447, 6.2885],
        description: 'Cable car station connecting to the city transport system'
      }
    ]
  },
  {
    id: 'parque-asomadera',
    name: 'Cerro La Asomadera',
    coordinates: [-75.5611, 6.2392],
    description: 'Urban forest park with walking trails, exercise stations, and great views of the city center. Important green lung of central Medellín.',
    attractions: [
      {
        name: 'Mirador Asomadera',
        type: 'entertainment',
        coordinates: [-75.5609, 6.2394],
        description: 'Observation point with views of downtown Medellín'
      },
      {
        name: 'Gimnasio al Aire Libre',
        type: 'entertainment',
        coordinates: [-75.5613, 6.2390],
        description: 'Outdoor gym equipment and exercise areas'
      }
    ]
  }
]; 