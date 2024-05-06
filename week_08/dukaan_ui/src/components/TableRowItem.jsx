import React from 'react'

export default function TableRowItem({orderId,orderDate,orderAmount,transactionFees}) {
  return (
    <div className='grid grid-cols-4 text-xs p-2  font-medium border-b-2'>
      <div>{orderId}</div>
      <div>{orderDate}</div>
      <div className='flex justify-end'><div>{orderAmount}</div></div>
      <div className='flex justify-end'><div>{transactionFees}</div></div>
    </div>
  )
}
