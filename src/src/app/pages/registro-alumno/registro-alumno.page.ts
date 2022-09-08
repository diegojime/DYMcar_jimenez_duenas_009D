import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  async Despedida() {
    const alert = await this.alertController.create({
      header: '¡Hasta luego!',
      message: 'Ha cerrado existosamente la Sesion',
      buttons: ['OK']
    });

    await alert.present();
  }

  usuario = {
    nombre:'',
    email: '',
    password:'',
    apellido:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
