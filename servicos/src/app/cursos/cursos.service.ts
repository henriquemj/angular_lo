import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 11',' C#','Java'];

    constructor(){
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso (curso: string) {
        this.cursos.push(curso);
    }
}