import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title, content }) => {
  return (
    <Card style={{ margin: '20px', flex: 1 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;