import React, { useState } from 'react'
import "./Box4.css"

const Box4 = () => {
    const [iurl, setiurl] = useState("https://housing-images.n7net.in/91aba65c/efa11d20de9f5c74a737bde83488b4c4/v0/fs.jpeg")
    const [color1, setcolor1] = useState("btn btn-danger");
    const [color2, setcolor2] = useState("btn btn-success");
    const [color3, setcolor3] = useState("btn btn-success");
    const onClick = (s,id) => {
        setiurl(s);
        if(id===1){
            setcolor1("btn btn-danger");
            setcolor2("btn btn-success");
            setcolor3("btn btn-success");
        }
        if(id===2){
            setcolor1("btn btn-success");
            setcolor2("btn btn-danger");
            setcolor3("btn btn-success");
        }
        if(id===3){
            setcolor1("btn btn-success");
            setcolor2("btn btn-success");
            setcolor3("btn btn-danger");
        }
    }

    return (
        <div>
            <div className="box4">
                <h2 className='mx-2 text-success'>Floor Plan</h2>
                <div className="floorplantypes d-flex">
                    <button className={color1} onClick={() => onClick("https://housing-images.n7net.in/91aba65c/efa11d20de9f5c74a737bde83488b4c4/v0/fs.jpeg",1)}>2BHK</button>
                    <button className={color2} onClick={() => onClick("https://housing-images.n7net.in/91aba65c/7cd00d7998a1b9aca3ebb6a9d6a0fbd7/v0/fs.jpeg",2)}>3BHK</button>
                    <button className={color3} onClick={() => onClick("https://housing-images.n7net.in/91aba65c/a02e574453b1075315737301500b6c51/v0/fs.jpeg",3)}>4BHK</button>

                </div>
                <div className="floorplanimages">
                    <img src={iurl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Box4
