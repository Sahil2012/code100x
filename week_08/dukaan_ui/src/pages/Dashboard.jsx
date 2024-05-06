import React from "react";
import SideBar from "../components/SideBar";
import AppBar from "../components/AppBar";
import RevenueCard from "../components/RevenueCard";
import UtilityIcons from "../components/UtilityIcons";
import OvalButtons from "../components/OvalButtons";

export default function Dashboard() {
  return (
    <div className="flex relative">
      <SideBar />
      <div className="grow">
        <AppBar />
        <div>
          <div className="flex justify-between px-4 pt-8">
            <div className="text-xl font-bold">Overview</div>
            <div>
              <UtilityIcons title={"This Month"}>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </UtilityIcons>
            </div>
          </div>
          <div className="flex pt-8 flex-wrap">
            <RevenueCard title={'Next Payout'} warning={true} amount={2312.23} orders={13} />
            <RevenueCard title={'Next Payout'} warning={true} amount={2312.23} orders={13}/>
            <RevenueCard title={'Next Payout'} warning={true} amount={2312.23} orders={13}/>

          </div>
          <div className="px-4 flex flex-col gap-y-4 mt-4">
          <div className="flex gap-2 text-xl font-semibold">
            <div>Transactions</div>
            |
            <div>This Month</div>
          </div>
          <div className="flex gap-4">
              <OvalButtons text={'Refunds'} count={13} bgColor={'bg-blue-500'}/>
              <OvalButtons text={'Payouts'} count={123} bgColor={'bg-grey-700'}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
