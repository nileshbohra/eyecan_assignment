import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {deleteBlogPost, getBlogPost} from "../../api/BlogApi";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";

function BlogPage(props) {
    const [blog, setBlog] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getBlogPost(id).then(data => {
            data.forEach(blog => {
                blog.updatedAt = new Date(blog.updatedAt).toDateString();
            });
            setBlog(data);
        });
    }, []);

    const deleteBlog = (e, id) => {
        deleteBlogPost(id).then(data => {
            console.log(data);
            navigate("/blogs");
        });
    }

    return (
        blog.map((blog, idx) => {
            return <Container key={blog._id}>
                <div style={{textAlign: "start", margin: "50px 0px 50px 0px"}}>
                    <h1 style={{fontSize: "3rem"}}>{blog.title}</h1>
                    <div className={`d-flex flex-row justify-content-between align-items-center`}>
                        <h3 style={{color: "grey", fontSize: "1.7rem", fontWeight: "lighter"}}>{blog.updatedAt}</h3>
                        <div>
                            <Button onClick={(e) => {
                                deleteBlog(e, blog._id)
                            }} className={`btn-danger border border-dark border-2 mb-3 me-3 align-self-start`}>Delete
                                Blog</Button>
                            <Button className={`btn-light border border-dark border-2 mb-3 align-self-start`}><Link
                                className="text-black text-decoration-none" to={`/blogs/update/${blog._id}`}>Update
                                Blog</Link></Button>
                        </div>
                    </div>
                    <hr/>
                    <p style={{fontSize: "1.2rem"}}>{blog.content}</p>
                </div>
            </Container>

        })

    );
}

export default BlogPage;