import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [HttpModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
