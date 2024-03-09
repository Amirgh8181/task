import NavItem from '@/components/UI/NavItem'

const DesktopNav = () => {
  return (
    <nav
      className='w-full h-20 bg-white/0 hidden md:fixed top-0 z-40 backdrop-blur-[12px] mx-auto 
                  md:grid place-items-center text-black '
    >
      <div
        className='container h-full flex justify-center items-center'
      >
        <NavItem />
      </div>

    </nav>

  )
}

export default DesktopNav