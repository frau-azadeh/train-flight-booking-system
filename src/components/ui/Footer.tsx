import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Phone, Send, Shield, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.1)] bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 texxt-right">
          <div className="col-span-1">
            <span className="font-bold block">همسفر</span>
            <ul className="space-y-2 cursor-pointer text-sm text-gray-700">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا همسفر</li>
              <li>همسفر پلاس</li>
              <li>بیمه همسافرتی</li>
              <li>مجله همسفر</li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="font-bold  block">خدمات همسفر</span>
            <ul className="space-y-2 cursor-pointer text-sm text-gray-700">
              <li>مرکز پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>قوانین و مقررات</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
          <div className="col-span-1">
            <span className="font-bold block">اطلاعات تکمیلی</span>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>فروش سازمانی</li>
              <li>پنل آژانس همسفر</li>
              <li>فرصت های شغلی</li>
              <li>سنجش رضایتمندی</li>
            </ul>
          </div>
          <div className="col-span-3 flex flex-col gap-4 items-end text-sm text-gray-700">
            <div className="flex items-center gap-2 self-end">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </div>
            <div className="flex items-center gap-2 self-end">
              <Phone className="w-4 h-4 hover:scale-125 cursor-pointer" />
              <span>تلفن پشتیبانی: ۰۲۱-۴۰۰۰۰۰</span>
            </div>
            <p>دفتر پشتیبانی: تهران، ولنجک خ سوم</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-items-center self-end mt-4">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 text-gray-600">
        <Linkedin size={20}/>
        <Instagram size={20}/>
        <Shield size={20}/>
        <Send size={20}/>
        <Youtube size={20}/>
      </div>
      <div className="flex justify-center mt-6 mb-6 text-sm text-gray-500 ">
      کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
      شرکت سفرهای همسفر می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;
