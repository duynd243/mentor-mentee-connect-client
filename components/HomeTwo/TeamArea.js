import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const TeamArea = () => {
   // allTeamMembers
   const allTeamMembers = useSelector(state => state.teams.allTeams);
   // status
   const status = useSelector(state => state.teams.status);


   // loader
   useEffect(() => {
      if (status === 'pending') {
         return <Container className='my-5 text-center'>
            <Spinner animation="grow" />
         </Container>
      }
   }, [status]);

   return (
      <>
         <section className="team__area pt-115">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="section__title-wrapper-2 mb-40">
                        <span className="section__title-pre-2">Top Instructors</span>
                        <h3 className="section__title-2">Become A Instruction Instructor.</h3>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                     <div className="team__wrapper mb-45 pl-70">
                        <p>Placerat veritatis ullamco rutrum quia illo, aenean eaque necessitatibus aptent vehicula porta? Sollicitudin id, laboris commodi! </p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     allTeamMembers.map(team => {
                        return <div key={team?._id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                           <div className="team__item text-center mb-40">
                              <div className="team__thumb">
                                 <div className="team__shape">
                                    <img src={team?.shape} alt="" />
                                 </div>
                                 <img src={team?.team_sm_img} alt="" />
                                 <div className="team__social transition-3">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                 </div>
                              </div>
                              <div className="team__content">
                                 <h3 className="team__title">
                                    <Link href={`/team-details/${team?._id}`}>
                                       <a >{team?.name}</a>
                                    </Link>
                                 </h3>
                                 <span className="team__designation">Professor</span>
                              </div>
                           </div>
                        </div>
                     })
                  }


               </div>
            </div>
         </section>
      </>
   );
};

export default TeamArea;