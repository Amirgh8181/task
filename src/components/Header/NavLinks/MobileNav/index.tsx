"use client"

import NavItem from "@/components/UI/NavItem";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const menuVar = {
    initial: {
      scaleY: 0
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren"
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        when: 'afterChildren'
      }
    }
  }

  return (
    <nav>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="fixed left-0 top-0  m-[2vw] text-xl bg-projYello p-2 rounded-md border
                   border-black/30 text-black/50 cursor-pointer z-40"
      >
        <IoMenu />
      </div>

      <AnimatePresence>
        {
          openMenu &&
          <motion.div
            className="w-full h-screen fixed inset-0 bg-projYello/80 origin-top z-30 flex flex-col justify-center
             items-center space-y-8"
            variants={menuVar}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <NavItem />
          </motion.div>
        }
      </AnimatePresence>
    </nav>
  )
}

export default MobileNav