import {
    Entity, PrimaryGeneratedColumn,
    Column, BeforeInsert,
    JoinTable, ManyToMany, OneToMany, Generated,
    CreateDateColumn, UpdateDateColumn,
} from "typeorm";
import { IsEmail, IsPhoneNumber, Validate } from 'class-validator';
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    uuid: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
        comment: '昵称',
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true,
        comment: '邮箱',
    })
    @IsEmail()
    email: string;

    @Column({
        type: 'varchar',
        length: 20,
        unique: true,
        comment: '手机',
    })
    @IsPhoneNumber('CH')
    phone: string;

    @Column({ default: '' })
    bio: string;

    @Column({
        type: 'varchar',
        length: 100,
        default: '',
        comment: '头像',
    })
    avatar: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: ['enable', 'disable'],
        default: 'enable',
    })
    status: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;
}