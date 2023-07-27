
import { Injectable } from '@angular/core';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { TDocumentDefinitions, Content, Table } from 'pdfmake/interfaces';


@Injectable({
  providedIn: 'root'
})


export class ExportService {


//   constructor() {
//     (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
//   }

// //pdf generated-->
//   generatePDF(users: any[], fileName: string) {
//     const docDefinition : TDocumentDefinitions = {
//       content: [
//         { text: 'Sample PDF Export', style: 'header' },
//         '\n',
//         {
//           table: {
//             headerRows: 1,
//             widths: ['*', 'auto', 'auto'], // Set column widths (* for auto-adjust)
//             body: this.getTableData(users),
//           }
//         }
//       ],
//       styles: {
//         header: {
//           fontSize: 18,
//           bold: true,
//           alignment: 'center'
//         }
//       }
//     };

//     pdfMake.createPdf(docDefinition).download(fileName);
//   }
//   getTableData(users: any[]): import("pdfmake/interfaces").TableCell[][] {
//     throw new Error('Method not implemented.');
//   }

}


