import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';//npm install exceljs --save
import { Response } from 'express';
@Injectable()
export class ExcelService {
    async generateExcel(res: Response): Promise<void> {
        // Crear un nuevo libro de Excel
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Hoja 1');
    
        // Agregar encabezados
        worksheet.columns = [
          { header: 'ID', key: 'id', width: 10 },
          { header: 'Nombre', key: 'name', width: 30 },
          { header: 'Correo Electrónico', key: 'email', width: 30 },
        ];
    
        // Agregar filas de ejemplo
        const data = [
          { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
          { id: 2, name: 'María López', email: 'maria.lopez@example.com' },
          { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com' },
        ];
        data.forEach((item) => {
          worksheet.addRow(item);
        });
    
        // Configurar el encabezado de la respuesta para descarga
        const timestamp = Date.now(); // Ejemplo: 2025-01-18T12-30-45
        const fileName = `reporte-${timestamp}.xlsx`;
    
        // Configurar el encabezado de la respuesta para descarga
        res.setHeader(
          'Content-Type',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        );
        res.setHeader(
          'Content-Disposition',
          `attachment; filename=${fileName}`,
        );
        
    
        // Escribir el archivo en la respuesta
        await workbook.xlsx.write(res);
        res.end();
      }
}
