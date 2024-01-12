import React from 'react'
import "./Plan.css"

const Plan = () => {
  return (
    <div>
      <div className="container subspage my-5">
        <div className="plan1 plan">
            <h3 className="text-success">BASIC</h3>
            <h1 className="subsprice">$10</h1>
            <div className="des mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis, aspernatur ut aliquid rem obcaecati ex quos officia aperiam vero.</div>
            <div className="planfeature mt-4">
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>consectetur adipisicing elit. Ullam, nihil!</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>Ducimus esse vitae corrupti libero, corporis assumenda.</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>Explicabo nobis? Quaerat, alias quisquam.</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
            </div>
            <button className='btn btn-success subs'>SUBSCRIBE NOW</button>
        </div>
        <div className="plan2 plan">
            <h3 className="text-success">ADVANCED</h3>
            <h1 className="subsprice">$50</h1>
            <div className="des mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis, aspernatur ut aliquid rem obcaecati ex quos officia aperiam vero.</div>
            <div className="planfeature mt-4">
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>consectetur adipisicing elit. Ullam, nihil!</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Ducimus esse vitae corrupti libero, corporis assumenda.</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>Explicabo nobis? Quaerat, alias quisquam.</p></li>
                <li><i class="fa-solid fa-circle-xmark text-danger mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
            </div>
            <button className='btn btn-success subs'>SUBSCRIBE NOW</button>
        </div>
        <div className="plan3 plan">
            <h3 className="text-success">ELITE</h3>
            <h1 className="subsprice">$100</h1>
            <div className="des mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis, aspernatur ut aliquid rem obcaecati ex quos officia aperiam vero.</div>
            <div className="planfeature mt-4">
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>consectetur adipisicing elit. Ullam, nihil!</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Ducimus esse vitae corrupti libero, corporis assumenda.</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Explicabo nobis? Quaerat, alias quisquam.</p></li>
                <li><i class="fa-solid fa-circle-check text-success mx-2 fa-2x"></i><p>Lorem ipsum dolor sit amet.</p></li>
            </div>
            <button className='btn btn-success subs'>SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Plan
