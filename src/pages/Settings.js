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
        <div className='flex flex-col items-center gap-y-24 p-8 md:px-12 md:pt-12 h-lvh'>
            <section className='flex flex-col md:flex-row justify-between items-start gap-y-4 w-full'>
                <h1 className='font-bold text-xl'><FontAwesomeIcon icon={faGear} /> Setting</h1>
                <div>
                    <SearchBar/>
                </div>

            </section>

            <section className='w-full md:w-10/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2'>
                {
                    settingObj.map((item, id) => (
                    <div key={id} className='flex flex-col justify-center rounded-xl drop-shadow-xl gap-y-4 text-center bg-white bg-opacity-50 backdrop-blur-lg lg:w-64 py-4 lg:py-10 lg:text-xl'>
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