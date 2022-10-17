import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qJEqXhdT_KBfZMxCleMBqmb78p1NbgTlxSI-6syLBdjI0H53aNx6tVIKtamKX7SVAmQ&usqp=CAU',
    title: 'Bed',
   
  },
  {
    img: 'https://www.ufam.edu.br/images/Artigos/2019/10-Outubro/estduantes_eng_petroleo_gas.jpeg',
    title: 'Books',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwmPLJwHMIgLfWq-7dAprXEJm-sGFNYI32-cTXNF7RApoGG2EgCCV6lR-tSjDupS9EuI&usqp=CAU',
    title: 'Sink',
    
  },
  {
    img: 'https://engpetroleoegas.ufam.edu.br/images/petram.png',
    title: 'Kitchen',
    
  },
  {
    img: 'https://canaltres.com.br/wp-content/uploads/2022/08/image-119-edited.png',
    title: 'Blinds',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1qqfqIi3vOOT6C1BjYqkEyIoYcU0u6ReIAffzH9S8Jxk9x1fcMde_s8x-357-EknGtU&usqp=CAU',
    title: 'Chairs',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUlQr6K1Gmby9FJjsBsBglHvzl6RvZ9jLt9C8ijYyr6gDHBdilq96NDtAs68_m2XijXg&usqp=CAU',
    title: 'Laptop',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmIFmumpPdK2yYzPNyv220R2FQhwHdtrk00QoyelkModHfyKmT7J7SVU-YgVHAa9kvaA&usqp=CAU',
    title: 'Doors',
   
  }
];