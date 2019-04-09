/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Error
 * Error
 */
@model({name: 'Error'})
export class Error {
  constructor(data?: Partial<Error>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'code', required: true})
  code: number;

  /**
   * 
   */
  @property({name: 'message', required: true})
  message: string;

}

