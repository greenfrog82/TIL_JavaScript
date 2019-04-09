/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by 
 * 
 */
export class OpenApiController {
  constructor() {}

  /**
   * Returns a user based on a single ID, if the user does not have access to the pet
   * 

   * @returns pet response
   */
  @operation('get', '/pets/{id}')
  async findPetById(): Promise<string> {
    // throw new Error('Not implemented');
    return await 'test';
  }

}

