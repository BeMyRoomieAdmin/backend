/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'isDni', async: false })
export class IsDniConstraint implements ValidatorConstraintInterface {
  validate(dni: string, args: ValidationArguments) {
    // Regex que valida el formato básico del DNI (8 dígitos + 1 letra)
    const dniFormatRegex = /^[0-9]{8}[A-Z]$/;

    if (!dniFormatRegex.test(dni)) {
      return false; // Formato incorrecto
    }

    // Se calcula la letra del DNI según su número
    const calculateDniLetter = (number: number): string => {
      const letters = 'trwagmyfpdxbnjzsqvhlcke'; // Letras de control del DNI
      return letters[number % 23]; // Se calcula la letra según el resto de la división por 23
    };

    // Se extraen los 8 dígitos y la letra del DNI
    const numberPart = parseInt(dni.slice(0, 8), 10); // Los primeros 8 caracteres deben ser números
    const letterPart = dni.charAt(8).toLocaleLowerCase(); // La última letra debe ser minúscula

    // Se calcula la letra esperada para el número dado
    const expectedLetter = calculateDniLetter(numberPart);

    // Se compara la letra calculada con la letra proporcionada
    return letterPart === expectedLetter;
  }

  defaultMessage(args: ValidationArguments) {
    return 'El DNI proporcionado no es válido ($value)';
  }
}
