import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public image?: string;
  public Titulo: string = 'curso de Youtube';
  @Input() dataEntrante: any;

  constructor() {}

  ngOnInit(): void {
    this.image =
      'https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg';
  }
}
