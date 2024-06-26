/**
 * MdNotesCCGLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema, string } from '../schema';

export interface Note {
  id?: bigint;
  title?: string;
  body?: string;
  userId?: bigint;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export const noteSchema: Schema<Note> = expandoObject({
  id: ['id', optional(bigint())],
  title: ['title', optional(string())],
  body: ['body', optional(string())],
  userId: ['user_id', optional(bigint())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
});
