import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { SwaggerModule } from './config/swagger/swagger.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [QuestionsModule,
    SwaggerModule,
    ConfigModule,
    
  ],
  providers: [AppService],
})
export class AppModule {}
