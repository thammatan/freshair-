import './App.css';
import { Layout } from 'antd';
import { Row, Col,Button,Modal } from 'antd';
import MyContainer from './components/MyContainer'
import Contact from './components/Contact'
import MyList from './components/MyList'

import React, { useState } from 'react';

const { Header, Footer, Content } = Layout;
const list1 = [
  {
    title: 'หมุนเวียนอากาศสะอาดผ่าน HEPA FILTER',
    detail: 'ประสิทธิภาพการกรอง 99.999% on 0.3 micron',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99_COVID-19_%E0%B8%AB%E0%B8%A1%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94_go7ux7.png'
  },
  {
    title: 'ติดตั้ง HEPA FILTER Class H14 EN 1822:2009',
    detail: 'ผ่านการทดสอบ Installation Leak Test (ISO14644-3(2005))',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon%202/settings_fe7xep.png'
  },
  {
    title: 'ออกแบบสอดคล้องตามมาตรฐาน',
    detail: 'การออกแบบสอดคล้องตามมาตรฐาน กองแบบแผนกระทรวงสาธารณสุข เอกสารเลขที่ ก.45/เม.ย./63',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon/%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A5%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99_hxbvqe.png'
  },
  {
    title: 'ปริมาณลมสูง 1,000 CFM',
    detail: 'อัตราหมุนเวียนอากาศ 50 ACH (ห้องขนาดมาตรฐาน 3m x 4m x 2.8m)',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%A5%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B8%87_n6sru1.png'
  },
  {
    title: 'เสียงเงียบ',
    detail: 'เสียงเบา ไม่เกิน 10 dB (เทียบกับขณะตอนปิดเครื่อง)',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon/%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B5%E0%B8%A2%E0%B8%9A_ukargk.png'
  },
  {
    title: 'กรองฝุ่น PM 2.5',
    detail: 'ป้องกันวัณโรค แบคทีเรีย เชื้อไวรัส Covid-19',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_48,q_auto/tectony/fresh%20air/icon/pm_2.5_plfk8q.png'
  },
];
const list2 = [
  {
    title: 'สร้างห้องความดันบวก',
    detail: '',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_32,q_auto/tectony/fresh%20air/icon/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B8%9A%E0%B8%A7%E0%B8%81_ad8mmt.png'
  },
  {
    title: 'เติมอากาศสะอาดผ่าน HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน ที่ประสิทธิภาพ 99.99%',
    detail: '',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_32,q_auto/tectony/fresh%20air/icon/%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99_HEPA_FILTER_mpudhq.png'
  },
  {
    title: 'ป้องกัน PM 2.5 และมลพิษจากภายนอก',
    detail: '',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_32,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99_PM_2.5_%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%A5%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%81_dsjogq.png'
  },
  {
    title: 'ปริมาณลมสูงสุด 210 CMH',
    detail: '',
    image: 'https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_32,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%A5%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%94_210_CMH_h1sd16.png'
  }
];
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Layout className="App-layout" >
      <Header className="App-header" >
        <img
          style={{width:80,height:80}}
          src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/Logo_air_ql74ln.psd"
          alt="logo">
        </img>
      </Header>
      <Content className="App-content" style={{padding:24}}>
        <MyContainer title="Fresh Air Solution" detail="อากาศสะอาดที่คุณสร้างเองได้"
          component={<div>
            <iframe id="fcc02cf4-6b4b-47ba-8359-484940a432d5" src="https://www.vectary.com/viewer/v1/?model=a76a61a2-e2a8-49d8-9087-76c470787299&amp;env=studio3&amp;turntable=7" 
            frameborder="0" 
            width="100%" 
            height="480">
            </iframe>
          </div>}
        />
        <MyContainer line={true} title="HEPA CIRCULATION UNIT: HCU" detail="เครื่องกรองอากาศควบคุมเชื้อ" subdetail="สะอาดปลอดภัย หายใจได้เต็มปอด"
          component={<div>
            <img style={{marginTop:24, width: "100%"}}
              src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/huc_preview_yuyfzk.png"
              alt="room"
            >
            </img>
            <Row style={{ marginTop: "70px",padding:24 }} gutter={[32, 32]} justify="center">
              <Col flex="225px">
                <img style={{ width: "100%" }}
                  src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/hcu_profduct_scscko.png"
                  alt="air"
                >
                </img>
              </Col>
              <Col flex="auto" style={{ marginLeft: "70px" }}>
                <MyList title="เครื่องกรองอากาศควบคุมเชื้อ" data={list1} />
              </Col>
            </Row>
            <img style={{ width: "100%" }}
              src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/hepa_u3z8rg.png"
              alt="HCU"
            >
            </img>
          </div>}
        />
        <MyContainer title="FRESH AIR UNIT" position="left"
          component={
            <img style={{ width: "100%" }}
              src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/fresh_air_preview_wva0nk.png"
              alt="FRESH AIR UNIT"
            >
            </img>
          } />
        <MyList title="Fresh Air Unit เติมอากาศสะอาดในบ้านเพื่อคนที่คุณรัก" data={list2}
          component={
            <img style={{marginTop:24, width: "100%" }}
              src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/fresh_air_system_ur6e0r.png"
              alt="HEPA Filter"
            >
            </img>} />

        <MyContainer titleWeight={500} title="เติมอากาศสะอาดผ่าน Pre Filter และ HEPA Filter"
          component={
            <div>
              <div style={{margin:"35px 0 35px 0", textAlign: 'left' }}>
                <p>・ HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน ที่ประสิทธิภาพ 99.99%</p>
                <p>・ สามารถป้องกัน PM 2.5 และมลพิษจากภายนอกได้</p>
                <p>・ สามารถป้องกันการปนเปื้อนของเชื้อไวรัส โควิด-19 จากภายนอกได้</p>
              </div>
              <div>
                <img style={{ width: "100%" }}
                  src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/parimanrom_nzxpsu.png"
                  alt="area"
                >
                </img>
                <p style={{marginTop:24}}>4.5 ACH ที่ 16 ตร.ม. - 1 ACH ที่ 64 ตร.ม. ที่ความสูงเพดาน 2.7 ม.</p>
              </div>
            </div>
          }
        />

        <MyContainer titleWeight={500} title="ปกป้องห้องสำคัญด้วย Positive Pressure"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/positive_pressure2_oal38x.png"
                alt="Positive Pressure"
              >
              </img>
              <p style={{marginTop:35}}><b>หลักการ Positive Pressure</b> คือ การทำให้ภายในห้องมีความดันอากาศมากกว่าภายนอกห้อง ความดันในห้องที่มากกว่าจะป้องกันการรั่วไหลของของอากาศภายนอกผ่านรอยรั่วของห้อง เช่น ร่องประตู,ขอบหน้าต่าง,ขอบฝ้าเพดาน และรอยร้าวของผนัง เป็นต้น</p>
            </div>
          } />
        <MyContainer titleWeight={500} title="Smart Infection Control System"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Image_from_iOS_1_1_1_runihv.gif"
                alt="Smart Infection Control System"
              >
              </img>
            </div>
          } />
        <MyContainer titleWeight={500} title="HEPA Circulation Unit" position="left"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left', fontSize: "15px" }}>
              <p style={{ textIndent: "40px" }}>
                ระบบสร้างอากาศบริสุทธิ์สำหรับทันตกรรม การออกแบบสอดคล้องกับคำแนะนำตามมาตรฐานกองแบบแผน กระทรวงสาธารณสุข ตามเอกสารเลขที่ ก.45/เม.ย./63 โดยมุ่งเน้นไปที่ส่วนสำคัญ 2 ส่วนหลักคือ
              </p>
              <p style={{ textIndent: "40px" }}>
                1. เติมอากาศบริสุทธิ์จากภายนอก ซึ่งผ่านการกรองด้วย <span style={{ color: "#3385e7" }}>HEPA Filter class H13</span> เข้ามาภายในห้อง <span style={{ color: "#3385e7" }}>3 ACH</span>
              </p>
              <p style={{ textIndent: "40px" }}>
                2. หมุนเวียนอากาศภายในห้องให้บริสุทธิ์ โดยกรองผ่าน <span style={{ color: "#3385e7" }}>HEPA Filter class H14 : EN1822 (2009)</span> เมื่อขณะทำงาน ระบบในห้องสามารถสร้างอากาศสะอาดอยู่ที่ <span style={{ color: "#3385e7" }}>21 ACH</span> และเมื่อเสร็จงาน การทำงานช่วงพักห้องระบบสามารถสร้างอากาศสะอาดสูงสุดที่ <span style={{ color: "#3385e7" }}>50 ACH</span> ด้วยการออกแบบระบบนี้ จึงสามารถทำความสะอาดในห้องให้สะอาด <span style={{ color: "#3385e7" }}>99.9%</span> ภายในระยะเวลา <span style={{ color: "#3385e7" }}>8 นาที</span> ซึ่งลดระยะเวลาการพักห้อง และสามารถรับเคสต่อไปได้เร็วขึ้น
              </p>
              <div style={{ marginTop: 24, borderLeft: "solid #3385e7", borderWidth: "2px", paddingLeft: "15px" }}>
                <h4 style={{ fontWeight: 500, fontSize: 18 }}>8 MINS FOR REMOVAL WITH 99.9% EFFICIENCY</h4>
                <h4 style={{ fontWeight: 500, fontSize: 18 }}>(50 ACH @ standard Room size 3(w)x4(l)x2.8(h))</h4>
              </div>
            </div>
          } />
        <MyContainer
          titleWeight={500}
          title="ตัวอย่างการติดตั้ง"
          description="Cafe"
          descriptionWeight={500}
          descriptionPosition="left"
          component={
            <div style={{ margin: "35px 0 0 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Cafe_lrjf0t.png"
                alt="Cafe"
              >
              </img>
            </div>
          } />
        <MyContainer descriptionWeight={500} description="Classroom" descriptionPosition="right"
          component={
            <div style={{ margin: "35px 0 0 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Classroom_e0dn8p.png"
                alt="Classroom"
              >
              </img>
            </div>
          } />
        <MyContainer descriptionWeight={500} description="Fitness" descriptionPosition="left"
          component={
            <div style={{ margin: "35px 0 0 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Fitness3_gglzv1.png"
                alt="Fitness"
              >
              </img>
            </div>
          } />
        <MyContainer descriptionWeight={500} description="Office" descriptionPosition="right"
          component={
            <div style={{ margin: "35px 0 0 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Office_owlopv.png"
                alt="Office"
              >
              </img>
            </div>
          } />
        <MyContainer descriptionWeight={500} description="คลินิกทันตกรรม โรงพยาบาลอู่ทอง" descriptionPosition="left"
          component={
            <div style={{ margin: "35px 0 0 0", textAlign: 'left' }}>
              <img style={{  margin: "0 0 24px 0",width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/review_product_nhf94f.png"
                alt="คลินิกทันตกรรม โรงพยาบาลอู่ทอง1"
              >
              </img>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/review_300_ycxikr.png"
                alt="คลินิกทันตกรรม โรงพยาบาลอู่ทอง2"
              >
              </img>
            </div>
          } />
          <br/>
        <MyContainer title="Fresh Air Solution"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/dark_kcrs5n.png"
                alt="Fresh Air Solution"
              >
              </img>
            </div>
          } />
           <Modal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <Contact visible={isModalVisible} setVisible={setIsModalVisible}/>
          </Modal>
      
      </Content>
      <Footer className="App-footer">
        <MyContainer titleWeight={500} title="Our Partner"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left' }}>
              <img style={{ width: "100" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/dark2_xvo1ep.png"
                alt="Our Partner"
              >
              </img>
            </div>
          } />
        <MyContainer titleWeight={500} title="Our Client"
          component={
            <div style={{ margin: "35px 0 35px 0", textAlign: 'left' }}>
              <img style={{ width: "100%" }}
                src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_1920,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/2png_omx0qp.png"
                alt="Our Client"
              >
              </img>
            </div>
          } />
        
        <a href="https://line.me/R/ti/p/%40569eehcb"> <Button size='large' shape="round" style={{backgroundColor:"#4ac911",color:'white',fontWeight:700}} type="text">สอบถามเพิ่มเติม LINE</Button></a>
        <br/>
        <Button onClick={showModal} size='large' shape="round" style={{backgroundColor:"black",color:'white',fontWeight:700}} type="text">CONTACT US</Button>
        <div style={{height:150}}>

        </div>
      </Footer>
    </Layout>
  );
}

export default App;
