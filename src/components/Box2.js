import React from 'react'
import "./Box2.css"
import OverviewCard from './OverviewCard'


const Box2 = () => {
  return (
    <div>
        <div className="summary">
            <h3 className='text-success mx-2'>Project Summary</h3>
            <div className="mx-2 overviewcards d-flex">
                <OverviewCard image="https://vectorified.com/images/land-icon-25.png" text="Size: 1268.00 sq.ft. - 2124.00 sq.ft."/>
                <OverviewCard image="https://www.freeiconspng.com/uploads/building-icon-24.jpg" text="Project Size: 1 Building - 408 units"/>
                <OverviewCard image="https://cdn.iconscout.com/icon/premium/png-256-thumb/product-release-date-3-1146765.png" text="Launch Date: Sep, 2023"/>
                <OverviewCard image="https://thumbs.dreamstime.com/z/indian-rupee-icon-symbol-isolated-white-background-vector-money-illustration-140342047.jpg" text="Avg.Price: $12.61 K/sq.ft"/>
                <OverviewCard image="https://static.vecteezy.com/system/resources/previews/000/384/079/original/key-icon-on-yellow-background-vector.jpg" text="Possession Date: Dec, 2027"/>
            </div>
        </div>
    </div>
  )
}

export default Box2
