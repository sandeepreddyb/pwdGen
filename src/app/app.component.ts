import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwdGen';
  password='';
  includeLetters=false;
  includeNumbers=false;
  includeSymbols = false;
  passwordLen=0;

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement
    const parsedValue = parseInt(target.value);
    if(!isNaN(parsedValue) ){
      this.passwordLen = parsedValue;
    }
    else{
      this.passwordLen=0;
    }
}

  

  getPassword(){
    return this.password;
  }

  OnChangeUseLetter(){
      this.includeLetters =!this.includeLetters;
  }
  OnChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
}
  OnChangeUseNumbers(){
      this.includeNumbers= !this.includeNumbers;
  }
  
  onButtonClick(){
    console.log("Button was clicked");
    const numbers = '123456789';
    const letters= 'abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$%^&*()'
    let validChars='';
    if(this.includeLetters){
      validChars+=letters;
    }
    if(this.includeSymbols){
      validChars+=symbols;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    console.log(validChars);
    let generatedPassword='';
    for(let i= 0;i< this.passwordLen; i++){
      const index = Math.floor(Math.random()* validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;
    console.log(this.password);
  }
  
}
