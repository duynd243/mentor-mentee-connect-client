import Link from "next/link";
import BeanIcon from "../common/BeanIcon";
import { useQuery } from "react-query";
import walletApi from "apis/wallet";

const ProfileArea = ({ userData, firebaseUser }) => {
  // quantity
  const quantity = 0;
  // myOrders
  const myOrders = [];
  const { data: userBean, isLoading } = useQuery(["userBean", userData], () =>
    walletApi.getUserBean(userData?.phone)
  );

  return (
    <section className="profile__area pt-120 pb-50 grey-bg-2">
      <div className="container">
        <div className="profile__basic-inner pb-20 white-bg">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-md-6">
              <div className="profile__basic d-md-flex align-items-center">
                <div className="profile__basic-thumb mr-30">
                  <img
                    src={userData?.imageUrl || firebaseUser.photoURL}
                    alt=""
                  />
                </div>
                <div className="profile__basic-content">
                  <h3 className="profile__basic-title">
                    Chào, <span>{userData?.fullName}</span>
                  </h3>
                  <p>
                    {myOrders?.length} Running Courses
                    <Link href="/my-courses">
                      <a className="ml-10">View Course</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-md-6">
              <div className="profile__basic-balance d-flex align-items-center justify-content-md-end">
                <div className="balance-info mr-10">Số dư ví BeanOi</div>
                <div className="balance-item">
                  {userBean?.point ?? 0}{" "}
                  <BeanIcon position="right" fillColor="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileArea;
