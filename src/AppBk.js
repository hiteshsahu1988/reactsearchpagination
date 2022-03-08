import { useState } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import prod1 from '../src/img/prod1.jpg';
import prod2 from '../src/img/prod2.jpg';
import prod3 from '../src/img/prod1.jpg';
import prod4 from '../src/img/prod2.jpg';
import Data from './data.json';
import './App.css';

function App() { 

  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };

  const onCheckboxClick = () => 
  {
    setChecked(!checked);    

    // if(setChecked(!checked))
    // {
    //   setChecked(checked)
    // }
    // else
    // {
    //   setChecked(!checked)
    // }
    return canBeSubmitted();
  };

  return (
    <div className="App">

     
        <div className="container p-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Search ...."  />
            <span className="input-group-text bg-primary text-light" id="basic-addon2">Search</span>
          </div>


        <div className="row product">
            <div className="col-md-3">
                <div className="card-group">
                  <div className="card">
                    <img src={prod1} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                      <div className="row w-100">
                        <div className="col-md-10"> <h5 className="card-title">Product </h5></div>
                          <div className="col-md-2 text-end">
                            <input type="checkbox" className="text-end" onChange={onCheckboxClick} />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card-group">
                  <div className="card">
                    <img src={prod2} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                      <div className="row w-100">
                        <div className="col-md-10"> <h5 className="card-title">Product 2 </h5></div>
                          <div className="col-md-2 text-end">
                            <input type="checkbox" className="text-end" onChange={onCheckboxClick} />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card-group">
                  <div className="card">
                    <img src={prod3} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                      <div className="row w-100">
                        <div className="col-md-10"> <h5 className="card-title">Product 3 </h5></div>
                          <div className="col-md-2 text-end">
                            <input type="checkbox" className="text-end" onChange={onCheckboxClick} />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card-group">
                  <div className="card">
                    <img src={prod4} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex">
                      <div className="row w-100">
                        <div className="col-md-10"> <h5 className="card-title">Product 4 </h5></div>
                          <div className="col-md-2 text-end">
                            <input type="checkbox" className="text-end" onChange={onCheckboxClick} />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
          </div>

        <div className="pagination pt-5">
          <nav aria-label="Page navigation ms-auto">
            <ul className="pagination ">
              <li className="page-item"><a className="page-link bg-primary text-light" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link bg-primary text-light" href="#">Next</a></li>
            </ul>
          </nav>  
        </div>  

        <div className="add-crop">
            <button className="btn btn-primary w-100"  disabled={isDisabled}>Add Crop</button>
        </div>
        </div>
    </div>
  );
}

export default App;
