import { Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Foto, Fotos } from './interfaces/fotos.interface';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent{

  //items que se mostraran en la primera caja correspondiente a las tareas por hacer
  todo=Fotos;

  //almacenamiento de los item de la caja de todos que pasaremos aqui una vez empecemos a ralizar el aprendizaje de dicha tarea
 // progress:Foto[]=[];

  //almacena los item de la caja de progrees que han sido finalizados con exito
  //finalizadas:Foto[]=[];

  //contenido que se agregara por medio del input, es decir nuevas tareas sin entrar a el archivo ts
  //tareasNuevas:string='';


  drop(event: CdkDragDrop<Foto[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }



  //permite desplazar haciendo drag and drop un item de su caja a la otra que deseamos
  //drop(event: CdkDragDrop<Foto[]>) {
   // if (event.previousContainer === event.container) {
   //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   // } else {
    //  transferArrayItem(event.previousContainer.data,
                       // event.container.data,
                      //  event.previousIndex,
                       // event.currentIndex);
   // }
 // }

  //mandar la tarea escrita una vez se precione la tecla enter
 // agregarTarea(){

  //  if(this.tareasNuevas===''){
   //   return;
   // }
   // this.todo.push(this.tareasNuevas);
   // this.tareasNuevas='';
 // }

  //borrarCliente(){
    //this.todo.pop()
  //}

  @ViewChild('container',  {read: ElementRef})
  public readonly containerElement: any;
  
  public readonly AngularResizeElementDirection = AngularResizeElementDirection;
  public data: any = {};

  public onResize(evt: AngularResizeElementEvent): void {
        this.data.width = evt.currentWidthValue;
        this.data.height = evt.currentHeightValue;
        this.data.top = evt.currentTopValue;
        this.data.left = evt.currentLeftValue;
  }

}
