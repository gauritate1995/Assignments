//@ts-ignore
import fs from 'fs';
//@ts-ignore
import pdf from 'pdf-parse-fork';


export class PdfUtil{

    static async readPDF(filepath : string): Promise<string>{

         //Verify whether the excel file exists. 
         if(!fs.existsSync(filepath)){//if file not available
            throw new Error (`File not found in the path: ${filepath}`)
         }

         //Read the text and return the same
         return(await pdf(fs.readFileSync(filepath))).text;
    }
}

let pdfText = await PdfUtil.readPDF('./files/Data.pdf');
console.log(pdfText);
console.log(pdfText.includes('How to open the HTML test report'));


