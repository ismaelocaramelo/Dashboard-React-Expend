import React, {Component} from 'react';


const HeaderDashboard = () => {

  return(
    <div>
      <div className="row first-container">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
          <h1>Introducing Expend</h1>
          <h3>Expenses captured automatically</h3>
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
