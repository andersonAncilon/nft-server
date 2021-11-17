import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  constructor(address: string, name?: string, profilePicture?: string) {
    super();
    this.address = address;
    this.name = name;
    this.profilePicture = profilePicture;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ default: '' })
  name?: string;

  @Column({ default: '' })
  profilePicture?: string;
}
