import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {createBlogPost, getBlogPost, updateBlogPost} from "../../api/BlogApi";
import {useNavigate, useParams} from "react-router-dom";

function BlogCreatePage(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getBlogPost(id).then(data => {
                console.log(data)
                setTitle(data[0].title);
                setContent(data[0].content);
            });
        }
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = {
            title: title,
            content: content
        };
        if (id) {
            updateBlogPost(id, blogData).then(data => {
                navigate(`/blogs/${id}`);
            });
        } else {
            createBlogPost(blogData).then(data => {
                navigate("/blogs");
            });
        }
    }

    return (
        <Container className={`border border-2 border-dark border-opacity-50 rounded-3 mb-5 mt-5 p-5`}>
            <h1 className="mb-5">{id ? 'Update Blog' : 'Create Blog'}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blog Title Here" value={title}
                                  onChange={(event) => setTitle(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={10} value={content}
                                  onChange={(event) => setContent(event.target.value)}/>
                </Form.Group>
                <Button className={`w-25 btn-light border border-dark border-2 mb-3 align-self-start`}
                        type="submit">{id ? "UPDATE" : "POST"}</Button>
            </Form>
        </Container>
    );
}

export default BlogCreatePage;