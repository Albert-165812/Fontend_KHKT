import React from "react";
import "./Footer.css"
import {
  FaSchool,
  FaStreetView,
  FaPhoneVolume,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="FOOTER">
      <div className="row">
        <span className="FOOTER_title">Thông tin liên hệ</span>
        <div className="col">
          <div className="FOOTER_content">
            <div className="FOOTER_contact-box-change">
              <span className="FOOTER_content-box">
                <i className="FOOTER_icon">
                  <FaSchool />
                </i>
                <p className="FOOTER_text">
                  Trường đại học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh
                </p>
              </span>
              <span className="FOOTER_content-box">
                <i className="FOOTER_icon ">
                  <FaStreetView />
                </i>
                <p className="FOOTER_text">
                  01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="FOOTER_contact">
            <div className="FOOTER_contact-box-change">
              <span className="FOOTER_content-box">
                <i className="FOOTER_icon">
                  <FaPhoneVolume />
                </i>
                <p className="FOOTER_text">0901****</p>
              </span>
              <span className="FOOTER_content-box">
                <i className="FOOTER_icon">
                  <FaEnvelope />
                </i>
                <p className="FOOTER_text">support@hcmute.vn</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
