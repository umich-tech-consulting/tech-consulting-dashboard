import React, { useState } from 'react';

const ColorTagAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-accordion">
      <button className="label-medium text-neutral-7 dark:text-neutral-4 flex gap-1" onClick={toggleAccordion}>
        {title}
        <div className={`${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="w-4 h-auto" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
            </svg>
        </div>
      </button>
      {isOpen && <div className="custom-accordion-content text-neutral-7 dark:text-neutral-4">{content}</div>}
    </div>
  );
};

const CheckoutPrecheck = () => {
  return (
    <>
      <div className="am-action-precheck">
        <div className="am-action-precheck-header">Verify</div>
        <div className="am-action-precheck-main">
          <div className="am-action-precheck-item">Sites at Home</div>
          <ol>
            <li>Is the customer here to pick up a Sites at Home laptop or a laptop from Tech Shop</li>
          </ol>
          <div className="am-action-precheck-item">Laptop, Sleeve, Charger label</div>
          <ol>
            <li>Make sure that the laptop, sleeve, and charger have the same label</li>
          </ol>
          <div className="am-action-precheck-item">Windows or Mac</div>
          <ol>
            <li>Is the customer approved for a Windows or Mac loaner laptop</li>
          </ol>
          <ColorTagAccordion
            title="Laptop Sleeve Tag Color Semantics"
            content={
                <div className="body-small mt-1">
                    <div className='flex gap-2 items-center'>
                        <div>Windows:</div>
                        <div className='h-[10px] w-[10px] rounded-full bg-[#34C759]'></div>
                        <div className='h-[10px] w-[10px] rounded-full bg-[#FFCB05]'></div>
                        <div className='h-[10px] w-[10px] rounded-full bg-[#0000FF]'></div>
                        <div className='h-[10px] w-[10px] rounded-full bg-[#FFAAB9]'></div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div>Mac:</div>
                        <div className='h-[10px] w-[10px] rounded-full bg-[#FF0000]'></div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div>Tech Repair:</div>
                        <div className='h-[10px] w-[10px] rounded-full bg-white border'></div>
                    </div>
                </div>
            }
          />
          <div className="am-action-precheck-item">Ready for loan</div>
          <ol>
            <li>Confirm laptop has been wiped and is on the setup screen</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default CheckoutPrecheck;
