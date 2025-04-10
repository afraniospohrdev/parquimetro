function calcular() {

  this.valorPago = document.getElementById("valor").value;
  this.tempo = 0;
  this.valorPagar = 0;
  this._valorMinimo = 1.0;
  this._valorMáximo = 3.0;
  this.troco = 0;
  
    
  if (this.valorPago < this._valorMinimo) {
      document.getElementById("result").innerHTML = "Valor insuficiente";
      return;
   }

   if (this.valorPago >= 1 && this.valorPago < 1.75) {
      this.valorPagar = 1;
      this.tempo = 30;
  } else if (this.valorPago >= 1.75 && this.valorPago < 3) {
      this.valorPagar = 1.75;
      this.tempo = 60;
   } else if (this.valorPago >= 3.0) {
      this.valorPagar = 3.0;
      this.tempo = 120;
   }

  this.troco = this.valorPago - this.valorPagar;
  
  if (this.troco > 0) {
  document.getElementById("tempo").value = this.tempo;
  document.getElementById("result").innerHTML = `Você pagou o valor de R$ ${this.valorPagar} e tem direito a permanecer por ${this.tempo} minutos, com um troco de R$ ${this.troco}`;
  } else {
  document.getElementById("tempo").value = this.tempo;
  document.getElementById("result").innerHTML = `Você pagou o valor de R$ ${this.valorPagar} e tem direito a permanecer por ${this.tempo} minutos`;
  }
}