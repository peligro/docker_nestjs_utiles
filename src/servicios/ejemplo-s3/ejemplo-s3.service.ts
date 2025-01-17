import { Inject, Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand , DeleteObjectCommand, HeadObjectCommand} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { extname } from 'path';
@Injectable()
export class EjemploS3Service {

    constructor(
        @Inject(S3Client) private readonly s3Client: S3Client,
        private readonly configService: ConfigService,
      ) {}


      async uploadFile(file: Express.Multer.File): Promise<string> {
        const bucketName = this.configService.get<string>('AWS_BUCKET_NAME');
        const key = `uploads/${Date.now()}${extname(file.originalname)}`;
    
        const command = new PutObjectCommand({
          Bucket: bucketName,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        });
    
        await this.s3Client.send(command);
        return key;
        //return `https://${bucketName}.s3.${this.configService.get<string>('AWS_REGION',)}.amazonaws.com/${key}`;
      }

      async deleteFile(key: string): Promise<void> {
        const bucketName = this.configService.get<string>('AWS_BUCKET_NAME');
        
        const command = new DeleteObjectCommand({
          Bucket: bucketName,
          Key: key, // Nombre del archivo que deseas eliminar (incluyendo la ruta si está en una carpeta)
        });
      
        await this.s3Client.send(command);
      }
}
