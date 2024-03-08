"use client"
import SelectInput from '@/components/UI/Inputs/SelectInput';
import TextInput from '@/components/UI/Inputs/TextInput';
import RedirectBtn from '@/components/UI/RedirectBtn';
import { inp1, inp2, inp3 } from '@/constants/selectinputoption';
import React from 'react'
import { FaList } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

const CardFilter = ({filterData}:{filterData:(arg:{number:string,value:string})=>void}) => {

    return (
        <div className='w-full flex flex-col items-center justify-center mb-8'>
            <h1 className='flex justify-center items-center space-x-4 mb-4'>
                <span className='ml-1'><FaList /></span>
                <span>فهرست سایت ها/سرویس ها</span>
            </h1>
            <RedirectBtn
                bgColor='bg-projGreen'
                content='ثبت سرویس/سایت جدید به لیست'
                redirectLink='/issue'
                icon={<></>}
            />

            <form className='space-y-8 w-full flex flex-col items-center'>
                <TextInput
                    label='نام سرویس'
                    icon={<FaGlobe />}
                    placeholder='نام سرویس مورد نظر خود را بنویسید...'
                    filterData={filterData}
                    inpNumber='1'
                />
                <div className='w-[90%] grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <SelectInput
                        placeholder='همه موارد'
                        label='وضعیت سرویس ها'
                        icon={<FaTag />}
                        filterData={filterData}
                        inpDetails={inp1}
                        inpNumber='2'

                    />
                    <SelectInput
                        placeholder='دسته بندی ها'
                        label='دسته بندی سرویس ها'
                        icon={<FaSitemap />}
                        filterData={filterData}
                        inpDetails={inp2}
                        inpNumber='3'

                    />
                    <SelectInput
                        placeholder='همه موارد'
                        label='اولویت سرویس ها'
                        icon={<></>}
                        filterData={filterData}
                        inpDetails={inp3}
                        inpNumber='4'

                    />
                </div>
            </form>
        </div>
    )
}

export default CardFilter

/*
                        <div class="form-group">
                            <div class="row search-service-box">
                                <div class="col-xl-12 col-lg-12 col-md12 col-sm-12 col-12">
                                    <p><label class="text-muted" for="servicename"><i class="fa fa-1x fa-globe"></i> نام
                                            سرویس</label>
                                    </p>
                                    <p><input onkeyup="filterData()" name="servicename" id="servicename"
                                            class="form-control" placeholder="نام سرویس مورد نظر خود را بنویسید..." />
                                    </p>
                                </div>
                            </div>
                            <div class="row filter-service-box">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 float-right">
                                    <p><label class="text-muted"><i class="fa fa-1x fa-tag"></i> وضعیت
                                            سرویس‌ها</label></p>
                                    <p>
                                        <select onchange="filterData()" id="status" name="status"
                                            class="w-100 form-select">
                                            <option value="all">همه موارد</option>
                                            <option value="easy-label">ساده</option>
                                            <option value="medium-label">متوسط</option>
                                            <option value="hard-label">سخت</option>
                                            <option value="impossible-label">غیر‌ممکن</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 float-right">
                                    <p><label class="text-muted"><i class="fa fa-1x fa-sitemap"></i> دسته‌بندی
                                            سرویس‌ها</label></p>
                                    <p>
                                        <select onchange="filterData()" id="category" name="category"
                                            class="w-100 form-select">
                                            <option value="all">همه دسته‌بندی‌ها</option>
                                            <option value="e-commerce">فروشگاهی</option>
                                            <option value="transport">حمل و نقل</option>
                                            <option value="job">کاریابی</option>
                                            <option value="news">اخبار</option>
                                            <option value="healthcare">سلامت</option>
                                            <option value="software-as-a-service">نرم‌افزار</option>
                                            <option value="media">رسانه</option>
                                            <option value="event">رویداد</option>
                                            <option value="finance">مالی</option>
                                            <option value="provider">سرویس دهنده‌ها</option>
                                            <option value="messaging">پیام‌رسانی</option>
                                            <option value="reservation">رزرو</option>
                                            <option value="education">آموزشی</option>
                                            <option value="entertainment">سرگرمی</option>
                                            <option value="marketing">بازاریابی</option>
                                            <option value="information">اطلاعات و داده</option>
                                            <option value="advertisement">تبلیغات</option>
                                            <option value="travel">سفر</option>
                                            <option value="mobile">موبایل</option>
                                            <option value="design">طراحی</option>
                                            <option value="blog">وبلاگ‌ها</option>
                                            <option value="game">بازی</option>
                                            <option value="insurance">بیمه</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 float-right">
                                    <p><label class="text-muted">اولویت سرویس‌ها</label></p>
                                    <p>
                                        <select onchange="filterData()" id="priority" name="priority"
                                            class="w-100 form-select">
                                            <option value="all">همه موارد</option>
                                            <option value="1">سرویس‌های که استفاده روزمره دارند</option>
                                            <option value="2">سرویس‌های که استفاده روزمره ندارند</option>
                                            <option value="3">سرویس‌های که کم کاربرد هستند</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
*/