// /**
//  * Regex para validar Códigos de Identificación Fiscal (CIF) de España.
//  *
//  * El CIF consta de 9 caracteres:
//  * - El primer carácter es una letra que indica el tipo de entidad.
//  * - Los siguientes dos caracteres son dígitos que indican la provincia o "No Residente".
//  * - Los cinco siguientes dígitos son números correlativos o aleatorios.
//  * - El último carácter es un código de control, que puede ser una letra o un número.
//  *
//  * Características importantes:
//  * - El primer carácter debe ser una de las letras válidas: A, B, C, D, E, F, G, H, J, N, P, Q, R, S, U, V, W.
//  * - Si el primer carácter es P, Q, R, S, W o N, o si los dos dígitos iniciales son "00" (No Residente),
//  *   el último carácter debe ser una LETRA.
//  * - Para otras claves de entidad (A, B, E, H), el último carácter debe ser un NÚMERO.
//  * - Para el resto de casos, el último carácter puede ser tanto una letra como un número.
//  */

// // Las letras se usan en minúsculas para facilitar la comparación con la transformación en el DTO.
// export const CIF_REGEX =
//   '^' +
//   // Primer carácter: Letra válida según la normativa
//   '([abeh][0-9]{2}|[pqrswun]00|[cdfgjnpqrsuvw][0-9]{2})' + // Grupo para validación inicial
//   // Cinco dígitos centrales
//   '[0-9]{5}' +
//   // Último carácter: Código de control
//   '(?:(?<=[abeh])[0-9]|(?<=[pqrswun]00|[cdfgjnpqrsuvw])[a-z0-9])' +
//   // Fin del regex
//   '$';

// // Explicación detallada del regex:
// // ^                                          -> Inicio de la cadena.
// // ([ABEH][0-9]{2}                            -> Primera letra A, B, E, H seguida de dos dígitos.
// // |[PQRSWUN]00                               -> O bien, primera letra P, Q, R, S, W, U, N seguida de "00" (No Residente).
// // |[CDFGJNPQRSUVW][0-9]{2})                  -> O bien, primera letra C, D, F, G, J, N, P, Q, R, S, U, V, W seguida de dos dígitos.
// // [0-9]{5}                                   -> Cinco dígitos centrales.
// // (?:(?<=[ABEH])[0-9]                        -> Si la primera letra es A, B, E, H, el último carácter debe ser un número.
// // |(?<=[PQRSWUN]00|[CDFGJNPQRSUVW])[A-Z0-9]) -> Si es cualquier otro caso, el último carácter puede ser una letra o un número.
// // $                                          -> Fin de la cadena.
