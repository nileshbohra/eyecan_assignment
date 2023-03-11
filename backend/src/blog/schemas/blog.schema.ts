import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({timestamps: true})
export class Blog {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    content: string;

    @Prop({default: 1})
    is_active: number;

    @Prop({default: 0})
    is_deleted: number;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);