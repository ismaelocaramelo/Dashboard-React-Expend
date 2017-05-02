import React, {Component} from 'react';


const HeaderDashboard = () => {
  //Ajustar container
  return(
    <div>
      <div className="row first-container">
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <h1>Introducing Expend</h1>
          <h2>Expenses captured automatically</h2>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="secon-container">
        <img className="img-fluid img-dashboar center-block" src="style/phone.png" alt="Expend notifications" />
      </div>
    </div>
  );
}


export default HeaderDashboard;
