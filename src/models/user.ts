/**
 * MdNotesCCGLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface User {
  id?: number;
  name?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export const userSchema: Schema<User> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  email: ['email', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
