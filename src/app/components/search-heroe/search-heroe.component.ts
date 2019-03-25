import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-search-heroe',
	templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {

	heroes:any = [];
	termino:string = '';

	constructor(private activateRoute:ActivatedRoute,
		private _heroesService:HeroesService){ 
			this.activateRoute.params.subscribe(params => {
			this.termino = params['termino'];
			this.heroes = _heroesService.buscarHeroes(params['termino']);
		});
	}

	ngOnInit() {


	}
}