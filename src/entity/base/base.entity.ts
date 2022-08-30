import { Field, ObjectType } from '@nestjs/graphql';
import { IsDate, IsUUID } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

const TIMESTAMP_TYPE = 'timestamp without time zone';

@ObjectType()
export abstract class BaseColumn {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  public id: string;

  @Column({ type: TIMESTAMP_TYPE, default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn({ type: TIMESTAMP_TYPE })
  @Field({ nullable: true })
  @IsDate()
  public createdAt: Date;

  @Column({ type: TIMESTAMP_TYPE, default: () => 'CURRENT_TIMESTAMP' })
  @UpdateDateColumn({ type: TIMESTAMP_TYPE })
  @Field({ nullable: true })
  @IsDate()
  public updatedAt: Date;

  @Field({ nullable: true })
  @Column({ default: false })
  public isDeleted: boolean;
}
