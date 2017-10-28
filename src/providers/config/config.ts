import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide:false,
    name: "",
    username: ""
  }
  constructor() {
  
  }

  //  Recupera dados do localStorage
  getConfigData():any{
    return localStorage.getItem("config");
  }

  // Grava dados do localStorage
  setConfigData(showSlide?:boolean, name?:String, username?:String){
    let config = {
      showSlide:false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(username){
      config.username = username;
    }

    localStorage.setItem("config", JSON.stringify(config));
  }
}
