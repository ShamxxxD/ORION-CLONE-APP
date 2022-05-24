import { AboutBanner } from "../../components/Banner/Banner";
import { HistoryBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { AboutSubNavigation } from "../../components/Sub_Navigation/SubNavigation";

const History = () => {
  return (
    <>
      <AboutBanner />
      <HistoryBreadCrumb />
      <AboutSubNavigation />
      <main className="container">
        <div className="about__content--wrapper">
          <div className="about__main__content">
            <h2 className="about__title">2010 - Hiện Tại</h2>
            <div className="flex-history">
              <img
                src="https://www.orion.vn/media/3rociidh/161270682_288170809537423_7680040197863369129_n-1.png?rmode=max&"
                alt=""
              />
              <div>
                <div className="timeline-item">
                  <h2>2019</h2>
                  <p>Ra mắt Jeju Volcanic Water</p>
                  <p>
                    Không chỉ dừng lại ở ngành bánh kẹo, định hướng từng bước
                    chuyển mình thành công ty thực phẩm toàn cầu
                  </p>
                </div>

                <div className="timeline-item">
                  <h2>2017</h2>
                  <p>Mua lại Công ty nước khoáng dung nham Jeju</p>
                  <p>Khai trương Choco Pie House</p>
                </div>

                <div className="timeline-item">
                  <h2>2015</h2>
                  <p>Đổi tên Mediaplex thành Showbox</p>
                </div>
              </div>
            </div>

            <h2 className="about__title">2000 - 2009</h2>
            <div className="flex-history">
              <img
                src="https://www.orion.vn/media/semnbpt4/e6ad851f68b9b10212a329ae1e6e4f2d-1.png?rmode=max&width=440&"
                alt=""
              />
              <div>
                <div className="timeline-item">
                  <h2>2007</h2>
                  <p>Thành lập pháp nhân OIE tại Nga</p>
                </div>

                <div className="timeline-item">
                  <h2>2005</h2>
                  <p>Thành lập pháp nhân OFV tại Việt Nam</p>
                </div>

                <div className="timeline-item">
                  <h2>2004</h2>
                  <p>
                    OFL tách khỏi Pepsico và đổi tên thành Orion Snack
                    International
                  </p>
                </div>

                <div className="timeline-item">
                  <h2>2003</h2>
                  <p>Đổi tên công ty thành ORION CORPORATION</p>
                </div>

                <div className="timeline-item">
                  <h2>2001</h2>
                  <p>Thành lập tập đoàn Orion, tách khỏi tập đoàn Tongyang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
