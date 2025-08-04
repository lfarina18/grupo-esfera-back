import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class AppDto {
  @IsString()
  @IsNotEmpty({ message: 'El par de caracteres no puede estar vacío' })
  @MinLength(1, {
    message: 'El par de caracteres debe tener al menos 1 caracter',
  })
  pair!: string;

  @IsArray()
  @ArrayNotEmpty({ message: 'El corpus debe contener al menos un elemento' })
  @IsString({ each: true })
  @IsNotEmpty({ message: 'El corpus no puede estar vacío' })
  corpus!: string[];
}
