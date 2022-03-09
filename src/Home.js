import React, { useState } from "react";
import Pagination from './Components/Pagination';
// import sdata from './sdata.json';

function Home(props)
{

	const sdata = [
	{
		name : "RC 125",
		img:'./img/rc125.jpg',
	},

	{
		name : "Meteor 350",
		img:'./img/meteor3502.jpg'
	},

	{
		name : "Meteor 350",
		img:'./img/meteor350.jpg'
	},
	{
		name : "Meteor",
		img:'./img/meteor_ri.jpg'
	},
	{
		name : "Ktm 250",
		img :'./img/ktm-250.jpg'
	},

	{
		name : "Adventure 390",
		img:'./img/adventure-390.jpg'
	},

	{
		name  : "adventure 250",
		img :'./img/250-adventure.jpg'
	},
	{
		name : "Duke 125",
		img :'./img/125-duke.jpg'
	},

	{
		name : "Meteor 350",
		img:'./img/meteor3502.jpg'
	},

	{
		name : "Meteor 350",
		img:'./img/meteor350.jpg'
	},
]
  
  
   
    // make sure initial state is known and false
  const [boxes, setBoxes] = useState(new Array(props.recordsNo).fill(false));
// index - the index of the checkbox

  function handleChange(index) {
    const newState = [...boxes];
    newState[index] = !newState[index];
    setBoxes(newState);
  }
  
  function isDisabled() {
    const len = boxes.filter((box) => box).length;
    return len === 0 ;
  }

  // records will probably come through props => generate here an example
  const records = [...Array(props.recordsNo).keys()];
  
    // set input tag value for search
	const changehandler = (e) =>
	{
		settext(e.target.value);
	}
    

	const [text,settext] = useState('');

	// show per page value
	 const [showperpage,setShowperpage] = useState(4);

	 const [pagenation,setpaginatin] = useState({
	 	start : 0,
	 	end : showperpage,
	 });
	

	 const onpaginationchange = (start,end) =>
	 {
	 	setpaginatin({start:start,end:end})
	 }




	
  
  

return(

	<>

		<div className="container p-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Search ...."  onChange={changehandler} />
            
            
          </div>
        <div className="row product">

        {sdata.filter((val)=>{
        	 if(text=="")
        	 {
        	 	return val;
        	 }
        	 else if(val.name.toLowerCase().startsWith(text.toLowerCase()))
        	 {
				return val;
        	 }

        }).slice(pagenation.start,pagenation.end).map((item,i)=>(
		
	        <div className="col-md-3">
                <div className="card-group">
                  <div className="card">
                    <img src={item.img} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                      <div className="row w-100">
                        <div className="col-md-10"> <h5 className="card-title">{item.name} </h5></div>
                          <div className="col-md-2 text-end">
                          	
                            <input  key={i} type="checkbox" onChange={() => handleChange(i)}  className="text-end ids"  />

                          </div>
                      </div> 
                    </div>
                  </div>
                </div>
            </div>


		))}

	          </div>
		          <Pagination 
		          	showperpage={showperpage}
		          	onpaginationchange={onpaginationchange}
		          	total={sdata.length}
		          	/>


			        <div className="add-crop">
			            <button className="btn btn-primary w-100" disabled={isDisabled()} >Add Crop</button>
			        </div>
	        </div>
		 </>


	)	
}


export default Home;


