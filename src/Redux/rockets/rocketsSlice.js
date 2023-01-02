import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Falcon 1',
    description: 'Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
    flickr_images: [
      'https://farm9.staticflickr.com/8166/7121865553_e863f1e7c0_b.jpg',
      'https://farm1.staticflickr.com/33/45336904_1aef569b30_o.jpg',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Dragon_SpaceX',
  },
  {
    id: 2,
    name: 'Falcon 9',
    description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    flickr_images: [
      'https://farm2.staticflickr.com/1466/23898653041_3dd203fe1b_b.jpg',
      'https://farm2.staticflickr.com/1562/25125530524_02f8c2a5c3_b.jpg',
      'https://farm2.staticflickr.com/1627/25125530864_0c4b0f3d42_b.jpg',
      'https://farm2.staticflickr.com/1661/25189273053_0a7c2d4a6f_b.jpg',
      'https://farm2.staticflickr.com/1639/25189273113_5f0a3a9d5a_b.jpg',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
  },
  {
    id: 3,
    name: 'Falcon Heavy',
    description: 'Falcon Heavy is a heavy-lift launch vehicle designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    flickr_images: [
      'https://farm2.staticflickr.com/1417/1430198323_c26451b047_b.jpg',
      'https://farm2.staticflickr.com/1461/24340510689_646f3a7b68_b.jpg',
      'https://farm2.staticflickr.com/1442/23898653011_b3f7c725f2_b.jpg',
      'https://farm2.staticflickr.com/1488/24340510919_5e64c538be_b.jpg',
    ],
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
  },
];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;
