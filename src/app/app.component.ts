import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Mi primer App ANGULAR';
  public ArregloTarjetas: Tarjeta[] = [];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      { titulo: 'Video 1', subtitulo: 'Subtitulo Video 1', image: 'https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400' },
      { titulo: 'Video 2', subtitulo: 'Subtitulo Video 2', image: 'https://previews.123rf.com/images/bahtiarmaulana/bahtiarmaulana2204/bahtiarmaulana220400040/185159316-rebanada-de-dibujos-animados-de-pizza-ilustraci%C3%B3n-de-dibujos-animados-vectoriales-im%C3%A1genes.jpg' },
      { titulo: 'Video 3', subtitulo: 'Subtitulo Video 3', image: 'https://cdn2.hubspot.net/hubfs/2627652/Imagenes-redes-sociales-blog-post.jpg' },
    ];
  }
}
