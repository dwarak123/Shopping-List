import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping_list.service';
import { ShoppingListController } from './shopping_list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateShoppingListDto, shoppingSchema } from './dto/create-shopping_list.dto';

@Module({
 //imports: [MongooseModule.forFeature([{ name: CreateShoppingListDto.name, schema: shoppingSchema }])],
  controllers: [ShoppingListController],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
