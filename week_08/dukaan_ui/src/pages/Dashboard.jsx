import React from "react";
import SideBar from "../components/SideBar";
import AppBar from "../components/AppBar";
import RevenueCard from "../components/RevenueCard";
import UtilityIcons from "../components/UtilityIcons";
import OvalButtons from "../components/OvalButtons";
import TableHead from "../components/TableHead";
import TableRowItem from "../components/TableRowItem";
import SearchBar from "../components/SearchBar";

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
            <RevenueCard title={'Amount Pending'} warning={true} amount={92301.2} orders={13}/>
            <RevenueCard title={'Amount Processed'} warning={true} amount={213456.72}/>

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
        <div className="mt-4 mx-2">
          <div className="flex justify-between items-center my-2">
            <div>
                <SearchBar placeHolder={'Search by order ID...'} bgColor={'bg-grey-300'} />
            </div>
            <div className="flex gap-1">
              <UtilityIcons title={'Sort'}>
              <svg width="12" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z" fill="#4D4D4D"/>
</svg>

              </UtilityIcons>

              <UtilityIcons>
              <svg width="20" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"/>
</svg>

              </UtilityIcons>
            </div>
          </div>
          <TableHead orderIcon={true} feesIcon={true} />
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>
          <TableRowItem orderId={'#21312'} orderDate={'21/12/09'} orderAmount={230.2} transactionFees={312}/>

        </div>
      </div>
    </div>
  );
}
