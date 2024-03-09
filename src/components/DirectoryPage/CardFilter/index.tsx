import SelectInput from '@/components/UI/Inputs/SelectInput';
import TextInput from '@/components/UI/Inputs/TextInput';
import Label from '@/components/UI/Label';
import RedirectBtn from '@/components/UI/RedirectBtn';
import { inp1, inp2, inp3 } from '@/constants/selectinputoption';
import React from 'react'
import { FaList } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const CardFilter = () => {

    return (
        <div className='w-full flex flex-col items-center justify-center mb-8'>
            <div className='flex justify-center items-center mb-4'>
                <span className='ml-1'><FaList /></span>
                <h3>فهرست سایت ها/سرویس ها</h3>
            </div>
            <RedirectBtn
                bgColor='bg-projGreen'
                content='ثبت سرویس/سایت جدید به لیست'
                redirectLink='/issue'
                icon={<></>}
                textSize='text-base 2xl:text-2xl px-1'
                iconSize=''
            />

            <form className='space-y-8 w-full flex flex-col items-center'>
                <div className='inputContainer'>
                    <Label
                        content='نام سرویس'
                        icon={<FaGlobe />}
                        inpNumber={0}
                        width='w-[90%]'
                    />
                    <TextInput
                        placeholder='نام سرویس مورد نظر خود را بنویسید...'
                        inpNumber={0}
                    />
                </div>

                <div className='w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='inputContainer'>
                        <Label
                            content='وضعیت سرویس ها'
                            icon={<FaTag />}
                            inpNumber={1}
                            width='w-full'
                        />
                        <SelectInput
                            placeholder='همه موارد'
                            inpDetails={inp1}
                            inpNumber={1}
                        />
                    </div>
                    <div className='inputContainer'>
                        <Label
                            content='دسته بندی سرویس ها'
                            icon={<FaSitemap />}
                            inpNumber={2}
                            width='w-full'

                        />
                        <SelectInput
                            placeholder='دسته بندی ها'
                            inpDetails={inp2}
                            inpNumber={2}
                        />
                    </div>
                    <div className='inputContainer'>
                        <Label
                            content='اولویت سرویس ها'
                            icon={<></>}
                            inpNumber={3}
                            width='w-full'

                        />
                        <SelectInput
                            placeholder='همه موارد'
                            inpDetails={inp3}
                            inpNumber={3}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CardFilter

