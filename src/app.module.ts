import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UtilService } from './util/util.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UtilService],
})
export class AppModule {}
