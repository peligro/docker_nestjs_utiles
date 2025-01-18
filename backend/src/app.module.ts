import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { S3Client } from '@aws-sdk/client-s3';//npm install @aws-sdk/client-s3
import { join } from 'path';
import { AppController } from './app.controller';
import { EjemploController } from './controladores/ejemplo/ejemplo.controller';
import { UploadController } from './controladores/upload/upload.controller';
import { EjemploS3Service } from './servicios/ejemplo-s3/ejemplo-s3.service';
import { UploadS3Controller } from './controladores/upload-s3/upload-s3.controller';
import { ColasBullmqController } from './controladores/colas-bullmq/colas-bullmq.controller';
import { ColasModuleModule } from './modulos/colas-module.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    ColasModuleModule,
    /*,
    BullModule.forRoot({
      connection: {
        host: 'redis', // Host de Redis (debe coincidir con el Docker Compose)
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'example-queue', // Nombre de la cola
    }),*/
    
  ],
  controllers: [AppController, EjemploController, UploadController, UploadS3Controller, ColasBullmqController],
  providers: [
    {
      provide: S3Client,
      useFactory: (configService: ConfigService) => {
        return new S3Client({
          region: configService.get<string>('AWS_REGION'),
          credentials: {
            accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
          },
        });
      },
      inject: [ConfigService],
    },
    EjemploS3Service 
  ],
})
export class AppModule {}
