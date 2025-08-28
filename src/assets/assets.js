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
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import reasons from "./reasons.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

import project1_before from "./ccq8_bed2.jpg";
import project1_after from "./ccq8_kitchen.jpg";
import project2_before from "./project2_before.jpg";
import project2_after from "./project2_after.jpg";

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
  project_img_2,
  project_img_3,
  project_img_4,
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
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
    before: project1_before,
    after: project1_after,
    desc: "Cải tạo căn hộ cũ thành không gian sống hiện đại, tối ưu ánh sáng và công năng.",
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
    before: project2_before,
    after: project2_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
    before: project1_before,
    after: project1_after,
    desc: "Cải tạo căn hộ cũ thành không gian sống hiện đại, tối ưu ánh sáng và công năng.",
  },
  {
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
    before: project2_before,
    after: project2_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
    before: project1_before,
    after: project1_after,
    desc: "Cải tạo căn hộ cũ thành không gian sống hiện đại, tối ưu ánh sáng và công năng.",
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
    before: project2_before,
    after: project2_after,
    desc: "Biến đổi nhà phố truyền thống thành tổ ấm tiện nghi, sang trọng.",
  },
];

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

export const SERVICES = [
  {
    title: "Lên kế hoạch & tư vấn",
    desc: "Định hướng chi phí, vật liệu và tiến độ rõ ràng, giúp khách hàng chủ động trong quá trình cải tạo.",
    icon: icon_service_plan, // hoặc đường dẫn svg tương ứng bạn có
  },
  {
    title: "Cải tạo & xây dựng không gian",
    desc: "Tối ưu diện tích, bố trí lại công năng và thay đổi tổng thể để ngôi nhà trở nên tiện ích và hiện đại hơn.",
    icon: icon_service_build,
  },
  {
    title: "Thiết kế nội thất",
    desc: "Đưa ra giải pháp thiết kế hài hòa, phù hợp với nhu cầu và ngân sách của từng khách hàng.",
    icon: icon_service_design,
  },
  {
    title: "Thi công & lắp đặt nội thất",
    desc: "Đảm bảo chất lượng, tiến độ và sự chỉn chu trong từng chi tiết thi công.",
    icon: icon_service_install,
  },
];
