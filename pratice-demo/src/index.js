/**
 * 2017-12-07 Jifeng Cheng
 */

import React from 'react';
import reactDOM from 'react-dom';

class Content extends React.Component {
  render() {
    const content = 'Sara'
    const className = 'header'
    const isGood = false
    const title = <h1 className='title'>ScriptOJ</h1>
    const page = <div className='content'></div>

    return(
      <div>
        {page} {title}
        <h1>hello</h1>

        <h1>hello,{content}</h1>

        <h1>1+2={1+2}</h1>

        <h1>{(
          function() {
            return content
          }
          )()}
        </h1>
        
        <h1 className='className'>
          <h1>hello,React</h1>
        </h1>

        <h1>
          hello,{
            isGood ? 'Sara' : 'Tina'
          }
        </h1>
      </div>
    )
  }
}

reactDOM.render(
  <Content />,
  document.getElementById('root')
)