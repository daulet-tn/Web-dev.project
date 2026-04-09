import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  standalone: true,
  templateUrl: './tours.html',
  styleUrl: './tours.css'
})
export class Tours {
  tours = [
    {
      id: 1,
      title: 'Almaty Mountains',
      description: 'Beautiful hiking tour in Almaty',
      location: 'Kazakhstan',
      price: 100,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
    },
    {
      id: 2,
      title: 'Tian Shan Adventure',
      description: 'Extreme mountain experience',
      location: 'Tian Shan',
      price: 200,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    }
  ];

  register(id: number) {
    console.log('Registered to tour', id);
  }
}