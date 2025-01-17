import { Controller, Delete, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EjemploS3Service } from 'src/servicios/ejemplo-s3/ejemplo-s3.service';
import { ConfigService } from '@nestjs/config';
@Controller('upload-s3')
export class UploadS3Controller {
    constructor(private readonly ejemploS3Service: EjemploS3Service, private readonly configService: ConfigService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const url = await this.ejemploS3Service.uploadFile(file);
        return { estado: "ok", mensaje: "se subió el archivo", url: `https://${this.configService.get<string>('AWS_BUCKET_NAME')}.s3.${this.configService.get<string>('AWS_REGION',)}.amazonaws.com/${url}`, nombre: url, mimetype: file.mimetype }
    }

    @Delete('/delete')
    async deleteFile(@Query() query) {
        await this.ejemploS3Service.deleteFile(query.file);
        return { estado: "ok", mensaje: `Se elimina el archivo "${query.file}" exitosamente` };
    }
}
