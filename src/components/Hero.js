import React, { useState } from 'react'

const Hero = (props) => {
    const [text, setText] = useState("");

    const clickHandle = (e) =>{
        setText(e.target.value);
    }

    const handleUpp = ()=>{
        const upp = text.toUpperCase();
        setText(upp);
    }

    const handleClear = ()=>{
        setText("");
    }

    const handleLow = ()=>{
        const low = text.toLowerCase();
        setText(low);
    }

  return (
    <>
      <div>
        <h1 className='text-center mt-4'>{props.herotitle}</h1>
        <h4 className='text-center'>{props.slogan}</h4>
      </div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-5'>
                <textarea rows={10} cols={60} value={text} placeholder=" Write the texts you want to count" onChange={clickHandle} className="p-2">
                </textarea>

                <div>
                <button type="button" className="btn btn-primary" onClick={handleUpp}>To Uppercase</button>
                <button type="button" className="btn btn-warning mx-2" onClick={handleLow}>To Lowercase</button>
                <button type="button" className="btn btn-danger" onClick={handleClear}>Clear Text</button>
                </div>

                
            </div>

            <div className='col-md-6 mt-5'>
                <h2 className='mb-5 font-weight-bold text-underline'><u>Your Text Details</u></h2>
                <h4>{text.split(" ").join("").length} Character & {text.trim().split(/\s+/).length} Words</h4>
                <h4>{text.length>0?0.008* text.split(" ").length:'0.000'} Minutes Read</h4>
            </div>


        </div>

      </div>
    </>
  )
}

Hero.defaultProps = {
    herotitle: "Enter the hero title here",
    slogan: "Enter the slogan here"
}

export default Hero
