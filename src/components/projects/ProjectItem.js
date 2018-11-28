import React from 'react'
export default props => {
  if (props.left) {
    return (
      <li className="left-grid">
        <div>
          <div className="content">
            <span className="left">{props.project.project_id}</span>
            <h1>{props.project.project_name}</h1>
            <p>{props.project.project_desc}</p>
            <i className="status">{props.project.project_status}</i> 
          </div>
        </div>
        <div
          style={{
            position: 'relative'
          }}
        >
          <img alt="" src={props.project.project_image} className="left-img" />
        </div>
      </li>
    )
  } else {
    return (
      <li className="right-grid">
        <div
          style={{
            position: 'relative'
          }}
        >
          <img alt="" src={props.project.project_image} className="right-img" />
        </div>
        <div className="content">
          <span className="right">{props.project.project_id}</span>
          <h1>{props.project.project_name}</h1>
          <p>{props.project.project_desc}</p>
          <i className="status">{props.project.project_status}</i>
        </div>
      </li>
    )
  }
}
