import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root"
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on("connect", () => {
      console.log("cliente de angular conectado al servidor");
      this.socketStatus = true;
    });
    this.socket.on("disconnect", () => {
      console.log("cliente de angular desconectado del servidor");
      this.socketStatus = false;
    });
  }
  //evento que quiero emitir o escuchar
  emit(evento: string, payload?: any, callback?: Function) {
    //emit('evento', payload, callback)
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string) {
    return this.socket.fromEvent(evento);
  }
}
