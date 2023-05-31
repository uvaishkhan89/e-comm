import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    price: string

    @IsString()
    @ApiProperty()
    category: string;

    @IsString()
    @ApiProperty()
    company: string;

    // @IsString()
    // userId: string;
}
