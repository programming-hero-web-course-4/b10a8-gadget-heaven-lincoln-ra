import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const RatingStars = ({rating}) => {
    console.log(rating)
    const [value, setValue] = React.useState(2);
    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Box>
    );
};

export default RatingStars;