import NavItem from '@/components/UI/NavItem'
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
const DesktopNav = () => {
  return (
    <div
    className='container h-full flex justify-center items-center'
>
    <NavItem content='صفحه اصلی' icon={<FaHome />} redirectLink='/index'/>
    <NavItem content='دایرکتوری سرویس ها' icon={<FaListUl />} redirectLink='/directory'/>
    <NavItem content='مشارکت کنندگان' icon={<FaNetworkWired />} redirectLink='/collabrator'/>
    <NavItem content='بنرها' icon={<FaScroll />} redirectLink='/banners'/>
    <NavItem content='وبلاگ' icon={<FaNewspaper />} redirectLink='/blog'/>
    <NavItem content='حمایت مالی' icon={<FaDonate />} redirectLink='/donate'/>
    <NavItem content='سوالات متداول' icon={<FaQuestion />} redirectLink='/faq'/>
</div>
  )
}

export default DesktopNav