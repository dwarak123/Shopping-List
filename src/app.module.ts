import { Module } from '@nestjs/common';
import { ShoppingListModule } from './shopping_list/shopping_list.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShoppingListModule],
})
export class AppModule {}
