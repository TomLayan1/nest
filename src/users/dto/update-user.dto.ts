import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types" //helps create an update DTO from an existing create DTO, making its properties optional.

export class UpdateUserDto extends PartialType(CreateUserDto) {}