import React from 'react'

const About = (props) => {
  return (
    <>
      <div className={`container my-4 bg-${props.mode==='dark'?'black':'white'}`}>
      <div className="accordion " id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header " id="headingOne">
      <button className={`accordion-button text-${props.mode==='light'?'black':'white'} bg-${props.mode==='dark'?'black':'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Word County App ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body text-${props.mode==='light'?'black':'white'} bg-${props.mode==='dark'?'black':'white'}`}>
        Word County App is a counting app made by Ankit Shrestha, which counts the numbers of characters, words and how much minutes it takes to read the specific texts yo write.
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'black':'white'} bg-${props.mode==='dark'?'black':'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What are the other features of the app ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className={`accordion-body text-${props.mode==='light'?'black':'white'} bg-${props.mode==='dark'?'black':'white'}`}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default About
