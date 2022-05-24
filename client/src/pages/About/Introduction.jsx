import { AboutBanner } from "../../components/Banner/Banner";
import { IntroductionBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { AboutSubNavigation } from "../../components/Sub_Navigation/SubNavigation";
import "./About.css";

const Introduction = () => {
  return (
    <>
      <AboutBanner />
      <IntroductionBreadCrumb />
      <AboutSubNavigation />

      <main className="container">
        <h2 className="about__title">Giới thiệu về Orion Việt Nam</h2>
        <div className="about__content--wrapper">
          <div>
            <div className="about__content">
              <h2 className="about__content--heading">VỀ CÔNG TY</h2>
              <p>
                Tập đoàn Orion mở văn phòng đại diện tại Thành phố Hồ Chí Minh
                vào năm 1997, tại Hà Nội vào năm 2002 và bắt đầu quảng cáo vào
                năm 1997. Năm 2005, chính thức thành lập Công ty TNHH Thực phẩm
                Orion Vina với trụ sở tại TP Hồ Chí Minh. Tháng 12 năm 2006,
                Orion khánh thành nhà máy đầu tiên tại KCN Mỹ Phước 2, tỉnh Bình
                Dương và nhà máy thứ 2 tại KCN Yên Phong, tỉnh Bắc Ninh 3 năm
                sau đó. Người tiêu dùng Việt Nam có lẽ đã quá quen thuộc với câu
                slogan
              </p>
              <p>“Orion là ChocoPie. ChocoPie là Orion”.</p>
            </div>
            <img
              className="about__content--img"
              src="https://www.orion.vn/media/rjnjr0c2/orion-food-vina-factory-project-1-1-3.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="about__content--img"
              src="https://www.orion.vn/media/qpdpkcgy/orion-food-vina-factory-project-1-1-4.png"
              alt=""
            />
            <div className="about__content">
              <h2 className="about__content--heading">TẦM NHÌN</h2>
              <p>Trở thành nhà sản xuất bánh kẹo số 1 Việt Nam</p>
              <p>
                Orion đặt mục tiêu trở thành nhà sản xuất bánh kẹo Số 1 Việt
                Nam. Hơn nữa, công ty đang cố gắng chuyển mình theo hướng doanh
                nghiệp phát triển bền vững thông qua việc minh bạch trong sản
                xuất và báo cáo kinh doanh, tích cực tham gia vào các hoạt động
                bảo vệ môi trường bằng cách giảm màu in trên bao bì, hạn chế chi
                phí quảng cáo và thay vào đó, ra sức nghiên cứu cải tiến sản
                phẩm tốt cho sức khỏe người tiêu dùng, đồng thời thực hiện các
                hoạt động trách nhiệm xã hội.
              </p>
            </div>
          </div>

          <div>
            <div className="about__content">
              <h2 className="about__content--heading">SỨ MỆNH</h2>
              <p>
                Orion luôn đặc biệt ghi nhớ rằng ngành công nghiệp thực phẩm là
                ngành công nghiệp lương tâm. Bởi bánh kẹo là thứ đi vào trong cơ
                thể con người và khi phát triển bất kỳ sản phẩm nào, Orion luôn
                nhắc nhớ rằng đó là những thứ mà chính con em chúng ta sẽ ăn. Sứ
                mệnh của Orion
                <p>
                  là sản xuất những thực phẩm đảm bảo vệ sinh an toàn thực phẩm
                  với chất lượng tốt nhất cho người tiêu dùng.
                </p>
              </p>
            </div>
            <img
              className="about__content--img"
              src="https://www.orion.vn/media/qpkdxjqi/unsplash_vbxyfxlgpjm.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="about__content--img"
              src="https://www.orion.vn/media/wjwckm10/orion-food-vina-factory-project-1-1-6.png"
              alt=""
            />
            <div className="about__content">
              <h2 className="about__content--heading">ĐẠO ĐỨC KINH DOANH</h2>
              <p>
                Orion Việt Nam cam kết không thỏa hiệp về chất lượng để đạt được
                lợi nhuận cao. Triết lý kinh doanh “Only Orion" thể hiện tinh
                thần đề cao “sự khác biệt" trong kinh doanh, bởi khác biệt chính
                là năng lực cạnh tranh chính của Orion.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Introduction;
