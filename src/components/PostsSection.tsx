import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Lock, Description, NavigateNext, NavigateBefore, ZoomIn, ZoomOut, Close as CloseIcon } from '@mui/icons-material';
import { Document, Page } from 'react-pdf';
import { posts } from '../data/posts';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const PostsContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  gap: '2rem',
  padding: '1rem 0',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

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
  position: 'relative',
  width: '350px',
  flexShrink: 0,
}));

const BlogMedia = styled(CardMedia)({
  paddingTop: '56.25%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#f5f5f5',
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
  minHeight: '4.2em',
});

const LockedOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  zIndex: 1,
  backdropFilter: 'blur(2px)',
  transition: 'opacity 0.3s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    marginBottom: '1rem',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
  },
  '& .MuiTypography-root': {
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
  },
  '& > div': {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
});

const WriteupIndicator = styled(Box)({
  position: 'absolute',
  top: 15,
  right: 15,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '50%',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  '& .MuiSvgIcon-root': {
    color: 'white',
    fontSize: '2.5rem',
  },
});

const BlogSection = () => {
  const publishedPosts = posts.filter(post => post.published);
  const [openPdfModal, setOpenPdfModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const handlePostClick = (post: typeof posts[0]) => {
    if (post.locked) return;
    if (post.type === 'writeup' && post.pdf) {
      setSelectedPost(post);
      setOpenPdfModal(true);
    }
  };

  const handleClosePdfModal = () => {
    setOpenPdfModal(false);
    setSelectedPost(null);
    setPageNumber(1);
    setScale(1.0);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handlePrevPage = () => {
    setPageNumber(page => Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber(page => Math.min(page + 1, numPages));
  };

  const handleZoomIn = () => {
    setScale(scale => Math.min(scale + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setScale(scale => Math.max(scale - 0.2, 0.6));
  };

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
      <PostsContainer>
        {publishedPosts.map((post) => (
          <Box
            key={post.id}
            onClick={() => !post.locked && handlePostClick(post)}
            component={post.locked || post.type === 'writeup' ? 'div' : Link}
            to={post.locked ? undefined : post.path}
            style={{ 
              textDecoration: 'none',
              cursor: post.locked ? 'default' : 'pointer'
            }}
          >
            <BlogCard sx={{ 
              cursor: post.locked ? 'default' : 'pointer',
              '&:hover': {
                transform: post.locked ? 'none' : 'translateY(-10px)',
                boxShadow: post.locked ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 20px 40px rgba(0, 0, 0, 0.2)',
              },
            }}>
              {post.locked && (
                <LockedOverlay>
                  <Box>
                    <Lock />
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Content Locked
                    </Typography>
                    <Typography variant="body2" align="center">
                      Available {post.locked.until}
                    </Typography>
                  </Box>
                </LockedOverlay>
              )}
              {post.type === 'writeup' && (
                <WriteupIndicator>
                  <Description />
                </WriteupIndicator>
              )}
              <BlogMedia
                image={post.image}
                title={post.title}
                sx={{ 
                  backgroundSize: post.imageFit || 'cover',
                }}
              />
              <BlogContent>
                <Box>
                  <Typography 
                    variant="h5" 
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      minHeight: '3.6em',
                      alignItems: 'center',
                      justifyContent: 'center',
                      lineHeight: '1.4em',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <BlogExcerpt variant="body2" color="text.secondary">
                    {post.excerpt}
                  </BlogExcerpt>
                </Box>
                <Box sx={{ 
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Box sx={{ minWidth: post.tag ? 'auto' : '0' }}>
                    {post.tag && (
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          backgroundColor: `${post.tag.color}50`,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontWeight: 'bold',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {post.tag.text}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {post.date}
                  </Typography>
                </Box>
              </BlogContent>
            </BlogCard>
          </Box>
        ))}
      </PostsContainer>

      {/* PDF Modal */}
      <Dialog
        open={openPdfModal}
        onClose={handleClosePdfModal}
        maxWidth={false}
        PaperProps={{
          sx: {
            height: 'auto',
            maxHeight: '90vh',
            width: 'auto',
            maxWidth: '90vw',
            display: 'flex',
            flexDirection: 'column',
            m: 2
          }
        }}
      >
        <DialogContent sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          overflow: 'hidden',
          p: 2
        }}>
          <Box sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}>
            <IconButton onClick={handleClosePdfModal} size="large">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton onClick={handleZoomOut}>
              <ZoomOut />
            </IconButton>
            <IconButton onClick={handleZoomIn}>
              <ZoomIn />
            </IconButton>
            <IconButton onClick={handlePrevPage} disabled={pageNumber <= 1}>
              <NavigateBefore />
            </IconButton>
            <Typography sx={{ alignSelf: 'center' }}>
              Page {pageNumber} of {numPages}
            </Typography>
            <IconButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
              <NavigateNext />
            </IconButton>
          </Box>
          <Box sx={{ 
            overflow: 'auto', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}>
            {selectedPost && (
              <Document
                file={selectedPost.pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<Typography>Loading PDF...</Typography>}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  loading={<Typography>Loading page...</Typography>}
                />
              </Document>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BlogSection;