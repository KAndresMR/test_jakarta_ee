import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_jakarta';

  cedula: string = ''; // Cédula ingresada por el usuario
  usuarioData: any = null; // Datos del usuario obtenidos del servicio
  error: string = ''; // Mensaje de error en caso de fallo


  /**
   * Constructor del componente.
   * 
   * @param userservice Servicio para obtener datos del usuario
   */
  constructor(private userservice: UserService) { }

  consultar() {
    this.userservice.getUsuarioData(this.cedula).subscribe(
      data => {
        this.usuarioData = data; // Asigna los datos del usuario
        this.error = ''; // Limpia el mensaje de error
      },
      error => {
        this.error = 'Usuario no encontrado'; // Establece un mensaje de error
        this.usuarioData = null; // Limpia los datos del usuario
      }
    );
  }


}
