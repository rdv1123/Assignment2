import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: []
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: [id]
    })

  }

  render() {
  
    return (
      <div className="bg">
        <div className="row">
          <NavBar />
        </div>

        <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
       />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <b>Code | Building</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                    <BuildingList
                      data={this.props.data}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate.bind(this)}
                    />
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
