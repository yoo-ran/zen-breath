import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faUser, faGears,faBell, faCreditCard, faShieldHalved, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../components/SearchBar';

const Settings = () => {
 
    const iconMapping = {
        faUser: faUser,
        faGears: faGears,
        faBell: faBell,
        faCreditCard: faCreditCard,
        faShieldHalved: faShieldHalved,
        faArrowRightToBracket: faArrowRightToBracket,
      };
      const settingObj = [
        {icon:"faUser", title:"Profile"},
        {icon:"faGears", title:"General"},
        {icon:"faBell", title:"Notification"},
        {icon:"faCreditCard", title:"Payments"},
        {icon:"faShieldHalved", title:"Privacy"},
        {icon:"faArrowRightToBracket", title:"Logout"}
    ]
    return(
        <div className='flex flex-col gap-y-24 md:px-12 md:pt-12'>
            <section className='flex justify-between items-start'>
                <h1 className='font-bold text-xl'><FontAwesomeIcon icon={faGear} /> Setting</h1>
                <div>
                    <SearchBar/>
                </div>

            </section>

            <section className='w-full h-96 flex flex-wrap justify-between gap-y-4'>
                {
                    settingObj.map((item, id) => (
                    <div key={id} className='flex flex-col justify-center rounded-xl drop-shadow-xl gap-y-4 text-center bg-white bg-opacity-50 backdrop-blur-lg lg:w-64 lg:text-xl'>
                        <FontAwesomeIcon icon={iconMapping[item.icon]} />
                        <p>{item.title}</p>
                    </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Settings