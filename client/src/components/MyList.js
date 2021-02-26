import React from 'react'
import { Avatar,List } from 'antd';
import Fade from 'react-reveal/Fade';
function MyList({title="",data,component=""}) {
    return (
        <div style={{margin:"0 0 35px 0"}}>
        <div style={{textAlign:'left'}}>
        <Fade bottom >
          <h4  className="container-list">{title}</h4>
        </Fade>
        </div>
          <div style={{paddingTop:"10px"}}>
            <div className="container-list-line"></div>
        </div>
        <List
        style={{textAlign:'left'}}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <Fade bottom >
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.title}
              description={item.detail}
            />
          </List.Item>
            </Fade>
        )}
      />
           {component}
     </div>
    )
}

export default MyList
