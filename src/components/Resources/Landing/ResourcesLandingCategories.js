import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Document } from '../../../icons/resources/GroupIconSvgs';

const ResourcesLandingCategories = () => {

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="r-landing-categories-title">All Resources</div>
      <div className='r-landing-categories-container'>
        <div className='r-landing-categories-cards'>
            <Link to="customersupport" className='r-landing-categories-card'>
            <svg className="w-10 h-6 stroke-blue-10 dark:stroke-yellow-6" xmlns="http://www.w3.org/2000/svg" width="40" height="24" fill="none" viewBox="0 0 40 24" role="img" aria-labelledby="group_rh">
              <title id="group_rh">Group Reduced Height</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M25.058 15.146c.4678-.3195 1.0165-.4999 1.5826-.5206.5661-.0206 1.1264.1195 1.6162.404.4898.2846.8891.702 1.1515 1.204.2625.502.3775 1.068.3317 1.6326-1.1998.4193-2.4742.5825-3.741.479-.0039-1.1334-.3303-2.2432-.941-3.198-.5421-.8502-1.2899-1.55-2.1742-2.0345-.8842-.4845-1.8765-.7382-2.8848-.7375-1.0082-.0005-2.0002.2532-2.8843.7377-.8841.4846-1.6317 1.1842-2.1737 2.0343m11.057 3.197.001.031c0 .225-.012.447-.037.666-1.8146 1.0411-3.8709 1.5873-5.963 1.584-2.17 0-4.207-.576-5.963-1.584-.0257-.2314-.0381-.4641-.037-.697m0 0c-1.2664.1073-2.5401-.0553-3.739-.477-.0456-.5644.0694-1.1303.3318-1.6321.2625-.5018.6616-.9191 1.1512-1.2036.4896-.2845 1.0498-.4246 1.6157-.4042.5659.0205 1.1145.2007 1.5823.5199m-.942 3.197c.0036-1.1333.3316-2.2421.942-3.197m8.058-8.772c0 .79565-.3161 1.55871-.8787 2.12132-.5626.56261-1.3256.87868-2.1213.87868-.7956 0-1.5587-.31607-2.1213-.87868-.5626-.56261-.8787-1.32567-.8787-2.12132s.3161-1.55871.8787-2.12132c.5626-.56261 1.3257-.87868 2.1213-.87868.7957 0 1.5587.31607 2.1213.87868.5626.56261.8787 1.32567.8787 2.12132Zm6 3c0 .29547-.0582.58806-.1713.861-.113.273-.2788.5211-.4877.73-.2089.2089-.457.3747-.73.4877-.2729.1131-.5655.1713-.861.1713s-.588-.0582-.861-.1713c-.273-.113-.5211-.2788-.73-.4877-.2089-.2089-.3746-.457-.4877-.73-.1131-.27294-.1713-.56553-.1713-.861 0-.59674.2371-1.16903.659-1.59099.422-.42196.9943-.65901 1.591-.65901s1.169.23705 1.591.65901c.422.42196.659.99425.659 1.59099Zm-13.5 0c0 .29547-.0582.58806-.1713.861-.113.273-.2788.5211-.4877.73-.2089.2089-.457.3747-.73.4877-.2729.1131-.5655.1713-.861.1713s-.588-.0582-.861-.1713c-.273-.113-.521-.2788-.73-.4877-.2089-.2089-.3746-.457-.4877-.73-.1131-.27294-.1713-.56553-.1713-.861 0-.59674.2371-1.16903.659-1.59099.422-.42196.9943-.65901 1.591-.65901s1.169.23705 1.591.65901c.422.42196.659.99425.659 1.59099Z"/>
            </svg>
                <div className='r-landing-categories-card-content'>
                    <div className='title-large pb-7'>Customer Support</div>
                    <div>Resources for assisting customers.</div>
                    <div className='text-neutral-7 dark:text-neutral-4'>E.g. Repairs and Printing</div>
                </div>
            </Link>
            <Link to="employeeresources" className='r-landing-categories-card'>
            <svg className="w-10 h-6 stroke-blue-10 dark:stroke-yellow-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 24" role="img" aria-labelledby="slasheye_rh">
              <title id="slasheye_rh">Slasheye Reduced Height</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.9804 8.223c-.9355 1.10418-1.6321 2.3902-2.04595 3.777 1.29195 4.338 5.30995 7.5 10.06595 7.5.993 0 1.953-.138 2.863-.395m-8.635-12.877c1.7127-1.13019 3.7201-1.73118 5.772-1.728 4.756 0 8.773 3.162 10.065 7.498-.7081 2.3693-2.228 4.4135-4.293 5.774M14.2284 6.228 11.0004 3m3.228 3.228 3.65 3.65m7.894 7.894L29.0004 21m-3.228-3.228-3.65-3.65c.2786-.2786.4996-.6093.6504-.9734.1508-.364.2284-.7541.2284-1.1481 0-.394-.0776-.7841-.2284-1.1481-.1508-.3641-.3718-.6948-.6504-.9734-.2786-.2786-.6093-.4996-.9733-.65037-.364-.15078-.7542-.22838-1.1482-.22838-.394 0-.7841.0776-1.1481.22838-.364.15077-.6948.37177-.9734.65037m4.242 4.242-4.241-4.241"/>
            </svg>
                <div className='r-landing-categories-card-content'>
                    <div className='title-large pb-7'>Employee Resources</div>
                    <div>Employment related resources.</div>
                    <div className='text-neutral-7 dark:text-neutral-4'>E.g. Timeclock and Employee Handbook</div>
                </div>
            </Link>
        </div>
        <Link to='training' className='r-landing-categories-training-card'>
            <Document />
            <div>Training</div>
        </Link>
      </div>
    </>
  );
};

export default ResourcesLandingCategories;
