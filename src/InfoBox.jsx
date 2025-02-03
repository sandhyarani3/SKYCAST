import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    let Img_URL="https://plus.unsplash.com/premium_photo-1728247441206-dd4831968f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjBzbW9rZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
   let Hot_url="https://media.istockphoto.com/id/485615032/photo/golden-larch-trees.webp?a=1&b=1&s=612x612&w=0&k=20&c=V8HZTVf3T7bX2sw0q1xu_yRNPjy4J9pe7SDCRCjZLcg=";
    let Rain_url="https://media.istockphoto.com/id/543328674/photo/indian-monsoon-2016.webp?a=1&b=1&s=612x612&w=0&k=20&c=84EVKmpF-s_XDmWzvdE7TmxHKMxPGcn0pyI3CSH-aho=";
    let Cold_url="https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.webp?a=1&b=1&s=612x612&w=0&k=20&c=s5lbs26Hlh5-6R19NOUiDKi7IJdlZZYa3vSHMHuqR3A=";
    return(
        <div>
            <h4>weather Information</h4>
            <Card sx={{ maxWidth: 345,margin:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>60
            ?Rain_url
            :info.temp>15
            ?Hot_url
            :Cold_url
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;
            {info.humidity>60
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature:{info.temp}&deg;C</p>
            <p>humidity:{info.humidity}</p>
            <p>Min Temperature:{info.temp_min}&deg;C</p>
            <p>Max Temperature:{info.temp_max}&deg;C</p>
            <p>pressure:{info.pressure}</p>
            <h4>weather:{info.weather}</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    )
}