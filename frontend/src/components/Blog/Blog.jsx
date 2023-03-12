import React, {useEffect, useState} from "react";
import styles from "./BlogStyles.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import {getBlogPosts} from "../../api/BlogApi";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getBlogPosts().then(data => {
            data.forEach(blog => {
                blog.updatedAt = new Date(blog.updatedAt).toDateString();
            });
            setBlogs(data);
        });
    }, []);

    return (
        <Container fluid className={styles.blogContainer} id={`blogs`}>
            <h1 className="mt-3 mb-3">Blog Posts</h1>
            <Container className="mt-5 mb-5">
                <Button className={`btn-light border border-dark border-2 mb-3`}><Link
                    className="text-black text-decoration-none" to={`/blogs/create`}>Create
                    Blog</Link></Button>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {blogs.map((blog, idx) => {
                        return (
                            <Col key={blog._id}>
                                <Card style={{textAlign: "start"}}>
                                    <Card.Body>
                                        <Card.Title className={`mb-2`}>{blog.title}</Card.Title>
                                        <Card.Subtitle className={`mb-2`}>{blog.updatedAt}</Card.Subtitle>
                                        <Card.Text>
                                            {blog.content.substring(0, 200)} ... <Link
                                            style={{textDecoration: "none"}} to={`/blogs/${blog._id}`}>Read
                                            More</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    );
}
