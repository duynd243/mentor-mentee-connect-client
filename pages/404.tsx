import React from "react";
import Link from "next/link";
import Footer from "components/common/Footer";
import Header from "../components/Home/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />

      <section className="error__area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8">
              <div className="error__content text-center">
                <div className="error__thumb m-img mb-45">
                  <img src={"/" + "assets/img/error/not-found.jpg"} alt="" />
                </div>
                <div className="error__content">
                  <h3 className="error__title">Page Not Found</h3>
                  <p>
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                  </p>

                  <div className="error__btn">
                    <Link href="/">
                      <a className="tp-btn">Back to home</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ErrorPage;
