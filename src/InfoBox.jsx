
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1691690784883-34c94f9278e1?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=1024x1024&w=is&k=20&c=aNyp4atd-QF1Pf7PG69cP0moyao0Ip2S9iXQIq9Fxls=";
    let COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=1024x1024&w=is&k=20&c=A_D48BLCy76ux8guBDeYxk5c8i8WqWvQOcNVlFKOGk4=";
    let  RAIN_URL = "https://media.istockphoto.com/id/1089986346/photo/rain-cloud.webp?b=1&s=170667a&w=0&k=20&c=SisRrXQb2zIHVo1xOHLG-_CdvwML4ASepjoX8KKNjls=";

    return (
        <div className="InfoBox">
         
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
            info.humidity>80 ?
            RAIN_URL :
            info.temp >15
            ? HOT_URL :
            COLD_URL
        }
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity  = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather feels like  = {info.feelslike}&deg;C</p>
         
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    );
}