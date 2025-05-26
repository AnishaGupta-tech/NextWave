import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Button,
  Avatar,
  TextField,
  Tabs,
  Tab,
  Divider,
  IconButton,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Search,
  FilterList,
  Favorite,
  FavoriteBorder,
  Share,
  Message,
  LocalOffer,
  School,
  Book,
  Science,
  Description,
  Add,
  Close
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled Components
const ProductCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
    '& .MuiCardMedia-root': {
      transform: 'scale(1.03)'
    }
  }
}));

const ProductMedia = styled(CardMedia)({
  height: 200,
  transition: 'transform 0.3s ease',
  position: 'relative'
});

const PriceChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  fontWeight: 700,
  fontSize: '1.1rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText
}));

const CategoryIcon = styled('div')(({ theme, category }) => ({
  width: 50,
  height: 50,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.secondary.dark,
  marginBottom: theme.spacing(2)
}));

const Marketplace = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const categories = [
    { id: 1, name: 'Textbooks', icon: <Book fontSize="large" /> },
    { id: 2, name: 'Stationery', icon: <Description fontSize="large" /> },
    { id: 3, name: 'Lab Equipment', icon: <Science fontSize="large" /> },
    { id: 4, name: 'Uniforms', icon: <School fontSize="large" /> }
  ];

  const products = [
    {
      id: 1,
      title: 'Data Structures Textbook',
      description: 'Like new condition, 3rd edition with all markings in pencil that can be erased.',
      price: '₹450',
      category: 'Textbooks',
      image: '/marketplace/ds-book.jpg',
      seller: {
        name: 'Rahul Sharma',
        avatar: '/avatars/rahul.jpg',
        rating: 4.5,
        year: '3rd Year CSE'
      },
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Engineering Drawing Kit',
      description: 'Complete set with compass, protractor, scales, and drafting pencils.',
      price: '₹600',
      category: 'Stationery',
      image: '/marketplace/drawing-kit.jpg',
      seller: {
        name: 'Priya Patel',
        avatar: '/avatars/priya.jpg',
        rating: 4.2,
        year: '4th Year ME'
      },
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Lab Coat',
      description: 'Size M, washed and ironed, only used for 1 semester.',
      price: '₹250',
      category: 'Uniforms',
      image: '/marketplace/lab-coat.jpg',
      seller: {
        name: 'Amit Singh',
        avatar: '/avatars/amit.jpg',
        rating: 4.0,
        year: '2nd Year CHE'
      },
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      description: 'Casio fx-991EX, with cover and manual, works perfectly.',
      price: '₹800',
      category: 'Stationery',
      image: '/marketplace/calculator.jpg',
      seller: {
        name: 'Neha Gupta',
        avatar: '/avatars/neha.jpg',
        rating: 4.7,
        year: '4th Year ECE'
      },
      posted: 'Just now'
    },
    {
      id: 5,
      title: 'Circuit Boards Set',
      description: 'Complete set of breadboards and components for electronics lab.',
      price: '₹1200',
      category: 'Lab Equipment',
      image: '/marketplace/circuit-boards.jpg',
      seller: {
        name: 'Vikram Joshi',
        avatar: '/avatars/vikram.jpg',
        rating: 4.3,
        year: '3rd Year EEE'
      },
      posted: '5 days ago'
    },
    {
      id: 6,
      title: 'Mechanical Drafting Tools',
      description: 'Professional quality set, barely used, includes all original pieces.',
      price: '₹950',
      category: 'Stationery',
      image: '/marketplace/drafting-tools.jpg',
      seller: {
        name: 'Sanya Verma',
        avatar: '/avatars/sanya.jpg',
        rating: 4.8,
        year: '4th Year ME'
      },
      posted: '1 day ago'
    }
  ];

  const handleWishlistToggle = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Marketplace Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip
          icon={<LocalOffer />}
          label="CAMPUS MARKETPLACE"
          sx={{
            px: 3,
            py: 1,
            mb: 3,
            fontWeight: 700,
            fontSize: '1rem',
            bgcolor: 'primary.main',
            color: 'white'
          }}
        />
        <Typography variant="h3" sx={{
          fontWeight: 800,
          mb: 2,
          background: 'linear-gradient(45deg, #7c4dff 30%, #00e5ff 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Buy & Sell BTech Essentials
        </Typography>
        <Typography variant="h6" sx={{
          maxWidth: 700,
          mx: 'auto',
          color: 'text.secondary'
        }}>
          Find affordable textbooks, equipment, and supplies from fellow students
        </Typography>
      </Box>

      {/* Search and Categories */}
      <Box sx={{ mb: 6 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          flexWrap: 'wrap'
        }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            InputProps={{
              startAdornment: <Search sx={{ color: 'action.active', mr: 1 }} />
            }}
            sx={{
              flexGrow: 1,
              maxWidth: 600,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: 'background.paper'
              }
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{
              borderRadius: 2,
              px: 3,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Filters
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              borderRadius: 2,
              px: 3,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Sell Item
          </Button>
        </Box>

        {/* Categories */}
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
          Browse Categories
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {categories.map((category) => (
            <Grid item xs={6} sm={3} key={category.id}>
              <Box sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 3,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}>
                <CategoryIcon category={category.name}>
                  {category.icon}
                </CategoryIcon>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {category.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Products Grid */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
        {searchTerm ? `Search Results for "${searchTerm}"` : 'Recently Listed'}
      </Typography>
      
      {filteredProducts.length > 0 ? (
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard>
                <ProductMedia
                  image={product.image}
                  title={product.title}
                  onClick={() => handleProductClick(product)}
                >
                  <PriceChip label={product.price} />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      backgroundColor: 'background.paper'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishlistToggle(product.id);
                    }}
                  >
                    {wishlist.includes(product.id) ? (
                      <Favorite color="error" />
                    ) : (
                      <FavoriteBorder />
                    )}
                  </IconButton>
                </ProductMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </Typography>
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip
                    label={product.posted}
                    size="small"
                    sx={{ backgroundColor: 'action.selected' }}
                  />
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={product.seller.avatar}
                      alt={product.seller.name}
                      sx={{ width: 32, height: 32, mr: 1 }}
                    />
                    <Typography variant="body2">
                      {product.seller.name.split(' ')[0]}
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    startIcon={<Message />}
                    onClick={() => handleProductClick(product)}
                  >
                    Contact
                  </Button>
                </CardActions>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{
          textAlign: 'center',
          p: 8,
          bgcolor: 'background.paper',
          borderRadius: 3
        }}>
          <Search sx={{ fontSize: 60, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            No products found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Try different search terms or be the first to list an item!
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Add />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600
            }}
          >
            List Your Item
          </Button>
        </Box>
      )}

      {/* Product Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {selectedProduct.title}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    height: 400
                  }}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <PriceChip
                      label={selectedProduct.price}
                      sx={{ top: 16, right: 16 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Description
                    </Typography>
                    <Typography variant="body1">
                      {selectedProduct.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Details
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Chip label={`Category: ${selectedProduct.category}`} />
                      <Chip label={`Posted: ${selectedProduct.posted}`} />
                      <Chip label={`Condition: Like New`} />
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 3 }} />
                  
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Seller Information
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={selectedProduct.seller.avatar}
                        alt={selectedProduct.seller.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {selectedProduct.seller.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedProduct.seller.year}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                          {[...Array(5)].map((_, i) => (
                            <Box
                              key={i}
                              component="span"
                              sx={{
                                color: i < Math.floor(selectedProduct.seller.rating)
                                  ? 'gold'
                                  : 'action.disabled',
                                fontSize: '1.2rem'
                              }}
                            >
                              ★
                            </Box>
                          ))}
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            ({selectedProduct.seller.rating})
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3, justifyContent: 'space-between' }}>
              <Button
                startIcon={<FavoriteBorder />}
                onClick={() => handleWishlistToggle(selectedProduct.id)}
                sx={{ mr: 2 }}
              >
                {wishlist.includes(selectedProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<Share />}
                  sx={{ mr: 2 }}
                >
                  Share
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Message />}
                >
                  Contact Seller
                </Button>
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Marketplace;