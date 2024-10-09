import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/system';

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const BlogMedia = styled(CardMedia)({
  paddingTop: '56.25%',
});

const BlogSection = () => {
  const blogPosts = [
    {
      title: "i swear i have",
      excerpt: "a lot of stuff to write about",
      image: "https://source.unsplash.com/random/800x600?cybersecurity",
      date: "2023-07-01",
    },
    {
      title: "im gonna start",
      excerpt: "writing them",
      image: "https://source.unsplash.com/random/800x600?ai",
      date: "2023-06-15",
    },
    {
      title: "but theyre really long and hard to write",
      excerpt: "& i dont have a lot of time",
      image: "https://source.unsplash.com/random/800x600?coding",
      date: "2023-05-30",
    },
  ];

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
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <BlogCard>
              <BlogMedia
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  {post.date}
                </Typography>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;