import Image from 'next/image'
import NavLinks from './NavLinks'
import HeaderRedirectBtn from './HeaderRedirectBtn'

const Header = () => {
    return (
        <header className='w-full h-auto'>

            <NavLinks />
            <Image
                src={'/assets/image/header/header.png'}
                alt='header-img'
                width={1300}
                height={350}
                className='w-full h-[70vh]'
            />
            <HeaderRedirectBtn />
        </header>
    )
}

export default Header