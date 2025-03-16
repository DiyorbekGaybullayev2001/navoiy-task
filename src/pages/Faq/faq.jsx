import React from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqDatas = [
  {
    question: "Navoiy innovatsiyalar instituti diplomi davlat universitetlari diplomidek kuchga egami?",
    answer:
      "Mazkur Oliy Ta’lim Muassasa O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi tomonidan 2022 yil 6 avgust kuni berilgan №047758 sonli Litsenziya asosida oliy ta’lim xizmatlari ko‘rsatadi. Ta’lim jarayoni to‘liq davlat ta’lim standartlarida olib borilganligi inobatga olingan holda Navoiy innovatsiyalar instituti bitiruvchilari davlat OTMlari diplomi maqomida hisoblanadi.",
  },
  {
     question: "Universitetda qabul qachongacha davom etadi?",
     answer: "Navoiy innovatsiyalar institutida qabul jarayoni davom etadi " },
  {
     question: "Kirish imtihoni qaysi fanlardan bo‘lib o‘tadi?",
     answer: "Navoiy innovatsiyalar institutiga kirish imtihonlar DTM darajasidagi majburiy va asosiy fanlardan test shaklida bo’lib o’tadi." },
  {
     question: "O‘qish uchun to‘lovni bo‘lib-bo‘lib amalga oshirsa bo‘ladimi?", 
     answer: "Navoiy innovatsiyalar institutida ta’lim olish uchun shartnoma summasini bir yilga to’liq yoki har semestr uchun alohida alohida xolda amalga oshirish imkoni beriladi.  " },
  {
     question: "Grant asosida o‘qish imkoni bormi?", 
     answer: "Navoiy innovatsiyalar institutida ta’lim to’lov kontrakt asosida tashkil etilishi bilan bir qatorda, iqtidorli talabalar uchun maxsus imtiyozlar taqdim etiladi" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="  flex justify-center items-center p-4">
      <div className="w-[95%] md:w-[80%]">
        <h2 className="text-center text-white text-xl md:text-3xl font-bold mb-6">
          ENG KO'P SO'RALADIGAN SAVOLLAR
        </h2>
        <div className="space-y-4">
          {faqDatas.map((item, index) => (
            <div key={index} className="bg-white rounded-4xl  p-[10px] shadow-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center text-left p-[15px] transition-all rounded-3xl hover:bg-[#028910]  text-lg hover:text-white font-semibold cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {index + 1}. {item.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && item.answer && (
                <div className="p-4 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
