import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding } = this.props;

		const buildInfo = selectedBuilding.map(id => {

			const { code, name, coordinates, address} = data[id]
			if (coordinates){
				return (
					<Card key="id" margin="100">
					<CardContent>
					  <Typography color="textSecondary">
						UF Building Information
					  </Typography>
					  <Typography variant="headline" component="h2">
					  	{name}
					  </Typography>
					  <Typography color="textSecondary">
					    Building Code: {code}
					  </Typography>
					  <Typography component="p">
					  Latitude: {coordinates.latitude}<br>
					 </br>Longitude: {coordinates.longitude}<br>
					 </br>Address: <b>{address}</b>
					  </Typography>
					</CardContent>
					<CardActions>
					  <Button size="small">Learn More</Button>
					</CardActions>
				  </Card>
			)} else {
				return (
					<Card key="id">
					<CardContent>
					  <Typography color="textSecondary">
						UF Building Information
					  </Typography>
					  <Typography variant="headline" component="h2">
					  	{name}
					  </Typography>
					  <Typography color="textSecondary">
					    Building Code: {code}
					  </Typography>
					  <Typography component="p">
					  Latitude: <br>
					 </br>Longitude: <br>
					 </br>Address: <b>{address}</b>
					  </Typography>
					</CardContent>
					<CardActions>
					  <Button size="small">Learn More</Button>
					</CardActions>
				  </Card>
				);
			}
		})

		return (
			<div className="selectedBuilding">
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				{buildInfo}
			</div>
			
		);
	}
}
export default ViewBuilding;