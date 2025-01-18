import { Processor, WorkerHost } from '@nestjs/bullmq';

@Processor('example-queue')
export class QueueProcessor extends WorkerHost {
  async process(job: any): Promise<void> {
    console.log('Processing job:', job.id, job.data);

    // Simula el procesamiento de datos
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Tarea procesada: ${job.name} | id tarea: ${job.id}`);
  }
}