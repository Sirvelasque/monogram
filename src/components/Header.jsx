import "../css/header.css"
const Header = () => {
  return (
    <div className="header">
      <div className="headerSlider">
      <ul className="slider">
    <li>
        <input type="radio" id="slide1" name="slide" defaultChecked/>
        <label htmlFor="slide1"></label>
          <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/872485/coldchase.jpg" alt="Panel 1"/>
    </li>
    <li>
        <input type="radio" id="slide2" name="slide"/>
        <label htmlFor="slide2"></label>
          <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/980517/icehut_sm.jpg" alt="Panel 2"/>
    </li>
    <li>
        <input type="radio" id="slide3" name="slide"/>
        <label htmlFor="slide3"></label>
          <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/943660/hq_sm.jpg" alt="Panel 3"/>
    </li>
    <li>
        <input type="radio" id="slide4" name="slide"/>
        <label htmlFor="slide4"></label>
          <img src="https://dribbble.s3.amazonaws.com/users/322/screenshots/599584/home.jpg" alt="Panel 4" />
    </li>
</ul>
      </div>
      <div className="seeMore">
        <div className="seeMoreText">
          A CONSOLE FOR EVERY WORKFLOW
        </div>
        ⇩ ⇩ ⇩ 
      </div>
    </div>
  )
}

export default Header