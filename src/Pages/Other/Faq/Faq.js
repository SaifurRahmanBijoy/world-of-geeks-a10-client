import React from "react";

const Faq = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="border-2 border-black shadow-lg m-3 p-4 bg-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold pb-1">
          How long can I access these courses?
        </h1>
        <p className="text-sm">
          Our courses will stay with you for so long as you need them. No
          worries!
        </p>
      </div>
      <div className="border-2 border-black shadow-lg m-3 p-4 bg-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold pb-1">
          Can I get a job after completing GeekHub's courses?
        </h1>
        <p className="text-sm">
          We don't promise jobs. However, we do our best to prepare our students
          for intern level jobs!
        </p>
      </div>
      <div className="border-2 border-black shadow-lg m-3 p-4 bg-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold pb-1">
          Can I get a discount on GeekHub's courses?
        </h1>
        <p className="text-sm">
          Of course, we offer discounts to students who have brilliant academic
          records.
        </p>
      </div>
      <div className="border-2 border-black shadow-lg m-3 p-4 bg-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold pb-1">
          How can I pay for the courses?
        </h1>
        <p className="text-sm">
          You can pay by debit, credit cards, and as well as Bkash!
        </p>
      </div>
    </div>
  );
};

export default Faq;
