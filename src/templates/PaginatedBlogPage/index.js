import React from 'react';
import { Layout } from 'components';
import { Link } from 'gatsby';
import { Content, Post, Pagination, PageNumber } from './style';

const PaginatedBlogPage = ({ pageContext }) => {
    return (
        <Layout>
            <Content>
                {pageContext.posts.map((post) => (
                    <Post key={post.contentful_id}>
                        <div>
                            <Link to={`/${pageContext.blogSlug}/${post.slug}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div>{post.description}</div>
                        <div>
                            <small>{post.publishedDate}</small>
                        </div>
                    </Post>
                ))}
            </Content>
            <Pagination>
                {Array.from({ length: pageContext.totalPages }).map((n, i) => {
                    return (
                        <PageNumber key={i} isActive={i + 1 === pageContext.currentPage}>
                            <Link to={`/${pageContext.blogSlug}/${i + 1 === 1 ? "" : i + 1}`}>
                                {i + 1}
                            </Link>
                        </PageNumber>
                    );
                })}
            </Pagination>
        </Layout>
    );
};

export default PaginatedBlogPage;