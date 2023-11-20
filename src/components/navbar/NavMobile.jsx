import { useState } from "react";

import "../../css/mobile/navBar.css"

const NavMobile = () => {
  const [workflowShow, setWorkflowShow] = useState(false);
  const [navOptionsShow, setNavOptionsShow] = useState(false);
  const [shopCarShow, setShopCarShow] = useState(false);

  const hideMenus = (selected = "") => {
    if(navOptionsShow && selected !="nav") setNavOptionsShow(false);
    if(workflowShow && selected !="workflows") setWorkflowShow(false);
    if(shopCarShow && selected !="shopcar") setShopCarShow(false);
  }

  const handleWorkflowsShow = () => {
    setWorkflowShow(!workflowShow)
    hideMenus("worflows");
  }

  const handleNavShow = () => {
    setNavOptionsShow(!navOptionsShow)
    hideMenus("nav");
  }

  const handleShopCarShow = () => {
    setShopCarShow(!shopCarShow)
    hideMenus("shopcar");
  }

  const Workflows = () => {

    return(
      <ul className="navMenuBar">
        <li>WFirst</li>
        <li>WSecond</li>
        <li>WThird</li>
      </ul>
    )
  }

  const nav = () => {

    return(
      <ul className="navMenuBar">
        <li>NavFirst</li>
        <li>NavSecond</li>
        <li>NavThird</li>
      </ul>
    )
  }
  
  return (
    <div id="navBarMobile">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTxhr2myUv8DRzoKJ2NdgO0VF6DCPLnhszKxkTHDNygLtbbR7Z6OGPI-orQLhM0cJI60&usqp=CAU"></img>
      </div>
      <ul className="navMenu">
        <li onClick={handleWorkflowsShow}>
          WORKFLOWS
        </li>
        <li onClick={handleNavShow}>ico</li>
        <li>ico USD</li>
      </ul>
      <div className="navOptions">
        {workflowShow ? <Workflows />:""}
      </div>
    </div>
  )
};

export default NavMobile;