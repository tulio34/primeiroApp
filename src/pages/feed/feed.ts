import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo_feed:"Primeiro Usuário Cadastrado",
    data_feed:"Novembro, 5, 1995",
    descricao_feed:"Estou criando um app massa, essa é a minha descrição",
    qtd_likes_feed:1200,
    qtd_comentario_feed: 100,
    time_comment_feed:"11h atrás"
  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider  
  ) {
  }

  public somaDoisNumeros(num1:number, num2:number) :void{
    alert(num1 + num2)
  }

  ionViewDidLoad() {
   this.movieProvider.getLatesMovies().subscribe(
     data=>{
       const response = (data as any);
       const objeto_retorno = JSON.parse (response._body);
       this.lista_filmes = objeto_retorno.results;
      console.log(objeto_retorno);
     },error=>{
       console.log(error);
     }
    )
  }
}
