import React from 'react'

function renderHome(){
  const myHome = (<div className="container">
                <h1 className="text-center">Welcome to the Trivia Challenge</h1>
                <br/>
                <h2 className="text-center">You will be presented with 10 True or False questions.</h2>
                <h2 className="text-center">Can you score 100%?</h2>
                <br/>
                <br/>
                <button className="btn btn-primary center-block">BEGIN</button>
              </div>);
  return myHome;
}

function Home (props) {
  return (
    <div>
      {renderHome()}
    </div>
  )
}

export default Home
