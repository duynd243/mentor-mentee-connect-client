import Link from "next/link";

const HeroArea = () => {
    return <section style={{backgroundColor: "#edeef3"}}
                    className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
        <div className="hero__shape">
            <img className="hero-1-circle" src="/assets/img/shape/hero/hero-1-circle.png" alt=""/>
            <img className="hero-1-circle-2" src="/assets/img/shape/hero/hero-1-circle-2.png" alt=""/>
            <img className="hero-1-dot-2" src="/assets/img/shape/hero/hero-1-dot-2.png" alt=""/>
        </div>
        <div className="container">
            <div className="hero__content-wrapper mt-90">
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="hero__content p-relative">
                            <h3 className="hero__title">
                                <span>Access 2700+</span>
                                <span className="yellow-shape">Online
                                    <img style={{height: "22%"}} src="/assets/img/shape/yellow-bg.png"
                                         alt="yellow-shape"/> </span>
                                Tutorial From Top Instructor.</h3>
                            <p>Meet university, and cultural institutions, who'll share their experience.</p>
                            <Link href="/courses">
                                <a className="e-btn">View all course</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="hero__thumb d-flex p-relative">
                            <div className="hero__thumb-shape">
                                <img className="hero-1-dot" src="../../assets/img/shape/hero/hero-1-dot.png" alt=""/>
                                <img className="hero-1-circle-3" src="../../assets/img/shape/hero/hero-1-circle-3.png"
                                     alt=""/>
                                <img className="hero-1-circle-4" src="../../assets/img/shape/hero/hero-1-circle-4.png"
                                     alt=""/>
                            </div>
                            <div className="hero__thumb-big mr-30">
                                <img src="../../assets/img/hero/hero-1.jpg" alt=""/>
                                <div className="hero__quote hero__quote-animation">
                                    <span>Tomorrow is our</span>
                                    <h4>“When I Grow Up” Spirit Day!</h4>
                                </div>
                            </div>
                            <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                                <img src="../../assets/img/hero/hero-sm-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default HeroArea;