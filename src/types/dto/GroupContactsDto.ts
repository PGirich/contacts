import {ContactDto} from './ContactDto';

export interface GroupContactsDto {
  id: string;
  /** Название */
  name: string,
  /** Описание группы */
  description: string,
  /** Фото */
  photo: string,
  /** Состав группы */
  contactIds: ContactDto['id'][]
}
