import { Prop, Schema } from "@nestjs/mongoose";
import { HydratedDocument  } from "mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { SchemaFactory } from "@nestjs/mongoose/dist";
import { shoppingList } from "src/shared/enumerations";
import { IsEnum } from "class-validator";

export type shoppingDocument = HydratedDocument<CreateShoppingListDto>

@Schema({ timestamps: true})
export class CreateShoppingListDto {
    @Prop({ required: true })
    @ApiProperty({ description: 'shopping mall', enum: ['coles', 'woolworths', 't-bones']})
    source: string;

    @Prop({ required: true })
    @ApiProperty({ type: Array<string>, description: 'list of all shopping items', enum: shoppingList })
    @IsEnum(shoppingList)
    list: string;
}

export const shoppingSchema = SchemaFactory.createForClass(CreateShoppingListDto);
