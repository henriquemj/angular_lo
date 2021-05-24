import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    getCursos() {
        return ['Angular 11', 'C#','Java'];
    }
}