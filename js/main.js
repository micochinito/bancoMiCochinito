const getId = (id) => document.getElementById(id);

class MaquinaEscribir {
    constructor(Objeto) {
        [this.id, this.texto] = [Objeto.id, Objeto.texto];
        this.contador = this.texto.length;
        this.max = this.contador;
    }

    iniciarMaquina() {
        this.salida = getId(this.id);
        this.request = setInterval( () => this.loop(--this.contador), 60 );
    }
    loop(contador) {
        let letraActual = (-contador + (this.max-1)) % this.max;
        this.salida.innerHTML += this.texto[letraActual];

        if(contador <= 0) {
            window.clearInterval(this.request);
        }
    }

}

document
.querySelector('.botonLike')

.addEventListener('click', function increaseCount(evt) {

  var totalCountsEl =document.querySelector(".contador")
  var cliKCoustNumStr = totalCountsEl.textContent
  var cliKCoustNum = parseInt(cliKCoustNumStr)
  if (cliKCoustNum + 1 > 50000) {
    true
  }else{
    totalCountsEl.textContent = cliKCoustNum + 1
  }

})
