import React from 'react';
import {Form} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './board.css'

const Board = () => {
  return (
    <div className='board-wrapper'>
        <div className='board-nav'>
          <div  className='board-nav-left'>
          <p id="board-tittle">Project / Development</p>
          <h1>Board</h1>
          </div>
          
          <div className='board-nav-right'>
          <Icon.Share width="23px" height="23px"></Icon.Share>Share
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Icon.Filter width="23px" height="23px"></Icon.Filter>Filter
          <Icon.ThreeDots width="23px" height="23px"></Icon.ThreeDots>More

          </div>
        </div>

        <div className='board-body'>
          <div className='column'>
            <p>To do</p>
          </div>

          <div className='column'>
            <p>In progress</p>
          </div>

          <div className='column'>
            <p>Done</p>
          </div>

        </div>
        
    </div>
  )
}

export default Board