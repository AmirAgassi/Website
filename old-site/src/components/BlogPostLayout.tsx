import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import FirstPost from './posts/FirstPost';
import { posts } from '../data/posts';

const BlogPostLayout: React.FC = () => {
  const publishedPosts = posts.filter(post => post.published);

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ 
        width: '100%', 
        margin: '0 auto',
        position: 'relative'
      }}>
        <Routes>
          {/* Individual post routes */}
          <Route path="/first-post" element={<FirstPost />} />
          
          {/* Blog index page */}
          <Route path="/" element={
            <Box>
              <Typography variant="h3" align="center" gutterBottom sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Blog Posts
              </Typography>
              <Grid container spacing={3}>
                {publishedPosts.map(post => (
                  <Grid item xs={12} key={post.id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.excerpt}
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                          {post.date}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          } />

          {/* Catch all other routes and redirect to blog index */}
          <Route path="*" element={<Navigate to="/blog" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default BlogPostLayout; 