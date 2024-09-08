import React, { useRef } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import './accordion.css'


export const AccordionItem = ({ faqItem, onClick, isActive }) => {
    const itemRef = useRef(null); // створюємо референс для доступу до висоти елемента

    return (
        <li className={`accordion-item ${isActive ? 'active' : ''}`}>
            <button className='accordion-header' onClick={onClick}>
                {faqItem.q}
                <FaArrowDownLong className={`arrow-down ${isActive ? "active" : ""}`} />
            </button>
            <div
                className="accordion-collapse"
                style={
                    isActive
                        ? { height: itemRef.current ? `${itemRef.current.scrollHeight}px` : "auto" }
                        : { height: "0px" }
                }
            >
                <div className="accordion-body" ref={itemRef}>
                    {faqItem.a}
                    
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;
