import jinwoo from "../assets/images/son_jin_woo.png";
// import jinwoo from "../assets/images/woo.png";
// import jinwoo from "../assets/images/jin_woo.png";

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="home_box">
                        <div className="home_left_box">
                            <h2 className="home_left_box_title">Hi! My name's </h2>
                            <h1 className="home_left_box_name">Mahmudjon</h1>
                            <h3 className="home_left_box_job">Front-end Developer</h3>
                        </div>
                            <img src={jinwoo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home