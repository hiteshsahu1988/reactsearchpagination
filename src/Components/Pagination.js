import React,{useState,useEffect} from "react";

const Pagination = ({showperpage, onpaginationchange, total})=>
{

	const [counter,setCounter] = useState(1);
	const [numberOfButtons,setnumberOfButtons] = useState(Math.ceil(total/showperpage));
	// for pas dynamic value
	useEffect(() =>{
		const value = showperpage * counter;
		// console.log(value-showperpage);
		// console.log(value);
		onpaginationchange(value-showperpage,value);
	}, [counter]);

	// for disable prev and next button for first and last data
	const onButtonClick = (type) =>
	{
		if(type === "prev")
		{
			if(counter === 1)
			{
				setCounter(1);
			}else{
				setCounter(counter-1);
			}

		}else if (type === "next"){
			if(numberOfButtons === counter)
			{
				setCounter(counter);
			}
			else
			{
				 setCounter(counter+1);	
			}
			
		}
	}
	return(
		<>
				<div className="pagination pt-5">
		          <nav aria-label="Page navigation ms-auto">
		            <ul className="pagination d-flex justify-content">
		              <li className={'page-item ${index+1 === counter ? "active" : null}'} ><button className="page-link bg-primary text-light"  onClick={()=> onButtonClick("prev")}>Previous</button></li>
		             {new Array(numberOfButtons).fill("").map((el,index)=> (
		             	<li className="page-item"><a className="page-link "  onClick={()=> setCounter(index+1)}>{index+1}</a></li>
		             	))}
		              
		              
		              <li className="page-item"><button className="page-link bg-primary text-light" onClick={()=> onButtonClick("next") } >Next</button></li>
		            </ul>
		          </nav>  
		        </div> 
		</>
		)
	
}

export default Pagination;