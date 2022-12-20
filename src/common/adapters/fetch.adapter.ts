/*eslint-disable*/

/*
 * This file is preserved because the Fetch API may be will fully implemented in the future
 */

// import { HttpAdapter } from '../interfaces/http-adapter.interface';
// import { InternalServerErrorException } from '@nestjs/common/exceptions';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class FetchAdapter implements HttpAdapter {
/*
 * Consider the experimental state of the Fetch API
 */
//   private fetch = fetch;
//   async get<T>(url: string): Promise<T> {
//     try {
//       return this.fetch(url).then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json() as Promise<T>;
//       });
//     } catch (error) {
//       throw new InternalServerErrorException('Error creating seed registers');
//     }
//   }
// }
