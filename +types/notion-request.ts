export interface DatabaseQuery {
  filter?: FilterGroup
  sorts?: Sort[]
}

interface FilterGroup {
  and?: Filter[]
  or?: Filter[]
}

interface Filter {
  property: string
  checkbox?: {
    equals: boolean
  }
  number?: object
  contains?: string
  equals?: string
}

interface Sort {
  property: string
  direction: string
}
