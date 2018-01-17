import { ActivatedRoute } from '@angular/router'; //import para pegar a rota ativa

import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from './../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  //antes do ngOnInit ser chamado, a variavel restaurant é undefined oque gera um erro na hora de mostrar
  //seus atributos no template.Para corrigir isso é colocado uma ? depois do nome da variavel,
  //dessa forma o angular espera a variavel "carregar" para exibir os valores, caso ela nao seja carregada
  //ele nao mostra nada  ex:  {{restaurant?.name}}
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //chama o servico criado para consultar o back end
    //usamos o route fazendo um snapshot da rota ativa e pegando o parametro id que atribimos a rota
    //depois disso o subscribe escreve o resultado na variavel restaurant para poder mostrar
    //na tela
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(rest => this.restaurant = rest);

  }


}
