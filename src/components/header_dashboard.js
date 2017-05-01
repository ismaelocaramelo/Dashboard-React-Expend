import React, {Component} from 'react';


const HeaderDashboard = () => {
  //Ajustar container
  return(
    <div className="text-center">
      <h1>Introducing Expend</h1>
      <h2>Expenses captured automatically</h2>
      <div className="secon-container">
        <img className="img-fluid img-dashboar center-block" src="style/phone.png" alt="Expend notifications" />
      </div>
    </div>
  );
}

export default HeaderDashboard;
