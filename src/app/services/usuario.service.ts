import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractGenericClass } from './generic.service';

@Injectable({ providedIn: 'root' })
export class UsuarioService extends AbstractGenericClass {

  override urlController = `${environment.url}/api/usuario`;

}