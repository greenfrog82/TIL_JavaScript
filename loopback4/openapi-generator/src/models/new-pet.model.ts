/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewPet
 * NewPet
 */
@model({name: 'NewPet'})
export class NewPet {
  constructor(data?: Partial<NewPet>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'name', required: true})
  name: string;

  /**
   * 
   */
  @property({name: 'tag'})
  tag?: string;

}

