/* tslint:disable:no-any */
import {operation, param, requestBody, SpecificationExtension} from '@loopback/rest';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by 
 * 
 */
export class OpenApiControllerV1 {
  constructor() {}

  /**
   * 
   * 

   * @returns demo response
   */
  @operation('get', 'hello/')
  async hello(): Promise<string> {
    return await 'Hello';
  }

}
