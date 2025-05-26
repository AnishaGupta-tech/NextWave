import React, { useState, useEffect } from 'react';
import {
  Box, Button, TextField, Typography, Tabs, Tab,
  Grid, Card, CardContent, CardMedia
} from '@mui/material';

const Marketplace = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [approvedProducts, setApprovedProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('marketplaceProducts')) || [];
    const approved = savedProducts.filter((p) => p.approved);
    setProducts(savedProducts);
    setApprovedProducts(approved);
  }, []);

  const validateInputs = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphaNumSpace = /^[a-zA-Z0-9\s]*$/;
    const alphaNumPunctuation = /^[a-zA-Z0-9\s.,!?'"()\-]*$/;

    if (!name.trim()) newErrors.name = 'Product name is required.';
    else {
      const nameWords = name.trim().split(/\s+/);
      if (nameWords.length > 10) newErrors.name = 'Max 10 words allowed.';
      else if (!alphaNumSpace.test(name)) newErrors.name = 'Only alphanumeric characters allowed.';
    }

    if (!description.trim()) newErrors.description = 'Description is required.';
    else {
      const descWords = description.trim().split(/\s+/);
      if (descWords.length > 200) newErrors.description = 'Max 200 words allowed.';
      else if (!alphaNumPunctuation.test(description)) newErrors.description = 'Only alphanumeric & basic punctuation allowed.';
    }

    if (!price.trim()) newErrors.price = 'Price is required.';
    else if (!/^\d+$/.test(price) || parseInt(price, 10) <= 0) {
      newErrors.price = 'Only positive whole numbers allowed.';
    }

    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email.';

    if (images.length === 0) newErrors.images = 'At least 1 image is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSellSubmit = () => {
    if (!validateInputs()) return;

    const newProduct = {
      name,
      description,
      price,
      email,
      images,
      approved: false,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('marketplaceProducts', JSON.stringify(updatedProducts));

    setName('');
    setDescription('');
    setPrice('');
    setEmail('');
    setImages([]);
    setErrors({});
    alert('Product submitted for approval!');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 3) {
      alert('Max 3 images allowed');
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...imagePreviews]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Buy" />
        <Tab label="Sell" />
      </Tabs>

      {/* BUY TAB */}
      {tabIndex === 0 && (
        <Grid container spacing={2}>
          {approvedProducts.length === 0 ? (
            <Typography>No approved products yet.</Typography>
          ) : (
            approvedProducts.map((product, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  {product.images[0] && (
                    <CardMedia
                      component="img"
                      height="180"
                      image={product.images[0].preview}
                      alt={product.name}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography>{product.description}</Typography>
                    <Typography color="primary">₹{product.price}</Typography>

                    <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'nowrap', overflowX: 'auto' }}>
                      {product.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.preview}
                          alt={`Image ${i + 1}`}
                          style={{ height: 60, borderRadius: 4 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}

      {/* SELL TAB */}
      {tabIndex === 1 && (
        <Box sx={{ maxWidth: 500, mx: 'auto' }}>
          <TextField
            fullWidth
            label="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            multiline
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={!!errors.description}
            helperText={errors.description}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Price (in ₹)"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={!!errors.price}
            helperText={errors.price}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" component="label" sx={{ mb: 1 }}>
            Upload Images (max 3)
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
          {errors.images && <Typography color="error" variant="body2">{errors.images}</Typography>}

          {/* Preview Images with Remove Button */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {images.map((img, i) => (
              <Box key={i} sx={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={img.preview}
                  alt={`Preview ${i + 1}`}
                  style={{ height: 60, borderRadius: 4 }}
                />
                <Button
                  size="small"
                  onClick={() => handleRemoveImage(i)}
                  sx={{
                    minWidth: 'unset',
                    padding: '2px',
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    backgroundColor: '#fff',
                    color: 'red',
                    borderRadius: '50%',
                    fontSize: '12px',
                    lineHeight: 1,
                    zIndex: 1,
                  }}
                >
                  ×
                </Button>
              </Box>
            ))}
          </Box>

          <Button variant="contained" onClick={handleSellSubmit}>
            Submit for Approval
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Marketplace;
