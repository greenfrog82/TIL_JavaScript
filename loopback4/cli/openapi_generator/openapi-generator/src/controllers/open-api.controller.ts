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
  @operation('get', 'hello/')
  async hello(): Promise<string> {
    return await 'test';
  }

  /**
   * 
   * 

   * @returns demo response
   */
  @operation('get', 'say/')
  async say(): Promise<string> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody 
   * @returns OK
   */
  @operation('post', '/users')
  async users(@requestBody() requestBody: {
  id?: number;
  name?: string;
}): Promise<string> {
    throw new Error('Not implemented');
  }

}

