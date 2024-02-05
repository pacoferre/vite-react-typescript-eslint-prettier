export enum ReferenceConfigTypeEnum {
  One,
  Two,
  Three,
}

export type ReferenceConfig = {
  id: string
  label: string
  link: string
  type: ReferenceConfigTypeEnum
}
