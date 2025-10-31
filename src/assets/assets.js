import logo from "./logo.png";
import logo_no_text from "./logo_no_text.png";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.jpg";
import brand_img from "./brand_img.png";
import reasons from "./reasons.png";

import project_img_1 from "./project1.png";
import project1_before from "./project1_before.png";
import project1_after from "./project1_after.png";

import project_img_2 from "./project2.png";
import project2_before from "./project2_before.png";
import project2_after from "./project2_after.png";

import project_img_3 from "./project3.png";
import project3_before from "./project3_before.png";
import project3_after from "./project3_after.png";

import project_img_4 from "./project4.png";
import project4_before from "./project4_before.png";
import project4_after from "./project4_after.png";

import project_img_5 from "./project5.png";
import project5_before from "./project5_before.png";
import project5_after from "./project5_after.png";

import project_img_6 from "./project6.png";
import project6_before from "./project6_before.png";
import project6_after from "./project6_after.png";

import about_us from "./about_us.jpg";
import founder from "./founder.png";
import icon_service_plan from "./service_plan.png";
import icon_service_build from "./service_build.png";
import icon_service_design from "./service_design.png";
import icon_service_install from "./service_install.png";

export const assets = {
  logo,
  logo_no_text,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  about_us,
  reasons,
  left_arrow,
  right_arrow,
  founder,
  icon_service_plan,
  icon_service_build,
  icon_service_design,
  icon_service_install,
};

export const projectsData = [
  {
    title: "Nhà phố",
    price: "Bếp",
    location: "Cải tạo không gian",
    image: project_img_3,
    before: project3_before,
    after: project3_after,
    desc: "Cải tạo căn hộ cũ thành không gian sống hiện đại, tối ưu ánh sáng và công năng.",
  },
  {
    title: "Căn hộ 2PN",
    price: "Phòng ngủ",
    location: "Tối ưu tiện nghi",
    image: project_img_1,
    before: project1_before,
    after: project1_after,
    desc: "Cải tạo căn hộ cũ thành không gian sống hiện đại, tối ưu ánh sáng và công năng.",
  },
  {
    title: "Nhà phố",
    price: "Phòng ngủ",
    location: "Tối ưu tiện nghi",
    image: project_img_2,
    before: project2_before,
    after: project2_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
  
  {
    title: "Nhà cấp 4",
    price: "Cầu thang",
    location: "Cải tạo không gian",
    image: project_img_6,
    before: project6_before,
    after: project6_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
  {
    title: "Nhà phố",
    price: "Phòng khách",
    location: "Cải tạo không gian",
    image: project_img_4,
    before: project4_before,
    after: project4_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
   {
    title: "Nhà phố",
    price: "Cầu thang",
    location: "Cải tạo không gian",
    image: project_img_5,
    before: project5_before,
    after: project5_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },

];
export const REASONS = [
    {
      title: "Kế hoạch rõ ràng",
      desc: "Tư vấn đúng nhu cầu.",
    },
    {
      title: "Chi phí minh bạch",
      desc: "Không lo phát sinh.",
    },
    {
      title: "Thi công chuẩn tiến độ",
      desc: "Giám sát & báo cáo <span class='break-last'> định kỳ. </span>",
    },
    {
      title: "Bàn giao an tâm",
      desc: "Nghiệm thu & bảo hành <span class='break-last'> rõ ràng. </span>",
    },
  ];


export const SERVICES = [
  {
    title: "Lên kế hoạch & tư vấn",
    desc: "Định hướng chi phí, vật liệu và tiến độ rõ ràng, giúp khách hàng chủ động trong quá trình cải tạo.",
    icon: icon_service_plan,
  },
  {
    title: "Cải tạo & xây dựng không gian",
    desc: "Tối ưu diện tích, bố trí lại công năng  và thay đổi tổng thể để ngôi nhà trở nên tiện ích và hiện đại hơn.",
    icon: icon_service_build,
  },
  {
    title: "Thiết kế nội thất",
    desc: "Đưa ra giải pháp thiết kế hài hòa,phù hợp với nhu cầu và ngân sách của từng khách hàng.",
    icon: icon_service_design,
  },
  {
    title: "Thi công & lắp đặt nội thất",
    desc: "Đảm bảo chất lượng, tiến độ và  sự chỉn chu trong từng chi tiết thi công.",
    icon: icon_service_install,
  },
];
