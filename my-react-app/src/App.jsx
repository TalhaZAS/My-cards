import React from 'react';
import NearbyComponent from './Component/Nearby';
import PopularDeal from './Component/PopularDeal';
import HiddenGem from './Component/HiddenGem';
import NewDeal from './Component/NewDeal';
import { nearbyData,popularData,newdealData,hiddengemData} from './Component/Data';
 
const App = () => {
 
  return (
    <div className="container mx-auto p-4 ">
      <div className='mb-4 mt-3'>
      <button className=" float-right px-5 py-3  mr-3 inset-y-0 bg-red-400 text-white rounded-lg">
          Vew All
      </button>
      <h2 className="text-3xl font-bold  text-red-400  ml-4 "> Nearby Offer   </h2>
      </div>
  
      <NearbyComponent data={nearbyData} /><br/><br/>
        
      <div className='mb-4 mt-3'>
      <button className=" float-right px-5 py-3  mr-3 inset-y-0 bg-red-400 text-white rounded-lg">
          Vew All
      </button>
      <h2 className="text-3xl font-bold  text-red-400  ml-4 ">Popular Deal</h2>
      </div>
      <PopularDeal data={popularData} /><br/><br/>

      <div className='mb-4 mt-3'>
      <button className=" float-right px-5 py-3  mr-4 inset-y-0 bg-red-400 text-white rounded-lg">
          Vew All
      </button>
      <h2 className="text-3xl font-bold  text-red-400  ml-4 "> New Deal </h2>
      </div>
      <NewDeal data={newdealData} /><br/><br/>

      <div className='mb-4 mt-3'>
      <button className=" float-right px-5 py-3  mr-4 inset-y-0 bg-red-400 text-white rounded-lg">
          Vew All
      </button>
      <h2 className="text-3xl font-bold  text-red-400  ml-4 "> Hidden Gem </h2>
      </div>
      <HiddenGem data={hiddengemData} /><br/><br/>
    </div>
    
  );
};

export default App;


