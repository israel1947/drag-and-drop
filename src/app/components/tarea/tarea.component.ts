import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent{

  //items que se mostraran en la primera caja correspondiente a las tareas por hacer
  todo:string[]=['Aprender Angular','Aprender Python','Aprender Js','Mejorar SASS','Aprender Ilustracion Digital', 'Aprender Modelado 3D'];

  //almacenamiento de los item de la caja de todos que pasaremos aqui una vez empecemos a ralizar el aprendizaje de dicha tarea
  progress:string[]=[];

  //almacena los item de la caja de progrees que han sido finalizados con exito
  finalizadas:string[]=[];

  //contenido que se agregara por medio del input, es decir nuevas tareas sin entrara a el archivo ts
  tareasNuevas:string='';

  //permite desplazar haciendo drag and drop un item de su caja a la otra que deseamos
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  //mandar la tarea escrita una vez se precione la tecla enter
  agregarTarea(){

    if(this.tareasNuevas===''){
      return;
    }
    this.todo.push(this.tareasNuevas);
    this.tareasNuevas='';
  }

  borrarCliente(){
    this.todo.pop()
    //console.log('diste click');
  }

}
