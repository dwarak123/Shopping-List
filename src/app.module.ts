import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingListModule } from './shopping_list/shopping_list.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShoppingListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
