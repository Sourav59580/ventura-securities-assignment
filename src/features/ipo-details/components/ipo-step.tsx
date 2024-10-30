import { Steps } from "primereact/steps";
import React, { useState } from "react";
import { Check } from "react-bootstrap-icons";

import style from "../ipo-details.module.scss";

const IpoStep = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Timeline data for the IPO
  const ipoTimeline = {
    biddingStart: "2024-11-01",
    biddingEnd: "2024-11-04",
    allotmentFinalization: "2024-11-06",
    refundInitiation: "2024-11-07",
    dematTransfer: "2024-11-08",
    listingDate: "2024-11-05",
  };

  // Function to render each step's icon and handle click
  const itemRenderer = (item: { icon: any, label: any }, itemIndex: number) => {
    console.log('item: ', item);
    const isActiveItem = activeIndex === itemIndex;
    const backgroundColor = isActiveItem ? "#4FAF54" : "#4FAF54";
    const textColor = isActiveItem ? "#fff" : "#fff";

    return (
      <div style={{ position: 'relative' }}>
        <span
          className={style.stpBox}
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
            marginTop: "-25px",
            zIndex: 10,
            position: 'relative',
            top: '30px',
            margin: 'auto'
          }}
        >
          <i className={`${item.icon} text-xl`} />
        </span>
        
         <p style={{ position: 'relative', top: '40px', width: '100px', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: item?.label }}/>
      </div>
    );
  };

  // Steps configuration with timeline data
  const items = [
    {
      label: `<b>Bidding \n start</b><br> ${ipoTimeline.biddingStart}`,
      icon: "pi pi-user pi-check",
      template: (item: any) => itemRenderer(item, 0),
    },
    {
      label: `<b>Bidding \n end</b><br/> ${ipoTimeline.biddingEnd}`,
      icon: "pi pi-calendar pi-check",
      template: (item: any) => itemRenderer(item, 1),
    },
    {
      label: `<b>Allotment \n finalization</b><br/> ${ipoTimeline.allotmentFinalization}`,
      icon: "pi pi-check",
      template: (item: any) => itemRenderer(item, 2),
    },
    {
      label: `<b>Refund \n initiation</b><br/> ${ipoTimeline.refundInitiation}`,
      icon: "pi pi-money-bill pi-check",
      template: (item: any) => itemRenderer(item, 3),
    },
    {
      label: `<b>Demat \n transfer</b><br/> ${ipoTimeline.dematTransfer}`,
      icon: "pi pi-check",
      template: (item: any) => itemRenderer(item, 4),
    },
    {
      label: `<b>Listing \n date</b> <br/> ${ipoTimeline.listingDate}`,
      icon: "pi pi-list pi-check",
      template: (item: any) => itemRenderer(item, 5),
    },
  ];

  return (
    <Steps
      model={items}
      activeIndex={activeIndex}
      readOnly={true}
      className="m-2 pt-4"
    />
  );
};

export default IpoStep;
