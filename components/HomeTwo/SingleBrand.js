

const SingleBrand = ({brand}) => {
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="brand__item text-center m-img mb-40">
                    <img src={`assets/img/brand/brand-${brand}.png`} alt="" />
                </div>
            </div>
        </>
    );
};

export default SingleBrand;