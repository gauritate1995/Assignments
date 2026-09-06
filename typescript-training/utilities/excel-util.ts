import fs from 'fs';
import xlsx from 'xlsx';


export class ExcelUtil{

    static readExcel(filepath : string, sheetName: string){

         //Verify whether the excel file exists. 
         if(!fs.existsSync(filepath)){//if file not available
            throw new Error (`File not found in the path: ${filepath}`)
         }

         //Read the workbook from the Excel file. 
         const workbook = xlsx.readFile(filepath);

         //Get the specific sheet from the workbook.
         const sheet = workbook.Sheets[sheetName];
         
         //Verify whether the sheet exists in the workbook.
         if(!sheet){
            throw new Error(`Sheet not found in the excel with name : ${sheetName}`);            
         }

         return xlsx.utils.sheet_to_json(sheet);
    }
}

const data = ExcelUtil.readExcel("./files/TestData.xlsx", "Sheet1");
console.log(data[0]["Email"]);
console.log(data[3]["Phone"]);