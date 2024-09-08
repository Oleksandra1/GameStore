import React, { useState } from 'react';
import { AccordionItem } from './Accordionitem';



export const Accordion = ({ faqList }) => {
    const [activeIndex, setActiveIndex] = useState(null); // зберігаємо індекс активного елемента

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // якщо елемент вже відкритий, закриваємо його
    };

    return (
        <div className='section-accordion'>
            <h2>F.A.Q</h2>
            <ul className="accordion">
                {faqList.map((faqItem, index) => {
                    const isActive = index === activeIndex; // перевіряємо, чи активний цей елемент
                    return (
                        <AccordionItem
                            key={index} // додаємо унікальний ключ для кожного елемента
                            faqItem={faqItem} 
                            isActive={isActive} // передаємо стан активності елемента
                            onClick={() => toggleAccordion(index)} // передаємо функцію, що змінює активний елемент
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Accordion;
