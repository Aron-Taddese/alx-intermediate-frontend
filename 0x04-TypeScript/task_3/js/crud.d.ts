// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from '../interface';

// Declare the functions in crud.js
 declare module './crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}