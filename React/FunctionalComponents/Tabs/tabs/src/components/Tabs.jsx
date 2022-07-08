import React from 'react';
import '../css/TabStyles.css';

const Tabs = (props) => {
    const tabInfo = "Tab" + " " + props.tabNum + " " + "info is showing."
    
    const SetTabInfo = () => {
        props.onTabChange(tabInfo);
    };

    return (
        <div>
            <h2 onClick={SetTabInfo} class="tabStyles">Tab{ props.tabNum }</h2>
        </div>
    );
}

export default Tabs;