import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class HeaderLayout extends Component {

  render = () => {
      const {activeTab, tabChange} = this.props;
    return(
      <>
        <div className="nav_bar">
            <div>
                <Button 
                    className={activeTab === 'all' ? 'active_tab' : ''}
                    onClick={() => {tabChange('all')}}
                >
                    All Cards
                </Button>
            </div>
            <div>
                <Button 
                    className={activeTab === 'myCards' ? 'active_tab' : ''}
                    onClick={() => {tabChange('myCards')}}
                >
                    My Cards
                </Button>
            </div>
        </div>
      </>
    )
  }

}

export default HeaderLayout;
