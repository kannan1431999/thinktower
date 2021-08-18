import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderLayout from './HeaderLayout'; 
import BodyLayout from './BodyLayout';

class MainLayout extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'all',
      dataObj: [
        {name: 'LG', item: 'Mobile', cost: '2000', type: 'all', id: 1, quantity: 0 },
        {name: 'Vivo', item: 'Mobile', cost: '2000', type: 'all', id: 2, quantity: 0 },
        {name: 'Huawei', item: 'Mobile', cost: '2000', type: 'all', id: 3, quantity: 0 },
        {name: 'HP', item: 'Laptop', cost: '2000', type: 'all', id: 4, quantity: 0 },
        {name: 'HP', item: 'Laptop', cost: '2000', type: 'all', id: 5, quantity: 0 },
        {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 6, quantity: 0 },
        {name: 'HP', item: 'Laptop', cost: '2000', type: 'all', id: 7, quantity: 0 },
        {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 8, quantity: 0 },
        {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 9, quantity: 0 },
        {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 10, quantity: 0 },
        {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 11, quantity: 0 },
        {name: 'HP', item: 'Laptop', cost: '2000', type: 'all', id: 12, quantity: 0 },

      ]
    }
  }

  tabChange = (name) => {
    this.setState({
      activeTab: name,
    })
  }

  myCardHandler = (name, id) => {
    const {dataObj} = this.state
    let cardDetails = dataObj.filter((task) => {
              if (task.id === id) {
                  task.type = name;
              }
              return task;
          });
    this.setState({
      ...this.state,
      dataObj: cardDetails,
    })
    
  }

  increase = (name, id) => {
    const {dataObj} = this.state
    if (name === 'increase') {
      let cardDetails = dataObj.filter((task) => {
          if (task.id === id) {
              task.quantity = task.quantity + 1;
          }
          return task;
      });
      this.setState({
        ...this.state,
        dataObj: cardDetails,
      })
    } else {
      let cardDetails = dataObj.filter((task) => {
        if (task.id === id) {
            task.quantity = task.quantity > 0 ? task.quantity - 1 : 0;
        }
        return task;
    });
    this.setState({
      ...this.state,
      dataObj: cardDetails,
    })
    }
  }

  nextUser = () => {
    console.log('data2')
    const {dataObj} = this.state;
    dataObj.push({name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 8, quantity: 0 },
    {name: 'Asus', item: 'Tablet', cost: '2000', type: 'all', id: 9, quantity: 0 })
    this.setState({
      ...this.state,
      dataObj,
    })
  }

  render = () => {
    const {activeTab, dataObj} = this.state;
    let listObj = {
      all: [],
      myCard: [],
    }
    dataObj.forEach((data) => {
      if(listObj[data.type] !== undefined) {
        listObj[data.type].push(data);
      }
    })
    console.log('all', listObj);
    return(
      <>
        <Grid>
          <Grid.Row>
            <HeaderLayout 
              activeTab={activeTab}
              tabChange={this.tabChange}
            />
          </Grid.Row>
          <Grid.Row>
              <BodyLayout
                myCardHandler={this.myCardHandler}
                increase={this.increase}
                list = {activeTab === 'all' ? listObj.all : listObj.myCard}
                activeTab={activeTab}
                nextUser={this.nextUser}
                />
          </Grid.Row>
        </Grid>
      </>
    )
  }

}

export default MainLayout;
