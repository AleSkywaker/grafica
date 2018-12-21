export class GraficaData {
  private meses: string[] = ["enero", "febrero", "marzo", "abril", "mayo"];
  private valores: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  getDataGrafica() {
    return [{ data: this.valores, label: "Ventas" }];
  }
  cambiarValor(mes: string, valor: number) {
    mes = mes.toLowerCase().trim();

    for (let i in this.meses) {
      if (this.meses[i] === mes) {
        this.valores[i] += valor;
      }
    }
    return this.getDataGrafica();
  }
}
