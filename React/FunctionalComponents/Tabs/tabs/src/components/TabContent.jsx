import React from "react";
import '../css/TabStyles.css';

const TabContent = (props) => {

    return(
        <div class="contentBox">
            <p class="contentStyle">{props.tabContent}</p>
        </div>
    );
}

export default TabContent;