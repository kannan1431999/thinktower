import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import InfinitScroll from 'react-infinite-scroll-component';


class BodyLayout extends Component {

  render = () => {
      const {myCardHandler, list, increase, activeTab, nextUser} = this.props;
    return(
      <>
      <div>
          <InfinitScroll
          dataLength = {list.length}
          next = {nextUser}
          hasMore = {true}
          loader={<h4>{list.length !== 0 ? 'Loading ...' : 'No Data'}</h4>}
          className="card_layout"
          >
            {
                list && list.map((data) => {
                    return (
                        <div className="card">
                            <div className="card_details">
                                <span><b>Product:</b> {data.item}</span>
                                <div><b>Brand:</b> {data.name}</div>
                                <div><b>Price:</b> {data.cost}</div>
                                    <div className="card_btn">
                                        <div>
                                            <Button onClick={()=> {increase('increase',  data.id)}}>+</Button>
                                        </div>
                                        <div>
                                            {data.quantity}
                                        </div>
                                        <div>
                                            <Button onClick={()=> {increase('decrease',  data.id)}}>-</Button>
                                        </div>
                                    </div>
                                    <div style={{'margin-top': '20px', 'textAlign': 'center'}}>
                                        <Button onClick={() => {myCardHandler(activeTab === 'all' ? 'myCard' : 'all', data.id)}}>{activeTab === 'all' ? 'ADD CARD' : 'Remove Card'}</Button>
                                    </div>
                            </div> 
                        </div>
                    )
                })
            }
          </InfinitScroll>
      </div>
      </>
    )
  }

}

export default BodyLayout;
