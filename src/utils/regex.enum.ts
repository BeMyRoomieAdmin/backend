export enum regexEnum {
  PASSWORD_PATTERN = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)([A-Za-z\\d]|[^ ]){8,20}$',
  DNI_PATTERN = '^\\d{8}[A-Za-z]$',
}
