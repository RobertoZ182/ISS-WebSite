import React from 'react';
import MainBody from '../compoments/MainBody/MainBody';
import ImgMain from '../compoments/ImgMain/ImgMain';
import LocList from '../compoments/LocList/LocList';
const MainPage = () => {
    return(
        <div className="main">
        <ImgMain/>
        <MainBody/>
        <LocList/>
        </div>
    )
}

export default MainPage;