import { Usuario } from "./usuario";

export class UsuariosLista {
  private lista: Usuario[] = [];

  constructor() {}

  public agregar(usuario: Usuario) {
    this.lista.push(usuario);
    console.log(this.lista);
    return usuario;
  }

  public actualizarNombre(id: string, nombre: string) {
    for (let user of this.lista) {
      if (user.id === id) {
        user.nombre = nombre;
        break;
      }
    }
    // console.log("===========Actualizando usuario ===========");
    // console.log("user con nombre", this.lista);
  }

  public getLista() {
    return this.lista.filter(usuario => usuario.nombre !== "sin-nombre");
  }

  public getUser(id: string) {
    return this.lista.find(usuario => {
      return usuario.id === id;
    });
  }

  public getUsuarioEnSala(sala: string) {
    return this.lista.filter(usuario => {
      return usuario.sala === sala;
    });
  }
  public boorarUsuario(id: string) {
    const tempUser = this.getUser(id);

    this.lista = this.lista.filter(usuario => {
      return usuario.id !== id;
    });
    console.log("lista user", this.lista);
    return tempUser;
  }
}
