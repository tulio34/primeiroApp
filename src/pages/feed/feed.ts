import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {.
  public objeto_feed = {
    titulo_feed:"Primeiro Usuário Cadastrado",
    data_feed:"Novembro, 5, 1995",
    descricao_feed:"Estou criando um app massa, essa é a minha descrição",
    qtd_likes_feed:12,
    qtd_comentario_feed: 4,
    time_comment_feed:"11h atrás"
  }

  public nome_usuario:string = "Usuário do Sistema";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number) :void{
    alert(num1 + num2)
  }

  ionViewDidLoad() {
   // this.somaDoisNumeros(10, 99);
  }

}
