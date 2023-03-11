import {Injectable} from '@nestjs/common';
import {CreateBlogDto} from './dto/create-blog.dto';
import {UpdateBlogDto} from './dto/update-blog.dto';
import {Model, Mongoose} from "mongoose";
import {Blog, BlogDocument} from "./schemas/blog.schema";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {
    }

    create(createBlogDto: CreateBlogDto) {
        const createdBlog = new this.blogModel(createBlogDto);
        return createdBlog.save();
    }

    findAll() {
        return this.blogModel.find({is_active: 1}).sort({updatedAt: -1}).exec()
    }

    findOne(id: string) {
        return this.blogModel.find({_id: id, is_active: 1}).exec();
    }

    update(id: string, updateBlogDto: UpdateBlogDto) {
        return this.blogModel.updateOne({_id: id}, updateBlogDto).exec();
    }

    remove(id: string) {
        return this.blogModel.deleteOne({_id: id}).exec();
    }
}
