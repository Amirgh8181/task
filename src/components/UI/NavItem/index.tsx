import NavItemUi from "./NavItemUi"
import { FaHome, FaListUl, FaNetworkWired, FaScroll, FaNewspaper, FaDonate, FaQuestion } from "react-icons/fa";


const NavItem = () => {
    return (
        <>
            <NavItemUi content='صفحه اصلی' icon={<FaHome />} redirectLink='/index' />
            <NavItemUi content='دایرکتوری سرویس ها' icon={<FaListUl />} redirectLink='/directory' />
            <NavItemUi content='مشارکت کنندگان' icon={<FaNetworkWired />} redirectLink='/collabrator' />
            <NavItemUi content='بنرها' icon={<FaScroll />} redirectLink='/banners' />
            <NavItemUi content='وبلاگ' icon={<FaNewspaper />} redirectLink='/blog' />
            <NavItemUi content='حمایت مالی' icon={<FaDonate />} redirectLink='/donate' />
            <NavItemUi content='سوالات متداول' icon={<FaQuestion />} redirectLink='/faq' />
        </>
    )
}

export default NavItem