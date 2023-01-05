import { RxDashboard } from 'react-icons/rx';
import { RiChromeLine, RiSwordLine } from 'react-icons/ri';
import { BiCar, BiShoppingBag, BiMessageDetail } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SlSettings, SlLogout } from 'react-icons/sl';

export const barlinksTop = [
    {
        linkname: 'Dasahboard',
        key: 'dasahboard',
        icon: <RxDashboard />,
        path: '/'
    },
    {
        linkname: 'Assets',
        key: 'assets',
        icon: <RiChromeLine />,
        path: '/assets'
    },
    {
        linkname: 'Booking',
        key: 'booking',
        icon: <BiCar />,
        path: '/pages/booking'
    },
    {
        linkname: 'Sell Cars',
        key: 'sellcars',
        icon: <BiShoppingBag />,
        path: '/sellcars'
    },
    {
        linkname: 'Buy Cars',
        key: 'buycars',
        icon: <BsCart2 />,
        path: '/buycars'
    },
    {
        linkname: 'Services',
        key: 'services',
        icon: <RiSwordLine />,
        path: '/services'
    },
    {
        linkname: 'Calender',
        key: 'calender',
        icon: <AiOutlineCalendar />,
        path: '/calender'
    },
    {
        linkname: 'Messages',
        key: 'messages',
        icon: <BiMessageDetail />,
        path: '/messages'
    }
]

export const barlinksBot = [
    {
        linkname: 'Settings',
        key: 'settings',
        icon: <SlSettings />,
        path: '/settings'
    },
    {
        linkname: 'Log out',
        key: 'logout',
        icon: <SlLogout />,
        path: '/logout'
    }
]