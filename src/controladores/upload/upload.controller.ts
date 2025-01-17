import { Body, Controller,  Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';//npm i -D @types/multer
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
export class SampleDto
{
    producto_id:number;
}
@Controller('upload')
export class UploadController {

    @Post()
    @UseInterceptors(FileInterceptor('file', {storage: diskStorage(
        {
            destination: './assets/uploads',
            filename:(req, file, callback)=>{
                callback(null, `${Date.now()}${extname(file.originalname)}`);
            }
        })})
    )
    metodoPost(@UploadedFile() file: Express.Multer.File)
    {
         return {estado:"ok", mensaje:"se subió el archivo", nombre: file.originalname, archivosubido:file.filename, mimetype:file.mimetype}
    }
}
