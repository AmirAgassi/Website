import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
  cursor: 'pointer',
  minHeight: '400px',
}));

const BlogMedia = styled(CardMedia)({
  paddingTop: '56.25%',
});

const BlogContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
});

const BlogExcerpt = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '6.2em',
});

const BlogSection = () => {
  // Only show published posts in the blog section
  const publishedPosts = posts.filter(post => post.published);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 6,
      }}>
        Latest Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {publishedPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Link to={post.path} style={{ textDecoration: 'none' }}>
              <BlogCard>
                <BlogMedia
                  image={post.image}
                  title={post.title}
                />
                <BlogContent>
                  <Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                      fontWeight: 'bold',
                      mb: 2,
                    }}>
                      {post.title}
                    </Typography>
                    <BlogExcerpt variant="body2" color="text.secondary">
                      {post.excerpt}
                    </BlogExcerpt>
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ 
                    mt: 2,
                    display: 'block',
                    textAlign: 'right'
                  }}>
                    {post.date}
                  </Typography>
                </BlogContent>
              </BlogCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;