import tabs from "./tabs";
import questionaire from "./components/questionaire";
import React, { useState } from 'react'


function App() {
  const [tab, setTab] = useState(tabs);

 return (
   <div className="container">
          <div>{tabs.map(({id, title, info}) => {
                  return{
                    {title};
                  };
                };
              )
            );
          };
        </div>
    </div>
  );
}

export default App;
