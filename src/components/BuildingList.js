import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class BuildingList extends React.Component {
	render() {

		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				return (
					directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
					directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				)
			})
			.map(directory => {
				return (
            		<tbody key={directory.id} onClick={() => selectedUpdate(directory.id-1)}>
						<TableRow key={directory.id}>
							<TableCell component="th">
							{directory.code}
							</TableCell>
							
							<TableCell>{directory.name}</TableCell>
						</TableRow>
					</tbody>	
				);		
			});
			
			return (
				<div>
					<Table>
						{buildingList}
					</Table>
				</div>
			);
		}
}

export default BuildingList;
