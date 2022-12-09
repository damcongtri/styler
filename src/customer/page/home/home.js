import Banner from "./banner/banner";
import style from './home.module.scss';
import clsx from "clsx";
import { Carousel, Col, Divider, Row, Tabs } from "antd";
import C_product from "../../../component/carousel_product/c_product";
function Home() {

    return (
        <>
            <Banner />
            <div style={{ maxWidth: "1580px", margin: "0 auto" }}>
                <Row className={clsx(style.trends)}>
                    <Col lg={6} md={12} className={clsx(style.item, style.text)}>
                        <div>
                            <span>2022 winter trends</span>
                            <h3>Check New Trends</h3>
                            <p>Cardigan helvetica sriracha, portland celiac truffaut woke artisan succulents cred art party slow-carb pinterest. Migas humblebrag chicharrones everyday carry four loko der panth overlay...</p>
                        </div>

                    </Col>
                    <Col lg={6} sm={12} xs={24} span={24}>
                        <div className={clsx(style.item, style.image)}>
                            <img className={'card-img'} src='https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/09/banner-name-5-e1631633509950-500x500.jpeg'></img>
                            <div className={clsx(style.content)}>
                                <span>Women</span>
                                <h4>New Women Shoes</h4>
                                <p>16 Products</p>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6} sm={12} xs={24} span={24}>
                        <div className={clsx(style.item, style.image)}>
                            <img className={'card-img'} src='https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/09/banner-name-4-e1631633328983-500x500.jpeg'></img>
                            <div className={clsx(style.content)}>
                                <span>Women</span>
                                <h4>New Women Shoes</h4>
                                <p>16 Products</p>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6} sm={12} xs={24} span={24}>
                        <div className={clsx(style.item, style.image)}>
                            <img className={'card-img'} src='https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/09/slide-name-4-500x500.jpg'></img>
                            <div className={clsx(style.content)}>
                                <span>Women</span>
                                <h4>New Women Shoes</h4>
                                <p>16 Products</p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Divider></Divider>

                <div className={style.collections}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Winter Collections</h3>
                        <p>Cardigan helvetica sriracha, portland celiac truffaut</p>
                    </div>
                    <C_product></C_product>
                </div>
                <Divider></Divider>

                <div className={style.collections} style={{ marginTop: "120px" }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Featured Products</h3>
                        {/* <p>Cardigan helvetica sriracha, portland celiac truffaut</p> */}
                    </div>
                    <C_product number={5}></C_product>
                </div>
                <Divider></Divider>

                <div className={style.collections} style={{ minHeight: "440px" }} >
                    <div style={{ textAlign: 'center' }}>
                        <h3>This Month’s Best Sellers</h3>
                        {/* <p>Cardigan helvetica sriracha, portland celiac truffaut</p> */}

                    </div>
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        tabBarStyle={{ fontSize: '16px' }}
                        // size={'large'}
                        items={
                            [
                                {
                                    label: `Men`,
                                    key: 1,
                                    children: <C_product number={5}></C_product>,
                                },
                                {
                                    label: `Women`,
                                    key: 2,
                                    children: <C_product number={5}></C_product>,
                                },
                            ]

                        }
                    />

                </div>

            </div>
            <div className={style.comment}>
                <div className={style.c_comment}>
                    <Carousel autoplay style={{ padding: "60px 0" }}>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                        <div>
                            <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit </p>
                            <Row className={style.author} justify="center" align="middle">
                                <Col >
                                    <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/avatar-3-80x80.jpg"></img>
                                </Col>
                                <Col style={{ verticalAlign: "middle" }} className="d-flex align-items-center">

                                    <div>
                                        <h4>Jessica Brown</h4>
                                        <small>Customer</small>
                                    </div>

                                </Col>

                            </Row>

                        </div>
                    </Carousel>
                </div>
            </div>
            <div style={{ maxWidth: "1580px", margin: "0 auto" }}>
                <div className={style.collections}>
                    <div style={{ textAlign: 'center' }}>
                        <h3>Trend Products Of The Week</h3>
                        {/* <p>Cardigan helvetica sriracha, portland celiac truffaut</p> */}
                    </div>
                    <C_product number={5}></C_product>
                </div>
            </div>
        </>
    );
}

export default Home;