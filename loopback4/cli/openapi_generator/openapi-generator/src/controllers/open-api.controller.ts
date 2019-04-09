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
   * 
   * 

   * @returns demo response
   */
  @operation('get', 'say/')
  async say(): Promise<string> {
    return await 'say';
  }

}

