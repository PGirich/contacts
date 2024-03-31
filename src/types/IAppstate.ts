import { IContact } from './IContact'
import { IGroup } from './IGroup'

export type IAppState = {
  contacts: IContact['id'][]
  groups: IGroup['id'][]
  favorites: IContact['id'][]
}
