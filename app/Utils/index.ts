export const naturalidade = ['AC', 'AL', 'AP', 'AM', 'BA',
'CE', 'DF', 'ES', 'GO', 'MA',
'MT', 'MS', 'MG', 'PA', 'PB',
'PR', 'PE', 'PI', 'RJ', 'RN',
'RS', 'RO', 'RR', 'SC', 'SP',
'SE', 'TO', 'IN'] as const;

export type Naturalidade = typeof naturalidade[number];

export const estadoCivil = ['Casado','Divorciado', 'Solteiro', 'Viúvo'] as const

export type EstadoCivil = typeof estadoCivil[number];

export const genero = ['Masculino', 'Feminino', 'Outro'] as const;
export type Genero = typeof genero[number];

export const tipoDados = ['paciente', 'responsavel'] as const;
export type TipoDados = typeof tipoDados[number];

export const roles = ['normal', 'editor', 'admin'] as const;
export type Roles = typeof roles[number]

